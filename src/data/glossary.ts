import { GlossaryTerm } from '../types/glossary';

/**
 * Classical Glossary of Terms
 * You can easily add, edit, or customize any of these terms and definitions.
 */
export const DEFAULT_GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    id: 'athar',
    term: 'Athar',
    arabic: 'أَثَر',
    transliteration: 'ʾAthar (pl. ʾĀthār)',
    category: 'Ḥadīth',
    definition: 'Literally "trace", "vestige", or "relic". In Islamic terminology, it refers to a transmitted narration or tradition from the Companions (Ṣaḥābah) and early generations (Tābiʿīn), and is often used alongside or interchangeably with Ḥadīth.',
    context: 'The Imāms of the Sunnah placed paramount importance on adhering to the Āthār of the Salaf in matters of creed and methodology.',
    aliases: ['athar', 'aathaar', 'athaar', 'aathaar', 'al-athar', 'athar of the salaf', 'athār'],
    source: 'Sharḥ Uṣūl Iʿtiqād Ahl as-Sunnah'
  },
  {
    id: 'tawil',
    term: 'Taʾwīl',
    arabic: 'تَأْوِيل',
    transliteration: 'Taʾwīl',
    category: 'ʿAqīdah',
    definition: 'In the language of the Qurʾān and the Salaf, Taʾwīl means either the true reality/fulfillment of something or its explanation (Tafsīr). In the terminology of later theological factions, it came to mean diverting a word away from its apparent, straightforward meaning to a metaphorical meaning without decisive textual evidence.',
    context: 'The Salaf strongly censured figurative Taʾwīl when applied to the Divine Attributes of Allāh, viewing it as a gateway to Taʿṭīl (negation).',
    aliases: ['ta\'wil', 'tawil', 'taweel', 'ta\'weel', 'taʾwīl'],
    source: 'Majmūʿ al-Fatāwā (Ibn Taymiyyah)'
  },
  {
    id: 'tatil',
    term: 'Taʿṭīl',
    arabic: 'تَعْطِيل',
    transliteration: 'Taʿṭīl',
    category: 'ʿAqīdah',
    definition: 'The act of divesting, vacating, or negating the Names and Attributes of Allāh, claiming that they have no real reality suitable to Allāh\'s Majesty or that Allāh is devoid of them.',
    context: 'The Muʿaṭṭilah (negators) sought to avoid resemblance (Tashbīh) but ended up falling into the worse falsehood of stripping the Creator of His perfection.',
    aliases: ['ta\'til', 'tatil', 'ta\'teel', 'tateel', 'taʿṭīl'],
    source: 'Kitāb at-Tawḥīd (Ibn Khuzaymah)'
  },
  {
    id: 'ithbat',
    term: 'Ithbāt',
    arabic: 'إِثْبَات',
    transliteration: 'ʾIthbāt',
    category: 'ʿAqīdah',
    definition: 'Affirming for Allāh what He affirmed for Himself in His Book and upon the tongue of His Messenger ﷺ, without Taḥrīf (distortion), Taʿṭīl (negation), Takyīf (asking how), or Tamthīl (resemblance).',
    context: 'The creed of Ahl as-Sunnah balances Ithbāt (affirmation of Attributes) with Tanzīh (negation of defects and likeness).',
    aliases: ['ithbat', 'ithbaat', 'ʾithbāt'],
    source: 'al-ʿAqīdah al-Wāsiṭiyyah'
  },
  {
    id: 'istawa',
    term: 'Istawā',
    arabic: 'اسْتَوَى',
    transliteration: 'ʾIstawā',
    category: 'ʿAqīdah',
    definition: 'Literally "He rose over", "ascended", or "elevated". Used in the Qurʾān in seven places: "The Most Beneficent rose over the Throne" (Ṭā-Hā: 5). It denotes elevation and rising in a manner befitting Allāh\'s Majesty.',
    context: 'Imām Mālik (d. 179H) stated: "Al-Istiwāʾ is known (in meaning), its \'how\' is unknown (to creation), believing in it is obligatory, and asking about its modality is an innovation."',
    aliases: ['istawa', 'istiwaa', 'istiwa', 'istawaa', 'ʾistawā'],
    source: 'al-Asmāʾ waṣ-Ṣifāt (al-Bayhaqī)'
  },
  {
    id: 'jahmi',
    term: 'Jahmī',
    arabic: 'جَهْمِيّ',
    transliteration: 'Jahmī (pl. Jahmiyyah)',
    category: 'Sects & Groups',
    definition: 'A follower of the destructive sect founded by Jahm ibn Ṣafwān (executed 128H), who denied Allāh\'s Attributes, claimed the Qurʾān was created, held that faith is mere recognition in the heart without speech or action (extreme Irjāʾ), and advocated fatalism (Jabr).',
    context: 'The Salaf vehemently warned against the Jahmiyyah, and Imām Aḥmad authored "ar-Radd ʿalā al-Jahmiyyah" (Refutation against the Jahmites).',
    aliases: ['jahmi', 'jahmiyyah', 'jahmite', 'jahmites', 'jahm'],
    source: 'ar-Radd ʿalā al-Jahmiyyah (Imām Aḥmad)'
  },
  {
    id: 'kalam',
    term: 'Kalām',
    arabic: 'عِلْمُ الكَلَام',
    transliteration: 'ʿIlm al-Kalām',
    category: 'ʿAqīdah',
    definition: 'Speculative philosophical scholasticism and dialectical argumentation rooted in ancient Greek logic and metaphysics, used by rationalist sects to discuss creed and theology.',
    context: 'The early Imāms uniformly condemned ʿIlm al-Kalām. Imām ash-Shāfiʿī famously remarked: "My ruling concerning the people of Kalām is that they should be struck with palm branches and shoes and paraded among the tribes."',
    aliases: ['kalam', 'kalaam', 'ilm al-kalam', 'mutakallimun'],
    source: 'Dhamm al-Kalām (al-Harawī)'
  },
  {
    id: 'salaf',
    term: 'Salaf',
    arabic: 'السَّلَف الصَّالِح',
    transliteration: 'as-Salaf aṣ-Ṣāliḥ',
    category: 'Manhaj',
    definition: 'The righteous predecessors, primarily encompassing the first three blessed generations of Muslims: the Ṣaḥābah (Companions), the Tābiʿīn (Successors), and the Atbāʿ at-Tābiʿīn (Successors to the Successors).',
    context: 'The Prophet ﷺ said: "The best people are those of my generation, then those who follow them, then those who follow them." [al-Bukhārī & Muslim]',
    aliases: ['salaf', 'salaf us-salih', 'as-salaf', 'salafi', 'salafiyyah'],
    source: 'Ṣaḥīḥ al-Bukhārī & Ṣaḥīḥ Muslim'
  },
  {
    id: 'bidah',
    term: 'Bidʿah',
    arabic: 'بِدْعَة',
    transliteration: 'Bidʿah',
    category: 'Manhaj',
    definition: 'An invented practice, belief, or rite introduced into the religion that resembles religious legislation but possesses no genuine textual basis from the Qurʾān, Sunnah, or consensus of the Salaf.',
    context: 'The Prophet ﷺ warned: "Every newly-invented matter is an innovation (bidʿah), and every innovation is misguidance, and every misguidance is in the Fire." [Abū Dāwūd & at-Tirmidhī]',
    aliases: ['bidah', 'bid\'ah', 'bidat', 'innovations', 'innovation'],
    source: 'Jāmiʿ al-ʿUlūm wal-Ḥikam (Ibn Rajab)'
  },
  {
    id: 'isnad',
    term: 'Isnād',
    arabic: 'إِسْنَاد',
    transliteration: 'ʾIsnād (Sanad)',
    category: 'Ḥadīth',
    definition: 'The uninterrupted chain of transmitters and narrators linking a student or collector to the original speaker (the Prophet ﷺ, a Companion, or a classical scholar).',
    context: 'ʿAbdullāh ibn al-Mubārak (d. 181H) stated: "The isnād is part of the religion; were it not for the isnād, anyone would say whatever he wished."',
    aliases: ['isnad', 'sanad', 'isnād', 'chain of narration'],
    source: 'Introduction to Ṣaḥīḥ Muslim'
  },
  {
    id: 'sunnah',
    term: 'Sunnah',
    arabic: 'السُّنَّة',
    transliteration: 'as-Sunnah',
    category: 'Manhaj',
    definition: 'The prophetic path and comprehensive methodology in creed, statements, actions, and approvals. In the titles of early classical works of the Salaf (e.g. Imām Aḥmad, al-Khallāl, al-Barbahārī), "as-Sunnah" specifically signifies orthodox ʿAqīdah and the rejection of heretical factions.',
    context: 'Imām az-Zuhrī said: "Those of our scholars who passed used to say: \'Adherence to the Sunnah is salvation.\'"',
    aliases: ['sunnah', 'sunna', 'as-sunnah'],
    source: 'Sharḥ as-Sunnah (al-Barbahārī)'
  },
  {
    id: 'takyif',
    term: 'Takyīf',
    arabic: 'تَكْيِيف',
    transliteration: 'Takyīf',
    category: 'ʿAqīdah',
    definition: 'Inquiring into or attempting to assign a physical modality, descriptive "how", or mechanism to the Attributes of Allāh.',
    context: 'Ahl as-Sunnah affirm the reality of Allāh\'s Attributes without inquiring into their modality, because knowledge of modality is known only to Allāh.',
    aliases: ['takyif', 'takyīf', 'takyeef'],
    source: 'al-Fatwā al-Ḥamawiyyah al-Kubrā'
  },
  {
    id: 'tamthil',
    term: 'Tamthīl',
    arabic: 'تَمْثِيل',
    transliteration: 'Tamthīl',
    category: 'ʿAqīdah',
    definition: 'Drawing an equivalence or identical likeness between the Creator and His creation ("Allāh is like...").',
    context: 'Refuted by the verse: "There is nothing like unto Him, and He is the All-Hearer, the All-Seer." [ash-Shūrā: 11].',
    aliases: ['tamthil', 'tamtheel', 'tamthīl', 'tashbih', 'tashbeeha'],
    source: 'Tafsīr Ibn Kathīr'
  },
  {
    id: 'mushaf',
    term: 'Muṣḥaf',
    arabic: 'مُصْحَف',
    transliteration: 'Muṣḥaf (pl. Maṣāḥif)',
    category: 'General',
    definition: 'The physical, bound book or written manuscript containing the revealed speech of Allāh, the Holy Qurʾān.',
    context: 'The Salaf emphasized deep reverence for the Muṣḥaf, defending the fact that what is recited and written in the Maṣāḥif is the uncreated Word of Allāh.',
    aliases: ['mushaf', 'mus\'haf', 'muṣḥaf', 'masahif'],
    source: 'al-Ibānah (Ibn Baṭṭah)'
  },
  {
    id: 'tawhid',
    term: 'Tawḥīd',
    arabic: 'تَوْحِيد',
    transliteration: 'Tawḥīd',
    category: 'ʿAqīdah',
    definition: 'Singling out Allāh alone in His Lordship (Rubūbiyyah), His exclusive right to all worship (Ulūhiyyah), and His unique Names and Attributes (al-Asmāʾ waṣ-Ṣifāt).',
    context: 'Tawḥīd is the foundational call of every messenger sent by Allāh and the absolute purpose of human creation [adh-Dhāriyāt: 56].',
    aliases: ['tawhid', 'tawheed', 'tawhīd', 'monotheism'],
    source: 'Kitāb at-Tawḥīd (al-Mujaddid Muḥammad ibn ʿAbd al-Wahhāb)'
  },
  {
    id: 'shirk',
    term: 'Shirk',
    arabic: 'شِرْك',
    transliteration: 'as-Shirk',
    category: 'ʿAqīdah',
    definition: 'Associating partners with Allāh in worship, Lordship, or Divine Attributes. It is categorized into Major Shirk (which expels one from the fold of Islām) and Minor Shirk (such as subtle ostentation/Riyāʾ).',
    context: 'Allāh says: "Indeed, Allāh does not forgive association with Him, but He forgives what is less than that for whom He wills." [an-Nisāʾ: 48].',
    aliases: ['shirk', 'polytheism', 'ash-shirk'],
    source: 'Fatḥ al-Majīd Sharḥ Kitāb at-Tawḥīd'
  },
  {
    id: 'tahreef',
    term: 'Taḥrīf',
    arabic: 'تَحْرِيف',
    transliteration: 'Taḥrīf',
    category: 'ʿAqīdah',
    definition: 'Distortion, alteration, or corruption of words (Taḥrīf al-Lafẓ) or meanings (Taḥrīf al-Maʿnā) away from their true divine intent.',
    context: 'Deviant sects perform Taḥrīf on the verses of Allāh\'s Attributes and mislabel it as metaphorical interpretation (Taʾwīl).',
    aliases: ['tahrif', 'tahreef', 'taḥrīf', 'distortion'],
    source: 'al-Qawāʿid al-Muthlā (Ibn al-ʿUthaymīn)'
  },
  {
    id: 'tanzih',
    term: 'Tanzīh',
    arabic: 'تَنْزِيه',
    transliteration: 'Tanzīh',
    category: 'ʿAqīdah',
    definition: 'Declaring Allāh completely transcendent and free from all defects, deficiencies, and any resemblance to His created beings.',
    context: 'Proper Tanzīh affirms Allāh\'s perfection alongside His Names and Attributes without divesting Him of them (Taʿṭīl).',
    aliases: ['tanzih', 'tanzeeh', 'tanzīh'],
    source: 'Sharḥ al-ʿAqīdah aṭ-Ṭaḥāwiyyah'
  },
  {
    id: 'ijma',
    term: 'Ijmāʿ',
    arabic: 'إِجْمَاع',
    transliteration: 'ʾIjmāʿ',
    category: 'Uṣūl',
    definition: 'The unanimous consensus of the qualified Islamic scholars of the Muslim nation after the death of the Prophet ﷺ upon a matter of religious ruling or creed.',
    context: 'Imām Aḥmad and the scholars of Sunnah upheld the consensus of the Companions and early generations as definitive, infallible proof.',
    aliases: ['ijma', 'ijmaa', 'ʾijmāʿ', 'consensus'],
    source: 'al-Iḥkām fī Uṣūl al-Aḥkām'
  },
  {
    id: 'qiyas',
    term: 'Qiyās',
    arabic: 'قِيَاس',
    transliteration: 'Qiyās',
    category: 'Uṣūl',
    definition: 'Analogical deduction; establishing a legal ruling for a novel case based on an existing text due to a shared underlying effective cause (ʿIllah).',
    context: 'The Salaf strictly forbade applying speculative Qiyās to the Divine Attributes or Matters of the Unseen (Ghayb).',
    aliases: ['qiyas', 'qiyaas', 'qiyās', 'analogy'],
    source: 'al-Mustaṣfā (al-Ghazālī)'
  },
  {
    id: 'mutawatir',
    term: 'Mutawātir',
    arabic: 'مُتَوَاتِر',
    transliteration: 'Mutawātir',
    category: 'Ḥadīth',
    definition: 'A narration reported by such a vast number of narrators in every stage of its chain that it is logically and customary impossible for them to have colluded upon a lie, yielding certain knowledge (ʿIlm Yaqīnī).',
    context: 'Ḥadīths affirming the believers seeing their Lord on the Day of Resurrection (Ruʾyah) are Mutawātir in transmission.',
    aliases: ['mutawatir', 'mutawaatir', 'mutawātir'],
    source: 'Muqaddimah Ibn aṣ-Ṣalāḥ'
  },
  {
    id: 'ahad',
    term: 'Āḥād',
    arabic: 'آحَاد',
    transliteration: 'Khabar al-Āḥād',
    category: 'Ḥadīth',
    definition: 'A solitary transmission that does not attain the multi-chain threshold of Mutawātir. It includes Gharīb, ʿAzīz, and Mashhūr reports.',
    context: 'Ahl as-Sunnah hold with complete unanimity that authentic (Ṣaḥīḥ) Āḥād reports convey knowledge and must be accepted and acted upon in matters of creed and law.',
    aliases: ['ahad', 'aahaad', 'khabar al-ahad', 'āḥād'],
    source: 'ar-Risālah (Imām ash-Shāfiʿī)'
  },
  {
    id: 'mursāl',
    term: 'Mursal',
    arabic: 'مُرْسَل',
    transliteration: 'Mursal',
    category: 'Ḥadīth',
    definition: 'A narration in which a Successor (Tābiʿī) attributes a statement directly to the Prophet ﷺ without specifying the Companion who heard it from him.',
    context: 'Classical scholars evaluated the status of Mursal narrations carefully depending on the tier and standing of the senior Tābiʿī.',
    aliases: ['mursal', 'mursāl'],
    source: 'al-Kifāyah fī ʿIlm ar-Riwāyah'
  },
  {
    id: 'muattilah',
    term: 'Muʿaṭṭilah',
    arabic: 'مُعَطِّلَة',
    transliteration: 'al-Muʿaṭṭilah',
    category: 'Sects & Groups',
    definition: 'Those factions who stripped or negated the Attributes of Allāh, including the Jahmiyyah and Muʿtazilah, claiming to uphold Divine transcendence.',
    context: 'Imām Ibn al-Qayyim poetically affirmed that the Muʿaṭṭil worships a non-existent void, while the Mumaththil worships an idol.',
    aliases: ['muattilah', 'mu\'attilah', 'muattila', 'muʿaṭṭilah'],
    source: 'an-Nūniyyah (Ibn al-Qayyim)'
  },
  {
    id: 'khawarij',
    term: 'Khawārij',
    arabic: 'خَوَارِج',
    transliteration: 'al-Khawārij',
    category: 'Sects & Groups',
    definition: 'The earliest breakaway sect in Islamic history, marked by declaring Muslims disbelievers (Takfīr) on account of major sins and rebelling violently against lawful Muslim rulers.',
    context: 'The Prophet ﷺ foretold their appearance, describing them as "Dogs of the Hellfire" and youth deficient in intellect despite their intense ritual devotion [Ṣaḥīḥ al-Bukhārī].',
    aliases: ['khawarij', 'kharijites', 'kharijite', 'khawārij'],
    source: 'al-Milal wan-Niḥal (ash-Shahrastānī)'
  },
  {
    id: 'murjiah',
    term: 'Murjiʾah',
    arabic: 'مُرْجِئَة',
    transliteration: 'al-Murjiʾah',
    category: 'Sects & Groups',
    definition: 'A deviant theological faction that excluded actions (Aʿmāl) from the definition and reality of Īmān (faith), asserting that sins do not harm faith just as good deeds do not benefit disbelief.',
    context: 'The Salaf strongly refuted the Murjiʾah, establishing that Īmān consists of belief in the heart, speech of the tongue, and actions of the limbs, increasing with obedience and decreasing with sin.',
    aliases: ['murjiah', 'murji\'ah', 'murjia', 'irja', 'irjaa'],
    source: 'Kitāb al-Īmān (Ibn Mandah)'
  },
  {
    id: 'qadariyyah',
    term: 'Qadariyyah',
    arabic: 'قَدَرِيَّة',
    transliteration: 'al-Qadariyyah',
    category: 'Sects & Groups',
    definition: 'A deviant group who denied Divine Pre-decree (al-Qadar), claiming that humans create their own actions independently and that Allāh does not know actions prior to their occurrence.',
    context: 'The Prophet ﷺ described them: "The Qadariyyah are the Magians (Majūs) of this nation." [Abū Dāwūd].',
    aliases: ['qadariyyah', 'qadariyya', 'qadarites'],
    source: 'al-Qadar (al-Firyābī)'
  },
  {
    id: 'mutazilah',
    term: 'Muʿtazilah',
    arabic: 'مُعْتَزِلَة',
    transliteration: 'al-Muʿtazilah',
    category: 'Sects & Groups',
    definition: 'A rationalist theological sect founded by Wāṣil ibn ʿAṭāʾ that prioritized human reason over revelation, denied Allāh\'s Attributes, held the Qurʾān to be created, and introduced the infamous trial (Miḥnah).',
    context: 'Imām Aḥmad ibn Ḥanbal stood steadfast like a mountain against their falsehood during the ordeal of the created Qurʾān.',
    aliases: ['mutazilah', 'mu\'tazilah', 'mutazilites', 'muʿtazilah'],
    source: 'Tārīkh Baghdād (al-Khaṭīb al-Baghdādī)'
  },
  {
    id: 'ashariyyah',
    term: 'Ashʿariyyah',
    arabic: 'أَشْعَرِيَّة',
    transliteration: 'al-Ashʿariyyah',
    category: 'Sects & Groups',
    definition: 'A scholastic theological school associated with Abu al-Ḥasan al-Ashʿarī (before his return to the creed of Imām Aḥmad in his final book al-Ibānah), which restricted affirmed Attributes to seven and engaged in speculative figurative interpretation (Taʾwīl) or relegation of meanings (Tafwīḍ).',
    context: 'Ahl as-Sunnah adhere to the final methodology of Abu al-Ḥasan al-Ashʿarī in affirming all Divine Attributes as they are without interpretation or negation.',
    aliases: ['ashariyyah', 'ash\'ariyyah', 'asharis', 'ash\'arite'],
    source: 'al-Ibānah ʿan Uṣūl ad-Diyānah'
  },
  {
    id: 'mizan',
    term: 'Mīzān',
    arabic: 'مِيزَان',
    transliteration: 'al-Mīzān',
    category: 'ʿAqīdah',
    definition: 'The real, physical Balance with two scales set up on the Day of Resurrection to weigh the deeds, scrolls, and people with absolute divine justice.',
    context: 'Allāh says: "And We place the scales of justice for the Day of Resurrection, so no soul will be treated unjustly at all." [al-Anbiyāʾ: 47].',
    aliases: ['mizan', 'meezan', 'mīzān', 'the scales'],
    source: 'Sharḥ as-Sunnah (al-Muzanī)'
  },
  {
    id: 'sirat',
    term: 'Ṣirāṭ',
    arabic: 'صِرَاط',
    transliteration: 'aṣ-Ṣirāṭ',
    category: 'ʿAqīdah',
    definition: 'The real bridge erected over the midst of the Hellfire (Jahannam) which all creation must traverse to enter Paradise; thinner than a hair and sharper than a sword, with hooks seizing those destined for punishment.',
    context: 'The believers cross it according to their deeds in this world—some like lightning, some like the wind, others sprinting or crawling [Ṣaḥīḥ Muslim].',
    aliases: ['sirat', 'siraat', 'ṣirāṭ', 'the bridge'],
    source: 'Ṣaḥīḥ Muslim (Kitāb al-Īmān)'
  },
  {
    id: 'hawd',
    term: 'Ḥawḍ',
    arabic: 'حَوْض',
    transliteration: 'al-Ḥawḍ al-Mawrūd',
    category: 'ʿAqīdah',
    definition: 'The vast celestial basin granted exclusively to the Prophet Muḥammad ﷺ on the Day of Resurrection, fed by the river al-Kawthar in Paradise.',
    context: 'Whoever drinks from it a single sip will never experience thirst again; those who innovated and altered the religion after the Prophet ﷺ will be driven away from it [al-Bukhārī].',
    aliases: ['hawd', 'howd', 'ḥawḍ', 'the basin', 'kawthar'],
    source: 'Kitāb al-Baʿth wan-Nushūr (al-Bayhaqī)'
  },
  {
    id: 'ruyah',
    term: 'Ruʾyah',
    arabic: 'رُؤْيَةُ الله',
    transliteration: 'Ruʾyatullāh',
    category: 'ʿAqīdah',
    definition: 'The visual seeing of Allāh with the physical eyes by the believers in the Hereafter and in Paradise, which is the greatest and most delightful reward.',
    context: 'The Prophet ﷺ said: "Indeed, you will see your Lord just as you see this moon, having no difficulty in seeing it." [al-Bukhārī & Muslim]. Denied only by heretics like the Jahmiyyah and Muʿtazilah.',
    aliases: ['ruyah', 'ru\'yah', 'ruʾyah', 'beatific vision'],
    source: 'ar-Ruʾyah (ad-Dāraquṭnī)'
  },
  {
    id: 'taqwa',
    term: 'Taqwā',
    arabic: 'تَقْوَى',
    transliteration: 'Taqwā',
    category: 'Heart-Softeners',
    definition: 'Placing a protective barrier between oneself and the punishment of Allāh by obeying His commands and avoiding His prohibitions upon light and knowledge from Allāh.',
    context: 'Ṭalq ibn Ḥabīb said: "Taqwā is that you act in obedience to Allāh upon light from Allāh, hoping for His mercy; and that you abandon sin upon light from Allāh, fearing His punishment."',
    aliases: ['taqwa', 'taqwaa', 'piety', 'god-consciousness'],
    source: 'Siyar Aʿlām an-Nubalāʾ (adh-Dhahabī)'
  },
  {
    id: 'ikhlas',
    term: 'Ikhlāṣ',
    arabic: 'إِخْلَاص',
    transliteration: 'ʾIkhlāṣ',
    category: 'Heart-Softeners',
    definition: 'Pure sincerity; purifying one\'s intention in all righteous deeds solely for the sake of Allāh alone, free from ostentation (Riyāʾ), seeking praise, or worldly gains.',
    context: 'Fuḍayl ibn ʿIyāḍ explained the verse "that He may test which of you is best in deed" [al-Mulk: 2]: "The most sincere and the most correct. If an action is sincere but not correct (upon the Sunnah), it is rejected; and if it is correct but not sincere, it is rejected."',
    aliases: ['ikhlas', 'ikhlaas', 'sincerity'],
    source: 'Madārij as-Sālikīn (Ibn al-Qayyim)'
  },
  {
    id: 'zuhd',
    term: 'Zuhd',
    arabic: 'زُهْد',
    transliteration: 'az-Zuhd',
    category: 'Heart-Softeners',
    definition: 'Renunciation of and detachment from that which brings no benefit in the Hereafter, freeing the heart from longing for temporary worldly delusions.',
    context: 'Imām Aḥmad authored his renowned masterpiece "Kitāb az-Zuhd", recording the austere, devotional lives of the Prophets and righteous predecessors.',
    aliases: ['zuhd', 'asceticism', 'renunciation'],
    source: 'Kitāb az-Zuhd (Imām Aḥmad)'
  },
  {
    id: 'warah',
    term: 'Waraʿ',
    arabic: 'وَرَع',
    transliteration: 'al-Waraʿ',
    category: 'Heart-Softeners',
    definition: 'Scrupulous piety; refraining from doubtful or ambiguous matters out of fear of stumbling into the unlawful (Ḥarām).',
    context: 'The Prophet ﷺ said: "Leave that which makes you doubt for that which does not make you doubt." [at-Tirmidhī & an-Nasāʾī].',
    aliases: ['wara', 'warah', 'waraʿ', 'scrupulousness'],
    source: 'al-Waraʿ (al-Marwadhī / Imām Aḥmad)'
  }
];
