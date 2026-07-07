const content = `
package com.example;

import java.util.List;

public class MyBean {
    private User myUser;
    
    public User getUser() {
        return myUser;
    }
    
    public List<Address> getAddresses() {
        return null;
    }
}
`;

function findPropertyTypeInContent(content, propertyName) {
    const capitalizedProp = propertyName.charAt(0).toUpperCase() + propertyName.slice(1);
    
    // Check getter
    const getterRegex = new RegExp(`(?:public|protected|private)?\\s+([\\w<>\\[\\]\\?,]+)\\s+(?:get|is)${capitalizedProp}\\s*\\(`, 'g');
    let match = getterRegex.exec(content);
    if (match) {
        return extractBaseType(match[1]);
    }
    
    // Check field
    const fieldRegex = new RegExp(`(?:private|protected|public)?\\s+([\\w<>\\[\\]\\?,]+)\\s+${propertyName}\\s*[;=]`, 'g');
    match = fieldRegex.exec(content);
    if (match) {
        return extractBaseType(match[1]);
    }
    
    return null;
}

function extractBaseType(rawType) {
    // Strip List<Type> -> Type
    const genericMatch = /<([^>]+)>/.exec(rawType);
    if (genericMatch) {
        const innerType = genericMatch[1];
        // If it's something like Map<String, User>, take the last one (value type)
        const parts = innerType.split(',');
        return parts[parts.length - 1].trim();
    }
    // Strip arrays User[] -> User
    return rawType.replace(/\[\]/g, '').trim();
}

console.log("user ->", findPropertyTypeInContent(content, "user"));
console.log("myUser ->", findPropertyTypeInContent(content, "myUser"));
console.log("addresses ->", findPropertyTypeInContent(content, "addresses"));
