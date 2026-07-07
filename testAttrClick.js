const lineText = `    <tc:labeledInput id="inputText_Name" label="Name:" value="#{myController.name}" />`;
const positionChar = 43; // pointing to 'l' in label
const tagRegex = /<([a-zA-Z0-9_-]+):([a-zA-Z0-9_-]+)\s*([^>]*)>/g;
let tagMatch;
while ((tagMatch = tagRegex.exec(lineText)) !== null) {
    const prefix = tagMatch[1];
    const componentName = tagMatch[2];
    const tagStart = tagMatch.index;
    const tagEnd = tagMatch.index + tagMatch[0].length;
    
    console.log("tagMatch", tagMatch[0]);

    if (positionChar >= tagStart && positionChar <= tagEnd) {
        console.log("Position is in tag.");
        
        const nameStart = tagStart + 1; // skip <
        const nameEnd = nameStart + prefix.length + 1 + componentName.length; // prefix:componentName
        
        const attrRegex = /([a-zA-Z0-9_-]+)\s*=/g;
        const attrsText = tagMatch[3];
        const attrsStartOffset = nameEnd;
        
        let attrMatch;
        while ((attrMatch = attrRegex.exec(attrsText)) !== null) {
            const attrName = attrMatch[1];
            const attrStart = attrsStartOffset + attrMatch.index;
            const attrEnd = attrStart + attrName.length;
            
            console.log(`Checking attr: ${attrName}, Start: ${attrStart}, End: ${attrEnd}, Char: ${positionChar}`);
            if (positionChar >= attrStart && positionChar <= attrEnd) {
                console.log(`BINGO! Clicked on attribute: ${attrName}`);
            }
        }
    }
}
