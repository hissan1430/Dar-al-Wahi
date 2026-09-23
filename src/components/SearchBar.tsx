import { useState, useEffect, useRef } from 'react';
import { Sparkles, Loader2, Search, Clock } from 'lucide-react';
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
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (queryToSearch = searchQuery) => {
    const trimmed = queryToSearch.trim();
    if (!trimmed) {
      // If empty, clear search
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
    
    if (onSearch) {
      onSearch(trimmed);
    } else {
      navigate(`/search?q=${encodeURIComponent(trimmed)}`);
    }
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    if (onSearch) onSearch('');
  };

  return (
    <div ref={searchContainerRef} className="w-full relative z-40">
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-accent transition-colors">
          <Search className="h-4 w-4" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsSearchFocused(true)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          placeholder="Search treaties, quotes, narrations..."
          className="block w-full pl-10 pr-20 py-2.5 bg-white border border-slate-200/90 rounded-xl shadow-2xs focus:ring-2 focus:ring-accent/40 focus:border-accent text-slate-800 text-sm placeholder-slate-400 transition-all"
        />
        <div className="absolute inset-y-1 right-1 flex items-center gap-1">
          {searchQuery && (
            <button
              onClick={handleClearSearch}
              className="px-2 py-1 text-xs text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors cursor-pointer"
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
      
      {/* Recent Searches Dropdown */}
      {isSearchFocused && recentSearches.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-100 rounded-xl shadow-lg overflow-hidden flex flex-col text-left">
          <div className="px-4 py-2 bg-slate-50 border-b border-slate-100 flex justify-between items-center text-xs font-medium text-slate-500 uppercase tracking-wider">
            <span>Recent Searches</span>
          </div>
          {recentSearches.map((term, i) => (
            <button
              key={i}
              onClick={() => {
                setSearchQuery(term);
                handleSearch(term);
              }}
              className="flex items-center gap-3 w-full px-4 py-3 hover:bg-slate-50 transition-colors text-slate-700 text-sm text-left"
            >
              <Clock className="w-4 h-4 text-slate-400 shrink-0" />
              <span className="truncate">{term}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
