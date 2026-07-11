# Jakarta EE Tools - Project Context

Hello Antigravity! If you are reading this, it means you have been instantiated on Moataz's laptop (or another device) to continue working on the `jakarta-ee-tools` VS Code extension.

## Project Summary
This extension provides advanced language features for JSF (`.xhtml`, `.jsf`), including:
- **Jump to Definition**: Deep nested Java EL resolution (e.g., `#{bean.user.address.street}`), resource files, and JSF templates.
- **Custom Composite Components**: On-the-fly namespace parsing for tags like `<tc:myComponent>` and their inner `<cc:attribute>` tags.
- **Real-Time Diagnostics**: Syntax error checking for unclosed `#{` brackets and unknown tags.
- **Hover Documentation**: Javadoc-style tooltips for JSF standard tags (`h:`, `f:`, `ui:`).

## Code Architecture
- `src/providers/JsfDefinitionProvider.ts`: The heavy lifter. Handles all `Ctrl+Click` jump logic. Uses a custom engine that recursively parses Java classes, strips Generics (`List<T>`), and finds properties without a language server.
- `src/providers/JsfCompletionProvider.ts`: Handles auto-complete for tags and attributes.
- `src/providers/JsfDiagnostics.ts`: Handles the yellow/red squiggly lines.
- `src/providers/namespaceParser.ts`: Regex-based engine to discover `xmlns:` declarations and map them to workspace directories.

## Backlog / Next Steps
Moataz wants to keep version 1 simple, so the following features have been explicitly pushed to the backlog (do NOT implement them unless Moataz asks):
1. **Component File Caching**: Instant jump-to-definition via Java file caching to prevent locking the UI thread on huge enterprise workspaces.
2. **EL Auto-Complete (IntelliSense)**: Deep auto-complete for Java Managed Beans, properties, and methods.
3. **EL Semantic Validation**: Real-time diagnostics for mistyped Java beans and properties within EL expressions.
4. **3rd-Party Tag library support**: PrimeFaces integration.
5. **EL Expression Highlighting**: Syntax highlighting for `#{...}`.
6. **Expanded Hover Documentation**: Full docs in hover popups.
7. **Attribute Hover Documentation**: Rich docs for standard tag attributes.
8. **Component Linking**: Colorize `for="..."` and link to `id="..."`.
9. **`ui:repeat` support**: Deep resolution testing for iteration variables.

When Moataz gives you a new task, you are fully authorized to jump right in and help him build it!
