
import { defaultSiteData } from '../config/siteConfig';
import { SiteData } from '../types/siteData';

/**
 * Returns the site configuration data. 
 * In the future, this can be swapped with a CMS fetch (Strapi, Sanity, etc).
 */
export async function getSiteData(): Promise<SiteData> {
  // Simulating an async fetch
  return new Promise((resolve) => {
    setTimeout(() => resolve(defaultSiteData), 50);
  });
}
