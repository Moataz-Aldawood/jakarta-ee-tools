"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsfDefinitionProvider = void 0;
const vscode = require("vscode");
const namespaceParser_1 = require("./namespaceParser");
class JsfDefinitionProvider {
    async provideDefinition(document, position, token) {
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
        // Phase 5: Custom Composite Components
        const docText = document.getText();
        const namespaces = (0, namespaceParser_1.getCompositeNamespaces)(docText);
        // Find if we are inside a tag
        const tagRegex = /<([a-zA-Z0-9_-]+):([a-zA-Z0-9_-]+)\s*([^>]*)>/g;
        let tagMatch;
        while ((tagMatch = tagRegex.exec(lineText)) !== null) {
            const prefix = tagMatch[1];
            const componentName = tagMatch[2];
            const tagStart = tagMatch.index;
            const tagEnd = tagMatch.index + tagMatch[0].length;
            if (position.character >= tagStart && position.character <= tagEnd) {
                const folder = namespaces[prefix];
                if (folder) {
                    const componentUri = await (0, namespaceParser_1.resolveCompositeComponent)(folder, componentName);
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
        // If clicking on the bean itself
        if (currentPartIndex === 0) {
            return this.findBeanDefinition(beanName);
        }
        else if (currentPartIndex >= 1) {
            // Clicking on a property
            let propertyName = parts[currentPartIndex];
            const isMethodCall = propertyName.endsWith('()');
            if (isMethodCall) {
                propertyName = propertyName.substring(0, propertyName.length - 2);
            }
            return this.findPropertyDefinition(beanName, propertyName, isMethodCall);
        }
        return null;
    }
    async findBeanDefinition(beanName) {
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
    async findPropertyDefinition(beanName, propertyName, isMethodCall = false) {
        const beanLocation = await this.findBeanDefinition(beanName);
        if (!beanLocation) {
            return null;
        }
        const content = await this.readFile(beanLocation.uri);
        // 1. Look for getter: public String getPropertyName()
        const capitalizedProp = propertyName.charAt(0).toUpperCase() + propertyName.slice(1);
        const getterRegex = new RegExp(`public\\s+(?:[\\w<>\\[\\]\\?,\\s]+\\s+)?(get|is)${capitalizedProp}\\s*\\(`);
        const getterLoc = this.createLocation(beanLocation.uri, content, getterRegex);
        if (getterLoc) {
            return getterLoc;
        }
        // 2. Look for method: public void propertyName()
        const methodRegex = new RegExp(`public\\s+(?:[\\w<>\\[\\]\\?,\\s]+\\s+)?${propertyName}\\s*\\(`);
        const methodLoc = this.createLocation(beanLocation.uri, content, methodRegex);
        if (methodLoc) {
            return methodLoc;
        }
        // 3. Look for field: private String propertyName;
        // Fields might be private, protected, or package-private
        const fieldRegex = new RegExp(`(?:private|protected|public)?\\s+(?:[\\w<>\\[\\]\\?,\\s]+\\s+)?${propertyName}\\s*[;=]`);
        const fieldLoc = this.createLocation(beanLocation.uri, content, fieldRegex);
        if (fieldLoc) {
            return fieldLoc;
        }
        // If not found, just return the bean location as fallback
        return beanLocation;
    }
    async readFile(uri) {
        // Read file content without opening it in the editor if it's large, but openTextDocument is easier
        const document = await vscode.workspace.openTextDocument(uri);
        return document.getText();
    }
    createLocation(uri, content, regex) {
        const match = regex.exec(content);
        if (match) {
            const lines = content.substring(0, match.index).split('\n');
            const line = lines.length - 1;
            const character = lines[lines.length - 1].length;
            return new vscode.Location(uri, new vscode.Position(line, character));
        }
        return null;
    }
    async findWebFile(filePath, originSelectionRange) {
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
    async findResourceFile(resourcePath, originSelectionRange) {
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
exports.JsfDefinitionProvider = JsfDefinitionProvider;
//# sourceMappingURL=JsfDefinitionProvider.js.map