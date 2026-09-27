const res = await fetch("https://www.daralwahi.org/sw.js", { cache: "no-store" });
const text = await res.text();
console.log("sw.js length:", text.length);
const matches = text.match(/assets\/index-[a-zA-Z0-9_\-]+\.js/g);
console.log("matches in sw.js:", matches);
