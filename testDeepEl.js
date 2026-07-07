const fs = require('fs');
const path = require('path');

const beanContent = `
package com.example;

@Named("myBean")
public class MyBean {
    private User myUser;
    
    public User getUser() { return myUser; }
}
`;

const userContent = `
package com.example;

public class User {
    private Address address;
    public Address getAddress() { return address; }
}
`;

const addressContent = `
package com.example;

public class Address {
    private String street;
    public String getStreet() { return street; }
}
`;

fs.writeFileSync('MyBean.java', beanContent);
fs.writeFileSync('User.java', userContent);
fs.writeFileSync('Address.java', addressContent);

// This mimics the logic in our extension
const mockWorkspaceFiles = {
    'MyBean.java': beanContent,
    'User.java': userContent,
    'Address.java': addressContent
};

function extractBaseType(rawType) {
    const genericMatch = /<([^>]+)>/.exec(rawType);
    if (genericMatch) {
        const innerType = genericMatch[1];
        const parts = innerType.split(',');
        return parts[parts.length - 1].trim();
    }
    return rawType.replace(/\[\]/g, '').trim();
}

function findPropertyTypeInContent(content, propertyName) {
    const capitalizedProp = propertyName.charAt(0).toUpperCase() + propertyName.slice(1);
    
    const getterRegex = new RegExp(`(?:public|protected|private)?\\s+([\\w<>\\[\\]\\?,]+)\\s+(?:get|is)${capitalizedProp}\\s*\\(`);
    let match = getterRegex.exec(content);
    if (match) return extractBaseType(match[1]);
    
    const fieldRegex = new RegExp(`(?:private|protected|public)?\\s+([\\w<>\\[\\]\\?,]+)\\s+${propertyName}\\s*[;=]`);
    match = fieldRegex.exec(content);
    if (match) return extractBaseType(match[1]);
    
    return null;
}

// Simulate user clicking on "street" in #{myBean.user.address.street}
const parts = ['myBean', 'user', 'address', 'street'];
const currentPartIndex = 3;

let currentClass = 'MyBean'; // Assumed from bean resolution
let currentContent = mockWorkspaceFiles['MyBean.java'];

console.log("Starting with:", currentClass);

for (let i = 1; i <= currentPartIndex; i++) {
    const prop = parts[i];
    console.log(`\nResolving property [${prop}] in [${currentClass}]...`);
    
    if (i === currentPartIndex) {
        console.log(`BINGO! We reached the target. Property definition in ${currentClass}.`);
        break;
    }
    
    const typeName = findPropertyTypeInContent(currentContent, prop);
    console.log(`Type of [${prop}] is [${typeName}]`);
    
    if (!typeName) {
        console.log("FAILED to find type.");
        break;
    }
    
    currentClass = typeName;
    currentContent = mockWorkspaceFiles[`${currentClass}.java`];
    if (!currentContent) {
        console.log("FAILED to find class file for", currentClass);
        break;
    }
}

// Cleanup
fs.unlinkSync('MyBean.java');
fs.unlinkSync('User.java');
fs.unlinkSync('Address.java');
