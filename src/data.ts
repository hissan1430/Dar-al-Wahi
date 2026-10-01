import { sunnahPages } from './data/sunnah';
import { deathPages } from './data/death';

export type Translator = 'Abu_Mundhir' | 'Abu_Talhah' | 'None';

export const CATEGORIES = [
  "ʿAqīdah",
  "al-Sunnah",
  "Uṣool",
  "Ḥadīth",
  "Heart-Softeners",
  "Miscellaneous"
] as const;

export type Category = typeof CATEGORIES[number];
export type ContentType = 'quote' | 'pdf' | 'short treatise' | 'article' | 'video' | 'audio' | 'poem';

export interface VideoEpisode {
  id: string;
  lessonNumber: number;
  title: string;
  duration?: string;
  summary?: string;
}

export interface ContentItem {
  id: string;
  translator: Translator;
  translatorName?: string;
  category: Category;
  type: ContentType;
  title: string;
  speaker?: string;
  author?: string;
  arabicText?: string;
  englishText?: string;
  htmlText?: string;
  citation?: string;
  summary?: string;
  dateAdded: string;
  pdfUrl?: string;
  youtubeId?: string;
  playlistId?: string;
  playlistUrl?: string;
  videos?: VideoEpisode[];
  soundcloudUrl?: string;
  pages?: string[];
  imageUrl?: string;
  scanImages?: string[];
  secondaryImages?: { url: string; caption?: string }[];
}

export const MOCK_DATA: ContentItem[] = [
  {
    id: "9",
    translator: "Abu_Talhah",
    category: "ʿAqīdah",
    type: "quote",
    title: "Jahm ibn al-Ṣafwān’s Hatred For The Qurʾān",
    summary: "A narration about a man from Marw who shunned Jahm due to his mockery and hatred of the verses of the Qur’ān.",
    englishText: "And Abū Jaʿfar narrated to me, [he said]: Yaḥyā ibn ʾAyyūb narrated to me, he said: I heard Abā Nuʿaym al-Balkẖī, he said: “A man from the people of Marw was a friend to Jahm, then he cut him off and shunned him, so it was said to him: ‘Why did you shun him?’ So, he said: ‘What cannot be tolerated came from him. I read such-and-such verse one day - Yaḥyā forgot it - so he said: “How clever Muḥammad was!” So, I bore it. Then he recited Sūrah Ṭā-Hā, so when he said: “The Most Beneficent (Allāh) ʾIstawā (rose over) the (Mighty) Throne (in a manner that suits His Majesty).” [Ṭā-Hā:5], he said: “Truly, by Allāh, if I found a way to its erasure, I would have erased it from the Muṣḥaf.” So, I bore it. Then he recited Sūrah al-Qaṣaṣ. So, when he reached to the mention of Mūsā, he said: “What is this? He mentioned a story in a place, so He did not complete it, then He mentioned it here, so He did not complete it.” Then he threw the Muṣḥaf from his lap with his two feet, so I pounced upon him.’”",
    htmlText: `<div class="space-y-6 leading-relaxed">
  <div class="space-y-3">
    <p class="leading-relaxed">
      And <em class="italic opacity-80 font-medium">Abū Jaʿfar</em> narrated to me, [he said]: <em class="italic opacity-80 font-medium">Yaḥyā ibn ʾAyyūb</em> narrated to me, he said: I heard <em class="italic opacity-80 font-medium">Abā Nuʿaym al-Balkẖī</em>, he said:
    </p>

    <blockquote class="border-l-[3.5px] border-[#0B465E] pl-4 sm:pl-5 py-3 my-3 bg-slate-500/[0.04] rounded-r-lg space-y-3 font-serif leading-relaxed">
      <p>
        “A man from the people of <em class="italic opacity-80 font-medium">Marw</em> was a friend to <em class="italic opacity-80 font-medium">Jahm</em>, then he cut him off and shunned him, so it was said to him: ‘<em class="italic">Why did you shun him?</em>’
      </p>
      <p>
        So, he said: ‘What cannot be tolerated came from him. I read such-and-such verse one day — <em class="italic opacity-80 font-medium">Yaḥyā</em> forgot it — so he said:
      </p>
      <p>
        <strong class="font-semibold text-[#0B465E]">“How clever Muḥammad was!”</strong>
      </p>
      <p>
        So, I bore it. Then he recited <em class="italic opacity-80 font-medium">Sūrah Ṭā-Hā</em>, so when he said: “The Most Beneficent (Allāh) ʾIstawā (rose over) the (Mighty) Throne (in a manner that suits His Majesty).” [Ṭā-Hā:5], he said:
      </p>
      <p>
        <strong class="font-semibold text-[#0B465E]">“Truly, by Allāh, if I found a way to its erasure, I would have erased it from the Muṣḥaf.”</strong>
      </p>
      <p>
        So, I bore it. Then he recited <em class="italic opacity-80 font-medium">Sūrah al-Qaṣaṣ</em>. So, when he reached to the mention of <em class="italic opacity-80 font-medium">Mūsā</em>, he said:
      </p>
      <p>
        <strong class="font-semibold text-[#0B465E]">“What is this? He mentioned a story in a place, so He did not complete it, then He mentioned it here, so He did not complete it.”</strong>
      </p>
      <p>
        Then he threw the <em class="italic opacity-80 font-medium">Muṣḥaf</em> from his lap with his two feet, so I pounced upon him.’ ”
      </p>
    </blockquote>
  </div>
</div>`,
    citation: "Kẖalq ʾAfʿāl al-ʿIbād - pg.38",
    imageUrl: "/jahmi_scan.png",
    dateAdded: "2026-09-12",
  },
  {
    id: "10",
    translator: "Abu_Mundhir",
    category: "ʿAqīdah",
    type: "quote",
    title: "An Arrow on the Day of Jumuʿah",
    summary: "A narration from Ḥudhayfa regarding the spread of hypocrisy and disbelief in the latter times.",
    englishText: "Abu Sāliḥ told me, saying: Abu al-Aḥwāṣ told us, saying: Abu Ḥudhayfa told us, saying: Sufyān (ath-Thawrī) told us, from al-Aʿmash, from Qays ibn al-Sakan, from Ḥudhayfa (ibn Yamān), who said: ‘There will come a time upon the people when, if you were to shoot an arrow on the Day of Jumuʿah (Friday), it would strike nothing but a disbeliever or a hypocrite.’",
    htmlText: `<div class="space-y-6 leading-relaxed">
  <div class="space-y-3">
    <p class="leading-relaxed">
      <em class="italic opacity-80 font-medium">Abu Sāliḥ</em> told me, saying: <em class="italic opacity-80 font-medium">Abu al-Aḥwāṣ</em> told us, saying: <em class="italic opacity-80 font-medium">Abu Ḥudhayfa</em> told us, saying: <em class="italic opacity-80 font-medium">Sufyān (ath-Thawrī)</em> told us, from <em class="italic opacity-80 font-medium">al-Aʿmash</em>, from <em class="italic opacity-80 font-medium">Qays ibn al-Sakan</em>, from <strong class="font-semibold text-primary">Ḥudhayfa (ibn Yamān)</strong>, who said:
    </p>

    <blockquote class="border-l-[3.5px] border-[#0B465E] pl-4 sm:pl-5 py-3 my-3 bg-slate-500/[0.04] rounded-r-lg space-y-3 font-serif leading-relaxed">
      <p>
        <strong class="font-semibold text-[#0B465E]">‘There will come a time upon the people when, if you were to shoot an arrow on the Day of Jumuʿah (Friday), it would strike nothing but a disbeliever or a hypocrite.’</strong>
      </p>
    </blockquote>
  </div>
</div>`,
    citation: "al-ʾIbānah al-Kubrā no.9",
    imageUrl: "/arrow_hudhayfah.jpeg",
    dateAdded: "2026-09-13",
  },
  {
    id: "6",
    translator: "Abu_Mundhir",
    category: "ʿAqīdah",
    type: "pdf",
    title: "The Explicit Sunnah (Ṣarīḥ as-Sunnah)",
    summary: "A magnificent and precise treatise authored by the great Imām and Mufassir Abū Jaʿfar Muḥammad bin Jarīr aṭ-Ṭabarī. It lays down the definitive, explicit stance of Ahl us-Sunnah regarding foundational matters of creed, such as the Qurʾān being the uncreated Speech of Allāh, the reality of the Divine Pre-decree (al-Qadar), the believers seeing Allāh in the Hereafter, and the excellence of the Companions.",
    dateAdded: "2026-09-05",
    pages: sunnahPages,
    pdfUrl: "/The_Explicit_Sunnah.pdf"
  },
  {
    id: "7",
    translator: "Abu_Mundhir",
    category: "Heart-Softeners",
    type: "pdf",
    title: "Those Who Lived After Death (Man ʿĀsha Baʿda al-Mawt)",
    summary: "A profound compilation by the Imām, Ḥāfiẓ, and ascetic Ibn Abī ad-Dunyā. This book gathers narrations with a mixture of authentic and weak chains of transmission detailing extraordinary events: people who spoke after their souls were taken, individuals who witnessed the realities of the Barzakh (the realm of the grave), and terrifying or beautiful visions seen by those at the very edge of departure, serving to awaken dead hearts.",
    dateAdded: "2026-09-05",
    pages: deathPages,
    pdfUrl: "/Those_Who_Lived_After_Death.pdf"
  },
  {
    id: "8",
    translator: "Abu_Talhah",
    category: "Heart-Softeners",
    type: "pdf",
    title: "The Book of Paradise (Kitāb al-Jannah)",
    summary: "A classical compilation from the monumental Muṣannaf of the great Imām and Ḥāfiẓ Abū Bakr Ibn Abī Shaybah (d. 235H). It brings together a collection of authentic and weak narrations elucidating the sublime reality of Paradise, what Allāh has prepared for the righteous, its dwellings, rivers, eternal delights, and the descriptions of its inhabitants.",
    dateAdded: "2026-09-05",
    pdfUrl: "/Kitab_al-Jannah.pdf"
  },
  {
    id: "11",
    translator: "Abu_Talhah",
    category: "ʿAqīdah",
    type: "quote",
    title: "Al-Bukẖārī on the Uncreated Qurʾān",
    summary: "Imām al-Bukẖārī affirms that the Qurʾān is the Speech of Allāh and uncreated, distinguishing between the Creator’s Command and His creation.",
    englishText: "And Abū ʿAbd Allāh [al-Bukẖārī] said: \"And the Qurʾān is the Speech of Allāh, uncreated, due to the statement of Allāh, Mighty and Majestic: \"Indeed your Lord is Allāh who created the Heavens and Earth in six days and then ascended above the Throne. He covers the (light of) day with the (darkness) of night (which) pursues it swiftly and (He created) the sun, the moon, the stars (all being) subjected to His command.\" [al-ʾAʿrāf:54] So, He made it clear that the created beings, and the pursuing, and the rapidity, and the subjected beings are by His command. Then He explained: \"His is the creation and the command. Blessed be Allāh, the Lord of the worlds.\" [al-ʾAʿrāf:54] Ibn ʿUyaynah said: ‘Allāh distinguished the [act of] creation from the command with His statement: \"His is the creation and the command.\" [al-ʾAʿrāf:54] — so, the creation is by His command like His statement: \"The decision of the matter, before and after (these events) is only with Allāh...\" [al-Rūm:4], and like His statement: \"Verily, His Command, when He intends a thing, is only that He says to it, \"Be!\" and it is!\" [Yā-Sīn:82], and like His statement: \"And among His Signs is that the heaven and the earth stand by His Command\"[al-Rūm:25], and He did not say ‘by His Creation.’’’\"",
    htmlText: `<div class="space-y-6 leading-relaxed">
  <div class="space-y-3">
    <p class="leading-relaxed">
      And <strong class="font-semibold text-primary">Abū ʿAbd Allāh [al-Bukẖārī]</strong> said:
    </p>

    <blockquote class="border-l-[3.5px] border-[#0B465E] pl-4 sm:pl-5 py-3 my-3 bg-slate-500/[0.04] rounded-r-lg space-y-3 font-serif leading-relaxed">
      <p>
        <strong class="font-semibold text-[#0B465E]">“And the Qurʾān is the Speech of Allāh, uncreated, due to the statement of Allāh, Mighty and Majestic: “Indeed your Lord is Allāh who created the Heavens and Earth in six days and then ascended above the Throne. He covers the (light of) day with the (darkness) of night (which) pursues it swiftly and (He created) the sun, the moon, the stars (all being) subjected to His command.” [al-ʾAʿrāf:54]”</strong>
      </p>
      <p>
        So, He made it clear that the created beings, and the pursuing, and the rapidity, and the subjected beings are by His command. Then He explained: <strong class="font-semibold text-[#0B465E]">“His is the creation and the command. Blessed be Allāh, the Lord of the worlds.”</strong> <span class="text-xs opacity-75 font-sans">[al-ʾAʿrāf:54]</span>
      </p>
      <p>
        <em class="italic opacity-80 font-medium">Ibn ʿUyaynah</em> said: ‘Allāh distinguished the [act of] creation from the command with His statement: <strong class="font-semibold text-[#0B465E]">“His is the creation and the command.”</strong> [al-ʾAʿrāf:54] — so, the creation is by His command like His statement: “The decision of the matter, before and after (these events) is only with Allāh...” [al-Rūm:4], and like His statement: “Verily, His Command, when He intends a thing, is only that He says to it, "Be!" and it is!” [Yā-Sīn:82], and like His statement: “And among His Signs is that the heaven and the earth stand by His Command” [al-Rūm:25], and He did not say ‘by His Creation.’ ’
      </p>
    </blockquote>
  </div>
</div>`,
    citation: "Kẖalq ʾAfʿāl al-ʿIbād - pg.45",
    imageUrl: "/bukhari_scan.png",
    dateAdded: "2026-09-13",
  },
  {
    id: "16",
    translator: "Abu_Mundhir",
    category: "ʿAqīdah",
    type: "video",
    title: "The Names & Attributes of Allāh",
    speaker: "Abū Ṭalḥah Dāwūd Burbank",
    summary: "A beneficial discourse elucidating the foundational principles regarding the Names and Attributes of Allāh according to the creed of the Salaf.",
    htmlText: `<div class="space-y-4">
  <p class="leading-relaxed">
    A beneficial and foundational lecture clarifying the creed of <strong>Ahl us-Sunnah wal-Jamāʿah</strong> regarding the Names and Attributes of Allāh (<em>al-Asmāʾ waṣ-Ṣifāt</em>), refuting misinterpretations and deviations, delivered by <strong>Abū Ṭalḥah Dāwūd Burbank</strong> (may Allāh have mercy on him).
  </p>
  <div class="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
    <div>
      <h4 class="font-semibold text-sm text-slate-900">Official YouTube Video</h4>
      <p class="text-xs text-slate-600 mt-0.5">Curated by Abū Mundhir (@FawaidAbuTalhaBurbank)</p>
    </div>
    <div class="flex items-center gap-2">
      <a 
        href="https://www.youtube.com/watch?v=NviuJEfYpDg" 
        target="_blank" 
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors shadow-xs"
      >
        Watch on YouTube &rarr;
      </a>
      <a 
        href="https://www.youtube.com/@FawaidAbuTalhaBurbank" 
        target="_blank" 
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg transition-colors"
      >
        Channel Profile
      </a>
    </div>
  </div>
</div>`,
    youtubeId: "NviuJEfYpDg",
    imageUrl: "https://i.ytimg.com/vi/NviuJEfYpDg/maxresdefault.jpg",
    dateAdded: "2026-09-20",
  },
  {
    id: "17",
    translator: "Abu_Mundhir",
    category: "Heart-Softeners",
    type: "quote",
    title: "Glad Tidings to the One Who Controls His Tongue",
    summary: "A narration from Thawbān, the freed slave of the Messenger of Allāh ﷺ, on the virtues of guarding the tongue, being content with one’s home, and weeping over sins.",
    englishText: "‘Abdullāh narrated to us, who said: My father narrated to us, who said: Haytham bin Khārijah narrated to us, who said: Ismā‘īl narrated to us, from Sharḥabīl bin Muslim, from Thawbān, the freed slave of the Messenger of Allāh ﷺ, that he said: “Glad tidings to the one who controls his tongue, whose home suffices him, and who weeps over his sins.”",
    htmlText: `<div class="space-y-6 leading-relaxed">
  <div class="space-y-3">
    <p class="leading-relaxed">
      <em class="italic opacity-80 font-medium">‘Abdullāh</em> narrated to us, who said: <em class="italic opacity-80 font-medium">My father</em> narrated to us, who said: <em class="italic opacity-80 font-medium">Haytham bin Khārijah</em> narrated to us, who said: <em class="italic opacity-80 font-medium">Ismā‘īl</em> narrated to us, from <em class="italic opacity-80 font-medium">Sharḥabīl bin Muslim</em>, from <strong class="font-semibold text-primary">Thawbān</strong>, the freed slave of the Messenger of Allāh ﷺ, that he said:
    </p>

    <blockquote class="border-l-[3.5px] border-[#0B465E] pl-4 sm:pl-5 py-3 my-3 bg-slate-500/[0.04] rounded-r-lg space-y-3 font-serif leading-relaxed">
      <p>
        <strong class="font-semibold text-[#0B465E]">“Glad tidings to the one who controls his tongue, whose home suffices him, and who weeps over his sins.”</strong>
      </p>
    </blockquote>
  </div>
</div>`,
    citation: "Kitāb az-Zuhd — al-Imām Aḥmad ibn Ḥanbal 20/171",
    arabicText: "حَدَّثَنَا عَبْدُ اللَّهِ، قَالَ: ثَنَا أَبِي، قَالَ: ثَنَا هَيْثَمُ بْنُ خَارِجَةَ، قَالَ: ثَنَا إِسْمَاعِيلُ، عَنْ شُرَحْبِيلَ بْنِ مُسْلِمٍ، عَنْ ثَوْبَانَ - مَوْلَى رَسُولِ اللَّهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ -؛ أَنَّهُ قَالَ: «طُوبَى لِمَنْ مَلَكَ لِسَانَهُ، وَوَسِعَهُ بَيْتُهُ، وَبَكَى عَلَى خَطِيئَتِهِ».",
    imageUrl: "/New_Project_10_DCF865C.png",
    dateAdded: "2026-09-20"
  },
  {
    id: "18",
    translator: "Abu_Talhah",
    category: "ʿAqīdah",
    type: "quote",
    title: "Al-Bukẖārī on the Victorious Group & Consensus on the Qurʾān",
    summary: "Imām al-Bukẖārī identifies the Victorious Group (aṭ-Ṭāʾifah aẓ-Ẓāhirah), cites the unbroken consensus (Ijmāʿ) across Islamic lands that the Qurʾān is the uncreated Speech of Allāh, and clarifies the true stance of Imām Aḥmad while rejecting speculative theology.",
    arabicText: `حَدَّثَنَا إِسْحَاقُ، حَدَّثَنَا أَبُو أُسَامَةَ، قَالَ الْأَعْمَشُ: حَدَّثَنَا أَبُو صَالِحٍ، عَنْ أَبِي سَعِيدٍ الْخُدْرِيِّ، قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ: " يُجَاءُ بِنُوحٍ يَوْمَ الْقِيَامَةِ فَيُقَالُ لَهُ هَلْ بَلَّغْتَ؟ فَيَقُولُ: نَعَمْ يَا رَبِّ، فَتُسْأَلُ أُمَّتُهُ: هَلْ بَلَّغَكُمْ؟ فَيَقُولُونَ: مَا جَاءَنَا مِنْ نَذِيرٍ، فَيُقَالُ: مَنْ شُهُودُكَ؟ فَيَقُولُ: مُحَمَّدٌ وَأُمَّتُهُ، فَيُجَاءَ بِكُمْ فَتَشْهَدُونَ، ثُمَّ قَرَأَ النَّبِيُّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ: {وَكَذَلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا لِتَكُونُوا شُهَدَاءَ عَلَى النَّاسِ وَيَكُونَ الرَّسُولُ عَلَيْكُمْ شَهِيدًا} [البقرة: ١٤٣] قَالَ أَبُو عَبْدِ اللَّهِ: هُمُ الطَّائِفَةُ الَّتِي قَالَ النَّبِيُّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ: «لَا تَزَالُ طَائِفَةٌ مِنْ أُمَّتِي ظَاهِرِينَ عَلَى الْحَقِّ لَا يَضُرُّهُمْ مَنْ خَذَلَهُمْ»

حَدَّثَنَا عُبَيْدُ اللَّهِ بْنُ مُوسَى، عَنْ إِسْمَاعِيلَ، عَنْ قَيْسٍ، عَنِ الْمُغِيرَةِ بْنِ شُعْبَةَ رَضِيَ اللَّهُ عَنْهُ، عَنِ النَّبيِّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ قَالَ: «لَا تَزَالُ طَائِفَةٌ مِنْ أُمَّتِي ظَاهِرِينَ حَتَّى يَأْتِيَ أَمْرُ اللَّهِ وَهُمْ ظَاهِرُونَ» وَيُرْوَى نَحْوُهُ عَنْ أَبِي هُرَيْرَةَ، وَمُعَاوِيَةَ، وَجَابِرٍ، وَسَلَمَةَ بْنِ نُفَيْلٍ، وَقُرَّةَ بْنِ إِيَاسٍ رَضِيَ اللَّهُ عَنْهُمْ عَنِ النَّبيِّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ قَالَ أَبُو عَبْدِ اللَّهِ: " وَلَمْ يَكُنْ بَيْنَ أَحَدٍ مِنْ أَهْلِ الْعِلْمِ فِي ذَلِكَ اخْتِلَافٌ، إِلَى زَمَنِ مَالِكٍ، وَالثَّوْرِيِّ، وَحَمَّادِ بْنِ زَيْدٍ، وَعُلَمَاءِ الْأَمْصَارِ ثُمَّ بَعْدَهُمْ ابْنُ عُيَيْنَةَ فِي أَهْلِ الْحِجَازِ، وَيَحْيَى بْنُ سَعِيدٍ، وَعَبْدُ الرَّحْمَنِ بْنُ مَهْدِيٍّ فِي مُحَدِّثِي أَهْلِ الْبَصْرَةِ، وَعَبْدُ اللَّهِ بْنُ إِدْرِيسَ، وَحَفْصُ بْنُ غِيَاثٍ، وَأَبُو بَكْرِ بْنُ عَيَّاشٍ، وَوَكِيعٌ وَذَوُوهُمْ ابْنُ الْمُبَارَكِ فِي مُتَّبِعِيهِ، وَيَزِيدُ بْنُ هَارُونَ فِي الْوَاسِطِيِّينَ إِلَى عَصْرِ مَنْ أَدْرَكْنَا مِنْ أَهْلِ الْحَرَمَيْنِ مَكَّةَ وَالْمَدِينَةِ، وَالْعِرَاقِيِّينَ، وَأَهْلِ الشَّامِ، وَمِصْرَ، وَمُحَدِّثِي أَهْلِ خُرَاسَانَ، مِنْهُمْ مُحَمَّدُ بْنُ يُوسُفَ فِي مُنْتَابيَّهَ وَأَبُو الْوَلِيدِ هِشَامُ بْنُ عَبْدِ الْمَلِكِ فِي مُجْتَبِيَّهَ، وَإِسْمَاعِيلُ بْنُ أَبِي أُوَيْسٍ مَعَ أَهْلِ الْمَدِينَةِ، وَأَبُو مُسْهِرٍ فِي الشَّامِيِّينَ، وَنُعَيْمُ بْنُ حَمَّادٍ مَعَ الْمِصْرِيِّينَ، وَأَحْمَدُ بْنُ حَنْبَلٍ مَعَ أَهْلِ الْبَصْرَةِ، وَالْحُمَيْدِيُّ مِنْ قُرَيْشٍ، وَمَنْ أَتَّبعَ الرَّسُولَ مِنَ الْمَكِّيِّينَ، وَإِسْحَاقُ بْنُ إِبْرَاهِيمَ وَأَبُو عُبَيْدٍ فِي أَهْلِ اللُّغَةِ، وَهَؤُلَاءِ الْمَعْرُوفُونَ بِالْعِلْمِ فِي عَصْرِهِمْ بِلَا اخْتِلَافٍ مِنْهُمْ، أَنَّ الْقُرْآنَ كَلَامُ اللَّهِ، إِلَّا مَنْ شَذَّهَا، أَوْ أَغْفَلَ الطَّرِيقَ الْوَاضِحَ فَعَمِيَ عَلَيْهِ، فَإِنَّ مَرَدَّهُ إِلَى الْكِتَابِ وَالسُّنَّةِ، قَالَ اللَّهُ تَعَالَى: {فَإِنْ تَنَازَعْتُمْ فِي شَيْءٍ فَرُدُّوهُ إِلَى اللَّهِ وَالرَّسُولِ} [النساء: ٥٩] "

حَدَّثَنَا إِبْرَاهِيمُ بْنُ الْمُنْذِرِ، حَدَّثَنَا إِسْحَاقُ بْنُ جَعْفَرِ بْنِ مُحَمَّدٍ، حَدَّثَنِي كَثِيرُ بْنُ عَبْدِ اللَّهِ بْنِ عَمْرِو بْنِ عَوْفٍ، عَنْ أَبِيهِ، عَنْ جَدِّهِ، أَنَّ النَّبِيَّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ كَتَبَ: «وَإِنَّكُمْ مَا اخْتَلَفْتُمْ فِي شَيْءٍ فَإِنَّ مَرَدَّهُ إِلَى اللَّهِ وَإِلى مُحَمَّدٍ»

وَقَالَ النَّبِيُّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ «مَنْ عَمِلَ عَمَلًا لَيْسَ عَلَيْهِ أَمْرُنَا فَهُوَ رَدٌّ» ، حَدَّثَنَا بِذَلِكَ الْعَلَاءُ بْنُ عَبْدِ الْجَبَّارِ، حَدَّثَنَا عَبْدُ اللَّهِ بْنُ جَعْفَرٍ الْمُخَرِّمِيُّ، عَنْ سَعْدِ بْنِ إِبْرَاهِيمَ، عَنْ الْقَاسِمِ، عَنْ عَائِشَةَ رَضِيَ اللَّهُ عَنْهَا عَنِ النَّبيِّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ بِذَلِكَ «وَأَمَرَ عُمَرُ رَضِيَ اللَّهُ عَنْهُ أَنْ تُرَدَّ الْجَهَالَاتُ إِلَى الْكِتَابِ وَالسُّنَّةِ» قَالَ أَبُو عَبْدِ اللَّهِ: " وَكُلُّ مَنْ لَمْ يَعْرِفِ اللَّهَ بِكَلَامِهِ أَنَّهُ غَيْرُ مَخْلُوقٍ فَإِنَّهُ يُعْلَمُ، وَيُرَدُّ جَهْلُهُ إِلَى الْكِتَابِ وَالسُّنَّةِ، فَمَنْ أَبَى بَعْدَ الْعِلْمِ بِهِ، كَانَ مُعَانِدًا، قَالَ اللَّهُ تَعَالَى: {وَمَا كَانَ اللَّهُ لِيُضِلَّ قَوْمًا بَعْدَ إِذْ هَدَاهُمْ حَتَّى يُبَيِّنَ لَهُمْ مَا يَتَّقُونَ} [التوبة: ١١٥] ، وَلِقَوْلِهِ: {وَمَنْ يُشَاقِقِ الرَّسُولَ مِنْ بَعْدِ مَا تَبَيَّنَ لَهُ الْهُدَى وَيَتَّبِعْ غَيْرَ سَبِيلِ الْمُؤْمِنِينَ نُوَلِّهِ مَا تَوَلَّى وَنُصْلِهِ جَهَنَّمَ وَسَاءَتْ مَصِيرًا} [النساء: ١١٥] ، فَأَمَّا مَا احْتَجَّ بِهِ الْفَرِيقَانِ لِمَذْهَبِ أَحْمَدَ وَيَدَّعِيهِ كُلٌّ لِنَفْسِهِ، فَلَيْسَ بِثَابِتٍ كَثِيرٌ مِنْ أَخْبَارِهِمْ، وَرُبَّمَا لَمْ يَفْهَمُوا دِقَّةَ مَذْهَبِهِ، بَلِ الْمَعْرُوفُ عَنْ أَحْمَدَ وَأَهْلِ الْعِلْمِ أَنَّ كَلَامَ اللَّهِ غَيْرُ مَخْلُوقٍ، وَمَا سِوَاهُ مَخْلُوقٌ، وَأَنَّهُمْ كَرِهُوا الْبَحْثَ وَالتَّنْقِيبَ عَنِ الْأَشْيَاءِ الْغَامِضَةِ، وَتَجَنَّبُوا أَهْلَ الْكَلَامِ، وَالْخَوْضَ وَالتَّنَازُعَ إِلَّا فِيمَا جَاءَ فِيهِ الْعِلْمُ، وَبَيَّنَهُ رَسُولُ اللَّهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ "`,
    englishText: `Isḥāq narrated to us, [he said]: Abū ʾUsāmah narrated to us, [he said]: al-ʾAʿmasẖ said: Abū Ṣāliḥ narrated to us, from Abī Saʿīd al-Kẖudrī, he said: The Messenger of Allāh ﷺ said: "**Nūḥ will be brought [on] the Day of Resurrection, so it will be said to him: ‘Have you conveyed [the Message]?’ So, he says: ‘Yes, O Lord.’ So, his nation is asked: ‘Did he convey [to] you [the Message]?’ So, they will be saying: ‘There has never come to us a warner.’ So, it is said: ‘Who are your witnesses?’ So, he says: ‘Muḥammad and his nation.’ So, you will be brought, so you will be witnessing.**" Then the Prophet ﷺ recited: "**Thus We have made you [true Muslims - real believers of Islamic Monotheism, true followers of Prophet Muḥammad ﷺ and his Sunnah (legal ways)], a *waṣat* (just) (and the best) nation, that you be witnesses over mankind and the Messenger (Muḥammad ﷺ) be a witness over you.**" [al-Baqarah:143]

Abū ʿAbd Allāh [al-Bukẖārī] said: ‘They are the group [of] whom the Prophet ﷺ said: "**A group from my nation do not cease to be uppermost upon the truth, [those] who forsake them do not harm them.**"’

ʿUbayd Allāh ibn Mūsā narrated to us, from ʾIsrāʾīl, from Qays, from al-Muġẖīrah ibn Sẖuʿbah, may Allāh be pleased with him, from the Prophet ﷺ, he said: "**A group from my nation do not cease to be uppermost until the command of Allāh comes and they are uppermost.**" And its like is narrated from Abī Hurayrah, and Muʿāwiyah, and Jābir, and Salamah ibn Nufayl, and Qurrah ibn ʾIyās, may Allāh be pleased with them. from the Prophet ﷺ.

Abū ʿAbd Allāh [al-Bukẖārī] said: ‘And there was not differing regarding that between anyone from the People of Knowledge to the time of Mālik, and al-Ṯhawrī, and Ḥammād ibn Zayd, and the scholars of the [various] regions - then after them Ibn ʿUyaynah among the People of the Ḥijāz, and ʿAbd al-Raḥmān ibn Mahdī among the ḥadīṯh-scholars of the People of al-Baṣrah, and ʿAbd Allāh ibn Idrīs , and Ḥafṣ ibn Ġẖiyāṯh, and Abū Bakr ibn ʿAyyāsẖ, and Wakīʿ and their likes; Ibn al-Mubārak among his followers, and Yazīd ibn Hārūn among the Wāsiṭiyyīn (the People of Wāsiṭ) - to the era [of those] who we met from the People of the Two Sanctuaries, Makkah and al-Madīnah, and the ʿIrāqiyyīn (the People of ʿIrāq), and the People of al-Sẖām, and Egypt, and the ḥadīṯh-scholars of the People of Kẖurāsān, from them: Muḥammad ibn Yūsuf among those who frequented him and Abū al-Walīd Hisẖām ibn ʿAbd al-Malik among his *mujtabiyyah* (in another print it is: muḥibbīh - those who loved him), and ʾIsmāʾīl ibn Abī ʾUways with the People of al-Madīnah, and Abū Mushir among the Sẖāmiyyīn (the People of al-Sẖām), and Nuʿaym ibn Ḥammād with the Egyptians, and ʾAḥmad ibn Ḥanbal with the People of al-Baṣrah, and al-Ḥumaydī from Quraysẖ and whoever followed the Messenger from the Makkiyyīn (the People of al-Makkah), and Isḥāq ibn Ibrāhīm and Abū ʿUbayd among the People of al-Luġẖah (Arabic philology, lexicography, and linguistics). And these are the known ones by knowledge in their eras, without differing from them, that the Qurʾān is the Speech of Allāh, except for who deviated [from] it, or was oblivious to the clear path, so it became obscure upon him. So, indeed his place of return is to the Book and the Sunnah. Allāh, Exalted is He, said: "**And if you disagree among yourselves over anything then refer it back to Allāh and the Messenger**" [al-Nisāʾ:59].’

Ibrāhīm ibn al-Mundẖir narrated to us, [he said]: Isḥāq ibn Jaʿfar ibn Muḥammad narrated to us, [he said]: Kaṯhīr ibn ʿAbd Allāh ibn ʿAmr ibn ʿAwf narrated to me, from his father, from his grandfather, that the Prophet ﷺ wrote: "**And indeed you, what you have differed in a thing, then indeed its place of return is to Allāh and to Muḥammad.**"

And the Prophet ﷺ said: "**Whoever does an action that is not from our affair will have it rejected.**" al-ʿAlāʾ ibn ʿAbd al-Jabbār narrated to us with that, [he said]: ʿAbd Allāh ibn Jaʿfar al-Mukẖarrimī narrated to us, from Saʿd ibn Ibrāhīm, from al-Qāsim, from ʿĀʾisẖah, may Allāh be pleased with her, from the Prophet ﷺ [narrating] with that. 

And ʿUmar, may Allāh be pleased with him, ordered that the ignorant be referred to the Book and the Sunnah.

Abū ʿAbd Allāh [al-Bukẖārī] said: ‘And everyone who does not recognise Allāh with His Speech, that it is not created, then he is to be taught, and his ignorance is to be returned to the Book and the Sunnah, then whoever rejects after knowledge of it, he is obstinate. Allāh, Exalted be He, said: "**And Allāh will never lead a people astray after He has guided them until He makes clear to them as to what they should avoid.**" [al-Tawbah:115]. And because of His saying: "**And whoever contradicts and opposes the Messenger (Muḥammad ﷺ) after the right path has been shown clearly to him, and follows other than the believers’ way. We shall keep him in the path he has chosen, and burn him in Hell - what an evil destination.**" [al-Nisāʾ:115]. So, as for what the two parties used as an argument for the *madẖab* of ʾAḥmad [ibn Ḥanbal], and each claiming it for himself, then much of their reports are not established, and perhaps they have not understood the accuracy of his madẖab. Rather, what is known about ʾAḥmad and the People of Knowledge is that [they hold that] the Speech of Allāh is not created, and whatever is other than it is created, and that they hate examination and investigation about ambiguous things, and they shun the People of Speculative Theology, and delving [into disputes] and disputation, except concerning what knowledge has came in, and the Messenger of Allāh ﷺ had made it clear.’`,
    htmlText: `<div class="space-y-6 leading-relaxed">
  <div class="space-y-3">
    <p class="leading-relaxed">
      <em class="italic opacity-80 font-medium">Isḥāq</em> narrated to us, [he said]: <em class="italic opacity-80 font-medium">Abū ʾUsāmah</em> narrated to us, [he said]: <em class="italic opacity-80 font-medium">al-ʾAʿmasẖ</em> said: <em class="italic opacity-80 font-medium">Abū Ṣāliḥ</em> narrated to us, from <em class="italic opacity-80 font-medium">Abī Saʿīd al-Kẖudrī</em>, he said: The Messenger of Allāh ﷺ said:
    </p>

    <blockquote class="border-l-[3.5px] border-[#0B465E] pl-4 sm:pl-5 py-3 my-3 bg-slate-500/[0.04] rounded-r-lg space-y-3 font-serif leading-relaxed">
      <p><strong class="font-semibold text-[#0B465E]">“Nūḥ will be brought [on] the Day of Resurrection, so it will be said to him: 'Have you conveyed [the Message]?' So, he says: 'Yes, O Lord.' So, his nation is asked: 'Did he convey [to] you [the Message]?' So, they will be saying: 'There has never come to us a warner.' So, it is said: 'Who are your witnesses?' So, he says: 'Muḥammad and his nation.' So, you will be brought, so you will be witnessing.”</strong></p>
      <p>Then the Prophet ﷺ recited:</p>
      <p><strong class="font-semibold text-[#0B465E]">“Thus We have made you [true Muslims - real believers of Islamic Monotheism, true followers of Prophet Muḥammad ﷺ and his Sunnah (legal ways)], a <em>waṣat</em> (just) (and the best) nation, that you be witnesses over mankind and the Messenger (Muḥammad ﷺ) be a witness over you.”</strong> <span class="text-xs opacity-75 font-sans">[al-Baqarah:143]</span></p>
    </blockquote>

    <p class="mt-4 leading-relaxed">
      <strong class="font-semibold text-primary">Abū ʿAbd Allāh [al-Bukẖārī]</strong> said:
    </p>

    <blockquote class="border-l-[3.5px] border-[#0B465E] pl-4 sm:pl-5 py-3 my-3 bg-slate-500/[0.04] rounded-r-lg space-y-3 font-serif leading-relaxed">
      <p>‘They are the group [of] whom the Prophet ﷺ said: <strong class="font-semibold text-[#0B465E]">“A group from my nation do not cease to be uppermost upon the truth, [those] who forsake them do not harm them.”</strong>’</p>
    </blockquote>
  </div>

  <hr class="border-current opacity-20 my-6" />

  <div class="space-y-3">
    <p class="leading-relaxed">
      <em class="italic opacity-80 font-medium">ʿUbayd Allāh ibn Mūsā</em> narrated to us, from <em class="italic opacity-80 font-medium">ʾIsrāʾīl</em>, from <em class="italic opacity-80 font-medium">Qays</em>, from <em class="italic opacity-80 font-medium">al-Muġẖīrah ibn Sẖuʿbah</em>, may Allāh be pleased with him, from the Prophet ﷺ, he said:
    </p>

    <blockquote class="border-l-[3.5px] border-[#0B465E] pl-4 sm:pl-5 py-3 my-3 bg-slate-500/[0.04] rounded-r-lg space-y-3 font-serif leading-relaxed">
      <p><strong class="font-semibold text-[#0B465E]">“A group from my nation do not cease to be uppermost until the command of Allāh comes and they are uppermost.”</strong></p>
    </blockquote>

    <p class="text-xs sm:text-sm opacity-80 italic">
      And its like is narrated from Abī Hurayrah, and Muʿāwiyah, and Jābir, and Salamah ibn Nufayl, and Qurrah ibn ʾIyās, may Allāh be pleased with them, from the Prophet ﷺ.
    </p>

    <p class="mt-4 leading-relaxed">
      <strong class="font-semibold text-primary">Abū ʿAbd Allāh [al-Bukẖārī]</strong> said:
    </p>

    <blockquote class="border-l-[3.5px] border-[#0B465E] pl-4 sm:pl-5 py-3 my-3 bg-slate-500/[0.04] rounded-r-lg space-y-3 font-serif leading-relaxed">
      <p>‘And there was not differing regarding that between anyone from the People of Knowledge to the time of <strong class="font-semibold">Mālik</strong>, and <strong class="font-semibold">al-Ṯhawrī</strong>, and <strong class="font-semibold">Ḥammād ibn Zayd</strong>, and the scholars of the [various] regions — then after them <strong class="font-semibold">Ibn ʿUyaynah</strong> among the People of the Ḥijāz, and <strong class="font-semibold">ʿAbd al-Raḥmān ibn Mahdī</strong> among the ḥadīṯh-scholars of the People of al-Baṣrah, and <strong class="font-semibold">ʿAbd Allāh ibn Idrīs</strong>, and <strong class="font-semibold">Ḥafṣ ibn Ġẖiyāṯh</strong>, and <strong class="font-semibold">Abū Bakr ibn ʿAyyāsẖ</strong>, and <strong class="font-semibold">Wakīʿ</strong> and their likes; <strong class="font-semibold">Ibn al-Mubārak</strong> among his followers, and <strong class="font-semibold">Yazīd ibn Hārūn</strong> among the Wāsiṭiyyīn (the People of Wāsiṭ) — to the era [of those] who we met from the People of the Two Sanctuaries, Makkah and al-Madīnah, and the ʿIrāqiyyīn (the People of ʿIrāq), and the People of al-Sẖām, and Egypt, and the ḥadīṯh-scholars of the People of Kẖurāsān, from them: <strong class="font-semibold">Muḥammad ibn Yūsuf</strong> among those who frequented him and <strong class="font-semibold">Abū al-Walīd Hisẖām ibn ʿAbd al-Malik</strong> among his <em>mujtabiyyah</em> (in another print it is: muḥibbīh - those who loved him), and <strong class="font-semibold">ʾIsmāʾīl ibn Abī ʾUways</strong> with the People of al-Madīnah, and <strong class="font-semibold">Abū Mushir</strong> among the Sẖāmiyyīn (the People of al-Sẖām), and <strong class="font-semibold">Nuʿaym ibn Ḥammād</strong> with the Egyptians, and <strong class="font-semibold">ʾAḥmad ibn Ḥanbal</strong> with the People of al-Baṣrah, and <strong class="font-semibold">al-Ḥumaydī</strong> from Quraysẖ and whoever followed the Messenger from the Makkiyyīn (the People of al-Makkah), and <strong class="font-semibold">Isḥāq ibn Ibrāhīm</strong> and <strong class="font-semibold">Abū ʿUbayd</strong> among the People of al-Luġẖah (Arabic philology, lexicography, and linguistics). And these are the known ones by knowledge in their eras, without differing from them, that <strong class="font-semibold text-[#0B465E]">the Qurʾān is the Speech of Allāh</strong>, except for who deviated [from] it, or was oblivious to the clear path, so it became obscure upon him. So, indeed his place of return is to the Book and the Sunnah. Allāh, Exalted is He, said: <strong class="font-semibold text-[#0B465E]">“And if you disagree among yourselves over anything then refer it back to Allāh and the Messenger”</strong> <span class="text-xs opacity-75 font-sans">[al-Nisāʾ:59]</span>.’</p>
    </blockquote>
  </div>

  <hr class="border-current opacity-20 my-6" />

  <div class="space-y-3">
    <p class="leading-relaxed">
      <em class="italic opacity-80 font-medium">Ibrāhīm ibn al-Mundẖir</em> narrated to us, [he said]: <em class="italic opacity-80 font-medium">Isḥāq ibn Jaʿfar ibn Muḥammad</em> narrated to us, [he said]: <em class="italic opacity-80 font-medium">Kaṯhīr ibn ʿAbd Allāh ibn ʿAmr ibn ʿAwf</em> narrated to me, from his father, from his grandfather, that the Prophet ﷺ wrote:
    </p>

    <blockquote class="border-l-[3.5px] border-[#0B465E] pl-4 sm:pl-5 py-3 my-3 bg-slate-500/[0.04] rounded-r-lg space-y-3 font-serif leading-relaxed">
      <p><strong class="font-semibold text-[#0B465E]">“And indeed you, what you have differed in a thing, then indeed its place of return is to Allāh and to Muḥammad.”</strong></p>
    </blockquote>

    <p class="mt-4 leading-relaxed">
      And the Prophet ﷺ said: <strong class="font-semibold text-[#0B465E]">“Whoever does an action that is not from our affair will have it rejected.”</strong> <em class="italic opacity-80 font-medium">al-ʿAlāʾ ibn ʿAbd al-Jabbār</em> narrated to us with that, [he said]: <em class="italic opacity-80 font-medium">ʿAbd Allāh ibn Jaʿfar al-Mukẖarrimī</em> narrated to us, from <em class="italic opacity-80 font-medium">Saʿd ibn Ibrāhīm</em>, from <em class="italic opacity-80 font-medium">al-Qāsim</em>, from <em class="italic opacity-80 font-medium">ʿĀʾisẖah</em>, may Allāh be pleased with her, from the Prophet ﷺ [narrating] with that.
    </p>

    <p class="mt-3 leading-relaxed">
      And <strong class="font-semibold text-primary">ʿUmar</strong>, may Allāh be pleased with him, ordered that the ignorant be referred to the Book and the Sunnah.
    </p>

    <p class="mt-4 leading-relaxed">
      <strong class="font-semibold text-primary">Abū ʿAbd Allāh [al-Bukẖārī]</strong> said:
    </p>

    <blockquote class="border-l-[3.5px] border-[#0B465E] pl-4 sm:pl-5 py-3 my-3 bg-slate-500/[0.04] rounded-r-lg space-y-3 font-serif leading-relaxed">
      <p>‘And everyone who does not recognise Allāh with His Speech, that it is not created, then he is to be taught, and his ignorance is to be returned to the Book and the Sunnah, then whoever rejects after knowledge of it, he is obstinate. Allāh, Exalted be He, said: <strong class="font-semibold text-[#0B465E]">“And Allāh will never lead a people astray after He has guided them until He makes clear to them as to what they should avoid.”</strong> <span class="text-xs opacity-75 font-sans">[al-Tawbah:115]</span>. And because of His saying: <strong class="font-semibold text-[#0B465E]">“And whoever contradicts and opposes the Messenger (Muḥammad ﷺ) after the right path has been shown clearly to him, and follows other than the believers' way. We shall keep him in the path he has chosen, and burn him in Hell — what an evil destination.”</strong> <span class="text-xs opacity-75 font-sans">[al-Nisāʾ:115]</span>. So, as for what the two parties used as an argument for the <em>madẖab</em> of ʾAḥmad [ibn Ḥanbal], and each claiming it for himself, then much of their reports are not established, and perhaps they have not understood the accuracy of his madẖab. Rather, what is known about ʾAḥmad and the People of Knowledge is that [they hold that] <strong class="font-semibold text-[#0B465E]">the Speech of Allāh is not created, and whatever is other than it is created</strong>, and that they hate examination and investigation about ambiguous things, and they shun the People of Speculative Theology, and delving [into disputes] and disputation, except concerning what knowledge has came in, and the Messenger of Allāh ﷺ had made it clear.’</p>
    </blockquote>
  </div>
</div>`,
    citation: "Kẖalq ʾAfʿāl al-ʿIbād — pp. 60–62",
    imageUrl: "/New_Project_2_ADA85A9.png",
    dateAdded: "2026-09-21"
  },
  {
    id: "19",
    translator: "Abu_Talhah",
    category: "ʿAqīdah",
    type: "video",
    title: "Sharḥ as-Sunnah — Imām al-Barbahārī (Full Series)",
    speaker: "Abū Khadeejah ʿAbdul-Wāḥid",
    author: "Imām Abū Muḥammad al-Ḥasan ibn ʿAlī ibn Khalaf al-Barbahārī (d. 329H)",
    summary: "A foundational lecture series explaining the classical creed ‘Sharḥ as-Sunnah’ (Explanation of the Creed) by Imām al-Barbahārī (d. 329H), delivered by Abū Khadeejah ʿAbdul-Wāḥid and curated by Abū Ṭalḥah al-ʾAfġhānī. Watch all 7 lessons in one seamless series player.",
    htmlText: `<div class="space-y-4">
  <p class="leading-relaxed">
    This is a foundational lecture series by <strong>Abū Khadeejah ʿAbdul-Wāḥid</strong> (may Allāh preserve him) providing a detailed explanation and commentary of the classical landmark text on the Salafi creed: <strong><em>Sharḥ as-Sunnah</em></strong> (Explanation of the Sunnah) authored by the great Imām of the Sunnah, <strong>Abū Muḥammad al-Ḥasan ibn ʿAlī ibn Khalaf al-Barbahārī</strong> (died 329H, may Allāh have mercy upon him).
  </p>
  <p class="leading-relaxed">
    The series expounds upon the principles of <em>Ahl us-Sunnah wal-Jamāʿah</em>, adherence to the narrations of the Companions, warning against innovations (bidaʿ) and misguided sects, and establishing the pure methodology of the Salaf.
  </p>
  <div class="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
    <div>
      <h4 class="font-semibold text-sm text-slate-900">Official YouTube Channel &amp; Playlist</h4>
      <p class="text-xs text-slate-600 mt-0.5">Curated by Abū Ṭalḥah al-ʾAfġhānī (@FawaidAbuKhadeejah)</p>
    </div>
    <div class="flex items-center gap-2">
      <a 
        href="https://www.youtube.com/playlist?list=PLsq9iuhAGY6srdBGOFmpLJFJaKEKWHloI" 
        target="_blank" 
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors shadow-xs"
      >
        Open Playlist on YouTube &rarr;
      </a>
      <a 
        href="https://www.youtube.com/@FawaidAbuKhadeejah" 
        target="_blank" 
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg transition-colors"
      >
        Channel Profile
      </a>
    </div>
  </div>
</div>`,
    citation: "Sharḥ as-Sunnah — Imām al-Barbahārī (d. 329H)",
    youtubeId: "7rxsYPbfCPc",
    playlistId: "PLsq9iuhAGY6srdBGOFmpLJFJaKEKWHloI",
    playlistUrl: "https://www.youtube.com/playlist?list=PLsq9iuhAGY6srdBGOFmpLJFJaKEKWHloI",
    imageUrl: "https://i.ytimg.com/vi/7rxsYPbfCPc/maxresdefault.jpg",
    dateAdded: "2026-09-21",
    videos: [
      {
        id: "7rxsYPbfCPc",
        lessonNumber: 1,
        title: "Sharh as-Sunnah | Imam al-Barbahari | Lesson 1",
        duration: "Full Lecture"
      },
      {
        id: "fYIUSMYhwz0",
        lessonNumber: 2,
        title: "Sharh as-Sunnah | Imam al-Barbahari | Lesson 2",
        duration: "Full Lecture"
      },
      {
        id: "33a_10ZmrL8",
        lessonNumber: 3,
        title: "Sharh as-Sunnah | Imam al-Barbahari | Lesson 3",
        duration: "Full Lecture"
      },
      {
        id: "B36hYZ1iUqU",
        lessonNumber: 4,
        title: "Sharh as-Sunnah | Imam al-Barbahari | Lesson 4",
        duration: "Full Lecture"
      },
      {
        id: "KprYpjLNt9w",
        lessonNumber: 5,
        title: "Sharh as-Sunnah | Imam al-Barbahari | Lesson 5",
        duration: "Full Lecture"
      },
      {
        id: "cy1cJFUDPf0",
        lessonNumber: 6,
        title: "Sharh as-Sunnah | Imam al-Barbahari | Lesson 6",
        duration: "Full Lecture"
      },
      {
        id: "RZm_1DHeNUI",
        lessonNumber: 7,
        title: "Sharh as-Sunnah | Imam al-Barbahari | Lesson 7",
        duration: "Full Lecture"
      }
    ]
  },
  {
    id: "20",
    translator: "Abu_Mundhir",
    category: "Heart-Softeners",
    type: "video",
    title: "Having Good Thoughts About Allāh (Ḥusn aẓ-Ẓann)",
    speaker: "Abū Ṭalḥah Dāwūd Burbank",
    summary: "A heartfelt reminder expounding upon the obligation and virtue of having good expectations of Allāh (Ḥusn aẓ-Ẓann billāh), relying upon His infinite mercy, and combining sincere hope with righteous actions.",
    htmlText: `<div class="space-y-4">
  <p class="leading-relaxed">
    An uplifting and heart-softening reminder by <strong>Abū Ṭalḥah Dāwūd Burbank</strong> (may Allāh have mercy upon him) explaining the crucial principle of <em>Ḥusn aẓ-Ẓann billāh</em> (having good thoughts and positive expectations of Allāh).
  </p>
  <p class="leading-relaxed">
    The discourse explains how the believer balances fear of Allāh’s punishment with complete reliance and hope in His boundless forgiveness, drawing upon authentic Qurʾānic verses and prophetic narrations.
  </p>
  <div class="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
    <div>
      <h4 class="font-semibold text-sm text-slate-900">Official YouTube Video</h4>
      <p class="text-xs text-slate-600 mt-0.5">Curated by Abū Mundhir (@FawaidAbuTalhaBurbank)</p>
    </div>
    <div class="flex items-center gap-2">
      <a 
        href="https://www.youtube.com/watch?v=LvdqeE2U1pI" 
        target="_blank" 
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors shadow-xs"
      >
        Watch on YouTube &rarr;
      </a>
      <a 
        href="https://www.youtube.com/@FawaidAbuTalhaBurbank" 
        target="_blank" 
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg transition-colors"
      >
        Channel Profile
      </a>
    </div>
  </div>
</div>`,
    youtubeId: "LvdqeE2U1pI",
    imageUrl: "https://i.ytimg.com/vi/LvdqeE2U1pI/maxresdefault.jpg",
    dateAdded: "2026-09-21"
  },
  {
    id: "21",
    translator: "Abu_Mundhir",
    category: "Heart-Softeners",
    type: "video",
    title: "Benefits of Giving Zakāt",
    speaker: "Abū Ṭalḥah Dāwūd Burbank",
    summary: "A beneficial discourse elucidating the profound spiritual, personal, and societal benefits of establishing the pillar of Zakāt and purifying one’s wealth.",
    htmlText: `<div class="space-y-4">
  <p class="leading-relaxed">
    A beneficial and concise explanation delivered by <strong>Abū Ṭalḥah Dāwūd Burbank</strong> (may Allāh have mercy upon him) detailing the immense virtues, spiritual purification, and societal blessings of paying the obligatory <em>Zakāt</em>.
  </p>
  <p class="leading-relaxed">
    Zakāt purifies the wealth and soul of the believer from greed, fosters compassion towards the needy, and brings continuous blessing (barakah) from Allāh the Exalted.
  </p>
  <div class="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
    <div>
      <h4 class="font-semibold text-sm text-slate-900">Official YouTube Video</h4>
      <p class="text-xs text-slate-600 mt-0.5">Curated by Abū Mundhir (@FawaidAbuTalhaBurbank)</p>
    </div>
    <div class="flex items-center gap-2">
      <a 
        href="https://www.youtube.com/watch?v=Iz2CfpUfIc4" 
        target="_blank" 
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors shadow-xs"
      >
        Watch on YouTube &rarr;
      </a>
      <a 
        href="https://www.youtube.com/@FawaidAbuTalhaBurbank" 
        target="_blank" 
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg transition-colors"
      >
        Channel Profile
      </a>
    </div>
  </div>
</div>`,
    youtubeId: "Iz2CfpUfIc4",
    imageUrl: "https://i.ytimg.com/vi/Iz2CfpUfIc4/maxresdefault.jpg",
    dateAdded: "2026-09-21"
  },
  {
    id: "22",
    translator: "Abu_Mundhir",
    category: "Uṣool",
    type: "video",
    title: "Blameworthy ‘Taqlīd’ (Blind Following)",
    speaker: "Abū Ṭalḥah Dāwūd Burbank",
    summary: "A vital clarification on the distinction between permissible following of scholars and blameworthy fanatical blind following (Taqlīd) that opposes the authentic proofs.",
    htmlText: `<div class="space-y-4">
  <p class="leading-relaxed">
    A vital lecture delivered by <strong>Abū Ṭalḥah Dāwūd Burbank</strong> (may Allāh have mercy upon him) elucidating the principle of <em>Taqlīd</em> (blind following) and distinguishing between permissible seeking of fatwá from recognized scholars and the blameworthy fanatical partisan adherence to individuals over the clear proofs of the Qurʾān and Sunnah.
  </p>
  <p class="leading-relaxed">
    The lecture cites classical statements of the four great Imāms (Abū Ḥanīfah, Mālik, ash-Shāfiʿī, and Aḥmad) enjoining adherence to the authentic Sunnah whenever an authentic ḥadīth is made clear.
  </p>
  <div class="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
    <div>
      <h4 class="font-semibold text-sm text-slate-900">Official YouTube Video</h4>
      <p class="text-xs text-slate-600 mt-0.5">Curated by Abū Mundhir (@FawaidAbuTalhaBurbank)</p>
    </div>
    <div class="flex items-center gap-2">
      <a 
        href="https://www.youtube.com/watch?v=kwucQ3_oXaI" 
        target="_blank" 
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors shadow-xs"
      >
        Watch on YouTube &rarr;
      </a>
      <a 
        href="https://www.youtube.com/@FawaidAbuTalhaBurbank" 
        target="_blank" 
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg transition-colors"
      >
        Channel Profile
      </a>
    </div>
  </div>
</div>`,
    youtubeId: "kwucQ3_oXaI",
    imageUrl: "https://i.ytimg.com/vi/kwucQ3_oXaI/maxresdefault.jpg",
    dateAdded: "2026-09-21"
  },
  {
    id: "23",
    translator: "Abu_Mundhir",
    category: "Miscellaneous",
    type: "video",
    title: "Who Are \"The Image Makers\"?",
    speaker: "Abū Ṭalḥah Dāwūd Burbank",
    author: "Shaykh ʿAbdullāh al-Ghudayyān",
    summary: "An essential translation and explanation of the verdict of Shaykh ʿAbdullāh al-Ghudayyān clarifying the prophetic warnings regarding picture-makers (al-Muṣawwirūn).",
    htmlText: `<div class="space-y-4">
  <p class="leading-relaxed">
    An important translation and commentary by <strong>Abū Ṭalḥah Dāwūd Burbank</strong> (may Allāh have mercy upon him) on the verdict of the venerable scholar <strong>Shaykh ʿAbdullāh al-Ghudayyān</strong> (may Allāh have mercy upon him) answering the question: <em>Who are "the image-makers" (al-muṣawwirūn) mentioned in the ḥadīths of warning?</em>
  </p>
  <p class="leading-relaxed">
    The discourse clarifies the stern warnings of the Prophet ﷺ concerning those who imitate the creation of Allāh, detailing the scholarly classifications of image-making (taṣwīr) and what is prohibited.
  </p>
  <div class="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
    <div>
      <h4 class="font-semibold text-sm text-slate-900">Official YouTube Video</h4>
      <p class="text-xs text-slate-600 mt-0.5">Curated by Abū Mundhir (@FawaidAbuTalhaBurbank)</p>
    </div>
    <div class="flex items-center gap-2">
      <a 
        href="https://www.youtube.com/watch?v=Dj8ES4A-yk8" 
        target="_blank" 
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors shadow-xs"
      >
        Watch on YouTube &rarr;
      </a>
      <a 
        href="https://www.youtube.com/@FawaidAbuTalhaBurbank" 
        target="_blank" 
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg transition-colors"
      >
        Channel Profile
      </a>
    </div>
  </div>
</div>`,
    youtubeId: "Dj8ES4A-yk8",
    imageUrl: "https://i.ytimg.com/vi/Dj8ES4A-yk8/maxresdefault.jpg",
    dateAdded: "2026-09-21"
  },
  {
    id: "24",
    translator: "Abu_Talhah",
    category: "Heart-Softeners",
    type: "quote",
    title: "Four Matters of Happiness & Four of Misery",
    summary: "An authentic ḥadīth narrated by Saʿd ibn Abī Waqqāṣ, transmitted by Imām Ibn Ḥibbān in al-Mawārid and authenticated in al-Jāmiʿ aṣ-Ṣaḥīḥ, enumerating four causes of happiness and four causes of misery in this life.",
    arabicText: `قَالَ الإِمَامُ ابْنُ حِبَّانَ رَحِمَهُ اللَّهُ كَمَا فِي "المَوَارِدِ" (ص ٣٠٢):
أَخْبَرَنَا مُحَمَّدُ بْنُ إِسْحَاقَ مَوْلَى ثَقِيفٍ حَدَّثَنَا مُحَمَّدُ بْنُ عَبْدِ العَزِيزِ بْنِ أَبِي رِزْمَةَ حَدَّثَنَا الفَضْلُ بْنُ مُوسَى عَنْ عَبْدِ اللَّهِ بْنِ سَعِيدِ بْنِ أَبِي هِنْدٍ عَنْ إِسْمَاعِيلَ بْنِ مُحَمَّدِ بْنِ سَعْدِ بْنِ أَبِي وَقَّاصٍ عَنْ أَبِيهِ عَنْ جَدِّهِ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَعَلَى آلِهِ وَسَلَّمَ:
«أَرْبَعٌ مِنَ السَّعَادَةِ: المَرْأَةُ الصَّالِحَةُ، وَالمَسْكَنُ الوَاسِعُ، وَالجَارُ الصَّالِحُ، وَالمَرْكَبُ الهَنِيُّ، وَأَرْبَعٌ مِنَ الشَّقَاءِ: الجَارُ السُّوءُ، وَالمَرْأَةُ السُّوءُ، وَالمَرْكَبُ السُّوءُ، وَالمَسْكَنُ الضَّيِّقُ».

هَذَا حَدِيثٌ صَحِيحٌ.`,
    englishText: `Al-Imām Ibn Ḥibbān, may Allāh have mercy upon him, said, just as it is in ‘al-Mawārid’ (pg. 302):

Muḥammad ibn Isḥāq, the freed slave of Thaqīf, narrated to us: Muḥammad ibn ʿAbd Al-ʿAzīz ibn Abī Razmah narrated to us: al-Faḍl ibn Mūsā narrated to us from ʿAbd Allāh ibn Saʿīd ibn Abī Hind from Ismāʿīl ibn Muḥammad ibn Saʿd ibn Abī Waqqāṣ, from his father, from his grandfather, he said:

The Messenger of Allāh, may Allāh extol him and send peace and blessings upon him and his family, said:
“Four are from happiness: The righteous woman (i.e. wife), and the spacious dwelling, and the righteous neighbour, and the pleasant [and comfortable] mount. And four are from misery: The evil neighbour, and the evil woman, and the evil mount and the constricted dwelling.”

This is an authentic (ṣaḥīḥ) ḥadīth.`,
    htmlText: `<div class="space-y-6 leading-relaxed">
  <div class="space-y-3">
    <p class="leading-relaxed">
      <strong class="font-semibold text-primary">Al-Imām Ibn Ḥibbān</strong>, may Allāh have mercy upon him, said, just as it is in <em>‘al-Mawārid’</em> (pg. 302):
    </p>
    <p class="leading-relaxed opacity-90">
      <em class="italic opacity-80 font-medium">Muḥammad ibn Isḥāq</em>, the freed slave of Thaqīf, narrated to us: <em class="italic opacity-80 font-medium">Muḥammad ibn ʿAbd Al-ʿAzīz ibn Abī Razmah</em> narrated to us: <em class="italic opacity-80 font-medium">al-Faḍl ibn Mūsā</em> narrated to us from <em class="italic opacity-80 font-medium">ʿAbd Allāh ibn Saʿīd ibn Abī Hind</em> from <em class="italic opacity-80 font-medium">Ismāʿīl ibn Muḥammad ibn Saʿd ibn Abī Waqqāṣ</em>, from <em class="italic opacity-80 font-medium">his father</em>, from <em class="italic opacity-80 font-medium">his grandfather</em> [Saʿd ibn Abī Waqqāṣ, may Allāh be pleased with him], he said:
    </p>
    <p class="leading-relaxed">
      The Messenger of Allāh, may Allāh extol him and send peace and blessings upon him and his family, said:
    </p>

    <blockquote class="border-l-[3.5px] border-[#0B465E] pl-4 sm:pl-5 py-3 my-3 bg-slate-500/[0.04] rounded-r-lg space-y-3 font-serif leading-relaxed">
      <p>
        “Four are from happiness: <strong class="font-semibold text-[#0B465E]">The righteous woman</strong> (i.e. wife), and <strong class="font-semibold text-[#0B465E]">the spacious dwelling</strong>, and <strong class="font-semibold text-[#0B465E]">the righteous neighbour</strong>, and <strong class="font-semibold text-[#0B465E]">the pleasant [and comfortable] mount</strong>.”
      </p>
      <p>
        “And four are from misery: <strong class="font-semibold text-[#0B465E]">The evil neighbour</strong>, and <strong class="font-semibold text-[#0B465E]">the evil woman</strong>, and <strong class="font-semibold text-[#0B465E]">the evil mount</strong>, and <strong class="font-semibold text-[#0B465E]">the constricted dwelling</strong>.”
      </p>
    </blockquote>

    <p class="font-medium pt-2 border-t border-slate-200/60 dark:border-slate-800/80 opacity-90 italic">
      This is an authentic (ṣaḥīḥ) ḥadīth.
    </p>
  </div>
</div>`,
    citation: "Al-Jāmiʿ aṣ-Ṣaḥīḥ mimmā laysa fī aṣ-Ṣaḥīḥayn 3/51 — Maktabah Ibn Taymiyyah al-Qāhirah",
    imageUrl: "/New_Project_3_A7EB186.png",
    dateAdded: "2026-09-23"
  },
  {
    id: "25",
    translator: "Abu_Mundhir",
    category: "Ḥadīth",
    type: "video",
    title: "Yaḥyā ibn Maʿīn: The Crucible of Jarḥ wa-Taʿdīl",
    speaker: "Abū Mundhir ar-Ruwāndī",
    summary: "A profound discourse on Imām Yaḥyā ibn Maʿīn (d. 233H) — the formidable imām of Jarḥ wa-Taʿdīl (narrator criticism and validation) whose unmatched rigor and insight safeguarded the prophetic Sunnah.",
    htmlText: `<div class="space-y-6 leading-relaxed">
  <div class="p-4 sm:p-5 rounded-xl border-l-4 border-amber-600 bg-amber-500/10 dark:bg-amber-400/10 border-t border-r border-b border-amber-600/20">
    <div class="text-right font-arabic text-xl sm:text-2xl leading-loose mb-3 opacity-95" dir="rtl">
      «إِنَّا لَنَطْعَنُ عَلَى أَقْوَامٍ، لَعَلَّهُمْ قَدْ حَطُّوا رِحَالَهُمْ فِي الجَنَّةِ، مِنْ أَكْثَرَ مِنْ مِائَتَيْ سَنَةٍ!»
    </div>
    <p class="font-serif text-base sm:text-lg italic leading-relaxed opacity-95">
      “Indeed, we criticize people who perhaps have already settled their mounts in Paradise more than two hundred years ago!”
    </p>
    <div class="mt-3 pt-2.5 border-t border-amber-600/20 flex items-center justify-between flex-wrap gap-2 text-xs sm:text-sm font-sans opacity-80">
      <span class="font-semibold">— Imām Yaḥyā ibn Maʿīn (رحمه الله)</span>
      <span class="italic">Siyar Aʿlām an-Nubalāʾ (13/268) • Tahdhīb al-Kamāl (31/553)</span>
    </div>
  </div>

  <p class="leading-relaxed">
    A scholarly discourse delivered by <strong>Abū Mundhir ar-Ruwāndī</strong> on the life, rigorous methodology, and contributions of <strong>Imām Yaḥyā ibn Maʿīn</strong> (158H – 233H) — the formidable imām of <em>Jarḥ wa-Taʿdīl</em> (narrator criticism and validation) and lifelong companion of Imām Aḥmad ibn Ḥanbal.
  </p>

  <p class="leading-relaxed">
    The lecture elucidates how the early scholars of ḥadīth established an uncompromising crucible of scrutiny to examine chains of narration (<em>asānīd</em>), inspect narrator precision (<em>ḍabṭ</em>), uncover hidden defects (<em>ʿilal</em>), and preserve the authentic Sunnah of the Prophet ﷺ.
  </p>

  <div class="mt-8 pt-6 border-t border-black/10 dark:border-white/10">
    <div class="p-4 sm:p-5 rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.03] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div class="flex items-center gap-3.5">
        <div class="w-10 h-10 rounded-lg bg-red-600/10 dark:bg-red-500/15 flex items-center justify-center shrink-0 text-red-600 dark:text-red-400">
          <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
        </div>
        <div>
          <h4 class="text-sm font-semibold tracking-tight">Original Video Discourse</h4>
          <p class="text-xs opacity-75 mt-0.5">Presented by Abū Mundhir ar-Ruwāndī (@AbooMundhir)</p>
        </div>
      </div>

      <div class="flex items-center gap-2.5 self-stretch sm:self-auto justify-end">
        <a 
          href="https://www.youtube.com/watch?v=w8nkW9KHQqc" 
          target="_blank" 
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-amber-600 hover:bg-amber-700 text-white shadow-xs transition-colors"
        >
          <span>Watch on YouTube</span>
          <span>&rarr;</span>
        </a>
        <a 
          href="https://www.youtube.com/@AbooMundhir" 
          target="_blank" 
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border border-black/15 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5 opacity-85 hover:opacity-100 transition-colors"
        >
          Channel Profile
        </a>
      </div>
    </div>
  </div>
</div>`,
    youtubeId: "w8nkW9KHQqc",
    imageUrl: "https://i.ytimg.com/vi/w8nkW9KHQqc/maxresdefault.jpg",
    citation: "YouTube — Abū Mundhir ar-Ruwāndī (@AbooMundhir)",
    dateAdded: "2026-09-25"
  },
  {
    id: "26",
    translator: "Abu_Talhah",
    category: "ʿAqīdah",
    type: "quote",
    title: "ʾUbayy ibn Kaʿb on Jealous Animosity & Adhering to the Rope of Allāh",
    author: "Imām Muḥammad ibn Ismāʿīl al-Bukẖārī (d. 256H)",
    summary: "ʾUbayy ibn Kaʿb explains that mutual enmity arose from jealousy over worldly power and prestige, whereas true believers held fast to what the Messengers brought, avoided division, and adhered to the Rope of Allāh.",
    arabicText: `وَقَالَ أُبَيُّ بْنُ كَعْبٍ: {بَغْيًا بَيْنَهُمْ} [البقرة: ٢١٣] «بَغْيًا عَلَى الدُّنْيَا، وَطَلَبِ مُلْكِهَا وَزُخْرُفِهَا وَزِينَتِهَا، أَيُّهُمْ يَكُونُ لَهُ الْمُلْكُ وَالْمَهَابَةُ فِي النَّاسِ فَبَغَى بَعْضُهُمْ عَلَى بَعْضٍ، وَضَرَبَ بَعْضُهُمْ رِقَابَ بَعْضٍ» {فَهَدَى اللَّهُ الَّذِينَ آمَنُوا لِمَا اخْتَلفُوا فِيهِ مِنَ الْحَقِّ بِإِذْنِهِ} [البقرة: ٢١٣] ، «قَامُوا عَلَى مَا جَاءَتْ بِهِ الرُّسُلُ، وَأَقَامُوا الصَّلَاةَ، وَآتَوُا الزَّكَاةَ وَاعْتَزَلُوا الِاخْتِلَافَ، وَكَانُوا شُهَدَاءَ عَلَى النَّاسِ يَوْمَ الْقِيَامَةِ، إِنَّ رُسُلَهُمْ قَدْ بَلَّغَتْهُمْ وَأَنَّهُمْ كَذَّبُوا رُسُلَهُمْ» حَدَّثَنَا إِسْمَاعِيلُ بْنُ أَبِي أُوَيْسٍ، حَدَّثَنِي كَثِيرُ بْنُ عَبْدِ اللَّهِ بْنِ عَمْرِو بْنِ عَوْفٍ، عَنْ أَبِيهِ، عَنْ جَدِّهِ، أَنَّ رَسُولَ اللَّهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ قَالَ: " اعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا، {وَلَا تَكُونُوا كَالَّذِينَ تَفَرَّقُوا وَاخْتَلَفُوا مِنْ بَعْدِ مَا جَاءَهُمُ الْبَيِّنَاتُ} [آل عمران: ١٠٥] "`,
    englishText: `And ʾUbayy ibn Kaʿb said: "...jealous animosity, one to another." [al-Baqarah:213] — ‘Jealous animosity over the Dunyā, and seeking its dominion, and its adornable materials, and its [outward] beautification, [each disputing] which of them will the dominion and the reverence be for him among the people, so some of them jealously coveted upon others, and some of them struck the neck of others, "Then Allāh by His Leave guided those who believed to the truth of that wherein they differed." [al-Baqarah:213]. They stood [firm] upon what the Messengers came with, and they established the prayer, and they gave the zakāh, and they detached from differing, and they will be witnesses over mankind [on] the Day of Resurrection [that]: ‘Indeed their Messengers had conveyed [to] them, and that they (i.e. the disbelieving nations) disbelieved [in and rejected] their Messengers.’ ’

ʾIsmāʾīl ibn Abī ʾUways narrated to us, [he said]: Kaṯhīr ibn ʿAbd Allāh ibn ʿAmr ibn ʿAwf narrated to us, from his father, from his grandfather, that the Messenger of Allāh ﷺ said: "Hold fast, all of you together, to the Rope of Allāh (i.e. this Qurʾān), and be not divided among yourselves "And be not as those who divided and differed among themselves after the clear proofs had come to them." [ʾĀl ʿImrān:105]."`,
    htmlText: `<div class="space-y-6 leading-relaxed">
  <div class="space-y-3">
    <p class="leading-relaxed">
      And <strong class="font-semibold text-primary">ʾUbayy ibn Kaʿb</strong> said:
    </p>

    <blockquote class="border-l-[3.5px] border-[#0B465E] pl-4 sm:pl-5 py-3 my-3 bg-slate-500/[0.04] rounded-r-lg space-y-3 font-serif leading-relaxed">
      <p>
        “...jealous animosity, one to another.” <span class="text-xs sm:text-sm opacity-70 font-sans">[al-Baqarah:213]</span> — ‘Jealous animosity over the Dunyā, and seeking its dominion, and its adornable materials, and its [outward] beautification, [each disputing] which of them will the dominion and the reverence be for him among the people, so some of them jealously coveted upon others, and some of them struck the neck of others, <strong class="font-semibold text-[#0B465E]">“Then Allāh by His Leave guided those who believed to the truth of that wherein they differed.”</strong> <span class="text-xs sm:text-sm opacity-70 font-sans">[al-Baqarah:213]</span>.
      </p>
      <p>
        They stood [firm] upon what the Messengers came with, and they established the prayer, and they gave the zakāh, and they detached from differing, and they will be witnesses over mankind [on] the Day of Resurrection [that]: ‘Indeed their Messengers had conveyed [to] them, and that they (i.e. the disbelieving nations) disbelieved [in and rejected] their Messengers.’ ’
      </p>
    </blockquote>
  </div>

  <hr class="border-current opacity-15 my-6" />

  <div class="space-y-3">
    <p class="leading-relaxed">
      <em class="italic opacity-80 font-medium">ʾIsmāʿīl ibn Abī ʾUways</em> narrated to us, [he said]: <em class="italic opacity-80 font-medium">Kaṯhīr ibn ʿAbd Allāh ibn ʿAmr ibn ʿAwf</em> narrated to us, from <em class="italic opacity-80 font-medium">his father</em>, from <em class="italic opacity-80 font-medium">his grandfather</em>, that the Messenger of Allāh ﷺ said:
    </p>

    <blockquote class="border-l-[3.5px] border-[#0B465E] pl-4 sm:pl-5 py-3 my-3 bg-slate-500/[0.04] rounded-r-lg space-y-2.5 font-serif leading-relaxed">
      <p class="font-semibold">
        “Hold fast, all of you together, to the Rope of Allāh (i.e. this Qurʾān), and be not divided among yourselves. <span class="text-[#0B465E]">“And be not as those who divided and differed among themselves after the clear proofs had come to them.”</span> <span class="text-xs sm:text-sm opacity-70 font-sans font-normal">[ʾĀl ʿImrān:105]</span>.”
      </p>
    </blockquote>
  </div>
</div>`,
    citation: "Kẖalq ʾAfʿāl al-ʿIbād — pp. 77–78",
    imageUrl: "/kitab_and_sunnah.png",
    dateAdded: "2026-09-25"
  },
  {
    id: "27",
    translator: "Abu_Mundhir",
    category: "Heart-Softeners",
    type: "quote",
    title: "ʿĪsā ibn Maryam on Guarding the Tongue from Ill Speech",
    author: "Imām Mālik ibn Anas (d. 179H)",
    summary: "ʿĪsā ibn Maryam encountered a pig on his path and addressed it peacefully; when questioned why he spoke this way to a pig, he explained his fear of accustoming his tongue to foul speech.",
    arabicText: `وَحَدَّثَنِي عَنْ مَالِكٍ، عَنْ يَحْيَى بْنِ سَعِيدٍ: أَنَّ عِيسَى ابْنَ مَرْيَمَ عَلَيْهِ السَّلَامُ لَقِيَ خِنْزِيرًا فِي طَرِيقٍ فَقَالَ لَهُ: «انْفُذْ بِسَلَامٍ»، فَقِيلَ لَهُ: أَتَقُولُ هَذَا لِخِنْزِيرٍ؟! فَقَالَ: «إِنِّي أَخَافُ أَنْ أُعَوِّدَ لِسَانِي النُّطْقَ بِالسُّوءِ».`,
    englishText: `And Mālik narrated to me, from Yaḥyā ibn Saʿīd that ʿĪsā ibn Maryam came across a pig on his path so he said to it,

"Go on in peace."
and it was said to him, 

"You said this to a pig?" 
ʿĪsā عليه السلام replied, 

"Indeed I fear that I accustom my tongue to ill speech."`,
    htmlText: `<div class="space-y-6 leading-relaxed">
  <div class="space-y-3">
    <p class="leading-relaxed">
      And Mālik narrated to me, from Yaḥyā ibn Saʿīd that ʿĪsā ibn Maryam came across a pig on his path so he said to it,
    </p>

    <blockquote class="border-l-[3.5px] border-[#0B465E] pl-4 sm:pl-5 py-3 my-3 bg-slate-500/[0.04] rounded-r-lg space-y-3 font-serif leading-relaxed">
      <p>
        “Go on in peace.”
      </p>
      <p>
        and it was said to him,
      </p>
      <p>
        “You said this to a pig?”
      </p>
      <p>
        ʿĪsā عليه السلام replied,
      </p>
      <p>
        <strong class="font-semibold text-[#0B465E]">“Indeed I fear that I accustom my tongue to ill speech.”</strong>
      </p>
    </blockquote>
  </div>
</div>`,
    citation: "Al-Muwaṭṭa 2/985",
    imageUrl: "/pig_athar.png",
    dateAdded: "2026-09-25"
  },
  {
    id: "28",
    translator: "Abu_Talhah",
    translatorName: "Abū ʿUbaydillāh al-Qarārī",
    category: "al-Sunnah",
    type: "quote",
    title: "Wiping Over the Two Khuffs",
    author: "Imām Muḥammad ibn Ismāʿīl al-Bukhārī (d. 256H)",
    summary: "Saʿd b. ʾAbī Waqqāṣ narrates from the Prophet ﷺ that he wiped over the two khuffs; ʿUmar affirmed Saʿd’s transmission with decisive certainty.",
    arabicText: `حَدَثَنَا أَصبَغ بن الفَرَجِ المِصرِي، عَنِ ابنِ وَهبٍ قَالَ: حَدَثَنِي عَمرٌو: حَدَثَنِي أَبو النَضرِ، عَن أَبِي سَلَمَةَ بنِ عَبدِ الرَحمَنِ، عَن عَبدِ اللهِ بنِ عمَرَ، عَن سَعدِ بنِ أَبِي وَقَاصٍ، عَنِ النَبِيِ ﷺ: 

«أَنَه مَسَحَ عَلَى الخفَينِ» وَأَنَ عَبدَ اللهِ بنَ عمَرَ سَأَلَ عمَرَ، عَن ذَلِكَ فَقَالَ: نَعَم، إِذَا حَدَثَكَ شَيئًا سَعدٌ عَنِ النَبِيِ ﷺ فَلَا تَسأَل عَنه غَيرَه.`,
    englishText: `“ʾAṣbagh b. al-Faraj al-Miṣrī narrated to us, from Ibn Wahb, who said: ʿAmrū narrated to me; ʾAbū al-Naḍr narrated to me, from ʾAbū Salamah b. ʿAbd al-Raḥmān, from ʿAbduḷḷāh b. ʿUmar, from Saʿd b. ʾAbī Waqqāṣ, from the Prophet Ṣaḷḷaḷḷāhu—ʿalayhi—wa’l-saḷḷam,

that he wiped over the two khuffs. And ʿAbduḷḷāh b. ʿUmar asked ʿUmar about that, so he said: ‘Yes. If Saʿd narrates something to you from the Prophet Ṣaḷḷaḷḷāhu—ʿalayhi—wa’l-saḷḷam, then do not ask anyone else about it.’”`,
    htmlText: `<div class="space-y-6 leading-relaxed">
  <div class="space-y-3">
    <p class="leading-relaxed">
      <em class="italic opacity-80 font-medium">ʾAṣbagh b. al-Faraj al-Miṣrī</em> narrated to us, from <em class="italic opacity-80 font-medium">Ibn Wahb</em>, who said: <em class="italic opacity-80 font-medium">ʿAmrū</em> narrated to me; <em class="italic opacity-80 font-medium">ʾAbū al-Naḍr</em> narrated to me, from <em class="italic opacity-80 font-medium">ʾAbū Salamah b. ʿAbd al-Raḥmān</em>, from <em class="italic opacity-80 font-medium">ʿAbduḷḷāh b. ʿUmar</em>, from <strong class="font-semibold text-primary">Saʿd b. ʾAbī Waqqāṣ</strong>, from the Prophet Ṣaḷḷaḷḷāhu—ʿalayhi—wa’l-saḷḷam:
    </p>

    <blockquote class="border-l-[3.5px] border-[#0B465E] dark:border-[#38bdf8] pl-4 sm:pl-5 py-3 my-3 bg-slate-500/[0.04] rounded-r-lg space-y-3 font-serif leading-relaxed">
      <p>
        <strong class="font-semibold text-[#0B465E] dark:text-[#38bdf8]">“That he wiped over the two khuffs.”</strong>
      </p>
      <p>
        And ʿAbduḷḷāh b. ʿUmar asked ʿUmar about that, so he said:
      </p>
      <p>
        <strong class="font-semibold text-[#0B465E] dark:text-[#38bdf8]">‘Yes. If Saʿd narrates something to you from the Prophet Ṣaḷḷaḷḷāhu—ʿalayhi—wa’l-saḷḷam, then do not ask anyone else about it.’</strong>
      </p>
    </blockquote>
  </div>
</div>`,
    citation: "al-Jāmiʿ al-Musnad al-Ṣaḥīḥ — Muḥammad b. ʾIsmāʿīl al-Bukhārī — n° 202",
    imageUrl: "/bukhari.png",
    dateAdded: "2026-09-26"
  },
  {
    id: "29",
    translator: "Abu_Talhah",
    translatorName: "Abū ʿUbaydillāh al-Qarārī",
    category: "al-Sunnah",
    type: "quote",
    title: "The Sunnah of al-Iqʿāʾ Upon the Two Feet",
    author: "Imām ʿAbd al-Razzāq al-Ṣanʿānī (d. 211H)",
    summary: "A narration wherein Ṭāwūs questions Ibn ʿAbbās regarding sitting upon the heels (al-iqʿāʾ) between the two prostrations, clarifying its status in the prophetic Sunnah.",
    arabicText: `عَنِ ابنِ جرَيجٍ قَالَ: أَخبَرَنِي أَبو الزبَيرِ، أَنَه سَمِعَ طَاوسًا يَقول:

قلنَا لِابنِ عَبَاسٍ فِي الإِقعَاءِ عَلَى القَدَمَينِ؟ قَالَ: «هِيَ السنَة»، فَقلنَا: إِنَا لَنَرَاه جَفَاءً بِالرَجلِ، قَالَ ابن عَبَاسٍ: «بَل هِيَ سنَة نَبِيِكَ ﷺ»`,
    englishText: `From Ibn Jurayj, who said: ʾAbū al-Zubayr informed me that he heard Ṭāwūs saying:

‘We said to Ibn ʿAbbās regarding al-iqʿāʾ upon the two feet: He said, “It is the Sunnah.” So we said, “Indeed, we regard it as harshness upon the foot.” Ibn ʿAbbās said: “Rather, it is the Sunnah of your Prophet Ṣaḷḷaḷḷāhu—ʿalayhi—wa’l-saḷḷam.”’`,
    htmlText: `<div class="space-y-6 leading-relaxed">
  <div class="space-y-3">
    <p class="leading-relaxed">
      From <em class="italic opacity-80 font-medium">Ibn Jurayj</em>, who said: <em class="italic opacity-80 font-medium">ʾAbū al-Zubayr</em> informed me that he heard <em class="italic opacity-80 font-medium">Ṭāwūs</em> saying:
    </p>

    <blockquote class="border-l-[3.5px] border-[#0B465E] dark:border-[#38bdf8] pl-4 sm:pl-5 py-3 my-3 bg-slate-500/[0.04] rounded-r-lg space-y-3 font-serif leading-relaxed">
      <p>
        ‘We said to <strong class="font-semibold text-primary">Ibn ʿAbbās</strong> regarding <em>al-iqʿāʾ</em> upon the two feet:
      </p>
      <p>
        He said: <strong class="font-semibold text-[#0B465E] dark:text-[#38bdf8]">“It is the Sunnah.”</strong>
      </p>
      <p>
        So we said: “Indeed, we regard it as harshness upon the foot.”
      </p>
      <p>
        Ibn ʿAbbās said: <strong class="font-semibold text-[#0B465E] dark:text-[#38bdf8]">“Rather, it is the Sunnah of your Prophet Ṣaḷḷaḷḷāhu—ʿalayhi—wa’l-saḷḷam.”</strong>’
      </p>
    </blockquote>
  </div>
</div>`,
    citation: "al-Muṣannaf — ʿAbd al-Razzāq al-Ṣanʿānī — n° 3035",
    imageUrl: "/abd_al_razzaq.png",
    secondaryImages: [
      {
        url: "/iqa_demonstration.jpg",
        caption: "Visual Clarification: Demonstration of Al-Iftirāsh (top), Al-Iqʿāʾ upon the two heels between the two prostrations (middle - the Sunnah mentioned by Ibn ʿAbbās), and At-Tawarruk (bottom)."
      }
    ],
    dateAdded: "2026-09-26"
  },
  {
    id: "30",
    translator: "Abu_Talhah",
    translatorName: "Abū ʿUbaydillāh al-Qarārī",
    category: "al-Sunnah",
    type: "quote",
    title: "Prioritizing the Sunnah Over the Statement of Ibn ʿAbbās",
    author: "Imām Muslim ibn al-Ḥajjāj an-Naysābūrī (d. 261H)",
    summary: "A narration wherein ʿAbdullāh ibn ʿUmar establishes the obligation of placing the Sunnah and practice of the Messenger of Allāh ﷺ ahead of the personal fatwā of any companion.",
    arabicText: `حَدَّثَنَا يَحْيَى بْنُ يَحْيَى. أَخْبَرَنَا عَبْثَرٌ عَنْ إِسْمَاعِيل بْنِ أَبِي خَالِدٍ، عَنْ وَبَرَةَ. قَالَ:

كُنْتُ جَالِسًا عِنْدَ ابْنِ عُمَرَ. فَجَاءَهُ رَجُلٌ فَقَالَ: أَيَصْلُحُ لِي أَنْ أَطُوفَ بِالْبَيْتِ قَبْلَ أَنْ آتِيَ الْمَوْقِفَ. فَقَالَ: نَعَمْ. فَقَالَ: فَإِنَّ ابْنَ عَبَّاسٍ يَقُولُ: لَا تَطُفْ بِالْبَيْتِ حَتَّى تَأْتِيَ الْمَوْقِفَ. فَقَالَ ابْنُ عُمَرَ: فَقَدْ حَجَّ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فَطَافَ بِالْبَيْتِ قَبْلَ أَنْ يَأْتِيَ الْمَوْقِفَ. فَبِقَوْلِ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ أَحَقُّ أَنْ تَأْخُذَ، أَوْ بِقَوْلِ ابْنِ عَبَّاسٍ، إِنْ كُنْتَ صَادِقًا؟`,
    englishText: `Yaḥyā b. Yaḥyā narrated to us; ʿAbthar informed us, from ʾIsmāʿīl b. ʾAbī Khālid, from Wabarah, who said:

“I was sitting with Ibn ʿUmar when a man came to him, so he said: ‘Is it permissible for me to perform ṭawāf around the House before I come to the Mawqif?’ so he said: ‘Yes.’ so he said: ‘But Ibn ʿAbbās says: “Do not perform ṭawāf around the House until you come to the Mawqif.”’ Ibn ʿUmar said: ‘The Messenger of Allāh Ṣaḷḷaḷḷāhu—ʿalayhi—wa’l-saḷḷam performed ḥajj and performed ṭawāf around the House before he came to the Mawqif. So, whose statement are you more entitled to follow—the statement of the Messenger of Allāh Ṣaḷḷaḷḷāhu—ʿalayhi—wa’l-saḷḷam, or the statement of Ibn ʿAbbās, if you are truthful?’”`,
    htmlText: `<div class="space-y-6 leading-relaxed">
  <div class="space-y-3">
    <p class="leading-relaxed">
      <em class="italic opacity-80 font-medium">Yaḥyā b. Yaḥyā</em> narrated to us; <em class="italic opacity-80 font-medium">ʿAbthar</em> informed us, from <em class="italic opacity-80 font-medium">ʾIsmāʿīl b. ʾAbī Khālid</em>, from <strong class="font-semibold text-primary">Wabarah</strong>, who said:
    </p>

    <blockquote class="border-l-[3.5px] border-[#0B465E] dark:border-[#38bdf8] pl-4 sm:pl-5 py-3 my-3 bg-slate-500/[0.04] rounded-r-lg space-y-3 font-serif leading-relaxed">
      <p>
        “I was sitting with <strong class="font-semibold text-primary">Ibn ʿUmar</strong> when a man came to him, so he said:
      </p>
      <p class="pl-3 border-l-2 border-slate-300 dark:border-slate-700 italic">
        ‘Is it permissible for me to perform ṭawāf around the House before I come to the Mawqif?’
      </p>
      <p>
        So he said: <strong class="font-semibold text-[#0B465E] dark:text-[#38bdf8]">‘Yes.’</strong>
      </p>
      <p>
        So he said: ‘But Ibn ʿAbbās says: <em class="italic opacity-90">“Do not perform ṭawāf around the House until you come to the Mawqif.”</em>’
      </p>
      <p>
        Ibn ʿUmar said:
      </p>
      <p class="font-semibold text-[#0B465E] dark:text-[#38bdf8]">
        ‘The Messenger of Allāh Ṣaḷḷaḷḷāhu—ʿalayhi—wa’l-saḷḷam performed ḥajj and performed ṭawāf around the House before he came to the Mawqif. So, whose statement are you more entitled to follow—the statement of the Messenger of Allāh Ṣaḷḷaḷḷāhu—ʿalayhi—wa’l-saḷḷam, or the statement of Ibn ʿAbbās, if you are truthful?’
      </p>
    </blockquote>
  </div>
</div>`,
    citation: "al-Musnad al-Ṣaḥīḥ al-Mukhtaṣar — Imām Muslim — n° 1233",
    imageUrl: "/muslim_1233.png",
    dateAdded: "2026-09-26"
  },
  {
    id: "31",
    translator: "Abu_Talhah",
    translatorName: "Abū ʿUbaydillāh al-Qarārī",
    category: "Heart-Softeners",
    type: "quote",
    title: "Silence is Wisdom, and Few Are Those Who Practice It",
    speaker: "ʾAnas b. Mālik (d. 93H)",
    author: "Wakīʿ b. al-Jarrāḥ (d. 197H)",
    summary: "A timeless athar related by ʾAnas ibn Mālik on the virtue and rarity of practicing restraint of speech and embracing silence.",
    arabicText: `حَدَّثَنَا عُمَرُ بْنُ سَعْدٍ، قَالَ: سَمِعْتُ أَنَسَ بْنَ مَالِكٍ يَقُولُ:

«الصَّمْتُ حُكْمٌ، وَقَلِيلٌ فَاعِلُهُ»`,
    englishText: `Wakīʿ b. al-Jarrāḥ narrated:

ʿUmar b. Saʿd [ b. ʿUbayd ] narrated to us; he said: I heard ʾAnas b. Mālik say:

“Silence is wisdom, and few are those who practice it.”`,
    htmlText: `<div class="space-y-6 leading-relaxed">
  <div class="space-y-3">
    <p class="leading-relaxed">
      <strong class="font-semibold text-primary">Wakīʿ b. al-Jarrāḥ</strong> narrated:
    </p>

    <p class="leading-relaxed opacity-90">
      <em class="italic opacity-80 font-medium">ʿUmar b. Saʿd [ b. ʿUbayd ]</em> narrated to us; he said: I heard <strong class="font-semibold text-primary">ʾAnas b. Mālik</strong> say:
    </p>

    <blockquote class="border-l-[3.5px] border-[#0B465E] pl-4 sm:pl-5 py-3 my-3 bg-slate-500/[0.04] rounded-r-lg space-y-3 font-serif leading-relaxed">
      <p class="text-lg sm:text-xl font-bold text-[#0B465E]">
        “Silence is wisdom, and few are those who practice it.”
      </p>
    </blockquote>
  </div>
</div>`,
    citation: "al-Zuhd — Wakīʿ b. al-Jarrāḥ — pg. 308, n° 81",
    imageUrl: "/wakee_81.png",
    dateAdded: "2026-09-27"
  },
  {
    id: "32",
    translator: "Abu_Talhah",
    translatorName: "Abū ʿUbaydillāh al-Qarārī",
    category: "Heart-Softeners",
    type: "quote",
    title: "Accustom Yourselves to Good, for Good Comes Through Habit",
    speaker: "ʿAbdullāh b. Masʿūd (d. 32H)",
    author: "Wakīʿ b. al-Jarrāḥ (d. 197H)",
    summary: "An athar from ʿAbdullāh ibn Masʿūd emphasizing the importance of habituating the soul to righteous deeds and steadfastness in goodness.",
    arabicText: `حَدَّثَنَا الأَعْمَشُ، عَنْ عِمَارَةَ بْنِ عُمَيْرٍ، عَنْ أَبِي الأَحْوَصِ قَالَ: قَالَ عَبْدُ اللَّهِ:

«تَعَوَّدُوا الخَيْرَ، فَإِنَّ الخَيْرَ بِالعَادَةِ»`,
    englishText: `Wakīʿ b. al-Jarrāḥ narrated:

al-ʾAʿmash narrated to us, from ʿUmārah b. ʿUmayr, from ʾAbū al-ʾAḥwaṣ, who said: ʿAbdullāh said:

“Accustom yourselves to good, for good comes through habit.”`,
    htmlText: `<div class="space-y-6 leading-relaxed">
  <div class="space-y-3">
    <p class="leading-relaxed">
      <strong class="font-semibold text-primary">Wakīʿ b. al-Jarrāḥ</strong> narrated:
    </p>

    <p class="leading-relaxed opacity-90">
      <em class="italic opacity-80 font-medium">al-ʾAʿmash</em> narrated to us, from <em class="italic opacity-80 font-medium">ʿUmārah b. ʿUmayr</em>, from <em class="italic opacity-80 font-medium">ʾAbū al-ʾAḥwaṣ</em>, who said: <strong class="font-semibold text-primary">ʿAbdullāh [b. Masʿūd]</strong> said:
    </p>

    <blockquote class="border-l-[3.5px] border-[#0B465E] pl-4 sm:pl-5 py-3 my-3 bg-slate-500/[0.04] rounded-r-lg space-y-3 font-serif leading-relaxed">
      <p class="text-lg sm:text-xl font-bold text-[#0B465E]">
        “Accustom yourselves to good, for good comes through habit.”
      </p>
    </blockquote>
  </div>
</div>`,
    citation: "al-Zuhd — Wakīʿ b. al-Jarrāḥ — pp. 264-265, n° 34",
    imageUrl: "/wakee_34.png",
    dateAdded: "2026-09-27"
  },
  {
    id: "33",
    translator: "Abu_Talhah",
    translatorName: "Abū ʿUbaydillāh al-Qarārī",
    category: "Heart-Softeners",
    type: "quote",
    title: "Nothing is More Deserving of Prolonged Imprisonment Than the Tongue",
    speaker: "ʿAbdullāh b. Masʿūd (d. 32H)",
    author: "Wakīʿ b. al-Jarrāḥ (d. 197H)",
    summary: "A solemn oath from ʿAbdullāh ibn Masʿūd warning against the dangers of unchecked speech and urging vigilance over one’s tongue.",
    arabicText: `حَدَّثَنَا الأَعْمَشُ، وَسُفْيَانُ، عَنْ يَزِيدَ بْنِ حَيَّانَ التَّيْمِيِّ، عَنْ عَنْبَسِ بْنِ عُقْبَةَ قَالَ: قَالَ عَبْدُ اللَّهِ:

«وَاللَّهِ الَّذِي لَا إِلَهَ غَيْرُهُ، مَا عَلَى ظَهْرِ الأَرْضِ شَيْءٌ أَحَقُّ بِطُولِ السِّجْنِ مِنَ اللِّسَانِ»`,
    englishText: `Wakīʿ b. al-Jarrāḥ narrated:

al-ʾAʿmash and Sufyān narrated to us, from Yazīd b. Ḥayyān al-Taymī, from ʿAnbas b. ʿUqbah, who said: ʿAbduḷḷāh [ b. Masʿūd ] said:

“By Aḷḷāh, besides Whom there is no deity, nothing upon the face of the earth is more deserving of prolonged imprisonment than the tongue.”`,
    htmlText: `<div class="space-y-6 leading-relaxed">
  <div class="space-y-3">
    <p class="leading-relaxed">
      <strong class="font-semibold text-primary">Wakīʿ b. al-Jarrāḥ</strong> narrated:
    </p>

    <p class="leading-relaxed opacity-90">
      <em class="italic opacity-80 font-medium">al-ʾAʿmash</em> and <em class="italic opacity-80 font-medium">Sufyān</em> narrated to us, from <em class="italic opacity-80 font-medium">Yazīd b. Ḥayyān al-Taymī</em>, from <em class="italic opacity-80 font-medium">ʿAnbas b. ʿUqbah</em>, who said: <strong class="font-semibold text-primary">ʿAbduḷḷāh [ b. Masʿūd ]</strong> said:
    </p>

    <blockquote class="border-l-[3.5px] border-[#0B465E] pl-4 sm:pl-5 py-3 my-3 bg-slate-500/[0.04] rounded-r-lg space-y-3 font-serif leading-relaxed">
      <p class="text-lg sm:text-xl font-bold text-[#0B465E]">
        “By Aḷḷāh, besides Whom there is no deity, nothing upon the face of the earth is more deserving of prolonged imprisonment than the tongue.”
      </p>
    </blockquote>
  </div>
</div>`,
    citation: "al-Zuhd — Wakīʿ b. al-Jarrāḥ — pp. 548-550, n° 285",
    imageUrl: "/wakee_285.png",
    dateAdded: "2026-09-27"
  },
  {
    id: "34",
    translator: "Abu_Talhah",
    translatorName: "Abū ʿUbaydillāh al-Qarārī",
    category: "Heart-Softeners",
    type: "quote",
    title: "Worry and Sorrow Increase Good Deeds",
    speaker: "Manṣūr b. Zādhān (d. 131H)",
    author: "Imām ʾAḥmad ibn Ḥanbal (d. 241H)",
    summary: "A reflection from the ascetic Manṣūr ibn Zādhān on how grief over one's shortcomings purifies the heart and increases good deeds.",
    arabicText: `حَدَّثَنَا عَبْدُ اللَّهِ، حَدَّثَنَا سُرَيْجٌ، حَدَّثَنَا خَلَفٌ، عَنْ مَنْصُورِ بْنِ زَاذَانَ قَالَ:

«الهَمُّ وَالحَزَنُ يَزِيدُ فِي الحَسَنَاتِ، وَالإِثْمُ وَالبَطَرُ يَزِيدُ فِي السَّيِّئَاتِ»`,
    englishText: `ʾAḥmad narrated:

ʿAbduḷḷāh narrated to us; Surayj narrated to us; Khalaf narrated to us, from Manṣūr b. Zādhān, who said:

“Worry and sorrow increase good deeds, while sin and exultation increase evil deeds.”`,
    htmlText: `<div class="space-y-6 leading-relaxed">
  <div class="space-y-3">
    <p class="leading-relaxed">
      <strong class="font-semibold text-primary">ʾAḥmad</strong> narrated:
    </p>

    <p class="leading-relaxed opacity-90">
      <em class="italic opacity-80 font-medium">ʿAbduḷḷāh</em> narrated to us; <em class="italic opacity-80 font-medium">Surayj</em> narrated to us; <em class="italic opacity-80 font-medium">Khalaf</em> narrated to us, from <strong class="font-semibold text-primary">Manṣūr b. Zādhān</strong>, who said:
    </p>

    <blockquote class="border-l-[3.5px] border-[#0B465E] pl-4 sm:pl-5 py-3 my-3 bg-slate-500/[0.04] rounded-r-lg space-y-3 font-serif leading-relaxed">
      <p class="text-lg sm:text-xl font-bold text-[#0B465E]">
        “Worry and sorrow increase good deeds, while sin and exultation increase evil deeds.”
      </p>
    </blockquote>
  </div>
</div>`,
    citation: "al-Zuhd — ʾAḥmad — pg. 187, n° 932",
    imageUrl: "/ahmad_zuhd_932.png",
    dateAdded: "2026-09-28"
  },
  {
    id: "35",
    translator: "Abu_Talhah",
    translatorName: "Abū ʿUbaydillāh al-Qarārī",
    category: "al-Sunnah",
    type: "quote",
    title: "The Messenger of Allāh ﷺ is the Greatest Standard",
    speaker: "Sufyān b. ʿUyaynah (d. 198H)",
    author: "al-Khaṭīb al-Baghdādī (d. 463H)",
    summary: "A foundational statement from Sufyān ibn ʿUyaynah establishing the character, guidance, and Sunnah of the Prophet ﷺ as the ultimate criterion for all matters.",
    arabicText: `أَخْبَرَنِي أَبُو مُحَمَّدٍ عَبْدُ اللَّهِ بْنُ يَحْيَى بْنِ عَبْدِ الجَبَّارِ السُّكَّرِيُّ، أنا أَبُو بَكْرٍ مُحَمَّدُ بْنُ عَبْدِ اللَّهِ بْنِ إِبْرَاهِيمَ الشَّافِعِيُّ، نا جَعْفَرُ بْنُ مُحَمَّدِ بْنِ الأَزْهَرِ، نا المُفَضَّلُ بْنُ غَسَّانَ الغَلَابِيُّ، حَدَّثَنِي أَبِي أَوِ ابْنُ مِسْعَرٍ، عَنْ سُفْيَانَ بْنِ عُيَيْنَةَ، أَنَّهُ كَانَ يَقُولُ:

«إِنَّ رَسُولَ اللَّهِ ﷺ هُوَ المِيزَانُ الأَكْبَرُ، فَعَلَيْهِ تُعْرَضُ الأَشْيَاءُ، عَلَى خُلُقِهِ وَسِيرَتِهِ وَهَدْيِهِ، فَمَا وَافَقَهَا فَهُوَ الحَقُّ، وَمَا خَالَفَهَا فَهُوَ البَاطِلُ»`,
    englishText: `al-Khaṭīb al-Baghdādī narrated:

ʾAbū Muḥaṃṃad ʿAbduḷḷāh b. Yaḥyā b. ʿAbd al-Jabbār al-Sukkarī informed me; he said: ʾAbū Bakr Muḥaṃṃad b. ʿAbduḷḷāh b. ʾIbrāhīm al-Shāfiʿī narrated to us; he said: Jaʿfar b. Muḥaṃṃad b. al-ʾAzhar narrated to us; he said: al-Mufaḍḍal b. Ghassān al-Ghaḷḷābī narrated to me; he said: My father [ Ghassān b. al-Mufaḍḍal al-Ghaḷḷābī ] —or Ibn Misʿar—narrated to me, from Sufyān b. ʿUyaynah, that he used to say:

“Indeed, the Messenger of Aḷḷāh Ṣaḷḷaḷḷāhu—ʿalayhi—wa'l-saḷḷam is the greatest standard by which things are measured. Things are presented against him—against his character, his way of life, and his guidance. Whatever agrees with them is the truth, and whatever contradicts them is falsehood.”`,
    htmlText: `<div class="space-y-6 leading-relaxed">
  <div class="space-y-3">
    <p class="leading-relaxed">
      <strong class="font-semibold text-primary">al-Khaṭīb al-Baghdādī</strong> narrated:
    </p>

    <p class="leading-relaxed opacity-90">
      <em class="italic opacity-80 font-medium">ʾAbū Muḥaṃṃad ʿAbduḷḷāh b. Yaḥyā b. ʿAbd al-Jabbār al-Sukkarī</em> informed me; he said: <em class="italic opacity-80 font-medium">ʾAbū Bakr Muḥaṃṃad b. ʿAbduḷḷāh b. ʾIbrāhīm al-Shāfiʿī</em> narrated to us; he said: <em class="italic opacity-80 font-medium">Jaʿfar b. Muḥaṃṃad b. al-ʾAzhar</em> narrated to us; he said: <em class="italic opacity-80 font-medium">al-Mufaḍḍal b. Ghassān al-Ghaḷḷābī</em> narrated to me; he said: <em class="italic opacity-80 font-medium">My father [ Ghassān b. al-Mufaḍḍal al-Ghaḷḷābī ] —or Ibn Misʿar—</em>narrated to me, from <strong class="font-semibold text-primary">Sufyān b. ʿUyaynah</strong>, that he used to say:
    </p>

    <blockquote class="border-l-[3.5px] border-[#0B465E] dark:border-[#38bdf8] pl-4 sm:pl-5 py-3 my-3 bg-slate-500/[0.04] rounded-r-lg space-y-3 font-serif leading-relaxed">
      <p class="text-lg sm:text-xl font-bold text-[#0B465E] dark:text-[#38bdf8]">
        “Indeed, the Messenger of Aḷḷāh Ṣaḷḷaḷḷāhu—ʿalayhi—wa'l-saḷḷam is the greatest standard by which things are measured. Things are presented against him—against his character, his way of life, and his guidance. Whatever agrees with them is the truth, and whatever contradicts them is falsehood.”
      </p>
    </blockquote>
  </div>
</div>`,
    citation: "al-Jāmiʿ li-ʾAkhlāq al-Rāwī wa ʾĀdāb al-Sāmiʾ — al-Khaṭīb al-Baghdādī — pg. 120, n° 8",
    imageUrl: "/khatib_real.png",
    dateAdded: "2026-09-28"
  },
  {
    id: "36",
    translator: "Abu_Mundhir",
    category: "Heart-Softeners",
    type: "pdf",
    title: "The Book of Abstinence (Kitāb az-Zuhd)",
    author: "al-Imām al-Ḥāfiẓ Abū Ḥātim Muḥammad ibn Idrīs ar-Rāzī (d. 277H)",
    summary: "A short juzʾ of one hundred and five narrations related with authentic and historical chains by the great ḥadīth master Abū Ḥātim ar-Rāzī on zuhd, death, repentance, the heart, and knowledge and action, featuring timeless words from al-Ḥasan al-Baṣrī, Mālik ibn Dīnār, Wahb ibn Munabbih, and the Companions.",
    pdfUrl: "/az-Zuhd.pdf",
    imageUrl: "/az_zuhd_cover.png",
    dateAdded: "2026-09-28"
  },
  {
    id: "37",
    translator: "Abu_Talhah",
    translatorName: "Abū ʿUbaydillāh al-Qarārī",
    category: "al-Sunnah",
    type: "quote",
    title: "I Would Never Abandon a Sunnah of the Messenger of Allāh ﷺ for Anyone",
    speaker: "ʿAlī b. Abī Ṭālib (d. 40H)",
    author: "ʾAbū Dāwūd al-Ṭayālisī (d. 204H)",
    summary: "A narration documenting the exchange between ʿUthmān and ʿAlī during ḥajj regarding tamattuʿ, illustrating the principle of holding firmly to prophetic guidance above all opinions.",
    arabicText: `حَدَّثَنَا شُعْبَةُ، عَنِ الحَكَمِ، عَنْ عَلِيِّ بْنِ حُسَيْنٍ، عَنْ مَرْوَانَ بْنِ الحَكَمِ، قَالَ:

«شَهِدْتُ عُثْمَانَ وَعَلِيًّا رَضِيَ اللَّهُ عَنْهُمَا بَيْنَ مَكَّةَ وَالمَدِينَةِ، وَعُثْمَانُ يَنْهَى عَنِ التَّمَتُّعِ، أَوْ أَنْ يُجْمَعَ بَيْنَهُمَا، فَلَمَّا رَأَى ذَلِكَ عَلِيٌّ أَهَلَّ بِهِمَا جَمِيعًا، فَقَالَ: لَبَّيْكَ بِعُمْرَةٍ وَحَجَّةٍ مَعًا، فَقَالَ عُثْمَانُ: تَرَانِي أَنْهَى النَّاسَ عَنْ شَيْءٍ وَأَنْتَ تَفْعَلُهُ؟! قَالَ: مَا كُنْتُ لِأَدَعَ سُنَّةَ رَسُولِ اللَّهِ ﷺ لِقَوْلِ أَحَدٍ مِنَ النَّاسِ»`,
    englishText: `ʾAbū Dāwūd al-Ṭayālisī narrated:

Shuʿbah narrated to us, from al-Ḥakam, from ʿAlī b. al-Ḥusayn, from Marwān b. al-Ḥakam, who said:

“I witnessed ʿUthmān and ʿAlī, may Aḷḷāh be pleased with them both, between Makkah and Madīnah, while ʿUthmān was forbidding tamattuʿ, or combining the two. When ʿAlī saw this, he entered iḥrām for both of them together and said: ‘Labbayka with ʿumrah and ḥajj together.’ ʿUthmān said: ‘Do you see me forbidding the people from something while you do it?!’ He replied: ‘I would never abandon a Sunnah of the Messenger of Aḷḷāh Ṣaḷḷaḷḷāhu—ʿalayhi—wa'l-saḷḷam for the statement of anyone among the people.’”`,
    htmlText: `<div class="space-y-6 leading-relaxed">
  <div class="space-y-3">
    <p class="leading-relaxed">
      <strong class="font-semibold text-primary">ʾAbū Dāwūd al-Ṭayālisī</strong> narrated:
    </p>

    <p class="leading-relaxed opacity-90">
      <em class="italic opacity-80 font-medium">Shuʿbah</em> narrated to us, from <em class="italic opacity-80 font-medium">al-Ḥakam</em>, from <em class="italic opacity-80 font-medium">ʿAlī b. al-Ḥusayn</em>, from <strong class="font-semibold text-primary">Marwān b. al-Ḥakam</strong>, who said:
    </p>

    <blockquote class="border-l-[3.5px] border-[#0B465E] dark:border-[#38bdf8] pl-4 sm:pl-5 py-3 my-3 bg-slate-500/[0.04] rounded-r-lg space-y-3 font-serif leading-relaxed">
      <p class="text-lg sm:text-xl font-bold text-[#0B465E] dark:text-[#38bdf8]">
        “I witnessed ʿUthmān and ʿAlī, may Aḷḷāh be pleased with them both, between Makkah and Madīnah, while ʿUthmān was forbidding tamattuʿ, or combining the two. When ʿAlī saw this, he entered iḥrām for both of them together and said: ‘Labbayka with ʿumrah and ḥajj together.’ ʿUthmān said: ‘Do you see me forbidding the people from something while you do it?!’ He replied: ‘I would never abandon a Sunnah of the Messenger of Aḷḷāh Ṣaḷḷaḷḷāhu—ʿalayhi—wa'l-saḷḷam for the statement of anyone among the people.’”
      </p>
    </blockquote>
  </div>
</div>`,
    citation: "al-Musnad — ʾAbū Dāwūd al-Ṭayālisī — pg. 94, n° 96",
    imageUrl: "/tayalisi_96.png",
    dateAdded: "2026-09-28"
  },
  {
    id: "38",
    translator: "Abu_Talhah",
    translatorName: "Abū Ṭalḥah al-ʾAfġhānī (Verified by Abū Mundhir ar-Ruwāndī)",
    category: "ʿAqīdah",
    type: "quote",
    title: "Confirmation of Looking Towards Allāh, Mighty and Majestic",
    speaker: "al-Imām al-ʾĀjurrī (d. 360H)",
    author: "al-Imām al-Muḥaddith Abū Bakr Muḥammad ibn al-Ḥusayn al-ʾĀjurrī (d. 360H)",
    summary: "Imām al-Ājurrī opens the chapter on the believers beholding their Lord in the Hereafter, contrasting the eternal bliss of the believers with the veiling and punishment of the deniers, and refuting the deviations of the Jahmiyyah with decisive Quranic and prophetic proofs.",
    arabicText: `كِتَابُ التَّصْدِيقِ بِالنَّظَرِ إِلَى اللَّهِ عَزَّ وَجَلَّ

قَالَ مُحَمَّدُ بْنُ الْحُسَيْنِ رَحِمَهُ اللَّهُ: الْحَمْدُ لِلَّهِ عَلَى جَمِيلِ إِحْسَانِهِ , وَدَوَامِ نِعَمِهِ حَمْدَ مَنْ يَعْلَمُ أَنَّ مَوْلَاهُ الْكَرِيمَ يُحِبُّ الْحَمْدَ , فَلَهُ الْحَمْدُ عَلَى كُلِّ حَالٍ , وَصَلِّ اللَّهُ عَلَى مُحَمَّدٍ النَّبِيِّ وَأَصْحَابِهِ , وَحَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ

أَمَّا بَعْدُ: فَإِنَّ اللَّهَ تَعَالَى جَلَّ ذِكْرُهُ وَتَقَدَّسَتْ أَسْمَاؤُهُ , خَلَقَ خَلْقَهُ كَمَا أَرَادَ لِمَا أَرَادَ , فَجَعَلَهُمْ شَقِيًّا وَسَعِيدًا

فَأَمَّا أَهْلُ الشِّقْوَةِ فَكَفَرُوا بِاللَّهِ الْعَظِيمِ وَعَبَدُوا غَيْرَهُ , وَعَصَوْا رُسُلَهُ , وَجَحَدُوا كُتُبَهُ , فَأَمَاتَهُمْ عَلَى ذَلِكَ , فَهُمْ فِي قُبُورِهِمْ يُعَذَّبُونَ وَفِي الْقِيَامَةِ عَنِ النَّظَرِ إِلَى اللَّهِ تَعَالَى مَحْجُوبُونَ , وَإِلَى جَهَنَّمَ وَارِدُونَ , وَفِي أَنْوَاعِ الْعَذَابِ يَتَقَلَّبُونَ , وَلِلشَّيَاطِينِ مُقَارِبُونَ , وَهُمْ فِيهَا أَبَدًا خَالِدُونَ

وَأَمَّا أَهْلُ السَّعَادَةِ: فَهُمُ الَّذِينَ سَبَقَتْ لَهُمْ مِنَ اللَّهِ الْحُسْنَى , فَآمَنُوا بِاللَّهِ وَحْدَهُ , وَلَمْ يُشْرِكُوا بِهِ شَيْئًا , وَصَدَّقُوا الْقَوْلَ بِالْفِعْلِ , فَأَمَاتَهُمْ عَلَى ذَلِكَ , فَهُمْ فِي قُبُورِهِمْ يُنَعَّمُونَ , وَعِنْدَ الْمَحْشَرِ يُبَشَّرُونَ , وَفِي الْمَوْقِفِ إِلَى اللَّهِ تَعَالَى بِأَعْيُنِهِمْ يَنْظُرُونَ , وَإِلَى الْجَنَّةِ بَعْدَ ذَلِكَ وَافِدُونَ , وَفِي نَعِيمِهَا يَتَفَكَّهُونَ , وَلِلْحُورِ الْعِينِ مُعَانِقُونَ , وَالْوِلْدَانُ لَهُمْ يَخْدُمُونَ , وَفِي جِوَارِ مَوْلَاهُمُ الْكَرِيمِ أَبَدًا خَالِدُونَ؛ وَلِرَبِّهِمْ تَعَالَى فِي دَارِهِ زَائِرُونَ , وَبِالنَّظَرِ إِلَى وَجْهِهِ الْكَرِيمِ يَتَلَذَّذُونَ , وَلَهُ مُكَلِّمُونَ , وَبِالتَّحِيَّةِ لَهُمْ مِنَ اللَّهِ تَعَالَى؛ وَالسَّلَامِ مِنْهُ عَلَيْهِمْ يُكَرَّمُونَ

{ذَلِكَ فَضْلُ اللَّهِ يُؤْتِيهِ مَنْ يَشَاءُ وَاللَّهُ ذُو الْفَضْلِ الْعَظِيمِ} [الحديد: ٢١]

فَإِنِ اعْتَرَضَ جَاهِلٌ مِمَّنْ لَا عِلْمَ مَعَهُ , أَوْ بَعْضُ هَؤُلَاءِ الْجَهْمِيَّةِ الَّذِينَ لَمْ يُوَفَّقُوا لِلرَّشَادِ , وَلَعِبَ بِهِمُ الشَّيْطَانُ وَحُرِمُوا التَّوْفِيقَ فَقَالَ: الْمُؤْمِنُونَ يَرَوْنَ اللَّهَ يَوْمَ الْقِيَامَةِ؟ , قِيلَ لَهُ: نَعَمْ؛ وَالْحَمْدُ لِلَّهِ تَعَالَى عَلَى ذَلِكَ

فَإِنْ قَالَ الْجَهْمِيُّ: أَنَا لَا أُؤْمِنُ بِهَذَا. قِيلَ لَهُ: كَفَرْتَ بِاللَّهِ الْعَظِيمِ. فَإِنْ قَالَ: وَمَا الْحُجَّةُ. قِيلَ: لِأَنَّكَ رَدَدْتَ الْقُرْآنَ وَالسُّنَّةَ وَقَوْلَ الصَّحَابَةِ رَضِيَ اللَّهُ عَنْهُمْ , وَقَوْلَ عُلَمَاءِ الْمُسْلِمِينَ , وَاتَّبَعْتَ غَيْرَ سَبِيلِ الْمُؤْمِنِينَ

{وَمَنْ يُشَاقِقِ الرَّسُولَ مِنْ بَعْدِ مَا تَبَيَّنَ لَهُ الْهُدَى , وَيَتَّبِعْ غَيْرَ سَبِيلِ الْمُؤْمِنِينَ نُوَلِّهِ مَا تَوَلَّى وَنُصْلِهِ جَهَنَّمَ وَسَاءَتْ مَصِيرًا} [النساء: ١١٥]

فَأَمَّا نَصُّ الْقُرْآنِ فَقُولُ اللَّهِ تَعَالَى {وُجُوهٌ يَوْمَئِذٍ نَاضِرَةٌ إِلَى رَبِّهَا نَاظِرَةٌ} [القيامة: ٢٣]

وَقَالَ تَعَالَى وَقَدْ أَخْبَرَنَا عَنِ الْكُفَّارِ أَنَّهُمْ مَحْجُوبُونَ عَنْ رُؤْيَتِهِ فَقَالَ تَعَالَى ذِكْرُهُ {كَلَّا إِنَّهُمْ عَنْ رَبِّهِمْ يَوْمَئِذٍ لَمَحْجُوبُونَ ثُمَّ إِنَّهُمْ لَصَالُو الْجَحِيمِ ثُمَّ يُقَالُ هَذَا الَّذِي كُنْتُمْ بِهِ تُكَذِّبُونَ} [المطففين: ١٥]

فَدُلَّ بِهَذِهِ الْآيَةِ: أَنَّ الْمُؤْمِنِينَ يَنْظُرُونَ إِلَى اللَّهِ , وَأَنَّهُمْ غَيْرُ مَحْجُوبِينَ عَنْ رُؤْيَتِهِ , كَرَامَةً مِنْهُ لَهُمْ

وَقَالَ تَعَالَى: {لِلَّذِينَ أَحْسَنُوا الْحُسْنَى وَزِيَادَةٌ} [يونس: ٢٦] فَرُوِيَ أَنَّ الزِّيَادَةَ هِيَ النَّظَرُ إِلَى اللَّهِ تَعَالَى

وَقَالَ تَعَالَى: {وَكَانَ بِالْمُؤْمِنِينَ رَحِيمًا تَحِيَّتُهُمْ يَوْمَ يَلْقَوْنَهُ سَلَامٌ وَأَعَدَّ لَهُمْ أَجْرًا كَرِيمًا} [الأحزاب: ٤٣]

وَاعْلَمْ رَحِمَكَ اللَّهُ أَنَّ عِنْدَ أَهْلِ الْعِلْمِ بِاللُّغَةِ أَنَّ اللُّقَى هَاهُنَا لَا يَكُونُ إِلَا مُعَايَنَةً يَرَاهُمُ اللَّهُ تَعَالَى وَيَرَوْنَهُ , وَيُسَلِّمُ عَلَيْهِمْ , وَيُكَلِّمُهُمْ وَيُكَلِّمُونَهُ

قَالَ مُحَمَّدُ بْنُ الْحُسَيْنِ: وَقَدْ قَالَ اللَّهُ تَعَالَى لِنَبِيِّهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ: {وَأَنْزَلْنَا إِلَيْكَ الذِّكْرَ لِتُبَيِّنَ لِلنَّاسِ مَا نُزِّلَ إِلَيْهِمْ وَلَعَلَّهُمْ يَتَفَكَّرُونَ} [النحل: ٤٤]

وَكَانَ مِمَّا بَيَّنَهُ لِأُمَّتِهِ فِي هَذِهِ الْآيَاتِ: أَنَّهُ أَعْلَمَهُمْ فِي غَيْرِ حَدِيثٍ: «إِنَّكُمْ تَرَوْنَ رَبَّكُمْ تَعَالَى»

رَوَى عَنْهُ جَمَاعَةٌ مِنْ صَحَابَتِهِ رَضِيَ اللَّهُ عَنْهُمْ , وَقَبِلَهَا الْعُلَمَاءُ عَنْهُمْ أَحْسَنَ الْقَبُولِ , كَمَا قَبِلُوا عَنْهُمْ عِلْمَ الطَّهَارَةِ وَالصَّلَاةِ وَالزَّكَاةِ وَالصِّيَامِ وَالْحَجِّ وَالْجِهَادِ , وَعِلْمَ الْحَلَالِ وَالْحَرَامِ

كَذَا قَبِلُوا مِنْهُمُ الْأَخْبَارَ: أَنَّ الْمُؤْمِنِينَ يَرَوْنَ اللَّهَ تَعَالَى لَا يَشُكُّونَ فِي ذَلِكَ , ثُمَّ قَالُوا: مَنْ رَدَّ هَذِهِ الْأَخْبَارَ فَقَدْ كَفَرَ`,
    englishText: `Book: Confirmation of the Looking Towards Allāh, Mighty and Majestic.

Muḥammad ibn al-Ḥusayn (al-ʾĀjurrī), may Allāh have mercy on him, said: All praise is to Allāh upon the beauty of His Goodness and the perpetuity of His bounties - the praise of who knows that his Patron-Master, the Generous loves praise. So praise is for Him upon every state, and may Allāh send Ṣalāh upon Muḥammad (mentioning him with praise among the highest company of Angels and also spreading beautiful praise and mention of His Prophet among His servants), the Prophet, and his companions, and Allāh is sufficient for us and (what) an excellent Guardian (He is).

As for what follows: then indeed Allāh, High be He - Exalted be His mention and sanctified be His Names - created His creation as He desired for what He desired, so He made them wretched and felicitous.

So, as for the people of wretchedness, then they disbelieved in Allāh, the Most Great, and they worshipped other than Him, and they disobeyed His Messengers, and they denied His Scriptures, so He caused them to die upon that, so they are in their graves being punished and on al-Qiyāmah (they will be) veiled from the Beholding towards Allāh, High be He, and to Jahannam entering (it), and in the (various) types of the punishment turning over, and to the devils (they will be) close companions, and they are in it forever eternal.

And as for the people of felicity: then they are the ones the best (reward) preceded for them from Allāh, so they believed in Allāh alone, and they did not associate partners with Him a thing, and they confirmed the speech with the action, so He caused them to die upon that. So they are in their graves favoured, and given glad tidings at the Gathering, and at the Station they are looking with their eyes towards Allāh, High be He, and towards al-Jannah after that arriving in delegations, and in its bliss they are delighting, and to the Ḥūr al-ʿĪn embracing, and the boys of eternal youth serve for them, and in the company of their Patron-Master, the Generous, forever eternal, and visitors to their Lord, High be He, in His house, and in Beholding towards His Face they take pleasure, and to Him speakers, and with the greeting to them from Allāh, High be He, and the Salam from Him upon them they are honoured.

"That is the bounty of Allāh, He gives it to whomever He wills, and Allāh is the possessor of great bounty." - [al-Ḥadīd: 21]

Then, if an ignoramus from whom does not have knowledge with him objects, or some of these Jahmiyyah, those whom were not granted success (in being lead) to right conduct and (whom) al-Sẖayṭān has played with them and who were deprived of Tawfīq, so he says: 'The believers see Allāh on the day of Judgement?', it is said to him: 'Yes; and all praise is due to Allāh, High be He, upon that.'

Then if the Jahmī says: 'I do not believe in this.', it is said to him: 'You have disbelieved in Allāh, the Most Great.' Then if he says: 'And what is the proof?', it is said: 'Because you have rejected the Qurʾān and the Sunnah and the statements of the Companions, may Allāh be pleased with them, and the statements of the scholars of the Muslims, and you have followed other than the path of the believers.'

"And whoever contradicts and opposes the Messenger (Muḥammad ﷺ) after the right path has been shown clearly to him, and follows other than the believers' way. We shall keep him in the path he has chosen, and burn him in Hell - what an evil destination." - [an-Nisāʾ: 115]

So, as for the text of the Qurʾān, then (it is the) statement of Allāh, High be He:

"(Some) faces that day will be radiant (from the bliss of their hearts and joy of their souls). Looking at their Lord." - [al-Qiyāmah: 22-23]

And He, High be He, said - and He had informed us about the disbelievers that they are veiled from His Beholding.

So He said, High be His Mention:

"No (the affair is not as they presume)! Indeed, they, from (seeing) their Lord, that Day, will be veiled. Then indeed, they will surely (enter) and taste (the heat and flames of) Hellfire. Then it will be said (to them): “This (punishment) is what you used to deny (when you would mock Allāh’s Messengers)!”" - [al-Muṭaffifīn: 15-17]

So it is indicated by this verse: that the believers look towards Allāh, and that they are other than veiled from His Beholding, an honour from Him for them.

And He, High be He, said:

"For those who have done good is the best (reward, i.e. Paradise) and even more (i.e. having the honour of glancing at the Countenance of Allāh)." - [Yūnus: 26]

So, it is narrated that al-Ziyādah: it is the look towards Allāh, the Most High.

And He, High be He, said:

"And ever is He, to the believers, Merciful. Their greeting on the Day they shall meet Him will be "Salām: Peace (i.e. the angels will say to them: Salāmu ʿAlaykum)!" And He has prepared for them a generous reward (i.e. Paradise)." - [al-ʾAḥzāb: 43-44]

And know, may Allāh have mercy upon you, that according to the people of knowledge of the language that meeting here cannot be except visually with the eyes, Allāh, High be He, sees them and they see Him, and He sends Salām upon them, and He speaks to them and they speak to Him.

Muḥammad ibn al-Ḥusayn (al-ʾĀjurrī) said: And Allāh, High be He, said to His Prophet صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ:

"And We have also sent down unto you (O Muḥammad ﷺ) the reminder and the advice (the Qurʾān), that you may explain clearly to men what is sent down to them, and that they may give thought." - [al-Naḥl: 44]

And from what he used to clarify to his nation in this verses: that he taught them in other than other than a (single) hadith: "Indeed you will see your Lord, High be He."

A group of the Companions narrated it from him, may Allāh be pleased with them, and the scholars accepted it from them (with the) most excellent of acceptance, just as they accepted from the knowledge of al-Ṭahārah (purification) and al-Ṣalāh (prayer), and al-Zakāh (obligatory charity) and al-Ṣiyām (fasting) and al-Ḥajj (pilgrimage) and al-Jihād, and the knowledge of the Ḥalāl and the Ḥarām.

Likewise, they accepted from them the reports: that the believers see Allāh, High be He - they do not doubt in that. Then they said: Whoever rejects these reports then he has disbelieved.`,
    htmlText: `<div class="space-y-6 leading-relaxed">
  <div class="space-y-3">
    <p class="leading-relaxed">
      <strong class="font-semibold text-primary">Muḥammad ibn al-Ḥusayn (al-ʾĀjurrī)</strong>, may Allāh have mercy on him, said:
    </p>

    <blockquote class="border-l-[3.5px] border-[#0B465E] pl-4 sm:pl-5 py-3 my-3 bg-slate-500/[0.04] rounded-r-lg space-y-3 font-serif leading-relaxed">
      <p>
        “All praise is to Allāh upon the beauty of His Goodness and the perpetuity of His bounties — the praise of who knows that his Patron-Master, the Generous loves praise. So praise is for Him upon every state, and may Allāh send Ṣalāh upon Muḥammad (mentioning him with praise among the highest company of Angels and also spreading beautiful praise and mention of His Prophet among His servants), the Prophet, and his companions, and Allāh is sufficient for us and (what) an excellent Guardian (He is).”
      </p>
    </blockquote>
  </div>

  <hr class="border-current opacity-15 my-6" />

  <div class="space-y-3">
    <p class="leading-relaxed">
      <strong class="font-semibold text-primary">As for what follows:</strong> Then indeed Allāh, High be He — Exalted be His mention and sanctified be His Names — created His creation as He desired for what He desired, so He made them wretched and felicitous.
    </p>

    <p class="leading-relaxed">
      So, as for the people of wretchedness, then they disbelieved in Allāh, the Most Great, and they worshipped other than Him, and they disobeyed His Messengers, and they denied His Scriptures, so He caused them to die upon that, so they are in their graves being punished and on al-Qiyāmah (they will be) veiled from the Beholding towards Allāh, High be He, and to Jahannam entering (it), and in the (various) types of the punishment turning over, and to the devils (they will be) close companions, and they are in it forever eternal.
    </p>

    <p class="leading-relaxed">
      And as for the people of felicity: then they are the ones the best (reward) preceded for them from Allāh, so they believed in Allāh alone, and they did not associate partners with Him a thing, and they confirmed the speech with the action, so He caused them to die upon that. So they are in their graves favoured, and given glad tidings at the Gathering, and at the Station they are looking with their eyes towards Allāh, High be He, and towards al-Jannah after that arriving in delegations, and in its bliss they are delighting, and to the Ḥūr al-ʿĪn embracing, and the boys of eternal youth serve for them, and in the company of their Patron-Master, the Generous, forever eternal, and visitors to their Lord, High be He, in His house, and in Beholding towards His Face they take pleasure, and to Him speakers, and with the greeting to them from Allāh, High be He, and the Salam from Him upon them they are honoured.
    </p>

    <blockquote class="border-l-[3.5px] border-[#0B465E] pl-4 sm:pl-5 py-3 my-3 bg-slate-500/[0.04] rounded-r-lg space-y-3 font-serif leading-relaxed">
      <p class="font-semibold text-[#0B465E]">
        “That is the bounty of Allāh, He gives it to whomever He wills, and Allāh is the possessor of great bounty.” <span class="text-xs opacity-75 font-sans font-normal">[al-Ḥadīd: 21]</span>
      </p>
    </blockquote>
  </div>

  <hr class="border-current opacity-15 my-6" />

  <div class="space-y-3">
    <p class="leading-relaxed">
      Then, if an ignoramus from whom does not have knowledge with him objects, or some of these Jahmiyyah, those whom were not granted success (in being lead) to right conduct and (whom) al-Sẖayṭān has played with them and who were deprived of Tawfīq, so he says: <em>‘The believers see Allāh on the day of Judgement?’</em>
    </p>

    <p class="leading-relaxed">
      It is said to him: <strong class="font-semibold text-[#0B465E]">‘Yes; and all praise is due to Allāh, High be He, upon that.’</strong>
    </p>

    <p class="leading-relaxed">
      Then if the Jahmī says: <em>‘I do not believe in this.’</em> It is said to him: <strong class="font-semibold text-[#0B465E]">‘You have disbelieved in Allāh, the Most Great.’</strong>
    </p>

    <p class="leading-relaxed">
      Then if he says: <em>‘And what is the proof?’</em> It is said: <strong class="font-semibold text-primary">‘Because you have rejected the Qurʾān and the Sunnah and the statements of the Companions, may Allāh be pleased with them, and the statements of the scholars of the Muslims, and you have followed other than the path of the believers.’</strong>
    </p>

    <blockquote class="border-l-[3.5px] border-[#0B465E] pl-4 sm:pl-5 py-3 my-3 bg-slate-500/[0.04] rounded-r-lg space-y-3 font-serif leading-relaxed">
      <p class="font-semibold text-[#0B465E]">
        “And whoever contradicts and opposes the Messenger (Muḥammad ﷺ) after the right path has been shown clearly to him, and follows other than the believers' way. We shall keep him in the path he has chosen, and burn him in Hell — what an evil destination.” <span class="text-xs opacity-75 font-sans font-normal">[an-Nisāʾ: 115]</span>
      </p>
    </blockquote>
  </div>

  <hr class="border-current opacity-15 my-6" />

  <div class="space-y-3">
    <p class="leading-relaxed font-semibold">
      So, as for the text of the Qurʾān, then (it is the) statement of Allāh, High be He:
    </p>

    <blockquote class="border-l-[3.5px] border-[#0B465E] pl-4 sm:pl-5 py-3 my-3 bg-slate-500/[0.04] rounded-r-lg space-y-3 font-serif leading-relaxed">
      <p class="font-semibold text-[#0B465E]">
        “(Some) faces that day will be radiant (from the bliss of their hearts and joy of their souls). Looking at their Lord.” <span class="text-xs opacity-75 font-sans font-normal">[al-Qiyāmah: 22–23]</span>
      </p>
    </blockquote>

    <p class="mt-4 leading-relaxed">
      And He, High be He, said — and He had informed us about the disbelievers that they are veiled from His Beholding. So He said, High be His Mention:
    </p>

    <blockquote class="border-l-[3.5px] border-[#0B465E] pl-4 sm:pl-5 py-3 my-3 bg-slate-500/[0.04] rounded-r-lg space-y-3 font-serif leading-relaxed">
      <p class="font-semibold text-[#0B465E]">
        “No (the affair is not as they presume)! Indeed, they, from (seeing) their Lord, that Day, will be veiled. Then indeed, they will surely (enter) and taste (the heat and flames of) Hellfire. Then it will be said (to them): ‘This (punishment) is what you used to deny (when you would mock Allāh’s Messengers)!’” <span class="text-xs opacity-75 font-sans font-normal">[al-Muṭaffifīn: 15–17]</span>
      </p>
    </blockquote>

    <p class="leading-relaxed">
      So it is indicated by this verse: that the believers look towards Allāh, and that they are other than veiled from His Beholding, an honour from Him for them.
    </p>

    <p class="mt-4 leading-relaxed">
      And He, High be He, said:
    </p>

    <blockquote class="border-l-[3.5px] border-[#0B465E] pl-4 sm:pl-5 py-3 my-3 bg-slate-500/[0.04] rounded-r-lg space-y-3 font-serif leading-relaxed">
      <p class="font-semibold text-[#0B465E]">
        “For those who have done good is the best (reward, i.e. Paradise) and even more (i.e. having the honour of glancing at the Countenance of Allāh).” <span class="text-xs opacity-75 font-sans font-normal">[Yūnus: 26]</span>
      </p>
    </blockquote>

    <p class="leading-relaxed opacity-90 italic">
      So, it is narrated that al-Ziyādah: it is the look towards Allāh, the Most High.
    </p>

    <p class="mt-4 leading-relaxed">
      And He, High be He, said:
    </p>

    <blockquote class="border-l-[3.5px] border-[#0B465E] pl-4 sm:pl-5 py-3 my-3 bg-slate-500/[0.04] rounded-r-lg space-y-3 font-serif leading-relaxed">
      <p class="font-semibold text-[#0B465E]">
        “And ever is He, to the believers, Merciful. Their greeting on the Day they shall meet Him will be ‘Salām: Peace (i.e. the angels will say to them: Salāmu ʿAlaykum)!’ And He has prepared for them a generous reward (i.e. Paradise).” <span class="text-xs opacity-75 font-sans font-normal">[al-ʾAḥzāb: 43–44]</span>
      </p>
    </blockquote>

    <p class="leading-relaxed">
      And know, may Allāh have mercy upon you, that according to the people of knowledge of the language that meeting here cannot be except visually with the eyes, Allāh, High be He, sees them and they see Him, and He sends Salām upon them, and He speaks to them and they speak to Him.
    </p>
  </div>

  <hr class="border-current opacity-15 my-6" />

  <div class="space-y-3">
    <p class="leading-relaxed">
      <strong class="font-semibold text-primary">Muḥammad ibn al-Ḥusayn [al-ʾĀjurrī]</strong> said:
    </p>

    <p class="leading-relaxed">
      And Allāh, High be He, said to His Prophet صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ:
    </p>

    <blockquote class="border-l-[3.5px] border-[#0B465E] pl-4 sm:pl-5 py-3 my-3 bg-slate-500/[0.04] rounded-r-lg space-y-3 font-serif leading-relaxed">
      <p class="font-semibold text-[#0B465E]">
        “And We have also sent down unto you (O Muḥammad ﷺ) the reminder and the advice (the Qurʾān), that you may explain clearly to men what is sent down to them, and that they may give thought.” <span class="text-xs opacity-75 font-sans font-normal">[al-Naḥl: 44]</span>
      </p>
    </blockquote>

    <p class="leading-relaxed">
      And from what he used to clarify to his nation in this verses: that he taught them in other than other than a (single) hadith:
    </p>

    <blockquote class="border-l-[3.5px] border-[#0B465E] pl-4 sm:pl-5 py-3 my-3 bg-slate-500/[0.04] rounded-r-lg space-y-3 font-serif leading-relaxed">
      <p class="text-lg sm:text-xl font-bold text-[#0B465E]">
        “Indeed you will see your Lord, High be He.”
      </p>
    </blockquote>

    <p class="leading-relaxed">
      A group of the Companions narrated it from him, may Allāh be pleased with them, and the scholars accepted it from them (with the) most excellent of acceptance, just as they accepted from the knowledge of al-Ṭahārah (purification) and al-Ṣalāh (prayer), and al-Zakāh (obligatory charity) and al-Ṣiyām (fasting) and al-Ḥajj (pilgrimage) and al-Jihād, and the knowledge of the Ḥalāl and the Ḥarām.
    </p>

    <p class="leading-relaxed">
      Likewise, they accepted from them the reports: that the believers see Allāh, High be He — they do not doubt in that. Then they said: <strong class="font-semibold text-[#0B465E]">“Whoever rejects these reports then he has disbelieved.”</strong>
    </p>
  </div>
</div>`,
    citation: "Kitāb ash-Sharīʿah — Muḥammad ibn al-Ḥusayn al-ʾĀjurrī — 2/978-982",
    imageUrl: "/ajurri_scan.png",
    dateAdded: "2026-09-29"
  },
  {
    id: "39",
    translator: "Abu_Talhah",
    translatorName: "Abū Ṭalḥah al-ʾAfġhānī",
    category: "Heart-Softeners",
    type: "poem",
    title: "O Worshipper of the Two Sanctuaries (Yā ʿĀbida al-Ḥaramayn)",
    speaker: "ʿAbdullāh ibn al-Mubārak (d. 181H)",
    author: "al-Imām al-Ḥāfiẓ Shams al-Dīn al-Dhahabī (d. 748H)",
    summary: "The celebrated lines of poetry sent by the scholar and mujāhid ʿAbdullāh ibn al-Mubārak from the frontiers of Ṭarsūs to the devout ascetic al-Fuḍayl ibn ʿIyāḍ in the Ḥaram of Makkah, contrasting devotional seclusion with sacrifice in the path of Allāh.",
    arabicText: `وَرَوَى: عَبْدُ اللهِ بنُ مُحَمَّدٍ قَاضِي نَصِيْبِيْنَ، حَدَّثَنَا مُحَمَّدُ بنُ إِبْرَاهِيْمَ بنِ أَبِي سُكَيْنَةَ، قَالَ: أَمْلَى عَلَيَّ ابْنُ المُبَارَكِ سَنَةَ سَبْعٍ وَسَبْعِيْنَ وَمائَةٍ، وَأَنفَذَهَا مَعِي إِلَى الفُضَيْلِ بنِ عِيَاضٍ مِنْ طَرَسُوْسَ:

يَا عَابِدَ الحَرَمِيْنِ لَوْ أَبْصَرْتَنَا ... لَعَلِمْتَ أَنَّكَ فِي العِبَادَةِ تَلْعَبُ
مَنْ كَانَ يَخْضِبُ جِيْدَهُ بِدُمُوْعِهِ ... فَنُحُوْرُنَا بِدِمَائِنَا تَتَخَضَّبُ
أَوْ كَانَ يُتْعِبُ خَيْلَهُ فِي بَاطِلٍ ... فَخُيُوْلُنَا يَوْمَ الصَّبِيْحَةِ تَتْعَبُ
رِيْحُ العَبِيْرِ لَكُمْ وَنَحْنُ عَبِيْرُنَا ... رَهَجُ السَّنَابِكِ وَالغُبَارُ الأَطْيَبُ
وَلَقَدْ أَتَانَا مِنْ مَقَالِ نَبِيِّنَا ... قَوْلٌ صَحِيْحٌ صَادِقٌ لاَ يُكْذَبُ:
لاَ يَسْتَوِي وَغُبَارُ خَيْلِ اللهِ فِي ... أَنْفِ امْرِئٍ وَدُخَانُ نَارٍ تَلهبُ
هَذَا كِتَابُ اللهِ يَنْطِقُ بَيْنَنَا ... لَيْسَ الشَّهِيْدُ بِمَيِّتٍ لاَ يُكْذَبُ

فَلَقِيْتُ الفُضَيْلَ بِكِتَابِهِ فِي الحَرَمِ، فَقَرَأَهُ وَبَكَى، ثُمَّ قَالَ: صَدَقَ أَبُو عَبْدِ الرَّحْمَنِ وَنَصَحَ.`,
    englishText: `And ʿAbd Allāh ibn Muḥammad, the Qāḍī (judge) of Naṣībīn (Nusaybin) reported: Muḥammad ibn Ibrāhīm ibn Abī Sukaynah narrated to us, he said: Ibn al-Mubārak dictated upon me in the year 177(AH), and he dispatched it with me to al-Fuḍayl ibn ʿIyāḍ from Ṭarsūs:

“O worshipper of the Two Sacred Sanctuaries, if only you saw us... you would have known that you play in worship
Who used to dye his neck with his tears... then [know that] our throats are dyed with our blood
Or who used to exhaust his horse in vanity... then our horses on the day of the morning raid exhaust
The scent of ʿabīr* is for you, and us our ʿabīr... is the dust of the hoof-tips and the most pleasant dust
And from the speech of our Prophet has come... a sound, truthful statement, not belied:
They do not become equal: the dust of the horses of Allāh in... the nose of a man, and the smoke of blazing fire
This is the Book of Allāh speaking among us:... the martyr is not dead, [a truth] not denied.”

So, I met al-Fuḍayl with his letter in the Ḥaram, so he read it and cried, then he said: ‘Abū ʿAbd al-Raḥmān spoke truthfully, and he gave sound advice.’

* ʿabīr — a certain mixture of perfumes compounded with saffron`,
    htmlText: `<div class="space-y-6 leading-relaxed">
  <div class="space-y-3">
    <p class="leading-relaxed">
      And <em class="italic opacity-80 font-medium">ʿAbd Allāh ibn Muḥammad</em>, the Qāḍī (judge) of Naṣībīn (Nusaybin) reported: <em class="italic opacity-80 font-medium">Muḥammad ibn Ibrāhīm ibn Abī Sukaynah</em> narrated to us, he said: <strong class="font-semibold text-primary">Ibn al-Mubārak</strong> dictated upon me in the year 177(AH), and he dispatched it with me to <strong class="font-semibold text-primary">al-Fuḍayl ibn ʿIyāḍ</strong> from Ṭarsūs:
    </p>

    <blockquote class="border-l-[3.5px] border-[#0B465E] pl-4 sm:pl-5 pr-4 py-4 my-4 bg-slate-500/[0.04] rounded-r-lg space-y-3 font-serif leading-relaxed text-center italic">
      <p class="italic text-center">
        “<strong class="font-bold text-[#0B465E]">O worshipper of the Two Sacred Sanctuaries</strong>, if only you saw us... you would have known that you <strong class="font-bold text-primary">play in worship</strong>
      </p>
      <p class="italic text-center">
        Who used to dye his neck with his <strong class="font-semibold text-[#0B465E]">tears</strong>... then [know that] our throats are dyed with our <strong class="font-bold text-[#0B465E]">blood</strong>
      </p>
      <p class="italic text-center">
        Or who used to exhaust his horse in <strong class="font-semibold text-primary">vanity</strong>... then our horses on the day of the morning raid <strong class="font-bold text-[#0B465E]">exhaust</strong>
      </p>
      <p class="italic text-center">
        The scent of <strong class="font-bold text-[#0B465E]">ʿabīr</strong><sup class="text-primary font-bold">*</sup> is for you, and us our <strong class="font-bold text-[#0B465E]">ʿabīr</strong>... is the <strong class="font-semibold text-primary">dust of the hoof-tips</strong> and the <strong class="font-bold text-[#0B465E]">most pleasant dust</strong>
      </p>
      <p class="italic text-center">
        And from the speech of our Prophet has come... a <strong class="font-bold text-[#0B465E]">sound, truthful statement, not belied</strong>:
      </p>
      <p class="italic text-center">
        <strong class="font-bold text-primary">They do not become equal:</strong> the <strong class="font-bold text-[#0B465E]">dust of the horses of Allāh</strong> in... the nose of a man, and the <strong class="font-bold text-[#0B465E]">smoke of blazing fire</strong>
      </p>
      <p class="italic text-center">
        This is the <strong class="font-bold text-primary">Book of Allāh</strong> speaking among us:... <strong class="font-bold text-[#0B465E]">the martyr is not dead</strong>, [a truth] not denied.”
      </p>
    </blockquote>

    <p class="mt-4 leading-relaxed">
      So, I met <strong class="font-semibold text-primary">al-Fuḍayl</strong> with his letter in the Ḥaram, so he read it and cried, then he said: <strong class="font-bold text-[#0B465E]">‘Abū ʿAbd al-Raḥmān spoke truthfully, and he gave sound advice.’</strong>
    </p>

    <div class="mt-6 pt-3 border-t border-black/10 dark:border-white/10 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans">
      <p><strong class="font-semibold text-primary">* ʿabīr:</strong> a certain mixture of perfumes compounded with saffron</p>
    </div>
  </div>
</div>`,
    citation: "Siyar ʾAʿlām al-Nubalāʾ — al-Dẖahabī — 8/412–413",
    imageUrl: "/ibn_al_mubarak_poem_scan.png",
    dateAdded: "2026-09-29"
  },
  {
    id: "40",
    translator: "Abu_Talhah",
    translatorName: "Abū Ṭalḥah al-ʾAfġhānī",
    category: "ʿAqīdah",
    type: "poem",
    title: "al-Ḥāʾiyyah fī al-Sunnah (The Creed of Ibn Abī Dāwūd)",
    speaker: "Abū Bakr ibn Abī Dāwūd (d. 316H)",
    author: "al-Imām al-Muḥaddiṯh Muḥammad ibn al-Ḥusayn al-ʾĀjurrī (d. 360H)",
    summary: "The celebrated thirty-three verse Ḥāʾiyyah poem in affirmation of the Creed of the Salaf dictated by Abū Bakr ibn Abī Dāwūd in the Mosque of al-Raṣāfah, narrated by Imām al-Ājurrī at the culmination of Kitāb al-Sharīʿah.",
    arabicText: `حَدَّثَنَا أَبُو الْفَضْلِ الْعَبَّاسُ بْنُ يُوسُفَ الشِّكْلِيُّ قَالَ: حَدَّثَنَا إِبْرَاهِيمُ بْنُ الْمُهَلَّبِ الزُّهْرِيُّ قَالَ: حَدَّثَنَا عَبْدُ اللَّهِ بْنُ الْحَسَنِ السَّاحِلِيُّ قَالَ: حَدَّثَنَا بَقِيَّةُ بْنُ الْوَلِيدِ , وَالْوَلِيدُ بْنُ مُسْلِمٍ قَالَا: حَدَّثَنَا ثَوْرُ بْنُ يَزِيدَ , عَنْ خَالِدِ بْنِ مَعْدَانَ , عَنْ مُعَاذِ بْنِ جَبَلٍ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ: «إِذَا حَدَثَ فِي أُمَّتِي الْبِدَعُ وَشُتِمَ أَصْحَابِي فَلْيُظْهِرِ الْعَالِمُ عِلْمَهُ فَمَنْ لَمْ يَفْعَلْ ذَلِكَ مِنْهُمْ فَعَلَيْهِ لَعْنَةُ اللَّهِ وَالْمَلَائِكَةِ وَالنَّاسِ أَجْمَعِينَ» . فَقَالَ عَبْدُ اللَّهِ بْنُ الْحُسَيْنِ: فَقُلْتُ لِلْوَلِيدِ بْنِ مُسْلِمٍ: مَا إِظْهَارُ الْعِلْمِ؟ . قَالَ: إِظْهَارُ السُّنَّةِ , إِظْهَارُ السُّنَّةِ قَالَ مُحَمَّدُ بْنُ الْحُسَيْنِ رَحِمَهُ اللَّهُ: قَدْ رَسَمْتُ فِي هَذَا الْكِتَابِ وَهُوَ كِتَابُ الشَّرِيعَةِ مِنْ أَوَّلِهِ لِآخِرِهِ مَا أَعْلَمُ أَنَّ جَمِيعَ مَنْ شَمِلَهُ الْإِسْلَامُ مُحْتَاجٌ إِلَى عِلْمِهِ لِفَسَادِ مَذَاهِبِ كَثِيرٍ مِنَ النَّاسِ , وَلَمَّا قَدْ ظَهَرَ كَثِيرٌ مِنَ الْأَهْوَاءِ الضَّالَّةِ وَالْبِدَعِ الْمُتَوَاتِرَةِ مَا أَعْلَمَ أَنَّ أَهْلَ الْحَقِّ تَقْوَى بِهِ نُفُوسُهُمْ , وَمَقْمَعَةٌ لِأَهْلِ الْبِدَعِ وَالضَّلَالَةِ عَلَى حَسَبِ مَا عَلَّمَنِيَ اللَّهُ عَزَّ وَجَلَّ , فَالْحَمْدُ لِلَّهِ عَلَى ذَلِكَ. وَقَدْ كَانَ أَبُو بَكْرِ بْنُ أَبِي دَاوُدَ رَحِمَهُ اللَّهُ أَنْشَدَنَا قَصِيدَةً قَالَهَا فِي السُّنَّةِ وَهَذَا مَوْضِعُهَا , وَأَنَا أَذْكُرُهَا لِيَزْدَادَ بِهَا أَهْلُ الْحَقِّ بَصِيرَةً وَقُوَّةً إِنْ شَاءَ اللَّهُ: أَمْلَى عَلَيْنَا أَبُو بَكْرِ بْنُ أَبِي دَاوُدَ فِي مَسْجِدِ الرَّصَافَةِ فِي يَوْمِ الْجُمُعَةِ لِخَمْسٍ بَقِينَ مِنْ شَعْبَانَ سَنَةَ تِسْعٍ وَثَلَاثِمِائَةٍ فَقَالَ تَجَاوَزُ اللَّهُ عَنْهُ:

تَمَسَّكْ بِحَبْلِ اللَّهِ وَاتَّبِعِ الْهُدَى ... وَلَا تَكُ بِدْعِيًا لَعَلَّكَ تُفْلِحُ
وَدِنْ بِكِتَابِ اللَّهِ وَالسُّنَنِ الَّتِي ... أَتَتْ عَنْ رَسُولِ اللَّهِ تَنْجُو وَتَرْبَحُ
وَقُلْ: غَيْرُ مَخْلُوقٍ كَلَامُ مَلِيكِنَا ... بِذَلِكَ دَانَ الْأَتْقِيَاءُ وَأَفْصَحُوا
وَلَا تَغْلُ فِي الْقُرْآنِ بِالْوَقْفِ قَائِلًا ... كَمَا قَالَ أَتْبَاعٌ لِجَهْمٍ وَأَسْجَحُوا
وَلَا تَقُلِ: الْقُرْآنُ خَلْقٌ قَرَأْتُهُ ... فَإِنَّ كَلَامَ اللَّهِ بِاللَّفْظِ يُوضَحُ
وَقُلْ يَتَجَلَّى اللَّهُ لِلْخَلْقِ جَهْرَةً ... كَمَا الْبَدْرُ لَا يَخْفَى وَرَبُّكَ أَوْضَحُ
وَلَيْسَ بِمَوْلُودٍ وَلَيْسَ بِوَالِدٍ ... وَلَيْسَ لَهُ شِبْهٌ تَعَالَى الْمُسَبَّحُ
وَقَدْ يُنْكِرُ الْجَهْمِيُّ هَذَا وَعِنْدَنَا ... بِمِصْدَاقِ مَا قُلْنَا حَدِيثٌ مُصَرِّحُ
رَوَاهُ جَرِيرٌ عَنْ مَقَالِ مُحَمَّدٍ ... فَقُلْ مِثْلَ مَا قَدْ قَالَ فِي ذَاكَ تَنْجَحُ
وَقَدْ يُنْكِرُ الْجَهْمِيُّ أَيْضًا يَمِينَهُ ... وَكِلْتَا يَدَيْهِ بِالْفَوَاضِلِ تَنْضَحُ
وَقُلْ: يَنْزِلُ الْجَبَّارُ فِي كُلِّ لَيْلَةٍ ... بِلَا كَيْفٍ جَلَّ الْوَاحِدُ الْمُتَمَدَّحُ
إِلَى طَبَقِ الدُّنْيَا يَمُنُّ بِفَضْلِهِ ... فَتُفْرَجُ أَبْوَابُ السَّمَاءِ وَتُفْتَحُ
يَقُولُ: أَلَا مُسْتَغْفِرٍ يَلْقَى غَافِرًا ... وَمُسْتَمْنِحٌ خَيْرًا وَرِزْقًا فَيُمْنَحُ
رَوَى ذَاكَ قَوْمٌ لَا يُرَدُّ حَدِيثُهُمْ ... أَلَا خَابَ قَوْمٌ كَذَّبُوهُمْ وَقُبِّحُوا
وَقُلْ: إِنَّ خَيْرَ النَّاسِ بَعْدَ مُحَمَّدٍ ... وَزِيرَاهُ قِدْمًا ثُمَّ عُثْمَانُ الْأَرْجَحُ
وَرَابِعُهُمْ خَيْرُ الْبَرِيَّةِ بَعْدَهُمُ ... عَلِيٌّ حَلِيفُ الْخَيْرِ بِالْخَيْرِ مُنْجِحُ
وَإِنَّهُمْ وَالرَّهْطُ لَا رَيْبَ فِيهِمُ ... عَلَى نُجِبِ الْفِرْدَوْسِ فِي الْخُلْدِ تَسْرَحُ
سَعِيدٌ وَسَعْدٌ وَابْنُ عَوْفٍ وَطَلْحَةُ ... وَعَامِرُ فِهْرٍ وَالزُّبَيْرُ الْمُمَدَّحُ
وَقُلْ: خَيْرُ قَوْلٍ فِي الصَّحَابَةِ كُلِّهِمُ ... وَلَا تَكُ طَعَّانًا تَعِيبُ وَتَجْرَحُ
فَقَدْ نَطَقَ الْوَحْي الْمُبِينُ بِفَضْلِهِمُ ... وَفِي الْفَتْحِ آيٌ فِي الصَّحَابَةِ تَمْدَحُ
وَبِالْقَدَرِ الْمَقْدُورِ أَيْقِنْ فَإِنَّهُ ... دِعَامَةُ عِقْدِ الدِّينِ وَالدَّيْنُ أَفْيَحُ
وَلَا تُنْكِرَنَّ جَهْلًا نَكِيرًا وَمُنْكَرًا ... وَلَا الْحَوْضَ وَالْمِيزَانَ إِنَّكَ تُنْصَحُ
وَقُلْ: يُخْرِجُ اللَّهُ الْعَظِيمُ بِفَضْلِهِ ... مِنَ النَّارِ أَجْسَادًا مِنَ الْفَحْمِ تُطْرَحُ
عَلَى النَّهَرِ فِي الْفِرْدَوْسِ تَحْيَا بِمَائِهِ ... كَحَبَّةِ حَمْلِ السَّيْلِ إِذْ جَاءَ يَطْفَحُ
وَإِنَّ رَسُولَ اللَّهِ لِلْخَلْقِ شَافِعٌ ... وَقُلْ فِي عَذَابِ الْقَبْرِ: حَقٌّ مُوَضَّحُ
وَلَا تُكَفِّرَنَّ أَهْلَ الصَّلَاةِ وَإِنْ عَصَوْا ... فَكُلُّهُمْ يَعْصِي وَذُو الْعَرْشِ يَصْفَحُ
وَلَا تَعْتَقِدْ رَأْيَ الْخَوَارِجِ إِنَّهُ ... مَقَالٌ لِمَنْ يَهْوَاهُ يُرْدِي وَيَفْضَحُ
وَلَا تَكُ مُرْجِئًا لَعُوبًا بِدِينِهِ ... أَلَا إِنَّمَا الْمُرْجِيُّ بِالدَّيْنِ يَمْزَحُ
وَقُلْ: إِنَّمَا الْإِيمَانُ قَوْلٌ وَنِيَّةٌ ... وَفِعْلٌ عَلَى قَوْلِ النَّبِيِّ مُصَرَّحُ
وَيَنْقُصُ طَوْرًا بِالْمَعَاصِي وَتَارَةً ... بِطَاعَتِهِ يُنَمَّى وَفِي الْوَزْنِ يَرْجَحُ
وَدَعْ عَنْكَ آرَاءَ الرِّجَالِ وَقَوْلَهُمْ ... فَقَوْلُ رَسُولِ اللَّهِ أَزْكَى وَأَشْرَحُ
وَلَا تَكُ مِنْ قَوْمٍ تَلَهَّوْا بِدِينِهِمْ ... فَتَطْعَنُ فِي أَهْلِ الْحَدِيثِ وَتَقْدَحُ
إِذَا مَا اعْتَقَدْتَ الدَّهْرَ يَا صَاحِ هَذِهِ ... فَأَنْتَ عَلَى خَيْرٍ تَبِيتُ وَتُصْبِحُ

ثُمَّ قَالَ لَنَا أَبُو بَكْرِ بْنُ أَبِي دَاوُدَ: هَذَا قَوْلِي وَقَوْلُ أَبِي وَقَوْلُ أَحْمَدَ بْنِ حَنْبَلٍ وَقَوْلُ مَنْ أَدْرَكْنَا مِنْ أَهْلِ الْعِلْمِ وَمَنْ لَمْ نُدْرِكْ مِمَّنْ بَلَغَنَا عَنْهُ , فَمَنْ قَالَ عَلَيَّ غَيْرِ هَذَا فَقَدْ كَذَبَ قَالَ مُحَمَّدُ بْنُ الْحُسَيْنِ رَحِمَهُ اللَّهُ: وَبِهَذَا وَبِجَمِيعِ مَا رَسَمْتُهُ فِي كِتَابِنَا هَذَا وَهُوَ كِتَابُ الشَّرِيعَةَ ثَلَاثَةٌ وَعِشْرُونَ جُزْءًا نَدِينُ اللَّهَ عَزَّ وَجَلَّ , وَنَنْصَحُ إِخْوَانِنَا مِنْ أَهْلِ السُّنَّةِ وَالْجَمَاعَةِ , مِنْ أَهْلِ الْقُرْآنِ وَأَهْلِ الْحَدِيثِ وَأَهْلِ الْفِقْهِ وَجَمِيعِ الْمَسْتُورِينَ فِي ذَلِكَ؛ فَمَنْ قَبِلَ فَحَظُّهُ مِنَ الْخَيْرِ إِنْ شَاءَ اللَّهُ , وَمَنْ رَغِبَ عَنْهُ أَوْ عَنْ شَيْءٍ مِنْهُ فَنَعُوذُ بِاللَّهِ مِنْهُ , وَأَقُولُ لَهُ كَمَا قَالَ نَبِيُّ مِنْ أَنْبِيَاءِ اللَّهِ عَزَّ وَجَلَّ لِقَوْمِهِ لَمَّا نَصَحَهُمْ فَقَالَ {فَسَتَذْكُرُونَ مَا أَقُولُ لَكُمْ وَأُفَوِّضُ أَمْرِي إِلَى اللَّهِ إِنَّ اللَّهَ بَصِيرٌ بِالْعِبَادِ} [غافر: ٤٤]`,
    englishText: `al-Imām al-Muḥaddiṯh Muḥammad ibn al-Ḥusayn al-ʾĀjurrī, may Allāh be pleased with him, narrated at the end of his book al-Sẖarīʿah:

Abū al-Faḍl al-ʿAbbās ibn Yūsuf al-Sẖaklī narrated to us, he said: Ibrāhīm ibn al-Muhallab al-Zuhrī narrated to us, he said: ʿAbd Allāh ibn al-Ḥasan al-Sāḥilī narrated to us, he said: Baqiyyah ibn al-Walīd and al-Walīd ibn Muslim narrated to us, they both said: Ṯhawr ibn Yazīd narrated to us, from Kẖālid ibn Maʿdān, from Muʿādẖ ibn Jabal, may Allāh be pleased with him, he said: The Messenger of Allāh Ṣaḷḷaḷḷāhu—ʿalayhi—wa-saḷḷam said: “When innovations take place in my nation, and my Companions are reviled, then let the scholar make his knowledge manifest; so, whoever does not do that from them, then upon him be the curse of Allāh, and the Angels, and the people altogether.” So, ʿAbd Allāh ibn al-Ḥusayn said: So, I said to al-Walīd ibn Muslim: ‘What is the manifestation of knowledge?’ He said: ‘The manifestation of the Sunnah, the manifestation of the Sunnah.’¹

Muḥammad ibn al-Ḥusayn (al-ʾĀjurrī), may Allāh have mercy on him, said: I have recorded in this book, and it is the book al-Sẖarīʿah, from its beginning to its end what I know that all those al-ʾIslām has encompassed is in need to his knowledge, due to the corruption of the doctrines of many from the people. And since much from the astray desires and successive innovations have appeared [I recorded that] which I know, that the people of the truth, their souls are strengthened by it, and is a subduing rod for the People of Innovations and Misguidance according to what Allāh, Mighty and Majestic, taught me, so all praises are due to Allāh upon that.

And Abū Bakr ibn Abī Dāwūd, may Allāh have mercy on him, had recited to us a poem [which] he said concerning the Sunnah, and this is its place, and I mention it to increase the insight and strength of the people of the truth by it, ʾin sẖāʾ Allāh.

Abū Bakr ibn Abī Dāwūd dictated upon us in the Mosque of al-Raṣāfah on the Day of Friday with five [days] remaining from Sẖaʿbān, the year 309 (AH), so he said, may Allāh pardon him:²

“Hold fast to the Rope of Allāh and follow the guidance... and do not be a heretical innovator, that perhaps you succeed
And take as a religion by the Book of Allāh and the Sunan which... came forth from the Messenger of Allāh; you will be saved and profit
And say: ‘The Speech of our King is uncreated’... with that the God-fearing took as a religion and clearly articulated
And do not go to extremes regarding the Qurʾān, by suspension [of judgement] a sayer... as the followers of Jahm said and acted leniently
And do not say: ‘The Qurʾān is a creation, I recited it.’... for indeed the Speech of Allāh is made clear with utterance
And say: Allāh manifests [Himself in the Hereafter] to the creation openly... just as the full moon does not remain hidden, and your Lord is more clearer
And He is not a begotten being and He is not a begetter... and there is no likeness to Him; Exalted is the Glorified.
And the Jahmī has denied this, and with us... by confirmation of what we have said is an explicit ḥadīṯh
Jarīr³ narrated it from the saying of Muḥammad... so say the like of what he had said regarding that, you will succeed
And the Jahmī has denied, also, His right Hand... and both of His Hands flow with bounties⁴
And say: The Compellor descends during every night... without a ‘how’, Majestic is the One, the Praised
To the layer of the world bestowing favours by His grace... so the gates of the heavens are parted and opened
He says: Is there not one seeking forgiveness, [that] he meets a Forgiver... and a seeker of goodness and provision, so [that] it is bestowed?⁵
A people whose ḥadīṯh are not rejected narrated that;... Truly a people who have belied them have failed and have been reviled
And say: Indeed the best of people after Muḥammad are... his two ministers of old, then ʿUṯhmān, [and that is] the most preponderant [view]
And the fourth of them is the best of creatures after them... ʿAlī, the ally of good, successful by goodness
And indeed them, and the group [of ten], there is no doubt concerning them... upon the noble-bred she-camels of al-Firdaws in immortality roaming freely
Saʿīd and Saʿd and Ibn ʿAwf and Ṭalḥah... and ʿĀmir of Fihr and al-Zubayr the praised
And say the best speech regarding the Companions, all of them... and do not be a maligner, blaming and wounding
For the clear revelation has spoken of their virtue... and in [Surah] al-Fatḥ are verses regarding the Companions, praising [them].
And be certain of the pre-ordained decree, for it is... the pillar of the knot of the religion, and the religion is vast
And do not deny, out of ignorance, Nakīr and Munkar... nor the Prophetic Basin and the Scales; indeed you are being advised
And say: Allāh, the Magnificently Great, takes out, by His grace... from the Fire bodies of charcoal casted
Upon the river from al-Firdaws, brought to life by its water... like the seed carried [by] the flood when it comes overflowing⁶
And indeed the Messenger of Allāh is an intercessor for the creation... and say regarding the punishment of the grave: ‘[It is] the truth, explained
And do not declare the people of the prayer as disbelievers even if they transgress... for all of them transgress, and the Possessor of the Throne pardons
And do not believe in the view of the Kẖawārij, indeed it is... speech that causes the one who desires it to fall and disgraces [him]
And do not be a Murjiʾī, playing with his religion... Verily the Murjī jests with the religion
And say: Indeed belief is statement and intention... and action, upon the statement of the Prophet ﷺ, explicitly stated
And it diminishes at times through transgressions, and at times... through His obedience it grows, and in the weighing it outweighs
And forsake the opinions of men and their speech from yourself... for the statement of the Messenger of Allāh ﷺ is purer and more expansive
And do not be a people amused [themselves] with their religion... such that you revile in the People of the Ḥadīṯh and vilify
When you have believed in this [throughout] time, O my companion... then you are upon goodness [when] you spend the night and enter the morning.”

Then Abū Bakr ibn Abī Dāwūd said to us: ‘This is my saying, and the saying of my father, and the saying of ʾAḥmad ibn Ḥanbal, and the saying of who we met from the People of Knowledge and who we have not met, from those we have been informed from. So, whoever says other than this upon me, then he has lied.’

Muḥammad ibn al-Ḥusayn (al-ʾĀjurrī), may Allāh have mercy on him, said: And with this and the entirety of what I have recorded in this book of ours, and it is the book al-Sẖarīʿah, twenty-three parts, we take Allāh, Mighty and Majestic, as our religion, and we sincerely advise our brothers from the People of the Sunnah and the Congregation, from the People of the Qurʾān and the People of the Ḥadīṯh and the People of al-Fiqh and all those concealed in that. So, whoever accepts, then his share is good, ʾin sẖāʾ Allāh, and whoever turns away from it, or from a thing from it, then we seek refuge in Allāh from him, and I say to him just as a Prophet from the Prophets of Allāh, Mighty and Majestic, said to his people when he sincerely advised them, saying: “And you will remember what I am telling you, and my affair I leave it to Allāh. Verily, Allah is the All-Seer of (His) slaves.” [Ġẖāfir:44]

---
Footnotes:
1. 2075 – Its isnād: in it is weakness.

In it is ʿAbd Allāh b. al-Ḥasan al-Sāḥilī: the editor did not come across a biography for him.
And in it is Ibrāhīm b. al-Muhallab al-Zuhrī: the editor did not come across a biography for him. He has preceded in ḥadīth no. 2041.
And in it is the author's teacher. The editor did not come across his authentication (tawthīq). He has preceded in ḥadīth no. 2040.

Its takhrīj:
Ibn ʿAsākir, Ibn Razqawayh and al-Daylamī narrated it, as in al-Silsilah al-Ḍaʿīfah.
And Shaykh al-Albānī ruled it with nakārah [i.e. that it is munkar], ḥadīth no. 1506 (4/14).
And it has been narrated from the ḥadīth of Jābir, similar to it, with Ibn Mājah and others, and Shaykh al-Albānī said about it: very weak (ḍaʿīf jiddan). Al-Silsilah al-Ḍaʿīfah, ḥadīth no. 1507 (4/15).

2. The qaṣīdah is in Ṭabaqāt al-Ḥanābilah (2/53) and Siyar Aʿlām al-Nubalāʾ (13/233), and it has been printed in an independent treatise.

3. Jarīr: he is Ibn ʿAbd Allāh al-Bajalī, the eminent Companion. And his ḥadīth on the believers' seeing their Lord on the Day of Resurrection was narrated by al-Bukhārī: 2/27, in Mawāqīt al-Ṣalāh: chapter of the virtue of the ʿAṣr prayer; and 8/458, in the tafsīr of Sūrat Qāf; and 13/356, in al-Tawḥīd: chapter of the saying of Allāh, the Exalted: {Faces on that Day [will be] radiant}; and by Muslim: (633), in al-Masājid: chapter of the virtue of the two prayers of Ṣubḥ and ʿAṣr; and Abū Dāwūd: (4729), and al-Tirmidhī: (2754).

4. Aḥmad narrated: 2/160, and Muslim in al-Ṣaḥīḥ: (7127), in al-Imārah: chapter of the virtue of the just Imām, and al-Nasāʾī: 8/221, from the ḥadīth of ʿAbd Allāh b. ʿAmr, he said: The Messenger of Allāh (ﷺ) said: "Indeed the just (al-muqsiṭūn) are with Allāh upon pulpits of light, on the right of al-Raḥmān, Mighty and Majestic, and both His hands are right, those who are just in their ruling and their families and what they were given authority over."

5. And the ḥadīth of the descent of the Lord, Glorified and Exalted, to the heaven of the world when the last third of the night remains, was narrated from the ḥadīth of Abū Hurayrah by Mālik, 1/214; and al-Bukhārī: 13/389–390, in al-Tawḥīd: chapter of the saying of Allāh, the Exalted: {They wish to change the speech of Allāh}; and Muslim: (758), in Ṣalāt al-Musāfirīn: chapter of encouragement to supplication and remembrance at the end of the night; Abū Dāwūd: (1315), and al-Tirmidhī: (3498).

6. Al-Bukhārī narrated: 1/68, in al-Īmān: chapter of the superiority of the people of faith over one another, and Muslim: (184), in al-Īmān: chapter of the affirmation of intercession and the bringing out of the monotheists from the Fire, from the ḥadīth of Abū Saʿīd al-Khudrī, he said: The Messenger of Allāh (ﷺ) said: "The people of Paradise enter Paradise, and the people of the Fire [enter] the Fire, then Allāh, the Exalted, says: Bring out whoever has in his heart the weight of a mustard seed of faith. So they come out of it, having blackened, and are cast into the river of life, so they sprout as the ḥibbah sprouts at the side of the torrent. Have you not seen that it comes out yellow, twisted?" And al-ḥibbah, with kasrah on its first [letter], Abū Ḥanīfah al-Dīnawarī said: it is the plural of the seeds of plants, its singular being ḥabbah, with fatḥah. As for al-ḥabb, it is wheat and barley, its singular being ḥabbah, also with fatḥah, and they differ only in the plural.`,
    htmlText: `<div class="space-y-6 leading-relaxed">
  <div class="space-y-3">
    <p class="leading-relaxed">
      <strong class="font-semibold text-primary">al-Imām al-Muḥaddiṯh Muḥammad ibn al-Ḥusayn al-ʾĀjurrī</strong>, may Allāh be pleased with him, narrated at the end of his book <em class="italic font-medium">al-Sẖarīʿah</em>:
    </p>

    <p class="leading-relaxed">
      <em class="italic opacity-80 font-medium">Abū al-Faḍl al-ʿAbbās ibn Yūsuf al-Sẖaklī</em> narrated to us, he said: <em class="italic opacity-80 font-medium">Ibrāhīm ibn al-Muhallab al-Zuhrī</em> narrated to us, he said: <em class="italic opacity-80 font-medium">ʿAbd Allāh ibn al-Ḥasan al-Sāḥilī</em> narrated to us, he said: <em class="italic opacity-80 font-medium">Baqiyyah ibn al-Walīd</em> and <em class="italic opacity-80 font-medium">al-Walīd ibn Muslim</em> narrated to us, they both said: <em class="italic opacity-80 font-medium">Ṯhawr ibn Yazīd</em> narrated to us, from <em class="italic opacity-80 font-medium">Kẖālid ibn Maʿdān</em>, from <strong class="font-semibold text-primary">Muʿādẖ ibn Jabal</strong>, may Allāh be pleased with him, he said: The Messenger of Allāh Ṣaḷḷaḷḷāhu—ʿalayhi—wa-saḷḷam said:
    </p>

    <blockquote class="border-l-[3.5px] border-[#0B465E] pl-4 sm:pl-5 py-3 my-3 bg-slate-500/[0.04] rounded-r-lg space-y-2 font-serif leading-relaxed">
      <p class="font-bold text-[#0B465E]">
        “When innovations take place in my nation, and my Companions are reviled, then let the scholar make his knowledge manifest; so, whoever does not do that from them, then upon him be the curse of Allāh, and the Angels, and the people altogether.”
      </p>
    </blockquote>

    <p class="leading-relaxed">
      So, <em class="italic opacity-80 font-medium">ʿAbd Allāh ibn al-Ḥusayn</em> said: So, I said to <strong class="font-semibold text-primary">al-Walīd ibn Muslim</strong>: ‘What is the manifestation of knowledge?’ He said: <strong class="font-bold text-[#0B465E] dark:text-[#38bdf8]">‘The manifestation of the Sunnah, the manifestation of the Sunnah.’</strong><sup data-fn-target="fn-1" class="cursor-pointer font-bold text-[#0B465E] dark:text-[#38bdf8] hover:text-[#C19B53] dark:hover:text-amber-300 hover:underline px-0.5 align-super select-none">¹</sup>
    </p>

    <p class="leading-relaxed">
      <strong class="font-semibold text-primary">Muḥammad ibn al-Ḥusayn (al-ʾĀjurrī)</strong>, may Allāh have mercy on him, said: I have recorded in this book, and it is the book <em class="italic font-medium">al-Sẖarīʿah</em>, from its beginning to its end what I know that all those al-ʾIslām has encompassed is in need to his knowledge, due to the corruption of the doctrines of many from the people. And since much from the astray desires and successive innovations have appeared [I recorded that] which I know, that the people of the truth, their souls are strengthened by it, and is a subduing rod for the People of Innovations and Misguidance according to what Allāh, Mighty and Majestic, taught me, so all praises are due to Allāh upon that.
    </p>

    <p class="leading-relaxed">
      And <strong class="font-semibold text-primary">Abū Bakr ibn Abī Dāwūd</strong>, may Allāh have mercy on him, had recited to us a poem [which] he said concerning the <em class="italic font-semibold text-primary">Sunnah</em>, and this is its place, and I mention it to increase the insight and strength of the people of the truth by it, ʾin sẖāʾ Allāh.
    </p>

    <p class="leading-relaxed">
      <strong class="font-semibold text-primary">Abū Bakr ibn Abī Dāwūd</strong> dictated upon us in the Mosque of al-Raṣāfah on the Day of Friday with five [days] remaining from Sẖaʿbān, the year 309 (AH), so he said, may Allāh pardon him:<sup data-fn-target="fn-2" class="cursor-pointer font-bold text-[#0B465E] dark:text-[#38bdf8] hover:text-[#C19B53] dark:hover:text-amber-300 hover:underline px-0.5 align-super select-none">²</sup>
    </p>

    <blockquote class="border-l-[3.5px] border-[#0B465E] pl-4 sm:pl-5 pr-4 py-4 my-4 bg-slate-500/[0.04] rounded-r-lg space-y-3 font-serif leading-relaxed text-center italic">
      <p class="italic text-center">
        “<strong class="font-bold text-[#0B465E] dark:text-[#38bdf8]">Hold fast to the Rope of Allāh</strong> and follow the guidance... and do not be a <strong class="font-bold text-primary">heretical innovator</strong>, that perhaps you succeed
      </p>
      <p class="italic text-center">
        And take as a religion by the <strong class="font-bold text-[#0B465E] dark:text-[#38bdf8]">Book of Allāh</strong> and the <strong class="font-bold text-primary">Sunan</strong> which... came forth from the Messenger of Allāh; you will be saved and profit
      </p>
      <p class="italic text-center">
        And say: <strong class="font-bold text-[#0B465E] dark:text-[#38bdf8]">‘The Speech of our King is uncreated’</strong>... with that the <strong class="font-semibold text-primary">God-fearing</strong> took as a religion and clearly articulated
      </p>
      <p class="italic text-center">
        And do not go to extremes regarding the Qurʾān, by suspension [of judgement] a sayer... as the <strong class="font-semibold text-primary">followers of Jahm</strong> said and acted leniently
      </p>
      <p class="italic text-center">
        And do not say: <strong class="font-semibold text-primary">‘The Qurʾān is a creation, I recited it.’</strong>... for indeed the <strong class="font-bold text-[#0B465E] dark:text-[#38bdf8]">Speech of Allāh</strong> is made clear with utterance
      </p>
      <p class="italic text-center">
        And say: <strong class="font-bold text-primary">Allāh manifests [Himself in the Hereafter] to the creation openly</strong>... just as the full moon does not remain hidden, and your Lord is more clearer
      </p>
      <p class="italic text-center">
        And He is not a begotten being and He is not a begetter... and there is <strong class="font-bold text-[#0B465E] dark:text-[#38bdf8]">no likeness to Him</strong>; Exalted is the Glorified.
      </p>
      <p class="italic text-center">
        And the Jahmī has denied this, and with us... by confirmation of what we have said is an <strong class="font-bold text-[#0B465E] dark:text-[#38bdf8]">explicit ḥadīṯh</strong>
      </p>
      <p class="italic text-center">
        <strong class="font-bold text-[#0B465E] dark:text-[#38bdf8]">Jarīr</strong><sup data-fn-target="fn-3" class="cursor-pointer font-bold text-[#0B465E] dark:text-[#38bdf8] hover:text-[#C19B53] dark:hover:text-amber-300 hover:underline px-0.5 align-super select-none">³</sup> narrated it from the saying of Muḥammad... so say the like of what he had said regarding that, you will succeed
      </p>
      <p class="italic text-center">
        And the Jahmī has denied, also, <strong class="font-bold text-[#0B465E] dark:text-[#38bdf8]">His right Hand</strong>... and <strong class="font-bold text-primary">both of His Hands</strong> flow with bounties<sup data-fn-target="fn-4" class="cursor-pointer font-bold text-[#0B465E] dark:text-[#38bdf8] hover:text-[#C19B53] dark:hover:text-amber-300 hover:underline px-0.5 align-super select-none">⁴</sup>
      </p>
      <p class="italic text-center">
        And say: <strong class="font-bold text-[#0B465E] dark:text-[#38bdf8]">The Compellor descends during every night</strong>... <strong class="font-semibold text-primary">without a ‘how’</strong>, Majestic is the One, the Praised
      </p>
      <p class="italic text-center">
        To the layer of the world bestowing favours by His grace... so the gates of the heavens are parted and opened
      </p>
      <p class="italic text-center">
        He says: <strong class="font-bold text-[#0B465E] dark:text-[#38bdf8]">Is there not one seeking forgiveness</strong>, [that] he meets a Forgiver... and a seeker of goodness and provision, so [that] it is bestowed?<sup data-fn-target="fn-5" class="cursor-pointer font-bold text-[#0B465E] dark:text-[#38bdf8] hover:text-[#C19B53] dark:hover:text-amber-300 hover:underline px-0.5 align-super select-none">⁵</sup>
      </p>
      <p class="italic text-center">
        A people whose ḥadīṯh are not rejected narrated that;... Truly a people who have belied them have failed and have been reviled
      </p>
      <p class="italic text-center">
        And say: Indeed the <strong class="font-bold text-primary">best of people after Muḥammad</strong> are... his two ministers of old, then <strong class="font-bold text-[#0B465E] dark:text-[#38bdf8]">ʿUṯhmān</strong>, [and that is] the most preponderant [view]
      </p>
      <p class="italic text-center">
        And the fourth of them is the best of creatures after them... <strong class="font-bold text-[#0B465E] dark:text-[#38bdf8]">ʿAlī</strong>, the ally of good, successful by goodness
      </p>
      <p class="italic text-center">
        And indeed them, and the group [of ten], there is no doubt concerning them... upon the noble-bred she-camels of <strong class="font-bold text-primary">al-Firdaws</strong> in immortality roaming freely
      </p>
      <p class="italic text-center">
        <strong class="font-semibold text-[#0B465E] dark:text-[#38bdf8]">Saʿīd</strong> and <strong class="font-semibold text-[#0B465E] dark:text-[#38bdf8]">Saʿd</strong> and <strong class="font-semibold text-[#0B465E] dark:text-[#38bdf8]">Ibn ʿAwf</strong> and <strong class="font-semibold text-[#0B465E] dark:text-[#38bdf8]">Ṭalḥah</strong>... and <strong class="font-semibold text-[#0B465E] dark:text-[#38bdf8]">ʿĀmir of Fihr</strong> and <strong class="font-semibold text-[#0B465E] dark:text-[#38bdf8]">al-Zubayr</strong> the praised
      </p>
      <p class="italic text-center">
        And say the <strong class="font-bold text-primary">best speech regarding the Companions</strong>, all of them... and do not be a maligner, blaming and wounding
      </p>
      <p class="italic text-center">
        For the clear revelation has spoken of their virtue... and in [Surah] al-Fatḥ are verses regarding the Companions, praising [them].
      </p>
      <p class="italic text-center">
        And be certain of the <strong class="font-bold text-[#0B465E] dark:text-[#38bdf8]">pre-ordained decree</strong>, for it is... the pillar of the knot of the religion, and the religion is vast
      </p>
      <p class="italic text-center">
        And do not deny, out of ignorance, <strong class="font-bold text-primary">Nakīr and Munkar</strong>... nor the <strong class="font-bold text-[#0B465E] dark:text-[#38bdf8]">Prophetic Basin</strong> and the <strong class="font-bold text-[#0B465E] dark:text-[#38bdf8]">Scales</strong>; indeed you are being advised
      </p>
      <p class="italic text-center">
        And say: Allāh, the Magnificently Great, takes out, by His grace... from the Fire bodies of charcoal casted
      </p>
      <p class="italic text-center">
        Upon the river from <strong class="font-bold text-primary">al-Firdaws</strong>, brought to life by its water... like the seed carried [by] the flood when it comes overflowing<sup data-fn-target="fn-6" class="cursor-pointer font-bold text-[#0B465E] dark:text-[#38bdf8] hover:text-[#C19B53] dark:hover:text-amber-300 hover:underline px-0.5 align-super select-none">⁶</sup>
      </p>
      <p class="italic text-center">
        And indeed the Messenger of Allāh is an <strong class="font-bold text-[#0B465E] dark:text-[#38bdf8]">intercessor for the creation</strong>... and say regarding the punishment of the grave: <strong class="font-bold text-primary">‘[It is] the truth, explained’</strong>
      </p>
      <p class="italic text-center">
        And do not declare the people of the prayer as disbelievers even if they transgress... for all of them transgress, and the Possessor of the Throne pardons
      </p>
      <p class="italic text-center">
        And do not believe in the <strong class="font-semibold text-primary">view of the Kẖawārij</strong>, indeed it is... speech that causes the one who desires it to fall and disgraces [him]
      </p>
      <p class="italic text-center">
        And do not be a <strong class="font-semibold text-primary">Murjiʾī</strong>, playing with his religion... Verily the Murjī jests with the religion
      </p>
      <p class="italic text-center">
        And say: Indeed <strong class="font-bold text-[#0B465E] dark:text-[#38bdf8]">belief is statement and intention... and action</strong>, upon the statement of the Prophet ﷺ, explicitly stated
      </p>
      <p class="italic text-center">
        And it <strong class="font-semibold text-primary">diminishes at times</strong> through transgressions, and at times... through His obedience it <strong class="font-bold text-[#0B465E] dark:text-[#38bdf8]">grows</strong>, and in the weighing it outweighs
      </p>
      <p class="italic text-center">
        And <strong class="font-bold text-primary">forsake the opinions of men</strong> and their speech from yourself... for the statement of the Messenger of Allāh ﷺ is purer and more expansive
      </p>
      <p class="italic text-center">
        And do not be from a people amused [themselves] with their religion... such that you revile in the <strong class="font-bold text-[#0B465E] dark:text-[#38bdf8]">People of the Ḥadīṯh</strong> and vilify
      </p>
      <p class="italic text-center">
        When you have believed in this [throughout] time, O my companion... then <strong class="font-bold text-[#0B465E] dark:text-[#38bdf8]">you are upon goodness</strong> [when] you spend the night and enter the morning.”
      </p>
    </blockquote>

    <p class="mt-4 leading-relaxed">
      Then <strong class="font-semibold text-primary">Abū Bakr ibn Abī Dāwūd</strong> said to us: <strong class="font-bold text-[#0B465E] dark:text-[#38bdf8]">‘This is my saying, and the saying of my father, and the saying of ʾAḥmad ibn Ḥanbal, and the saying of who we met from the People of Knowledge and who we have not met, from those we have been informed from. So, whoever says other than this upon me, then he has lied.’</strong>
    </p>

    <p class="leading-relaxed">
      <strong class="font-semibold text-primary">Muḥammad ibn al-Ḥusayn (al-ʾĀjurrī)</strong>, may Allāh have mercy on him, said: And with this and the entirety of what I have recorded in this book of ours, and it is the book <em class="italic font-medium">al-Sẖarīʿah</em>, twenty-three parts, we take Allāh, Mighty and Majestic, as our religion, and we sincerely advise our brothers from the People of the Sunnah and the Congregation, from the People of the Qurʾān and the People of the Ḥadīṯh and the People of al-Fiqh and all those concealed in that. So, whoever accepts, then his share is good, ʾin sẖāʾ Allāh, and whoever turns away from it, or from a thing from it, then we seek refuge in Allāh from him, and I say to him just as a Prophet from the Prophets of Allāh, Mighty and Majestic, said to his people when he sincerely advised them, saying:
    </p>

    <blockquote class="border-l-[3.5px] border-[#0B465E] dark:border-[#38bdf8] pl-4 sm:pl-5 py-3 my-3 bg-slate-500/[0.04] rounded-r-lg space-y-2 font-serif leading-relaxed">
      <p class="font-bold text-[#0B465E] dark:text-[#38bdf8]">
        “And you will remember what I am telling you, and my affair I leave it to Allāh. Verily, Allah is the All-Seer of (His) slaves.” <span class="text-xs opacity-75 font-sans font-normal">[Ġẖāfir: 44]</span>
      </p>
    </blockquote>

    <!-- Footnotes Dropdown -->
    <details id="footnotes-dropdown" class="mt-8 pt-4 border-t border-[#E7DFC9] dark:border-white/10 text-slate-900 dark:text-slate-100 text-sm sm:text-base">
      <summary class="cursor-pointer font-semibold select-none text-slate-900 dark:text-slate-100 hover:text-primary dark:hover:text-[#38bdf8] py-2 text-base">
        Footnotes
      </summary>

      <div class="mt-3 space-y-4 leading-relaxed text-slate-900 dark:text-slate-100 font-sans">
        <div id="fn-1" class="space-y-1">
          <p><strong class="font-bold text-[#0B465E] dark:text-[#38bdf8]">1. 2075 – Its isnād: in it is weakness.</strong></p>
          <p>In it is ʿAbd Allāh b. al-Ḥasan al-Sāḥilī: the editor did not come across a biography for him.</p>
          <p>And in it is Ibrāhīm b. al-Muhallab al-Zuhrī: the editor did not come across a biography for him. He has preceded in ḥadīth no. 2041.</p>
          <p>And in it is the author's teacher. The editor did not come across his authentication (tawthīq). He has preceded in ḥadīth no. 2040.</p>
          <p class="pt-1"><strong class="font-bold text-[#0B465E] dark:text-[#38bdf8]">Its takhrīj:</strong></p>
          <p>Ibn ʿAsākir, Ibn Razqawayh and al-Daylamī narrated it, as in al-Silsilah al-Ḍaʿīfah.</p>
          <p>And Shaykh al-Albānī ruled it with nakārah [i.e. that it is munkar], ḥadīth no. 1506 (4/14).</p>
          <p>And it has been narrated from the ḥadīth of Jābir, similar to it, with Ibn Mājah and others, and Shaykh al-Albānī said about it: very weak (ḍaʿīf jiddan). Al-Silsilah al-Ḍaʿīfah, ḥadīth no. 1507 (4/15).</p>
        </div>

        <p id="fn-2">
          <strong class="font-bold text-[#0B465E] dark:text-[#38bdf8]">2.</strong> The qaṣīdah is in Ṭabaqāt al-Ḥanābilah (2/53) and Siyar Aʿlām al-Nubalāʾ (13/233), and it has been printed in an independent treatise.
        </p>

        <p id="fn-3">
          <strong class="font-bold text-[#0B465E] dark:text-[#38bdf8]">3.</strong> Jarīr: he is Ibn ʿAbd Allāh al-Bajalī, the eminent Companion. And his ḥadīth on the believers' seeing their Lord on the Day of Resurrection was narrated by al-Bukhārī: 2/27, in Mawāqīt al-Ṣalāh: chapter of the virtue of the ʿAṣr prayer; and 8/458, in the tafsīr of Sūrat Qāf; and 13/356, in al-Tawḥīd: chapter of the saying of Allāh, the Exalted: {Faces on that Day [will be] radiant}; and by Muslim: (633), in al-Masājid: chapter of the virtue of the two prayers of Ṣubḥ and ʿAṣr; and Abū Dāwūd: (4729), and al-Tirmidhī: (2754).
        </p>

        <p id="fn-4">
          <strong class="font-bold text-[#0B465E] dark:text-[#38bdf8]">4.</strong> Aḥmad narrated: 2/160, and Muslim in al-Ṣaḥīḥ: (7127), in al-Imārah: chapter of the virtue of the just Imām, and al-Nasāʾī: 8/221, from the ḥadīth of ʿAbd Allāh b. ʿAmr, he said: The Messenger of Allāh (ﷺ) said: “Indeed the just (al-muqsiṭūn) are with Allāh upon pulpits of light, on the right of al-Raḥmān, Mighty and Majestic, and both His hands are right, those who are just in their ruling and their families and what they were given authority over.”
        </p>

        <p id="fn-5">
          <strong class="font-bold text-[#0B465E] dark:text-[#38bdf8]">5.</strong> And the ḥadīth of the descent of the Lord, Glorified and Exalted, to the heaven of the world when the last third of the night remains, was narrated from the ḥadīth of Abū Hurayrah by Mālik, 1/214; and al-Bukhārī: 13/389–390, in al-Tawḥīd: chapter of the saying of Allāh, the Exalted: {They wish to change the speech of Allāh}; and Muslim: (758), in Ṣalāt al-Musāfirīn: chapter of encouragement to supplication and remembrance at the end of the night; Abū Dāwūd: (1315), and al-Tirmidhī: (3498).
        </p>

        <p id="fn-6">
          <strong class="font-bold text-[#0B465E] dark:text-[#38bdf8]">6.</strong> Al-Bukhārī narrated: 1/68, in al-Īmān: chapter of the superiority of the people of faith over one another, and Muslim: (184), in al-Īmān: chapter of the affirmation of intercession and the bringing out of the monotheists from the Fire, from the ḥadīth of Abū Saʿīd al-Khudrī, he said: The Messenger of Allāh (ﷺ) said: “The people of Paradise enter Paradise, and the people of the Fire [enter] the Fire, then Allāh, the Exalted, says: Bring out whoever has in his heart the weight of a mustard seed of faith. So they come out of it, having blackened, and are cast into the river of life, so they sprout as the ḥibbah sprouts at the side of the torrent. Have you not seen that it comes out yellow, twisted?” And al-ḥibbah, with kasrah on its first [letter], Abū Ḥanīfah al-Dīnawarī said: it is the plural of the seeds of plants, its singular being ḥabbah, with fatḥah. As for al-ḥabb, it is wheat and barley, its singular being ḥabbah, also with fatḥah, and they differ only in the plural.
        </p>
      </div>
    </details>
  </div>
</div>`,
    citation: "al-Sẖarīʿah — Muḥammad ibn al-Ḥusayn al-ʾĀjurrī — 5/2562–2566",
    imageUrl: "/haiyyah scan 1.png",
    scanImages: ["/haiyyah scan 1.png", "/haiyyah scan 2.png"],
    dateAdded: "2026-09-29"
  },
  {
    id: "41",
    translator: "Abu_Talhah",
    translatorName: "Abū ʿUbaydillāh al-Qarārī",
    category: "ʿAqīdah",
    type: "quote",
    title: "Sit With Us; Let Us Believe for an Hour",
    speaker: "Muʿādh ibn Jabal (d. 18H)",
    author: "Imām ʿAbdullāh ibn Aḥmad ibn Ḥanbal (d. 290H)",
    summary: "Muʿādh ibn Jabal invites his companion to sit and remember Allāh together so that their faith may increase, establishing that Īmān increases through obedience and remembrance.",
    arabicText: `حَدَثَنِي أَبِي، نا وَكِيعٌ، نا الأَعمَش، وَمِسعَرٌ، عَن جَامِعِ بنِ شَدَادٍ، عَنِ الأَسوَدِ بنِ هِلَالٍ، قَالَ: قَالَ معَاذٌ:

«اجلِس بِنَا نؤمِن سَاعَةً»`,
    englishText: `ʿAbduḷḷāh b. ʾAḥmad narrated:

My father narrated to me; Wakīʿ narrated to us; al-ʾAʿmash and Misʿar narrated to us, from Jāmiʿ b. Shaddād, from al-ʾAswad b. Hilāl, who said: Muʿādh said:

“Sit with us; let us believe for an hour.”`,
    htmlText: `<div class="space-y-6 leading-relaxed">
  <div class="space-y-3">
    <p class="leading-relaxed">
      <strong class="font-semibold text-primary">ʿAbduḷḷāh b. ʾAḥmad</strong> narrated:
    </p>

    <p class="leading-relaxed opacity-90">
      <em class="italic opacity-80 font-medium">My father [ʾAḥmad ibn Ḥanbal]</em> narrated to me; <em class="italic opacity-80 font-medium">Wakīʿ</em> narrated to us; <em class="italic opacity-80 font-medium">al-ʾAʿmash</em> and <em class="italic opacity-80 font-medium">Misʿar</em> narrated to us, from <em class="italic opacity-80 font-medium">Jāmiʿ b. Shaddād</em>, from <em class="italic opacity-80 font-medium">al-ʾAswad b. Hilāl</em>, who said: <strong class="font-semibold text-primary">Muʿādh</strong> said:
    </p>

    <blockquote class="border-l-[3.5px] border-[#0B465E] pl-4 sm:pl-5 py-3 my-3 bg-slate-500/[0.04] rounded-r-lg space-y-3 font-serif leading-relaxed">
      <p class="text-lg sm:text-xl font-bold text-[#0B465E] dark:text-[#38bdf8]">
        “Sit with us; let us believe for an hour.”
      </p>
    </blockquote>
  </div>
</div>`,
    citation: "al-Sunnah — ʿAbduḷḷāh b. ʾAḥmad — n° 796",
    imageUrl: "/mu'adh scan.png",
    scanImages: ["/mu'adh scan.png"],
    dateAdded: "2026-09-30"
  }
];


