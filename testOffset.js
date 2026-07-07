const lineText = `    <tc:labeledInput id="inputText_Name" label="Name:" value="#{myController.name}" />`;
const tagRegex = /<([a-zA-Z0-9_-]+):([a-zA-Z0-9_-]+)\s*([^>]*)>/g;
let tagMatch = tagRegex.exec(lineText);

const tagStart = tagMatch.index;
const attrsText = tagMatch[3];
const attrsStartOffset = tagStart + tagMatch[0].length - 1 - attrsText.length;

console.log("tagMatch[0]:", tagMatch[0]);
console.log("attrsText:", attrsText);
console.log("Expected start of attrsText:", lineText.indexOf('id="'));
console.log("Calculated attrsStartOffset:", attrsStartOffset);
