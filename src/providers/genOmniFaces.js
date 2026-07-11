const fs = require('fs');
const path = require('path');
const https = require('https');
const { execSync } = require('child_process');

const jarUrl = 'https://repo1.maven.org/maven2/org/omnifaces/omnifaces/5.3.4/omnifaces-5.3.4.jar';
const jarPath = path.join(__dirname, 'omnifaces-5.3.4.jar');
const taglibPath = path.join(__dirname, 'omnifaces.taglib.xml');
const outPath = path.join(__dirname, 'omnifacesCatalog.ts');

function cleanHtml(html, firstParagraphOnly = false) {
    if (!html) return '';
    let text = html
        .replace(/<!\[CDATA\[/gi, '')
        .replace(/\]\]>/gi, '')
        .replace(/&lt;p&gt;|&lt;br\s*\/?&gt;|<p>|<br\s*\/?>/gi, '\n\n')
        .replace(/&lt;\/p&gt;|<\/p>/gi, '')
        .replace(/&lt;ul&gt;|&lt;\/ul&gt;|&lt;ol&gt;|&lt;\/ol&gt;|<ul>|<\/ul>|<ol>|<\/ol>/gi, '\n\n')
        .replace(/&lt;li&gt;|<li>/gi, '\n- ')
        .replace(/&lt;\/li&gt;|<\/li>/gi, '')
        .replace(/&lt;strong&gt;|&lt;\/strong&gt;|&lt;b&gt;|&lt;\/b&gt;|<strong>|<\/strong>|<b>|<\/b>/gi, '**')
        .replace(/&lt;code&gt;|&lt;pre&gt;|<code>|<pre>/gi, '`')
        .replace(/&lt;\/code&gt;|&lt;\/pre&gt;|<\/code>|<\/pre>/gi, '`')
        .replace(/&lt;/gi, '<')
        .replace(/&gt;/gi, '>')
        .replace(/&amp;/gi, '&')
        .replace(/&quot;/gi, '"')
        .replace(/<\/?(div|span|a|h[1-6]|table|tr|td|th|tbody|thead|dl|dt|dd)[^>]*>/gi, '')
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
        console.log('Downloading OmniFaces jar...');
        await downloadFile(jarUrl, jarPath);
    }

    if (!fs.existsSync(taglibPath)) {
        console.log('Extracting taglib...');
        try {
            execSync(`tar -xf ${path.basename(jarPath)} META-INF/omnifaces.taglib.xml`, { cwd: __dirname });
            fs.copyFileSync(path.join(__dirname, 'META-INF', 'omnifaces.taglib.xml'), taglibPath);
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
            tagDesc = `OmniFaces tag o:${tagName}`;
        }

        catalog[`o:${tagName}`] = {
            name: `o:${tagName}`,
            description: tagDesc,
            attributes: attrs
        };
    }

    let outContent = `import { JsfTag } from './jsfCatalog';\n\n`;
    outContent += `export const OMNIFACES_CATALOG: Record<string, JsfTag> = `;
    outContent += JSON.stringify(catalog, null, 4) + ';\n';

    fs.writeFileSync(outPath, outContent);
    console.log(`Generated omnifacesCatalog.ts with ${Object.keys(catalog).length} tags.`);
}

run().catch(console.error);
