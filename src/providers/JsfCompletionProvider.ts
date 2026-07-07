import * as vscode from 'vscode';
import { JSF_CATALOG } from './jsfCatalog';
import { getCompositeNamespaces, resolveCompositeComponent, getCompositeAttributes } from './namespaceParser';

export class JsfCompletionProvider implements vscode.CompletionItemProvider {
    public async provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken,
        context: vscode.CompletionContext
    ): Promise<vscode.CompletionItem[] | vscode.CompletionList | undefined> {
        
        const linePrefix = document.lineAt(position).text.substring(0, position.character);

        const docText = document.getText();
        const namespaces = getCompositeNamespaces(docText);

        // Check if we are typing inside a tag (e.g., <h:out or <tc:lab)
        // Match < followed by optional namespace and tag prefix
        const tagMatch = /<([a-zA-Z0-9_:-]*)$/.exec(linePrefix);
        if (tagMatch) {
            const items: vscode.CompletionItem[] = [];
            
            // 1. Standard tags from catalog
            for (const tagName in JSF_CATALOG) {
                const tag = JSF_CATALOG[tagName];
                const item = new vscode.CompletionItem(tagName, vscode.CompletionItemKind.Class);
                item.detail = 'JSF Tag';
                
                const parts = tagName.split(':');
                const prefix = parts.length > 1 ? parts[0] : '';
                const baseName = parts.length > 1 ? parts[1] : tagName;
                const docUrl = `https://jakarta.ee/specifications/faces/4.1/vdldoc/${prefix}/${baseName}.html`;

                const markdown = new vscode.MarkdownString();
                markdown.appendMarkdown(`${tag.description}\n\n`);
                markdown.appendMarkdown(`[Read full documentation](${docUrl})`);
                
                item.documentation = markdown;
                items.push(item);
            }
            
            // 2. Custom tags from namespaces
            for (const prefix of Object.keys(namespaces)) {
                const folder = namespaces[prefix];
                const searchPattern = `**/resources/${folder}/*.xhtml`;
                const files = await vscode.workspace.findFiles(searchPattern, '**/node_modules/**');
                
                for (const file of files) {
                    // Extract basename without .xhtml
                    const baseName = file.path.split('/').pop()?.replace('.xhtml', '');
                    if (baseName) {
                        const tagName = `${prefix}:${baseName}`;
                        const item = new vscode.CompletionItem(tagName, vscode.CompletionItemKind.Class);
                        item.detail = `Custom Composite Component (${folder})`;
                        item.documentation = new vscode.MarkdownString(`Custom JSF component loaded from resources/${folder}/${baseName}.xhtml`);
                        items.push(item);
                    }
                }
            }

            return items;
        }

        // Check if we are inside an existing tag to suggest attributes
        // e.g., <h:outputText | or <tc:labeledInput |
        const insideTagMatch = /<([a-zA-Z0-9_:-]+)\s+[^>]*$/.exec(linePrefix);
        if (insideTagMatch) {
            const tagName = insideTagMatch[1];
            
            // 1. Standard Tag Attributes
            const tag = JSF_CATALOG[tagName];
            if (tag) {
                const items: vscode.CompletionItem[] = [];
                for (const attr of tag.attributes) {
                    const item = new vscode.CompletionItem(attr.name, vscode.CompletionItemKind.Property);
                    item.detail = attr.type ? `JSF Attribute (${attr.type})` : 'JSF Attribute';
                    item.documentation = new vscode.MarkdownString(attr.description);
                    item.insertText = new vscode.SnippetString(`${attr.name}="$1"`);
                    items.push(item);
                }
                return items;
            }
            
            // 2. Custom Component Attributes
            const parts = tagName.split(':');
            if (parts.length === 2) {
                const prefix = parts[0];
                const componentName = parts[1];
                const folder = namespaces[prefix];
                
                if (folder) {
                    const componentUri = await resolveCompositeComponent(folder, componentName);
                    if (componentUri) {
                        const items: vscode.CompletionItem[] = [];
                        const customAttrs = await getCompositeAttributes(componentUri);
                        
                        // Add base component attributes that apply to all custom components
                        customAttrs.push({ name: 'id', type: 'String', description: 'Component identifier' });
                        customAttrs.push({ name: 'rendered', type: 'boolean', description: 'Flag indicating whether or not this component should be rendered' });

                        for (const attr of customAttrs) {
                            const item = new vscode.CompletionItem(attr.name, vscode.CompletionItemKind.Property);
                            item.detail = attr.type ? `Custom Attribute (${attr.type})` : 'Custom Attribute';
                            item.documentation = new vscode.MarkdownString(attr.description);
                            item.insertText = new vscode.SnippetString(`${attr.name}="$1"`);
                            items.push(item);
                        }
                        return items;
                    }
                }
            }
        }

        return undefined;
    }
}
