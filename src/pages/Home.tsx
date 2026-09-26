import { useState, useMemo } from 'react';
import { MOCK_DATA, CATEGORIES, ContentType } from '../data';
import { ItemCard } from '../components/ItemCard';
import { SearchBar } from '../components/SearchBar';
import { DailyAtharCard } from '../components/DailyAtharCard';
import { ContinueReadingBanner } from '../components/ContinueReadingBanner';
import { FadeInScroll } from '../components/FadeInScroll';
import { AtharSwipeModal } from '../components/AtharSwipeModal';
import { useReadingStats } from '../hooks/useReadingStats';
import { BookOpen, Clock, TrendingUp, ArrowRight, Sparkles, Compass, Hash } from 'lucide-react';
import { Link } from 'react-router-dom';

type ActiveType = 'all' | ContentType | 'overview';
type TranslatorFilter = 'all' | 'Abu_Talhah' | 'Abu_Mundhir';

export function Home() {
  const [activeType, setActiveType] = useState<ActiveType>('all');
  const [activeTranslator, setActiveTranslator] = useState<TranslatorFilter>('all');
  const [isSwipeModalOpen, setIsSwipeModalOpen] = useState(false);
  const { stats } = useReadingStats();

  // All quote items for the swipeable reader
  const atharItems = useMemo(() => {
    return MOCK_DATA.filter(item => item.type === 'quote' || item.englishText);
  }, []);

  const articlesCount = useMemo(() => MOCK_DATA.filter(i => i.type === 'article').length, []);
  const atharCount = atharItems.length;
  const topicsCount = CATEGORIES.length;

  const filteredData = useMemo(() => {
    const list = MOCK_DATA.filter(item => {
      const matchTranslator = activeTranslator === 'all' || item.translator === activeTranslator;
      const matchTag = activeType === 'all' || item.type === activeType;
      return matchTranslator && matchTag;
    });

    if (activeType === 'all') {
      const typePriority: Record<string, number> = {
        'pdf': 1,
        'short treatise': 1,
        'quote': 2,
        'article': 2,
        'video': 3,
        'audio': 3,
      };

      return [...list].sort((a, b) => {
        const pA = typePriority[a.type] ?? 99;
        const pB = typePriority[b.type] ?? 99;
        if (pA !== pB) {
          return pA - pB;
        }
        return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
      });
    }

    return list;
  }, [activeType, activeTranslator]);

  const formattedTime = useMemo(() => {
    const hours = Math.floor(stats.timeSpentSeconds / 3600);
    const minutes = Math.floor((stats.timeSpentSeconds % 3600) / 60);
    if (hours > 0) return `${hours}h ${minutes}m`;
    return `${minutes}m`;
  }, [stats.timeSpentSeconds]);

  const topCategory = useMemo(() => {
    const categories = Object.entries(stats.categoryViews);
    if (categories.length === 0) return 'None yet';
    return categories.sort((a, b) => (b[1] as number) - (a[1] as number))[0][0];
  }, [stats.categoryViews]);

  return (
    <div className="space-y-12 animate-in fade-in duration-500 max-w-6xl mx-auto">
      
      {/* Al-Fānūs Classical Hero Section */}
      <section className="relative pt-4 sm:pt-10 pb-6 px-4 text-center sm:text-left">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="flex-1 space-y-4">
            {/* Eyebrow in Al-Fānūs tracking-widest style */}
            <div className="inline-flex items-center gap-2">
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#8C6D3B] dark:text-[#D4AF37]">
                A LIBRARY FOR THE SEEKING HEART
              </span>
            </div>

            {/* Headline with elegant terracotta italic serif word */}
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-normal text-[#1E1710] dark:text-[#FAF6EE] tracking-tight leading-[1.15]">
              Read what <span className="font-serif italic font-medium text-[#9E3A2B] dark:text-[#F87171]">benefits.</span>
            </h1>

            {/* Subtitle */}
            <p className="font-serif text-[#5A493B] dark:text-[#C5BAA9] text-base sm:text-lg leading-relaxed max-w-xl">
              A curated collection of ’Athar and Articles drawn from the words of the righteous and the insights of scholars — gathered for reflection, learning, and the preservation of truth.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-2">
              <button
                onClick={() => {
                  setActiveType('quote');
                  const el = document.getElementById('archive-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-2.5 rounded-full bg-[#C19B53] hover:bg-[#A88440] text-white font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-sm active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <span>Explore ’Athar</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setActiveType('article');
                  const el = document.getElementById('archive-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-2.5 rounded-full bg-[#231C16] hover:bg-[#3D2E22] text-[#FAF6EE] font-medium text-xs sm:text-sm tracking-wide transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                Read Articles
              </button>

              <button
                onClick={() => setIsSwipeModalOpen(true)}
                className="px-4 py-2.5 rounded-full bg-[#FAF6EE] dark:bg-[#1E222D] hover:bg-[#F1E8D5] text-[#231C16] dark:text-[#FAF6EE] border border-[#DDD2B8] dark:border-[#384152] font-medium text-xs sm:text-sm transition-all flex items-center gap-1.5 cursor-pointer"
                title="Browse scholar statements one by one"
              >
                <span>📖 Explore by swiping</span>
              </button>
            </div>
          </div>

          {/* Decorative Calligraphy & Emblem Circle on Right */}
          <div className="shrink-0 flex items-center justify-center">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-radial from-[#F1E8D5] to-[#E7DFC9] dark:from-[#262B38] dark:to-[#1A1D26] border border-[#DDD2B8] dark:border-[#384152] p-6 shadow-inner flex flex-col items-center justify-center relative select-none">
              <span className="font-arabic text-3xl sm:text-4xl text-[#9E3A2B] dark:text-[#F87171] leading-none mb-1">
                الفانوس
              </span>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#8C6D3B] dark:text-[#D4AF37]">
                DĀR AL-WAḤY
              </span>
              <span className="text-base text-[#C19B53] mt-1">۞</span>
            </div>
          </div>
        </div>

        {/* Live Stats Strip */}
        <div className="max-w-4xl mx-auto mt-8 pt-5 border-t border-[#E7DFC9] dark:border-[#2C3240] flex flex-wrap items-center justify-center sm:justify-between gap-4 text-xs font-mono font-medium text-[#7D6B5C] dark:text-[#9A8F82]">
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-[#1E1710] dark:text-[#FAF6EE]">{articlesCount}</span>
            <span className="uppercase">Articles</span>
          </div>
          <span className="text-[#DDD2B8] dark:text-[#384152]">•</span>
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-[#1E1710] dark:text-[#FAF6EE]">{topicsCount}</span>
            <span className="uppercase">Topics</span>
          </div>
          <span className="text-[#DDD2B8] dark:text-[#384152]">•</span>
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-[#1E1710] dark:text-[#FAF6EE]">{atharCount}</span>
            <span className="uppercase">’Athar</span>
          </div>
          <span className="text-[#DDD2B8] dark:text-[#384152]">•</span>
          <div className="flex items-center gap-1.5 text-[#9E3A2B] dark:text-[#F87171] font-semibold">
            <span>Often Updated</span>
          </div>
        </div>
      </section>

      {/* "Topics for the Road" Section (Screenshot 2026-09-25 175702.png) */}
      <section className="space-y-4 px-2">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#8C6D3B] dark:text-[#D4AF37] block">
              BROWSE WITH SINCERE INTENTION
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1E1710] dark:text-[#FAF6EE]">
              Topics for the road
            </h2>
          </div>
        </div>

        {/* Sufyān al-Thawrī Quote Banner */}
        <div className="py-2.5 px-4 rounded-xl bg-[#FAF6EE] dark:bg-[#1B1E26] border border-[#E7DFC9] dark:border-[#2C3240] text-center">
          <p className="font-mono text-xs font-semibold tracking-wider uppercase text-[#9E3A2B] dark:text-[#F87171]">
            SUFYĀN AL-THAWRĪ SAID : RELIGION IS NOTHING BUT THE 'ATHAR
          </p>
        </div>

        {/* Horizontal Topic Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 pt-1">
          {CATEGORIES.map(cat => {
            const count = MOCK_DATA.filter(i => i.category === cat).length;
            return (
              <div
                key={cat}
                onClick={() => {
                  const el = document.getElementById(`category-${cat}`);
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="p-4 rounded-2xl bg-[#FFFDF9] dark:bg-[#181B22] border border-[#E7DFC9] dark:border-[#2C3240] hover:border-[#C19B53] transition-all shadow-[0_2px_8px_rgba(40,30,20,0.03)] hover:shadow-md cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-1 text-xs font-mono text-[#8C6D3B] dark:text-[#D4AF37] mb-2">
                    <Hash className="w-3 h-3" />
                    <span>{count} 'athar</span>
                  </div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#1E1710] dark:text-[#FAF6EE] group-hover:text-[#9E3A2B] transition-colors leading-snug">
                    {cat}
                  </h3>
                </div>

                <div className="mt-4 pt-2 border-t border-[#E7DFC9]/60 dark:border-[#2C3240] flex items-center justify-between text-[11px] font-semibold text-[#8C6D3B] dark:text-[#D4AF37]">
                  <span>View 'Athar</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Main Archive Filter & Search Controls */}
      <section id="archive-section" className="space-y-6 pt-4">
        {/* Compact Search Bar */}
        <div className="max-w-lg mx-auto relative z-30 px-1">
          <SearchBar />
        </div>

        {/* Continue Reading / Resume Previous Book */}
        <div className="max-w-2xl mx-auto px-1">
          <ContinueReadingBanner />
        </div>

        {/* Featured Daily Athar Benefit */}
        <div className="max-w-2xl mx-auto px-1">
          <DailyAtharCard />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-3xl mx-auto px-1">
          {[
            { id: 'all', label: 'All' },
            { id: 'quote', label: '’Athar & Quotes' },
            { id: 'article', label: 'Articles' },
            { id: 'pdf', label: 'PDFs' },
            { id: 'short treatise', label: 'Treatises' },
            { id: 'video', label: 'Videos' },
            { id: 'audio', label: 'Audios' },
            { id: 'overview', label: 'Stats' },
          ].map(tab => (
            <button
              key={tab.id}
              id={`home-type-${tab.id.replace(/\s+/g, '-')}`}
              onClick={() => setActiveType(tab.id as ActiveType)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer touch-manipulation active:scale-95 ${
                activeType === tab.id
                  ? 'bg-[#9E3A2B] text-white shadow-2xs font-semibold'
                  : 'bg-[#EFE7D8]/80 dark:bg-[#1E222D] text-[#5A493B] dark:text-[#C5BAA9] hover:bg-[#E6DCB8] hover:text-[#231C16] border border-[#E7DFC9]/60 dark:border-[#384152]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Translator Sub-Toggles */}
        {activeType !== 'overview' && (
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-xl mx-auto animate-in fade-in duration-200 px-2">
            <button
              id="home-translator-all"
              onClick={() => setActiveTranslator('all')}
              className={`px-3 py-1.5 sm:py-1 rounded-lg text-xs sm:text-[11px] font-medium transition-all cursor-pointer touch-manipulation active:scale-95 ${
                activeTranslator === 'all'
                  ? 'bg-primary text-white shadow-2xs font-semibold'
                  : 'bg-[#EFE7D8]/50 sm:bg-transparent text-[#6D5C4F] dark:text-[#A09383] hover:text-[#231C16]'
              }`}
            >
              All Works
            </button>
            <span className="text-[#C5BAA9] text-xs hidden sm:inline">•</span>
            <button
              id="home-translator-abu-talhah"
              onClick={() => setActiveTranslator('Abu_Talhah')}
              className={`px-3 py-1.5 sm:py-1 rounded-lg text-xs sm:text-[11px] font-medium transition-all cursor-pointer touch-manipulation active:scale-95 ${
                activeTranslator === 'Abu_Talhah'
                  ? 'bg-primary text-white shadow-2xs font-semibold'
                  : 'bg-[#EFE7D8]/50 sm:bg-transparent text-[#6D5C4F] dark:text-[#A09383] hover:text-[#231C16]'
              }`}
            >
              Abū Ṭalḥah
            </button>
            <span className="text-[#C5BAA9] text-xs hidden sm:inline">•</span>
            <button
              id="home-translator-abu-mundhir"
              onClick={() => setActiveTranslator('Abu_Mundhir')}
              className={`px-3 py-1.5 sm:py-1 rounded-lg text-xs sm:text-[11px] font-medium transition-all cursor-pointer touch-manipulation active:scale-95 ${
                activeTranslator === 'Abu_Mundhir'
                  ? 'bg-primary text-white shadow-2xs font-semibold'
                  : 'bg-[#EFE7D8]/50 sm:bg-transparent text-[#6D5C4F] dark:text-[#A09383] hover:text-[#231C16]'
              }`}
            >
              Abū Mundhir
            </button>
          </div>
        )}
      </section>

      {/* Main Content Area based on Active Type */}
      {activeType === 'overview' ? (
        <FadeInScroll className="max-w-2xl mx-auto space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-white dark:bg-[#181B22] p-3.5 rounded-xl border border-slate-200/90 dark:border-[#2C3240] shadow-2xs flex items-center space-x-3">
              <div className="bg-blue-50 dark:bg-blue-950 p-2 rounded-lg text-blue-600 dark:text-blue-400">
                <BookOpen className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Finished</p>
                <p className="text-lg font-bold text-slate-900 dark:text-slate-100">{stats.readBooks.length}</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-[#181B22] p-3.5 rounded-xl border border-slate-200/90 dark:border-[#2C3240] shadow-2xs flex items-center space-x-3">
              <div className="bg-emerald-50 dark:bg-emerald-950 p-2 rounded-lg text-emerald-600 dark:text-emerald-400">
                <Clock className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Reading Time</p>
                <p className="text-lg font-bold text-slate-900 dark:text-slate-100">{formattedTime}</p>
              </div>
            </div>

            <div className="bg-white dark:bg-[#181B22] p-3.5 rounded-xl border border-slate-200/90 dark:border-[#2C3240] shadow-2xs flex items-center space-x-3">
              <div className="bg-amber-50 dark:bg-amber-950 p-2 rounded-lg text-amber-600 dark:text-amber-400">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div className="text-left overflow-hidden w-full">
                <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Top Field</p>
                <p className="text-sm font-bold text-slate-900 dark:text-slate-100 truncate" title={topCategory}>{topCategory}</p>
              </div>
            </div>
          </div>

          {/* Quick link to Glossary */}
          <div className="bg-white dark:bg-[#181B22] border border-slate-200/90 dark:border-[#2C3240] rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-2xs">
            <div className="flex items-center gap-3 text-left">
              <div className="p-2.5 bg-amber-50 dark:bg-amber-950 rounded-lg text-amber-800 dark:text-amber-300">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-sm text-slate-900 dark:text-slate-100">Classical Glossary & Terminology</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">Definitions and theological context according to the Salaf</p>
              </div>
            </div>
            <Link
              to="/glossary"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap"
            >
              <span>Explore</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </FadeInScroll>
      ) : (
        <div className="space-y-12">
          {filteredData.length === 0 ? (
            <div className="text-center py-12 bg-slate-50/50 dark:bg-slate-900/30 rounded-xl border border-dashed border-slate-200 dark:border-slate-800">
              <p className="text-slate-500 text-sm">
                No {activeType !== 'all' ? (activeType === 'article' ? 'articles' : activeType === 'video' ? 'videos' : activeType === 'audio' ? 'audios' : activeType === 'pdf' ? 'PDFs' : activeType === 'quote' ? 'quotes' : 'short treatises') : 'documents'} found
                {activeTranslator !== 'all' ? ` for ${activeTranslator === 'Abu_Talhah' ? 'Abū Ṭalḥah' : 'Abū Mundhir'}` : ''}.
              </p>
              <div className="mt-2.5 flex items-center justify-center gap-3">
                {activeType !== 'all' && (
                  <button 
                    onClick={() => setActiveType('all')}
                    className="text-xs text-primary hover:text-red-700 hover:underline font-semibold cursor-pointer"
                  >
                    View all types
                  </button>
                )}
                {activeTranslator !== 'all' && (
                  <button 
                    onClick={() => setActiveTranslator('all')}
                    className="text-xs text-primary hover:text-red-700 hover:underline font-semibold cursor-pointer"
                  >
                    View all translators
                  </button>
                )}
              </div>
            </div>
          ) : (
            CATEGORIES.map(category => {
              const itemsInCategory = filteredData.filter(item => item.category === category);
              
              if (itemsInCategory.length === 0) return null;

              return (
                <div key={category} id={`category-${category}`}>
                  <FadeInScroll className="border-t border-[#E7DFC9]/80 dark:border-[#2C3240] pt-6">
                    <div className="flex items-center space-x-3 mb-6">
                      <h2 className="font-heading text-lg sm:text-xl text-primary font-medium">{category}</h2>
                      <div className="flex-1 h-px bg-[#E7DFC9]/80 dark:bg-[#2C3240]"></div>
                      <span className="text-[11px] font-medium text-slate-400">
                        {itemsInCategory.length} {itemsInCategory.length === 1 ? 'item' : 'items'}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                      {itemsInCategory.map((item, idx) => (
                        <FadeInScroll key={item.id} delay={idx * 60} className="h-full flex flex-col">
                          <ItemCard item={item} />
                        </FadeInScroll>
                      ))}
                    </div>
                  </FadeInScroll>
                </div>
              );
            })
          )}
        </div>
      )}

      {/* Swipeable Athar Flashcard Modal */}
      <AtharSwipeModal
        items={atharItems}
        isOpen={isSwipeModalOpen}
        onClose={() => setIsSwipeModalOpen(false)}
      />
    </div>
  );
}
