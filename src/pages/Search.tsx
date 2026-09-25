import { useState, useEffect, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { MOCK_DATA, Translator, CATEGORIES, ContentType } from '../data';
import { ItemCard } from '../components/ItemCard';
import { SearchBar } from '../components/SearchBar';
import { ArrowLeft, Columns, LayoutGrid, LayoutList } from 'lucide-react';
import Fuse from 'fuse.js';
import { useAllNotes } from '../hooks/useNotes';

type Tag = 'all' | ContentType;

export function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const navigate = useNavigate();
  const { notes } = useAllNotes();
  
  const activeTranslator = (searchParams.get('translator') as Translator | 'all') || 'all';
  const activeTag = (searchParams.get('tag') as Tag) || 'all';
  const activeCategory = searchParams.get('category') || 'all';
  
  const [isSearching, setIsSearching] = useState(false);
  const [semanticResultIds, setSemanticResultIds] = useState<string[] | null>(null);
  
  const [gridCols, setGridCols] = useState<1 | 2 | 4>(2);

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value === 'all' || !value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    setSearchParams(params);
  };

  const searchableData = useMemo(() => {
    return MOCK_DATA.map(item => {
      const note = notes.find(n => n.documentId === item.id);
      const noteContentStr = note ? note.content.replace(/<[^>]*>?/gm, ' ') : '';
      const htmlTextStr = item.htmlText ? item.htmlText.replace(/<[^>]*>?/gm, ' ') : '';

      const rawArabic = item.arabicText || '';
      const cleanArabic = rawArabic
        .replace(/[\u064B-\u065F\u0670\u06D6-\u06ED]/g, '')
        .replace(/[إأآا]/g, 'ا')
        .replace(/ى/g, 'ي')
        .replace(/ـ/g, '');

      return {
        id: item.id,
        title: item.title,
        summary: item.summary || '',
        category: item.category,
        author: item.author || '',
        speaker: item.speaker || '',
        englishText: item.englishText || '',
        arabicText: rawArabic,
        cleanArabic,
        htmlTextStr,
        noteContent: noteContentStr,
      };
    });
  }, [notes]);

  const fuse = useMemo(() => new Fuse(searchableData, {
    keys: [
      { name: 'cleanArabic', weight: 3.5 },
      { name: 'arabicText', weight: 3 },
      { name: 'title', weight: 3 },
      { name: 'author', weight: 2.5 },
      { name: 'speaker', weight: 2.5 },
      { name: 'category', weight: 1.5 },
      { name: 'noteContent', weight: 2 },
      { name: 'summary', weight: 1.2 },
      { name: 'englishText', weight: 1 },
      { name: 'htmlTextStr', weight: 0.8 }
    ],
    threshold: 0.3,
    ignoreLocation: true,
    minMatchCharLength: 2,
    useExtendedSearch: true
  }), [searchableData]);

  useEffect(() => {
    if (!query) {
      setSemanticResultIds(null);
      return;
    }
    
    setIsSearching(true);
    
    const timeoutId = setTimeout(() => {
      // Extended search pattern: replace spaces with ' to allow matching both words anywhere
      const queryPattern = query.trim().split(/\s+/).map(t => `'${t}`).join(' ');
      let results = fuse.search(queryPattern);
      
      // If extended search fails or yields too few results, try normal search as fallback
      if (results.length === 0) {
        results = fuse.search(query);
      }

      // If still no results and query contains Arabic, try normalized diacritic-stripped Arabic search
      if (results.length === 0) {
        const cleanQuery = query
          .replace(/[\u064B-\u065F\u0670\u06D6-\u06ED]/g, '')
          .replace(/[إأآا]/g, 'ا')
          .replace(/ى/g, 'ي')
          .replace(/ـ/g, '')
          .trim();
        if (cleanQuery && cleanQuery !== query) {
          results = fuse.search(cleanQuery);
        }
      }

      setSemanticResultIds(results.map(r => r.item.id));
      setIsSearching(false);
    }, 50);

    return () => clearTimeout(timeoutId);
  }, [query, fuse]);

  const handleSearch = (newQuery: string) => {
    if (newQuery) {
      setSearchParams({ q: newQuery });
    } else {
      navigate('/');
    }
  };

  const filteredData = MOCK_DATA.filter(item => {
    const matchTranslator = activeTranslator === 'all' || item.translator === activeTranslator;
    const matchTag = activeTag === 'all' || item.type === activeTag;
    const matchCategory = activeCategory === 'all' || item.category === activeCategory;
    
    if (semanticResultIds !== null) {
      return semanticResultIds.includes(item.id) && matchTranslator && matchTag && matchCategory;
    }

    return matchTranslator && matchTag && matchCategory;
  });

  const displayData = [...filteredData];
  if (semanticResultIds !== null) {
    displayData.sort((a, b) => {
      const idxA = semanticResultIds.indexOf(a.id);
      const idxB = semanticResultIds.indexOf(b.id);
      return (idxA === -1 ? 999 : idxA) - (idxB === -1 ? 999 : idxB);
    });
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-5xl mx-auto">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-[#231C16] hover:text-accent transition-colors py-2 px-4 rounded-xl bg-[#FFFDF9] shadow-2xs border border-[#E7DFC9] hover:border-[#C19B53]/80 w-max cursor-pointer"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="font-medium text-sm">Go Back</span>
      </button>

      <section className="text-center space-y-8">
        <div className="max-w-xl mx-auto">
          <SearchBar initialQuery={query} onSearch={handleSearch} isSearching={isSearching} />
        </div>

        {semanticResultIds !== null && !isSearching && (
          <p className="text-lg font-heading font-medium text-[#231C16]">
            {filteredData.length} result{filteredData.length !== 1 ? 's' : ''} found for "{query}"
          </p>
        )}

        {/* Filters */}
        <div className="space-y-4 pt-4 border-t border-[#E7DFC9]/80">
          {/* Primary Content Type Toggles */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5">
            {(['all', 'article', 'video', 'audio', 'pdf', 'quote', 'short treatise'] as Tag[]).map(tag => (
              <button
                key={tag}
                id={`search-filter-tag-${tag.replace(/\s+/g, '-')}`}
                onClick={() => updateFilter('tag', tag)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                  activeTag === tag
                    ? 'bg-accent text-white shadow-2xs font-semibold'
                    : 'bg-[#F5EFE3] text-[#5A493B] hover:bg-[#EAE1D0] hover:text-[#231C16] border border-[#DDD2B8]'
                }`}
              >
                {tag === 'all' ? 'All' : tag === 'article' ? 'Articles' : tag === 'video' ? 'Videos' : tag === 'audio' ? 'Audios' : tag === 'pdf' ? 'PDFs' : tag === 'quote' ? 'Quotes' : 'Short Treatises'}
              </button>
            ))}
            
            {activeCategory !== 'all' && (
              <button
                onClick={() => updateFilter('category', 'all')}
                className="px-4 py-1.5 rounded-full text-sm font-medium transition-colors bg-amber-100 text-amber-900 hover:bg-amber-200 flex items-center gap-1 border border-amber-300 cursor-pointer"
                title="Clear category filter"
              >
                Category: {activeCategory} 
                <span className="ml-1 text-amber-700 font-bold">&times;</span>
              </button>
            )}
          </div>

          {/* Secondary Translator Sub-Toggles */}
          <div className="flex flex-wrap justify-center items-center gap-2 pt-1">
            <button
              onClick={() => updateFilter('translator', 'all')}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTranslator === 'all' 
                  ? 'bg-primary text-white shadow-2xs' 
                  : 'bg-[#FFFDF9] border border-[#E7DFC9] text-[#6D5C4F] hover:bg-[#F5EFE3] hover:text-[#231C16]'
              }`}
            >
              All Works
            </button>
            <button
              onClick={() => updateFilter('translator', 'Abu_Talhah')}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTranslator === 'Abu_Talhah' 
                  ? 'bg-primary text-white shadow-2xs' 
                  : 'bg-[#FFFDF9] border border-[#E7DFC9] text-[#6D5C4F] hover:bg-[#F5EFE3] hover:text-[#231C16]'
              }`}
            >
              Abū Ṭalḥah al-ʾAfġhānī
            </button>
            <button
              onClick={() => updateFilter('translator', 'Abu_Mundhir')}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTranslator === 'Abu_Mundhir' 
                  ? 'bg-primary text-white shadow-2xs' 
                  : 'bg-[#FFFDF9] border border-[#E7DFC9] text-[#6D5C4F] hover:bg-[#F5EFE3] hover:text-[#231C16]'
              }`}
            >
              Abū Mundhir ar-Ruwāndī
            </button>
          </div>
        </div>
      </section>

      {/* Content Categories Display */}
      <div className="space-y-6">
        <div className="flex justify-end items-center mb-6">
          <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-lg p-1 shadow-sm">
            <button
              onClick={() => setGridCols(1)}
              title="1 per row"
              className={`p-1.5 rounded-md transition-colors ${gridCols === 1 ? 'bg-slate-100 text-primary' : 'text-slate-400 hover:text-slate-600'}`}
            >
              <LayoutList className="w-5 h-5" />
            </button>
            <button
              onClick={() => setGridCols(2)}
              title="2 per row"
              className={`p-1.5 rounded-md transition-colors ${gridCols === 2 ? 'bg-slate-100 text-primary' : 'text-slate-400 hover:text-slate-600'}`}
            >
              <Columns className="w-5 h-5" />
            </button>
            <button
              onClick={() => setGridCols(4)}
              title="4 per row"
              className={`p-1.5 rounded-md transition-colors ${gridCols === 4 ? 'bg-slate-100 text-primary' : 'text-slate-400 hover:text-slate-600'}`}
            >
              <LayoutGrid className="w-5 h-5" />
            </button>
          </div>
        </div>

        {displayData.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">No documents found matching your search and filters.</p>
          </div>
        ) : (
          <div className={`grid gap-6 ${gridCols === 1 ? 'grid-cols-1' : gridCols === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'}`}>
            {displayData.map(item => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
