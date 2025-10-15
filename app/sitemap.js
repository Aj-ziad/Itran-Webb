// app/sitemap.js
import { routing } from "@/i18n/routing";

const BASE_URL = "https://www.itranweb.com/";

export default async function sitemap() {
  const staticPaths = ["/", "/about", "/contact", "/services"]; // Add your static routes

  const sitemap = [];

  // Add localized versions of each static path
  routing.locales.forEach((locale) => {
    staticPaths.forEach((path) => {
      sitemap.push({
        url: `${BASE_URL}/${locale}${path === "/" ? "" : path}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: path === "/" ? 1.0 : 0.8,
      });
    });
  });

  return sitemap;
}