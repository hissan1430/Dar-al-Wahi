import { MOCK_DATA, CATEGORIES } from './src/data.js';
console.log("Categories defined:", CATEGORIES);
const catCounts = {};
for (const item of MOCK_DATA) {
  catCounts[item.category] = (catCounts[item.category] || 0) + 1;
}
console.log("Counts per category:", catCounts);
