const docText = `<ui:composition xmlns="http://www.w3.org/1999/xhtml"
                xmlns:ui="jakarta.faces.facelets"
                xmlns:h="jakarta.faces.html"
                xmlns:f="jakarta.faces.core"
                xmlns:tc="jakarta.faces.composite/tc"
                template="/WEB-INF/templates/master-auth-template.xhtml">
    <ui:define name="content">
        <tc:labeledInput id="inputText_Name" label="Name:" value="#{myController.name}" />
    </ui:define>
</ui:composition>`;

// Simulated namespace parse
const regex = /xmlns:([a-zA-Z0-9_-]+)=["'][^"']*composite\/([^"']+)["']/g;
let match;
const namespaces = {};
while ((match = regex.exec(docText)) !== null) {
    namespaces[match[1]] = match[2];
}
console.log("Parsed namespaces:", namespaces);

// Simulated completion at `<tc:labeledInput ` (position at space)
const linePrefix1 = "        <tc:labeledInput ";
const insideTagMatch = /<([a-zA-Z0-9_:-]+)\s+[^>]*$/.exec(linePrefix1);
if (insideTagMatch) {
    console.log("Autocomplete tagName:", insideTagMatch[1]);
    const parts = insideTagMatch[1].split(':');
    if (parts.length === 2) {
        console.log("Autocomplete Prefix:", parts[0], "Component:", parts[1]);
        console.log("Resolved folder:", namespaces[parts[0]]);
    }
}

// Simulated jump to `label`
const lineText2 = `        <tc:labeledInput id="inputText_Name" label="Name:" value="#{myController.name}" />`;
const positionChar2 = 47; // Pointing to 'label'
const tagRegex = /<([a-zA-Z0-9_-]+):([a-zA-Z0-9_-]+)\s*([^>]*)>/g;
let tagMatch = tagRegex.exec(lineText2);
if (tagMatch) {
    const tagStart = tagMatch.index;
    const prefix = tagMatch[1];
    const componentName = tagMatch[2];
    const attrsText = tagMatch[3];
    const attrsStartOffset = tagStart + tagMatch[0].length - 1 - attrsText.length;
    
    console.log("Jump Tag:", prefix, ":", componentName);
    console.log("Jump folder:", namespaces[prefix]);
    
    const attrRegex = /([a-zA-Z0-9_-]+)\s*=/g;
    let attrMatch;
    while ((attrMatch = attrRegex.exec(attrsText)) !== null) {
        const attrName = attrMatch[1];
        const attrStart = attrsStartOffset + attrMatch.index;
        const attrEnd = attrStart + attrName.length;
        
        if (positionChar2 >= attrStart && positionChar2 <= attrEnd) {
            console.log("Clicked attribute BINGO:", attrName);
        }
    }
}
