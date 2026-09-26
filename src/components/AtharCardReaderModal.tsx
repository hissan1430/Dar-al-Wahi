import React, { useState, useEffect, useCallback } from 'react';
import { MOCK_DATA, ContentItem } from '../data';
import { X, ChevronLeft, ChevronRight, Copy, Check, BookOpen, ExternalLink, Bookmark, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useBookmarks } from '../hooks/useBookmarks';

interface AtharCardReaderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialAtharId?: string;
}

export function AtharCardReaderModal({ isOpen, onClose, initialAtharId }: AtharCardReaderModalProps) {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const atharList = React.useMemo(() => {
    return MOCK_DATA.filter(item => item.type === 'quote' || (item.arabicText && !item.pdfUrl));
  }, []);

  const [currentIndex, setCurrentIndex] = useState(() => {
    if (initialAtharId) {
      const idx = atharList.findIndex(item => item.id === initialAtharId);
      if (idx !== -1) return idx;
    }
    return 0;
  });

  const [copied, setCopied] = useState(false);
  const [theme, setTheme] = useState<'cream' | 'dark'>('cream');

  useEffect(() => {
    if (initialAtharId) {
      const idx = atharList.findIndex(item => item.id === initialAtharId);
      if (idx !== -1) setCurrentIndex(idx);
    }
  }, [initialAtharId, atharList]);

  const currentItem = atharList[currentIndex] || atharList[0];

  const handleNext = useCallback(() => {
    if (currentIndex < atharList.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  }, [currentIndex, atharList.length]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  }, [currentIndex]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || !currentItem) return null;

  const handleCopyText = () => {
    const text = `${currentItem.arabicText ? currentItem.arabicText + '\n\n' : ''}${currentItem.englishText || currentItem.summary}\n\n— ${currentItem.author || currentItem.speaker || 'Salaf'}\nSource: ${currentItem.citation || 'Dār al-Waḥī'}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
      />

      <div className={`relative z-10 w-full max-w-3xl max-h-[92vh] flex flex-col rounded-2xl shadow-2xl border overflow-hidden transition-all duration-300 ${
        theme === 'cream' 
          ? 'bg-[#FFFDF9] border-[#E7DFC9] text-[#140E08]' 
          : 'bg-[#151922] border-[#2C3345] text-[#F8FAFC]'
      }`}>
        {/* Top Hairline */}
        <div className="h-1 bg-gradient-to-r from-transparent via-[#C19B53] to-transparent" />

        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-[#E7DFC9]/70 dark:border-slate-800 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-0.5 rounded-full bg-[#FAF0E6] dark:bg-[#2C1C16] text-[#8C3A10] dark:text-[#FBBF24] border border-[#F3D7C5] dark:border-[#522919] font-bold text-[11px] uppercase tracking-wider">
              Athār Card
            </span>
            <span className="text-xs font-mono font-semibold opacity-70">
              {currentIndex + 1} of {atharList.length}
            </span>
            <span className="text-xs opacity-40">•</span>
            <span className="text-xs font-medium opacity-80 uppercase tracking-wider">
              {currentItem.category}
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => setTheme(prev => prev === 'cream' ? 'dark' : 'cream')}
              className="px-2.5 py-1 text-xs font-medium rounded-lg border border-[#DDD2B8] dark:border-slate-700 hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
            >
              {theme === 'cream' ? 'Dark' : 'Cream'}
            </button>
            <button
              onClick={() => toggleBookmark(currentItem.id)}
              className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                isBookmarked(currentItem.id)
                  ? 'border-amber-500 bg-amber-500/10 text-amber-600 dark:text-amber-400'
                  : 'border-[#DDD2B8] dark:border-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
              title="Bookmark this Athār"
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked(currentItem.id) ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={handleCopyText}
              className="px-3 py-1 text-xs font-semibold rounded-lg bg-[#FAF0E6] dark:bg-[#25201B] text-[#8C3A10] dark:text-[#FBBF24] border border-[#F3D7C5] dark:border-[#522919] hover:bg-[#F3D7C5]/50 transition-colors flex items-center gap-1 cursor-pointer"
              title="Copy Arabic & English"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors cursor-pointer ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 flex-1">
          {/* Title */}
          <h2 className="font-serif text-xl sm:text-2xl font-bold tracking-tight leading-snug">
            {currentItem.title}
          </h2>

          {/* Scholar attribution */}
          {currentItem.author && (
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium opacity-90">
              <span className="w-6 h-6 rounded-full bg-[#FAF0E6] dark:bg-[#25201B] border border-[#E7DFC9] dark:border-slate-700 flex items-center justify-center text-[#8C3A10] dark:text-[#FBBF24] font-serif font-bold text-[11px]">
                ۞
              </span>
              <span>{currentItem.author}</span>
            </div>
          )}

          {/* Arabic Matn (Ultra-high contrast, large font, tashkeel) */}
          {currentItem.arabicText && (
            <div 
              dir="rtl"
              className={`text-right rounded-xl p-5 sm:p-7 font-arabic text-xl sm:text-2xl transition-all leading-[2.4] ${
                theme === 'cream'
                  ? 'bg-[#FBF8F1] border border-[#DDD2B8] text-[#0A0704] shadow-[inset_0_1px_3px_rgba(40,30,20,0.02)]'
                  : 'bg-[#10141D] border border-amber-900/40 text-[#FDE68A]'
              }`}
            >
              {currentItem.arabicText}
            </div>
          )}

          {/* English Translation */}
          <div className="font-serif text-base sm:text-lg leading-relaxed space-y-3 font-normal">
            <p className="whitespace-pre-wrap">
              {currentItem.englishText || currentItem.summary}
            </p>
          </div>

          {/* Scholarly Source at the Bottom */}
          {currentItem.citation && (
            <div className="pt-5 border-t border-[#DDD2B8] dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs sm:text-sm">
              <div className="flex items-baseline gap-2">
                <span className="font-bold uppercase tracking-wider text-[11px] text-[#8C3A10] dark:text-[#FBBF24]">
                  Source:
                </span>
                <span className="italic font-serif font-bold text-sm">
                  {currentItem.citation}
                </span>
              </div>
              {currentItem.translator && currentItem.translator !== 'None' && (
                <div className="text-xs opacity-75">
                  Translated by: <strong className="font-bold opacity-100">{currentItem.translator === 'Abu_Mundhir' ? 'Abū Mundhir ar-Ruwāndī' : 'Abū Ṭalḥah al-ʾAfġhānī'}</strong>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Navigation Footer */}
        <div className="p-4 border-t border-[#E7DFC9]/70 dark:border-slate-800 bg-[#FAF6EE]/50 dark:bg-[#12161F] flex items-center justify-between gap-3">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-[#DDD2B8] dark:border-slate-700 text-xs font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <Link
            to={`/view/${currentItem.id}`}
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8C3A10] dark:text-[#FBBF24] hover:underline"
          >
            <span>Open in Full Reader</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>

          <button
            onClick={handleNext}
            disabled={currentIndex === atharList.length - 1}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-white text-xs font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors cursor-pointer shadow-xs"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
