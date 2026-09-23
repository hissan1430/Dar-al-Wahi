import { Home, Bookmark, BookOpen, Layers, PenTool } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useReadingMode } from '../context/ReadingModeContext';
import { useBookmarks } from '../hooks/useBookmarks';

export function MobileBottomNav() {
  const location = useLocation();
  const { isReadingMode } = useReadingMode();
  const { bookmarks } = useBookmarks();

  // Hide bottom nav if reading mode is active or inside viewer page to maximize reading viewport
  if (isReadingMode) {
    return null;
  }

  const isCurrent = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const navItems = [
    {
      to: '/',
      label: 'Home',
      icon: Home,
    },
    {
      to: '/search',
      label: 'Library',
      icon: Layers,
    },
    {
      to: '/glossary',
      label: 'Glossary',
      icon: BookOpen,
    },
    {
      to: '/bookmarks',
      label: 'Bookmarks',
      icon: Bookmark,
      badge: bookmarks.length > 0 ? bookmarks.length : undefined,
    },
    {
      to: '/notes',
      label: 'Notes',
      icon: PenTool,
    },
  ];

  return (
    <nav 
      aria-label="Mobile Bottom Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] px-2 py-1.5 pb-[max(0.5rem,env(safe-area-inset-bottom))]"
    >
      <div className="grid grid-cols-5 items-center justify-items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const active = isCurrent(item.to);
          const Icon = item.icon;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex flex-col items-center justify-center w-full py-1 rounded-xl transition-all touch-manipulation active:scale-95 ${
                active 
                  ? 'text-primary font-bold' 
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <div className="relative">
                <div className={`p-1 rounded-lg transition-colors ${active ? 'bg-primary/10 text-primary' : ''}`}>
                  <Icon className="w-5 h-5" />
                </div>
                {item.badge && item.badge > 0 && (
                  <span className="absolute -top-1 -right-1.5 bg-accent text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center shadow-xs">
                    {item.badge > 9 ? '9+' : item.badge}
                  </span>
                )}
              </div>
              <span className={`text-[10px] mt-0.5 tracking-tight ${active ? 'font-semibold text-primary' : 'font-normal'}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
