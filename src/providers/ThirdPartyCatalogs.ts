import { JsfTag } from './jsfCatalog';
import { PRIMEFACES_CATALOG } from './primefacesCatalog';
import { OMNIFACES_CATALOG } from './omnifacesCatalog';

export function getActiveThirdPartyCatalogs(text: string): Record<string, JsfTag> {
    const combined: Record<string, JsfTag> = {};
    
    // Check for PrimeFaces (http://primefaces.org/ui or primefaces namespace)
    if (/xmlns:[a-zA-Z0-9_-]+\s*=\s*["'](?:http:\/\/primefaces\.org\/ui|primefaces)["']/.test(text) || /xmlns:p=/.test(text)) {
        Object.assign(combined, PRIMEFACES_CATALOG);
    }
    
    // Check for OmniFaces (http://omnifaces.org/ui or omnifaces namespace)
    if (/xmlns:[a-zA-Z0-9_-]+\s*=\s*["'](?:http:\/\/omnifaces\.org\/ui|omnifaces)["']/.test(text) || /xmlns:o=/.test(text)) {
        Object.assign(combined, OMNIFACES_CATALOG);
    }
    
    return combined;
}
