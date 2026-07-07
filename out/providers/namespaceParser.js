"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCompositeNamespaces = getCompositeNamespaces;
exports.resolveCompositeComponent = resolveCompositeComponent;
exports.getCompositeAttributes = getCompositeAttributes;
const vscode = require("vscode");
/**
 * Parses XML namespace declarations to find composite component mappings.
 * e.g., xmlns:tc="jakarta.faces.composite/tc" -> returns { "tc": "tc" }
 */
function getCompositeNamespaces(text) {
    const map = {};
    const regex = /xmlns:([a-zA-Z0-9_-]+)\s*=\s*["'][^"']*composite\/([^"']+)["']/g;
    let match;
    while ((match = regex.exec(text)) !== null) {
        map[match[1]] = match[2];
    }
    return map;
}
/**
 * Searches the workspace for the web root (e.g. src/main/webapp)
 * and returns the absolute path to the composite component file.
 */
async function resolveCompositeComponent(folder, component) {
    const searchPattern = `**/resources/${folder}/${component}.xhtml`;
    const files = await vscode.workspace.findFiles(searchPattern, '**/node_modules/**', 1);
    if (files.length > 0) {
        return files[0];
    }
    return null;
}
/**
 * Parses a composite component file and extracts its defined cc:attributes.
 */
async function getCompositeAttributes(uri) {
    try {
        const contentBytes = await vscode.workspace.fs.readFile(uri);
        const content = Buffer.from(contentBytes).toString('utf8');
        const attrs = [];
        const attrRegex = /<[a-zA-Z0-9_-]+:attribute\s+([^>]+)>/g;
        let match;
        while ((match = attrRegex.exec(content)) !== null) {
            const attrBody = match[1];
            const nameMatch = /name=["']([^"']+)["']/.exec(attrBody);
            const typeMatch = /type=["']([^"']+)["']/.exec(attrBody);
            const descMatch = /shortDescription=["']([^"']+)["']/.exec(attrBody);
            if (nameMatch) {
                attrs.push({
                    name: nameMatch[1],
                    type: typeMatch ? typeMatch[1] : 'java.lang.Object',
                    description: descMatch ? descMatch[1] : `Custom attribute: ${nameMatch[1]}`
                });
            }
        }
        return attrs;
    }
    catch (e) {
        return [];
    }
}
//# sourceMappingURL=namespaceParser.js.map