import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { OfflineIndicator } from './OfflineIndicator';
import { MobileBottomNav } from './MobileBottomNav';
import { useReadingMode } from '../context/ReadingModeContext';
import { BookOpen, X } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { isReadingMode, toggleReadingMode } = useReadingMode();

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-accent selection:text-white pb-14 md:pb-0">
      {/* In-flow Exit Reading Mode bar when reading mode is active (does not travel over text on scroll) */}
      {isReadingMode && (
        <div className="w-full bg-primary text-white px-4 py-2 flex items-center justify-between text-xs border-b border-accent/40 shadow-xs print:hidden">
          <div className="flex items-center gap-2">
            <BookOpen className="w-3.5 h-3.5 text-accent" />
            <span className="font-medium tracking-wide">Reading Mode</span>
          </div>
          <button
            onClick={toggleReadingMode}
            className="hover:text-accent font-semibold transition-colors flex items-center gap-1.5 cursor-pointer bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-md"
            title="Exit Reading Mode (or press Esc)"
          >
            <span>Exit Reading Mode</span>
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Standard Header - hidden in Reading Mode */}
      {!isReadingMode && (
        <div className="print:hidden">
          <Header />
        </div>
      )}

      {/* Main Content Area - expanded and distraction-free in Reading Mode */}
      <main
        className={`flex-1 w-full transition-all duration-300 print:py-0 print:px-0 ${
          isReadingMode
            ? 'max-w-none px-2 sm:px-4 md:px-8 py-3'
            : 'max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 py-5 sm:py-10'
        }`}
      >
        {children}
      </main>

      {/* Standard Footer - hidden in Reading Mode */}
      {!isReadingMode && (
        <div className="print:hidden">
          <Footer />
        </div>
      )}

      {/* Mobile Bottom Navigation Bar */}
      <MobileBottomNav />

      <OfflineIndicator />
    </div>
  );
}
