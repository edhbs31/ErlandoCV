// Post-build: writes per-route index.html (title, description, canonical, OG/Twitter) so crawlers that
// don't run JavaScript still see correct metadata, plus sitemap.xml. Firebase serves /portfolio/index.html
// before falling back to the SPA rewrite.
const fs = require("fs");
const path = require("path");

const seo = require("../src/seoRoutes.json");
const build = path.join(__dirname, "..", "build");
const template = fs.readFileSync(path.join(build, "index.html"), "utf8");
const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const render = (route) => {
  const url = seo.siteUrl + (route.path === "/" ? "/" : route.path);
  const t = esc(route.title);
  const d = esc(route.description);
  let html = template
    .replace(/<title>.*?<\/title>/s, `<title>${t}</title>`)
    .replace(/<meta name="description"[^>]*>/s, `<meta name="description" content="${d}" />`)
    .replace(/<meta property="og:title"[^>]*>/s, `<meta property="og:title" content="${t}" />`)
    .replace(/<meta property="og:description"[^>]*>/s, `<meta property="og:description" content="${d}" />`)
    .replace(/<meta property="og:url"[^>]*>/s, `<meta property="og:url" content="${url}" />`)
    .replace(/<link rel="canonical"[^>]*>/s, `<link rel="canonical" href="${url}" />`);
  html = html.replace("</head>", `<meta name="twitter:title" content="${t}" /><meta name="twitter:description" content="${d}" /></head>`);
  return html;
};

for (const route of seo.routes) {
  const html = render(route);
  if (route.path === "/") { fs.writeFileSync(path.join(build, "index.html"), html); continue; }
  const dir = path.join(build, route.path);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html);
}

const today = new Date().toISOString().slice(0, 10);
const urls = seo.routes.map((r) => `  <url>\n    <loc>${seo.siteUrl}${r.path === "/" ? "/" : r.path}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${r.priority}</priority>\n  </url>`).join("\n");
fs.writeFileSync(path.join(build, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
console.log(`SEO: wrote ${seo.routes.length} route pages + sitemap.xml`);
