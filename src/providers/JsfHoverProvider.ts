import * as vscode from 'vscode';
import { JSF_CATALOG } from './jsfCatalog';
import { getCompositeNamespaces, resolveCompositeComponent, getCompositeAttributes } from './namespaceParser';
import { getActiveThirdPartyCatalogs } from './ThirdPartyCatalogs';
import { getEnclosingTag } from './tagParser';

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
        const docText = document.getText();
        const activeCatalogs = { ...JSF_CATALOG, ...getActiveThirdPartyCatalogs(docText) };
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
                markdown.appendMarkdown(`[🌐 Read full documentation online](${docUrl})\n\n`);
            } else if (prefix === 'o') {
                const showcaseUrl = `https://showcase.omnifaces.org/components/${tagName}`;
                const vdlUrl = `https://omnifaces.org/docs/vdldoc/5.3/o/${tagName}.html`;
                library = 'OmniFaces Tag Library';
                markdown.appendMarkdown(`[🌐 View Showcase Demo](${showcaseUrl}) | [🌐 Read VDL Documentation](${vdlUrl})\n\n`);
            } else if (prefix === 'b') {
                const docUrl = `https://showcase.bootsfaces.net/`;
                library = 'BootsFaces Tag Library';
                markdown.appendMarkdown(`[🌐 Read full documentation online](${docUrl})\n\n`);
            } else {
                const docUrl = `https://jakarta.ee/specifications/faces/4.1/vdldoc/${prefix}/${tagName}.html`;
                markdown.appendMarkdown(`[🌐 Read full documentation online](${docUrl})\n\n`);
            }

            markdown.appendMarkdown(`*${library}*`);
            markdown.appendMarkdown(`\n\n---\n*⚡ Jakarta Faces Tools*`);
            return new vscode.Hover(markdown, wordRange);
        }

        // Check if the hovered word is a JSF tag attribute
        const tagInfo = getEnclosingTag(document, position);
        if (tagInfo) {
            const tagName = tagInfo.tagName;
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

                    const parts = tagName.split(':');
                    const prefix = parts.length > 1 ? parts[0] : '';
                    const componentName = parts.length > 1 ? parts[1] : tagName;

                    let docUrl = '';
                    if (prefix === 'p') {
                        docUrl = `https://primefaces.github.io/primefaces/15_0_0/#/components/${componentName.toLowerCase()}`;
                    } else if (prefix === 'o') {
                        const vdlUrl = `https://omnifaces.org/docs/vdldoc/5.3/o/${componentName}.html`;
                        docUrl = vdlUrl; // OmniFaces uses VDL URL for attributes too
                    } else if (prefix === 'b') {
                        docUrl = `https://showcase.bootsfaces.net/`;
                    } else {
                        docUrl = `https://jakarta.ee/specifications/faces/4.1/vdldoc/${prefix}/${componentName}.html`;
                    }

                    // Primefaces doesn't support anchors for attributes on their new page, but standard JSF/Omnifaces do.
                    // We will just point to the page, and if the anchor exists the browser will scroll to it.
                    markdown.appendMarkdown(`[🌐 Read full documentation online](${docUrl}#${attr.name})\n\n`);

                    markdown.appendMarkdown(`\n\n---\n*⚡ Jakarta Faces Tools*`);
                    return new vscode.Hover(markdown, wordRange);
                }
            }
        }
        
        return null;
    }
}
