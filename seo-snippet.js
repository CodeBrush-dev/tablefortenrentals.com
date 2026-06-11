// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.tablefortenrentals.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.tablefortenrentals.com/","title_tag":"Central Florida Event Rentals | Table for Ten Rentals","meta_description":"Luxury event rentals, high-quality tables and chairs, custom dance floors, and white-glove service for beautiful gatherings across Central Florida."},{"page_url":"https://www.tablefortenrentals.com/services-4","title_tag":"White-Glove Service & Delivery | Table for Ten Rentals","meta_description":"Enjoy white-glove service and seamless event planning with family-owned rentals, careful delivery, setup, and breakdown for Central Florida events."},{"page_url":"https://www.tablefortenrentals.com/shop","title_tag":"Table Rentals Central Florida | Table for Ten Rentals","meta_description":"High-quality tables, event chair rentals, and custom dance floors for luxury event rentals and beautiful gatherings in Central Florida."},{"page_url":"https://www.tablefortenrentals.com/contact-6","title_tag":"Event Chair Rentals Quote | Table for Ten Rentals","meta_description":"Request a proposal for Central Florida event rentals, including table rentals, event chair rentals, and custom dance floors with white-glove service."}],"keywords":["Table Rentals Central Florida","Event Chair Rentals","White-Glove Service","Custom Dance Floors","High-Quality Tables","Luxury Event Rentals","Seamless Event Planning","Family-Owned Rentals","Beautiful Gatherings","Central Florida Event Rentals"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.tablefortenrentals.com/#localbusiness",
  "url": "https://www.tablefortenrentals.com/",
  "name": "Table for Ten",
  "description": "Table for Ten is a family-owned event rental company in Bushnell, Florida, offering luxury rentals including cross-back and bentwood chairs, farm tables, custom bars, stages, risers, and custom dance floors, all with white-glove delivery and service across Central Florida and beyond.",
  "image": [
    "https://static.wixstatic.com/media/df02a2_1e30d81994bb4230b98e53946c0a15f1~mv2.png/v1/crop/x_0,y_305,w_2100,h_576/fill/w_815,h_223,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Table%20for%20Ten%20-%20Logo_MAIN%20LINEAR%20white.png",
    "https://static.wixstatic.com/media/df02a2_8150294a02384b1c9fcd49e711cb75bb%7Emv2.jpg/v1/fit/w_2500,h_1330,al_c/df02a2_8150294a02384b1c9fcd49e711cb75bb%7Emv2.jpg"
  ],
  "telephone": "+1-941-685-5338",
  "email": "mailto:tablefortenrentals@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "7058 County Road 625",
    "addressLocality": "Bushnell",
    "addressRegion": "FL",
    "addressCountry": "US"
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Central Florida"
    }
  ],
  "founder": [
    {
      "@type": "Person",
      "name": "Gabe"
    },
    {
      "@type": "Person",
      "name": "Stephanie"
    }
  ],
  "foundingOrganization": {
    "@type": "Organization",
    "name": "Table for Ten"
  },
  "sameAs": [],
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "Harvest Table - Custom",
        "offers": {
          "@type": "Offer",
          "price": "120.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "Napa White Tables - Custom built",
        "offers": {
          "@type": "Offer",
          "price": "120.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "Bars & made to order Bars",
        "offers": {
          "@type": "Offer",
          "price": "350.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "Versatile Cart with Umbrella",
        "offers": {
          "@type": "Offer",
          "price": "475.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "Riser - Stage",
        "offers": {
          "@type": "Offer",
          "price": "400.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "Sonoma Crossback Chairs",
        "offers": {
          "@type": "Offer",
          "price": "10.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "White Bentwood Chairs",
        "offers": {
          "@type": "Offer",
          "price": "10.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "Porter - Black Bentwood Chairs",
        "offers": {
          "@type": "Offer",
          "price": "10.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "Custom dance floors",
        "offers": {
          "@type": "Offer",
          "price": "1000.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      }
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Event Rentals Collection",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Tables",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Harvest Table - Custom"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Napa White Tables - Custom built"
            }
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Bars & Carts",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Bars & made to order Bars"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Versatile Cart with Umbrella"
            }
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Stages & Dance Floors",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Riser - Stage"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Custom dance floors"
            }
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Chairs",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Sonoma Crossback Chairs"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "White Bentwood Chairs"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Porter - Black Bentwood Chairs"
            }
          }
        ]
      }
    ]
  },
  "serviceType": "Event rentals and white-glove delivery service for weddings, celebrations, and special events",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-941-685-5338",
    "contactType": "customer service",
    "areaServed": "US",
    "availableLanguage": "en"
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
