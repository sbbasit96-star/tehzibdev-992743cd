import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "";
const STATIC = ["/", "/about", "/services", "/work", "/projects", "/testimonials", "/contact", "/privacy", "/terms"];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const { PROJECTS } = await import("@/data/projects");
        const entries = [
          ...STATIC.map((p) => ({ path: p, changefreq: "monthly", priority: p === "/" ? "1.0" : "0.7" })),
          ...PROJECTS.map((p) => ({ path: `/work/${p.slug}`, changefreq: "monthly", priority: "0.6" })),
        ];
        const urls = entries.map((e) =>
          `  <url><loc>${BASE_URL}${e.path}</loc><changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority></url>`
        );
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      },
    },
  },
});
