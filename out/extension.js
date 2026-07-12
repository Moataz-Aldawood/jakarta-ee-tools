"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = require("vscode");
const JsfDefinitionProvider_1 = require("./providers/JsfDefinitionProvider");
const JsfCompletionProvider_1 = require("./providers/JsfCompletionProvider");
const JsfHoverProvider_1 = require("./providers/JsfHoverProvider");
const JsfDiagnostics_1 = require("./providers/JsfDiagnostics");
function activate(context) {
    console.log('Congratulations, your extension "jakarta-ee-tools" is now active!');
    const jsfDefinitionProvider = new JsfDefinitionProvider_1.JsfDefinitionProvider();
    const jsfCompletionProvider = new JsfCompletionProvider_1.JsfCompletionProvider();
    const jsfHoverProvider = new JsfHoverProvider_1.JsfHoverProvider();
    const documentSelector = [
        { language: 'jsf' }, { language: 'html' }, { language: 'xml' }
    ];
    context.subscriptions.push(vscode.languages.registerDefinitionProvider(documentSelector, jsfDefinitionProvider), vscode.languages.registerCompletionItemProvider(documentSelector, jsfCompletionProvider, '<', ' ', ':'), vscode.languages.registerHoverProvider(documentSelector, jsfHoverProvider));
    const jsfDiagnostics = vscode.languages.createDiagnosticCollection('jsf');
    context.subscriptions.push(jsfDiagnostics);
    (0, JsfDiagnostics_1.subscribeToDocumentChanges)(context, jsfDiagnostics);
}
function deactivate() { }
//# sourceMappingURL=extension.js.map