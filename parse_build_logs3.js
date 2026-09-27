// On Vercel screenshot: Deployment ID is EcXioCJdPxVTGHxbjKaf8v45AjU8
// URL: daralwahi-9q8aau26g-the-salafiyyun.vercel.app
const res = await fetch("https://daralwahi-9q8aau26g-the-salafiyyun.vercel.app/index.html");
console.log("index.html status:", res.status);
const text = await res.text();
console.log("script tags:", text.match(/assets\/[a-zA-Z0-9_\-\.]+/g));
