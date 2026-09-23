import { useState, useRef, useEffect, useMemo, ReactNode } from 'react';
import { useGlossary } from '../hooks/useGlossary';
import { GlossaryTerm } from '../types/glossary';
import { BookOpen, ExternalLink, X, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AnnotatedTextProps {
  text: string;
  className?: string;
  theme?: 'light' | 'sepia' | 'dark';
}

interface TermPopoverState {
  term: GlossaryTerm;
  rect: DOMRect;
}

export function AnnotatedText({ text, className = '', theme = 'light' }: AnnotatedTextProps) {
  const { terms } = useGlossary();
  const [activePopover, setActivePopover] = useState<TermPopoverState | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close popover on outside click or escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActivePopover(null);
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (activePopover) {
        const target = e.target as HTMLElement;
        if (!target.closest('.glossary-popover') && !target.closest('.glossary-trigger')) {
          setActivePopover(null);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activePopover]);

  // Build sorted regex pattern for all terms and their aliases (longer phrases first to avoid greedy matching)
  const { termLookup, regex } = useMemo(() => {
    const lookup = new Map<string, GlossaryTerm>();
    const patterns: string[] = [];

    for (const termObj of terms) {
      const candidates = [termObj.term, ...(termObj.aliases || [])];
      for (const raw of candidates) {
        const cleaned = raw.trim();
        if (cleaned.length >= 3) {
          lookup.set(cleaned.toLowerCase(), termObj);
          // Escape regex special chars
          const escaped = cleaned.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          patterns.push(escaped);
        }
      }
    }

    // Sort descending by length so longer multi-word phrases match before individual words
    patterns.sort((a, b) => b.length - a.length);

    if (patterns.length === 0) {
      return { termLookup: lookup, regex: null };
    }

    // Match terms with lookaround or word boundaries that accommodate diacritics
    const regexPattern = new RegExp(`(?<=^|[^\\p{L}\\p{N}])(${patterns.join('|')})(?=[^\\p{L}\\p{N}]|$)`, 'gui');
    return { termLookup: lookup, regex: regexPattern };
  }, [terms]);

  // Parse text into nodes
  const renderedContent = useMemo(() => {
    if (!regex || !text) return text;

    const parts: ReactNode[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    // Reset regex index
    regex.lastIndex = 0;

    let keyIdx = 0;
    while ((match = regex.exec(text)) !== null) {
      const matchedStr = match[0];
      if (!matchedStr) {
        regex.lastIndex++;
        continue;
      }
      const matchStart = match.index;
      const matchEnd = matchStart + matchedStr.length;

      // Add preceding plain text
      if (matchStart > lastIndex) {
        parts.push(text.substring(lastIndex, matchStart));
      }

      const termData = termLookup.get(matchedStr.toLowerCase());

      if (termData) {
        parts.push(
          <button
            key={`term-${keyIdx++}`}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              const rect = e.currentTarget.getBoundingClientRect();
              setActivePopover({ term: termData, rect });
            }}
            className="glossary-trigger inline border-b-2 border-dotted border-amber-600/70 hover:border-amber-600 hover:bg-amber-100/40 dark:hover:bg-amber-900/30 text-inherit font-medium cursor-help transition-colors rounded-xs px-0.5"
            title={`Click to view classical definition: ${termData.term}`}
          >
            {matchedStr}
          </button>
        );
      } else {
        parts.push(matchedStr);
      }

      lastIndex = matchEnd;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts;
  }, [text, regex, termLookup]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {renderedContent}

      {/* Floating Definition Card */}
      {activePopover && (
        <div
          className="glossary-popover fixed z-50 w-[calc(100vw-32px)] max-w-sm sm:w-96 p-4 rounded-xl shadow-2xl border text-left animate-in fade-in zoom-in-95 duration-150"
          style={{
            top: Math.min(
              window.innerHeight - 300,
              Math.max(16, activePopover.rect.bottom + 8)
            ),
            left: Math.max(16, Math.min(
              window.innerWidth - 340,
              activePopover.rect.left - 20
            )),
            backgroundColor:
              theme === 'dark' ? '#1e2024' : theme === 'sepia' ? '#fdf6e3' : '#ffffff',
            borderColor:
              theme === 'dark' ? '#333b4d' : theme === 'sepia' ? '#d8cbb5' : '#e2e8f0',
            color: theme === 'dark' ? '#f1f5f9' : theme === 'sepia' ? '#433422' : '#0f172a',
          }}
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-3 border-b border-black/10 dark:border-white/10 pb-2 mb-3">
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-heading text-lg font-bold">
                  {activePopover.term.term}
                </h4>
                {activePopover.term.arabic && (
                  <span className="font-arabic text-lg font-bold text-amber-600 dark:text-amber-400">
                    {activePopover.term.arabic}
                  </span>
                )}
              </div>
              <span className="inline-block mt-0.5 px-2 py-0.5 text-[10px] uppercase font-semibold tracking-wider rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-300">
                {activePopover.term.category}
              </span>
            </div>

            <button
              onClick={() => setActivePopover(null)}
              className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-md transition-colors"
              aria-label="Close popover"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Definition */}
          <div className="space-y-2.5 text-xs sm:text-sm leading-relaxed">
            <p className="font-serif">
              {activePopover.term.definition}
            </p>

            {activePopover.term.context && (
              <div className="p-2.5 rounded-lg bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 text-xs italic">
                <span className="font-semibold not-italic block mb-0.5 text-slate-500">Context of the Salaf:</span>
                {activePopover.term.context}
              </div>
            )}

            {activePopover.term.source && (
              <p className="text-[11px] text-slate-400">
                Ref: <span className="italic">{activePopover.term.source}</span>
              </p>
            )}
          </div>

          {/* Footer action */}
          <div className="mt-3 pt-2 border-t border-black/10 dark:border-white/10 flex justify-between items-center text-xs">
            <Link
              to="/glossary"
              className="inline-flex items-center gap-1 text-primary dark:text-amber-400 hover:underline font-medium"
            >
              <BookOpen className="w-3.5 h-3.5" />
              Full Glossary
            </Link>
            <button
              onClick={() => {
                navigator.clipboard.writeText(
                  `${activePopover.term.term} (${activePopover.term.arabic || ''}): ${activePopover.term.definition}`
                );
                setActivePopover(null);
              }}
              className="px-2 py-1 rounded bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors text-[11px] font-medium"
            >
              Copy
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
