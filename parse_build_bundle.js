const res = await fetch("https://www.daralwahi.org/assets/index-DQaOPVXL.js");
const text = await res.text();
// Let's check how many times "Showing" appears
const matches = text.match(/Showing [0-9]+ items/g);
console.log("Matches for Showing items:", matches);
// Let's check if the text "Update Home.tsx" or "Refactor Home page" matches any bundle hash
console.log("Does bundle have 'Showing 21 items'?", text.includes("Showing") && text.includes("Full Library"));
