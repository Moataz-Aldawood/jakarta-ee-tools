import * as vscode from 'vscode';
import { JSF_CATALOG } from './jsfCatalog';

export class JsfHoverProvider implements vscode.HoverProvider {
    public provideHover(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken
    ): vscode.ProviderResult<vscode.Hover> {
        
        const wordRange = document.getWordRangeAtPosition(position, /[a-zA-Z0-9_:-]+/);
        if (!wordRange) {
            return null;
        }

        const word = document.getText(wordRange);

        // Check if the hovered word is a JSF tag
        const tag = JSF_CATALOG[word];
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
