// Look at deployment target_url from GitHub status:
// target_url: "https://vercel.com/the-salafiyyun/daralwahi/9PsDpZESQm9SBWvzG5V4eddk7cku"
// Let's inspect index-DQaOPVXL.js to see if CATEGORIES is rendered or if it is the old file
const res = await fetch("https://www.daralwahi.org/assets/index-DQaOPVXL.js");
const text = await res.text();
console.log("File size:", text.length);
console.log("Includes 'Aqīdah section heading mapping?", text.includes("border-t border-[#E7DFC9]") || text.includes("border-t border-slate-200"));
console.log("Includes 'Showing' counter?", text.includes("Showing ") && text.includes(" items"));
console.log("Includes 'Full Library' link in home?", text.includes("Full Library"));
