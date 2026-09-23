import { Search, Bookmark, ArrowLeft, Menu, BookOpen } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Logo } from './Logo';
import { useBookmarks } from '../hooks/useBookmarks';

interface HeaderProps {
  onSearch?: (query: string) => void;
}

export function Header({ onSearch }: HeaderProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { bookmarks } = useBookmarks();

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <header className="bg-primary text-background shadow-xs border-b border-primary/20 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 sm:py-3 min-h-[60px] sm:min-h-[88px] relative">
            
            {/* Left Actions (Hamburger & Back Button) */}
            <div className="flex items-center gap-1 sm:gap-2 z-10 shrink-0 min-w-[70px] sm:min-w-[120px] justify-start">
              <button 
                onClick={() => setIsSidebarOpen(true)}
                className="flex items-center justify-center text-accent/90 hover:text-white transition-colors p-2 sm:p-2.5 rounded-lg hover:bg-white/10 active:bg-white/15 cursor-pointer touch-manipulation"
                title="Open Menu"
                aria-label="Open navigation menu"
              >
                <Menu className="w-5 h-5 sm:w-5 sm:h-5" />
              </button>
              
              {!isHome && (
                <Link 
                  to="/"
                  className="flex items-center gap-1 text-accent/90 hover:text-white transition-colors p-2 sm:p-2.5 rounded-lg hover:bg-white/10 active:bg-white/15 cursor-pointer touch-manipulation"
                  title="Return to Home"
                  aria-label="Return to Home"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="font-medium text-xs hidden md:inline-block">Home</span>
                </Link>
              )}
            </div>

            {/* Logo / Title - Absolutely Centered Across All Viewports (Mobile & Desktop) */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <Link 
                to="/" 
                className="pointer-events-auto flex items-center justify-center group transition-transform active:scale-95 hover:scale-[1.01]"
              >
                <Logo variant="horizontal" theme="light" />
              </Link>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-1 sm:space-x-2 z-10 shrink-0 justify-end">
              <Link to="/glossary" className="hidden sm:flex items-center gap-1.5 text-accent/90 hover:text-white transition-colors px-2.5 py-1.5 rounded-lg hover:bg-white/10 text-xs font-medium touch-manipulation" title="Classical Glossary">
                <BookOpen className="w-4 h-4" />
                <span>Glossary</span>
              </Link>
              <Link to="/bookmarks" className="flex items-center gap-1.5 text-accent/90 hover:text-white transition-colors p-2 sm:px-2.5 sm:py-1.5 rounded-lg hover:bg-white/10 text-xs font-medium touch-manipulation relative" title="My Bookmarks">
                <div className="relative">
                  <Bookmark className={`w-5 h-5 sm:w-4 sm:h-4 transition-colors ${bookmarks.length > 0 ? 'fill-accent text-accent' : ''}`} />
                  {bookmarks.length > 0 && (
                    <span className="absolute -top-1.5 -right-2 bg-accent text-primary font-bold text-[9px] w-4 h-4 rounded-full flex items-center justify-center leading-none shadow-xs">
                      {bookmarks.length}
                    </span>
                  )}
                </div>
                <span className="hidden sm:inline-block">Bookmarks</span>
              </Link>
            </div>
          </div>
      </div>
    </header>
  </>
  );
}
