const res = await fetch("https://www.daralwahi.org/", {
  headers: { "x-vercel-protection-bypass": "1" }
});
const html = await res.text();
console.log("HTML length:", html.length);
const jsAsset = html.match(/src="(\/assets\/[^"]+)"/);
console.log("jsAsset:", jsAsset ? jsAsset[1] : null);
