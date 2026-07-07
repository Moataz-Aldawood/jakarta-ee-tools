"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshDiagnostics = refreshDiagnostics;
exports.subscribeToDocumentChanges = subscribeToDocumentChanges;
const vscode = require("vscode");
const jsfCatalog_1 = require("./jsfCatalog");
function refreshDiagnostics(document, jsfDiagnostics) {
    if (document.languageId !== 'jsf' && document.languageId !== 'html' && document.languageId !== 'xml') {
        return;
    }
    // We only want to analyze files with jsf/xhtml extensions to avoid polluting pure xml/html files
    if (!document.fileName.endsWith('.xhtml') && !document.fileName.endsWith('.jsf')) {
        return;
    }
    const diagnostics = [];
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
            const diagnostic = new vscode.Diagnostic(range, "Unclosed Expression Language (EL) block. Missing '}'", vscode.DiagnosticSeverity.Error);
            diagnostics.push(diagnostic);
            // Move index forward to avoid infinite loop
            elIndex += 2;
        }
        else {
            // It's closed properly, move index past the closing bracket
            elIndex = nextClosing + 1;
        }
    }
    // 2. Check for unknown standard tags (h:, f:, ui:, cc:)
    // We look for any tag starting with <h:, <f:, <ui:, or <cc:
    const tagRegex = /<(h|f|ui|cc):([a-zA-Z0-9_-]+)/g;
    let match;
    while ((match = tagRegex.exec(text)) !== null) {
        const fullTagName = `${match[1]}:${match[2]}`;
        if (!jsfCatalog_1.JSF_CATALOG[fullTagName]) {
            const startPos = document.positionAt(match.index + 1); // +1 to skip '<'
            const endPos = document.positionAt(match.index + 1 + fullTagName.length);
            const range = new vscode.Range(startPos, endPos);
            const diagnostic = new vscode.Diagnostic(range, `Unknown JSF tag '${fullTagName}'.`, vscode.DiagnosticSeverity.Warning);
            diagnostics.push(diagnostic);
        }
    }
    jsfDiagnostics.set(document.uri, diagnostics);
}
function subscribeToDocumentChanges(context, jsfDiagnostics) {
    if (vscode.window.activeTextEditor) {
        refreshDiagnostics(vscode.window.activeTextEditor.document, jsfDiagnostics);
    }
    context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor(editor => {
        if (editor) {
            refreshDiagnostics(editor.document, jsfDiagnostics);
        }
    }));
    context.subscriptions.push(vscode.workspace.onDidChangeTextDocument(e => refreshDiagnostics(e.document, jsfDiagnostics)));
    context.subscriptions.push(vscode.workspace.onDidCloseTextDocument(doc => jsfDiagnostics.delete(doc.uri)));
}
//# sourceMappingURL=JsfDiagnostics.js.map