# Jakarta EE Tools

**Authors:** Moataz Aldawood and his friend Google Gemini ;)

**GitHub Repository:** [https://github.com/Moataz-Aldawood/jakarta-ee-tools](https://github.com/Moataz-Aldawood/jakarta-ee-tools)

A powerful Visual Studio Code extension designed to supercharge your Jakarta EE (JSF) development experience. This extension provides deep language features for JSF `.xhtml` and `.jsf` files, bringing IDE-level intelligence to VS Code.

## Features

### 1. Advanced Jump-to-Definition (Ctrl+Click)
Navigate seamlessly through your JSF project structure and Java backend with standard `Ctrl+Click` interactions.
- **Deep Nested Java EL Resolution**: `Ctrl+Click` on any segment of an Expression Language binding (e.g. `#{myBean.user.address.street}`) to instantly jump to the underlying Java Bean class, and iteratively resolve the exact property or field definition at any depth level! The extension automatically strips Generic wrappers (like `List<T>`) to find the exact target.
- **Template Navigation**: `Ctrl+Click` on `template="/WEB-INF/templates/master.xhtml"` to open the template file.
- **Resource Navigation**: `Ctrl+Click` on `#{resource['css/styles.css']}` to instantly open the corresponding static resource from your `src/main/webapp/resources` folder.

### 2. Standard JSF 4.1 Tag Intelligence
Enjoy first-class support for standard JSF 4.1 tags (`<h:`, `<f:`, `<ui:`).
- **Auto-Complete**: Start typing a tag or hit `Ctrl+Space` inside a tag to get auto-complete suggestions for both standard JSF tags and all their available attributes.
- **Rich Hover Documentation**: Hover over any standard JSF tag to see a concise description of what the component does, along with a direct link to the official Jakarta EE 4.1 Specification documentation.

### 3. Custom Composite Components Support
Built-in intelligence for your workspace's custom JSF Composite Components without any manual configuration!
- **Dynamic Namespace Parsing**: The extension reads your `xmlns:` declarations (e.g. `xmlns:tc="jakarta.faces.composite/tc"`) on-the-fly to discover your custom folders.
- **Custom Tag Auto-Complete**: Start typing your custom prefix (e.g., `<tc:`) and the extension will scan your workspace's `resources` folder and suggest all the `.xhtml` components it finds.
- **Custom Attribute Auto-Complete**: Type inside a custom component tag (e.g., `<tc:labeledInput |>`) and it will dynamically read the target component file and suggest all the `<cc:attribute>` names you defined inside it!
- **Jump to Custom Component**: `Ctrl+Click` on a custom tag name to jump directly to the component's `.xhtml` file in your workspace.
- **Jump to Custom Attribute**: `Ctrl+Click` on a specific attribute in your custom tag to jump precisely to that `<cc:attribute>` definition line inside the component file!

### 4. Real-time Syntax Error Diagnostics
Catch JSF mistakes before you ever run the application.
- **EL Syntax Checking**: The extension runs in the background and will flag unmatched Expression Language brackets (e.g. `#{myBean` missing the closing `}`) with a red error squiggly.
- **Unknown Tag Detection**: Mistyped standard tags (e.g., `<h:outpottText>`) will be flagged with a yellow warning squiggly, letting you know it isn't a recognized JSF tag.

## Requirements
- Works best in standard Maven-structured projects with `src/main/webapp/resources` folders, but is flexible enough to adapt to other directory structures.
- Does not require a Java Language Server to be running, but synergizes excellently with standard Java extensions.

## Future Enhancements
- Component file caching for extreme performance on huge enterprise workspaces.
- 3rd-Party Tag library support (e.g., PrimeFaces).

## License
This project is licensed under the GPL-3.0 License.
