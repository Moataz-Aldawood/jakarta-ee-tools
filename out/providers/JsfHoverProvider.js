"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsfHoverProvider = void 0;
const vscode = require("vscode");
const jsfCatalog_1 = require("./jsfCatalog");
const ThirdPartyCatalogs_1 = require("./ThirdPartyCatalogs");
class JsfHoverProvider {
    provideHover(document, position, token) {
        const wordRange = document.getWordRangeAtPosition(position, /[a-zA-Z0-9_:-]+/);
        if (!wordRange) {
            return null;
        }
        const word = document.getText(wordRange);
        // Check if the hovered word is a JSF tag
        const docText = document.getText();
        const activeCatalogs = { ...jsfCatalog_1.JSF_CATALOG, ...(0, ThirdPartyCatalogs_1.getActiveThirdPartyCatalogs)(docText) };
        const tag = activeCatalogs[word];
        if (tag) {
            const parts = word.split(':');
            const prefix = parts.length > 1 ? parts[0] : '';
            const tagName = parts.length > 1 ? parts[1] : word;
            let library = 'JSF Standard Tag Library';
            const markdown = new vscode.MarkdownString();
            markdown.appendMarkdown(`**${tag.name}**\n\n`);
            markdown.appendMarkdown(`${tag.description}\n\n`);
            if (prefix === 'p') {
                const docUrl = `https://primefaces.github.io/primefaces/15_0_0/#/components/${tagName.toLowerCase()}`;
                library = 'PrimeFaces Tag Library';
                markdown.appendMarkdown(`[Read full documentation](${docUrl})\n\n`);
            }
            else if (prefix === 'o') {
                const showcaseUrl = `https://showcase.omnifaces.org/components/${tagName}`;
                const vdlUrl = `https://omnifaces.org/docs/vdldoc/5.3/o/${tagName}.html`;
                library = 'OmniFaces Tag Library';
                markdown.appendMarkdown(`[View Showcase Demo](${showcaseUrl}) | [Read VDL Documentation](${vdlUrl})\n\n`);
            }
            else if (prefix === 'b') {
                const docUrl = `https://showcase.bootsfaces.net/`;
                library = 'BootsFaces Tag Library';
                markdown.appendMarkdown(`[Read full documentation](${docUrl})\n\n`);
            }
            else {
                const docUrl = `https://jakarta.ee/specifications/faces/4.1/vdldoc/${prefix}/${tagName}.html`;
                markdown.appendMarkdown(`[Read full documentation](${docUrl})\n\n`);
            }
            markdown.appendMarkdown(`*${library}*`);
            markdown.appendMarkdown(`\n\n---\n*⚡ Jakarta Faces Tools*`);
            return new vscode.Hover(markdown, wordRange);
        }
        // Check if the hovered word is a JSF tag attribute
        // Parse backwards to find the nearest enclosing tag
        const textBeforePosition = document.getText(new vscode.Range(new vscode.Position(0, 0), position));
        const lastOpenBracketIdx = textBeforePosition.lastIndexOf('<');
        if (lastOpenBracketIdx !== -1) {
            const lastCloseBracketIdx = textBeforePosition.lastIndexOf('>');
            if (lastOpenBracketIdx > lastCloseBracketIdx) {
                // We are inside a tag
                const tagText = textBeforePosition.substring(lastOpenBracketIdx);
                const match = tagText.match(/<([a-zA-Z0-9_:-]+)/);
                if (match) {
                    const tagName = match[1];
                    const tagDef = activeCatalogs[tagName];
                    if (tagDef && tagDef.attributes) {
                        const attr = tagDef.attributes.find(a => a.name === word);
                        if (attr) {
                            const markdown = new vscode.MarkdownString();
                            markdown.appendMarkdown(`**${tagName}** \`@${attr.name}\`\n\n`);
                            markdown.appendMarkdown(`${attr.description || 'No description available.'}\n\n`);
                            if (attr.type) {
                                markdown.appendMarkdown(`*Type:* \`${attr.type}\`\n\n`);
                            }
                            if (attr.required) {
                                markdown.appendMarkdown(`*Required:* \`${attr.required}\`\n\n`);
                            }
                            markdown.appendMarkdown(`\n\n---\n*⚡ Jakarta Faces Tools*`);
                            return new vscode.Hover(markdown, wordRange);
                        }
                    }
                }
            }
        }
        return null;
    }
}
exports.JsfHoverProvider = JsfHoverProvider;
//# sourceMappingURL=JsfHoverProvider.js.map