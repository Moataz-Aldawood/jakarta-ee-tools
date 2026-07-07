const content = `
    <cc:interface>
        <cc:attribute name="label" type="java.lang.String" shortDescription="The label"/>
        <composite:attribute name='value' />
    </cc:interface>
`;

const attrRegex = /<[a-zA-Z0-9_-]+:attribute\s+([^>]+)>/g;
let match;
while ((match = attrRegex.exec(content)) !== null) {
    const attrBody = match[1];
    console.log("attrBody:", attrBody);
    
    const nameMatch = /name=["']([^"']+)["']/.exec(attrBody);
    const typeMatch = /type=["']([^"']+)["']/.exec(attrBody);
    const descMatch = /shortDescription=["']([^"']+)["']/.exec(attrBody);
    
    if (nameMatch) {
        console.log("Found:", nameMatch[1], typeMatch ? typeMatch[1] : 'java.lang.Object');
    }
}
