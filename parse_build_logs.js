// Let's test if the file is in Vercel build output
const res = await fetch("https://daralwahi.org", {
  headers: {
    "Cache-Control": "no-cache",
    "Pragma": "no-cache",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  }
});
console.log("redirected:", res.url);
console.log("headers:", [...res.headers.entries()]);
