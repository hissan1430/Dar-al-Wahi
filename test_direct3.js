const res = await fetch("https://daralwahi-9q8aau26g-the-salafiyyun.vercel.app/");
console.log("Status:", res.status);
const text = await res.text();
console.log("Script tags:", text.match(/src="\/assets\/[^"]+"/g));
