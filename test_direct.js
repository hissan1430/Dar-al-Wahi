const res = await fetch("https://daralwahi-git-main-the-salafiyyun.vercel.app/", {
  headers: { "Cache-Control": "no-cache" }
});
const html = await res.text();
console.log("direct vercel preview script tags:", html.match(/src="\/assets\/[^"]+"/g));
