import * as vscode from 'vscode';
import { JsfDefinitionProvider } from './providers/JsfDefinitionProvider';
import { JsfCompletionProvider } from './providers/JsfCompletionProvider';
import { JsfHoverProvider } from './providers/JsfHoverProvider';
import { subscribeToDocumentChanges } from './providers/JsfDiagnostics';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "jakarta-ee-tools" is now active!');

    const jsfDefinitionProvider = new JsfDefinitionProvider();
    const jsfCompletionProvider = new JsfCompletionProvider();
    const jsfHoverProvider = new JsfHoverProvider();
    
    const documentSelector: vscode.DocumentSelector = [
        { language: 'jsf' }, { language: 'html' }, { language: 'xml' }
    ];

    context.subscriptions.push(
        vscode.languages.registerDefinitionProvider(documentSelector, jsfDefinitionProvider),
        vscode.languages.registerCompletionItemProvider(documentSelector, jsfCompletionProvider, '<', ' ', ':'),
        vscode.languages.registerHoverProvider(documentSelector, jsfHoverProvider)
    );

    const jsfDiagnostics = vscode.languages.createDiagnosticCollection('jsf');
    context.subscriptions.push(jsfDiagnostics);
    subscribeToDocumentChanges(context, jsfDiagnostics);
}

export function deactivate() {}
