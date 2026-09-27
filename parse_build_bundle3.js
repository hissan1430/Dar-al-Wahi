const res = await fetch("https://daralwahi.org/", {
  headers: { "Cache-Control": "no-cache", "Pragma": "no-cache" }
});
console.log("x-vercel-id:", res.headers.get("x-vercel-id"));
console.log("x-vercel-cache:", res.headers.get("x-vercel-cache"));
console.log("age:", res.headers.get("age"));
console.log("date:", res.headers.get("date"));
