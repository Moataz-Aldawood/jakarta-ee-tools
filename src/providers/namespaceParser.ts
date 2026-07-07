import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

export interface NamespaceMap {
    // Maps prefix (e.g. 'tc') to relative resource folder path (e.g. 'tc')
    [prefix: string]: string;
}

/**
 * Parses XML namespace declarations to find composite component mappings.
 * e.g., xmlns:tc="jakarta.faces.composite/tc" -> returns { "tc": "tc" }
 */
export function getCompositeNamespaces(text: string): NamespaceMap {
    const map: NamespaceMap = {};
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
export async function resolveCompositeComponent(folder: string, component: string): Promise<vscode.Uri | null> {
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
export async function getCompositeAttributes(uri: vscode.Uri): Promise<{name: string, description: string, type: string}[]> {
    try {
        const contentBytes = await vscode.workspace.fs.readFile(uri);
        const content = Buffer.from(contentBytes).toString('utf8');
        
        const attrs: {name: string, description: string, type: string}[] = [];
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
    } catch (e) {
        return [];
    }
}
