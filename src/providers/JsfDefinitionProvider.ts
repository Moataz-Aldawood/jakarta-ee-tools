import * as vscode from 'vscode';
import { getCompositeNamespaces, resolveCompositeComponent } from './namespaceParser';
import { JSF_CATALOG } from './jsfCatalog';
import { getActiveThirdPartyCatalogs } from './ThirdPartyCatalogs';

export class JsfDefinitionProvider implements vscode.DefinitionProvider {
    
    public async provideDefinition(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken
    ): Promise<vscode.Definition | vscode.LocationLink[] | null> {
        
        const lineText = document.lineAt(position.line).text;
        
        // Phase 2: Template and src navigation
        const templateRegex = /(template|src)\s*=\s*['"]([^'"]+)['"]/g;
        let templateMatch;
        while ((templateMatch = templateRegex.exec(lineText)) !== null) {
            const attrValue = templateMatch[2];
            const attrStart = templateMatch.index + templateMatch[0].indexOf(attrValue);
            const attrEnd = attrStart + attrValue.length;
            
            if (position.character >= attrStart && position.character <= attrEnd) {
                const range = new vscode.Range(position.line, attrStart, position.line, attrEnd);
                return this.findWebFile(attrValue, range);
            }
        }
        
        // Phase 2: Resource navigation
        const resourceRegex = /#\{resource\['([^']+)'\]\}|#\{resource\["([^"]+)"\]\}/g;
        let resourceMatch;
        while ((resourceMatch = resourceRegex.exec(lineText)) !== null) {
            const resourcePath = resourceMatch[1] || resourceMatch[2];
            const attrStart = resourceMatch.index + resourceMatch[0].indexOf(resourcePath);
            const attrEnd = attrStart + resourcePath.length;
            
            if (position.character >= attrStart && position.character <= attrEnd) {
                const range = new vscode.Range(position.line, attrStart, position.line, attrEnd);
                return this.findResourceFile(resourcePath, range);
            }
        }

        // Phase 5: Custom Composite Components and Standard Tags
        const docText = document.getText();
        const namespaces = getCompositeNamespaces(docText);
        const activeCatalogs = { ...JSF_CATALOG, ...getActiveThirdPartyCatalogs(docText) };
        const enableWebLinks = vscode.workspace.getConfiguration('jakartaFaces').get('enableWebLinks', true);
        
        // Find if we are inside a tag
        const tagRegex = /<([a-zA-Z0-9_-]+):([a-zA-Z0-9_-]+)\s*([^>]*)>/g;
        let tagMatch;
        while ((tagMatch = tagRegex.exec(lineText)) !== null) {
            const prefix = tagMatch[1];
            const componentName = tagMatch[2];
            const tagStart = tagMatch.index;
            const tagEnd = tagMatch.index + tagMatch[0].length;

            if (position.character >= tagStart && position.character <= tagEnd) {
                // Check if it's a Custom Composite Component
                const folder = namespaces[prefix];
                if (folder) {
                    const componentUri = await resolveCompositeComponent(folder, componentName);
                    if (componentUri) {
                        // Check if clicking on the tag name itself
                        const nameStart = tagStart + 1; // skip <
                        const nameEnd = nameStart + prefix.length + 1 + componentName.length; // prefix:componentName
                        
                        if (position.character >= nameStart && position.character <= nameEnd) {
                            return [{
                                originSelectionRange: new vscode.Range(position.line, nameStart, position.line, nameEnd),
                                targetUri: componentUri,
                                targetRange: new vscode.Range(0, 0, 0, 0)
                            }];
                        }
                        
                        // Check if clicking on an attribute inside this tag
                        const attrRegex = /([a-zA-Z0-9_-]+)\s*=/g;
                        const attrsText = tagMatch[3];
                        const attrsStartOffset = tagStart + tagMatch[0].length - 1 - attrsText.length;
                        
                        let attrMatch;
                        while ((attrMatch = attrRegex.exec(attrsText)) !== null) {
                            const attrName = attrMatch[1];
                            const attrStart = attrsStartOffset + attrMatch.index;
                            const attrEnd = attrStart + attrName.length;
                            
                            if (position.character >= attrStart && position.character <= attrEnd) {
                                // Find <cc:attribute name="attrName"> inside the component file
                                const compContent = await this.readFile(componentUri);
                                const ccAttrRegex = new RegExp(`<[a-zA-Z0-9_-]+:attribute\\s+[^>]*name=["']${attrName}["']`);
                                const loc = this.createLocation(componentUri, compContent, ccAttrRegex);
                                if (loc) {
                                    return [{
                                        originSelectionRange: new vscode.Range(position.line, attrStart, position.line, attrEnd),
                                        targetUri: loc.uri,
                                        targetRange: loc.range
                                    }];
                                }
                            }
                        }
                    }
                }

                // Standard and 3rd-party tags logic (if setting is enabled)
                if (enableWebLinks) {
                    const fullTagName = `${prefix}:${componentName}`;
                    if (activeCatalogs[fullTagName]) {
                        const nameStart = tagStart + 1; // skip <
                        const nameEnd = nameStart + prefix.length + 1 + componentName.length;
                        
                        let docUrl = '';
                        if (prefix === 'p') {
                            docUrl = `https://primefaces.github.io/primefaces/15_0_0/#/components/${componentName.toLowerCase()}`;
                        } else if (prefix === 'o') {
                            docUrl = `https://omnifaces.org/docs/vdldoc/5.3/o/${componentName}.html`;
                        } else if (prefix === 'b') {
                            docUrl = `https://showcase.bootsfaces.net/`;
                        } else {
                            docUrl = `https://jakarta.ee/specifications/faces/4.1/vdldoc/${prefix}/${componentName}.html`;
                        }

                        // Check if clicking on the tag name itself
                        if (position.character >= nameStart && position.character <= nameEnd) {
                            vscode.env.openExternal(vscode.Uri.parse(docUrl));
                            // Hack: Return current location to prevent VS Code falling back to HTML DefinitionProvider (CSS files)
                            return [new vscode.Location(document.uri, position)];
                        }
                        
                        // Check if clicking on an attribute inside this tag
                        const attrRegex = /([a-zA-Z0-9_-]+)\s*=/g;
                        const attrsText = tagMatch[3];
                        const attrsStartOffset = tagStart + tagMatch[0].length - 1 - attrsText.length;
                        
                        let attrMatch;
                        while ((attrMatch = attrRegex.exec(attrsText)) !== null) {
                            const attrName = attrMatch[1];
                            const attrStart = attrsStartOffset + attrMatch.index;
                            const attrEnd = attrStart + attrName.length;
                            
                            if (position.character >= attrStart && position.character <= attrEnd) {
                                vscode.env.openExternal(vscode.Uri.parse(docUrl + "#" + attrName));
                                // Hack: Return current location
                                return [new vscode.Location(document.uri, position)];
                            }
                        }
                    }
                }
            }
        }

        // 1. Get the word at the current position (Phase 1 logic)
        const wordRange = document.getWordRangeAtPosition(position, /[\w\.\(\)]+/);
        if (!wordRange) {
            return null;
        }
        
        const word = document.getText(wordRange);
        
        // Ensure we are inside an EL expression #{...}
        const elRegex = /#\{([^}]+)\}/g;
        let match;
        let isInsideEL = false;
        while ((match = elRegex.exec(lineText)) !== null) {
            const start = match.index;
            const end = match.index + match[0].length;
            if (position.character >= start && position.character <= end) {
                // Ignore if we are inside #{resource[...]} since we handled it above
                if (match[0].startsWith('#{resource[')) {
                    continue;
                }
                isInsideEL = true;
                break;
            }
        }
        
        if (!isInsideEL) {
            return null;
        }

        // The word could be 'bean' or 'bean.property' or 'bean.property.subproperty'
        const parts = word.split('.');
        
        // If the user clicked on the bean part (e.g., myBean in myBean.property)
        // We find the offset of the click within the word
        const clickOffsetInWord = position.character - wordRange.start.character;
        let currentPartIndex = 0;
        let currentLength = 0;
        for (let i = 0; i < parts.length; i++) {
            currentLength += parts[i].length + (i > 0 ? 1 : 0); // +1 for the dot
            if (clickOffsetInWord <= currentLength) {
                currentPartIndex = i;
                break;
            }
        }

        const beanName = parts[0];
        
        const beanLocation = await this.findBeanDefinition(beanName);
        if (!beanLocation) return null;

        // If clicking on the bean itself
        if (currentPartIndex === 0) {
            return beanLocation;
        }

        let currentUri = beanLocation.uri;
        let finalLocation: vscode.Location | null = null;

        for (let i = 1; i <= currentPartIndex; i++) {
            let propertyName = parts[i];
            const isMethodCall = propertyName.endsWith('()');
            if (isMethodCall) {
                propertyName = propertyName.substring(0, propertyName.length - 2);
            }

            finalLocation = await this.findPropertyDefinitionInFile(currentUri, propertyName, isMethodCall);
            
            // If this is the part the user clicked on, return its location!
            if (i === currentPartIndex) {
                return finalLocation || new vscode.Location(currentUri, new vscode.Position(0, 0)); // Fallback to class top if prop not found
            }

            // We are not at the end yet, must resolve the return type to continue
            const content = await this.readFile(currentUri);
            const typeName = this.findPropertyTypeInContent(content, propertyName);
            if (!typeName) {
                return null; // Cannot resolve deeper
            }

            const nextClassUri = await this.findJavaClass(typeName, content);
            if (!nextClassUri) {
                return null; // Cannot find the class file for the type
            }

            currentUri = nextClassUri;
        }

        return finalLocation;
    }

    private async findBeanDefinition(beanName: string): Promise<vscode.Location | null> {
        const javaFiles = await vscode.workspace.findFiles('**/*.java', '**/node_modules/**');
        
        for (const file of javaFiles) {
            const content = await this.readFile(file);
            
            // Look for @Named("beanName") or @ManagedBean(name="beanName")
            const explicitNameRegex = new RegExp(`@(Named|ManagedBean)\\s*\\(\\s*(name\\s*=\\s*)?"${beanName}"\\s*\\)`);
            if (explicitNameRegex.test(content)) {
                return this.createLocation(file, content, explicitNameRegex);
            }

            // Look for implicit naming @Named with class name Match
            const implicitNameRegex = /@(Named|ManagedBean)(?!\s*\()/;
            if (implicitNameRegex.test(content)) {
                const classRegex = /class\s+(\w+)/;
                const classMatch = content.match(classRegex);
                if (classMatch && classMatch[1]) {
                    const className = classMatch[1];
                    const expectedImplicitName = className.charAt(0).toLowerCase() + className.slice(1);
                    if (expectedImplicitName === beanName) {
                        return this.createLocation(file, content, classRegex);
                    }
                }
            }
        }

        return null;
    }

    private async findPropertyDefinitionInFile(uri: vscode.Uri, propertyName: string, isMethodCall: boolean = false): Promise<vscode.Location | null> {
        const content = await this.readFile(uri);
        
        // 1. Look for getter: public String getPropertyName()
        const capitalizedProp = propertyName.charAt(0).toUpperCase() + propertyName.slice(1);
        const getterRegex = new RegExp(`public\\s+(?:[\\w<>\\[\\]\\?,\\s]+\\s+)?(get|is)${capitalizedProp}\\s*\\(`);
        const getterLoc = this.createLocation(uri, content, getterRegex);
        if (getterLoc) {
            return getterLoc;
        }

        // 2. Look for method: public void propertyName()
        const methodRegex = new RegExp(`public\\s+(?:[\\w<>\\[\\]\\?,\\s]+\\s+)?${propertyName}\\s*\\(`);
        const methodLoc = this.createLocation(uri, content, methodRegex);
        if (methodLoc) {
            return methodLoc;
        }

        // 3. Look for field: private String propertyName;
        const fieldRegex = new RegExp(`(?:private|protected|public)?\\s+(?:[\\w<>\\[\\]\\?,\\s]+\\s+)?${propertyName}\\s*[;=]`);
        const fieldLoc = this.createLocation(uri, content, fieldRegex);
        if (fieldLoc) {
            return fieldLoc;
        }

        return null;
    }

    private extractBaseType(rawType: string): string {
        // Strip List<Type> -> Type
        const genericMatch = /<([^>]+)>/.exec(rawType);
        if (genericMatch) {
            const innerType = genericMatch[1];
            // If Map<String, User>, take the last one (value type)
            const parts = innerType.split(',');
            return parts[parts.length - 1].trim();
        }
        // Strip arrays User[] -> User
        return rawType.replace(/\[\]/g, '').trim();
    }

    private findPropertyTypeInContent(content: string, propertyName: string): string | null {
        const capitalizedProp = propertyName.charAt(0).toUpperCase() + propertyName.slice(1);
        
        // Check getter
        const getterRegex = new RegExp(`(?:public|protected|private)?\\s+([\\w<>\\[\\]\\?,]+)\\s+(?:get|is)${capitalizedProp}\\s*\\(`);
        let match = getterRegex.exec(content);
        if (match) {
            return this.extractBaseType(match[1]);
        }
        
        // Check field
        const fieldRegex = new RegExp(`(?:private|protected|public)?\\s+([\\w<>\\[\\]\\?,]+)\\s+${propertyName}\\s*[;=]`);
        match = fieldRegex.exec(content);
        if (match) {
            return this.extractBaseType(match[1]);
        }
        
        return null;
    }

    private async findJavaClass(className: string, contextContent?: string): Promise<vscode.Uri | null> {
        // If we have the content of the file that referenced this class, try to find its exact package
        if (contextContent) {
            // 1. Look for an explicit import (e.g. import com.example.User;)
            const importRegex = new RegExp(`import\\s+([a-zA-Z0-9_\\.]+)\\.${className}\\s*;`);
            const importMatch = importRegex.exec(contextContent);
            
            if (importMatch && importMatch[1]) {
                const packagePath = importMatch[1].replace(/\./g, '/');
                const searchPattern = `**/${packagePath}/${className}.java`;
                const files = await vscode.workspace.findFiles(searchPattern, '**/node_modules/**');
                if (files.length > 0) {
                    return files[0];
                }
            }

            // 2. Look if it's in the same package (e.g. package com.example;)
            const packageRegex = /package\s+([a-zA-Z0-9_\.]+)\s*;/;
            const packageMatch = packageRegex.exec(contextContent);
            
            if (packageMatch && packageMatch[1]) {
                const packagePath = packageMatch[1].replace(/\./g, '/');
                const searchPattern = `**/${packagePath}/${className}.java`;
                const files = await vscode.workspace.findFiles(searchPattern, '**/node_modules/**');
                if (files.length > 0) {
                    return files[0];
                }
            }
        }

        // 3. Fallback: Search globally for the class name
        const searchPattern = `**/${className}.java`;
        const files = await vscode.workspace.findFiles(searchPattern, '**/node_modules/**');
        
        if (files.length > 0) {
            return files[0];
        }
        return null;
    }

    private async readFile(uri: vscode.Uri): Promise<string> {
        // Read file content without opening it in the editor if it's large, but openTextDocument is easier
        const document = await vscode.workspace.openTextDocument(uri);
        return document.getText();
    }

    private createLocation(uri: vscode.Uri, content: string, regex: RegExp): vscode.Location | null {
        const match = regex.exec(content);
        if (match) {
            const lines = content.substring(0, match.index).split('\n');
            const line = lines.length - 1;
            const character = lines[lines.length - 1].length;
            return new vscode.Location(uri, new vscode.Position(line, character));
        }
        return null;
    }

    private async findWebFile(filePath: string, originSelectionRange?: vscode.Range): Promise<vscode.LocationLink[] | null> {
        // Strip leading slash if present
        const cleanPath = filePath.startsWith('/') ? filePath.substring(1) : filePath;
        
        // Default maven web root
        const webRoot = 'src/main/webapp';
        const searchPattern = `**/${webRoot}/${cleanPath}`;
        
        const files = await vscode.workspace.findFiles(searchPattern);
        if (files.length > 0) {
            const uri = files[0];
            return [{
                originSelectionRange,
                targetUri: uri,
                targetRange: new vscode.Range(0, 0, 0, 0)
            }];
        }
        
        // Fallback: search anywhere in workspace just in case
        const fallbackFiles = await vscode.workspace.findFiles(`**/${cleanPath}`);
        if (fallbackFiles.length > 0) {
            const uri = fallbackFiles[0];
            return [{
                originSelectionRange,
                targetUri: uri,
                targetRange: new vscode.Range(0, 0, 0, 0)
            }];
        }
        
        return null;
    }

    private async findResourceFile(resourcePath: string, originSelectionRange?: vscode.Range): Promise<vscode.LocationLink[] | null> {
        // JSF resources are typically under resources folder in web root
        const webRoot = 'src/main/webapp';
        const searchPattern = `**/${webRoot}/resources/${resourcePath}`;
        
        const files = await vscode.workspace.findFiles(searchPattern);
        if (files.length > 0) {
            const uri = files[0];
            return [{
                originSelectionRange,
                targetUri: uri,
                targetRange: new vscode.Range(0, 0, 0, 0)
            }];
        }
        
        // Fallback: search anywhere for resources/resourcePath
        const fallbackFiles = await vscode.workspace.findFiles(`**/resources/${resourcePath}`);
        if (fallbackFiles.length > 0) {
            const uri = fallbackFiles[0];
            return [{
                originSelectionRange,
                targetUri: uri,
                targetRange: new vscode.Range(0, 0, 0, 0)
            }];
        }
        
        return null;
    }
}
