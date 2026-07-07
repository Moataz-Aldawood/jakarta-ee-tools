const text = `
<html xmlns="http://www.w3.org/1999/xhtml"
      xmlns:tc="jakarta.faces.composite/cc">
<body>
    <tc:labeledInput id="inputText_Name" label="Name:" value="#{myController.name}" />
</body>
</html>
`;

// test namespace parser
const namespaceRegex = /xmlns:([a-zA-Z0-9_-]+)=["'][^"']*composite\/([^"']+)["']/g;
let match;
const namespaces = {};
while ((match = namespaceRegex.exec(text)) !== null) {
    namespaces[match[1]] = match[2];
}
console.log("Namespaces:", namespaces);

// test tag regex
const lineText = `    <tc:labeledInput id="inputText_Name" label="Name:" value="#{myController.name}" />`;
const tagRegex = /<([a-zA-Z0-9_-]+):([a-zA-Z0-9_-]+)\s*([^>]*)>/g;
let tagMatch = tagRegex.exec(lineText);
if (tagMatch) {
    console.log("Tag Prefix:", tagMatch[1]);
    console.log("Tag Name:", tagMatch[2]);
    console.log("Tag Attrs:", tagMatch[3]);
} else {
    console.log("Tag Regex FAILED");
}

// test autocomplete regex
const typingLine = `<tc:`;
const autocompleteRegex = /<([a-zA-Z0-9_:-]*)$/.exec(typingLine);
if (autocompleteRegex) {
    console.log("Autocomplete Regex matched:", autocompleteRegex[1]);
} else {
    console.log("Autocomplete Regex FAILED");
}
