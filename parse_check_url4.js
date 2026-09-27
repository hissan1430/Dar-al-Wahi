const res = await fetch("https://www.daralwahi.org/assets/index-DQaOPVXL.js");
const text = await res.text();
// Let's check for string "Your Reading Journey"
console.log("Has 'Your Reading Journey':", text.includes("Your Reading Journey"));
console.log("Has 'itemsInCategory':", text.includes("itemsInCategory"));
