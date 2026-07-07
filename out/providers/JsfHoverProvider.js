"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsfHoverProvider = void 0;
const vscode = require("vscode");
const jsfCatalog_1 = require("./jsfCatalog");
class JsfHoverProvider {
    provideHover(document, position, token) {
        const wordRange = document.getWordRangeAtPosition(position, /[a-zA-Z0-9_:-]+/);
        if (!wordRange) {
            return null;
        }
        const word = document.getText(wordRange);
        // Check if the hovered word is a JSF tag
        const tag = jsfCatalog_1.JSF_CATALOG[word];
        if (tag) {
            const parts = word.split(':');
            const prefix = parts.length > 1 ? parts[0] : '';
            const tagName = parts.length > 1 ? parts[1] : word;
            const docUrl = `https://jakarta.ee/specifications/faces/4.1/vdldoc/${prefix}/${tagName}.html`;
            const markdown = new vscode.MarkdownString();
            markdown.appendMarkdown(`**${tag.name}**\n\n`);
            markdown.appendMarkdown(`${tag.description}\n\n`);
            markdown.appendMarkdown(`[Read full documentation](${docUrl})\n\n`);
            markdown.appendMarkdown(`*JSF Standard Tag Library*`);
            return new vscode.Hover(markdown, wordRange);
        }
        // We could also check if hovering over an attribute of a known tag
        // by parsing the line backwards to find the tag name, but tag hover is the main requirement.
        return null;
    }
}
exports.JsfHoverProvider = JsfHoverProvider;
//# sourceMappingURL=JsfHoverProvider.js.map