import React, { useState, useEffect } from 'react';
import { ContentItem } from '../data';
import { X, ChevronLeft, ChevronRight, Copy, Check, Bookmark, Sparkles, BookOpen } from 'lucide-react';
import { useBookmarks } from '../hooks/useBookmarks';

interface AtharSwipeModalProps {
  items: ContentItem[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

export function AtharSwipeModal({ items, isOpen, onClose, initialIndex = 0 }: AtharSwipeModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [copied, setCopied] = useState(false);
  const { isBookmarked, toggleBookmark } = useBookmarks();

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'ArrowRight' || e.key === 'j') {
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'k') {
        handlePrev();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, items.length]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex];
  const bookmarked = isBookmarked(currentItem.id);

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1 < items.length ? prev + 1 : 0));
    setCopied(false);
  };

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 >= 0 ? prev - 1 : items.length - 1));
    setCopied(false);
  };

  const handleCopy = async () => {
    let text = `${currentItem.title}\n\n`;
    if (currentItem.arabicText) text += `${currentItem.arabicText}\n\n`;
    if (currentItem.englishText) text += `${currentItem.englishText}\n\n`;
    if (currentItem.citation) text += `Source: ${currentItem.citation}\n`;
    if (currentItem.author) text += `Author: ${currentItem.author}\n`;
    try {
      await navigator.clipboard.writeText(text.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#FFFDF9] dark:bg-[#16181D] text-[#231C16] dark:text-[#F3EFE6] rounded-2xl shadow-2xl border border-[#E7DFC9] dark:border-[#2C3240] flex flex-col max-h-[92vh] overflow-hidden">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#E7DFC9] dark:border-[#2C3240] bg-[#FAF6EE] dark:bg-[#1B1E26]">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#9E3A2B] text-white">
              ’Athar
            </span>
            <span className="text-xs font-mono font-semibold text-[#8C6D3B] dark:text-[#D4AF37]">
              N{String(currentItem.id).padStart(4, '0')}
            </span>
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#F1E8D5] dark:bg-[#252A36] text-[#6D5C4F] dark:text-[#A09383] border border-[#DDD2B8] dark:border-[#384152]">
              {currentItem.category}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#8C7A6B] dark:text-[#9A8F82]">
              {currentIndex + 1} of {items.length}
            </span>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#8C7A6B] hover:text-[#231C16] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body - Scrollable */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 flex-1">
          {/* Title */}
          <div>
            <span className="text-[11px] font-sans font-bold tracking-widest uppercase text-[#9E3A2B] dark:text-[#F87171] block mb-1">
              Beneficial Word
            </span>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#1E1710] dark:text-[#FAF6EE] leading-snug">
              {currentItem.title}
            </h2>
          </div>

          {/* Arabic Matn if available */}
          {currentItem.arabicText && (
            <div 
              className="p-5 sm:p-7 rounded-xl bg-[#F5EFE3]/80 dark:bg-[#1D212B] border border-[#E7DFC9] dark:border-[#2C3240] font-arabic text-xl sm:text-2xl leading-[2.3] sm:leading-[2.5] text-right text-[#1E1710] dark:text-[#FDFBF7]"
              dir="rtl"
            >
              {currentItem.arabicText}
            </div>
          )}

          {/* English Translation */}
          <div className="font-serif text-base sm:text-lg leading-relaxed sm:leading-loose text-[#2D2319] dark:text-[#ECE5D8] whitespace-pre-wrap">
            {currentItem.englishText || currentItem.summary}
          </div>

          {/* Scholar & Citation Footer */}
          <div className="pt-5 border-t border-[#E7DFC9] dark:border-[#2C3240] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
            <div className="space-y-1">
              {currentItem.author && (
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-[#8C6D3B] dark:text-[#D4AF37] uppercase text-[11px] tracking-wider">Speaker:</span>
                  <span className="font-semibold text-[#1E1710] dark:text-[#FAF6EE]">{currentItem.author}</span>
                </div>
              )}
              {currentItem.citation && (
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-[#8C6D3B] dark:text-[#D4AF37] uppercase text-[11px] tracking-wider">Source:</span>
                  <span className="italic font-serif font-bold text-[#1E1710] dark:text-[#FAF6EE]">{currentItem.citation}</span>
                </div>
              )}
            </div>

            {/* Quick Action Tools */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <button
                onClick={handleCopy}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-[#DDD2B8] dark:border-[#384152] bg-[#FAF6EE] dark:bg-[#1B1E26] hover:bg-[#F1E8D5] dark:hover:bg-[#252A36] text-[#231C16] dark:text-[#F3EFE6] transition-colors cursor-pointer"
                title="Copy narration"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 opacity-70" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
              <button
                onClick={() => toggleBookmark(currentItem.id)}
                className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                  bookmarked
                    ? 'bg-[#C19B53] text-white border-[#C19B53]'
                    : 'bg-[#FAF6EE] dark:bg-[#1B1E26] border-[#DDD2B8] dark:border-[#384152] text-[#231C16] dark:text-[#F3EFE6] hover:bg-[#F1E8D5]'
                }`}
                title={bookmarked ? 'Bookmarked' : 'Add to bookmarks'}
              >
                <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Swipe Navigation Bar */}
        <div className="flex items-center justify-between px-5 py-3 border-t border-[#E7DFC9] dark:border-[#2C3240] bg-[#FAF6EE] dark:bg-[#1B1E26]">
          <button
            onClick={handlePrev}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#FFFDF9] dark:bg-[#16181D] hover:bg-[#F1E8D5] dark:hover:bg-[#252A36] text-[#231C16] dark:text-[#F3EFE6] font-semibold text-xs border border-[#DDD2B8] dark:border-[#384152] shadow-2xs transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <span className="text-[11px] text-[#8C7A6B] dark:text-[#9A8F82] hidden sm:inline">
            Press <kbd className="px-1.5 py-0.5 bg-black/5 dark:bg-white/10 rounded font-mono font-bold">←</kbd> and <kbd className="px-1.5 py-0.5 bg-black/5 dark:bg-white/10 rounded font-mono font-bold">→</kbd> to swipe
          </span>

          <button
            onClick={handleNext}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#9E3A2B] hover:bg-[#853023] text-white font-semibold text-xs shadow-2xs transition-colors cursor-pointer"
          >
            <span>Next ’Athar</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
