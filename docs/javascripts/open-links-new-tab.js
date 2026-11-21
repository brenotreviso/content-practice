/* Open every link inside article content in a new tab.
   Nav, sidebar, search and TOC sit outside .md-content and are left alone.
   Re-runs on Material instant navigation via document$, when that is enabled. */
(function () {
  function openContentLinksInNewTab() {
    var root = document.querySelector(".md-content");
    if (!root) return;
    root.querySelectorAll("a[href]").forEach(function (link) {
      var href = link.getAttribute("href");
      if (!href || href === "#" || href.indexOf("javascript:") === 0) return;
      link.setAttribute("target", "_blank");
      var rel = (link.getAttribute("rel") || "").split(/\s+/).filter(Boolean);
      if (rel.indexOf("noopener") === -1) rel.push("noopener");
      link.setAttribute("rel", rel.join(" "));
    });
  }

  if (window.document$ && typeof document$.subscribe === "function") {
    document$.subscribe(openContentLinksInNewTab);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", openContentLinksInNewTab);
  } else {
    openContentLinksInNewTab();
  }
})();
