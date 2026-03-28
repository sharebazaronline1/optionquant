const fs = require("fs");
const { SitemapStream, streamToPromise } = require("sitemap");

const hostname = "https://www.optionquaant.in";

const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/features", changefreq: "monthly", priority: 0.8 },
  { url: "/markets", changefreq: "monthly", priority: 0.8 },
  { url: "/how-to-trade", changefreq: "monthly", priority: 0.8 },
  { url: "/pricing", changefreq: "monthly", priority: 0.9 },
  { url: "/lifetime", changefreq: "monthly", priority: 0.9 },
  { url: "/refund", changefreq: "yearly", priority: 0.5 },
  { url: "/terms-and-conditions", changefreq: "yearly", priority: 0.5 },
  { url: "/disclaimer-privacy", changefreq: "yearly", priority: 0.5 },
  { url: "/gallery", changefreq: "monthly", priority: 0.6 },
  { url: "/review", changefreq: "weekly", priority: 0.7 },
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname });

  links.forEach(link => sitemap.write(link));
  sitemap.end();

  const data = await streamToPromise(sitemap);

  fs.writeFileSync("./public/sitemap.xml", data.toString());

  console.log("Sitemap generated successfully!");
}

generateSitemap();