import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useParams, Link, useNavigate, useSearchParams } from 'react-router-dom';
import { MOCK_DATA } from '../data';
import { ArrowLeft, Bookmark, FileText, Download, Sun, Moon, CheckCircle, Circle, PenSquare, X, RotateCcw, ArrowUpRight, BookOpen, Image as ImageIcon, Play, Headphones, Newspaper, Quote, ListVideo, ChevronLeft, ChevronRight, ChevronDown, ExternalLink, Columns2, Type, Copy, Check, Share2, Sparkles, Split } from 'lucide-react';
import { useBookmarks } from '../hooks/useBookmarks';
import { useReadingStats } from '../hooks/useReadingStats';
import { useNotes } from '../hooks/useNotes';
import { useReadingProgress } from '../hooks/useReadingProgress';
import { useReadingMode } from '../context/ReadingModeContext';
import { PdfCanvasViewer } from '../components/PdfCanvasViewer';
import { RichTextEditor } from '../components/RichTextEditor';
import { AnnotatedText } from '../components/AnnotatedText';
import { CollectionCardModal } from '../components/CollectionCardModal';
import { toCurlyQuotes, toCurlyHtml } from '../utils/typography';

export type ReaderTheme = 'cream' | 'light' | 'dark';

export function Viewer() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const shouldResumeParam = searchParams.get('resume') === 'true';

  const { isBookmarked, toggleBookmark } = useBookmarks();
  const { stats, markAsRead, unmarkAsRead, addTime, recordCategoryView } = useReadingStats();
  const { getProgress, updateProgress } = useReadingProgress();

  // Cream is the default manuscript theme (inspired by Alfanus)
  const [theme, setTheme] = useState<ReaderTheme>(() => {
    try {
      const saved = localStorage.getItem('dar_alwahi_reader_theme');
      if (saved === 'cream' || saved === 'light' || saved === 'dark') {
        return saved as ReaderTheme;
      }
    } catch {}
    return 'cream';
  });

  useEffect(() => {
    try {
      localStorage.setItem('dar_alwahi_reader_theme', theme);
    } catch {}
  }, [theme]);

  // Copy status feedback for Alfanus 3-way copy actions
  const [copyFeedback, setCopyFeedback] = useState<'idle' | 'arabic' | 'clean' | 'citation'>('idle');
  const [showCopyMenu, setShowCopyMenu] = useState(false);
  const copyMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (copyMenuRef.current && !copyMenuRef.current.contains(e.target as Node)) {
        setShowCopyMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'compact'>(() => {
    try {
      const saved = localStorage.getItem('dar_alwahi_quote_font_size');
      return (saved === 'large' || saved === 'compact') ? saved : 'normal';
    } catch {
      return 'normal';
    }
  });

  const handleFontSizeChange = (size: 'normal' | 'large' | 'compact') => {
    setFontSize(size);
    try {
      localStorage.setItem('dar_alwahi_quote_font_size', size);
    } catch {
      // ignore
    }
  };

  // Alfanus-inspired 3-Way Copy Handlers
  const handleCopyArabic = () => {
    if (!item?.arabicText) return;
    navigator.clipboard.writeText(item.arabicText);
    setCopyFeedback('arabic');
    setTimeout(() => setCopyFeedback('idle'), 2200);
  };

  const handleCopyCleanArabic = () => {
    if (!item?.arabicText) return;
    const clean = item.arabicText
      .replace(/[\u064B-\u065F\u0670\u06D6-\u06ED]/g, '')
      .replace(/[إأآا]/g, 'ا')
      .replace(/ـ/g, '');
    navigator.clipboard.writeText(clean);
    setCopyFeedback('clean');
    setTimeout(() => setCopyFeedback('idle'), 2200);
  };

  const handleCopyCitation = () => {
    if (!item) return;
    const arabic = item.arabicText ? `${item.arabicText}\n\n` : '';
    const cleanEnglish = item.englishText || (item.htmlText ? item.htmlText.replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ').trim() : '');
    const english = cleanEnglish ? `"${cleanEnglish}"\n\n` : '';
    const authorOrSpeaker = item.speaker || item.author ? `— ${item.speaker || item.author}\n` : '';
    const source = item.citation ? `Reference: ${item.citation}\n` : '';
    const translator = item.translator && item.translator !== 'None' 
      ? `Translator: ${item.translator === 'Abu_Mundhir' ? 'Abū Mundhir ar-Ruwāndī' : 'Abū Ṭalḥah al-ʾAfġhānī'}\n` 
      : '';
    const formatted = `${arabic}${english}${authorOrSpeaker}${source}${translator}[Dār al-Waḥī]`;
    navigator.clipboard.writeText(formatted);
    setCopyFeedback('citation');
    setTimeout(() => setCopyFeedback('idle'), 2200);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [textPageInputValue, setTextPageInputValue] = useState<string>('1');
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [initialPdfPage, setInitialPdfPage] = useState<number | undefined>(undefined);
  const [showNotes, setShowNotes] = useState(false);
  const [resumeBannerDismissed, setResumeBannerDismissed] = useState(false);
  const [resumedNotice, setResumedNotice] = useState<string | null>(null);
  const [showCardModal, setShowCardModal] = useState<boolean>(false);

  // 3D Flip state for 2-page text view
  const [flipState, setFlipState] = useState<{
    direction: 'forward' | 'backward';
    fromLeft: number;
    fromRight: number | null;
    toLeft: number;
    toRight: number | null;
  } | null>(null);

  const { isReadingMode, toggleReadingMode } = useReadingMode();

  // Two-page spread state
  const [isTwoPageView, setIsTwoPageView] = useState<boolean>(() => {
    try {
      return localStorage.getItem('dar_alwahi_pdf_two_page') === 'true';
    } catch {
      return false;
    }
  });

  const handleToggleTwoPage = (enabled: boolean) => {
    setIsTwoPageView(enabled);
    try {
      localStorage.setItem('dar_alwahi_pdf_two_page', String(enabled));
    } catch {
      // ignore
    }
  };

  const item = MOCK_DATA.find(d => d.id === id);
  const bookmarked = item ? isBookmarked(item.id) : false;
  const isRead = item ? stats.readBooks.includes(item.id) : false;
  
  const { noteContent, saveNote } = useNotes(id || '');
  const savedProgress = id ? getProgress(id) : undefined;

  const handlePdfPageChange = useCallback((page: number, total: number) => {
    if (!item || !item.pages || item.pages.length === 0) return;
    setCurrentPage(page);
    updateProgress({
      documentId: item.id,
      currentPage: page,
      totalPages: total || item.pages.length,
      progressPercent: Math.round((page / (total || item.pages.length)) * 100)
    });
  }, [item, updateProgress]);

  // Handle initial page load & resume logic
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (item) {
      recordCategoryView(item.category);
    }

    const isPaginatedPdf = item && item.type === 'pdf' && Boolean(item.pages && item.pages.length > 0);

    if (isPaginatedPdf && savedProgress && savedProgress.currentPage && savedProgress.currentPage > 1) {
      if (shouldResumeParam) {
        handleResume();
      } else {
        // Prepare initial PDF canvas page to 1 if not resuming automatically
        setInitialPdfPage(1);
        setCurrentPage(1);
      }
    } else {
      setInitialPdfPage(1);
      setCurrentPage(1);
    }

    const lessonParam = searchParams.get('lesson');
    if (lessonParam && item?.videos && item.videos.length > 0) {
      const idx = item.videos.findIndex(v => v.lessonNumber === parseInt(lessonParam, 10));
      if (idx !== -1) {
        setActiveVideoIndex(idx);
      }
    } else {
      setActiveVideoIndex(0);
    }
  }, [id, item?.id, searchParams]);

  const handleResume = () => {
    if (!savedProgress || !item) return;

    if (item.type === 'pdf' && item.pages && item.pages.length > 0 && savedProgress.currentPage) {
      setCurrentPage(savedProgress.currentPage);
      setInitialPdfPage(savedProgress.currentPage);
      setResumedNotice(`Resumed at Page ${savedProgress.currentPage}`);
    }
    
    setResumeBannerDismissed(true);
    setTimeout(() => setResumedNotice(null), 3500);
  };

  const handleStartFromBeginning = () => {
    setCurrentPage(1);
    setInitialPdfPage(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setResumeBannerDismissed(true);
    if (item && item.type === 'pdf' && item.pages && item.pages.length > 0) {
      updateProgress({
        documentId: item.id,
        currentPage: 1,
        totalPages: item.pages.length,
        progressPercent: Math.round((1 / item.pages.length) * 100),
        isFinished: false
      });
    }
  };

  // Update progress on page changes for paginated PDFs only
  useEffect(() => {
    if (!item || item.type !== 'pdf' || !item.pages || item.pages.length === 0) return;
    updateProgress({
      documentId: item.id,
      currentPage,
      totalPages: item.pages.length,
      progressPercent: Math.round((currentPage / item.pages.length) * 100)
    });
  }, [currentPage, item, updateProgress]);

  useEffect(() => {
    setTextPageInputValue(String(currentPage));
  }, [currentPage]);

  const handleTextPageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    setTextPageInputValue(val);
    const parsed = parseInt(val, 10);
    const total = item?.pages?.length || 0;
    if (!isNaN(parsed) && parsed >= 1 && parsed <= total) {
      setCurrentPage(parsed);
    }
  };

  const handleTextPageInputBlur = () => {
    const parsed = parseInt(textPageInputValue, 10);
    const total = item?.pages?.length || 0;
    if (!isNaN(parsed) && parsed >= 1 && parsed <= total) {
      setCurrentPage(parsed);
    } else {
      setTextPageInputValue(String(currentPage));
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!document.hidden) {
        addTime(5); // Add 5 seconds of reading time
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [addTime]);

  const pages = item?.pages || [];
  const textLeftPage = isTwoPageView ? (currentPage % 2 === 1 ? currentPage : Math.max(1, currentPage - 1)) : currentPage;
  const textRightPage = isTwoPageView ? (textLeftPage + 1 <= pages.length ? textLeftPage + 1 : null) : null;

  const handleTextNext = useCallback(() => {
    if (flipState) return;
    const totalPages = item?.pages?.length || 0;
    if (isTwoPageView && totalPages >= 2) {
      const left = (currentPage % 2 === 1) ? currentPage : Math.max(1, currentPage - 1);
      const right = left + 1 <= totalPages ? left + 1 : null;
      if (left + 2 <= totalPages) {
        const nextLeft = left + 2;
        const nextRight = nextLeft + 1 <= totalPages ? nextLeft + 1 : null;
        setFlipState({
          direction: 'forward',
          fromLeft: left,
          fromRight: right,
          toLeft: nextLeft,
          toRight: nextRight,
        });
        setTimeout(() => {
          setCurrentPage(nextLeft);
          setFlipState(null);
        }, 520);
        return;
      }
    }
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  }, [item?.pages?.length, isTwoPageView, currentPage, flipState]);

  const handleTextPrev = useCallback(() => {
    if (flipState) return;
    const totalPages = item?.pages?.length || 0;
    if (isTwoPageView && totalPages >= 2) {
      const left = (currentPage % 2 === 1) ? currentPage : Math.max(1, currentPage - 1);
      const right = left + 1 <= totalPages ? left + 1 : null;
      if (left > 1) {
        const prevLeft = Math.max(1, left - 2);
        const prevRight = prevLeft + 1 <= totalPages ? prevLeft + 1 : null;
        setFlipState({
          direction: 'backward',
          fromLeft: left,
          fromRight: right,
          toLeft: prevLeft,
          toRight: prevRight,
        });
        setTimeout(() => {
          setCurrentPage(prevLeft);
          setFlipState(null);
        }, 520);
        return;
      }
    }
    setCurrentPage(prev => Math.max(prev - 1, 1));
  }, [item?.pages?.length, isTwoPageView, currentPage, flipState]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') return;
      
      const totalPages = item?.pages?.length || 0;
      if (totalPages > 0 && !item?.pdfUrl) {
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          handleTextNext();
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          handleTextPrev();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, handleTextNext, handleTextPrev]);

  if (!item) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-heading text-slate-800">Document not found</h2>
        <Link to="/" className="text-primary hover:underline mt-4 inline-block">Return to collections</Link>
      </div>
    );
  }

  const downloadFileName = item.pdfUrl ? item.pdfUrl.split('/').pop() : `${item.title.replace(/\s+/g, '_')}.pdf`;

  return (
    <div className={`mx-auto space-y-6 sm:space-y-8 animate-in fade-in duration-500 transition-all ${
      isReadingMode ? 'w-full max-w-none px-1 sm:px-4' : (isTwoPageView ? 'max-w-[92rem] px-2 sm:px-4' : (showNotes ? 'max-w-[90rem]' : 'max-w-5xl'))
    }`}>
      <div className="flex flex-wrap sm:flex-nowrap justify-between items-center gap-2">
        <Link to="/" className="inline-flex items-center text-primary/70 hover:text-primary transition-colors font-medium text-xs sm:text-sm">
          <ArrowLeft className="w-4 h-4 mr-1.5" />
          <span>Back to library</span>
        </Link>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={() => setShowNotes(!showNotes)}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg transition-colors text-xs sm:text-sm font-medium ${showNotes ? 'bg-primary/10 text-primary' : 'text-slate-600 hover:text-primary hover:bg-slate-50'}`}
            title="Toggle Personal Notes"
          >
            <PenSquare className="w-4 h-4" />
            <span>Notes</span>
          </button>
          <button 
            onClick={() => toggleBookmark(item.id)}
            className="p-1.5 sm:p-2 rounded-lg hover:bg-slate-100 transition-colors touch-manipulation cursor-pointer"
            title={bookmarked ? "Remove Bookmark" : "Bookmark this document"}
            aria-label="Toggle Bookmark"
          >
            <Bookmark 
              className={`w-5 h-5 sm:w-6 sm:h-6 transition-all ${bookmarked ? 'text-accent fill-accent' : 'text-slate-400 hover:text-accent'}`} 
            />
          </button>
        </div>
      </div>

      {/* Resumed Toast Notice */}
      {resumedNotice && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-2.5 rounded-lg flex items-center justify-between text-sm shadow-xs animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span className="font-medium">{resumedNotice}</span>
          </div>
          <button onClick={() => setResumedNotice(null)} className="text-emerald-500 hover:text-emerald-700">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Continue Reading / Resume Banner - strictly for paginated PDFs */}
      {item && item.type === 'pdf' && item.pages && item.pages.length > 0 && savedProgress && !resumeBannerDismissed && !resumedNotice && savedProgress.currentPage && savedProgress.currentPage > 1 && (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
              <Bookmark className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Pick up where you left off
              </p>
              <p className="text-xs text-slate-600">
                You previously reached Page {savedProgress.currentPage}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 self-stretch sm:self-auto justify-end">
            <button
              onClick={handleStartFromBeginning}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Start over
            </button>
            <button
              onClick={handleResume}
              className="flex items-center gap-1.5 px-4 py-1.5 bg-primary text-white text-xs font-medium rounded-lg hover:bg-primary/90 shadow-xs transition-colors cursor-pointer"
            >
              Resume now
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setResumeBannerDismissed(true)}
              className="p-1.5 text-slate-400 hover:text-slate-600 rounded-md hover:bg-slate-100 transition-colors cursor-pointer ml-1"
              title="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-6 items-start">
        <div className={`bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden flex-1 w-full transition-all`}>
        {/* Document Header */}
        <div className="p-4 sm:p-8 border-b border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6">
          <div className="space-y-1 w-full sm:w-auto">
            <div className="flex items-center space-x-2 text-accent">
              {item.videos && item.videos.length > 0 ? (
                <ListVideo className="w-4 h-4 text-red-600" />
              ) : item.type === 'video' ? (
                <Play className="w-4 h-4 fill-current" />
              ) : item.type === 'audio' ? (
                <Headphones className="w-4 h-4" />
              ) : item.type === 'article' ? (
                <Newspaper className="w-4 h-4" />
              ) : item.type === 'quote' ? (
                <Quote className="w-4 h-4" />
              ) : (
                <FileText className="w-4 h-4" />
              )}
              <span className="text-xs font-semibold uppercase tracking-wider">
                {item.videos && item.videos.length > 0 ? `${item.category} • Series (${item.videos.length} Lessons)` : item.category}
              </span>
            </div>
            <h1 className="font-heading text-xl sm:text-3xl font-bold text-slate-900 leading-snug">{toCurlyQuotes(item.title)}</h1>
            {(item.author || item.speaker) && (
              <p className="text-primary font-medium text-sm sm:text-base mb-1">
                {toCurlyQuotes(item.author || item.speaker)}
              </p>
            )}
            {item.translator && item.translator !== 'None' && (!item.speaker || !item.speaker.toLowerCase().includes(item.translator === 'Abu_Mundhir' ? 'mundhir' : 'talhah')) && (
              <p className="text-slate-500 text-xs sm:text-sm">
                {item.type === 'video' ? 'Curated by: ' : 'Translated by: '}
                <span className="text-slate-700 font-medium">
                  {item.translator === 'Abu_Mundhir' ? 'Abū Mundhir ar-Ruwāndī' : 'Abū Ṭalḥah al-ʾAfġhānī'}
                </span>
              </p>
            )}
          </div>
          
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-200/60">
            {/* 1-Page vs 2-Page Spread for Paginated Text Documents (PDFs manage their own spread in canvas) */}
            {pages.length > 1 && !item.pdfUrl && (
              <div className="hidden sm:flex items-center bg-[#F5EFE3] p-0.5 rounded-lg border border-[#DDD2B8] text-xs font-semibold">
                <button
                  onClick={() => handleToggleTwoPage(false)}
                  className={`flex items-center space-x-1 px-2.5 py-1.5 rounded-md transition-all cursor-pointer ${
                    !isTwoPageView ? 'bg-[#FFFDF9] shadow-2xs text-[#231C16] font-bold border border-[#E7DFC9]' : 'text-[#6D5C4F] hover:text-[#231C16]'
                  }`}
                  title="Single Page View"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>1-Page</span>
                </button>
                <button
                  onClick={() => handleToggleTwoPage(true)}
                  className={`flex items-center space-x-1 px-2.5 py-1.5 rounded-md transition-all cursor-pointer ${
                    isTwoPageView ? 'bg-[#FFFDF9] shadow-2xs text-[#231C16] font-bold border border-[#E7DFC9]' : 'text-[#6D5C4F] hover:text-[#231C16]'
                  }`}
                  title="2-Page Book Spread"
                >
                  <Columns2 className="w-3.5 h-3.5" />
                  <span>2-Pages</span>
                </button>
              </div>
            )}

            {/* Font Size Selector (Only for readable text documents, articles, and quotes — NOT for PDFs or Videos) */}
            {item.type !== 'pdf' && item.type !== 'video' && item.type !== 'audio' && (
              <div className="flex items-center space-x-1 bg-[#F5EFE3] p-1 rounded-lg border border-[#DDD2B8] text-xs font-semibold">
                <button
                  onClick={() => handleFontSizeChange('compact')}
                  className={`px-2 py-1 rounded-md transition-colors cursor-pointer touch-manipulation ${
                    fontSize === 'compact' ? 'bg-[#FFFDF9] shadow-xs text-[#231C16] font-bold border border-[#E7DFC9]' : 'text-[#6D5C4F] hover:text-[#231C16]'
                  }`}
                  title="Compact Text Size"
                >
                  A-
                </button>
                <button
                  onClick={() => handleFontSizeChange('normal')}
                  className={`px-2 py-1 rounded-md transition-colors cursor-pointer touch-manipulation ${
                    fontSize === 'normal' ? 'bg-[#FFFDF9] shadow-xs text-[#231C16] font-bold border border-[#E7DFC9]' : 'text-[#6D5C4F] hover:text-[#231C16]'
                  }`}
                  title="Standard Text Size"
                >
                  A
                </button>
                <button
                  onClick={() => handleFontSizeChange('large')}
                  className={`px-2 py-1 rounded-md transition-colors cursor-pointer touch-manipulation ${
                    fontSize === 'large' ? 'bg-[#FFFDF9] shadow-xs text-[#231C16] font-bold border border-[#E7DFC9]' : 'text-[#6D5C4F] hover:text-[#231C16]'
                  }`}
                  title="Large Text Size"
                >
                  A+
                </button>
              </div>
            )}

            {/* Reader Theme (Cream [Default] / Light / Dark) */}
            {item.type !== 'video' && (
              <div className="flex items-center space-x-1 bg-[#F5EFE3] p-1 rounded-lg border border-[#DDD2B8]">
                <button 
                  onClick={() => setTheme('cream')}
                  className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer touch-manipulation text-xs font-medium flex items-center gap-1.5 ${
                    theme === 'cream' ? 'bg-[#FFFDF9] shadow-xs text-[#231C16] border border-[#E7DFC9] font-bold' : 'text-[#6D5C4F] hover:text-[#231C16]'
                  }`}
                  title="Cream Theme (Classical Parchment & Alfanus aesthetic - Default)"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FAF6EE] border border-[#C19B53]" />
                  <span>Cream</span>
                </button>
                <button 
                  onClick={() => setTheme('light')}
                  className={`p-1.5 rounded-md transition-colors cursor-pointer touch-manipulation ${theme === 'light' ? 'bg-white shadow-xs text-slate-800' : 'text-[#6D5C4F] hover:text-[#231C16]'}`}
                  title="Pure White Theme"
                >
                  <Sun className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setTheme('dark')}
                  className={`p-1.5 rounded-md transition-colors cursor-pointer touch-manipulation ${theme === 'dark' ? 'bg-slate-800 shadow-xs text-slate-100' : 'text-[#6D5C4F] hover:text-[#231C16]'}`}
                  title="Dark Theme"
                >
                  <Moon className="w-4 h-4" />
                </button>
              </div>
            )}
            
            {/* Card & Download Action Buttons */}
            <div className="flex items-center gap-2">
              {item.type !== 'pdf' && item.type !== 'video' && item.type !== 'audio' && (
                <button
                  onClick={() => setShowCardModal(true)}
                  className="flex items-center space-x-1.5 text-slate-700 bg-slate-100 hover:bg-slate-200 active:scale-95 transition-all px-3.5 py-2.5 rounded-lg font-medium shadow-2xs flex-shrink-0 text-sm border border-slate-200/80 cursor-pointer"
                  title="Download high-resolution presentation card (with scan, Arabic & translation)"
                >
                  <ImageIcon className="w-4 h-4 text-primary" />
                  <span className="hidden sm:inline">Save Card</span>
                </button>
              )}

              {item.type === 'video' && item.youtubeId && (
                <a
                  href={`https://www.youtube.com/watch?v=${item.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 text-slate-700 bg-slate-100 hover:bg-slate-200 active:scale-95 transition-all px-3.5 py-2 rounded-lg font-medium shadow-2xs flex-shrink-0 text-sm border border-slate-200/80 cursor-pointer"
                  title="Watch on YouTube"
                >
                  <ExternalLink className="w-4 h-4 text-primary" />
                  <span className="hidden sm:inline">YouTube</span>
                </a>
              )}

              {item.pdfUrl ? (
                <button 
                  onClick={async (e) => {
                    e.preventDefault();
                    try {
                      const response = await fetch(item.pdfUrl!);
                      const blob = await response.blob();
                      const url = window.URL.createObjectURL(blob);
                      const link = document.createElement('a');
                      link.href = url;
                      link.download = downloadFileName;
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                      window.URL.revokeObjectURL(url);
                    } catch (err) {
                      console.error('Download failed', err);
                      window.open(item.pdfUrl, '_blank');
                    }
                  }}
                  className="flex items-center space-x-2 text-white bg-primary hover:bg-primary/90 active:scale-95 transition-all px-4 sm:px-5 py-2.5 rounded-lg font-medium shadow-xs flex-shrink-0 text-sm" 
                  title="Download original PDF"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">PDF</span>
                </button>
              ) : null}
            </div>
          </div>
        </div>

        {/* Short Summary Section */}
        {item.summary && (
          <div className={`px-6 py-4 sm:px-8 border-b flex items-start space-x-3 transition-colors ${
            theme === 'dark' ? 'bg-slate-900/50 border-slate-800 text-slate-300' :
            theme === 'cream' ? 'bg-[#F5EFE3] border-[#E7DFC9] text-[#3D2E22]' :
            'bg-slate-50 border-slate-200 text-slate-700'
          }`}>
            <div className="text-xs sm:text-sm leading-relaxed">
              <span className={`font-semibold ${
                theme === 'dark' ? 'text-slate-100' :
                theme === 'cream' ? 'text-[#231C16]' :
                'text-slate-900'
              }`}>Overview: </span>
              {toCurlyQuotes(item.summary)}
            </div>
          </div>
        )}

        {/* Document Content Rendering */}
        <div className={`p-2.5 sm:p-8 flex flex-col items-center transition-colors duration-300 ${
          theme === 'dark' ? 'bg-[#0f1115]' : 
          theme === 'sepia' ? 'bg-[#e4dcc8]' : 
          theme === 'cream' ? 'bg-[#FAF6EE]' :
          'bg-slate-100'
        }`}>
          {item.type === 'video' && (item.youtubeId || (item.videos && item.videos.length > 0)) ? (
            <div className="w-full max-w-4xl space-y-6 relative flex flex-col items-center">
              {item.videos && item.videos.length > 0 ? (
                /* Full Video Series Player with Episode Navigation */
                <>
                  {/* Top Series Navigation Bar */}
                  <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 rounded-xl bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#333] shadow-xs">
                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-red-600 text-white flex items-center gap-1.5 shadow-xs flex-shrink-0">
                        <ListVideo className="w-3.5 h-3.5" />
                        Lesson {item.videos[activeVideoIndex]?.lessonNumber || (activeVideoIndex + 1)} of {item.videos.length}
                      </span>
                      <h3 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100 line-clamp-1">
                        {item.videos[activeVideoIndex]?.title || item.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 self-stretch sm:self-auto justify-between sm:justify-end">
                      <button
                        onClick={() => {
                          setActiveVideoIndex(prev => Math.max(0, prev - 1));
                        }}
                        disabled={activeVideoIndex === 0}
                        className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 dark:border-[#333] text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#252525] disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                        title="Previous Lesson"
                      >
                        <ChevronLeft className="w-3.5 h-3.5" />
                        <span>Prev Lesson</span>
                      </button>
                      <button
                        onClick={() => {
                          setActiveVideoIndex(prev => Math.min(item.videos!.length - 1, prev + 1));
                        }}
                        disabled={activeVideoIndex === item.videos.length - 1}
                        className="flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-primary text-white hover:bg-primary/90 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer shadow-xs"
                        title="Next Lesson"
                      >
                        <span>Next Lesson</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Video Iframe Player */}
                  <div className="w-full aspect-video rounded-xl shadow-lg overflow-hidden bg-black ring-1 ring-black/10">
                    <iframe
                      key={item.videos[activeVideoIndex]?.id || item.youtubeId}
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${item.videos[activeVideoIndex]?.id || item.youtubeId}`}
                      title={item.videos[activeVideoIndex]?.title || item.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>

                  {/* Interactive Lesson Playlist Drawer */}
                  <div className="w-full bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#333] rounded-xl shadow-xs overflow-hidden">
                    <div className="p-4 border-b border-slate-100 dark:border-[#2b2b2b] flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-2">
                        <ListVideo className="w-4 h-4 text-red-600" />
                        <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-100">
                          Course Playlist ({item.videos.length} Lessons)
                        </h4>
                      </div>
                      {item.playlistUrl && (
                        <a
                          href={item.playlistUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-red-600 hover:text-red-700 font-medium flex items-center gap-1 hover:underline"
                        >
                          <span>Open on YouTube</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>

                    <div className="divide-y divide-slate-100 dark:divide-[#2b2b2b]">
                      {item.videos.map((vid, idx) => {
                        const isActive = idx === activeVideoIndex;
                        return (
                          <button
                            key={vid.id}
                            onClick={() => {
                              setActiveVideoIndex(idx);
                            }}
                            className={`w-full text-left p-3.5 sm:p-4 flex items-center justify-between gap-3 transition-colors cursor-pointer ${
                              isActive
                                ? 'bg-red-50/70 dark:bg-red-950/30 text-red-900 dark:text-red-200'
                                : 'hover:bg-slate-50 dark:hover:bg-[#222] text-slate-700 dark:text-slate-300'
                            }`}
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs flex-shrink-0 transition-colors ${
                                isActive
                                  ? 'bg-red-600 text-white shadow-xs'
                                  : 'bg-slate-100 dark:bg-[#292929] text-slate-600 dark:text-slate-400'
                              }`}>
                                {isActive ? <Play className="w-3.5 h-3.5 fill-current" /> : String(vid.lessonNumber).padStart(2, '0')}
                              </div>
                              <div className="min-w-0">
                                <p className={`text-sm leading-snug line-clamp-1 ${
                                  isActive ? 'text-red-700 dark:text-red-400 font-semibold' : 'text-slate-900 dark:text-slate-200 font-medium'
                                }`}>
                                  {vid.title}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 flex-shrink-0">
                              {isActive ? (
                                <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 bg-red-100 dark:bg-red-900/40 px-2 py-0.5 rounded-md flex items-center gap-1">
                                  Playing
                                </span>
                              ) : (
                                <span className="text-xs text-slate-400 group-hover:text-slate-600 hidden sm:inline">
                                  Play &rarr;
                                </span>
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </>
              ) : (
                /* Single Video Player */
                <div className="w-full aspect-video rounded-xl shadow-lg overflow-hidden bg-black ring-1 ring-black/10">
                  <iframe
                    className="w-full h-full border-0"
                    src={`https://www.youtube.com/embed/${item.youtubeId}`}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              )}

              {(item.htmlText || item.englishText) && (
                <div className={`w-full shadow-md border p-6 sm:p-8 flex flex-col rounded-xl transition-colors ${
                  theme === 'dark' ? 'bg-[#1a1a1a] border-[#333] text-slate-200' :
                  theme === 'sepia' ? 'bg-[#fdf6e3] border-[#e4dcc8] text-amber-900' :
                  theme === 'cream' ? 'bg-[#FFFDF9] border-[#E7DFC9] text-[#231C16]' :
                  'bg-white border-slate-200 text-slate-800'
                }`}>
                  {item.htmlText ? (
                    <div 
                      className="text-lg sm:text-xl font-serif leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: item.htmlText }}
                    />
                  ) : (
                    <div className="text-lg sm:text-xl font-serif whitespace-pre-wrap leading-relaxed">
                      {item.englishText}
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : item.type === 'audio' && item.soundcloudUrl ? (
            <div className="w-full max-w-4xl space-y-6 relative flex flex-col items-center">
              <div className="w-full rounded-xl shadow-lg overflow-hidden bg-white">
                <iframe
                  width="100%"
                  height="166"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src={item.soundcloudUrl}
                ></iframe>
              </div>
              {(item.htmlText || item.englishText) && (
                <div className={`w-full shadow-md border p-8 flex flex-col rounded-xl transition-colors ${
                  theme === 'dark' ? 'bg-[#1a1a1a] border-[#333] text-slate-200' :
                  theme === 'sepia' ? 'bg-[#fdf6e3] border-[#e4dcc8] text-amber-900' :
                  theme === 'cream' ? 'bg-[#FFFDF9] border-[#E7DFC9] text-[#231C16]' :
                  'bg-white border-slate-200 text-slate-800'
                }`}>
                  {item.htmlText ? (
                    <div 
                      className="text-lg sm:text-xl font-serif leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: item.htmlText }}
                    />
                  ) : (
                    <div className="text-lg sm:text-xl font-serif whitespace-pre-wrap leading-relaxed">
                      {item.englishText}
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : item.pdfUrl ? (
            /* Direct PDF Canvas Rendering (Full document, high quality, responsive zoom) */
            <PdfCanvasViewer 
              pdfUrl={item.pdfUrl} 
              title={item.title} 
              downloadFilename={downloadFileName}
              theme={theme}
              initialPage={initialPdfPage}
              onPageChange={handlePdfPageChange}
              isTwoPageView={isTwoPageView}
              onTwoPageViewChange={handleToggleTwoPage}
            />
          ) : pages.length > 0 ? (
            /* Text Pages Fallback (Paginated with 1-page & 2-page Spread) */
            <div className={`w-full ${isTwoPageView ? 'max-w-[88rem]' : 'max-w-4xl'} space-y-6 relative flex flex-col items-center`}>
              {isTwoPageView && pages.length >= 2 ? (
                /* 2-PAGE BOOK SPREAD FOR TEXT WITH 3D FLIP */
                <div className="book-perspective w-full flex flex-col items-center select-none overflow-x-auto pb-2">
                  <div 
                    key={`text-spread-${textLeftPage}`}
                    className="book-spread relative flex justify-center items-stretch rounded-xl shadow-2xl p-2 sm:p-5 transition-all duration-300 border w-full"
                    style={{
                      backgroundColor: theme === 'dark' ? '#141414' : theme === 'cream' ? '#F5EFE3' : '#e2e8f0',
                      borderColor: theme === 'dark' ? '#262626' : theme === 'cream' ? '#DDD2B8' : '#cbd5e1',
                    }}
                  >
                    {/* Left Folio (Base) */}
                    <div 
                      onClick={handleTextPrev}
                      className={`relative flex-1 flex flex-col justify-between p-4 sm:p-8 rounded-l-lg overflow-hidden cursor-pointer transition-all hover:brightness-[0.99] border-r ${
                        theme === 'dark' 
                          ? 'bg-[#1e1e1e] border-[#333] text-slate-200' 
                          : theme === 'cream'
                          ? 'bg-[#FFFDF9] border-[#E7DFC9] text-[#231C16]'
                          : 'bg-white border-slate-200 text-slate-800'
                      } shadow-md min-h-[520px]`}
                      title="Click left page to go back"
                    >
                      <div className={`prose max-w-none text-sm sm:text-base leading-relaxed ${theme === 'dark' ? 'prose-invert' : ''}`}>
                        <AnnotatedText 
                          text={pages[(flipState ? (flipState.direction === 'forward' ? flipState.fromLeft : flipState.toLeft) : textLeftPage) - 1]} 
                          theme={theme} 
                        />
                      </div>
                      <div className="pt-4 border-t text-[11px] font-semibold opacity-60 font-mono tracking-wider text-center">
                        {flipState ? (flipState.direction === 'forward' ? flipState.fromLeft : flipState.toLeft) : textLeftPage}
                      </div>
                      {/* Dynamic receiving shadow on forward flip */}
                      {flipState?.direction === 'forward' && (
                        <div className="absolute inset-0 bg-black/25 pointer-events-none animate-page-shadow rounded-l-lg" />
                      )}
                    </div>

                    {/* Center Spine Crease */}
                    <div className="relative z-20 w-2.5 sm:w-4.5 self-stretch bg-gradient-to-r from-black/25 via-black/5 to-black/25 flex-shrink-0 shadow-inner" />

                    {/* Right Folio (Base) */}
                    <div 
                      onClick={() => textRightPage && handleTextNext()}
                      className={`relative flex-1 flex flex-col justify-between p-4 sm:p-8 rounded-r-lg overflow-hidden transition-all border-l ${
                        textRightPage ? 'cursor-pointer hover:brightness-[0.99]' : ''
                      } ${
                        theme === 'dark' 
                          ? 'bg-[#1e1e1e] border-[#333] text-slate-200' 
                          : theme === 'cream'
                          ? 'bg-[#FFFDF9] border-[#E7DFC9] text-[#231C16]'
                          : 'bg-white border-slate-200 text-slate-800'
                      } shadow-md min-h-[520px]`}
                      title={textRightPage ? "Click right page to advance" : undefined}
                    >
                      {(() => {
                        const displayRight = flipState 
                          ? (flipState.direction === 'forward' ? flipState.toRight : flipState.fromRight)
                          : textRightPage;
                        return displayRight ? (
                          <>
                            <div className={`prose max-w-none text-sm sm:text-base leading-relaxed ${theme === 'dark' ? 'prose-invert' : ''}`}>
                              <AnnotatedText text={pages[displayRight - 1]} theme={theme} />
                            </div>
                            <div className="pt-4 border-t text-[11px] font-semibold opacity-60 font-mono tracking-wider text-center">
                              {displayRight}
                            </div>
                            {/* Dynamic receiving shadow on backward flip */}
                            {flipState?.direction === 'backward' && (
                              <div className="absolute inset-0 bg-black/25 pointer-events-none animate-page-shadow rounded-r-lg" />
                            )}
                          </>
                        ) : (
                          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-xs opacity-50 italic">
                            <p className="font-heading text-base font-semibold mb-1">End of document</p>
                            <p>Page {flipState?.fromLeft || textLeftPage} is the final page</p>
                          </div>
                        );
                      })()}
                    </div>

                    {/* 3D FLIPPING LEAF (FORWARD: Right flips to Left) */}
                    {flipState?.direction === 'forward' && flipState.fromRight && (
                      <div
                        className="absolute z-30 book-page-leaf animate-page-flip-forward pointer-events-none top-2 bottom-2 sm:top-5 sm:bottom-5"
                        style={{
                          left: 'calc(50% + 2px)',
                          right: '8px',
                          transformOrigin: 'left center',
                        }}
                      >
                        {/* Front Face of Turning Leaf: shows fromRight */}
                        <div 
                          className={`book-page-face absolute inset-0 flex flex-col justify-between p-4 sm:p-8 rounded-r-lg overflow-hidden border-l shadow-2xl ${
                            theme === 'dark' 
                              ? 'bg-[#1e1e1e] border-[#333] text-slate-200' 
                              : theme === 'sepia' 
                              ? 'bg-[#fdf6e3] border-[#e4dcc8] text-amber-900' 
                              : theme === 'cream'
                              ? 'bg-[#FFFDF9] border-[#E7DFC9] text-[#231C16]'
                              : 'bg-white border-slate-200 text-slate-800'
                          }`}
                        >
                          <div className={`prose max-w-none text-sm sm:text-base leading-relaxed ${theme === 'dark' ? 'prose-invert' : ''}`}>
                            <AnnotatedText text={pages[flipState.fromRight - 1]} theme={theme} />
                          </div>
                          <div className="pt-4 border-t text-[11px] font-semibold opacity-60 font-mono tracking-wider text-center">
                            {flipState.fromRight}
                          </div>
                          <div className="absolute inset-0 bg-linear-to-r from-black/20 via-transparent to-black/10 pointer-events-none" />
                        </div>

                        {/* Back Face of Turning Leaf: shows toLeft */}
                        <div 
                          className={`book-page-face absolute inset-0 [transform:rotateY(180deg)] flex flex-col justify-between p-4 sm:p-8 rounded-l-lg overflow-hidden border-r shadow-2xl ${
                            theme === 'dark' 
                              ? 'bg-[#1e1e1e] border-[#333] text-slate-200' 
                              : theme === 'sepia' 
                              ? 'bg-[#fdf6e3] border-[#e4dcc8] text-amber-900' 
                              : theme === 'cream'
                              ? 'bg-[#FFFDF9] border-[#E7DFC9] text-[#231C16]'
                              : 'bg-white border-slate-200 text-slate-800'
                          }`}
                        >
                          <div className={`prose max-w-none text-sm sm:text-base leading-relaxed ${theme === 'dark' ? 'prose-invert' : ''}`}>
                            <AnnotatedText text={pages[flipState.toLeft - 1]} theme={theme} />
                          </div>
                          <div className="pt-4 border-t text-[11px] font-semibold opacity-60 font-mono tracking-wider text-center">
                            {flipState.toLeft}
                          </div>
                          <div className="absolute inset-0 bg-linear-to-l from-black/20 via-transparent to-black/10 pointer-events-none" />
                        </div>
                      </div>
                    )}

                    {/* 3D FLIPPING LEAF (BACKWARD: Left flips to Right) */}
                    {flipState?.direction === 'backward' && (
                      <div
                        className="absolute z-30 book-page-leaf animate-page-flip-backward pointer-events-none top-2 bottom-2 sm:top-5 sm:bottom-5"
                        style={{
                          left: '8px',
                          right: 'calc(50% + 2px)',
                          transformOrigin: 'right center',
                        }}
                      >
                        {/* Front Face of Turning Leaf: shows fromLeft */}
                        <div 
                          className={`book-page-face absolute inset-0 flex flex-col justify-between p-4 sm:p-8 rounded-l-lg overflow-hidden border-r shadow-2xl ${
                            theme === 'dark' 
                              ? 'bg-[#1e1e1e] border-[#333] text-slate-200' 
                              : theme === 'sepia' 
                              ? 'bg-[#fdf6e3] border-[#e4dcc8] text-amber-900' 
                              : theme === 'cream'
                              ? 'bg-[#FFFDF9] border-[#E7DFC9] text-[#231C16]'
                              : 'bg-white border-slate-200 text-slate-800'
                          }`}
                        >
                          <div className={`prose max-w-none text-sm sm:text-base leading-relaxed ${theme === 'dark' ? 'prose-invert' : ''}`}>
                            <AnnotatedText text={pages[flipState.fromLeft - 1]} theme={theme} />
                          </div>
                          <div className="pt-4 border-t text-[11px] font-semibold opacity-60 font-mono tracking-wider text-center">
                            {flipState.fromLeft}
                          </div>
                          <div className="absolute inset-0 bg-linear-to-l from-black/20 via-transparent to-black/10 pointer-events-none" />
                        </div>

                        {/* Back Face of Turning Leaf: shows toRight */}
                        <div 
                          className={`book-page-face absolute inset-0 [transform:rotateY(180deg)] flex flex-col justify-between p-4 sm:p-8 rounded-r-lg overflow-hidden border-l shadow-2xl ${
                            theme === 'dark' 
                              ? 'bg-[#1e1e1e] border-[#333] text-slate-200' 
                              : theme === 'sepia' 
                              ? 'bg-[#fdf6e3] border-[#e4dcc8] text-amber-900' 
                              : theme === 'cream'
                              ? 'bg-[#FFFDF9] border-[#E7DFC9] text-[#231C16]'
                              : 'bg-white border-slate-200 text-slate-800'
                          }`}
                        >
                          {flipState.toRight ? (
                            <>
                              <div className={`prose max-w-none text-sm sm:text-base leading-relaxed ${theme === 'dark' ? 'prose-invert' : ''}`}>
                                <AnnotatedText text={pages[flipState.toRight - 1]} theme={theme} />
                              </div>
                              <div className="pt-4 border-t text-[11px] font-semibold opacity-60 font-mono tracking-wider text-center">
                                {flipState.toRight}
                              </div>
                            </>
                          ) : null}
                          <div className="absolute inset-0 bg-linear-to-r from-black/20 via-transparent to-black/10 pointer-events-none" />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-3 flex items-center gap-2 text-xs text-slate-400 font-medium">
                    <span>Click either folio or use ← / → keys to flip pages in 3D</span>
                  </div>
                </div>
              ) : (
                /* SINGLE PAGE TEXT VIEW */
                <div className={`w-full shadow-md border px-4 py-6 sm:p-12 min-h-[600px] leading-relaxed whitespace-pre-wrap flex flex-col justify-between rounded-xl transition-colors ${
                  theme === 'dark' ? 'bg-[#1a1a1a] border-[#333] text-slate-200' :
                  theme === 'cream' ? 'bg-[#FFFDF9] border-[#E7DFC9] text-[#231C16]' :
                  'bg-white border-slate-200 text-slate-800'
                }`}>
                  <div 
                    key={currentPage} 
                    className={`prose max-w-none leading-relaxed animate-in fade-in zoom-in-95 duration-500 ease-out transition-all ${theme === 'dark' ? 'prose-invert' : ''}`}
                    style={{
                      fontSize: fontSize === 'compact' ? '0.925rem' : fontSize === 'large' ? '1.25rem' : '1.05rem',
                      lineHeight: fontSize === 'compact' ? '1.6' : fontSize === 'large' ? '2.05' : '1.8'
                    }}
                  >
                    <AnnotatedText text={pages[currentPage - 1]} theme={theme} />
                  </div>
                </div>
              )}

              {/* Bottom Pagination for Text */}
              <div className={`w-full flex justify-between items-center text-xs pt-4 border-t font-medium ${
                theme === 'dark' ? 'border-[#333] text-slate-500' :
                theme === 'cream' ? 'border-[#E7DFC9] text-[#6D5C4F]' :
                'border-slate-200 text-slate-400'
              }`}>
                <button 
                  onClick={handleTextPrev}
                  disabled={isTwoPageView ? textLeftPage <= 1 : currentPage === 1}
                  className="px-3.5 py-1.5 rounded-md hover:bg-black/5 disabled:opacity-30 transition-colors cursor-pointer font-semibold flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>
                <form 
                  onSubmit={(e) => { e.preventDefault(); handleTextPageInputBlur(); }}
                  className="flex items-center gap-1.5 font-medium"
                >
                  <span>{isTwoPageView ? 'Pages' : 'Page'}</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    enterKeyHint="go"
                    aria-label="Go to page"
                    title="Type a page number to jump directly to it"
                    value={textPageInputValue}
                    onChange={handleTextPageInputChange}
                    onFocus={(e) => e.target.select()}
                    onBlur={handleTextPageInputBlur}
                    className={`w-11 sm:w-13 text-center py-1 px-1 rounded-md border font-semibold text-xs transition-all focus:outline-hidden focus:ring-1 focus:ring-accent ${
                      theme === 'dark'
                        ? 'bg-[#222] border-[#444] text-white focus:border-accent'
                        : theme === 'cream'
                        ? 'bg-[#F5EFE3] border-[#DDD2B8] text-[#231C16] focus:border-accent'
                        : 'bg-white border-slate-300 text-slate-900 focus:border-accent shadow-2xs'
                    }`}
                  />
                  <span>
                    {isTwoPageView && textRightPage ? `(${textLeftPage}-${textRightPage})` : ''} of {pages.length}
                  </span>
                </form>
                <button 
                  onClick={handleTextNext}
                  disabled={isTwoPageView ? (textLeftPage + 1 >= pages.length) : currentPage === pages.length}
                  className="px-3.5 py-1.5 rounded-md hover:bg-black/5 disabled:opacity-30 transition-colors cursor-pointer font-semibold flex items-center gap-1"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-slate-400">
                {isTwoPageView ? 'Click pages or use left/right arrow keys to flip' : 'Use left/right arrow keys to flip pages'}
              </p>
            </div>
          ) : item.type === 'quote' || item.englishText ? (
            /* Alfanus-inspired Manuscript Quote & Athār Reader */
            <div className="w-full max-w-4xl space-y-6 relative flex flex-col items-center">
              <div className={`w-full shadow-md border px-4 py-6 sm:px-10 sm:py-10 flex flex-col rounded-2xl transition-colors relative overflow-hidden ${
                theme === 'dark' ? 'bg-[#181a1f] border-[#2c323f] text-slate-100' :
                theme === 'cream' ? 'bg-[#FFFDF9] border-[#E7DFC9] text-[#231C16] shadow-[0_12px_36px_rgba(40,30,20,0.06)]' :
                'bg-white border-slate-200/90 text-slate-800'
              }`}>
                {/* Classical Golden Manuscript Hairline at top of card */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#C19B53]/80 to-transparent" />

                <div className="animate-in fade-in zoom-in-95 duration-500 ease-out flex flex-col space-y-6">
                  
                  {/* Top Card Meta & Quiet Action Cluster */}
                  <div className="flex items-center justify-between gap-3 pb-3 border-b border-[#E7DFC9]/80 text-xs">
                    {/* Left: Category Pill */}
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#F5EFE3] text-[#6D5C4F] border border-[#DDD2B8] font-medium text-[11px] uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>

                    {/* Right: Quiet, Minimalist Actions */}
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      {/* Unified Copy Menu */}
                      <div className="relative" ref={copyMenuRef}>
                        <button
                          onClick={() => setShowCopyMenu(prev => !prev)}
                          className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer border ${
                            copyFeedback !== 'idle'
                              ? 'bg-[#155e4e] text-white border-[#155e4e] shadow-2xs'
                              : 'bg-[#F5EFE3] hover:bg-[#EAE1D0] text-[#231C16] border-[#DDD2B8]'
                          }`}
                          title="Copy text or citation"
                        >
                          {copyFeedback !== 'idle' ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-white" />
                              <span>Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 opacity-70" />
                              <span>Copy</span>
                              <ChevronDown className="w-3 h-3 opacity-60" />
                            </>
                          )}
                        </button>

                        {showCopyMenu && (
                          <div className="absolute right-0 mt-1.5 w-60 bg-[#FFFDF9] border border-[#E7DFC9] rounded-xl shadow-xl z-50 py-1.5 text-xs animate-in fade-in zoom-in-95 duration-150">
                            {item.arabicText && (
                              <>
                                <button
                                  onClick={() => { handleCopyArabic(); setShowCopyMenu(false); }}
                                  className="w-full px-3.5 py-2 text-left hover:bg-[#F5EFE3] flex items-center justify-between text-[#231C16] cursor-pointer"
                                >
                                  <span>Arabic with Tashkeel</span>
                                  <span className="font-arabic text-sm text-[#C19B53]">مع التشكيل</span>
                                </button>
                                <button
                                  onClick={() => { handleCopyCleanArabic(); setShowCopyMenu(false); }}
                                  className="w-full px-3.5 py-2 text-left hover:bg-[#F5EFE3] flex items-center justify-between text-[#231C16] cursor-pointer"
                                >
                                  <span>Plain Arabic (Clean)</span>
                                  <span className="font-arabic text-sm text-[#8C7A6B]">مجرد</span>
                                </button>
                                <div className="my-1 border-t border-[#E7DFC9]" />
                              </>
                            )}
                            <button
                              onClick={() => { handleCopyCitation(); setShowCopyMenu(false); }}
                              className="w-full px-3.5 py-2 text-left hover:bg-[#F5EFE3] flex items-center justify-between text-[#231C16] cursor-pointer"
                            >
                              <span>Complete Citation</span>
                              <span className="text-[10px] text-[#8C7A6B] uppercase font-sans">Full Reference</span>
                            </button>
                          </div>
                        )}
                      </div>

                      {/* Save Card Modal */}
                      <button
                        onClick={() => setShowCardModal(true)}
                        className="px-2.5 py-1.5 rounded-lg bg-[#F5EFE3] hover:bg-[#EAE1D0] text-[#231C16] border border-[#DDD2B8] transition-all flex items-center gap-1.5 cursor-pointer text-xs font-medium"
                        title="Save high-resolution presentation card"
                      >
                        <ImageIcon className="w-3.5 h-3.5 text-primary" />
                        <span className="hidden sm:inline">Card</span>
                      </button>
                    </div>
                  </div>

                  {/* Manuscript / Artifact Scan Preview */}
                  {item.imageUrl && (
                    <div className="w-full flex justify-center py-2">
                      <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="max-h-[500px] w-auto max-w-full rounded-lg object-contain mx-auto shadow-sm"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}

                  {/* Arabic Matn */}
                  {item.arabicText && (
                    <div 
                      className={`text-right rounded-xl p-5 sm:p-7 transition-all font-arabic ${
                        theme === 'dark' ? 'bg-slate-900/60 border border-slate-800/80 text-amber-300/95' :
                        theme === 'cream' ? 'bg-[#FBF8F1] border border-[#DDD2B8] text-[#1E1710] shadow-[inset_0_1px_3px_rgba(40,30,20,0.02)]' :
                        'bg-amber-50/50 border border-amber-100 text-slate-900'
                      }`}
                      style={{
                        fontSize: fontSize === 'compact' ? '1.35rem' : fontSize === 'large' ? '2.25rem' : '1.75rem',
                        lineHeight: fontSize === 'compact' ? '2.1' : fontSize === 'large' ? '2.7' : '2.4',
                        wordSpacing: '0.04em'
                      }}
                      dir="rtl"
                    >
                      {item.arabicText}
                    </div>
                  )}

                  {/* English Translation & Quote body */}
                  <div 
                    className="mobile-quote-container transition-all"
                    style={{
                      fontSize: fontSize === 'compact' ? '0.925rem' : fontSize === 'large' ? '1.35rem' : '1.125rem',
                      lineHeight: fontSize === 'compact' ? '1.65' : fontSize === 'large' ? '2.1' : '1.8'
                    }}
                  >
                    {item.htmlText ? (
                      <div 
                        className="font-serif tracking-normal leading-relaxed [&_*]:!text-[1em] [&_blockquote]:!text-[1.05em] [&_.text-xs]:!text-[0.8em] [&_.text-sm]:!text-[0.9em]"
                        style={{ fontSize: 'inherit', lineHeight: 'inherit' }}
                        dangerouslySetInnerHTML={{ __html: toCurlyHtml(item.htmlText) }}
                      />
                    ) : item.englishText && (
                      <AnnotatedText 
                        text={item.englishText} 
                        theme={theme} 
                        className="font-serif whitespace-pre-wrap tracking-normal transition-all" 
                      />
                    )}
                  </div>

                  {/* Scholarly Source & Reference at the Bottom */}
                  {(item.citation || item.author || (item.translator && item.translator !== 'None')) && (
                    <div className={`mt-8 pt-5 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm font-medium ${
                      theme === 'dark' ? 'border-slate-800 text-slate-300' :
                      theme === 'cream' ? 'border-[#E7DFC9] text-[#4A3B2C]' :
                      'border-slate-200 text-slate-700'
                    }`}>
                      {item.citation && (
                        <div className="flex items-baseline gap-2">
                          <span className={`font-bold uppercase tracking-wider text-[11px] ${
                            theme === 'dark' ? 'text-amber-400' :
                            theme === 'cream' ? 'text-[#8C6D3B]' :
                            'text-amber-800'
                          }`}>
                            Source:
                          </span>
                          <span className={`italic font-serif font-bold text-sm ${
                            theme === 'dark' ? 'text-amber-100' :
                            theme === 'cream' ? 'text-[#1E1710]' :
                            'text-slate-900'
                          }`}>
                            {toCurlyQuotes(item.citation)}
                          </span>
                        </div>
                      )}
                      
                      <div className="flex items-center gap-3 text-xs flex-wrap">
                        {item.author && (
                          <span className={theme === 'dark' ? 'text-slate-200' : theme === 'cream' ? 'text-[#2D2319]' : 'text-slate-800'}>
                            <span className="opacity-70 mr-1">Author:</span>
                            <strong className="font-bold">{toCurlyQuotes(item.author)}</strong>
                          </span>
                        )}
                        {item.translator && item.translator !== 'None' && (
                          <span className={theme === 'dark' ? 'text-slate-200' : theme === 'cream' ? 'text-[#2D2319]' : 'text-slate-800'}>
                            <span className="opacity-70 mr-1">Translated by:</span>
                            <strong className="font-bold">{item.translator === 'Abu_Mundhir' ? 'Abū Mundhir ar-Ruwāndī' : 'Abū Ṭalḥah al-ʾAfġhānī'}</strong>
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full aspect-[16/9] bg-white rounded-lg border border-slate-200 flex flex-col items-center justify-center text-slate-400 p-8">
              <FileText className="w-16 h-16 mb-4 opacity-50" />
              <p className="font-medium text-lg text-slate-600">Document Content</p>
              <p className="text-sm mt-1 text-slate-400">PDF preview is being prepared.</p>
            </div>
          )}
        </div>
        </div>
        
        {/* Notes Side Panel (Hidden in Reading Mode for distraction-free text focus) */}
        {showNotes && !isReadingMode && (
          <div className="w-full lg:w-[350px] xl:w-[400px] flex-shrink-0 bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden flex flex-col h-[calc(100vh-120px)] sticky top-8 animate-in slide-in-from-right-4 duration-300">
            <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
              <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                <PenSquare className="w-4 h-4 text-primary" />
                My Notes
              </h3>
              <div className="flex items-center gap-2">
                <Link 
                  to="/notes" 
                  className="text-xs text-primary hover:text-red-700 font-medium transition-colors mr-2 cursor-pointer hover:underline"
                >
                  View All Notes
                </Link>
                <button onClick={() => setShowNotes(false)} className="text-slate-400 hover:text-slate-600 p-1 rounded-md hover:bg-slate-200 transition-colors cursor-pointer">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="flex-1 relative bg-white">
              <RichTextEditor
                value={noteContent}
                onChange={saveNote}
                placeholder="Add your personal reflections, definitions, or summaries here... (Saved automatically)"
                className="absolute inset-0"
              />
            </div>
          </div>
        )}
      </div>

      {item && item.type !== 'pdf' && item.type !== 'video' && item.type !== 'audio' && (
        <CollectionCardModal
          item={item}
          isOpen={showCardModal}
          onClose={() => setShowCardModal(false)}
        />
      )}
    </div>
  );
}
