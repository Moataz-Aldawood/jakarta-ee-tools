import * as vscode from 'vscode';

export class JsfELHighlighter {
    private decorationType: vscode.TextEditorDecorationType | undefined;
    private subscriptions: vscode.Disposable[] = [];

    constructor() {
        this.updateDecorationType();
        this.registerListeners();
        this.triggerUpdateDecorations();
    }

    private updateDecorationType() {
        if (this.decorationType) {
            this.decorationType.dispose();
        }

        const config = vscode.workspace.getConfiguration('jakartaFaces.elHighlight');
        const enable = config.get<boolean>('enable', true);

        if (!enable) {
            this.decorationType = undefined;
            return;
        }

        const backgroundColor = config.get<string>('backgroundColor', 'rgba(100, 150, 255, 0.15)');
        const color = config.get<string>('color', '');
        const border = config.get<string>('border', '1px solid rgba(100, 150, 255, 0.3)');
        const borderRadius = config.get<string>('borderRadius', '3px');

        const decorationOptions: vscode.DecorationRenderOptions = {
            backgroundColor: backgroundColor || undefined,
            color: color || undefined,
            border: border || undefined,
            borderRadius: borderRadius || undefined,
        };

        this.decorationType = vscode.window.createTextEditorDecorationType(decorationOptions);
    }

    private registerListeners() {
        // Handle active editor changes
        this.subscriptions.push(vscode.window.onDidChangeActiveTextEditor(editor => {
            if (editor) {
                this.triggerUpdateDecorations(editor);
            }
        }));

        // Handle text changes
        this.subscriptions.push(vscode.workspace.onDidChangeTextDocument(event => {
            const editor = vscode.window.activeTextEditor;
            if (editor && event.document === editor.document) {
                this.triggerUpdateDecorations(editor);
            }
        }));

        // Handle configuration changes
        this.subscriptions.push(vscode.workspace.onDidChangeConfiguration(event => {
            if (event.affectsConfiguration('jakartaFaces.elHighlight')) {
                this.updateDecorationType();
                // Clear decorations from active editor if disabled
                if (!vscode.workspace.getConfiguration('jakartaFaces.elHighlight').get<boolean>('enable', true)) {
                    if (vscode.window.activeTextEditor && this.decorationType) {
                        vscode.window.activeTextEditor.setDecorations(this.decorationType, []);
                    }
                }
                this.triggerUpdateDecorations();
            }
        }));
    }

    private timeout: NodeJS.Timeout | undefined = undefined;

    private triggerUpdateDecorations(editor: vscode.TextEditor | undefined = vscode.window.activeTextEditor) {
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = undefined;
        }
        this.timeout = setTimeout(() => this.updateDecorations(editor), 100);
    }

    private updateDecorations(editor: vscode.TextEditor | undefined) {
        if (!editor || !this.decorationType) {
            return;
        }

        const langId = editor.document.languageId;
        if (langId !== 'jsf' && langId !== 'html' && langId !== 'xml') {
            return;
        }

        const text = editor.document.getText();
        const elRegex = /#\{([^}]+)\}/g;
        const decorations: vscode.DecorationOptions[] = [];
        let match;

        while ((match = elRegex.exec(text))) {
            const startPos = editor.document.positionAt(match.index);
            const endPos = editor.document.positionAt(match.index + match[0].length);
            const decoration = { range: new vscode.Range(startPos, endPos) };
            decorations.push(decoration);
        }

        editor.setDecorations(this.decorationType, decorations);
    }

    public dispose() {
        if (this.decorationType) {
            this.decorationType.dispose();
        }
        this.subscriptions.forEach(d => d.dispose());
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
    }
}
