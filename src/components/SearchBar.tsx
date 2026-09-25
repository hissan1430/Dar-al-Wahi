import { useState, useEffect, useRef } from 'react';
import { Loader2, Search, Clock, Keyboard, X, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchBarProps {
  initialQuery?: string;
  onSearch?: (query: string) => void;
  isSearching?: boolean;
}

export function SearchBar({ initialQuery = '', onSearch, isSearching = false }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showDiacriticsPad, setShowDiacriticsPad] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Classical Arabic diacritics (Harakāt) & special glyphs like Alfanus
  const ARABIC_DIACRITICS = [
    { char: 'َ', label: 'Fatḥah' },
    { char: 'ُ', label: 'Ḍammah' },
    { char: 'ِ', label: 'Kasrah' },
    { char: 'ْ', label: 'Sukūn' },
    { char: 'ّ', label: 'Shaddah' },
    { char: 'ً', label: 'Tanwīn Fatḥ' },
    { char: 'ٌ', label: 'Tanwīn Ḍamm' },
    { char: 'ٍ', label: 'Tanwīn Kasr' },
    { char: 'ـ', label: 'Kashīdah' },
    { char: 'ء', label: 'Hamzah' },
    { char: 'آ', label: 'Alif Maddah' },
    { char: 'إ', label: 'Hamzah Below' },
    { char: 'أ', label: 'Hamzah Above' },
  ];

  useEffect(() => {
    setSearchQuery(initialQuery);
  }, [initialQuery]);

  useEffect(() => {
    const savedSearches = localStorage.getItem('recentSearches');
    if (savedSearches) {
      try {
        setRecentSearches(JSON.parse(savedSearches));
      } catch (e) {
        console.error('Failed to parse recent searches');
      }
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
        setShowDiacriticsPad(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (queryToSearch = searchQuery) => {
    const trimmed = queryToSearch.trim();
    if (!trimmed) {
      if (onSearch) onSearch('');
      return;
    }
    
    // Add to recent searches
    setRecentSearches(prev => {
      const newRecent = [trimmed, ...prev.filter(q => q.toLowerCase() !== trimmed.toLowerCase())].slice(0, 5);
      localStorage.setItem('recentSearches', JSON.stringify(newRecent));
      return newRecent;
    });
    
    setIsSearchFocused(false);
    setShowDiacriticsPad(false);
    
    if (onSearch) {
      onSearch(trimmed);
    } else {
      navigate(`/search?q=${encodeURIComponent(trimmed)}`);
    }
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    if (onSearch) onSearch('');
    inputRef.current?.focus();
  };

  const insertDiacritic = (char: string) => {
    if (inputRef.current) {
      const start = inputRef.current.selectionStart ?? searchQuery.length;
      const end = inputRef.current.selectionEnd ?? searchQuery.length;
      const updated = searchQuery.slice(0, start) + char + searchQuery.slice(end);
      setSearchQuery(updated);
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
          inputRef.current.setSelectionRange(start + char.length, start + char.length);
        }
      }, 0);
    } else {
      setSearchQuery(prev => prev + char);
    }
  };

  return (
    <div ref={searchContainerRef} className="w-full relative z-40">
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#8C7A6B] group-focus-within:text-accent transition-colors">
          <Search className="h-4 w-4" />
        </div>
        <input
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsSearchFocused(true)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          placeholder="Search treaties, quotes, Arabic matn, scholars..."
          className="block w-full pl-10 pr-28 py-2.5 bg-[#FFFDF9] border border-[#E7DFC9] rounded-xl shadow-2xs focus:ring-2 focus:ring-accent/40 focus:border-accent text-[#231C16] text-sm placeholder-[#9C8B7D] transition-all font-sans"
        />
        
        <div className="absolute inset-y-1 right-1 flex items-center gap-1">
          {/* Diacritics Pad Trigger (Alfanus feature) */}
          <button
            type="button"
            onClick={() => setShowDiacriticsPad(prev => !prev)}
            className={`px-1.5 py-1 text-xs rounded-md transition-colors cursor-pointer font-arabic ${
              showDiacriticsPad 
                ? 'bg-[#C19B53] text-white shadow-2xs' 
                : 'text-[#8C7A6B] hover:text-[#231C16] hover:bg-[#F5EFE3]'
            }`}
            title="Arabic Harakāt & Tashkeel Toolbar (لوحة التشكيل)"
            aria-label="Toggle Arabic diacritics keyboard"
          >
            َـِـُ
          </button>

          {searchQuery && (
            <button
              onClick={handleClearSearch}
              className="px-2 py-1 text-xs text-[#8C7A6B] hover:text-[#231C16] hover:bg-[#F5EFE3] rounded-md transition-colors cursor-pointer"
            >
              Clear
            </button>
          )}
          
          <button
            onClick={() => handleSearch()}
            disabled={isSearching || !searchQuery.trim()}
            className="flex items-center gap-1 px-3 py-1.5 bg-accent text-white rounded-lg hover:bg-accent/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all font-medium text-xs shadow-2xs cursor-pointer"
          >
            {isSearching ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
            Search
          </button>
        </div>
      </div>

      {/* Alfanus-style Floating Diacritics Strip */}
      {showDiacriticsPad && (
        <div className="absolute top-full left-0 right-0 mt-1.5 p-2 bg-[#FFFDF9] border border-[#E7DFC9] rounded-xl shadow-lg z-50 animate-in fade-in slide-in-from-top-1 duration-200">
          <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-[#E7DFC9] text-[11px] text-[#8C7A6B] font-medium">
            <span>Arabic Tashkeel & Diacritics (انقر لإدراج الحركات):</span>
            <button
              onClick={() => setShowDiacriticsPad(false)}
              className="text-[#8C7A6B] hover:text-[#231C16] p-0.5 rounded"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-1 font-arabic" dir="rtl">
            {ARABIC_DIACRITICS.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => insertDiacritic(item.char)}
                title={item.label}
                className="w-8 h-8 rounded-lg bg-[#FAF6EE] hover:bg-[#EFE7D8] border border-[#DDD2B8] text-lg text-[#231C16] flex items-center justify-center transition-transform active:scale-90 cursor-pointer shadow-2xs"
              >
                {item.char}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Recent Searches Dropdown */}
      {isSearchFocused && !showDiacriticsPad && recentSearches.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-[#FFFDF9] border border-[#E7DFC9] rounded-xl shadow-lg overflow-hidden flex flex-col text-left z-50">
          <div className="px-4 py-2 bg-[#F5EFE3] border-b border-[#E7DFC9] flex justify-between items-center text-xs font-medium text-[#7A695C] uppercase tracking-wider">
            <span>Recent Searches</span>
          </div>
          {recentSearches.map((term, i) => (
            <button
              key={i}
              onClick={() => {
                setSearchQuery(term);
                handleSearch(term);
              }}
              className="flex items-center gap-3 w-full px-4 py-2.5 hover:bg-[#F5EFE3] transition-colors text-[#231C16] text-sm text-left cursor-pointer"
            >
              <Clock className="w-4 h-4 text-[#8C7A6B] shrink-0" />
              <span className="truncate">{term}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
