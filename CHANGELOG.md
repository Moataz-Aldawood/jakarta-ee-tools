# Changelog

All notable changes to the "jakarta-faces-tools" extension will be documented in this file.

## [2.0.2] - 2026-07-15
### Fixed
- **Multi-line Tag Parsing Regression**: Fixed a critical issue where features like IntelliSense, Jump-to-Definition, and Hover Documentation failed to trigger for JSF tags (especially custom composite components) that spanned across multiple lines. The extension now uses an advanced robust tag parser that accurately extracts enclosing tags regardless of formatting.

## [2.0.0] - 2026-07-14
### Added
- **Deep Nested Java EL Resolution**: Complete support for iterative resolution of nested Java beans (e.g. `#{myBean.user.address.street}`) with automatic generic type stripping.
- **Custom Composite Components Intelligence**: Full, dynamic workspace scanning for custom namespaces and attributes without any manual configuration.
- **Real-time Diagnostics**: Added in-editor syntax validation for EL brackets, unknown tags, and undefined attributes.
- **Configurable EL Highlighting**: Added native syntax highlighting for `#{...}` expressions to improve code readability, fully customizable via VS Code settings.
- **Third-Party Support**: Added out-of-the-box auto-complete and documentation hover for PrimeFaces (15.0.0), OmniFaces (5.3.4), and BootsFaces (2.0.1).

### Changed
- Replaced visual document links with seamless Definition Provider implementations to remove unwanted permanent underlines on JSF tags and resources.
