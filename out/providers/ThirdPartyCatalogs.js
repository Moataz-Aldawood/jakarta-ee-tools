"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getActiveThirdPartyCatalogs = getActiveThirdPartyCatalogs;
const primefacesCatalog_1 = require("./primefacesCatalog");
const omnifacesCatalog_1 = require("./omnifacesCatalog");
function getActiveThirdPartyCatalogs(text) {
    const combined = {};
    // Check for PrimeFaces (http://primefaces.org/ui or primefaces namespace)
    if (/xmlns:[a-zA-Z0-9_-]+\s*=\s*["'](?:http:\/\/primefaces\.org\/ui|primefaces)["']/.test(text) || /xmlns:p=/.test(text)) {
        Object.assign(combined, primefacesCatalog_1.PRIMEFACES_CATALOG);
    }
    // Check for OmniFaces (http://omnifaces.org/ui or omnifaces namespace)
    if (/xmlns:[a-zA-Z0-9_-]+\s*=\s*["'](?:http:\/\/omnifaces\.org\/ui|omnifaces)["']/.test(text) || /xmlns:o=/.test(text)) {
        Object.assign(combined, omnifacesCatalog_1.OMNIFACES_CATALOG);
    }
    return combined;
}
//# sourceMappingURL=ThirdPartyCatalogs.js.map