import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

let aiClient: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI {
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY || "",
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

const MOCK_DATA = [
  {
    id: "6",
    title: "The Explicit Sunnah (Ṣarīḥ as-Sunnah)",
    category: "ʿAqīdah",
    author: "Imām Abū Jaʿfar aṭ-Ṭabarī",
    summary: "A magnificent and precise treatise authored by the great Imām and Mufassir Abū Jaʿfar Muḥammad bin Jarīr aṭ-Ṭabarī. It lays down the definitive, explicit stance of Ahl us-Sunnah regarding foundational matters of creed, such as the Qurʾān being the uncreated Speech of Allāh, the reality of the Divine Pre-decree (al-Qadar), the believers seeing Allāh in the Hereafter, and the excellence of the Companions."
  },
  {
    id: "7",
    title: "Those Who Lived After Death (Man ʿĀsha Baʿda al-Mawt)",
    category: "Heart-Softeners",
    author: "Ibn Abī ad-Dunyā",
    summary: "A profound compilation by the Imām, Ḥāfiẓ, and ascetic Ibn Abī ad-Dunyā. This book gathers narrations with a mixture of authentic and weak chains of transmission detailing extraordinary events: people who spoke after their souls were taken, individuals who witnessed the realities of the Barzakh (the realm of the grave), and terrifying or beautiful visions seen by those at the very edge of departure, serving to awaken dead hearts."
  },
  {
    id: "8",
    title: "The Book of Paradise (Kitāb al-Jannah)",
    category: "Heart-Softeners",
    author: "Ibn Abī Shaybah",
    summary: "A classical compilation from the monumental Muṣannaf of the great Imām and Ḥāfiẓ Abū Bakr Ibn Abī Shaybah (d. 235H). It brings together a collection of authentic and weak narrations elucidating the sublime reality of Paradise, what Allāh has prepared for the righteous, its dwellings, rivers, eternal delights, and the descriptions of its inhabitants."
  },
  {
    id: "9",
    title: "Jahm ibn al-Ṣafwān's Hatred For The Qurʾān",
    category: "ʿAqīdah",
    author: "Imām al-Bukhārī (Khalq Af'āl al-'Ibād)",
    summary: "A narration about a man from Marw who shunned Jahm due to his mockery and hatred of the verses of the Qur'an and his rejection of Allāh being above the Throne."
  },
  {
    id: "10",
    title: "An Arrow on the Day of Jumuʿah",
    category: "ʿAqīdah",
    author: "Ibn Baṭṭah (al-Ibānah al-Kubrā)",
    summary: "A narration from Ḥudhayfah ibn al-Yamān regarding the spread of hypocrisy and disbelief in the latter times."
  },
  {
    id: "11",
    title: "Al-Bukẖārī on the Uncreated Qurʾān",
    category: "ʿAqīdah",
    author: "Imām al-Bukhārī",
    summary: "Imām al-Bukẖārī affirms that the Qurʾān is the Speech of Allāh and uncreated, distinguishing between the Creator's Command and His creation."
  },
  {
    id: "16",
    title: "The Names & Attributes of Allāh",
    category: "ʿAqīdah",
    speaker: "Abū Ṭalḥah Dāwūd Burbank",
    summary: "A beneficial discourse elucidating the foundational principles regarding the Names and Attributes of Allāh according to the creed of the Salaf."
  },
  {
    id: "17",
    title: "Glad Tidings to the One Who Controls His Tongue",
    category: "Heart-Softeners",
    author: "Thawbān (Kitāb az-Zuhd — Imām Aḥmad)",
    summary: "A narration from Thawbān, the freed slave of the Messenger of Allāh ﷺ, on the virtues of guarding the tongue, being content with one's home, and weeping over sins."
  },
  {
    id: "18",
    title: "Al-Bukẖārī on the Victorious Group & Consensus on the Qurʾān",
    category: "ʿAqīdah",
    author: "Imām al-Bukhārī (Khalq Af'āl al-'Ibād)",
    summary: "Imām al-Bukẖārī identifies the Victorious Group (aṭ-Ṭāʾifah aẓ-Ẓāhirah), cites the unbroken consensus (Ijmāʿ) across Islamic lands that the Qurʾān is the uncreated Speech of Allāh, and clarifies the true stance of Imām Aḥmad while rejecting speculative theology."
  },
  {
    id: "19",
    title: "Sharḥ as-Sunnah — Imām al-Barbahārī (Full Series)",
    category: "ʿAqīdah",
    speaker: "Abū Khadeejah ʿAbdul-Wāḥid",
    author: "Imām Abū Muḥammad al-Ḥasan ibn ʿAlī ibn Khalaf al-Barbahārī",
    summary: "A comprehensive video lecture series explaining the classical creed Sharḥ as-Sunnah by Imām al-Barbahārī, delivered by Abū Khadeejah ʿAbdul-Wāḥid across 7 lessons curated by Abū Ṭalḥah al-ʾAfġhānī from @FawaidAbuKhadeejah."
  },
  {
    id: "20",
    title: "Having Good Thoughts About Allāh (Ḥusn aẓ-Ẓann)",
    category: "Heart-Softeners",
    speaker: "Abū Ṭalḥah Dāwūd Burbank",
    summary: "A heartfelt reminder expounding upon having good expectations of Allāh (Ḥusn aẓ-Ẓann billāh), relying upon His infinite mercy, and combining hope with righteous actions. Curated by Abū Mundhir from @FawaidAbuTalhaBurbank."
  },
  {
    id: "21",
    title: "Benefits of Giving Zakāt",
    category: "Heart-Softeners",
    speaker: "Abū Ṭalḥah Dāwūd Burbank",
    summary: "A beneficial discourse elucidating the profound spiritual, personal, and societal benefits of establishing the pillar of Zakāt and purifying one's wealth. Curated by Abū Mundhir from @FawaidAbuTalhaBurbank."
  },
  {
    id: "22",
    title: "Blameworthy 'Taqlīd' (Blind Following)",
    category: "Uṣool",
    speaker: "Abū Ṭalḥah Dāwūd Burbank",
    summary: "A vital clarification on the distinction between permissible following of scholars and blameworthy fanatical blind following (Taqlīd) that opposes authentic proofs. Curated by Abū Mundhir from @FawaidAbuTalhaBurbank."
  },
  {
    id: "23",
    title: "Who Are \"The Image Makers\"?",
    category: "Miscellaneous",
    speaker: "Abū Ṭalḥah Dāwūd Burbank",
    author: "Shaykh ʿAbdullāh al-Ghudayyān",
    summary: "An essential translation and explanation of the verdict of Shaykh ʿAbdullāh al-Ghudayyān clarifying the prophetic warnings regarding picture-makers (al-Muṣawwirūn). Curated by Abū Mundhir from @FawaidAbuTalhaBurbank."
  }
];

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/search", async (req, res) => {
    try {
      const { query } = req.body;
      if (!query) {
        return res.json({ ids: [] });
      }

      if (!process.env.GEMINI_API_KEY) {
        throw new Error("GEMINI_API_KEY is missing");
      }

      const prompt = `You are a semantic search engine.
The user is searching for something matching this query: "${query}"

Here are the available documents:
${JSON.stringify(MOCK_DATA, null, 2)}

Return a list of document IDs that are semantically relevant to the user's query.
CRITICAL: Be extremely robust to different English transliterations of Arabic words. For example, "sarih", "sareeh", "saree", "sari" are the same. "sunnah", "sunna", "soonna" are the same. "aqidah", "aqeeda", "aqeedah" are the same. Map the user's query phonetic meaning to the Arabic words in the titles and summaries. If the user mentions concepts, authors, topics, or keywords related to a document, include its ID.`;

      const ai = getGenAI();
      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              ids: {
                type: Type.ARRAY,
                items: {
                  type: Type.STRING
                },
                description: "Array of matching document IDs"
              }
            }
          }
        }
      });

      let jsonStr = response.text?.trim() || '{"ids": []}';
      const parsed = JSON.parse(jsonStr);
      res.json({ ids: parsed.ids || [] });
    } catch (error: any) {
      // Silently fallback to simple text matching if the AI model is unavailable or errors out
      try {
        const { query } = req.body;
        
        // Normalize Arabic transliteration variations for better fallback matching
        const normalizeText = (str: string) => {
          return (str || "").toLowerCase()
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // strip diacritics (ṣ -> s)
            .replace(/[^a-z0-9\s]/g, ' ') // replace punctuation/special chars with space (e.g. as-sunnah -> as sunnah)
            .replace(/ee/g, 'i')
            .replace(/oo/g, 'u')
            .replace(/ah\b/g, 'a') // 'ah' at the end of word to 'a'
            .replace(/\s+/g, ' ') // collapse multiple spaces
            .trim();
        };

        const q = normalizeText(query);
        const fallbackIds = MOCK_DATA.filter(doc => 
          normalizeText(doc.title).includes(q) || 
          normalizeText(doc.summary).includes(q) ||
          normalizeText(doc.category).includes(q)
        ).map(doc => doc.id);
        
        res.json({ ids: fallbackIds });
      } catch (fallbackError) {
        res.status(500).json({ error: error.message });
      }
    }
  });

  // Serve static files directly from public directory
  const rootDir = process.cwd();
  app.use(express.static(path.join(rootDir, 'public')));

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(rootDir, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
