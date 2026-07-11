"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsfCompletionProvider = void 0;
const vscode = require("vscode");
const jsfCatalog_1 = require("./jsfCatalog");
const namespaceParser_1 = require("./namespaceParser");
const ThirdPartyCatalogs_1 = require("./ThirdPartyCatalogs");
class JsfCompletionProvider {
    async provideCompletionItems(document, position, token, context) {
        const linePrefix = document.lineAt(position).text.substring(0, position.character);
        const docText = document.getText();
        const namespaces = (0, namespaceParser_1.getCompositeNamespaces)(docText);
        // Check if we are typing inside a tag (e.g., <h:out or <tc:lab)
        // Match < followed by optional namespace and tag prefix
        const tagMatch = /<([a-zA-Z0-9_:-]*)$/.exec(linePrefix);
        if (tagMatch) {
            const items = [];
            const activeCatalogs = { ...jsfCatalog_1.JSF_CATALOG, ...(0, ThirdPartyCatalogs_1.getActiveThirdPartyCatalogs)(docText) };
            const typedPrefix = tagMatch[1];
            // 1. Standard and 3rd-party tags from catalogs
            for (const tagName in activeCatalogs) {
                if (typedPrefix && !tagName.startsWith(typedPrefix))
                    continue;
                const tag = activeCatalogs[tagName];
                const item = new vscode.CompletionItem(tagName, vscode.CompletionItemKind.Class);
                if (typedPrefix) {
                    item.range = new vscode.Range(position.with(undefined, position.character - typedPrefix.length), position);
                }
                item.detail = 'JSF Tag';
                const parts = tagName.split(':');
                const prefix = parts.length > 1 ? parts[0] : '';
                const baseName = parts.length > 1 ? parts[1] : tagName;
                let docUrl = '';
                if (prefix === 'p') {
                    docUrl = `https://primefaces.github.io/primefaces/15_0_0/#/components/${baseName.toLowerCase()}`;
                }
                else {
                    docUrl = `https://jakarta.ee/specifications/faces/4.1/vdldoc/${prefix}/${baseName}.html`;
                }
                const markdown = new vscode.MarkdownString();
                markdown.appendMarkdown(`${tag.description}\n\n`);
                markdown.appendMarkdown(`[Read full documentation](${docUrl})\n\n`);
                markdown.appendMarkdown(`---\n*⚡ Jakarta Faces Tools*`);
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
                        if (typedPrefix && !tagName.startsWith(typedPrefix))
                            continue;
                        const item = new vscode.CompletionItem(tagName, vscode.CompletionItemKind.Class);
                        if (typedPrefix) {
                            item.range = new vscode.Range(position.with(undefined, position.character - typedPrefix.length), position);
                        }
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
            const activeCatalogs = { ...jsfCatalog_1.JSF_CATALOG, ...(0, ThirdPartyCatalogs_1.getActiveThirdPartyCatalogs)(docText) };
            const tag = activeCatalogs[tagName];
            if (tag) {
                const items = [];
                for (const attr of tag.attributes) {
                    const item = new vscode.CompletionItem(attr.name, vscode.CompletionItemKind.Property);
                    item.detail = attr.type ? `JSF Attribute (${attr.type})` : 'JSF Attribute';
                    const md = new vscode.MarkdownString();
                    md.appendMarkdown(`${attr.description}\n\n`);
                    md.appendMarkdown(`---\n*⚡ Jakarta Faces Tools*`);
                    item.documentation = md;
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
                    const componentUri = await (0, namespaceParser_1.resolveCompositeComponent)(folder, componentName);
                    if (componentUri) {
                        const items = [];
                        const customAttrs = await (0, namespaceParser_1.getCompositeAttributes)(componentUri);
                        // Add base component attributes that apply to all custom components
                        customAttrs.push({ name: 'id', type: 'String', description: 'Component identifier' });
                        customAttrs.push({ name: 'rendered', type: 'boolean', description: 'Flag indicating whether or not this component should be rendered' });
                        for (const attr of customAttrs) {
                            const item = new vscode.CompletionItem(attr.name, vscode.CompletionItemKind.Property);
                            item.detail = attr.type ? `Custom Attribute (${attr.type})` : 'Custom Attribute';
                            const md = new vscode.MarkdownString();
                            md.appendMarkdown(`${attr.description}\n\n`);
                            md.appendMarkdown(`---\n*⚡ Jakarta Faces Tools*`);
                            item.documentation = md;
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
exports.JsfCompletionProvider = JsfCompletionProvider;
//# sourceMappingURL=JsfCompletionProvider.js.map