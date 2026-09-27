const res = await fetch("https://www.daralwahi.org/assets/index-DQaOPVXL.js");
const text = await res.text();
// When did DQaOPVXL get generated?
// Check if "Full Library" is in index-DQaOPVXL.js:
console.log("Has 'Full Library':", text.includes("Full Library"));
// Check if "CATEGORIES" or "‘Aqīdah" is in index-DQaOPVXL.js:
console.log("Has 'Showing':", text.includes("Showing"));
console.log("Has 'itemsRead':", text.includes("itemsRead"));
