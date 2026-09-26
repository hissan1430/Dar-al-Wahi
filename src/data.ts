import { sunnahPages } from './data/sunnah';
import { deathPages } from './data/death';

export type Translator = 'Abu_Mundhir' | 'Abu_Talhah' | 'None';

export const CATEGORIES = [
  "ʿAqīdah",
  "Uṣool",
  "Ḥadīth",
  "Heart-Softeners",
  "Miscellaneous"
] as const;

export type Category = typeof CATEGORIES[number];
export type ContentType = 'quote' | 'pdf' | 'short treatise' | 'article' | 'video' | 'audio';

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
  }
];

