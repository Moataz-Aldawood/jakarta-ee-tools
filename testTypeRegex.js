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

function findPropertyType(content, propertyName) {
    const capitalizedProp = propertyName.charAt(0).toUpperCase() + propertyName.slice(1);
    
    // Check getter: public User getUser()
    const getterRegex = new RegExp(`(?:public|protected|private)?\\s+([\\w<>\\[\\]\\?,]+)\\s+(?:get|is)${capitalizedProp}\\s*\\(`, 'g');
    let match = getterRegex.exec(content);
    if (match) {
        return match[1]; // Type
    }
    
    // Check field: private User user;
    const fieldRegex = new RegExp(`(?:private|protected|public)?\\s+([\\w<>\\[\\]\\?,]+)\\s+${propertyName}\\s*[;=]`, 'g');
    match = fieldRegex.exec(content);
    if (match) {
        return match[1]; // Type
    }
    
    return null;
}

console.log("user:", findPropertyType(content, "user"));
console.log("myUser:", findPropertyType(content, "myUser"));
console.log("addresses:", findPropertyType(content, "addresses"));
