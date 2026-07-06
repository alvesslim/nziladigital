import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  noindex?: boolean;
  jsonLd?: object | object[];
}

/**
 * SEOHead — injects dynamic SEO meta tags for each page.
 * Lightweight, no external dependencies, works with React Router.
 */
export function SEOHead({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage = 'https://nziladigital.com/og-image.png',
  noindex = false,
  jsonLd,
}: SEOHeadProps) {
  useEffect(() => {
    // Title
    document.title = title;

    // Helper to set/create a meta tag
    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement('meta');
        const [attrName, attrValue] = attr.split('=').map((s) => s.replace(/['"]/g, ''));
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    // Helper to set/create a link tag
    const setLink = (rel: string, href: string) => {
      let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // Primary
    setMeta('meta[name="title"]', 'name="title"', title);
    setMeta('meta[name="description"]', 'name="description"', description);
    setMeta('meta[name="robots"]', 'name="robots"', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large');

    // Canonical
    setLink('canonical', canonical);

    // Open Graph
    setMeta('meta[property="og:title"]', 'property="og:title"', ogTitle ?? title);
    setMeta('meta[property="og:description"]', 'property="og:description"', ogDescription ?? description);
    setMeta('meta[property="og:url"]', 'property="og:url"', canonical);
    setMeta('meta[property="og:image"]', 'property="og:image"', ogImage);

    // Twitter
    setMeta('meta[name="twitter:title"]', 'name="twitter:title"', ogTitle ?? title);
    setMeta('meta[name="twitter:description"]', 'name="twitter:description"', ogDescription ?? description);
    setMeta('meta[name="twitter:url"]', 'name="twitter:url"', canonical);
    setMeta('meta[name="twitter:image"]', 'name="twitter:image"', ogImage);

    // JSON-LD
    if (jsonLd) {
      const scriptId = 'seo-head-jsonld';
      let script = document.getElementById(scriptId) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    }
  }, [title, description, canonical, ogTitle, ogDescription, ogImage, noindex, jsonLd]);

  return null;
}
