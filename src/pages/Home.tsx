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

        {/* Featured Daily Athar Benefit */}
        <div className="max-w-2xl mx-auto mb-5 sm:mb-6 px-1 sm:px-0">
          <DailyAtharCard />
        </div>
        
        {/* Content Type Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-3xl mx-auto mb-3 px-1">
          {[
            { id: 'all', label: 'All' },
            { id: 'pdf', label: 'PDFs' },
            { id: 'short treatise', label: 'Treatises' },
            { id: 'quote', label: 'Quotes' },
            { id: 'article', label: 'Articles' },
            { id: 'audio', label: 'Audios' },
            { id: 'video', label: 'Videos' },
          ].map(type => (
            <button
              key={type.id}
              onClick={() => setActiveType(type.id as ActiveType)}
              className={`px-3 py-1 rounded-full text-xs font-serif transition-all duration-200 cursor-pointer ${
                activeType === type.id
                  ? 'bg-primary text-white shadow-xs font-semibold'
                  : 'bg-card text-foreground/75 hover:bg-card-hover border border-border/40'
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>

        {/* Translator Filters */}
        <div className="flex items-center justify-center gap-1.5 max-w-xl mx-auto mb-4 text-[11px] font-serif">
          <span className="text-foreground/50 mr-1">Translator:</span>
          {[
            { id: 'all', label: 'All' },
            { id: 'Abu_Talhah', label: 'Abū Ṭalḥah' },
            { id: 'Abu_Mundhir', label: 'Abū Mundhir' },
          ].map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTranslator(t.id as TranslatorFilter)}
              className={`px-2.5 py-0.5 rounded-full transition-all cursor-pointer ${
                activeTranslator === t.id
                  ? 'bg-accent/20 text-accent-foreground font-semibold border border-accent/40'
                  : 'text-foreground/60 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </section>

      {/* Main Content Feed */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-border/50 pb-2 px-1">
          <p className="text-xs text-foreground/60 font-serif">
            Showing <span className="font-semibold text-foreground">{filteredData.length}</span> items
          </p>
          <div className="flex items-center gap-3 text-xs text-foreground/60">
            <Link to="/library" className="hover:text-primary transition-colors flex items-center gap-1 font-serif">
              Full Library <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {filteredData.length === 0 ? (
          <div className="text-center py-12 bg-card rounded-xl border border-border/50 p-6">
            <p className="text-foreground/70 font-serif text-sm">No items found matching your filters.</p>
            <button
              onClick={() => {
                setActiveType('all');
                setActiveTranslator('all');
              }}
              className="mt-3 text-xs text-primary font-semibold hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredData.map(item => (
              <FadeInScroll key={item.id}>
                <ItemCard item={item} />
              </FadeInScroll>
            ))}
          </div>
        )}
      </div>

      {/* Reading Progress / Stats Widget */}
      {stats.timeSpentSeconds > 30 && (
        <section className="bg-card/60 backdrop-blur-xs border border-border/50 rounded-xl p-4 sm:p-5 mt-8">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-4 h-4 text-accent" />
            <h3 className="font-heading text-sm font-semibold text-foreground">Your Reading Journey</h3>
          </div>
          <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
            <div className="p-2 sm:p-3 bg-background/50 rounded-lg border border-border/30">
              <div className="flex items-center justify-center gap-1 text-[11px] text-foreground/60 mb-0.5">
                <BookOpen className="w-3 h-3" />
                <span>Read</span>
              </div>
              <p className="text-base sm:text-lg font-bold text-foreground font-mono">{stats.itemsRead.length}</p>
            </div>
            <div className="p-2 sm:p-3 bg-background/50 rounded-lg border border-border/30">
              <div className="flex items-center justify-center gap-1 text-[11px] text-foreground/60 mb-0.5">
                <Clock className="w-3 h-3" />
                <span>Time</span>
              </div>
              <p className="text-base sm:text-lg font-bold text-foreground font-mono">{formattedTime}</p>
            </div>
            <div className="p-2 sm:p-3 bg-background/50 rounded-lg border border-border/30">
              <div className="flex items-center justify-center gap-1 text-[11px] text-foreground/60 mb-0.5">
                <TrendingUp className="w-3 h-3" />
                <span>Focus</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-primary truncate mt-1">{topCategory}</p>
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
