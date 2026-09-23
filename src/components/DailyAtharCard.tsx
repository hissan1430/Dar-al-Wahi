import { useState } from 'react';
import { getDailyAthar, formatAtharDate } from '../data/dailyAthar';
import { AtharShareModal } from './AtharShareModal';
import { Sparkles, Share2, Copy, Check, BookOpen, ChevronDown, ChevronUp, Eye, EyeOff } from 'lucide-react';

export function DailyAtharCard() {
  // Always select the exact single Athār for today - changes automatically every day
  const athar = getDailyAthar();
  const todayFormatted = formatAtharDate();

  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem('dar_daily_athar_collapsed');
      return stored !== null ? stored === 'true' : true; // Default to collapsed for a clean, non-overwhelming initial view
    } catch {
      return true;
    }
  });

  const toggleCollapse = () => {
    setIsCollapsed(prev => {
      const next = !prev;
      try {
        localStorage.setItem('dar_daily_athar_collapsed', String(next));
      } catch {
        // ignore storage error
      }
      return next;
    });
  };

  const handleCopy = () => {
    const formatted = `${athar.arabicText}\n\n${athar.englishText}\n\n— ${athar.speaker}${athar.speakerTitle ? ` (${athar.speakerTitle})` : ''}\nReference: ${athar.source}\n\n[Dār al-Waḥī]`;
    navigator.clipboard.writeText(formatted);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  if (isCollapsed) {
    return (
      <div 
        id="daily-athar-collapsed-bar"
        className="bg-gradient-to-r from-amber-50/90 via-white to-slate-50 border border-amber-200/80 rounded-2xl px-4 sm:px-6 py-2.5 shadow-2xs flex items-center justify-between text-left transition-all hover:border-amber-300"
      >
        <button
          id="daily-athar-expand-full-trigger"
          onClick={toggleCollapse}
          className="flex-1 flex items-center gap-3 cursor-pointer text-left overflow-hidden mr-2 focus:outline-hidden"
          title="Click to expand Athār of the Day"
        >
          <span className="p-1.5 rounded-xl bg-amber-500/15 text-amber-900 shrink-0">
            <Sparkles className="w-4 h-4 text-amber-700" />
          </span>
          <div className="flex items-center gap-2 truncate text-xs">
            <span className="font-bold uppercase tracking-wider text-amber-950 shrink-0">Athār of the Day</span>
            <span className="text-slate-400 hidden sm:inline">•</span>
            <span className="text-slate-700 font-medium truncate hidden sm:inline">{athar.speaker}</span>
            <span className="text-slate-400 hidden md:inline">•</span>
            <span className="text-slate-500 italic truncate hidden md:inline">"{athar.englishText.slice(0, 50)}..."</span>
          </div>
        </button>

        <button
          id="daily-athar-show-btn"
          onClick={toggleCollapse}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-primary hover:text-red-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-all shrink-0 cursor-pointer shadow-2xs"
          title="Show Athār of the Day"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Show Athār</span>
          <ChevronDown className="w-3.5 h-3.5" />
        </button>
      </div>
    );
  }

  return (
    <>
      <div 
        id="daily-athar-card"
        className="bg-linear-to-br from-amber-50/60 via-white to-slate-50 border border-amber-200/70 rounded-2xl p-5 sm:p-6 shadow-xs relative overflow-hidden text-left"
      >
        {/* Top Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-amber-200/40">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-amber-500/15 text-amber-900">
              <Sparkles className="w-3.5 h-3.5" />
            </span>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-amber-950 flex flex-wrap items-center gap-2">
                <span>Athār of the Day</span>
                <span className="w-1 h-1 rounded-full bg-amber-400 hidden sm:inline-block" />
                <span className="text-[11px] font-medium text-slate-600 tracking-normal">
                  {todayFormatted}
                </span>
              </div>
              <span className="text-[10px] font-semibold text-primary">
                {athar.category}
              </span>
            </div>
          </div>

          {/* Share, Copy & Toggle Buttons */}
          <div className="flex items-center gap-1.5">
            <button
              id="daily-athar-copy-btn"
              onClick={handleCopy}
              className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium rounded-lg transition-colors cursor-pointer"
              title="Copy text & reference"
            >
              {isCopied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold text-[11px]">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span className="text-[11px]">Copy</span>
                </>
              )}
            </button>

            <button
              id="daily-athar-share-btn"
              onClick={() => setIsShareModalOpen(true)}
              className="inline-flex items-center gap-1 px-3 py-1 bg-primary text-white text-xs font-medium rounded-lg hover:bg-primary/90 transition-all shadow-2xs cursor-pointer"
            >
              <Share2 className="w-3 h-3" />
              <span className="text-[11px]">Share</span>
            </button>

            <button
              id="daily-athar-minimize-btn"
              onClick={toggleCollapse}
              className="inline-flex items-center gap-1 px-2 py-1 bg-amber-100/60 hover:bg-amber-200/60 text-amber-900 hover:text-red-700 text-xs font-medium rounded-lg transition-colors cursor-pointer border border-amber-200/80"
              title="Minimize Athār of the Day"
            >
              <EyeOff className="w-3 h-3" />
              <span className="text-[11px] hidden sm:inline">Hide</span>
              <ChevronUp className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Single Athār Content */}
        <div className="space-y-3.5">
          {/* Arabic Matn */}
          <div className="text-right">
            <p 
              dir="rtl"
              className="font-arabic text-xl sm:text-2xl leading-[2] font-semibold text-slate-900"
            >
              {athar.arabicText}
            </p>
          </div>

          {/* English Translation */}
          <div>
            <p className="font-serif text-sm sm:text-base text-slate-700 leading-relaxed">
              {athar.englishText}
            </p>
          </div>

          {/* Attribution & Reference */}
          <div className="pt-3 border-t border-amber-200/40 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 text-xs">
            <div>
              <span className="font-heading text-xs font-bold text-primary">
                {athar.speaker}
              </span>
              {athar.speakerTitle && (
                <span className="text-slate-500 ml-1 text-[11px] italic">
                  — {athar.speakerTitle}
                </span>
              )}
            </div>

            <div className="flex items-center gap-1.5 text-slate-600 bg-amber-50/60 px-2.5 py-1 rounded-md border border-amber-200/50 text-[11px]">
              <BookOpen className="w-3 h-3 text-amber-800 shrink-0" />
              <span className="font-medium text-slate-700">
                Source: <span className="text-amber-950 font-semibold">{athar.source}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Poster Generation Modal */}
      <AtharShareModal
        athar={athar}
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />
    </>
  );
}
