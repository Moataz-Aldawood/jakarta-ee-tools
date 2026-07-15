import * as vscode from 'vscode';

export interface TagInfo {
    tagName: string;
    prefix: string;
    componentName: string;
    attributes: string;
    attributesOffset: number;
    tagStartOffset: number;
    tagEndOffset: number;
}

export function getEnclosingTag(document: vscode.TextDocument, position: vscode.Position): TagInfo | null {
    const docText = document.getText();
    const offset = document.offsetAt(position);
    
    // Find the nearest '<' before the cursor
    const startIdx = docText.lastIndexOf('<', offset);
    if (startIdx === -1) return null;
    
    // Find the nearest '>' before the cursor
    const lastCloseIdx = docText.lastIndexOf('>', offset - 1);
    
    // If there is a '>' after the nearest '<' and before the cursor, we are not inside a tag
    if (lastCloseIdx > startIdx) return null;
    
    // Find the end of the tag
    let endIdx = docText.indexOf('>', offset);
    if (endIdx === -1) {
        // Tag is not closed yet, but we are inside it
        endIdx = docText.length;
    }
    
    const tagContent = docText.substring(startIdx, endIdx);
    
    // Parse tag name
    const match = /^<([a-zA-Z0-9_:-]+)(?:\s+([^]*))?$/.exec(tagContent);
    if (!match) return null;
    
    const tagName = match[1];
    const attributes = match[2] || '';
    
    const parts = tagName.split(':');
    const prefix = parts.length > 1 ? parts[0] : '';
    const componentName = parts.length > 1 ? parts[1] : tagName;
    
    // Calculate the absolute offset where the attributes string starts in the document
    let attributesOffset = -1;
    if (attributes) {
        attributesOffset = startIdx + match[0].indexOf(attributes);
    }

    return {
        tagName,
        prefix,
        componentName,
        attributes,
        attributesOffset,
        tagStartOffset: startIdx,
        tagEndOffset: endIdx
    };
}
