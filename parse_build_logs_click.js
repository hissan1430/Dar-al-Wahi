// Check what git commit or files are in GitHub
const res = await fetch("https://api.github.com/repos/hissan1430/Dar-al-Wahi/contents/src/components");
const items = await res.json();
console.log("Components in GitHub:", items.map(x => x.name));
