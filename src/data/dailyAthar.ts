export interface DailyAthar {
  id: string;
  speaker: string;
  speakerTitle?: string;
  arabicText: string;
  englishText: string;
  source: string;
  category: string;
}

export const DAILY_ATHAR_LIST: DailyAthar[] = [
  {
    id: 'athar-1',
    speaker: 'ʿAbdullāh ibn Masʿūd',
    speakerTitle: 'The Noble Companion (may Allāh be pleased with him)',
    arabicText: 'اتَّبِعُوا وَلَا تَبْتَدِعُوا، فَقَدْ كُفِيتُمْ، وَعَلَيْكُمْ بِالأَمْرِ العَتِيقِ.',
    englishText: '“Follow (the Sunnah) and do not innovate, for indeed you have been sufficed; and upon you is to adhere to the ancient affair (that which the Prophet ﷺ and his Companions were upon).”',
    source: 'Sunan ad-Dārimī (Vol. 1, p. 235, no. 211) & al-Lālakāʾī (Vol. 1, p. 96, no. 104)',
    category: 'Adherence to the Sunnah'
  },
  {
    id: 'athar-2',
    speaker: 'Al-Ḥasan al-Baṣrī',
    speakerTitle: 'Imām of the Tābiʿīn (d. 110H)',
    arabicText: 'لَا يَسْتَقِيمُ قَوْلٌ إِلَّا بِعَمَلٍ، وَلَا يَسْتَقِيمُ قَوْلٌ وَعَمَلٌ إِلَّا بِنِيَّةٍ، وَلَا يَسْتَقِيمُ قَوْلٌ وَعَمَلٌ وَنِيَّةٌ إِلَّا بِمُوَافَقَةِ السُّنَّةِ.',
    englishText: '“A statement does not stand upright except with action; and a statement and action do not stand upright except with a sincere intention; and a statement, action, and intention do not stand upright except by agreeing with the Sunnah.”',
    source: 'al-Ibānah al-Kubrā by Ibn Baṭṭah (Vol. 1, p. 333, no. 200) & al-Lālakāʾī (no. 19)',
    category: 'Sincerity & the Sunnah'
  },
  {
    id: 'athar-3',
    speaker: 'Imām Mālik ibn Anas',
    speakerTitle: 'Imām of the Abode of Migration (d. 179H)',
    arabicText: 'السُّنَّةُ سَفِينَةُ نُوحٍ، مَنْ رَكِبَهَا نَجَا، وَمَنْ تَخَلَّفَ عَنْهَا غَرِقَ.',
    englishText: '“The Sunnah is like the Ark of Nūḥ: whoever boards it is saved, and whoever abandons it is drowned.”',
    source: 'Dhamm al-Kalām wa-Ahlih by al-Harawī (Vol. 5, p. 81, no. 873)',
    category: 'Safety in the Sunnah'
  },
  {
    id: 'athar-4',
    speaker: 'Sufyān ath-Thawrī',
    speakerTitle: 'Amīr al-Muʾminīn in Ḥadīth (d. 161H)',
    arabicText: 'البِدْعَةُ أَحَبُّ إِلَى إِبْلِيسَ مِنَ المَعْصِيَةِ؛ المَعْصِيَةُ يُتَابُ مِنْهَا، وَالبِدْعَةُ لَا يُتَابُ مِنْهَا.',
    englishText: '“Innovation is more beloved to Iblīs than regular sin; for one (readily) repents from sin, but one does not repent from innovation (because the innovator deems it good worship).”',
    source: 'Sharḥ Uṣūl Iʿtiqād Ahl as-Sunnah by al-Lālakāʾī (Vol. 1, p. 148, no. 238)',
    category: 'Warning against Bidʿah'
  },
  {
    id: 'athar-5',
    speaker: 'Al-Awzāʿī',
    speakerTitle: 'Imām of the People of Shām (d. 157H)',
    arabicText: 'عَلَيْكَ بِآثَارِ مَنْ سَلَفَ وَإِنْ رَفَضَكَ النَّاسُ، وَإِيَّاكَ وَآرَاءَ الرِّجَالِ وَإِنْ زَخْرَفُوهُ لَكَ بِالقَوْلِ.',
    englishText: '“Hold fast to the narrations (āthār) of those who came before, even if the people reject you; and beware of the personal opinions of men, even if they beautify them for you with speech.”',
    source: 'al-Madkhal ilā as-Sunan al-Kubrā by al-Bayhaqī (Vol. 1, p. 233, no. 248)',
    category: 'Adhering to the Athār'
  },
  {
    id: 'athar-6',
    speaker: 'Al-Fuḍayl ibn ʿIyāḍ',
    speakerTitle: 'The Ascetic of the Two Holy Sanctuaries (d. 187H)',
    arabicText: 'اتَّبِعْ طُرُقَ الهُدَى وَلَا يَضُرُّكَ قِلَّةُ السَّالِكِينَ، وَإِيَّاكَ وَطُرُقَ الضَّلَالَةِ وَلَا تَغْتَرَّ بِكَثْرَةِ الهَالِكِينَ.',
    englishText: '“Follow the paths of guidance, and do not be harmed by the scarcity of those who walk upon it; and beware of the paths of misguidance, and do not be deceived by the multitude of those who perish.”',
    source: 'al-Iʿtiṣām by Imām ash-Shāṭibī (Vol. 1, p. 134, Dār Ibn ʿAffān ed.)',
    category: 'Steadfastness upon the Truth'
  },
  {
    id: 'athar-7',
    speaker: 'Imām Aḥmad ibn Ḥanbal',
    speakerTitle: 'Imām of Ahl as-Sunnah (d. 241H)',
    arabicText: 'أُصُولُ السُّنَّةِ عِنْدَنَا: التَّمَسُّكُ بِمَا كَانَ عَلَيْهِ أَصْحَابُ رَسُولِ اللَّهِ ﷺ، وَالاقْتِدَاءُ بِهِمْ، وَتَرْكُ البِدَعِ، وَكُلُّ بِدْعَةٍ فَهِيَ ضَلَالَةٌ.',
    englishText: '“The foundational principles of the Sunnah with us are: holding firmly to that which the Companions of the Messenger of Allāh ﷺ were upon, taking them as models to be followed, and abandoning innovations, for every innovation is misguidance.”',
    source: 'Uṣūl as-Sunnah by Imām Aḥmad (no. 1) & al-Lālakāʾī (Vol. 1, p. 177, no. 317)',
    category: 'Foundations of the Creed'
  },
  {
    id: 'athar-8',
    speaker: 'Yūnus ibn ʿUbayd',
    speakerTitle: 'Among the Great Tābiʿīn (d. 139H)',
    arabicText: 'لَيْسَ شَيْءٌ أَغْرَبَ مِنَ السُّنَّةِ، وَأَغْرَبُ مِنْهَا مَنْ يَعْرِفُهَا.',
    englishText: '“There is nothing stranger today than the Sunnah; and even stranger than it is the one who truly knows it.”',
    source: 'al-Ibānah al-Kubrā by Ibn Baṭṭah (Vol. 1, p. 188, no. 20) & al-Lālakāʾī (no. 71)',
    category: 'Strangeness of the Sunnah'
  },
  {
    id: 'athar-9',
    speaker: 'ʿAbdullāh ibn ʿUmar',
    speakerTitle: 'The Noble Companion (may Allāh be pleased with them both)',
    arabicText: 'كُلُّ بِدْعَةٍ ضَلَالَةٌ، وَإِنْ رَآهَا النَّاسُ حَسَنَةً.',
    englishText: '“Every innovation is misguidance, even if the people deem it to be good.”',
    source: 'Sharḥ Uṣūl Iʿtiqād Ahl as-Sunnah by al-Lālakāʾī (Vol. 1, p. 104, no. 126)',
    category: 'Refutation of Innovation'
  },
  {
    id: 'athar-10',
    speaker: 'Ḥudhayfah ibn al-Yamān',
    speakerTitle: 'Keeper of the Secret of the Messenger ﷺ',
    arabicText: 'كُلُّ عِبَادَةٍ لَا يَتَعَبَّدُهَا أَصْحَابُ رَسُولِ اللَّهِ ﷺ فَلَا تَتَعَبَّدُوهَا، فَإِنَّ الأَوَّلَ لَمْ يَدَعْ لِلآخِرِ مَقَالًا، فَاتَّقُوا اللَّهَ وَخُذُوا بِطَرِيقِ مَنْ كَانَ قَبْلَكُمْ.',
    englishText: '“Every act of worship that the Companions of the Messenger of Allāh ﷺ did not practice, do not practice it; for indeed the first did not leave any room for speech for the latter. So fear Allāh and take to the path of those who were before you.”',
    source: 'al-Ibānah al-Kubrā by Ibn Baṭṭah (Vol. 1, p. 338, no. 204)',
    category: 'Companions as the Benchmark'
  },
  {
    id: 'athar-11',
    speaker: 'Abū Bakr aṣ-Ṣiddīq',
    speakerTitle: 'The First Caliph of Islām (may Allāh be pleased with him)',
    arabicText: 'لَسْتُ تَارِكًا شَيْئًا كَانَ رَسُولُ اللَّهِ ﷺ يَعْمَلُ بِهِ إِلَّا عَمِلْتُ بِهِ، إِنِّي أَخْشَى إِنْ تَرَكْتُ شَيْئًا مِنْ أَمْرِهِ أَنْ أَزِيغَ.',
    englishText: '“I will not leave off anything that the Messenger of Allāh ﷺ used to act upon except that I will act upon it; for indeed I fear that if I leave off anything from his command, I will deviate.”',
    source: 'Ṣaḥīḥ al-Bukhārī (Kitāb Farḍ al-Khumus, no. 3093) & Ṣaḥīḥ Muslim (no. 1759)',
    category: 'Veneration of Prophetic Guidance'
  },
  {
    id: 'athar-12',
    speaker: 'ʿUmar ibn ʿAbd al-ʿAzīz',
    speakerTitle: 'The Rightly-Guided Umayyad Caliph (d. 101H)',
    arabicText: 'قِفْ حَيْثُ وَقَفَ القَوْمُ، فَإِنَّهُمْ عَنْ عِلْمٍ وَقَفُوا، وَبِبَصَرٍ نَافِذٍ كَفُّوا، وَلَهُمْ عَلَى كَشْفِهَا كَانُوا أَقْوَى.',
    englishText: '“Halt where the people (the Companions) halted; for indeed with knowledge they stopped, and with penetrating insight they held back, and they were stronger in uncovering it (had it been good).”',
    source: 'Sunan Abī Dāwūd (no. 4612) & al-Lālakāʾī (Vol. 1, p. 84, no. 94)',
    category: 'Understanding of the Salaf'
  },
  {
    id: 'athar-13',
    speaker: 'ʿAbdullāh ibn al-Mubārak',
    speakerTitle: 'Imām of the Believers in Khurāsān (d. 181H)',
    arabicText: 'الإِسْنَادُ مِنَ الدِّينِ، وَلَوْلَا الإِسْنَادُ لَقَالَ مَنْ شَاءَ مَا شَاءَ.',
    englishText: '“The isnād (chain of transmission) is from the religion; and were it not for the isnād, whoever wished would have said whatever he wished.”',
    source: 'Ṣaḥīḥ Muslim (Introduction, Vol. 1, p. 15, no. 32)',
    category: 'Preservation of the Sunnah'
  },
  {
    id: 'athar-14',
    speaker: 'Muḥammad ibn Sīrīn',
    speakerTitle: 'Imām and Scholar of Baṣrah (d. 110H)',
    arabicText: 'إِنَّ هَذَا العِلْمَ دِينٌ، فَانْظُرُوا عَمَّنْ تَأْخُذُونَ دِينَكُمْ.',
    englishText: '“Indeed this knowledge is religion, so look carefully from whom you take your religion.”',
    source: 'Ṣaḥīḥ Muslim (Introduction, Vol. 1, p. 14, no. 27) & ad-Dārimī (no. 433)',
    category: 'Selecting Teachers of Knowledge'
  },
  {
    id: 'athar-15',
    speaker: 'Imām ash-Shāfiʿī',
    speakerTitle: 'The Great Jurist & Imām (d. 204H)',
    arabicText: 'إِذَا صَحَّ الحَدِيثُ فَهُوَ مَذْهَبِي، وَإِذَا رَأَيْتُمُ الحَدِيثَ خِلَافَ قَوْلِي، فَاضْرِبُوا بِقَوْلِي الحَائِطَ.',
    englishText: '“When the ḥadīth is authenticated, then it is my position; and if you see the ḥadīth conflicting with my saying, then strike my saying against the wall.”',
    source: 'al-Majmūʿ Sharḥ al-Muhadhdhab by an-Nawawī (Vol. 1, p. 63)',
    category: 'Precedence of Authentic Ḥadīth'
  },
  {
    id: 'athar-16',
    speaker: 'Imām az-Zuhrī',
    speakerTitle: 'Imām of the Ḥijāz in Ḥadīth (d. 124H)',
    arabicText: 'كَانَ مَنْ مَضَى مِنْ عُلَمَائِنَا يَقُولُونَ: الاعْتِصَامُ بِالسُّنَّةِ نَجَاةٌ.',
    englishText: '“Those who passed before us of our scholars used to say: Holding firmly to the Sunnah is salvation.”',
    source: 'Sunan ad-Dārimī (Vol. 1, p. 109, no. 96) & al-Lālakāʾī (Vol. 1, p. 77, no. 79)',
    category: 'Safety in the Sunnah'
  },
  {
    id: 'athar-17',
    speaker: 'ʿAlī ibn Abī Ṭālib',
    speakerTitle: 'The Fourth Rightly-Guided Caliph (may Allāh be pleased with him)',
    arabicText: 'لَوْ كَانَ الدِّينُ بِالرَّأْيِ لَكَانَ أَسْفَلُ الخُفِّ أَوْلَى بِالمَسْحِ مِنْ أَعْلَاهُ، وَقَدْ رَأَيْتُ رَسُولَ اللَّهِ ﷺ يَمْسَحُ عَلَى ظَاهِرِ خُفَّيْهِ.',
    englishText: '“If the religion were based upon intellect and opinion, wiping the underside of the leather socks would be more worthy than wiping the top; yet I saw the Messenger of Allāh ﷺ wipe upon the top of his leather socks.”',
    source: 'Sunan Abī Dāwūd (Vol. 1, p. 111, no. 162; authenticated by al-Albānī)',
    category: 'Submission to Revelation'
  },
  {
    id: 'athar-18',
    speaker: 'Ayyūb as-Sakhtiyānī',
    speakerTitle: 'Great Scholar of Baṣrah (d. 131H)',
    arabicText: 'إِذَا حَدَّثْتَ الرَّجُلَ بِالسُّنَّةِ فَقَالَ: دَعْنَا مِنْ هَذَا وَحَدِّثْنَا مِنَ القُرْآنِ، فَاعْلَمْ أَنَّهُ ضَالٌّ مُضِلٌّ.',
    englishText: '“If you narrate the Sunnah to a man and he says: ‘Leave this from us and narrate to us from the Qurʾān (alone)’, then know that he is misguided and misguiding.”',
    source: 'al-Kifāyah fī ʿIlm ar-Riwāyah by al-Khaṭīb al-Baghdādī (p. 16, no. 14)',
    category: 'Status of the Sunnah'
  },
  {
    id: 'athar-19',
    speaker: 'Al-Barbahārī',
    speakerTitle: 'Imām of Ahl as-Sunnah in Baghdād (d. 329H)',
    arabicText: 'اعْلَمْ أَنَّ الإِسْلَامَ هُوَ السُّنَّةُ، وَالسُّنَّةَ هِيَ الإِسْلَامُ، وَلَا يَقُومُ أَحَدُهُمَا إِلَّا بِالآخَرِ.',
    englishText: '“Know that Islām is the Sunnah, and the Sunnah is Islām, and one of them cannot be established without the other.”',
    source: 'Sharḥ as-Sunnah by Imām al-Barbahārī (no. 1, Dār as-Salaf ed.)',
    category: 'Essence of Islām'
  },
  {
    id: 'athar-20',
    speaker: 'Mujāhid ibn Jabr',
    speakerTitle: 'Student of Ibn ʿAbbās in Tafsīr (d. 104H)',
    arabicText: 'لَا يَتَعَلَّمُ العِلْمَ مُسْتَحْيٍ وَلَا مُسْتَكْبِرٌ.',
    englishText: '“The one who is bashful (ashamed to ask) and the one who is arrogant will never acquire sacred knowledge.”',
    source: 'Ṣaḥīḥ al-Bukhārī (Kitāb al-ʿIlm, Chapter 50, under no. 130)',
    category: 'Manners of Seeking Knowledge'
  }
];

/**
 * Returns the exact formatted date string in capitals with abbreviated month dot,
 * matching the requirement: "Saturday, Sept. 19"
 */
export function formatAtharDate(date = new Date()): string {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = [
    'Jan.',
    'Feb.',
    'Mar.',
    'Apr.',
    'May',
    'June',
    'July',
    'Aug.',
    'Sept.',
    'Oct.',
    'Nov.',
    'Dec.'
  ];

  const dayName = days[date.getDay()];
  const monthName = months[date.getMonth()];
  const dayNum = date.getDate();

  return `${dayName}, ${monthName} ${dayNum}`;
}

/**
 * Returns the single Athār for today deterministically based on the calendar day.
 * Advances to the next Athār every day at midnight.
 */
export function getDailyAthar(date = new Date()): DailyAthar {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  // Create UTC day timestamp to avoid any timezone daylight drift
  const utcDay = Date.UTC(year, month, day);
  const oneDay = 1000 * 60 * 60 * 24;
  const daysSinceEpoch = Math.floor(utcDay / oneDay);

  const index = Math.abs(daysSinceEpoch) % DAILY_ATHAR_LIST.length;
  return DAILY_ATHAR_LIST[index];
}
