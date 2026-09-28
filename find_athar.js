import { DAILY_ATHAR_LIST } from './src/data/dailyAthar.js';
DAILY_ATHAR_LIST.forEach((a, i) => {
  console.log(`[${i}] ${a.id}: ${a.speaker} | Source: ${a.source}`);
});
