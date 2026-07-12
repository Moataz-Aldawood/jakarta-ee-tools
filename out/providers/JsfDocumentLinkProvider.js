"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsfDocumentLinkProvider = void 0;
const vscode = require("vscode");
const jsfCatalog_1 = require("./jsfCatalog");
const ThirdPartyCatalogs_1 = require("./ThirdPartyCatalogs");
class JsfDocumentLinkProvider {
    provideDocumentLinks(document, token) {
        const links = [];
        const docText = document.getText();
        const activeCatalogs = { ...jsfCatalog_1.JSF_CATALOG, ...(0, ThirdPartyCatalogs_1.getActiveThirdPartyCatalogs)(docText) };
        const tagRegex = /<([a-zA-Z0-9_-]+):([a-zA-Z0-9_-]+)\s*([^>]*)>/g;
        let tagMatch;
        while ((tagMatch = tagRegex.exec(docText)) !== null) {
            const prefix = tagMatch[1];
            const componentName = tagMatch[2];
            const tagStart = tagMatch.index;
            const fullTagName = `${prefix}:${componentName}`;
            if (activeCatalogs[fullTagName]) {
                const nameStart = tagStart + 1; // skip <
                const nameEnd = nameStart + prefix.length + 1 + componentName.length;
                let docUrl = '';
                if (prefix === 'p') {
                    docUrl = `https://primefaces.github.io/primefaces/15_0_0/#/components/${componentName.toLowerCase()}`;
                }
                else if (prefix === 'o') {
                    docUrl = `https://omnifaces.org/docs/vdldoc/5.3/o/${componentName}.html`;
                }
                else if (prefix === 'b') {
                    docUrl = `https://showcase.bootsfaces.net/`;
                }
                else {
                    docUrl = `https://jakarta.ee/specifications/faces/4.1/vdldoc/${prefix}/${componentName}.html`;
                }
                const nameStartPos = document.positionAt(nameStart);
                const nameEndPos = document.positionAt(nameEnd);
                const tagLink = new vscode.DocumentLink(new vscode.Range(nameStartPos, nameEndPos), vscode.Uri.parse(docUrl));
                tagLink.tooltip = "View Component Documentation";
                links.push(tagLink);
                // Attributes
                const attrRegex = /([a-zA-Z0-9_-]+)\s*=/g;
                const attrsText = tagMatch[3];
                const attrsStartOffset = tagStart + tagMatch[0].length - 1 - attrsText.length;
                let attrMatch;
                while ((attrMatch = attrRegex.exec(attrsText)) !== null) {
                    const attrName = attrMatch[1];
                    const attrStart = attrsStartOffset + attrMatch.index;
                    const attrEnd = attrStart + attrName.length;
                    const attrStartPos = document.positionAt(attrStart);
                    const attrEndPos = document.positionAt(attrEnd);
                    const attrLink = new vscode.DocumentLink(new vscode.Range(attrStartPos, attrEndPos), vscode.Uri.parse(docUrl + "#" + attrName));
                    attrLink.tooltip = `View '${attrName}' Attribute Documentation`;
                    links.push(attrLink);
                }
            }
        }
        return links;
    }
}
exports.JsfDocumentLinkProvider = JsfDocumentLinkProvider;
//# sourceMappingURL=JsfDocumentLinkProvider.js.map