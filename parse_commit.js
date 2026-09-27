const res = await fetch("https://www.daralwahi.org/assets/index-BmSNyeQV.js");
const text = await res.text();
console.log("Size:", text.length);
console.log("Check for a7b4c9f in file:", text.includes("a7b4c9f"));
console.log("Check for Check for updates in file:", text.includes("Check for updates"));
