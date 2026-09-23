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
      {/* Floating Exit Reading Mode pill when reading mode is active */}
      {isReadingMode && (
        <div className="fixed top-3 right-4 z-50 flex items-center gap-2.5 bg-primary/90 hover:bg-primary text-white backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-accent/40 text-xs transition-all animate-in fade-in slide-in-from-top-2">
          <BookOpen className="w-3.5 h-3.5 text-accent" />
          <span className="font-medium tracking-wide hidden xs:inline">Reading Mode</span>
          <span className="text-white/40 hidden xs:inline">•</span>
          <button
            onClick={toggleReadingMode}
            className="hover:text-accent font-semibold transition-colors flex items-center gap-1 cursor-pointer"
            title="Exit Reading Mode (or press Esc)"
          >
            <span>Exit</span>
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
