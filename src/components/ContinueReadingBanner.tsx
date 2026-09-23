import { Link } from 'react-router-dom';
import { useReadingProgress } from '../hooks/useReadingProgress';
import { MOCK_DATA } from '../data';
import { Bookmark, ArrowRight, BookOpen, Clock, X } from 'lucide-react';
import { useState } from 'react';

export function ContinueReadingBanner() {
  const { latestRead, clearProgress } = useReadingProgress();
  const [dismissed, setDismissed] = useState(false);

  if (dismissed || !latestRead) return null;

  const item = MOCK_DATA.find(d => d.id === latestRead.documentId);
  if (!item) return null;

  // Only apply to PDFs with pages - never cards, videos, or quotes
  const isPaginatedPdf = item.type === 'pdf' && Boolean(item.pages && item.pages.length > 0);
  if (!isPaginatedPdf) return null;

  // Don't show if already finished or hasn't turned past page 1
  if (latestRead.isFinished || !latestRead.currentPage || latestRead.currentPage <= 1) {
    return null;
  }

  const pageInfo = `Page ${latestRead.currentPage}`;

  return (
    <div className="bg-white/80 backdrop-blur-xs border border-slate-200/90 rounded-xl px-4 py-3 shadow-2xs mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 transition-all">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
          <BookOpen className="w-4 h-4" />
        </div>
        <div className="text-left">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-1.5 py-0.5 rounded">
              Resume
            </span>
            <span className="text-xs text-slate-500 font-medium">
              {pageInfo}
            </span>
          </div>
          <h4 className="font-heading font-semibold text-slate-900 text-sm mt-0.5 line-clamp-1">
            {item.title}
          </h4>
        </div>
      </div>

      <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
        <Link
          to={`/viewer/${item.id}?resume=true`}
          className="flex items-center justify-center gap-1 px-3 py-1.5 bg-primary hover:bg-primary/90 text-white text-xs font-medium rounded-lg shadow-2xs transition-all"
        >
          <span>Resume</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
        <button
          onClick={() => setDismissed(true)}
          className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-black/5 rounded-lg transition-colors cursor-pointer"
          title="Dismiss"
          aria-label="Dismiss banner"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
