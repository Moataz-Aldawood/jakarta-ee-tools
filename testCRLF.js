const text = "<ui:composition xmlns=\"http://www.w3.org/1999/xhtml\"\r\n" +
"                xmlns:ui=\"jakarta.faces.facelets\"\r\n" +
"                xmlns:h=\"jakarta.faces.html\"\r\n" +
"                xmlns:f=\"jakarta.faces.core\"\r\n" +
"                xmlns:tc=\"jakarta.faces.composite/tc\"\r\n" +
"                template=\"/WEB-INF/templates/master-auth-template.xhtml\">\r\n" +
"    <ui:define name=\"content\">\r\n" +
"        <tc:labeledInput id=\"inputText_Name\" label=\"Name:\" value=\"#{myController.name}\" />\r\n" +
"    </ui:define>\r\n" +
"</ui:composition>";

const regex = /xmlns:([a-zA-Z0-9_-]+)=["'][^"']*composite\/([^"']+)["']/g;
let match;
while ((match = regex.exec(text)) !== null) {
    console.log("Found:", match[1], "->", match[2]);
}

const lineText = '        <tc:labeledInput id="inputText_Name" label="Name:" value="#{myController.name}" />';
const tagRegex = /<([a-zA-Z0-9_-]+):([a-zA-Z0-9_-]+)\s*([^>]*)>/g;
let tagMatch = tagRegex.exec(lineText);
console.log("tagMatch:", !!tagMatch);
