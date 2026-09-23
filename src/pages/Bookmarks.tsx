import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useBookmarks } from '../hooks/useBookmarks';
import { MOCK_DATA } from '../data';
import { ItemCard } from '../components/ItemCard';
import { Bookmark } from 'lucide-react';

export function Bookmarks() {
  const { bookmarks } = useBookmarks();
  
  const bookmarkedItems = useMemo(() => {
    const list = MOCK_DATA.filter(item => bookmarks.includes(item.id));
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
  }, [bookmarks]);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center space-x-3 mb-8 border-b border-accent/20 pb-4">
        <Bookmark className="w-8 h-8 text-primary" />
        <h1 className="font-heading text-3xl text-primary">Your Bookmarks</h1>
      </div>

      {bookmarkedItems.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-lg border border-slate-200 shadow-sm">
          <Bookmark className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <h2 className="text-xl text-slate-600 font-medium mb-2">No bookmarks yet</h2>
          <p className="text-slate-400 mb-6">Items you bookmark will appear here for easy access.</p>
          <Link 
            to="/" 
            className="inline-flex items-center justify-center px-6 py-2 bg-primary text-background rounded-md hover:bg-primary/90 transition-colors"
          >
            Explore Content
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookmarkedItems.map(item => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
