/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

/**
 * Initializes Google Search Console meta verification tags and Google Analytics scripts.
 * Runs on app initialization.
 */
export function initIntegrations() {
  if (typeof window === 'undefined') return;

  // 1. Google Search Console Verification
  const gscId = (import.meta as any).env.VITE_GSC_VERIFICATION_ID;
  if (gscId) {
    const existingMeta = document.querySelector('meta[name="google-site-verification"]');
    if (!existingMeta) {
      const meta = document.createElement('meta');
      meta.name = 'google-site-verification';
      meta.content = gscId;
      document.head.appendChild(meta);
      console.log('[Karwan Safina-e-Raza] Google Search Console site verification injected.');
    }
  }

  // 2. Google Analytics Tracking Script (gtag.js)
  const gaId = (import.meta as any).env.VITE_GA_MEASUREMENT_ID;
  if (gaId) {
    const existingScript = document.querySelector(`script[src*="googletagmanager.com/gtag/js"]`);
    if (!existingScript) {
      // Create and append gtag script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(script);

      // Initialize analytics array
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer.push(arguments);
      };

      // Set config
      window.gtag('js', new Date());
      window.gtag('config', gaId, {
        page_path: window.location.pathname,
      });
      console.log('[Karwan Safina-e-Raza] Google Analytics (gtag) initialized.');
    }
  }
}

/**
 * Tracks a pageview event inside the React SPA router.
 * @param path The current page pathname to track
 */
export function trackPageView(path: string) {
  const gaId = (import.meta as any).env.VITE_GA_MEASUREMENT_ID;
  if (gaId && window.gtag) {
    window.gtag('config', gaId, {
      page_path: path,
    });
  }
}
