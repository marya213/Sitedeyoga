import { useEffect } from "react";

const SITE_NAME = "Studio Kundalini";
const SITE_URL = "https://kundaliniyoga-saintbrieuc.fr";

function setMetaTag(attr, key, content) {
  let tag = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setCanonical(href) {
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

// Met à jour le titre, la meta description et les balises Open Graph de la
// page courante — l'app est une SPA à page unique (index.html), ces
// éléments ne changent donc pas autrement au changement de route.
export default function useSEO({ title, description, path = "/" }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    const url = `${SITE_URL}${path}`;

    document.title = fullTitle;
    setMetaTag("property", "og:title", fullTitle);
    setMetaTag("property", "og:url", url);
    setCanonical(url);

    if (description) {
      setMetaTag("name", "description", description);
      setMetaTag("property", "og:description", description);
    }
  }, [title, description, path]);
}
