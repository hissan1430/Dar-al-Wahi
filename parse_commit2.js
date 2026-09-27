const res = await fetch("https://www.daralwahi.org/assets/index-BmSNyeQV.js");
const text = await res.text();
console.log("Check for controllerchange:", text.includes("controllerchange"));
console.log("Check for visibilitychange:", text.includes("visibilitychange"));
