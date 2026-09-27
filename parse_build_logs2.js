const res = await fetch("https://www.daralwahi.org/?v=" + Date.now(), {
  headers: {
    "Cache-Control": "no-cache",
    "Pragma": "no-cache"
  }
});
console.log("x-vercel-cache:", res.headers.get("x-vercel-cache"));
console.log("etag:", res.headers.get("etag"));
const text = await res.text();
console.log("script tags:", text.match(/assets\/[a-zA-Z0-9_\-\.]+/g));
