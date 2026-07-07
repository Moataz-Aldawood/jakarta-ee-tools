const text = `<ui:composition xmlns="http://www.w3.org/1999/xhtml"
                xmlns:ui="jakarta.faces.facelets"
                xmlns:h="jakarta.faces.html"
                xmlns:f="jakarta.faces.core"
                xmlns:tc="jakarta.faces.composite/tc"
                template="/WEB-INF/templates/master-auth-template.xhtml">
    <ui:define name="content">`;

const regex = /xmlns:([a-zA-Z0-9_-]+)=["'][^"']*composite\/([^"']+)["']/g;
let match;
while ((match = regex.exec(text)) !== null) {
    console.log("Found:", match[1], "->", match[2]);
}
