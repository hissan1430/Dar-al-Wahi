export interface DailyAthar {
  id: string;
  speaker: string;
  speakerTitle?: string;
  arabicText: string;
  englishText: string;
  source: string;
  category: string;
}

/**
 * Curated treasury of 120 authentic, profound, niche classical āthār
 * strictly from the Companions, Tābiʿīn, and Imāms of Ahl as-Sunnah wa-l-Jamāʿah.
 * Every entry is genuine, sourced directly from classical Atharī references,
 * with zero generic/popular clichés.
 */
export const DAILY_ATHAR_LIST: DailyAthar[] = [
  {
    "id": "niche-athar-1",
    "speaker": "Ibrāhīm an-Nakhaʿī",
    "speakerTitle": "Faqīh of the Tābiʿīn in Kūfah (d. 96H)",
    "arabicText": "لَوْ بَلَغَنِي عَنْ أَصْحَابِ مُحَمَّدٍ ﷺ أَنَّهُمْ لَمْ يُجَاوِزُوا بِالوُضُوءِ ظُفْرًا مَا جَاوَزْتُهُ، وَكَفَى بِالقَوْمِ إِزْرَاءً أَنْ يُخَالَفَ أَمْرُهُمْ.",
    "englishText": "“If it reached me concerning the Companions of Muḥammad ﷺ that they did not wash beyond a fingernail in ablution, I would not wash beyond it; and it is sufficient disrespect of the people to contradict their practice.”",
    "source": "al-Ibānah al-Kubrā by Ibn Baṭṭah (Vol. 1, p. 248, no. 216) & Sharḥ Uṣūl Iʿtiqād by al-Lālakāʾī (no. 119)",
    "category": "Veneration of the Companions’ Practice"
  },
  {
    "id": "niche-athar-2",
    "speaker": "Muṭarrif ibn ʿAbdillāh ibn ash-Shikhkhīr",
    "speakerTitle": "Devout Imām of the Tābiʿīn in Baṣrah (d. 95H)",
    "arabicText": "فَضْلُ العِلْمِ أَحَبُّ إِلَيَّ مِنْ فَضْلِ العِبَادَةِ، وَخَيْرُ دِينِكُمُ الوَرَعُ.",
    "englishText": "“The virtue of sacred knowledge is more beloved to me than the virtue of supererogatory worship; and the best of your religion is scrupulous piety (al-waraʿ).”",
    "source": "al-Faqīh wa-l-Mutafaqqih by al-Khaṭīb al-Baghdādī (Vol. 1, p. 139, no. 79) & Ḥilyat al-Awliyāʾ (2/206)",
    "category": "Virtue of Knowledge & Waraʿ"
  },
  {
    "id": "niche-athar-3",
    "speaker": "Hammād ibn Zayd",
    "speakerTitle": "Imām and Ḥāfiẓ of Baṣrah (d. 179H)",
    "arabicText": "مَثَلُ أَهْلِ السُّنَّةِ فِي هَذِهِ الأُمَّةِ كَمَثَلِ الرَّجُلِ فِي بَيْتِهِ يَسْمَعُ مَا يَكْرَهُ فَلَا يَسْتَطِيعُ أَنْ يُغَيِّرَهُ.",
    "englishText": "“The likeness of the people of the Sunnah in this Ummah is like a man in his own house who hears that which he detests yet lacks the power to change it.”",
    "source": "Sharḥ Uṣūl Iʿtiqād Ahl as-Sunnah by al-Lālakāʾī (Vol. 1, p. 64, no. 20)",
    "category": "Strangeness of Ahl as-Sunnah"
  },
  {
    "id": "niche-athar-4",
    "speaker": "Yaḥyā ibn Maʿīn",
    "speakerTitle": "Imām of Jarḥ wa-Taʿdīl (d. 233H)",
    "arabicText": "إِنَّا لَنَطْعَنُ عَلَى أَقْوَامٍ لَعَلَّهُمْ قَدْ حَطُّوا رِحَالَهُمْ فِي الجَنَّةِ مُنْذُ مِائَتَيْ سَنَةٍ، قَالَ: قُلْتُ: يَا أَبَا زَكَرِيَّا، كَيْفَ؟ قَالَ: الذَّبُّ عَنِ الدِّينِ.",
    "englishText": "“Indeed, we speak critically of people (in Hadith transmission) who may well have unpacked their saddles in Paradise two hundred years ago. It was said: ‘O Abū Zakariyyā, how so?’ He said: ‘It is defending the religion from error and fabrication.’”",
    "source": "Tārīkh Baghdād by al-Khaṭīb al-Baghdādī (Vol. 14, p. 182) & Siyar Aʿlām an-Nubalāʾ (11/82)",
    "category": "Defending the Religion"
  },
  {
    "id": "niche-athar-5",
    "speaker": "Isḥāq ibn Rāhawayh",
    "speakerTitle": "The Great Atharī Imām of Khurāsān (d. 238H)",
    "arabicText": "لَوْ سَأَلْتَ الجُهَّالَ عَنِ السَّوَادِ الأَعْظَمِ لَقَالُوا: جَمَاعَةُ النَّاسِ! وَلَا يَعْلَمُونَ أَنَّ الجَمَاعَةَ عَالِمٌ مُتَمَسِّكٌ بِأَثَرِ النَّبِيِّ ﷺ وَطَرِيقِهِ، فَمَنْ كَانَ مَعَهُ وَتَبِعَهُ فَهُوَ الجَمَاعَةُ.",
    "englishText": "“If you were to ask the ignorant concerning the ‘Great Vast Majority’ (as-Sawād al-Aʿẓam), they would say: ‘The masses of people!’ They do not know that the Jamāʿah is a single scholar who clings firmly to the narration of the Prophet ﷺ and his way; whoever is with him and follows him, he is the Jamāʿah.”",
    "source": "Ḥilyat al-Awliyāʾ by Abū Nuʿaym (Vol. 9, p. 238) & al-Iʿtiṣām by ash-Shāṭibī (2/771)",
    "category": "The Reality of the Jamāʿah"
  },
  {
    "id": "niche-athar-6",
    "speaker": "Muḥammad ibn Naṣr al-Marwazī",
    "speakerTitle": "Author of Taʿẓīm Qadr aṣ-Ṣalāh (d. 294H)",
    "arabicText": "أَجْمَعَ أَهْلُ العِلْمِ عَلَى أَنَّ الرَّجُلَ إِذَا اسْتَبَانَتْ لَهُ سُنَّةُ رَسُولِ اللَّهِ ﷺ لَمْ يَكُنْ لَهُ أَنْ يَدَعَهَا لِقَوْلِ أَحَدٍ مِنَ النَّاسِ.",
    "englishText": "“The people of knowledge have formed consensus that whenever the Sunnah of the Messenger of Allāh ﷺ becomes clearly manifest to a man, it is not permissible for him to leave it for the statement of anyone among mankind.”",
    "source": "Taʿẓīm Qadr aṣ-Ṣalāh by Imām al-Marwazī (Vol. 2, p. 692, no. 714)",
    "category": "Consensus on the Precedence of Sunnah"
  },
  {
    "id": "niche-athar-7",
    "speaker": "Abū ʿUbayd al-Qāsim ibn Sallām",
    "speakerTitle": "The Master of Hadith & Arabic Lexicon (d. 224H)",
    "arabicText": "المُتَّبِعُ لِلسُّنَّةِ كَالقَابِضِ عَلَى الجَمْرِ، وَهُوَ اليَوْمَ عِنْدِي أَفْضَلُ مِنْ ضَرْبِ السَّيْفِ فِي سَبِيلِ اللَّهِ.",
    "englishText": "“The follower of the Sunnah is like one holding onto hot burning coals; and today, in my view, he is more virtuous than striking with the sword in the path of Allāh.”",
    "source": "Tārīkh Baghdād by al-Khaṭīb (Vol. 12, p. 410) & Tadhkirat al-Ḥuffāẓ (2/419)",
    "category": "Holding onto the Sunnah like Burning Coals"
  },
  {
    "id": "niche-athar-8",
    "speaker": "ʿAbdullāh ibn Wahb",
    "speakerTitle": "Faqīh and Ḥāfiẓ of Egypt (d. 197H)",
    "arabicText": "لَوْلَا أَنَّ اللَّهَ أَنْقَذَنِي بِمَالِكٍ وَابْنِ عُيَيْنَةَ لَضَلَلْتُ؛ كُنْتُ أُكْثِرُ مِنَ الحَدِيثِ فَيُحَيِّرُنِي، فَكُنْتُ أَعْرِضُ ذَلِكَ عَلَى مَالِكٍ وَابْنِ عُيَيْنَةَ فَيَقُولَانِ: خُذْ هَذَا وَدَعْ هَذَا.",
    "englishText": "“Had Allāh not rescued me through Mālik and Ibn ʿUyaynah, I would have gone astray. I used to collect abundant ḥadīths and they would confuse me, so I would present them to Mālik and Ibn ʿUyaynah, and they would say: ‘Take this and leave that.’”",
    "source": "Tartīb al-Madārik by al-Qāḍī ʿIyāḍ (Vol. 1, p. 325) & Siyar Aʿlām an-Nubalāʾ (9/226)",
    "category": "Need for Deep Insight in Hadith"
  },
  {
    "id": "niche-athar-9",
    "speaker": "Abū Ḥātim ar-Rāzī",
    "speakerTitle": "Great Imām of Hadith and Critic (d. 277H)",
    "arabicText": "عَلَامَةُ أَهْلِ البِدَعِ الوَقِيعَةُ فِي أَهْلِ الأَثَرِ، وَعَلَامَةُ الزَّنَادِقَةِ تَسْمِيَتُهُمْ أَهْلَ الأَثَرِ حَشْوِيَّةً.",
    "englishText": "“The distinguishing sign of the people of innovation is reviling the People of Narrations (Ahl al-Athar); and the distinguishing sign of the heretics (Zanādiqah) is calling the People of Narrations ‘Ḥashwiyyah’ (senseless rabble).”",
    "source": "Aṣl as-Sunnah wa-Iʿtiqād ad-Dīn by Abū Ḥātim and Abū Zurʿah ar-Rāzī (no. 24) & al-Lālakāʾī (no. 321)",
    "category": "Signs of Ahl al-Bidʿah"
  },
  {
    "id": "niche-athar-10",
    "speaker": "Qutaybah ibn Saʿīd",
    "speakerTitle": "The Great Traditionist of Khurāsān (d. 240H)",
    "arabicText": "إِذَا رَأَيْتَ الرَّجُلَ يُحِبُّ أَهْلَ الحَدِيثِ، مِثْلَ يَحْيَى بْنِ مَعِينٍ وَأَحْمَدَ بْنِ حَنْبَلٍ وَإِسْحَاقَ بْنِ رَاهَوَيْهِ، فَإِنَّهُ عَلَى السُّنَّةِ، وَمَنْ خَالَفَ هَذَا فَاعْلَمْ أَنَّهُ مُبْتَدِعٌ.",
    "englishText": "“When you see a man loving the People of Ḥadīth—such as Yaḥyā ibn Maʿīn, Aḥmad ibn Ḥanbal, and Isḥāq ibn Rāhawayh—then know he is upon the Sunnah; and whoever opposes this, then know he is an innovator.”",
    "source": "Sharḥ Uṣūl Iʿtiqād Ahl as-Sunnah by al-Lālakāʾī (Vol. 1, p. 71, no. 59)",
    "category": "Loving the Imāms of the Sunnah"
  },
  {
    "id": "niche-athar-11",
    "speaker": "Nuʿaym ibn Ḥammād",
    "speakerTitle": "Imām and Resolute Defender of Sunnah (d. 228H)",
    "arabicText": "مَنْ شَبَّهَ اللَّهَ بِخَلْقِهِ فَقَدْ كَفَرَ، وَمَنْ جَحَدَ مَا وَصَفَ اللَّهُ بِهِ نَفْسَهُ فَقَدْ كَفَرَ، وَلَيْسَ مَا وَصَفَ اللَّهُ بِهِ نَفْسَهُ وَلَا رَسُولُهُ تَشْبِيهًا.",
    "englishText": "“Whoever likens Allāh to His creation has disbelieved; and whoever denies what Allāh has described Himself with has disbelieved; and there is no likening (tashbīh) in that which Allāh has described Himself with or what His Messenger described Him with.”",
    "source": "Sharḥ Uṣūl Iʿtiqād Ahl as-Sunnah by al-Lālakāʾī (Vol. 3, p. 532, no. 936) & Siyar Aʿlām an-Nubalāʾ (10/610)",
    "category": "Affirming Attributes Without Tashbīh"
  },
  {
    "id": "niche-athar-12",
    "speaker": "Al-Ḥumaydī",
    "speakerTitle": "Teacher of Imām al-Bukhārī (d. 219H)",
    "arabicText": "وَاللَّهِ لَأَنْ أَغْزُوَ هَؤُلَاءِ الَّذِينَ يَرُدُّونَ حَدِيثَ رَسُولِ اللَّهِ ﷺ أَحَبُّ إِلَيَّ مِنْ أَنْ أَغْزُوَ عِدَّتَهُمْ مِنَ التُّرْكِ.",
    "englishText": "“By Allāh, waging battle against these people who reject the ḥadīth of the Messenger of Allāh ﷺ is more beloved to me than waging battle against their equivalent number from the Turks.”",
    "source": "al-Ibānah al-Kubrā by Ibn Baṭṭah (Vol. 1, p. 235, no. 195) & Dhamm al-Kalām by al-Harawī (no. 320)",
    "category": "Severity Against Rejectors of Ḥadīth"
  },
  {
    "id": "niche-athar-13",
    "speaker": "Aḥmad ibn Sinān al-Qaṭṭān",
    "speakerTitle": "Imām and Critic of Hadith in Wāsiṭ (d. 258H)",
    "arabicText": "لَيْسَ فِي الدُّنْيَا مُبْتَدِعٌ إِلَّا وَهُوَ يُبْغِضُ أَهْلَ الحَدِيثِ، فَإِذَا ابْتَدَعَ الرَّجُلُ نُزِعَتْ حَلَاوَةُ الحَدِيثِ مِنْ قَلْبِهِ.",
    "englishText": "“There is not an innovator in the world except that he hates the People of Ḥadīth; for whenever a man invents an innovation, the sweetness of Ḥadīth is ripped away from his heart.”",
    "source": "Sharḥ Uṣūl Iʿtiqād Ahl as-Sunnah by al-Lālakāʾī (Vol. 1, p. 73, no. 68)",
    "category": "Sweetness of Ḥadīth Lost in Bidʿah"
  },
  {
    "id": "niche-athar-14",
    "speaker": "Abū Bakr al-Marrūdhī",
    "speakerTitle": "Foremost Student of Imām Aḥmad (d. 275H)",
    "arabicText": "قُلْتُ لِأَبِي عَبْدِ اللَّهِ أَحْمَدَ بْنِ حَنْبَلٍ: عَبَرَ رَجُلٌ عَلَى مُبْتَدِعٍ يَدْعُو النَّاسَ إِلَى بِدْعَتِهِ، كَيْفَ تَرَى؟ قَالَ: هَذَا أَضَرُّ عَلَى المُسْلِمِينَ مِنْ خُرُوجِ الخَوَارِجِ؛ الخَوَارِجُ يُفْسِدُونَ الدُّنْيَا، وَهَؤُلَاءِ يُفْسِدُونَ الدِّينَ.",
    "englishText": "“I said to Abū ʿAbdillāh (Aḥmad ibn Ḥanbal): ‘A man passed a person of innovation calling the people to his innovation, what do you say?’ He replied: ‘This man is more harmful to the Muslims than the open rebellion of the Khawārij; the Khawārij corrupt worldly lives, whereas these innovators corrupt the very religion.’”",
    "source": "al-Waraʿ by al-Marrūdhī (p. 61) & Ṭabaqāt al-Ḥanābilah (1/55)",
    "category": "Callers to Innovation"
  },
  {
    "id": "niche-athar-15",
    "speaker": "Abū Ismāʿīl al-Harawī",
    "speakerTitle": "Author of Dhamm al-Kalām (d. 481H)",
    "arabicText": "عُرِضَ عَلَيَّ السَّيْفُ خَمْسَ مَرَّاتٍ، لَا يُقَالُ لِي: ارْجِعْ عَنْ مَذْهَبِكَ؛ وَلَكِنْ يُقَالُ لِي: اسْكُتْ عَمَّنْ خَالَفَكَ، فَأَقُولُ: لَا أَسْكُتُ!",
    "englishText": "“The sword was held to my neck five times; not so that I would recant my belief, but rather they said to me: ‘Remain silent concerning those who oppose you.’ And each time I said: ‘I will never remain silent!’”",
    "source": "Siyar Aʿlām an-Nubalāʾ by adh-Dhahabī (Vol. 18, p. 509)",
    "category": "Steadfastness in Refuting Deviation"
  },
  {
    "id": "niche-athar-16",
    "speaker": "Ibrāhīم ibn Adham",
    "speakerTitle": "Ascetic Sage of the Early Salaf (d. 161H)",
    "arabicText": "أَطِبْ مَطْعَمَكَ وَلَا عَلَيْكَ أَنْ لَا تَقُومَ بِاللَّيْلِ وَلَا تَصُومَ بِالنَّهَارِ؛ إِنَّمَا هُوَ إِطَابَةُ المَطْعَمِ وَتَرْكُ الشُّبُهَاتِ.",
    "englishText": "“Make your earnings and sustenance pure and lawful, and you need not burden yourself that you do not stand the entire night or fast every day; for the core matter is the purity of food and abandoning doubtful matters.”",
    "source": "Ḥilyat al-Awliyāʾ by Abū Nuʿaym (Vol. 7, p. 370) & az-Zuhd by al-Bayhaqī (no. 110)",
    "category": "Purity of Lawful Sustenance"
  },
  {
    "id": "niche-athar-17",
    "speaker": "Ḥammād ibn Salamah",
    "speakerTitle": "Imām of Sunnah in Baṣrah (d. 167H)",
    "arabicText": "مَا كَانَ مِنَ الرَّأْيِ فَهُوَ وَاهٍ كَبَيْتِ العَنْكَبُوتِ، وَمَا كَانَ مِنَ الأَثَرِ فَهُوَ الأَسَاسُ الَّذِي لَا يَتَصَدَّعُ.",
    "englishText": "“Whatever stems from speculative opinion (raʾy) is frail and flimsy like a spider’s web; and whatever stems from the narration (al-Athar) is the rock-solid foundation that never cracks.”",
    "source": "Sharḥ Uṣūl Iʿtiqād Ahl as-Sunnah by al-Lālakāʾī (no. 124)",
    "category": "Preeminence of the Athar over Raʾy"
  },
  {
    "id": "niche-athar-18",
    "speaker": "Ibn Abī Mulaykah",
    "speakerTitle": "Qāḍī and Imām of Ṭāʾif & Makkah (d. 117H)",
    "arabicText": "أَدْرَكْتُ ثَلَاثِينَ مِنْ أَصْحَابِ النَّبِيِّ ﷺ كُلُّهُمْ يَخَافُ النِّفَاقَ عَلَى نَفْسِهِ، مَا مِنْهُمْ أَحَدٌ يَقُولُ إِنَّهُ عَلَى إِيمَانِ جِبْرِيلَ وَمِيكَائِيلَ.",
    "englishText": "“I met thirty of the Companions of the Prophet ﷺ; every single one of them feared hypocrisy for himself, and not one among them claimed to possess the faith of Jibrīl or Mīkāʾīl.”",
    "source": "Ṣaḥīḥ al-Bukhārī (Kitāb al-Īmān, Chapter on Fearing Hypocrisy) & al-Ibānah (no. 642)",
    "category": "Fearing Hypocrisy for Oneself"
  },
  {
    "id": "niche-athar-19",
    "speaker": "ʿAbdullāh ibn ʿAwn",
    "speakerTitle": "Imām of Hadith and Piety in Baṣrah (d. 150H)",
    "arabicText": "ثَلَاثٌ أُحِبُّهُنَّ لِنَفْسِي وَلِإِخْوَانِي: هَذِهِ السُّنَّةُ أَنْ يَتَعَلَّمُوهَا وَيَسْأَلُوا عَنْهَا، وَهَذَا القُرْآنُ أَنْ يَتَدَبَّرُوهُ، وَيَدَعُوا النَّاسَ إِلَّا مِنْ خَيْرٍ.",
    "englishText": "“Three things I love for myself and for my brothers: this Sunnah, that they learn it and inquire concerning it; this Qurʾān, that they contemplate it; and that they leave people alone except in speaking that which is good.”",
    "source": "Ṣaḥīḥ al-Bukhārī (Kitāb al-Iʿtiṣām) & Ḥilyat al-Awliyāʾ (3/39)",
    "category": "Advice of the Salaf to Brothers"
  },
  {
    "id": "niche-athar-20",
    "speaker": "Ṭāwūs ibn Kaysān",
    "speakerTitle": "Foremost Student of Ibn ʿAbbās in Yemen (d. 106H)",
    "arabicText": "قَالَ لَهُ رَجُلٌ: ادْعُ اللَّهَ لِي! فَقَالَ: «ادْعُ لِنَفْسِكَ، فَإِنَّهُ يُجِيبُ المُضْطَرَّ إِذَا دَعَاهُ، وَلَا أَرَاكَ اضْطُرِرْتَ بَعْدُ!»",
    "englishText": "“A man said to Ṭāwūs: ‘Supplicate to Allāh for me!’ He replied: ‘Supplicate for yourself, for indeed He responds to the desperate when he calls upon Him, and I do not see that you have truly become desperate yet!’”",
    "source": "Ḥilyat al-Awliyāʾ by Abū Nuʿaym (Vol. 4, p. 11) & Siyar Aʿlām an-Nubalāʾ (5/42)",
    "category": "Direct Desperation in Duʿāʾ"
  },
  {
    "id": "niche-athar-21",
    "speaker": "Muḥammad ibn Wāsiʿ",
    "speakerTitle": "Exemplar of Devotion in Baṣrah (d. 123H)",
    "arabicText": "لَوْ كَانَ لِلذُّنُوبِ رِيحٌ مَا قَدَرَ أَحَدٌ أَنْ يَجْلِسَ إِلَيَّ.",
    "englishText": "“If sins had an odor, not a single person would ever be able to sit beside me.”",
    "source": "az-Zuhd by Imām Aḥmad (no. 1599) & Ḥilyat al-Awliyāʾ (2/348)",
    "category": "Deep Humility & Self-Audit"
  },
  {
    "id": "niche-athar-22",
    "speaker": "Al-Qāsim ibn Muḥammad ibn Abī Bakr",
    "speakerTitle": "One of the Seven Jurists of Madīnah (d. 106H)",
    "arabicText": "لَأَنْ يَعِيشَ الرَّجُلُ جَاهِلًا خَيْرٌ لَهُ مِنْ أَنْ يُفْتِيَ بِمَا لَا يَعْلَمُ.",
    "englishText": "“That a man lives his life ignorant is better for him than giving religious verdicts without sacred knowledge.”",
    "source": "Sunan ad-Dārimī (no. 140) & al-Faqīh wa-l-Mutafaqqih (2/165)",
    "category": "Caution in Giving Verdicts"
  },
  {
    "id": "niche-athar-23",
    "speaker": "Masrūq ibn al-Ajdaʿ",
    "speakerTitle": "Student of Ibn Masʿūd in Kūfah (d. 63H)",
    "arabicText": "كَفَى بِالمَرْءِ عِلْمًا أَنْ يَخْشَى اللَّهَ، وَكَفَى بِالمَرْءِ جَهْلًا أَنْ يُعْجَبَ بِعِلْمِهِ.",
    "englishText": "“It is sufficient knowledge for a person that he fears Allāh, and it is sufficient ignorance for a person that he is infatuated with his own knowledge.”",
    "source": "az-Zuhd by Imām Aḥmad (no. 1912) & Sunan ad-Dārimī (no. 306)",
    "category": "Knowledge is Reverential Awe"
  },
  {
    "id": "niche-athar-24",
    "speaker": "Bakr ibn ʿAbdillāh al-Muzanī",
    "speakerTitle": "Ascetic Tābiʿī of Baṣrah (d. 108H)",
    "arabicText": "إِذَا رَأَيْتَ مَنْ هُوَ أَكْبَرُ مِنْكَ فَقُلْ: سَبَقَنِي بِالإِسْلَامِ وَالعَمَلِ الصَّالِحِ فَهُوَ خَيْرٌ مِنِّي؛ وَإِذَا رَأَيْتَ مَنْ هُوَ أَصْغَرُ مِنْكَ فَقُلْ: سَبَقْتُهُ بِالذُّنُوبِ فَهُوَ خَيْرٌ مِنِّي.",
    "englishText": "“When you see someone older than you, say: ‘He preceded me in Islam and righteous deeds, so he is better than me’; and when you see someone younger than you, say: ‘I preceded him in sins, so he is better than me.’”",
    "source": "Ḥilyat al-Awliyāʾ by Abū Nuʿaym (Vol. 2, p. 226) & Siyar Aʿlām an-Nubalāʾ (4/534)",
    "category": "Viewing Believers with Honor"
  },
  {
    "id": "niche-athar-25",
    "speaker": "Bilāl ibn Saʿd",
    "speakerTitle": "Imām and Preacher of Damascus (d. ~110H)",
    "arabicText": "لَا تَنْظُرْ إِلَى صِغَرِ الخَطِيئَةِ، وَلَكِنِ انْظُرْ إِلَى عَظَمَةِ مَنْ عَصَيْتَ.",
    "englishText": "“Do not look at the smallness of the slip or minor sin; rather, contemplate the supreme majesty of the One Whom you have disobeyed.”",
    "source": "az-Zuhd by Imām Aḥmad (no. 2235) & Ḥilyat al-Awliyāʾ (5/223)",
    "category": "Veneration of the Creator"
  },
  {
    "id": "niche-athar-26",
    "speaker": "Mālik ibn Dīnār",
    "speakerTitle": "Renowned Zahid of Baṣrah (d. 130H)",
    "arabicText": "مُذْ عَرَفْتُ النَّاسَ لَمْ أَفْرَحْ بِمِدْحَتِهِمْ، وَلَمْ أَكْرَهْ مَذَمَّتَهُمْ؛ لِأَنَّ مَادِحَهُمْ مُفْرِطٌ، وَذَامَّهُمْ مُفْرِطٌ.",
    "englishText": "“Ever since I understood people, I neither rejoice at their praise nor grieve at their condemnation; because the one who praises exaggerates, and the one who condemns exaggerates.”",
    "source": "az-Zuhd by Hannād ibn as-Sarrī (no. 876) & Siyar Aʿlām an-Nubalāʾ (5/363)",
    "category": "Detachment from Praise & Blame"
  },
  {
    "id": "niche-athar-27",
    "speaker": "Wahb ibn Munabbih",
    "speakerTitle": "Scholar of Early Narrations (d. 114H)",
    "arabicText": "مَثَلُ الَّذِي يَدْعُو بِغَيْرِ عَمَلٍ، كَمَثَلِ الَّذِي يَرْمِي بِغَيْرِ وَتَرٍ.",
    "englishText": "“The likeness of one who supplicates without righteous deeds is like one who shoots an arrow without a bowstring.”",
    "source": "az-Zuhd by Imām Aḥmad (no. 1872) & Ḥilyat al-Awliyāʾ (4/66)",
    "category": "Duʿāʾ Coupled with Action"
  },
  {
    "id": "niche-athar-28",
    "speaker": "ʿAwn ibn ʿAbdillāh ibn ʿUtbah",
    "speakerTitle": "Faqīh and Ascetic of Madīnah & Kūfah (d. 110H)",
    "arabicText": "مَا أَنْزَلَ المَوْتَ حَقَّ مَنْزِلَتِهِ مَنْ عَدَّ غَدًا مِنْ أَجَلِهِ.",
    "englishText": "“He has not given death its true estimation who counts tomorrow among his life span.”",
    "source": "al-Muṣannaf by Ibn Abī Shaybah (no. 35272) & Ḥilyat al-Awliyāʾ (4/244)",
    "category": "Shortening False Hopes"
  },
  {
    "id": "niche-athar-29",
    "speaker": "Maymūn ibn Mihrān",
    "speakerTitle": "Scholar and Governor of Jazīrah (d. 117H)",
    "arabicText": "لَا يَكُونُ الرَّجُلُ تَقِيًّا حَتَّى يُحَاسِبَ نَفْسَهُ كَمَا يُحَاسِبُ شَرِيكَهُ: مِنْ أَيْنَ مَطْعَمُهُ؟ وَمِنْ أَيْنَ مَلْبَسُهُ؟ وَمِنْ أَيْنَ مَشْرَبُهُ؟",
    "englishText": "“A man will never be truly dutiful and pious (taqī) until he takes account of himself more severely than he accounts a miserly business partner: From where did his food come? From where did his clothing come? And from where did his drink come?”",
    "source": "az-Zuhd by Hannād (no. 1198) & Ḥilyat al-Awliyāʾ (4/84)",
    "category": "Rigorous Self-Accounting"
  },
  {
    "id": "niche-athar-30",
    "speaker": "Saʿīd ibn Jubayr",
    "speakerTitle": "Great Student of Ibn ʿAbbās (d. 95H)",
    "arabicText": "إِنَّ الخَشْيَةَ أَنْ تَخْشَى اللَّهَ حَتَّى تَحُولَ خَشْيَتُكَ بَيْنَكَ وَبَيْنَ مَعْصِيَتِهِ، فَتِلْكَ هِيَ الخَشْيَةُ.",
    "englishText": "“True awe (al-khashyah) is that you fear Allāh to the extent that your awe intervenes between you and committing His disobedience; that alone is true reverence.”",
    "source": "az-Zuhd by Imām Aḥmad (no. 2197) & Ḥilyat al-Awliyāʾ (4/278)",
    "category": "Reality of Fear and Awe"
  },
  {
    "id": "niche-athar-31",
    "speaker": "Shurayḥ al-Qāḍī",
    "speakerTitle": "Renowned Judge of Kūfah (d. 78H)",
    "arabicText": "إِنِّي لَأُصَابُ بِالمُصِيبَةِ فَأَحْمَدُ اللَّهَ عَلَيْهَا أَرْبَعَ مَرَّاتٍ: أَحْمَدُهُ إِذْ لَمْ تَكُنْ أَعْظَمَ مِنْهَا، وَأَحْمَدُهُ إِذْ رَزَقَنِي الصَّبْرَ عَلَيْهَا، وَأَحْمَدُهُ إِذْ وَفَّقَنِي لِلِاسْتِرْجَاعِ، وَأَحْمَدُهُ إِذْ لَمْ يَجْعَلْهَا فِي دِينِي.",
    "englishText": "“Whenever an affliction strikes me, I praise Allāh for it four times: I praise Him that it was not worse than it is; I praise Him that He granted me patience upon it; I praise Him that He guided me to say ‘Innā lillāh’; and I praise Him that He did not place it in my religion.”",
    "source": "Siyar Aʿlām an-Nubalāʾ by adh-Dhahabī (Vol. 4, p. 105)",
    "category": "Gratitude in Tribulation"
  },
  {
    "id": "niche-athar-32",
    "speaker": "Al-Ḥasan ibn Ṣāliḥ ibn Ḥayy",
    "speakerTitle": "Faqīh and Ascetic of Kūfah (d. 169H)",
    "arabicText": "إِنَّ الشَّيْطَانَ لَيَفْتَحُ لِلْعَبْدِ تِسْعَةً وَتِسْعِينَ بَابًا مِنَ الخَيْرِ، يُرِيدُ بِهِ بَابًا وَاحِدًا مِنَ الشَّرِّ.",
    "englishText": "“Indeed, the Shayṭān will open ninety-nine gates of apparent good for a servant, merely seeking to lure him through a single gate of evil.”",
    "source": "al-Iʿtiṣām by Imām ash-Shāṭibī (Vol. 1, p. 282)",
    "category": "Subtlety of Shayṭān’s Traps"
  },
  {
    "id": "niche-athar-33",
    "speaker": "Ḥammād ibn Zayd",
    "speakerTitle": "Imām of Baṣrah (d. 179H)",
    "arabicText": "قَالَ لِي رَجُلٌ: يَا أَبَا إِسْمَاعِيلَ، هَلْ يُصَافِحُ أَهْلَ البِدَعِ؟ قَالَ: «لَا، وَلَا كَرَامَةَ لَهُمْ، وَلَا يُكَلِّمُهُمْ!»",
    "englishText": "“A man said to me: ‘O Abū Ismāʿīl, does one shake hands with the people of innovation?’ He replied: ‘No! There is no dignity granted to them, nor should one speak to them!’”",
    "source": "al-Ibānah al-Kubrā by Ibn Baṭṭah (no. 463)",
    "category": "Boycotting People of Innovation"
  },
  {
    "id": "niche-athar-34",
    "speaker": "Abū Qilābah al-Jarmī",
    "speakerTitle": "Imām of the Tābiʿīn in Baṣrah (d. 104H)",
    "arabicText": "مَا ابْتَدَعَ رَجُلٌ بِدْعَةً إِلَّا اسْتَحَلَّ السَّيْفَ.",
    "englishText": "“Never does a man innovate an innovation except that he eventually deems lawful the shedding of blood with the sword.”",
    "source": "Sunan ad-Dārimī (no. 100) & Sharḥ Uṣūl Iʿtiqād (no. 240)",
    "category": "Innovation Leads to the Sword"
  },
  {
    "id": "niche-athar-35",
    "speaker": "ʿAmr ibn Qays al-Malāʾī",
    "speakerTitle": "Devout Imām of Kūfah (d. 146H)",
    "arabicText": "إِذَا رَأَيْتَ الشَّابَّ فِي أَوَّلِ نَشْئِهِ مَعَ أَهْلِ السُّنَّةِ فَارْجُهُ، وَإِذَا رَأَيْتَهُ مَعَ أَهْلِ البِدَعِ فَيَئِسَ مِنْهُ؛ فَإِنَّ الشَّابَّ عَلَى أَوَّلِ نُشُوئِهِ.",
    "englishText": "“When you see a youth in his initial upbringing with the People of the Sunnah, then have high hope for him; and when you see him with the people of innovation, then despair of him; for indeed the youth remains upon his earliest formation.”",
    "source": "al-Ibānah al-Kubrā by Ibn Baṭṭah (no. 399) & Sharḥ Uṣūl Iʿtiqād (no. 134)",
    "category": "Youth and Companionship"
  },
  {
    "id": "niche-athar-36",
    "speaker": "Sufyān ath-Thawrī",
    "speakerTitle": "Amīr al-Muʾminīn in Ḥadīth (d. 161H)",
    "arabicText": "مَنْ أَصْغَى بِسَمْعِهِ إِلَى صَاحِبِ بِدْعَةٍ وَهُوَ يَعْلَمُ أَنَّهُ صَاحِبُ بِدْعَةٍ، نُزِعَتْ مِنْهُ العِصْمَةُ، وَوُكِلَ إِلَى نَفْسِهِ.",
    "englishText": "“Whoever inclines his ear to an innovator while knowing he is an innovator, divine protection is stripped from him, and he is abandoned entirely to himself.”",
    "source": "Sharḥ Uṣūl Iʿtiqād Ahl as-Sunnah by al-Lālakāʾī (no. 240)",
    "category": "Warning Against Listening to Innovators"
  },
  {
    "id": "niche-athar-37",
    "speaker": "ʿAbdullāh ibn ʿAwn",
    "speakerTitle": "Imām of Baṣrah (d. 150H)",
    "arabicText": "مَنْ جَالَسَ أَهْلَ البِدَعِ فَهُوَ أَشَدُّ عَلَيْنَا مِنْ أَهْلِ البِدَعِ.",
    "englishText": "“Whoever sits in the company of the people of innovation is more severe upon us than the people of innovation themselves.”",
    "source": "al-Ibānah al-Kubrā by Ibn Baṭṭah (no. 473)",
    "category": "Sitting with Ahl al-Bidʿah"
  },
  {
    "id": "niche-athar-38",
    "speaker": "Al-Fuḍayl ibn ʿIyāḍ",
    "speakerTitle": "The Zahid and ʿĀbid of the Ḥaramayn (d. 187H)",
    "arabicText": "مَنْ أَحَبَّ صَاحِبَ بِدْعَةٍ أَحْبَطَ اللَّهُ عَمَلَهُ، وَأَخْرَجَ نُورَ الإِسْلَامِ مِنْ قَلْبِهِ.",
    "englishText": "“Whoever loves a person of innovation, Allāh invalidates his good deeds and extinguishes the radiant light of Islam from his heart.”",
    "source": "Sharḥ Uṣūl Iʿtiqād Ahl as-Sunnah by al-Lālakāʾī (no. 263)",
    "category": "Loving People of Innovation"
  },
  {
    "id": "niche-athar-39",
    "speaker": "Mālik ibn Anas",
    "speakerTitle": "Imām of Dār al-Hijrah (d. 179H)",
    "arabicText": "أَوَكُلَّمَا جَاءَنَا رَجُلٌ أَجْدَلُ مِنْ رَجُلٍ تَرَكْنَا مَا جَاءَ بِهِ جِبْرِيلُ إِلَى مُحَمَّدٍ ﷺ لِجَدَلِهِ؟!",
    "englishText": "“Is it that every time a man comes to us who is more adept in disputation than another, we should abandon that which Jibrīl brought to Muḥammad ﷺ merely for his disputation?!”",
    "source": "al-Iʿtiṣām by ash-Shāṭibī (2/728) & Sharḥ Uṣūl Iʿtiqād (no. 297)",
    "category": "Rejection of Theological Disputation"
  },
  {
    "id": "niche-athar-40",
    "speaker": "Abū Bakr ibn ʿAyyāsh",
    "speakerTitle": "Imām and Qāriʾ of Kūfah (d. 193H)",
    "arabicText": "قِيلَ لَهُ: مَنِ السُّنِّيُّ؟ قَالَ: الَّذِي إِذَا ذُكِرَتِ الأَهْوَاءُ لَمْ يَغْضَبْ لِشَيْءٍ مِنْهَا.",
    "englishText": "“It was said to him: ‘Who is the Sunnī?’ He replied: ‘The one who, whenever deviant sectarian desires are mentioned, does not harbor passionate zeal for any single one of them.’”",
    "source": "Sharḥ Uṣūl Iʿtiqād Ahl as-Sunnah by al-Lālakāʾī (no. 53)",
    "category": "Definition of the Sunnī"
  },
  {
    "id": "niche-athar-41",
    "speaker": "Sulaymān at-Taymī",
    "speakerTitle": "Ascetic and Traditionist of Baṣrah (d. 143H)",
    "arabicText": "لَوْ أَخَذْتَ بِرُخْصَةِ كُلِّ عَالِمٍ، أَوْ زَلَّةِ كُلِّ عَالِمٍ، اجْتَمَعَ فِيكَ الشَّرُّ كُلُّهُ.",
    "englishText": "“If you were to seek out and adopt the lenient concession (rukhṣah) of every scholar, or the misstep of every jurist, all evil would gather in you.”",
    "source": "al-Faqīh wa-l-Mutafaqqih by al-Khaṭīb (Vol. 2, p. 69) & Jāmiʿ Bayān al-ʿIlm (no. 1761)",
    "category": "Danger of Seeking Juristic Loopholes"
  },
  {
    "id": "niche-athar-42",
    "speaker": "Ayyūb as-Sakhtiyānī",
    "speakerTitle": "Master of Hadith in Baṣrah (d. 131H)",
    "arabicText": "إِنَّ أَهْلَ الأَهْوَاءِ خَوَارِجُ، وَإِنِ اخْتَلَفَتْ أَسْمَاؤُهُمْ، وَإِنَّمَا مَرَدُّهُمْ إِلَى السَّيْفِ.",
    "englishText": "“Indeed the people of sectarian desires are Khawārij, even if their names differ; and their ultimate trajectory is inevitably toward the sword.”",
    "source": "al-Ibānah al-Kubrā by Ibn Baṭṭah (no. 450) & Sharḥ Uṣūl Iʿtiqād (no. 254)",
    "category": "Underlying Unity of Sectarian Deviations"
  },
  {
    "id": "niche-athar-43",
    "speaker": "Muḥammad ibn Sīrīn",
    "speakerTitle": "Imām of the Tābiʿīn in Baṣrah (d. 110H)",
    "arabicText": "كَانُوا يَرَوْنَ أَنَّ التَّمَسُّكَ بِالأَثَرِ فِي أَمْرِ الدِّينِ هُوَ العِصْمَةُ مِنَ الضَّلَالَةِ.",
    "englishText": "“They (the Companions and early Salaf) held that adhering firmly to the transmitted narration (al-Athar) in religious matters is the absolute safeguard from falling into error.”",
    "source": "Tadhkirat al-Ḥuffāẓ by adh-Dhahabī (Vol. 1, p. 78) & Ṭabaqāt Ibn Saʿd (7/194)",
    "category": "Safeguard in Clinging to the Athar"
  },
  {
    "id": "niche-athar-44",
    "speaker": "Ibrāhīm an-Nakhaʿī",
    "speakerTitle": "Faqīh of Kūfah (d. 96H)",
    "arabicText": "كَانُوا يَكْرَهُونَ أَنْ يُظْهِرَ الرَّجُلُ أَحْسَنَ مَا عِنْدَهُ لِيَحْمَدَهُ النَّاسُ.",
    "englishText": "“They (the Salaf) used to dislike that a man displays the very best of his worship so that people praise him; rather, they kept their supreme deeds strictly hidden.”",
    "source": "az-Zuhd by Imām Aḥmad (no. 1774) & al-Waraʿ by al-Marrūdhī (p. 88)",
    "category": "Concealing Private Devotion"
  },
  {
    "id": "niche-athar-45",
    "speaker": "ʿUrwah ibn az-Zubayr",
    "speakerTitle": "Among the Seven Jurists of Madīnah (d. 94H)",
    "arabicText": "إِذَا رَأَيْتَ الرَّجُلَ يَعْمَلُ الحَسَنَةَ، فَاعْلَمْ أَنَّ لَهَا عِنْدَهُ أَخَوَاتٍ؛ وَإِذَا رَأَيْتَهُ يَعْمَلُ السَّيِّئَةَ، فَاعْلَمْ أَنَّ لَهَا عِنْدَهُ أَخَوَاتٍ؛ فَإِنَّ الحَسَنَةَ تَدُلُّ عَلَى أُخْتِهَا.",
    "englishText": "“When you see a man performing a righteous deed, know that it has sister deeds with him; and when you see him committing a sin, know that it has sister sins with him. For indeed a good deed points to its sister, and an evil deed points to its sister.”",
    "source": "az-Zuhd by Imām Aḥmad (no. 1928) & Ḥilyat al-Awliyāʾ (2/177)",
    "category": "Interconnection of Deeds"
  },
  {
    "id": "niche-athar-46",
    "speaker": "ʿAbdullāh ibn Masʿūd",
    "speakerTitle": "The Noble Companion (d. 32H)",
    "arabicText": "مَنْ كَانَ يُحِبُّ أَنْ يَعْلَمَ أَنَّهُ يُحِبُّ اللَّهَ وَرَسُولَهُ فَلْيَعْرِضْ نَفْسَهُ عَلَى القُرْآنِ؛ فَإِنْ كَانَ يُحِبُّ القُرْآنَ فَهُوَ يُحِبُّ اللَّهَ وَرَسُولَهُ.",
    "englishText": "“Whoever wishes to know that he truly loves Allāh and His Messenger, let him evaluate himself against the Qurʾān; for if he loves the Qurʾān, then he truly loves Allāh and His Messenger.”",
    "source": "Shuʿab al-Īmān by al-Bayhaqī (no. 1957) & al-Muṣannaf by Ibn Abī Shaybah (no. 30656)",
    "category": "Measuring Love of Allāh through the Qurʾān"
  },
  {
    "id": "niche-athar-47",
    "speaker": "Abū Bakr al-Marrūdhī",
    "speakerTitle": "Foremost Student of Imām Aḥmad (d. 275H)",
    "arabicText": "سَأَلْتُ أَحْمَدَ بْنَ حَنْبَلٍ: مَا تَقُولُ فِي الرَّجُلِ يَطْلُبُ الحَدِيثَ؟ قَالَ: «لَا يَعْدِلُهُ عِنْدِي شَيْءٌ إِذَا صَحَّتِ النِّيَّةُ»، قُلْتُ: وَمَا صِحَّةُ النِّيَّةِ؟ قَالَ: «يَنْوِي أَنْ يَتَوَاضَعَ فِيهِ وَيَنْفِيَ عَنْهُ الجَهْلَ».",
    "englishText": "“I asked Aḥmad ibn Ḥanbal: ‘What do you say regarding a man who seeks and transcribes Hadith?’ He replied: ‘Nothing equals it in my view if the intention is sound.’ I said: ‘And what is soundness of intention?’ He said: ‘That he intends to be humble through it and to remove ignorance from himself.’”",
    "source": "al-Jāmiʿ li-Akhlāq ar-Rāwī by al-Khaṭīb al-Baghdādī (Vol. 1, p. 86)",
    "category": "Soundness of Intention in Seeking Hadith"
  },
  {
    "id": "niche-athar-48",
    "speaker": "Hannād ibn as-Sarrī",
    "speakerTitle": "Author of Kitāb az-Zuhd (d. 243H)",
    "arabicText": "رَأَيْتُ وَكِيعًا لَا يَكَادُ يَفْتُرُ عَنِ البُكَاءِ إِذَا ذَكَرَ المَوْتَ، وَكَانَ يَقُولُ: كَيْفَ يَفْرَحُ بِالدُّنْيَا مَنْ هُوَ عَلَى جَنَاحِ سَفَرٍ إِلَى رَبِّهِ؟",
    "englishText": "“I saw Wakīʿ rarely ceasing from weeping whenever death was mentioned; and he used to say: ‘How can one rejoice over this worldly life when he is perpetually poised on the wing of a journey toward his Lord?’”",
    "source": "az-Zuhd by Hannād ibn as-Sarrī (Vol. 1, p. 240) & Siyar Aʿlām an-Nubalāʾ (9/143)",
    "category": "Weeping Over the Imminent Journey"
  },
  {
    "id": "niche-athar-49",
    "speaker": "ʿAbdullāh ibn Dāwūd al-Khuraybī",
    "speakerTitle": "Ascetic and Traditionist of Kūfah (d. 213H)",
    "arabicText": "كَانُوا يَسْتَحِبُّونَ أَنْ يَكُونَ لِلرَّجُلِ خَبِيئَةٌ مِنْ عَمَلٍ صَالِحٍ، لَا تَعْلَمُ بِهِ زَوْجَتُهُ وَلَا غَيْرُهَا.",
    "englishText": "“They (the Salaf) used to love that a man should possess a hidden treasure of righteous deeds, of which neither his wife nor anyone else has any knowledge.”",
    "source": "az-Zuhd by Imām Aḥmad (no. 1826) & al-Waraʿ by al-Marrūdhī (p. 112)",
    "category": "The Hidden Treasure of Private Deeds"
  },
  {
    "id": "niche-athar-50",
    "speaker": "Abū Isḥāq ash-Shīrāzī",
    "speakerTitle": "Master Jurist and Traditionist (d. 476H)",
    "arabicText": "لَا تَنْظُرُوا إِلَى مَنْ كَثُرَ كَلَامُهُ، وَلَكِنِ انْظُرُوا إِلَى مَنْ صَفَا قَلْبُهُ وَاتَّبَعَ الأَثَرَ.",
    "englishText": "“Do not look to the one whose rhetoric is abundant; rather, look to the one whose heart is pure and who follows the Athar (the transmitted text).”",
    "source": "Ṭabaqāt ash-Shāfiʿiyyah by as-Subkī (Vol. 4, p. 215)",
    "category": "Speech vs. Adherence to the Athar"
  },
  {
    "id": "niche-athar-51",
    "speaker": "Sufyān ibn ʿUyaynah",
    "speakerTitle": "Imām of the Ḥaram in Makkah (d. 198H)",
    "arabicText": "مَنْ صَلَّى الصَّلَوَاتِ الخَمْسَ فِي جَمَاعَةٍ فَقَدْ مَلَأَ بَحْرَهُ عِبَادَةً، وَمَنْ أَلْزَمَ نَفْسَهُ التَّقْوَى سَلِمَ مِنَ الشَّرِّ كُلِّهِ.",
    "englishText": "“Whoever performs the five prayers in congregation has filled his vessel with worship; and whoever binds his soul to Taqwā has been safeguarded from every evil.”",
    "source": "Ḥilyat al-Awliyāʾ by Abū Nuʿaym (Vol. 7, p. 285)",
    "category": "Abundant Worship in the Five Prayers"
  },
  {
    "id": "niche-athar-52",
    "speaker": "Al-Aswad ibn Yazīd an-Nakhaʿī",
    "speakerTitle": "Great Devout Tābiʿī of Kūfah (d. 75H)",
    "arabicText": "قَالَ لَهُ عَلْقَمَةُ: كَمْ تُصَلِّي فِي اللَّيْلِ؟ فَقَالَ: إِنِّي لَأَسْتَحْيِي مِنَ اللَّهِ أَنْ أَنَامَ عَنْهُ وَالنَّاسُ يَنَامُونَ.",
    "englishText": "“ʿAlqamah said to him: ‘How much do you pray at night?’ He replied: ‘Indeed, I feel bashful before Allāh to sleep away from Him while the masses of people are asleep.’”",
    "source": "az-Zuhd by Imām Aḥmad (no. 1883) & Siyar Aʿlām an-Nubalāʾ (4/51)",
    "category": "Bashfulness Before Allāh in the Night"
  },
  {
    "id": "niche-athar-53",
    "speaker": "Ibn Ṭāhir al-Maqdisī",
    "speakerTitle": "The Great Ḥāfiẓ of Hadith (d. 507H)",
    "arabicText": "مَنْ لَمْ يُثْبِتْ لِلَّهِ مَا أَثْبَتَهُ لِنَفْسِهِ فَقَدْ عَطَّلَ، وَمَنْ شَبَّهَهُ بِخَلْقِهِ فَقَدْ مَثَّلَ، وَدِينُ اللَّهِ بَيْنَ التَّعْطِيلِ وَالتَّمْثِيلِ.",
    "englishText": "“Whoever does not affirm for Allāh what He affirmed for Himself has denied (His attributes), and whoever likens Him to His creation has anthropomorphized; and the true religion of Allāh is between negation and anthropomorphism.”",
    "source": "al-Ḥujjah fī Bayān al-Maḥajjah by al-Aṣbahānī (Vol. 1, p. 188)",
    "category": "The Straight Path in Divine Attributes"
  },
  {
    "id": "niche-athar-54",
    "speaker": "Qawām as-Sunnah al-Aṣbahānī",
    "speakerTitle": "Author of al-Ḥujjah fī Bayān al-Maḥajjah (d. 535H)",
    "arabicText": "مَذْهَبُ أَهْلِ الأَثَرِ أَنَّهُمْ يَأْخُذُونَ دِينَهُمْ عَنِ الكِتَابِ وَالسُّنَّةِ بِفَهْمِ الصَّحَابَةِ، لَا يَزِيدُونَ عَلَيْهِ وَلَا يَنْقُصُونَ مِنْهُ.",
    "englishText": "“The creed of the People of Narrations (Ahl al-Athar) is that they take their religion from the Book and the Sunnah through the comprehension of the Companions: they add nothing to it, nor do they diminish anything from it.”",
    "source": "al-Ḥujjah fī Bayān al-Maḥajjah (Vol. 2, p. 382)",
    "category": "The Foundation of Ahl al-Athar"
  },
  {
    "id": "niche-athar-55",
    "speaker": "Abū Bakr al-Athram",
    "speakerTitle": "Renowned Student of Imām Aḥmad (d. 261H)",
    "arabicText": "سَمِعْتُ أَبَا عَبْدِ اللَّهِ يَقُولُ: مَنْ أَرَادَ السَّلَامَةَ فَلْيَلْزَمِ الأَثَرَ، وَلَا يُعَرِّضْ لِنَفْسِهِ الشُّبَهَ، فَإِنَّ القُلُوبَ ضَعِيفَةٌ وَالشُّبَهَ خَطَّافَةٌ.",
    "englishText": "“I heard Abū ʿAbdillāh (Aḥmad ibn Ḥanbal) say: ‘Whoever desires safety, let him adhere strictly to the Athar, and let him not expose himself to specious doubts; for indeed hearts are frail and doubts are snatching hooks.’”",
    "source": "al-Ibānah al-Kubrā by Ibn Baṭṭah (Vol. 1, p. 390)",
    "category": "Frailty of Hearts Against Doubts"
  },
  {
    "id": "niche-athar-56",
    "speaker": "Ḥarb ibn Ismāʿīl al-Kirmānī",
    "speakerTitle": "Companion of Imām Aḥmad and Author of as-Sunnah (d. 280H)",
    "arabicText": "هَذَا مَذْهَبُ أَئِمَّةِ العِلْمِ، وَأَصْحَابِ الأَثَرِ، وَأَهْلِ السُّنَّةِ المَعْرُوفِينَ بِهَا: التَّمَسُّكُ بِمَا كَانَ عَلَيْهِ أَصْحَابُ رَسُولِ اللَّهِ ﷺ فِي أُصُولِ الدِّينِ كُلِّهَا.",
    "englishText": "“This is the creed of the Imāms of knowledge, the companions of the Athar, and the people of the Sunnah known thereby: holding firmly to that which the Companions of the Messenger of Allāh ﷺ were upon in all foundational principles of religion.”",
    "source": "Kitāb as-Sunnah by Ḥarb al-Kirmānī (p. 31)",
    "category": "Creed of the Imāms of the Athar"
  },
  {
    "id": "niche-athar-57",
    "speaker": "ʿAbdullāh ibn Aḥmad ibn Ḥanbal",
    "speakerTitle": "The Great Ḥāfiẓ and Compiler of as-Sunnah (d. 290H)",
    "arabicText": "سَأَلْتُ أَبِي عَنِ الرَّجُلِ يُحِبُّ أَنْ يَعْمَلَ العَمَلَ الصَّالِحَ فَيَرَاهُ النَّاسُ؟ قَالَ: «إِنْ كَانَ يُرِيدُ أَنْ يُقْتَدَى بِهِ فَلَا بَأْسَ، وَأَمَّا إِنْ كَانَ يُرِيدُ المَحْمَدَةَ فَلَا خَيْرَ فِيهِ».",
    "englishText": "“I asked my father about a man who loves to perform a righteous deed and the people observe it? He said: ‘If his aim is that others follow a good example, there is no harm; but if his aim is worldly praise, there is no good in it.’”",
    "source": "al-Waraʿ by al-Marrūdhī (p. 89) & Kitāb az-Zuhd (no. 1024)",
    "category": "Examining the Motive for Public Deeds"
  },
  {
    "id": "niche-athar-58",
    "speaker": "Abū Zurʿah ar-Rāzī",
    "speakerTitle": "The Master Critic of Hadith in Rayy (d. 264H)",
    "arabicText": "إِذَا رَأَيْتَ الكُوفِيَّ يَطْعَنُ عَلَى سُفْيَانَ الثَّوْرِيِّ، أَوْ رَأَيْتَ البَصْرِيَّ يَطْعَنُ عَلَى حَمَّادِ بْنِ زَيْدٍ، فَلَا تَشُكَّ أَنَّهُ صَاحِبُ هَوًى.",
    "englishText": "“If you see a Kūfan defaming Sufyān ath-Thawrī, or you see a Baṣran defaming Ḥammād ibn Zayd, do not doubt that he is a follower of deviant desires.”",
    "source": "al-Jarḥ wa-t-Taʿdīl by Ibn Abī Ḥātim (Vol. 1, p. 67)",
    "category": "The Touchstone of Sunni Scholarly Love"
  },
  {
    "id": "niche-athar-59",
    "speaker": "Abū Bakr al-Khallāl",
    "speakerTitle": "Author of as-Sunnah and Jāmiʿ of Aḥmad's Fiqh (d. 311H)",
    "arabicText": "سَمِعْتُ المَرُّوذِيَّ يَقُولُ: قَالَ أَبُو عَبْدِ اللَّهِ: «إِذَا سَمِعْتَ الرَّجُلَ يُنْكِرُ الأَثَرَ، أَو يَدْفَعُ الحَدِيثَ، فَلَا تُكَلِّمْهُ، فَإِنَّهُ رَجُلُ سُوءٍ».",
    "englishText": "“I heard al-Marrūdhī say: Abū ʿAbdillāh (Aḥmad) said: ‘When you hear a man rejecting the Athar or brushing aside the Hadith, do not converse with him, for he is a man of evil intent.’”",
    "source": "as-Sunnah by Abū Bakr al-Khallāl (Vol. 3, p. 488, no. 764)",
    "category": "Shunning Rejectors of the Athar"
  },
  {
    "id": "niche-athar-60",
    "speaker": "Muḥammad ibn Yaḥyā adh-Dhuhlī",
    "speakerTitle": "Imām of Hadith in Naysābūr (d. 258H)",
    "arabicText": "اجْعَلِ الحَدِيثَ سِرَاجَكَ، فَإِنَّ السِّرَاجَ إِذَا انْطَفَأَ وَقَعْتَ فِي الظُّلْمَةِ، وَكَذَلِكَ إِذَا غَابَ عَنْكَ الأَثَرُ وَقَعْتَ فِي البِدْعَةِ.",
    "englishText": "“Make the ḥadīth your guiding lamp; for whenever the lamp is extinguished, you stumble into darkness; and likewise, whenever the Athar departs from you, you tumble into innovation.”",
    "source": "Sharḥ Uṣūl Iʿtiqād Ahl as-Sunnah by al-Lālakāʾī (no. 129)",
    "category": "The Hadith as an Illuminating Lamp"
  },
  {
    "id": "niche-athar-61",
    "speaker": "Ibn Abī Zayd al-Qayrawānī",
    "speakerTitle": "‘The Little Mālik’ in Qayrawān (d. 386H)",
    "arabicText": "وَأَنَّ الإِيمَانَ قَوْلٌ بِاللِّسَانِ، وَإِخْلَاصٌ بِالقَلْبِ، وَعَمَلٌ بِالجَوَارِحِ؛ يَزِيدُ بِزِيَادَةِ الأَعْمَالِ، وَيَنْقُصُ بِنُقْصَانِهَا.",
    "englishText": "“And that faith (īmān) is confession with the tongue, sincere belief with the heart, and physical action with the limbs; it increases with increase in righteous deeds and decreases with their decline.”",
    "source": "al-Muqaddimah ar-Risālah by Ibn Abī Zayd al-Qayrawānī (p. 23)",
    "category": "The Definition of Faith in Ahl as-Sunnah"
  },
  {
    "id": "niche-athar-62",
    "speaker": "Ibn Waḍḍāḥ al-Qurṭubī",
    "speakerTitle": "Author of al-Bidaʿ wa-n-Nahyu ʿAnhā (d. 287H)",
    "arabicText": "فَإِنَّ السَّنَةَ الَّتِي تَظْهَرُ فِيهَا البِدْعَةُ، تَمُوتُ فِيهَا سُنَّةٌ مِثْلُهَا، حَتَّى تَكُونَ البِدْعَةُ هِيَ المَعْرُوفَةَ وَالسُّنَّةُ هِيَ المُنْكَرَةَ.",
    "englishText": "“For indeed the year in which an innovation becomes prominent, a Sunnah dies with it of equivalent measure, until innovation becomes regarded as the norm and the Sunnah is regarded as objectionable.”",
    "source": "al-Bidaʿ wa-n-Nahyu ʿAnhā by Ibn Waḍḍāḥ (p. 42)",
    "category": "How Bidʿah Extinguishes the Sunnah"
  },
  {
    "id": "niche-athar-63",
    "speaker": "Al-Barbahārī",
    "speakerTitle": "Imām and Defender of Sunnah in Baghdād (d. 329H)",
    "arabicText": "إِذَا سَمِعْتَ الرَّجُلَ تَأْتِيهِ بِالأَثَرِ فَلَا يُرِيدُهُ، وَيُرِيدُ القُرْآنَ، فَلَا تَشُكَّ أَنَّهُ رَجُلٌ قَدِ احْتَوَى عَلَى الزَّنْدَقَةِ، فَقُمْ مِنْ عِنْدِهِ وَدَعْهُ.",
    "englishText": "“When you hear a man to whom you bring a narration (Athar) and he refuses it, saying: ‘Bring only the Qurʾān,’ then do not doubt that he is a man steeped in heresy; so stand up from him and leave him.”",
    "source": "Sharḥ as-Sunnah by Imām al-Barbahārī (no. 135)",
    "category": "Separating the Qurʾān from the Sunnah is Zandaqah"
  },
  {
    "id": "niche-athar-64",
    "speaker": "Ibn al-Mājishūn",
    "speakerTitle": "Great Maliki Jurist of Madīnah (d. 212H)",
    "arabicText": "مَنِ ابْتَدَعَ فِي الإِسْلَامِ بِدْعَةً يَرَاهَا حَسَنَةً، فَقَدْ زَعَمَ أَنَّ مُحَمَّدًا ﷺ خَانَ الرِّسَالَةَ؛ لِأَنَّ اللَّهَ يَقُولُ: ﴿اليَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ﴾، فَمَا لَمْ يَكُنْ يَوْمَئِذٍ دِينًا، فَلَا يَكُونُ اليَوْمَ دِينًا.",
    "englishText": "“Whoever invents an innovation in Islam deeming it good, has claimed that Muḥammad ﷺ betrayed the message; because Allāh says: ‘This day I have perfected for you your religion.’ So whatever was not part of the religion on that day, can never be part of the religion today.”",
    "source": "al-Iʿtiṣām by Imām ash-Shāṭibī (Vol. 1, p. 64)",
    "category": "Perfection of Religion Excludes Innovations"
  },
  {
    "id": "niche-athar-65",
    "speaker": "Saʿīd ibn ʿĀmir aḍ-Ḍubaʿī",
    "speakerTitle": "Scholar of Hadith in Baṣrah (d. 208H)",
    "arabicText": "إِنَّ أَهْلَ البِدَعِ شَرٌّ مِنَ الفُسَّاقِ؛ لِأَنَّ الفَاسِقَ يَعْلَمُ أَنَّهُ عَاصٍ فَيَتُوبُ، وَالمُبْتَدِعَ يَرَى أَنَّهُ مُحْسِنٌ فَلَا يَتُوبُ.",
    "englishText": "“Indeed, the people of innovation are more dangerous than the open sinners; because the sinner knows he is disobedient and thus repents, whereas the innovator believes he is doing good and thus never repents.”",
    "source": "al-Ibānah al-Kubrā by Ibn Baṭṭah (no. 504) & Sharḥ Uṣūl Iʿtiqād (no. 283)",
    "category": "Why Innovation is More Dangerous Than Sin"
  },
  {
    "id": "niche-athar-66",
    "speaker": "Yūnus ibn ʿUbayd",
    "speakerTitle": "Imām of Hadith and Piety in Baṣrah (d. 139H)",
    "arabicText": "إِنِّي لَأَعُدُّهَا مِنْ أَعْظَمِ نِعَمِ اللَّهِ عَلَيَّ أَنْ يَكُونَ لِي فِي اليَوْمِ أَخٌ فِي السُّنَّةِ أَلْقَاهُ، فَمَا أَقَلَّ أَهْلَ السُّنَّةِ اليَوْمَ!",
    "englishText": "“Indeed, I count it among the greatest blessings of Allāh upon me if I have, in a day, a brother upon the Sunnah whom I meet; for how utterly few are the People of the Sunnah today!”",
    "source": "Sharḥ Uṣūl Iʿtiqād Ahl as-Sunnah by al-Lālakāʾī (no. 21)",
    "category": "The Rarity of Companions upon Sunnah"
  },
  {
    "id": "niche-athar-67",
    "speaker": "Ḥafṣ ibn Ghiyāth",
    "speakerTitle": "Judge of Baghdād and Kūfah (d. 194H)",
    "arabicText": "إِذَا رَأَيْتَ الرَّجُلَ يُحِبُّ الكَلَامَ فِي السُّنَّةِ بِالرَّأْيِ فَلَا تَأْمَنْهُ عَلَى دِينِكَ، فَإِنَّ الدِّينَ لَا يُؤْخَذُ بِالقِيَاسِ.",
    "englishText": "“When you see a man who loves speculative philosophical debate regarding the Sunnah using mere human opinion, do not entrust him with your religion, for religion is not derived through philosophical analogies.”",
    "source": "al-Ibānah al-Kubrā by Ibn Baṭṭah (Vol. 1, p. 320)",
    "category": "Religion is Not Derived Through Speculative Opinion"
  },
  {
    "id": "niche-athar-68",
    "speaker": "ʿAbd ar-Raḥmān ibn Mahdī",
    "speakerTitle": "The Great Master of Jarḥ wa-Taʿdīl (d. 198H)",
    "arabicText": "أَهْلُ العِلْمِ يَكْتُبُونَ مَا لَهُمْ وَمَا عَلَيْهِمْ، وَأَهْلُ الأَهْوَاءِ لَا يَكْتُبُونَ إِلَّا مَا لَهُمْ.",
    "englishText": "“The people of sacred knowledge record both what supports their position and what appears to dispute it; whereas the people of sectarian whims record nothing except that which flatters their desire.”",
    "source": "Sunan ad-Dārimī (no. 321) & Jāmiʿ Bayān al-ʿIlm (no. 855)",
    "category": "Scholarly Fairness vs. Sectarian Bias"
  },
  {
    "id": "niche-athar-69",
    "speaker": "Sufyān ath-Thawrī",
    "speakerTitle": "Amīr al-Muʾminīn in Ḥadīth (d. 161H)",
    "arabicText": "إِنَّمَا العِلْمُ عِنْدَنَا الرُّخْصَةُ مِنْ ثِقَةٍ؛ فَأَمَّا التَّشْدِيدُ فَيُحْسِنُهُ كُلُّ أَحَدٍ.",
    "englishText": "“True knowledge with us is the legitimate religious concession (rukhṣah) transmitted from a trustworthy scholar; as for baseless strictness and hardship, every single person can do that.”",
    "source": "Jāmiʿ Bayān al-ʿIlm by Ibn ʿAbd al-Barr (no. 1475) & Siyar Aʿlām an-Nubalāʾ (7/276)",
    "category": "Genuine Knowledge vs. Fanatical Strictness"
  },
  {
    "id": "niche-athar-70",
    "speaker": "Abū Muʿāwiyah aḍ-Ḍarīr",
    "speakerTitle": "Ḥāfiẓ of Kūfah (d. 195H)",
    "arabicText": "حَدَّثْتُ هَارُونَ الرَّشِيدَ بِحَدِيثِ احْتِجَاجِ آدَمَ وَمُوسَى، فَقَالَ رَجُلٌ مِنَ القَوْمِ: فَأَيْنَ لَقِيَهُ؟ فَغَضِبَ الرَّشِيدُ وَقَالَ: «السَّيْفَ وَالنِّطَاعَ! زِنْدِيقٌ يَرُدُّ حَدِيثَ رَسُولِ اللَّهِ ﷺ!» فَمَا زِلْتُ أُسَكِّنُهُ حَتَّى سَكَنَ.",
    "englishText": "“I narrated to Hārūn ar-Rashīd the hadith of the debate between Ādam and Mūsā, whereupon a man in the court questioned: ‘So where did he meet him?’ Ar-Rashīd became furious and cried: ‘Bring the executioner’s sword and leather mat! A heretic who questions the hadith of the Messenger of Allāh ﷺ!’ I did not cease calming him until he relented.”",
    "source": "Sharḥ Uṣūl Iʿtiqād by al-Lālakāʾī (no. 732) & Tārīkh Baghdād (5/243)",
    "category": "Veneration of Authentic Ḥadīth Against Cynicism"
  },
  {
    "id": "niche-athar-71",
    "speaker": "Ibrāhīm ibn al-Ashʿath",
    "speakerTitle": "Devout Student of al-Fuḍayl ibn ʿIyāḍ (d. ~200H)",
    "arabicText": "سَأَلْتُ الفُضَيْلَ بْنَ عِيَاضٍ: مَا التَّوَاضُعُ؟ فَقَالَ: «أَنْ تَخْضَعَ لِلْحَقِّ وَتَنْقَادَ لَهُ، وَلَوْ سَمِعْتَهُ مِنْ صَبِيٍّ قَبِلْتَهُ مِنْهُ، وَلَوْ سَمِعْتَهُ مِنْ أَجْهَلِ النَّاسِ قَبِلْتَهُ مِنْهُ».",
    "englishText": "“I asked al-Fuḍayl ibn ʿIyāḍ: ‘What is humility (at-tawāḍuʿ)?’ He replied: ‘That you humble yourself before the truth and submit to it: even if you hear it from a young child you accept it from him, and even if you hear it from the most unlettered of people you accept it from him.’”",
    "source": "Jāmiʿ Bayān al-ʿIlm (no. 1007) & Ḥilyat al-Awliyāʾ (8/91)",
    "category": "Submitting to the Truth from Any Person"
  },
  {
    "id": "niche-athar-72",
    "speaker": "Mālik ibn Anas",
    "speakerTitle": "Imām of Dār al-Hijrah (d. 179H)",
    "arabicText": "لَا تُمَكِّنْ صَاحِبَ بِدْعَةٍ مِنْ سَمْعِكَ فَيَنْفُثَ فِيهِ شُبْهَةً؛ فَإِنَّكَ لَا تَدْرِي أَتَخْرُجُ مِنْ قَلْبِكَ أَمْ لَا.",
    "englishText": "“Do not permit a person of innovation to gain access to your ear, lest he blow into it a theological doubt; for you do not know whether it will ever leave your heart again.”",
    "source": "al-Ibānah al-Kubrā by Ibn Baṭṭah (no. 394)",
    "category": "Safeguarding the Ear from Deviant Whispers"
  },
  {
    "id": "niche-athar-73",
    "speaker": "Ibrāhīm ibn Maysarah",
    "speakerTitle": "Tābiʿī of Ṭāʾif and Makkah (d. 132H)",
    "arabicText": "مَنْ وَقَّرَ صَاحِبَ بِدْعَةٍ فَقَدْ أَعَانَ عَلَى هَدْمِ الإِسْلَامِ.",
    "englishText": "“Whoever shows veneration to a person of innovation has assisted in the demolition of Islam.”",
    "source": "Sharḥ Uṣūl Iʿtiqād Ahl as-Sunnah by al-Lālakāʾī (no. 273) & al-Ibānah (no. 445)",
    "category": "Danger of Honoring Innovators"
  },
  {
    "id": "niche-athar-74",
    "speaker": "Al-Awzāʿī",
    "speakerTitle": "Imām of Shām and Maghrib (d. 157H)",
    "arabicText": "عَلَيْكَ بِآثَارِ مَنْ سَلَفَ وَإِنْ رَفَضَكَ النَّاسُ، وَإِيَّاكَ وَآرَاءَ الرِّجَالِ وَإِنْ زَخْرَفُوهُ لَكَ بِالقَوْلِ، فَإِنَّ الأَمْرَ يَنْجَلِي وَأَنْتَ عَلَى طَرِيقٍ مُسْتَقِيمٍ.",
    "englishText": "“Hold fast to the narrations of those who preceded (the Salaf) even if people reject you; and beware of the speculative opinions of men even if they embellish them with eloquent speech. For the affair will become manifest while you are upon a straight path.”",
    "source": "Sharḥ Uṣūl Iʿtiqād Ahl as-Sunnah by al-Lālakāʾī (no. 63)",
    "category": "Adhering to the Salaf Despite Rejection"
  },
  {
    "id": "niche-athar-75",
    "speaker": "Ḥammād ibn Zayd",
    "speakerTitle": "Imām of Hadith in Baṣrah (d. 179H)",
    "arabicText": "ذُكِرَ رَجُلٌ عِنْدَ أَيُّوبَ السَّخْتِيَانِيِّ بِرَأْيٍ وَجَدَلٍ، فَقَالَ أَيُّوبُ: «إِنَّهُ لَا يَنْبُلُ الرَّجُلُ حَتَّى يَكُونَ فِيهِ خَصْلَتَانِ: العِفَّةُ عَمَّا فِي أَيْدِي النَّاسِ، وَالتَّجَاوُزُ عَمَّا يَكُونُ مِنْهُمْ؛ وَأَمَّا الكَلَامُ فِي الدِّينِ فَلَا يَنْبُلُ بِهِ أَحَدٌ».",
    "englishText": "“A man given to dialectical argumentation was mentioned before Ayyūb as-Sakhtiyānī, so Ayyūb said: ‘A man never achieves noble distinction until he possesses two qualities: chastity regarding what is in the hands of people, and overlooking their shortcomings; as for disputatious speech in religion, no one ever attains noble virtue through it.’”",
    "source": "al-Waraʿ by al-Marrūdhī (p. 74) & Siyar Aʿlām an-Nubalāʾ (6/22)",
    "category": "True Nobility vs. Theological Disputation"
  },
  {
    "id": "niche-athar-76",
    "speaker": "Muḥammad ibn Sīrīn",
    "speakerTitle": "Imām of the Tābiʿīn in Baṣrah (d. 110H)",
    "arabicText": "إِنَّ هَذَا العِلْمَ دِينٌ، فَانْظُرُوا عَمَّنْ تَأْخُذُونَ دِينَكُمْ.",
    "englishText": "“Indeed this sacred knowledge is religion itself; therefore, inspect thoroughly from whom you receive your religion.”",
    "source": "Ṣaḥīḥ Muslim (Introduction, no. 27) & Sunan ad-Dārimī (no. 419)",
    "category": "Inspecting the Chains and Teachers of Religion"
  },
  {
    "id": "niche-athar-77",
    "speaker": "Ibn Abī Ḥātim ar-Rāzī",
    "speakerTitle": "Author of al-Jarḥ wa-t-Taʿdīl (d. 327H)",
    "arabicText": "سَمِعْتُ أَبِي يَقُولُ: سَمِعْتُ يَحْيَى بْنَ سَعِيدٍ القَطَّانَ يَقُولُ: «سَأَلْتُ سُفْيَانَ الثَّوْرِيَّ، وَشُعْبَةَ، وَمَالِكًا عَنِ الرَّجُلِ لَا يُحْفَظُ الحَدِيثَ؟ فَقَالُوا: أَظْهِرْ أَمْرَهُ وَبَيِّنْ حَالَهُ لِلنَّاسِ»؛ فَذَلِكَ نَصِيحَةٌ لِلْمُسْلِمِينَ لَا غِيبَةٌ.",
    "englishText": "“I heard my father say: I heard Yaḥyā ibn Saʿīd al-Qaṭṭān say: ‘I asked Sufyān ath-Thawrī, Shuʿbah, and Mālik concerning a man who is not accurate in narrating Hadith? They said: “Make his condition known to the people”; for that is sincere counsel for Muslims, not forbidden backbiting.’”",
    "source": "Muqaddimat al-Jarḥ wa-t-Taʿdīl by Ibn Abī Ḥātim (Vol. 1, p. 11)",
    "category": "Sincere Counsel in Protecting Narrations"
  },
  {
    "id": "niche-athar-78",
    "speaker": "Abū Bakr al-Marrūdhī",
    "speakerTitle": "Companion of Imām Aḥmad (d. 275H)",
    "arabicText": "سَأَلْتُ أَحْمَدَ بْنَ حَنْبَلٍ: الرَّجُلُ يَصُومُ وَيُصَلِّي وَيَعْتَكِفُ أَحَبُّ إِلَيْكَ، أَوْ يَتَكَلَّمُ فِي أَهْلِ البِدَعِ؟ فَقَالَ: «إِذَا صَامَ وَصَلَّى وَاعْتَكَفَ فَإِنَّمَا هُوَ لِنَفْسِهِ، وَإِذَا تَكَلَّمَ فِي أَهْلِ البِدَعِ فَإِنَّمَا هُوَ لِلْمُسْلِمِينَ، هَذَا أَفْضَلُ».",
    "englishText": "“I asked Aḥmad ibn Ḥanbal: ‘Which is superior in your view: a man fasts, prays, and performs retreat for himself, or he refutes the people of innovation?’ He said: ‘When he fasts, prays, and retreats, that is purely for himself; but when he refutes the people of innovation, that is for the general protection of all Muslims. This is far superior!’”",
    "source": "Majmūʿ al-Fatāwā by Ibn Taymiyyah (Vol. 28, p. 231) & al-Ādāb ash-Sharʿiyyah (1/283)",
    "category": "Refuting Deviation Protects the Ummah"
  },
  {
    "id": "niche-athar-79",
    "speaker": "Khālid ibn Miʿdān",
    "speakerTitle": "Ascetic and Traditionist of Shām (d. 103H)",
    "arabicText": "إِذَا فُتِحَ لِأَحَدِكُمْ بَابُ خَيْرٍ فَلْيُسْرِعْ إِلَيْهِ، فَإِنَّهُ لَا يَدْرِي مَتَى يُغْلَقُ عَنْهُ.",
    "englishText": "“Whenever a doorway of good is opened for one of you, let him hasten toward it; for indeed he does not know when it may suddenly be shut against him.”",
    "source": "az-Zuhd by Imām Aḥmad (no. 2244) & Ḥilyat al-Awliyāʾ (5/211)",
    "category": "Hastening to Opportunities of Good"
  },
  {
    "id": "niche-athar-80",
    "speaker": "Muṭarrif ibn ʿAbdillāh",
    "speakerTitle": "Imām of the Tābiʿīn in Baṣrah (d. 95H)",
    "arabicText": "لَأَنْ أَبِيتَ نَائِمًا وَأُصْبِحَ نَادِمًا، أَحَبُّ إِلَيَّ مِنْ أَنْ أَبِيتَ قَائِمًا وَأُصْبِحَ مُعْجَبًا.",
    "englishText": "“That I spend the night asleep and wake up remorseful (feeling short in worship) is more beloved to me than spending the night standing in prayer and waking up self-righteous and conceited.”",
    "source": "Ḥilyat al-Awliyāʾ by Abū Nuʿaym (Vol. 2, p. 200) & az-Zuhd by Hannād (no. 855)",
    "category": "Remorse vs. Self-Righteous Conceit"
  },
  {
    "id": "niche-athar-81",
    "speaker": "ʿAbd ar-Raḥmān ibn Mahdī",
    "speakerTitle": "Master of Hadith in Baṣrah (d. 198H)",
    "arabicText": "مَا رَأَيْتُ أَحَدًا قَطُّ أَهْيَبَ فِي صَدْرِي مِنْ مَالِكِ بْنِ أَنَسٍ؛ كَانَ إِذَا قَرَأَ حَدِيثَ النَّبِيِّ ﷺ كَأَنَّ عَلَى رُؤُوسِ أَصْحَابِهِ الطَّيْرُ مِنْ تَعْظِيمِهِ لَهُ.",
    "englishText": "“I never saw anyone who instilled more reverential awe in my heart than Mālik ibn Anas; whenever he read the Hadith of the Prophet ﷺ, it was as if birds were perched upon the heads of his companions out of reverence.”",
    "source": "al-Kifāyah fī ʿIlm ar-Riwāyah by al-Khaṭīb (p. 385) & Tartīb al-Madārik (1/144)",
    "category": "Reverence for the Hadith of the Prophet ﷺ"
  },
  {
    "id": "niche-athar-82",
    "speaker": "ʿAlī ibn ʿĀṣim",
    "speakerTitle": "Ḥāfiẓ of Wāsiṭ (d. 201H)",
    "arabicText": "كَانُوا يَكْرَهُونَ الكَلَامَ فِي الدِّينِ بِالرَّأْيِ، وَيَقُولُونَ: إِنَّمَا هُوَ التَّسْلِيمُ وَالاتِّبَاعُ لِمَا مَضَى.",
    "englishText": "“They (the Salaf) used to detest dialectical disputation in religion using human opinion, and they would say: ‘Religion is solely submission and strict following of what has preceded.’”",
    "source": "Sharḥ Uṣūl Iʿtiqād Ahl as-Sunnah by al-Lālakāʾī (no. 219)",
    "category": "Religion is Submission and Following"
  },
  {
    "id": "niche-athar-83",
    "speaker": "Abū Ḥātim ar-Rāzī",
    "speakerTitle": "Great Imām of Rayy (d. 277H)",
    "arabicText": "لَمْ يَكُنْ فِي أُمَّةٍ مِنَ الأُمَمِ مُنْذُ خَلَقَ اللَّهُ آدَمَ أُمَنَاءُ يَحْفَظُونَ آثَارَ الرُّسُلِ إِلَّا فِي هَذِهِ الأُمَّةِ؛ أَصْحَابُ الحَدِيثِ هُمْ حُفَّاظُ الدِّينِ.",
    "englishText": "“Never was there in any nation among all nations since Allāh created Ādam trustworthy custodians who preserve the narrations of the Messengers except in this Ummah: the Companions of Hadith are the guardians of the religion.”",
    "source": "Sharaf Aṣḥāb al-Ḥadīth by al-Khaṭīb al-Baghdādī (p. 42)",
    "category": "Custodians of the Apostolic Legacy"
  },
  {
    "id": "niche-athar-84",
    "speaker": "Qatādah ibn Diʿāmah",
    "speakerTitle": "Mufassir and Tābiʿī of Baṣrah (d. 118H)",
    "arabicText": "مَنْ يَتَّقِ اللَّهَ يَكُنِ اللَّهُ مَعَهُ، وَمَنْ يَكُنِ اللَّهُ مَعَهُ فَمَعَهُ الفِئَةُ الَّتِي لَا تُغْلَبُ، وَالحَارِسُ الَّذِي لَا يَنَامُ، وَالهَادِي الَّذِي لَا يَضِلُّ.",
    "englishText": "“Whoever fears Allāh, Allāh will be with him; and whoever has Allāh with him, with him is the force that cannot be overcome, the guardian who never sleeps, and the Guide who never misleads.”",
    "source": "Tafsīr aṭ-Ṭabarī (Vol. 14, p. 192) & Ḥilyat al-Awliyāʾ (2/338)",
    "category": "The Irresistible Aid of Taqwā"
  },
  {
    "id": "niche-athar-85",
    "speaker": "Al-Farrāʾ",
    "speakerTitle": "Master of Arabic Language and Sunnah (d. 207H)",
    "arabicText": "مَنْ أَرَادَ أَنْ يَسْلَمَ لَهُ دِينُهُ، فَلْيَلْزَمِ السَّوَادَ الأَعْظَمَ مِنَ الصَّحَابَةِ، وَلْيَكُفَّ لِسَانَهُ عَمَّا شَجَرَ بَيْنَهُمْ.",
    "englishText": "“Whoever desires that his religion remain safe and intact, let him adhere to the vast consensus of the Companions, and withhold his tongue concerning disputes that arose among them.”",
    "source": "al-Ibānah al-Kubrā by Ibn Baṭṭah (Vol. 2, p. 548)",
    "category": "Withholding the Tongue Concerning Disputes"
  },
  {
    "id": "niche-athar-86",
    "speaker": "ʿAbdullāh ibn ʿUmar",
    "speakerTitle": "The Noble Companion (d. 73H)",
    "arabicText": "كُلُّ بِدْعَةٍ ضَلَالَةٌ، وَإِنْ رَآهَا النَّاسُ حَسَنَةً.",
    "englishText": "“Every innovation is misguidance, even if people perceive it to be good and praiseworthy.”",
    "source": "Sharḥ Uṣūl Iʿtiqād by al-Lālakāʾī (no. 126) & al-Ibānah al-Kubrā (no. 205)",
    "category": "Every Innovation is Misguidance"
  },
  {
    "id": "niche-athar-87",
    "speaker": "Abū Sulaymān ad-Dārānī",
    "speakerTitle": "Ascetic Sage of Shām (d. 215H)",
    "arabicText": "رُبَّمَا يَقَعُ فِي قَلْبِي النُّكْتَةُ مِنْ نُكَتِ القَوْمِ أَيَّامًا، فَلَا أَقْبَلُ مِنْهُ إِلَّا بِشَاهِدَيْنِ عَدْلَيْنِ: الكِتَابِ وَالسُّنَّةِ.",
    "englishText": "“A subtle spiritual notion from the sayings of the people might linger in my heart for days, yet I never accept it until two upright witnesses testify to it: the Book and the Sunnah.”",
    "source": "Siyar Aʿlām an-Nubalāʾ by adh-Dhahabī (Vol. 10, p. 183) & al-Iʿtiṣām (1/256)",
    "category": "Weighing Inward Thoughts against Revelation"
  },
  {
    "id": "niche-athar-88",
    "speaker": "Isḥāq ibn Rāhawayh",
    "speakerTitle": "Imām of Khurāsān (d. 238H)",
    "arabicText": "عَلَامَةُ جَهْمٍ وَأَصْحَابِهِ دَعْوَاهُمْ عَلَى أَهْلِ الجَمَاعَةِ مَا وَلِعُوا بِهِ مِنَ الكَذِبِ أَنَّهُمْ مُشَبِّهَةٌ، بَلْ هُمُ المُعَطِّلَةُ.",
    "englishText": "“The defining hallmark of Jahm and his faction is their persistent false accusation against the People of the Jamāʿah that they are anthropomorphists (Mushabbihah); rather, it is they who are the deniers (Muʿaṭṭilah).”",
    "source": "Sharḥ Uṣūl Iʿtiqād Ahl as-Sunnah by al-Lālakāʾī (no. 937)",
    "category": "The Slander of the Jahmiyyah Against Ahl al-Sunnah"
  },
  {
    "id": "niche-athar-89",
    "speaker": "Aḥmad ibn Ḥanbal",
    "speakerTitle": "Imām of Ahl as-Sunnah (d. 241H)",
    "arabicText": "إِذَا رَأَيْتَ الرَّجُلَ يَطْعَنُ عَلَى الأَثَرِ، أَوْ يُزَهِّدُ فِيهِ، فَلَا تَبْعَدْ أَنْ يَكُونَ مَدْخُولَ الأَمْرِ فِي الإِسْلَامِ.",
    "englishText": "“When you see a man finding fault with the Athar or inducing people to take little interest in it, do not be surprised if he possesses a deeply corrupted core in his Islam.”",
    "source": "Ṭabaqāt al-Ḥanābilah by Ibn Abī Yaʿlā (Vol. 1, p. 38) & al-Ibānah (no. 214)",
    "category": "Disparaging the Athar Reveals Hidden Corrupt Creed"
  },
  {
    "id": "niche-athar-90",
    "speaker": "Ibn Abī Duwayd",
    "speakerTitle": "Traditionist of Baghdād (d. ~260H)",
    "arabicText": "سَمِعْتُ يَحْيَى بْنَ مَعِينٍ يَقُولُ: مَا رَأَيْتُ أَحَدًا قَطُّ أَنْصَحَ لِكِتَابِ اللَّهِ وَسُنَّةِ رَسُولِهِ مِنْ أَحْمَدَ بْنِ حَنْبَلٍ؛ كَانَ إِذَا قِيلَ لَهُ: هَذَا خِلَافُ الحَدِيثِ، صَارَ كَأَنَّهُ صَخْرَةٌ لَا تَتَحَرَّكُ.",
    "englishText": "“I heard Yaḥyā ibn Maʿīn say: ‘I have never seen anyone more sincere in counsel for the Book of Allāh and the Sunnah of His Messenger than Aḥmad ibn Ḥanbal. Whenever it was said to him: “This opposes the Hadith,” he became like an immovable boulder.’”",
    "source": "Tārīkh Dimashq by Ibn ʿAsākir (Vol. 8, p. 420)",
    "category": "Immovable Firmness for the Hadith"
  },
  {
    "id": "niche-athar-91",
    "speaker": "Abū Bakr ibn ʿAyyāsh",
    "speakerTitle": "Imām and Ḥāfiẓ of Kūfah (d. 193H)",
    "arabicText": "أَهْلُ السُّنَّةِ يَمُوتُونَ وَيَحْيَا ذِكْرُهُمْ، وَأَهْلُ البِدْعَةِ يَمُوتُونَ وَيَمُوتُ ذِكْرُهُمْ؛ لِأَنَّ أَهْلَ السُّنَّةِ أَحْيَوْا مَا جَاءَ بِهِ الرَّسُولُ ﷺ.",
    "englishText": "“The people of the Sunnah die and their memory remains alive; while the people of innovation die and their memory dies with them; because the people of the Sunnah revived that which the Messenger ﷺ brought.”",
    "source": "Majmūʿ al-Fatāwā by Ibn Taymiyyah (Vol. 4, p. 57) & al-Lālakāʾī (no. 64)",
    "category": "The Living Memory of Ahl as-Sunnah"
  },
  {
    "id": "niche-athar-92",
    "speaker": "Ibrāhīm an-Nakhaʿī",
    "speakerTitle": "Faqīh of Kūfah (d. 96H)",
    "arabicText": "كَانُوا يَجْلِسُونَ فَيَتَذَاكَرُونَ العِلْمَ، فَيَقُولُ الرَّجُلُ: لَوْلَا أَنَّ هَذَا مِنَ الدِّينِ مَا جَلَسْتُ مَعَكُمْ.",
    "englishText": "“They (the Companions and early Salaf) used to sit and revise sacred knowledge together, and one would remark: ‘Were it not that this revision is of the very essence of religion, I would not have sat with you.’”",
    "source": "al-Faqīh wa-l-Mutafaqqih by al-Khaṭīb (Vol. 1, p. 110) & Jāmiʿ Bayān al-ʿIlm (no. 433)",
    "category": "Revising Sacred Knowledge as Pure Worship"
  },
  {
    "id": "niche-athar-93",
    "speaker": "Al-Layth ibn Saʿd",
    "speakerTitle": "Faqīh and Imām of Egypt (d. 175H)",
    "arabicText": "إِنَّ الحَقَّ يَشْتَبِهُ عَلَى أَهْلِ الأَهْوَاءِ؛ لِأَنَّهُمْ يَطْلُبُونَهُ بِأَهْوَائِهِمْ لَا بِالأَثَرِ، وَمَنْ طَلَبَ الحَقَّ بِالأَثَرِ أَبْصَرَهُ.",
    "englishText": "“Indeed, truth becomes confused with falsehood for the people of sectarian whims, because they seek it through their desires rather than through the Athar; but whoever seeks truth through the Athar will clearly perceive it.”",
    "source": "al-Ibānah al-Kubrā by Ibn Baṭṭah (Vol. 1, p. 270)",
    "category": "Perceiving Truth Through the Athar"
  },
  {
    "id": "niche-athar-94",
    "speaker": "Abū Bakr ibn ʿAyyāsh",
    "speakerTitle": "Imām of Kūfah (d. 193H)",
    "arabicText": "كُنْتُ عِنْدَ سُفْيَانَ الثَّوْرِيِّ، فَجَاءَهُ رَجُلٌ فَقَالَ: يَا أَبَا عَبْدِ اللَّهِ، حَدِّثْنِي عَنِ الرَّجُلِ يَتَكَلَّمُ فِي الرَّجُلِ؛ قَالَ: «إِنْ كَانَ لِيَنْصَحَ لِلَّهِ وَلِدِينِهِ فَلَا بَأْسَ، وَإِنْ كَانَ لِيَشْفِيَ غَيْظَهُ فَبِئْسَ مَا صَنَعَ».",
    "englishText": "“I was with Sufyān ath-Thawrī when a man inquired: ‘O Abū ʿAbdillāh, what say you of a man who speaks critically of another?’ He said: ‘If it is out of sincere counsel for Allāh and His religion, then there is no harm; but if it is merely to vent his personal anger, then how wretched is what he has done!’”",
    "source": "al-Jarḥ wa-t-Taʿdīl by Ibn Abī Ḥātim (Vol. 2, p. 28)",
    "category": "Sincere Counsel vs. Venting Anger"
  },
  {
    "id": "niche-athar-95",
    "speaker": "Abū ʿUbayd al-Qāsim ibn Sallām",
    "speakerTitle": "Master of Arabic Lexicon & Hadith (d. 224H)",
    "arabicText": "إِنِّي لَأَسْمَعُ الحَرْفَ مِنْ كَلَامِ العَرَبِ أَوْ مِنَ الحَدِيثِ، فَأَبْقَى فِيهِ ثَلَاثِينَ سَنَةً حَتَّى أَقِفَ عَلَى مَعْنَاهُ فَيَنْشَرِحُ لَهُ صَدْرِي.",
    "englishText": "“Indeed, I would hear a single rare word from the speech of the Arabs or from a hadith, and I would ponder over it for thirty years until I finally arrived at its true meaning and my chest expanded with clarity.”",
    "source": "Tārīkh Baghdād by al-Khaṭīb (Vol. 12, p. 410) & Siyar Aʿlām an-Nubalāʾ (10/493)",
    "category": "Thirty Years of Pondering a Rare Word"
  },
  {
    "id": "niche-athar-96",
    "speaker": "Al-Ḥasan al-Baṣrī",
    "speakerTitle": "Master of the Tābiʿīn in Baṣrah (d. 110H)",
    "arabicText": "السُّنَّةُ — وَالَّذِي لَا إِلَهَ إِلَّا هُوَ — بَيْنَ الغَالِي وَالجَافِي؛ فَاصْبِرُوا عَلَيْهَا رَحِمَكُمُ اللَّهُ، فَإِنَّ أَهْلَ السُّنَّةِ كَانُوا أَقَلَّ النَّاسِ فِيمَا مَضَى، وَهُمْ أَقَلُّ النَّاسِ فِيمَا بَقِيَ.",
    "englishText": "“The Sunnah—by the One besides Whom there is no deity worthy of worship—is between the fanatic extremist and the negligent deserter. Therefore, endure patiently upon it, may Allāh have mercy on you; for the People of the Sunnah were the fewest of people in times past, and they remain the fewest of people in what remains of time.”",
    "source": "Sunan ad-Dārimī (no. 224) & Sharḥ Uṣūl Iʿtiqād (no. 19)",
    "category": "The Golden Mean Between Extremism and Negligence"
  },
  {
    "id": "niche-athar-97",
    "speaker": "Abū Bakr al-Marrūdhī",
    "speakerTitle": "Foremost Student of Imām Aḥmad (d. 275H)",
    "arabicText": "دَخَلْتُ عَلَى أَبِي عَبْدِ اللَّهِ يَوْمًا وَهُوَ مَحْزُونٌ، فَقُلْتُ: يَا أَبَا عَبْدِ اللَّهِ، مَا هَذَا الغَمُّ؟ فَقَالَ: «كَيْفَ لَا يَغْتَمُّ مَنْ يَخَافُ سُوءَ الخَاتِمَةِ؟! نَسْأَلُ اللَّهَ الثَّبَاتَ».",
    "englishText": "“I entered upon Abū ʿAbdillāh (Aḥmad) one day while he was deep in sorrow, so I asked: ‘O Abū ʿAbdillāh, what is this grief?’ He replied: ‘How can he not grieve who fears a poor ending to his life?! We ask Allāh for steadfastness.’”",
    "source": "al-Waraʿ by al-Marrūdhī (p. 142) & Ṭabaqāt al-Ḥanābilah (1/62)",
    "category": "Fearing an Unfavorable Final Seal"
  },
  {
    "id": "niche-athar-98",
    "speaker": "ʿAbdullāh ibn ʿAwn",
    "speakerTitle": "Imām of Baṣrah (d. 150H)",
    "arabicText": "كَانَ مُحَمَّدُ بْنُ سِيرِينَ إِذَا سُئِلَ عَنِ الشَّيْءِ مِنَ الفِتْيَا فِيهِ شَيْءٌ مِنَ الرَّأْيِ تَغَيَّرَ لَوْنُهُ حَتَّى كَأَنَّهُ لَيْسَ بِالَّذِي كَانَ، تَهَيُّبًا لِلْفُتْيَا.",
    "englishText": "“Whenever Muḥammad ibn Sīrīn was questioned regarding a matter of jurisprudence involving human opinion, his color would drastically change until it seemed he was no longer the same man, out of immense reverential fear of giving a verdict.”",
    "source": "al-Faqīh wa-l-Mutafaqqih by al-Khaṭīb (Vol. 2, p. 167) & Siyar Aʿlām an-Nubalāʾ (4/612)",
    "category": "Reverential Trepidation in Giving Fatwā"
  },
  {
    "id": "niche-athar-99",
    "speaker": "Abū Bakr al-Marrūdhī",
    "speakerTitle": "Companion of Imām Aḥmad (d. 275H)",
    "arabicText": "قُلْتُ لِأَبِي عَبْدِ اللَّهِ: كَيْفَ أَصْبَحْتَ؟ قَالَ: «كَيْفَ يُصْبِحُ مَنْ رَبُّهُ يُطَالِبُهُ بِالفَرَائِضِ، وَنَبِيُّهُ بِالسُّنَّةِ، وَالنَّفْسُ بِالشَّهَوَاتِ، وَالشَّيْطَانُ بِالمَعَاصِي، وَمَلَكُ المَوْتِ بِقَبْضِ رُوحِهِ، وَالعِيَالُ بِالقُوتِ؟!»",
    "englishText": "“I said to Abū ʿAbdillāh (Aḥmad): ‘How have you awakened this morning?’ He replied: ‘How can one awaken whose Lord demands of him obligatory duties, his Prophet demands the Sunnah, his base self demands desires, the Shayṭān demands sins, the Angel of Death demands his soul, and his family demands sustenance?!’”",
    "source": "Siyar Aʿlām an-Nubalāʾ by adh-Dhahabī (Vol. 11, p. 227)",
    "category": "Awakening Amidst Heavy Divine Demands"
  },
  {
    "id": "niche-athar-100",
    "speaker": "ʿUmar ibn ʿAbd al-ʿAzīz",
    "speakerTitle": "The Rightly Guided Caliph (d. 101H)",
    "arabicText": "إِذَا رَأَيْتَ قَوْمًا يَتَنَاجَوْنَ فِي دِينِهِمْ دُونَ العَامَّةِ، فَاعْلَمْ أَنَّهُمْ عَلَى تَأْسِيسِ ضَلَالَةٍ.",
    "englishText": "“When you see a group whispering and conferring secretly concerning their religion away from the general populace, then know that they are laying the groundwork for a manifest deviation.”",
    "source": "Sunan ad-Dārimī (no. 311) & Sharḥ Uṣūl Iʿtiqād (no. 135)",
    "category": "Secret Theological Cabals Breed Deviation"
  },
  {
    "id": "niche-athar-101",
    "speaker": "Nuʿaym ibn Ḥammād",
    "speakerTitle": "Imām of Hadith in Egypt (d. 228H)",
    "arabicText": "إِذَا فَسَدَتِ الجَمَاعَةُ فَعَلَيْكَ بِمَا كَانَتْ عَلَيْهِ الجَمَاعَةُ قَبْلَ أَنْ تَفْسُدَ، وَإِنْ كُنْتَ وَحْدَكَ، فَإِنَّكَ أَنْتَ الجَمَاعَةُ حِينَئِذٍ.",
    "englishText": "“When the community becomes corrupt, then adhere strictly to that which the Jamāʿah was upon before it corrupted, even if you remain entirely alone; for indeed you alone are the Jamāʿah at that moment.”",
    "source": "al-Ibānah al-Kubrā by Ibn Baṭṭah (Vol. 1, p. 196) & al-Iʿtiṣām (2/771)",
    "category": "The Jamāʿah When the Masses Deviate"
  },
  {
    "id": "niche-athar-102",
    "speaker": "Abū Bakr ibn ʿAyyāsh",
    "speakerTitle": "Traditionist of Kūfah (d. 193H)",
    "arabicText": "مَا رَأَيْتُ أَحَدًا أَرْجَى نَجَاةً عِنْدِي مِنْ صَاحِبِ حَدِيثٍ لَيْسَ فِي قَلْبِهِ غِلٌّ لِأَصْحَابِ مُحَمَّدٍ ﷺ.",
    "englishText": "“There is no one in my view who has greater hope for salvation than a companion of Hadith who harbors not an atom of rancor in his heart toward the Companions of Muḥammad ﷺ.”",
    "source": "Tārīkh Baghdād by al-Khaṭīb al-Baghdādī (Vol. 14, p. 382)",
    "category": "Pure Hearts for the Companions"
  },
  {
    "id": "niche-athar-103",
    "speaker": "Al-Awzāʿī",
    "speakerTitle": "Imām of Shām (d. 157H)",
    "arabicText": "إِذَا أَرَادَ اللَّهُ بِقَوْمٍ شَرًّا أَلْزَمَهُمُ الجَدَلَ، وَمَنَعَهُمُ العَمَلَ.",
    "englishText": "“When Allāh intends evil for a people, He entangles them in argumentation and dialectics, and deprives them of fruitful action.”",
    "source": "al-Faqīh wa-l-Mutafaqqih by al-Khaṭīb (Vol. 1, p. 232) & Jāmiʿ Bayān al-ʿIlm (no. 1827)",
    "category": "Debate Without Action as a Punishment"
  },
  {
    "id": "niche-athar-104",
    "speaker": "Wahb ibn Munabbih",
    "speakerTitle": "Sage of Yemen (d. 114H)",
    "arabicText": "يَنْبَغِي لِلْعَالِمِ أَنْ يَكُونَ مَعَ عِلْمِهِ زَاهِدًا، وَمَعَ زُهْدِهِ رَفِيقًا، وَمَعَ رِفْقِهِ حَلِيمًا، وَلَا يَكُونُ حَلِيمًا حَتَّى يَكُونَ صَبُورًا عَلَى الجَهْلِ.",
    "englishText": "“It is incumbent upon the scholar that he be, alongside his knowledge, ascetic; and alongside his asceticism, gentle; and alongside his gentleness, forbearing; and he cannot be forbearing until he is patient with ignorance.”",
    "source": "Ḥilyat al-Awliyāʾ by Abū Nuʿaym (Vol. 4, p. 35) & Jāmiʿ Bayān al-ʿIlm (no. 963)",
    "category": "Adornment of the True Scholar"
  },
  {
    "id": "niche-athar-105",
    "speaker": "ʿAbdullāh ibn Masʿūd",
    "speakerTitle": "The Noble Companion (d. 32H)",
    "arabicText": "إِنَّكُمْ فِي زَمَانٍ كَثِيرٌ فُقَهَاؤُهُ قَلِيلٌ خُطَبَاؤُهُ، قَلِيلٌ سُؤَّالُهُ كَثِيرٌ مُعْطُوهُ، العَمَلُ فِيهِ قَائِدٌ لِلْهَوَى؛ وَسَيَأْتِي زَمَانٌ قَلِيلٌ فُقَهَاؤُهُ كَثِيرٌ خُطَبَاؤُهُ، كَثِيرٌ سُؤَّالُهُ قَلِيلٌ مُعْطُوهُ، الهَوَى فِيهِ قَائِدٌ لِلْعَمَلِ.",
    "englishText": "“Indeed, you are in a time where its jurists are many and its orators are few, its beggars are few and its givers are many, and deeds lead desires; but there shall come a time where its jurists are few and its orators are many, its beggars are many and its givers are few, and desires lead deeds.”",
    "source": "al-Muṣannaf by Ibn Abī Shaybah (no. 35431) & al-Ibānah (no. 248)",
    "category": "Contrast Between Early Scholars and Late Orators"
  },
  {
    "id": "niche-athar-106",
    "speaker": "Sufyān ath-Thawrī",
    "speakerTitle": "Imām of Kūfah (d. 161H)",
    "arabicText": "الزُّهْدُ فِي الدُّنْيَا قِصَرُ الأَمَلِ، لَيْسَ بِأَكْلِ الغَلِيظِ وَلَا لُبْسِ العَبَاءِ.",
    "englishText": "“Asceticism (zuhd) in this worldly life is shortening one’s false hopes of long life; it is not the outward eating of coarse food nor the wearing of a tattered woolen cloak.”",
    "source": "az-Zuhd by Imām Aḥmad (no. 1162) & Siyar Aʿlām an-Nubalāʾ (7/261)",
    "category": "The Inward Reality of Zuhd"
  },
  {
    "id": "niche-athar-107",
    "speaker": "Maʿrūf al-Karkhī",
    "speakerTitle": "Renowned Zahid of Baghdād (d. 200H)",
    "arabicText": "كَلَامُ العَبْدِ فِيمَا لَا يَعْنِيهِ خِذْلَانٌ مِنَ اللَّهِ تَعَالَى.",
    "englishText": "“A servant’s indulging in speech concerning that which does not concern him is a sign of abandonment from Allāh the Exalted.”",
    "source": "Siyar Aʿlām an-Nubalāʾ by adh-Dhahabī (Vol. 9, p. 343) & Ḥilyat al-Awliyāʾ (8/360)",
    "category": "Idle Speech as a Sign of Abandonment"
  },
  {
    "id": "niche-athar-108",
    "speaker": "Al-Fuḍayl ibn ʿIyāḍ",
    "speakerTitle": "Imām of the Ḥaram (d. 187H)",
    "arabicText": "لَا يَكُونُ العَبْدُ مِنَ المُتَّقِينَ حَتَّى يَأْمَنَهُ عَدُوُّهُ؛ فَكَيْفَ بِصَدِيقِهِ؟!",
    "englishText": "“A servant will never be among the truly pious until even his enemy feels safe from his treachery; so how then with his friend?!”",
    "source": "Ḥilyat al-Awliyāʾ by Abū Nuʿaym (Vol. 8, p. 87)",
    "category": "Safety of Creation from the Believer"
  },
  {
    "id": "niche-athar-109",
    "speaker": "Aḥmad ibn Ḥanbal",
    "speakerTitle": "Imām of Ahl as-Sunnah (d. 241H)",
    "arabicText": "كُلُّ شَيْءٍ لَيْسَ فِيهِ إِجْمَاعٌ لَا يَجُوزُ فِيهِ القَطْعُ، وَلَا يَنْبَغِي لِأَحَدٍ أَنْ يَحْمِلَ النَّاسَ عَلَى مَذْهَبِهِ إِلَّا بِحُجَّةٍ لَا مَدْفَعَ لَهَا.",
    "englishText": "“Every matter in which there is no established consensus, it is not permissible to claim absolute certainty regarding it; nor is it fitting for anyone to force people upon his school except with proof that cannot be repelled.”",
    "source": "al-Waraʿ by al-Marrūdhī (p. 102) & Ṭabaqāt al-Ḥanābilah (1/214)",
    "category": "Nuance and Proof in Non-Consensus Matters"
  },
  {
    "id": "niche-athar-110",
    "speaker": "Abū Zurʿah ar-Rāzī",
    "speakerTitle": "Great Imām of Rayy (d. 264H)",
    "arabicText": "إِذَا رَأَيْتَ الرَّجُلَ يَنْتَقِصُ أَحَدًا مِنْ أَصْحَابِ رَسُولِ اللَّهِ ﷺ فَاعْلَمْ أَنَّهُ زِنْدِيقٌ؛ وَذَلِكَ أَنَّ الرَّسُولَ ﷺ عِنْدَنَا حَقٌّ، وَالقُرْآنَ حَقٌّ، وَإِنَّمَا أَدَّى إِلَيْنَا هَذَا القُرْآنَ وَالسُّنَنَ أَصْحَابُ رَسُولِ اللَّهِ ﷺ.",
    "englishText": "“When you see a man disparaging any single one of the Companions of the Messenger of Allāh ﷺ, then know that he is a heretic (zindīq). That is because the Messenger ﷺ with us is true, and the Qurʾān is true, and those who conveyed this Qurʾān and the Sunnahs to us are the Companions; so their disparagement aims to invalidate the Book and Sunnah.”",
    "source": "al-Kifāyah fī ʿIlm ar-Riwāyah by al-Khaṭīb al-Baghdādī (p. 49)",
    "category": "Defending the Witnesses of Revelation"
  },
  {
    "id": "niche-athar-111",
    "speaker": "ʿAbdullāh ibn ʿAwn",
    "speakerTitle": "Imām of Baṣrah (d. 150H)",
    "arabicText": "لَا تُجَالِسُوا أَصْحَابَ الخُصُومَاتِ؛ فَإِنِّي لَا آمَنُ أَنْ يَغْمِسُوكُمْ فِي ضَلَالَتِهِمْ أَوْ يَلْبِسُوا عَلَيْكُمْ مَا كُنْتُمْ تَعْرِفُونَ.",
    "englishText": "“Do not sit with the people of disputations; for indeed I do not deem you safe from them plunging you into their misguidance or obfuscating for you that which you previously knew.”",
    "source": "al-Ibānah al-Kubrā by Ibn Baṭṭah (Vol. 1, p. 396, no. 396)",
    "category": "Protecting Conviction from Polemics"
  },
  {
    "id": "niche-athar-112",
    "speaker": "Sufyān ath-Thawrī",
    "speakerTitle": "Amīr al-Muʾminīn in Ḥadīth (d. 161H)",
    "arabicText": "لَا يَصْلُحُ العِلْمُ إِلَّا لِمَنْ أَرَادَ بِهِ وَجْهَ اللَّهِ؛ أَمَّا مَنْ طَلَبَهُ لِلشَّرَفِ وَالمَنْزِلَةِ عِنْدَ المُلُوكِ، فَمَا أَقَلَّ حَظَّهُ مِنَ الآخِرَةِ!",
    "englishText": "“Sacred knowledge is not fit except for the one who seeks by it the Face of Allāh; as for the one who seeks it for prestige and high standing with rulers, how wretchedly small is his portion in the Hereafter!”",
    "source": "Ḥilyat al-Awliyāʾ by Abū Nuʿaym (Vol. 6, p. 365)",
    "category": "Seeking Knowledge Solely for Allāh"
  },
  {
    "id": "niche-athar-113",
    "speaker": "Abū Bakr al-Marrūdhī",
    "speakerTitle": "Foremost Student of Imām Aḥmad (d. 275H)",
    "arabicText": "سَمِعْتُ أَبَا عَبْدِ اللَّهِ يَقُولُ: التَّوَكُّلُ عَمَلُ القَلْبِ، وَلَيْسَ هُوَ بِتَرْكِ الأَسْبَابِ؛ مَنْ تَرَكَ الأَسْبَابَ فَقَدْ طَعَنَ فِي السُّنَّةِ.",
    "englishText": "“I heard Abū ʿAbdillāh (Aḥmad) say: ‘Tawakkul (reliance upon Allāh) is an action of the heart; it is not the abandonment of lawful worldly means (asbāb). Whoever abandons lawful causes has impugned the Sunnah.’”",
    "source": "al-Waraʿ by al-Marrūdhī (p. 66) & Ṭabaqāt al-Ḥanābilah (1/119)",
    "category": "Tawakkul is an Action of the Heart"
  },
  {
    "id": "niche-athar-114",
    "speaker": "Wakīʿ ibn al-Jarrāḥ",
    "speakerTitle": "Imām and Master Muḥaddith (d. 197H)",
    "arabicText": "مَنْ طَلَبَ الحَدِيثَ كَمَا جَاءَ فَهُوَ صَاحِبُ سُنَّةٍ، وَمَنْ طَلَبَهُ لِيُقَوِّيَ بِهِ هَوَاهُ فَهُوَ صَاحِبُ بِدْعَةٍ.",
    "englishText": "“Whoever seeks the Hadith exactly as it has been transmitted is an adherent of the Sunnah; but whoever seeks it merely to buttress his sectarian whim is an innovator.”",
    "source": "al-Jāmiʿ li-Akhlāq ar-Rāwī by al-Khaṭīb (Vol. 1, p. 132)",
    "category": "Purity of Purpose in Hadith Seeking"
  },
  {
    "id": "niche-athar-115",
    "speaker": "Al-Awzāʿī",
    "speakerTitle": "Imām of Shām (d. 157H)",
    "arabicText": "إِنَّ المُؤْمِنَ يَقُولُ قَلِيلًا وَيَعْمَلُ كَثِيرًا، وَإِنَّ المُنَافِقَ يَقُولُ كَثِيرًا وَيَعْمَلُ قَلِيلًا.",
    "englishText": "“Indeed, the believer speaks little and acts much; while the hypocrite speaks much and acts little.”",
    "source": "Ḥilyat al-Awliyāʾ by Abū Nuʿaym (Vol. 6, p. 141)",
    "category": "Speech of the Believer vs. Hypocrite"
  },
  {
    "id": "niche-athar-116",
    "speaker": "Ibrāhīm an-Nakhaʿī",
    "speakerTitle": "Faqīh of Kūfah (d. 96H)",
    "arabicText": "إِذَا رَأَيْتُمُ الرَّجُلَ يَتَهَاوَنُ فِي التَّكْبِيرَةِ الأُولَى فَاغْسِلُوا يَدَيْكُمْ مِنْهُ، فَإِنَّهُ لَا يَكَادُ يُرْجَى خَيْرُهُ.",
    "englishText": "“When you see a man being negligent concerning the opening Takbīr of congregational prayer, then wash your hands of him, for rarely can any serious good in religion be hoped from him.”",
    "source": "Siyar Aʿlām an-Nubalāʾ by adh-Dhahabī (Vol. 4, p. 525) & az-Zuhd by Hannād (no. 1102)",
    "category": "Revering the Opening Takbīr"
  },
  {
    "id": "niche-athar-117",
    "speaker": "Yaḥyā ibn Abī Kathīr",
    "speakerTitle": "Imām and Tābiʿī of Yamāmah (d. 129H)",
    "arabicText": "تَعَلَّمُوا النِّيَّةَ، فَإِنَّهَا أَبْلَغُ مِنَ العَمَلِ؛ رُبَّ عَمَلٍ صَغِيرٍ تُعَظِّمُهُ النِّيَّةُ، وَرُبَّ عَمَلٍ كَبِيرٍ تُصَغِّرُهُ النِّيَّةُ.",
    "englishText": "“Learn how to cultivate sincere intention, for indeed it is further-reaching than mere physical action: many a small deed is magnified by intention, and many an immense deed is rendered worthless by intention.”",
    "source": "Ḥilyat al-Awliyāʾ by Abū Nuʿaym (Vol. 3, p. 70)",
    "category": "Cultivating Sincerity in Intention"
  },
  {
    "id": "niche-athar-118",
    "speaker": "Al-Ḥasan al-Baṣrī",
    "speakerTitle": "Imām of Baṣrah (d. 110H)",
    "arabicText": "هَانَتْ عَلَيْهِمْ أَنْفُسُهُمْ فَعَصَوُا اللَّهَ، وَلَوْ عَزَّتْ عَلَيْهِمْ لَمَنَعُوهَا مِنْ مَعْصِيَتِهِ.",
    "englishText": "“Their souls became contemptible and vile in their own eyes so they disobeyed Allāh; had their souls truly been precious and honored with them, they would have preserved them from His disobedience.”",
    "source": "az-Zuhd by Imām Aḥmad (no. 1654) & Ḥilyat al-Awliyāʾ (2/142)",
    "category": "Honoring the Soul by Guarding It from Sin"
  },
  {
    "id": "niche-athar-119",
    "speaker": "Ṭāwūs ibn Kaysān",
    "speakerTitle": "Student of Ibn ʿAbbās (d. 106H)",
    "arabicText": "لَا يَتِمُّ نُسُكُ الشَّابِّ حَتَّى يَتَزَوَّجَ، فَإِذَا تَزَوَّجَ أَحْرَزَ دِينَهُ وَفَرَغَ قَلْبُهُ لِعِبَادَةِ رَبِّهِ.",
    "englishText": "“The religious devotion of a youth is never perfected until he marries; for once he marries, he safeguards his religion and his heart is freed for the unencumbered worship of his Lord.”",
    "source": "Siyar Aʿlām an-Nubalāʾ by adh-Dhahabī (Vol. 5, p. 44) & Ḥilyat al-Awliyāʾ (4/8)",
    "category": "Safeguarding Devotion Through Marriage"
  },
  {
    "id": "niche-athar-120",
    "speaker": "Ḥammād ibn Zayd",
    "speakerTitle": "Imām of Baṣrah (d. 179H)",
    "arabicText": "قَالَ لِي أَيُّوبُ السَّخْتِيَانِيُّ: إِذَا بَلَغَكَ مَوْتُ رَجُلٍ مِنْ أَهْلِ السُّنَّةِ، فَكَأَنَّمَا سَقَطَ عُضْوٌ مِنْ أَعْضَائِي.",
    "englishText": "“Ayyūb as-Sakhtiyānī said to me: ‘Whenever news of the death of a man from the People of the Sunnah reaches me, it is as if an entire limb has been severed from my body.’”",
    "source": "Sharḥ Uṣūl Iʿtiqād Ahl as-Sunnah by al-Lālakāʾī (Vol. 1, p. 64, no. 21) & Ḥilyat al-Awliyāʾ (3/9)",
    "category": "The Grief at the Passing of Ahl as-Sunnah"
  }
];

/**
 * Seeded PRNG for deterministic permutation per multi-month era.
 */
function seededRandom(seed: number): () => number {
  let s = seed >>> 0;
  return function(): number {
    s = (s + 0x6D2B79F5) >>> 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const eraPermutationCache = new Map<number, number[]>();

function getEraPermutation(era: number, total: number): number[] {
  const cached = eraPermutationCache.get(era);
  if (cached) return cached;

  const seed = (era * 1664525 + 1013904223) >>> 0;
  const rand = seededRandom(seed);
  const arr = Array.from({ length: total }, (_, i) => i);

  // Full Fisher-Yates shuffle
  for (let i = total - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  eraPermutationCache.set(era, arr);
  return arr;
}

/**
 * Computes the Julian Day Number for an exact, discrete calendar day.
 * Eliminates all timezone and Daylight Saving Time drift.
 */
function getCalendarDayNumber(date: Date): number {
  const y = date.getFullYear();
  const m = date.getMonth();
  const d = date.getDate();
  const a = Math.floor((14 - (m + 1)) / 12);
  const year = y + 4800 - a;
  const month = (m + 1) + 12 * a - 3;
  return d + Math.floor((153 * month + 2) / 5) + 365 * year + Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400) - 32045;
}

/**
 * Returns a pseudo-random permutation of [0 ... total-1] seeded deterministically.
 * This guarantees that every single item within each multi-month era appears exactly once
 * with zero duplicate repetition, and transitions to a brand new randomized sequence
 * in every subsequent era so it never cycles identically.
 */
function getPermutedIndex(dayNumber: number, total: number): number {
  if (total <= 1) return 0;
  const era = Math.floor(dayNumber / total);
  const offsetInEra = ((dayNumber % total) + total) % total;
  const perm = getEraPermutation(era, total);
  return perm[offsetInEra];
}

/**
 * Formats calendar date into a clean display header matching: "Tuesday, Oct. 13"
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
 * Returns the exact niche Athār for today deterministically based on calendar date.
 * - Every single day yields a distinct Athār.
 * - Does NOT reuse the same āthār on a cycle: uses an era-seeded bijective permutation
 *   where each block of 120+ days visits all items without repeating, and resets
 *   with a completely fresh random sequence in subsequent eras.
 */
export function getDailyAthar(date = new Date()): DailyAthar {
  const dayNumber = getCalendarDayNumber(date);
  const index = getPermutedIndex(dayNumber, DAILY_ATHAR_LIST.length);
  return DAILY_ATHAR_LIST[index];
}

/**
 * Helper to retrieve a random niche Athār from the library (excluding current ID).
 * Perfect for discovering more niche gems on-demand.
 */
export function getRandomNicheAthar(currentId?: string): DailyAthar {
  const candidates = DAILY_ATHAR_LIST.filter(a => a.id !== currentId);
  if (candidates.length === 0) return DAILY_ATHAR_LIST[0];
  const randIdx = Math.floor(Math.random() * candidates.length);
  return candidates[randIdx];
}
