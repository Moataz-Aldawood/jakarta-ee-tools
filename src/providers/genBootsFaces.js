const fs = require('fs');
const path = require('path');
const https = require('https');
const { execSync } = require('child_process');

const jarUrl = 'https://repo1.maven.org/maven2/net/bootsfaces/bootsfaces/2.0.1/bootsfaces-2.0.1.jar';
const jarPath = path.join(__dirname, 'bootsfaces-2.0.1.jar');
const taglibPath = path.join(__dirname, 'bootsfaces-b.taglib.xml');
const outPath = path.join(__dirname, 'bootsfacesCatalog.ts');

function cleanHtml(html, firstParagraphOnly = false) {
    if (!html) return '';
    let text = html
        .replace(/<p>|<br\s*\/?>/gi, '\n\n')
        .replace(/<strong>|<b>/gi, '**')
        .replace(/<\/strong>|<\/b>/gi, '**')
        .replace(/<code>|<pre>/gi, '`')
        .replace(/<\/code>|<\/pre>/gi, '`')
        .replace(/<li>/gi, '\n- ')
        .replace(/<[^>]+>/g, '') // strip all other tags (like table, tr, td, h2)
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .replace(/[ \t]+/g, ' ')
        .replace(/ \n/g, '\n')
        .replace(/\n \n/g, '\n\n')
        .replace(/\n\n+/g, '\n\n')
        .trim();
        
    if (firstParagraphOnly) {
        text = text.split('\n\n')[0].replace(/\n/g, ' ').trim();
    }
    
    return text;
}

function downloadFile(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode === 302 || response.statusCode === 301) {
                downloadFile(response.headers.location, dest).then(resolve).catch(reject);
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close(resolve);
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => {});
            reject(err);
        });
    });
}

async function run() {
    if (!fs.existsSync(jarPath)) {
        console.log('Downloading BootsFaces jar...');
        await downloadFile(jarUrl, jarPath);
    }

    if (!fs.existsSync(taglibPath)) {
        console.log('Extracting taglib...');
        try {
            execSync(`tar -xf ${path.basename(jarPath)} META-INF/bootsfaces-b.taglib.xml`, { cwd: __dirname });
            fs.copyFileSync(path.join(__dirname, 'META-INF', 'bootsfaces-b.taglib.xml'), taglibPath);
            fs.rmSync(path.join(__dirname, 'META-INF'), { recursive: true, force: true });
        } catch (e) {
            console.error('Failed to extract taglib:', e.message);
            return;
        }
    }

    console.log('Parsing taglib...');
    const xml = fs.readFileSync(taglibPath, 'utf8');

    const catalog = {};
    const tagRegex = /<tag>([\s\S]*?)<\/tag>/g;
    let tagMatch;

    while ((tagMatch = tagRegex.exec(xml)) !== null) {
        const tagBlock = tagMatch[1];
        const nameMatch = /<tag-name>(.*?)<\/tag-name>/.exec(tagBlock);
        if (!nameMatch) continue;
        const tagName = nameMatch[1];

        const attrs = [];
        const attrRegex = /<attribute>([\s\S]*?)<\/attribute>/g;
        let attrMatch;
        while ((attrMatch = attrRegex.exec(tagBlock)) !== null) {
            const attrBlock = attrMatch[1];
            const attrNameMatch = /<name>(.*?)<\/name>/.exec(attrBlock);
            if (attrNameMatch) {
                const attrName = attrNameMatch[1];
                let desc = '';
                const descMatch = /<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/.exec(attrBlock) 
                               || /<description>([\s\S]*?)<\/description>/.exec(attrBlock);
                if (descMatch) {
                    desc = cleanHtml(descMatch[1], true);
                }
                
                let type = 'string';
                const typeMatch = /<type>(.*?)<\/type>/.exec(attrBlock);
                if (typeMatch && typeMatch[1].includes('Boolean')) {
                    type = 'boolean';
                }
                
                attrs.push({ name: attrName, description: desc, type });
            }
        }

        let tagDesc = '';
        const tagDescMatch = /<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/.exec(tagBlock)
                          || /<description>([\s\S]*?)<\/description>/.exec(tagBlock);
        if (tagDescMatch) {
            tagDesc = cleanHtml(tagDescMatch[1], true);
        } else {
            tagDesc = `BootsFaces tag b:${tagName}`;
        }

        catalog[`b:${tagName}`] = {
            name: `b:${tagName}`,
            description: tagDesc,
            attributes: attrs
        };
    }

    let outContent = `import { JsfTag } from './jsfCatalog';\n\n`;
    outContent += `export const BOOTSFACES_CATALOG: Record<string, JsfTag> = `;
    outContent += JSON.stringify(catalog, null, 4) + ';\n';

    fs.writeFileSync(outPath, outContent);
    console.log(`Generated bootsfacesCatalog.ts with ${Object.keys(catalog).length} tags.`);
}

run().catch(console.error);
