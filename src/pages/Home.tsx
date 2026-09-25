import { useState, useMemo } from 'react';
import { MOCK_DATA, CATEGORIES, ContentType } from '../data';
import { ItemCard } from '../components/ItemCard';
import { SearchBar } from '../components/SearchBar';
import { DailyAtharCard } from '../components/DailyAtharCard';
import { ContinueReadingBanner } from '../components/ContinueReadingBanner';
import { FadeInScroll } from '../components/FadeInScroll';
import { useReadingStats } from '../hooks/useReadingStats';
import { BookOpen, Clock, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type ActiveType = 'all' | ContentType | 'overview';
type TranslatorFilter = 'all' | 'Abu_Talhah' | 'Abu_Mundhir';

export function Home() {
  const [activeType, setActiveType] = useState<ActiveType>('all');
  const [activeTranslator, setActiveTranslator] = useState<TranslatorFilter>('all');
  const { stats } = useReadingStats();

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
    <div className="space-y-8 animate-in fade-in duration-500 max-w-6xl mx-auto">
      
      {/* Refined Minimalist Header & Search Area */}
      <section className="text-center pt-1 sm:pt-4">
        {/* Subtle, unpretentious title with classical manuscript flourish */}
        <div className="flex items-center justify-center gap-2.5 mb-1.5 opacity-70">
          <span className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#C19B53]" />
          <span className="text-[#C19B53] text-[11px] font-serif">۞</span>
          <span className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-[#C19B53]" />
        </div>
        <h1 className="font-heading text-xl sm:text-3xl text-primary font-medium tracking-tight mb-4 sm:mb-5">
          Translations & Athār
        </h1>
        
        {/* Compact Search Bar */}
        <div className="max-w-lg mx-auto mb-4 sm:mb-6 relative z-30 px-1 sm:px-0">
          <SearchBar />
        </div>

        {/* Continue Reading / Resume Previous Book */}
        <div className="max-w-2xl mx-auto px-1 sm:px-0">
          <ContinueReadingBanner />
        </div>

        {/* Featured Daily Athar Benefit - begins in a clean collapsed bar */}
        <div className="max-w-2xl mx-auto mb-5 sm:mb-6 px-1 sm:px-0">
          <DailyAtharCard />
        </div>
        
        {/* Clean, smaller Content Type Pills - horizontally scrollable or wrapping nicely */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-3xl mx-auto mb-3 px-1">
          {[
            { id: 'all', label: 'All' },
            { id: 'pdf', label: 'PDFs' },
            { id: 'short treatise', label: 'Treatises' },
            { id: 'quote', label: 'Quotes' },
            { id: 'article', label: 'Articles' },
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
                  ? 'bg-accent text-white shadow-2xs font-semibold'
                  : 'bg-[#EFE7D8]/80 text-[#5A493B] hover:bg-[#E6DCB8] hover:text-[#231C16] border border-[#E7DFC9]/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Subtle Translator Sub-Toggles */}
        {activeType !== 'overview' && (
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-xl mx-auto mb-6 sm:mb-8 animate-in fade-in duration-200 px-2">
            <button
              id="home-translator-all"
              onClick={() => setActiveTranslator('all')}
              className={`px-3 py-1.5 sm:py-1 rounded-lg text-xs sm:text-[11px] font-medium transition-all cursor-pointer touch-manipulation active:scale-95 ${
                activeTranslator === 'all'
                  ? 'bg-primary text-white shadow-2xs font-semibold'
                  : 'bg-[#EFE7D8]/50 sm:bg-transparent text-[#6D5C4F] hover:text-[#231C16] hover:bg-[#EFE7D8]/80'
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
                  : 'bg-[#EFE7D8]/50 sm:bg-transparent text-[#6D5C4F] hover:text-[#231C16] hover:bg-[#EFE7D8]/80'
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
                  : 'bg-[#EFE7D8]/50 sm:bg-transparent text-[#6D5C4F] hover:text-[#231C16] hover:bg-[#EFE7D8]/80'
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
            <div className="bg-white p-3.5 rounded-xl border border-slate-200/90 shadow-2xs flex items-center space-x-3">
              <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
                <BookOpen className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Finished</p>
                <p className="text-lg font-bold text-slate-900">{stats.readBooks.length}</p>
              </div>
            </div>
            
            <div className="bg-white p-3.5 rounded-xl border border-slate-200/90 shadow-2xs flex items-center space-x-3">
              <div className="bg-emerald-50 p-2 rounded-lg text-emerald-600">
                <Clock className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Reading Time</p>
                <p className="text-lg font-bold text-slate-900">{formattedTime}</p>
              </div>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-slate-200/90 shadow-2xs flex items-center space-x-3">
              <div className="bg-amber-50 p-2 rounded-lg text-amber-600">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div className="text-left overflow-hidden w-full">
                <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Top Field</p>
                <p className="text-sm font-bold text-slate-900 truncate" title={topCategory}>{topCategory}</p>
              </div>
            </div>
          </div>

          {/* Quick link to Glossary */}
          <div className="bg-white border border-slate-200/90 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-2xs">
            <div className="flex items-center gap-3 text-left">
              <div className="p-2.5 bg-amber-50 rounded-lg text-amber-800">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-sm text-slate-900">Classical Glossary & Terminology</h4>
                <p className="text-xs text-slate-500">Definitions and theological context according to the Salaf</p>
              </div>
            </div>
            <Link
              to="/glossary"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap"
            >
              <span>Explore</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </FadeInScroll>
      ) : (
        <div className="space-y-12">
          {/* Content Categories Display */}
          <div className="space-y-12">
            {filteredData.length === 0 ? (
              <div className="text-center py-12 bg-slate-50/50 rounded-xl border border-dashed border-slate-200">
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
                  <FadeInScroll key={category} className="border-t border-slate-200/80 pt-6">
                    <div className="flex items-center space-x-3 mb-6">
                      <h2 className="font-heading text-lg sm:text-xl text-primary font-medium">{category}</h2>
                      <div className="flex-1 h-px bg-slate-200/80"></div>
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
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}
