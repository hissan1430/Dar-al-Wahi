const res = await fetch("https://daralwahi.org/");
const text = await res.text();
console.log("daralwahi text matches:", text.match(/assets\/[a-zA-Z0-9_\-\.]+/g));
