const res = await fetch("https://www.daralwahi.org/", { cache: "reload" });
console.log("Status:", res.status);
console.log("ETag:", res.headers.get("etag"));
console.log("Age:", res.headers.get("age"));
console.log("Vercel-Cache:", res.headers.get("x-vercel-cache"));
console.log("Vercel-Id:", res.headers.get("x-vercel-id"));
