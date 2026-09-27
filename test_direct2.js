const res = await fetch("https://daralwahi-git-main-the-salafiyyun.vercel.app/");
console.log("Status:", res.status);
console.log("Headers:", Object.fromEntries(res.headers.entries()));
const text = await res.text();
console.log("Body snippet:", text.slice(0, 300));
