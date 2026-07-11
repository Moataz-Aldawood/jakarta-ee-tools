const fs = require('fs');
const path = require('path');

const hTags = [
    'body', 'button', 'column', 'commandButton', 'commandLink', 'commandScript', 'dataTable', 'form', 
    'graphicImage', 'head', 'inputHidden', 'inputSecret', 'inputText', 'inputTextarea', 'link', 
    'message', 'messages', 'outputFormat', 'outputLabel', 'outputLink', 'outputScript', 
    'outputStylesheet', 'outputText', 'panelGrid', 'panelGroup', 'selectBooleanCheckbox', 
    'selectManyCheckbox', 'selectManyListbox', 'selectManyMenu', 'selectOneListbox', 
    'selectOneMenu', 'selectOneRadio'
];

const fTags = [
    'ajax', 'actionListener', 'attribute', 'convertDateTime', 'convertNumber', 'converter', 
    'event', 'facet', 'loadBundle', 'metadata', 'param', 'passThroughAttribute', 
    'passThroughAttributes', 'phaseListener', 'selectItem', 'selectItems', 
    'setPropertyActionListener', 'validateBean', 'validateDoubleRange', 'validateLength', 
    'validateLongRange', 'validateRegex', 'validateRequired', 'validator', 'view', 
    'viewAction', 'viewParam', 'websocket'
];

const uiTags = [
    'composition', 'debug', 'decorate', 'define', 'fragment', 'include', 'insert', 
    'param', 'remove', 'repeat'
];

const ccTags = [
    'attribute', 'clientBehavior', 'editableValueHolder', 'extension', 'facet', 
    'implementation', 'insertChildren', 'insertFacet', 'interface', 'renderFacet', 'valueHolder'
];

const catalog = {};

const baseHtmlAttrs = [
    { name: 'id', description: 'Component identifier' },
    { name: 'rendered', description: 'Flag indicating whether or not this component should be rendered', type: 'boolean' },
    { name: 'binding', description: 'The ValueExpression linking this component to a property in a backing bean' }
];

const visualAttrs = [
    { name: 'style', description: 'CSS style(s) to be applied' },
    { name: 'styleClass', description: 'Space-separated list of CSS style class(es)' }
];

const htmlAttrs = [
    { name: 'title', description: 'Advisory title information' },
    { name: 'lang', description: 'Code describing the language used' },
    { name: 'dir', description: 'Direction for weak/neutral text' },
    { name: 'tabindex', description: 'Position in the tabbing order' },
    { name: 'role', description: 'Per the WAI-ARIA spec, the role of this element' },
    { name: 'onclick', description: 'Javascript code executed when a pointer button is clicked' },
    { name: 'ondblclick', description: 'Javascript code executed when a pointer button is double clicked' },
    { name: 'onkeydown', description: 'Javascript code executed when a key is pressed down' },
    { name: 'onkeypress', description: 'Javascript code executed when a key is pressed and released' },
    { name: 'onkeyup', description: 'Javascript code executed when a key is released' },
    { name: 'onmousedown', description: 'Javascript code executed when a pointer button is pressed down' },
    { name: 'onmousemove', description: 'Javascript code executed when a pointer is moved' },
    { name: 'onmouseout', description: 'Javascript code executed when a pointer is moved away' },
    { name: 'onmouseover', description: 'Javascript code executed when a pointer is moved onto' },
    { name: 'onmouseup', description: 'Javascript code executed when a pointer button is released' },
    { name: 'onblur', description: 'Javascript code executed when this element loses focus' },
    { name: 'onfocus', description: 'Javascript code executed when this element receives focus' },
    { name: 'onchange', description: 'Javascript code executed when this element loses focus and its value has been modified' }
];

const inputAttrs = [
    { name: 'value', description: 'The current value of the component' },
    { name: 'required', description: 'Flag indicating that the user is required to provide a submitted value', type: 'boolean' },
    { name: 'validator', description: 'MethodExpression representing a validator method' },
    { name: 'valueChangeListener', description: 'MethodExpression representing a value change listener method' }
];

const commandAttrs = [
    { name: 'value', description: 'The current value of the component' },
    { name: 'action', description: 'MethodExpression representing the application action to invoke' },
    { name: 'actionListener', description: 'MethodExpression representing an action listener method' },
    { name: 'immediate', description: 'Flag indicating that this component\'s value must be converted and validated immediately', type: 'boolean' }
];

function addTags(prefix, list, defaultAttrs) {
    list.forEach(t => {
        let attrs = [...defaultAttrs];
        let desc = `Standard JSF tag ${prefix}:${t}`;
        
        if (prefix === 'h') {
            attrs.push(...baseHtmlAttrs);
            attrs.push(...htmlAttrs);
            if (!['head', 'body', 'message', 'messages'].includes(t)) attrs.push(...visualAttrs);
            if (t.startsWith('input') || t.startsWith('select')) attrs.push(...inputAttrs);
            if (t.startsWith('command')) attrs.push(...commandAttrs);
            if (t.startsWith('output')) attrs.push({ name: 'value', description: 'The value to output' });
            if (t === 'form') attrs.push(
                { name: 'enctype', description: 'Content type used to submit the form' },
                { name: 'prependId', description: 'Flag indicating whether or not this form should prepend its id to its descendent id', type: 'boolean' },
                { name: 'accept', description: 'List of content types that a server processing this form will handle correctly' },
                { name: 'acceptcharset', description: 'List of character encodings for input data that are accepted by the server processing this form' }
            );
        }

        if (t === 'ajax') {
            attrs = [
                { name: 'execute', description: 'Component identifiers to execute' },
                { name: 'render', description: 'Component identifiers to render' },
                { name: 'listener', description: 'Method expression for AjaxBehaviorEvent' },
                { name: 'event', description: 'Event triggering the Ajax request' }
            ];
        }

        if (t === 'composition' || t === 'decorate') {
            attrs = [{ name: 'template', description: 'The resolvable URI of the template to use' }];
        }
        if (t === 'include') {
            attrs = [{ name: 'src', description: 'The resolvable URI of the Facelet to include' }];
        }

        // Deduplicate attributes by name
        const uniqueAttrs = Array.from(new Map(attrs.map(a => [a.name, a])).values());

        catalog[`${prefix}:${t}`] = {
            name: `${prefix}:${t}`,
            description: desc,
            attributes: uniqueAttrs
        };
    });
}

addTags('h', hTags, []);
addTags('f', fTags, []);
addTags('ui', uiTags, []);
addTags('cc', ccTags, []);

let outContent = `export interface JsfAttribute {
    name: string;
    description: string;
    type?: string;
}

export interface JsfTag {
    name: string;
    description: string;
    attributes: JsfAttribute[];
}

export const JSF_CATALOG: Record<string, JsfTag> = `;

outContent += JSON.stringify(catalog, null, 4) + ';\n';

fs.writeFileSync(path.join(__dirname, 'jsfCatalog.ts'), outContent);
console.log('Catalog generated with ' + Object.keys(catalog).length + ' tags.');
