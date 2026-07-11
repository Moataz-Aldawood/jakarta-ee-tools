import * as vscode from 'vscode';
import { JSF_CATALOG } from './jsfCatalog';
import { getCompositeNamespaces } from './namespaceParser';
import { getActiveThirdPartyCatalogs } from './ThirdPartyCatalogs';

export function refreshDiagnostics(document: vscode.TextDocument, jsfDiagnostics: vscode.DiagnosticCollection): void {
    if (document.languageId !== 'jsf' && document.languageId !== 'html' && document.languageId !== 'xml') {
        return;
    }
    
    // We only want to analyze files with jsf/xhtml extensions to avoid polluting pure xml/html files
    if (!document.fileName.endsWith('.xhtml') && !document.fileName.endsWith('.jsf')) {
        return;
    }

    const diagnostics: vscode.Diagnostic[] = [];
    const text = document.getText();

    // 1. Check for unclosed EL expressions
    let elIndex = 0;
    while ((elIndex = text.indexOf('#{', elIndex)) !== -1) {
        const nextClosing = text.indexOf('}', elIndex);
        const nextOpening = text.indexOf('#{', elIndex + 2);
        
        // If there's no closing bracket, or if the next opening bracket is BEFORE the closing bracket
        // (meaning we started a new one without closing the previous one)
        if (nextClosing === -1 || (nextOpening !== -1 && nextOpening < nextClosing)) {
            const startPos = document.positionAt(elIndex);
            // We'll just highlight the #{
            const endPos = document.positionAt(elIndex + 2);
            const range = new vscode.Range(startPos, endPos);
            const diagnostic = new vscode.Diagnostic(
                range, 
                "Unclosed Expression Language (EL) block. Missing '}'", 
                vscode.DiagnosticSeverity.Error
            );
            diagnostic.source = 'Jakarta Faces Tools';
            diagnostics.push(diagnostic);
            
            // Move index forward to avoid infinite loop
            elIndex += 2;
        } else {
            // It's closed properly, move index past the closing bracket
            elIndex = nextClosing + 1;
        }
    }

    // 2. Check for unknown standard and 3rd-party tags
    const activeCatalogs = { ...JSF_CATALOG, ...getActiveThirdPartyCatalogs(text) };
    const compositeNamespaces = getCompositeNamespaces(text);
    
    // We look for any namespaced tag <prefix:basename
    const tagRegex = /<([a-zA-Z0-9_-]+):([a-zA-Z0-9_-]+)/g;
    let match;
    while ((match = tagRegex.exec(text)) !== null) {
        const prefix = match[1];
        const fullTagName = `${prefix}:${match[2]}`;
        
        // Skip composite component prefixes
        if (compositeNamespaces[prefix]) {
            continue;
        }

        // Check if the prefix belongs to one of our active catalogs
        const isManagedPrefix = Object.keys(activeCatalogs).some(k => k.startsWith(prefix + ':'));
        
        if (isManagedPrefix) {
            if (!activeCatalogs[fullTagName]) {
                const startPos = document.positionAt(match.index + 1); // +1 to skip '<'
                const endPos = document.positionAt(match.index + 1 + fullTagName.length);
                const range = new vscode.Range(startPos, endPos);
                
                const diagnostic = new vscode.Diagnostic(
                    range, 
                    `Unknown JSF tag '${fullTagName}'.`, 
                    vscode.DiagnosticSeverity.Warning
                );
                diagnostic.source = 'Jakarta Faces Tools';
                diagnostics.push(diagnostic);
            }
        }
    }

    // 3. Check for unknown attributes in known tags
    const tagBodyRegex = /<([a-zA-Z0-9_-]+:[a-zA-Z0-9_-]+)([\s\S]*?)>/g;
    let bodyMatch;
    while ((bodyMatch = tagBodyRegex.exec(text)) !== null) {
        const fullTagName = bodyMatch[1];
        const tagBody = bodyMatch[2];
        const tag = activeCatalogs[fullTagName];
        
        if (tag) {
            // Find attributes: space followed by name="value" or name='value'
            const attrRegex = /\s+([a-zA-Z0-9_:-]+)\s*=\s*(['"])([\s\S]*?)\2/g;
            let attrMatch;
            
            const validAttrs = new Set(tag.attributes.map(a => a.name));
            // Global standard attributes
            validAttrs.add('id');
            validAttrs.add('rendered');
            validAttrs.add('binding');
            
            while ((attrMatch = attrRegex.exec(tagBody)) !== null) {
                const attrName = attrMatch[1];
                
                // Ignore namespaces (xmlns:*) and pass-through attributes (pt:*) which contain colons
                if (attrName.includes(':') || attrName === 'xmlns') {
                    continue;
                }
                
                if (!validAttrs.has(attrName)) {
                    // Calculate absolute position
                    // The matched string from attrRegex starts with whitespace(s).
                    // We need to find the exact index of the attribute name within the match.
                    const matchString = attrMatch[0];
                    const nameOffset = matchString.indexOf(attrName);
                    
                    const attrAbsoluteIndex = bodyMatch.index + 1 + fullTagName.length + attrMatch.index + nameOffset;
                    
                    const startPos = document.positionAt(attrAbsoluteIndex);
                    const endPos = document.positionAt(attrAbsoluteIndex + attrName.length);
                    const range = new vscode.Range(startPos, endPos);
                    
                    const diagnostic = new vscode.Diagnostic(
                        range, 
                        `Unknown attribute '${attrName}' for tag '${fullTagName}'.`, 
                        vscode.DiagnosticSeverity.Warning
                    );
                    diagnostic.source = 'Jakarta Faces Tools';
                    diagnostics.push(diagnostic);
                }
            }
        }
    }

    jsfDiagnostics.set(document.uri, diagnostics);
}

export function subscribeToDocumentChanges(context: vscode.ExtensionContext, jsfDiagnostics: vscode.DiagnosticCollection): void {
    if (vscode.window.activeTextEditor) {
        refreshDiagnostics(vscode.window.activeTextEditor.document, jsfDiagnostics);
    }
    
    context.subscriptions.push(
        vscode.window.onDidChangeActiveTextEditor(editor => {
            if (editor) {
                refreshDiagnostics(editor.document, jsfDiagnostics);
            }
        })
    );

    context.subscriptions.push(
        vscode.workspace.onDidChangeTextDocument(e => refreshDiagnostics(e.document, jsfDiagnostics))
    );

    context.subscriptions.push(
        vscode.workspace.onDidCloseTextDocument(doc => jsfDiagnostics.delete(doc.uri))
    );
}
