import { MOCK_DATA } from './src/data.js';
console.log("Max ID:", Math.max(...MOCK_DATA.map(i => parseInt(i.id, 10)).filter(n => !isNaN(n))));
