const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const url = 'https://repo1.maven.org/maven2/org/primefaces/primefaces/15.0.17/primefaces-15.0.17.jar';
const zipName = 'primefaces.zip';
const extractDir = 'primefaces_extracted';

console.log('Downloading PrimeFaces 15.0.17 JAR...');
execSync(`powershell -Command "Invoke-WebRequest -Uri '${url}' -OutFile '${zipName}'"`, { stdio: 'inherit' });

console.log('Extracting JAR...');
execSync(`powershell -Command "Expand-Archive -Path '${zipName}' -DestinationPath '${extractDir}' -Force"`, { stdio: 'inherit' });

console.log('Looking for taglib XML...');
const taglibPath = path.join(__dirname, extractDir, 'META-INF', 'primefaces-p.taglib.xml');
let xmlContent = '';
if (fs.existsSync(taglibPath)) {
    xmlContent = fs.readFileSync(taglibPath, 'utf8');
} else {
    // Try without -p
    const altPath = path.join(__dirname, extractDir, 'META-INF', 'primefaces.taglib.xml');
    if (fs.existsSync(altPath)) {
        xmlContent = fs.readFileSync(altPath, 'utf8');
    } else {
        console.error('Could not find PrimeFaces taglib XML!');
        process.exit(1);
    }
}

console.log('Parsing XML...');
const catalog = {};
const tagRegex = /<tag>([\s\S]*?)<\/tag>/g;
const nameRegex = /<tag-name>(.*?)<\/tag-name>/;
const descRegex = /<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/;
const fallbackDescRegex = /<description>([\s\S]*?)<\/description>/;

const attrRegex = /<attribute>([\s\S]*?)<\/attribute>/g;
const attrNameRegex = /<name>(.*?)<\/name>/;
const attrTypeRegex = /<type>(.*?)<\/type>/;

let tagMatch;
let tagCount = 0;
while ((tagMatch = tagRegex.exec(xmlContent)) !== null) {
    const tagContent = tagMatch[1];
    
    const nameM = nameRegex.exec(tagContent);
    if (!nameM) continue;
    const tagName = nameM[1].trim();
    
    let descM = descRegex.exec(tagContent) || fallbackDescRegex.exec(tagContent);
    let desc = descM ? descM[1].trim() : `PrimeFaces tag p:${tagName}`;
    // clean html tags from desc if any
    desc = desc.replace(/<[^>]*>?/gm, '');

    const attributes = [];
    let attrMatch;
    while ((attrMatch = attrRegex.exec(tagContent)) !== null) {
        const attrContent = attrMatch[1];
        const aNameM = attrNameRegex.exec(attrContent);
        if (!aNameM) continue;
        
        let aDescM = descRegex.exec(attrContent) || fallbackDescRegex.exec(attrContent);
        let aDesc = aDescM ? aDescM[1].trim().replace(/<[^>]*>?/gm, '') : '';
        
        const aTypeM = attrTypeRegex.exec(attrContent);
        const aType = aTypeM ? aTypeM[1].trim() : 'String';

        attributes.push({
            name: aNameM[1].trim(),
            description: aDesc,
            type: aType
        });
    }

    catalog[`p:${tagName}`] = {
        name: `p:${tagName}`,
        description: desc,
        attributes: attributes
    };
    tagCount++;
}

console.log(`Parsed ${tagCount} PrimeFaces tags.`);

let outContent = `import { JsfTag } from './jsfCatalog';\n\nexport const PRIMEFACES_CATALOG: Record<string, JsfTag> = `;
outContent += JSON.stringify(catalog, null, 4) + ';\n';

fs.writeFileSync(path.join(__dirname, 'primefacesCatalog.ts'), outContent);
console.log('primefacesCatalog.ts generated successfully.');

// Cleanup
fs.unlinkSync(zipName);
execSync(`powershell -Command "Remove-Item -Recurse -Force '${extractDir}'"`);
console.log('Cleanup done.');
