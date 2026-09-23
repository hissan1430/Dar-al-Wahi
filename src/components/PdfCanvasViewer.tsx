import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import { 
  Download, 
  AlertCircle, 
  FileText, 
  Loader2, 
  ZoomIn, 
  ZoomOut, 
  ChevronLeft, 
  ChevronRight, 
  Maximize, 
  Minimize, 
  X,
  BookOpen,
  Columns2
} from 'lucide-react';
import { useReadingMode } from '../context/ReadingModeContext';

// Configure pdfjs worker to use the static worker in /public
pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

interface PdfCanvasViewerProps {
  pdfUrl: string;
  title: string;
  downloadFilename?: string;
  theme?: 'light' | 'dark' | 'sepia';
  initialPage?: number;
  onPageChange?: (page: number, totalPages: number) => void;
  isTwoPageView?: boolean;
  onTwoPageViewChange?: (isTwoPage: boolean) => void;
}

export function PdfCanvasViewer({
  pdfUrl,
  title,
  downloadFilename,
  theme = 'light',
  initialPage,
  onPageChange,
  isTwoPageView: externalTwoPageView,
  onTwoPageViewChange
}: PdfCanvasViewerProps) {
  const { isReadingMode, toggleReadingMode } = useReadingMode();
  
  const [numPages, setNumPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(initialPage || 1);
  const [pageInputValue, setPageInputValue] = useState<string>(String(initialPage || 1));
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(800);
  const [zoomMultiplier, setZoomMultiplier] = useState<number>(1);
  const [pdfDoc, setPdfDoc] = useState<any>(null);
  const [isImmersive, setIsImmersive] = useState<boolean>(false);

  // 3D Flip state & high-res snapshot cache
  const [flipState, setFlipState] = useState<{
    direction: 'forward' | 'backward';
    fromLeft: number;
    fromRight: number | null;
    toLeft: number;
    toRight: number | null;
  } | null>(null);
  const [pageSnapshots, setPageSnapshots] = useState<Map<number, string>>(new Map());

  const handlePageRendered = useCallback((pageNum: number, dataUrl: string) => {
    setPageSnapshots(prev => {
      if (prev.get(pageNum) === dataUrl) return prev;
      const next = new Map(prev);
      next.set(pageNum, dataUrl);
      return next;
    });
  }, []);

  // Two-page spread state
  const [internalTwoPageView, setInternalTwoPageView] = useState<boolean>(() => {
    try {
      return localStorage.getItem('dar_alwahi_pdf_two_page') === 'true';
    } catch {
      return false;
    }
  });

  const isTwoPageView = externalTwoPageView !== undefined ? externalTwoPageView : internalTwoPageView;

  const handleToggleTwoPage = (enabled: boolean) => {
    setInternalTwoPageView(enabled);
    try {
      localStorage.setItem('dar_alwahi_pdf_two_page', String(enabled));
    } catch {
      // ignore
    }
    if (onTwoPageViewChange) {
      onTwoPageViewChange(enabled);
    }
  };

  // Keep body overflow in sync with immersive fullscreen
  useEffect(() => {
    if (isImmersive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isImmersive]);

  // Responsive container width measuring with ResizeObserver
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => {
      const w = el.clientWidth;
      if (w > 0) {
        setContainerWidth(w);
      }
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener('resize', update);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', update);
    };
  }, []);

  // Load PDF document
  useEffect(() => {
    let isCancelled = false;
    setLoading(true);
    setError(null);

    const loadDoc = async () => {
      try {
        const loadingTask = pdfjsLib.getDocument(pdfUrl);
        const doc = await loadingTask.promise;
        if (!isCancelled) {
          setPdfDoc(doc);
          setNumPages(doc.numPages);
          const startPage = initialPage && initialPage >= 1 ? Math.min(initialPage, doc.numPages) : 1;
          setCurrentPage(startPage);
          setPageInputValue(String(startPage));
          setLoading(false);
        }
      } catch (err: any) {
        console.error("Error loading PDF via pdfjs:", err);
        if (!isCancelled) {
          setError(err?.message || "Failed to load PDF document.");
          setLoading(false);
        }
      }
    };

    loadDoc();
    return () => {
      isCancelled = true;
    };
  }, [pdfUrl]);

  // Keep page in sync when initialPage changes dynamically
  useEffect(() => {
    if (initialPage && initialPage >= 1 && numPages > 0) {
      const bounded = Math.min(initialPage, numPages);
      setCurrentPage(bounded);
      setPageInputValue(String(bounded));
    }
  }, [initialPage, numPages]);

  useEffect(() => {
    if (numPages > 0 && onPageChange) {
      onPageChange(currentPage, numPages);
    }
    setPageInputValue(String(currentPage));
  }, [currentPage, numPages, onPageChange]);

  // Two-page spread logic: enabled whenever user chooses 2-pages and doc has >= 2 pages
  const canShowTwoPages = isTwoPageView && numPages >= 2;
  const leftPage = canShowTwoPages ? (currentPage % 2 === 1 ? currentPage : Math.max(1, currentPage - 1)) : currentPage;
  const rightPage = canShowTwoPages ? (leftPage + 1 <= numPages ? leftPage + 1 : null) : null;

  // Exact calculations to prevent horizontal clipping
  const isNarrowScreen = containerWidth < 640;
  const spreadPadding = isNarrowScreen ? 12 : 24;
  const spineWidth = isNarrowScreen ? 8 : 16;
  const spreadBorder = 4;
  const availableSpreadWidth = Math.max(280, containerWidth - (isNarrowScreen ? 8 : 20));

  // Single page display width
  const singlePageTargetWidth = Math.min(
    Math.max(260, containerWidth - (isNarrowScreen ? 12 : 28)),
    Math.round(840 * zoomMultiplier)
  );

  // Two-page single width: each page strictly takes half the available width
  const targetSpreadWidth = Math.min(
    Math.round(1400 * zoomMultiplier),
    Math.max(availableSpreadWidth, Math.round(availableSpreadWidth * zoomMultiplier))
  );
  const twoPageSingleWidth = Math.max(
    140,
    Math.floor((targetSpreadWidth - spreadPadding - spineWidth - spreadBorder) / 2)
  );
  const actualSpreadWidth = (twoPageSingleWidth * 2) + spineWidth + spreadPadding + spreadBorder;

  const fileName = downloadFilename || `${title.replace(/\s+/g, '_')}.pdf`;

  const handleZoomIn = () => setZoomMultiplier(prev => Math.min(prev + 0.15, 1.8));
  const handleZoomOut = () => setZoomMultiplier(prev => Math.max(prev - 0.15, 0.7));
  const handleZoomReset = () => setZoomMultiplier(1);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handlePrev = useCallback(() => {
    if (loading || flipState) return;
    if (canShowTwoPages) {
      if (leftPage > 1) {
        const prevLeft = Math.max(1, leftPage - 2);
        const prevRight = prevLeft + 1 <= numPages ? prevLeft + 1 : null;
        setFlipState({
          direction: 'backward',
          fromLeft: leftPage,
          fromRight: rightPage,
          toLeft: prevLeft,
          toRight: prevRight,
        });
        setTimeout(() => {
          setCurrentPage(prevLeft);
          setFlipState(null);
        }, 520);
      }
    } else {
      setCurrentPage(prev => Math.max(prev - 1, 1));
    }
  }, [loading, flipState, canShowTwoPages, leftPage, rightPage, numPages]);

  const handleNext = useCallback(() => {
    if (loading || flipState) return;
    if (canShowTwoPages) {
      if (leftPage + 2 <= numPages) {
        const nextLeft = leftPage + 2;
        const nextRight = nextLeft + 1 <= numPages ? nextLeft + 1 : null;
        setFlipState({
          direction: 'forward',
          fromLeft: leftPage,
          fromRight: rightPage,
          toLeft: nextLeft,
          toRight: nextRight,
        });
        setTimeout(() => {
          setCurrentPage(nextLeft);
          setFlipState(null);
        }, 520);
      }
    } else {
      setCurrentPage(prev => Math.min(prev + 1, numPages));
    }
  }, [loading, flipState, canShowTwoPages, leftPage, rightPage, numPages]);

  const handlePageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    setPageInputValue(val);

    if (timerRef.current) clearTimeout(timerRef.current);
    const parsed = parseInt(val, 10);
    if (!isNaN(parsed) && parsed >= 1 && parsed <= numPages) {
      timerRef.current = setTimeout(() => {
        setCurrentPage(parsed);
      }, 600);
    }
  };

  const handlePageInputSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (timerRef.current) clearTimeout(timerRef.current);
    const parsed = parseInt(pageInputValue, 10);
    if (!isNaN(parsed) && parsed >= 1 && parsed <= numPages) {
      setCurrentPage(parsed);
    } else {
      setPageInputValue(String(currentPage));
    }
  };

  const handlePageInputBlur = () => {
    handlePageInputSubmit();
  };

  let toolbarClass = "bg-white border-slate-200";
  let textClass = "text-slate-800";
  let iconBtnClass = "hover:bg-slate-100 text-slate-600";
  let secondaryBg = "bg-slate-100 border-slate-200/60";
  let progressBg = "bg-black/5";

  if (theme === 'dark') {
    toolbarClass = "bg-[#1a1a1a] border-[#333]";
    textClass = "text-slate-200";
    iconBtnClass = "hover:bg-[#2a2a2a] text-slate-400";
    secondaryBg = "bg-[#222] border-[#333]";
    progressBg = "bg-white/10";
  } else if (theme === 'sepia') {
    toolbarClass = "bg-[#fdf6e3] border-[#e4dcc8]";
    textClass = "text-amber-900";
    iconBtnClass = "hover:bg-[#f4ecd8] text-amber-800";
    secondaryBg = "bg-[#f4ecd8] border-[#e4dcc8]";
    progressBg = "bg-amber-900/10";
  }

  let wrapperClass = "w-full flex flex-col items-center";
  if (isImmersive) {
    if (theme === 'dark') {
      wrapperClass = "fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex flex-col items-center p-3 sm:p-6 bg-[#0f1115]";
    } else if (theme === 'sepia') {
      wrapperClass = "fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex flex-col items-center p-3 sm:p-6 bg-[#e4dcc8]";
    } else {
      wrapperClass = "fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex flex-col items-center p-3 sm:p-6 bg-slate-100";
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') return;
      
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'Escape') {
        setIsImmersive(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  const effectivePageForProgress = canShowTwoPages ? Math.min(numPages, (rightPage || leftPage)) : currentPage;

  return (
    <div ref={containerRef} className={wrapperClass}>
      
      {/* Floating Exit Button for Fullscreen Mode */}
      {isImmersive && (
        <div className="fixed top-4 right-4 z-50 flex items-center space-x-2">
          <button
            onClick={() => setIsImmersive(false)}
            className="flex items-center space-x-2 bg-slate-900/90 text-white px-4 py-2 rounded-full shadow-lg backdrop-blur-md hover:bg-slate-900 transition-all font-medium text-xs border border-white/10 cursor-pointer"
          >
            <X className="w-4 h-4" />
            <span>Exit Fullscreen</span>
          </button>
        </div>
      )}

      {/* Sticky Reader Toolbar */}
      <div className={`relative overflow-hidden w-full ${canShowTwoPages ? 'max-w-7xl' : 'max-w-5xl'} flex flex-wrap justify-between items-center px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl mb-6 shadow-xs sticky top-3 z-30 gap-2 sm:gap-3 border ${toolbarClass}`}>
        
        {/* Progress Bar */}
        <div className={`absolute bottom-0 left-0 w-full h-1 ${progressBg}`}>
          <div 
            className="h-full bg-primary transition-all duration-300 ease-out"
            style={{ width: `${numPages > 0 ? (effectivePageForProgress / numPages) * 100 : 0}%` }}
          />
        </div>

        {/* Left Section: Pagination & Jump Input */}
        <div className="flex items-center space-x-1 sm:space-x-1.5">
          <button 
            onClick={handlePrev} 
            disabled={(canShowTwoPages ? leftPage <= 1 : currentPage <= 1) || loading} 
            className={`p-1.5 rounded-md disabled:opacity-40 transition-colors cursor-pointer ${iconBtnClass}`}
            title="Previous Page (Left Arrow)"
            aria-label="Previous Page"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {loading ? (
            <span className={`font-semibold text-xs sm:text-sm px-2 ${textClass}`}>
              Loading...
            </span>
          ) : (
            <form 
              onSubmit={handlePageInputSubmit} 
              className="flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-medium"
            >
              <span className={`hidden xs:inline ${textClass} opacity-70`}>
                {canShowTwoPages ? 'Pages' : 'Page'}
              </span>
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                enterKeyHint="go"
                aria-label="Go to page number"
                title="Type a page number to jump directly to it"
                value={pageInputValue}
                onChange={handlePageInputChange}
                onFocus={(e) => e.target.select()}
                onBlur={handlePageInputBlur}
                className={`w-11 sm:w-13 text-center py-1 px-1 rounded-md border font-bold text-xs sm:text-sm transition-all focus:outline-hidden focus:ring-2 focus:ring-accent ${
                  theme === 'dark'
                    ? 'bg-[#222] border-[#444] text-white focus:border-accent'
                    : theme === 'sepia'
                    ? 'bg-[#f4ecd8] border-[#d8cfb9] text-amber-950 focus:border-accent'
                    : 'bg-white border-slate-300 text-slate-900 focus:border-accent shadow-2xs'
                }`}
              />
              <span className={`${textClass} opacity-70`}>
                {canShowTwoPages && rightPage ? `(${leftPage}-${rightPage})` : ''} of {numPages}
              </span>
            </form>
          )}

          <button 
            onClick={handleNext} 
            disabled={(canShowTwoPages ? (leftPage + 1 >= numPages) : currentPage >= numPages) || loading} 
            className={`p-1.5 rounded-md disabled:opacity-40 transition-colors cursor-pointer ${iconBtnClass}`}
            title="Next Page (Right Arrow)"
            aria-label="Next Page"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Center Section: 1-Page / 2-Page View Switcher (Desktop/Tablet) */}
        <div className="hidden sm:flex items-center space-x-1.5 sm:space-x-2">
          {/* 1-Page vs 2-Page Spread Toggle */}
          <div className={`flex items-center rounded-lg p-0.5 border ${secondaryBg}`}>
            <button
              onClick={() => handleToggleTwoPage(false)}
              className={`flex items-center space-x-1 px-2 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                !isTwoPageView 
                  ? 'bg-primary text-white shadow-2xs' 
                  : `${textClass} opacity-70 hover:opacity-100`
              }`}
              title="Single Page View"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>1-Page</span>
            </button>
            <button
              onClick={() => handleToggleTwoPage(true)}
              className={`flex items-center space-x-1 px-2 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                isTwoPageView 
                  ? 'bg-primary text-white shadow-2xs' 
                  : `${textClass} opacity-70 hover:opacity-100`
              }`}
              title="2-Page Book Spread"
            >
              <Columns2 className="w-3.5 h-3.5" />
              <span>2-Pages</span>
            </button>
          </div>
        </div>

        {/* Right Section: Fullscreen & Zoom Controls */}
        <div className="flex items-center space-x-1.5 sm:space-x-2">
          <button
            onClick={() => setIsImmersive(!isImmersive)}
            className={`p-1.5 rounded-md transition-colors cursor-pointer ${
              isImmersive 
                ? 'bg-primary text-white' 
                : iconBtnClass
            }`}
            title={isImmersive ? "Exit Fullscreen" : "Fullscreen Reader"}
            aria-label="Toggle Fullscreen"
          >
            {isImmersive ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
          </button>

          <div className={`hidden md:flex items-center rounded-lg p-0.5 space-x-1 border ${secondaryBg}`}>
            <button
              onClick={handleZoomOut}
              disabled={zoomMultiplier <= 0.7}
              className={`p-1.5 rounded-md disabled:opacity-40 transition-colors cursor-pointer ${iconBtnClass}`}
              title="Zoom out"
              aria-label="Zoom out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleZoomReset}
              className={`px-1.5 py-0.5 text-xs font-medium rounded-md transition-colors ${textClass}`}
              title="Reset zoom"
            >
              {Math.round(zoomMultiplier * 100)}%
            </button>
            <button
              onClick={handleZoomIn}
              disabled={zoomMultiplier >= 1.8}
              className={`p-1.5 rounded-md disabled:opacity-40 transition-colors cursor-pointer ${iconBtnClass}`}
              title="Zoom in"
              aria-label="Zoom in"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>

          <a
            href={pdfUrl}
            download={fileName}
            className="inline-flex items-center space-x-1.5 text-xs font-semibold text-white bg-primary hover:bg-primary/90 px-2.5 py-1.5 rounded-lg transition-all shadow-xs active:scale-95"
            title="Download PDF file"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">PDF</span>
          </a>
        </div>
      </div>

      {loading && (
        <div className="py-24 flex flex-col items-center justify-center space-y-4 text-slate-500">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
          <p className="font-medium text-sm">Rendering PDF document...</p>
        </div>
      )}

      {error && (
        <div className="w-full max-w-xl bg-amber-50 border border-amber-200 rounded-lg p-6 text-center my-8">
          <AlertCircle className="w-8 h-8 text-amber-600 mx-auto mb-2" />
          <h3 className="font-semibold text-slate-900 mb-1">Could not render PDF preview</h3>
          <p className="text-sm text-slate-600 mb-4">{error}</p>
          <a
            href={pdfUrl}
            download={fileName}
            className="inline-flex items-center space-x-2 text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Download file directly</span>
          </a>
        </div>
      )}

      {!loading && !error && pdfDoc && (
        <div className="w-full flex flex-col items-center space-y-6 relative min-h-[600px]">
          
          {/* TWO-PAGE SPREAD VIEW WITH 3D PAGE FLIP */}
          {canShowTwoPages ? (
            <div className="book-perspective w-full flex flex-col items-center select-none overflow-x-auto pb-2">
              <div 
                key={`spread-${leftPage}`}
                className="book-spread relative flex justify-center items-stretch rounded-xl shadow-2xl p-1.5 sm:p-3 transition-all duration-300 border"
                style={{
                  backgroundColor: theme === 'dark' ? '#141414' : theme === 'sepia' ? '#ebdcc1' : '#e2e8f0',
                  borderColor: theme === 'dark' ? '#262626' : theme === 'sepia' ? '#d8c8a8' : '#cbd5e1',
                  width: `${actualSpreadWidth}px`,
                  maxWidth: '100%'
                }}
              >
                {/* Left Page (Base) */}
                <div 
                  onClick={handlePrev}
                  className={`relative flex flex-col items-center rounded-l-lg overflow-hidden cursor-pointer transition-all hover:brightness-[0.99] border-r ${
                    theme === 'dark' 
                      ? 'bg-[#1e1e1e] border-[#333]' 
                      : theme === 'sepia' 
                      ? 'bg-[#fdf6e3] border-[#e4dcc8]' 
                      : 'bg-white border-slate-200'
                  } shadow-md`}
                  style={{ width: `${twoPageSingleWidth}px`, flexShrink: 0 }}
                  title="Click left page to go to previous spread"
                >
                  <PdfPageCanvas
                    key={`left-${flipState ? (flipState.direction === 'forward' ? flipState.fromLeft : flipState.toLeft) : leftPage}`}
                    pdfDoc={pdfDoc}
                    pageNum={flipState ? (flipState.direction === 'forward' ? flipState.fromLeft : flipState.toLeft) : leftPage}
                    containerWidth={twoPageSingleWidth}
                    theme={theme}
                    onRendered={handlePageRendered}
                  />
                  {/* Dynamic receiving shadow on forward flip */}
                  {flipState?.direction === 'forward' && (
                    <div className="absolute inset-0 bg-black/30 pointer-events-none animate-page-shadow rounded-l-lg" />
                  )}
                </div>

                {/* Central Spine / Crease */}
                <div 
                  className="relative z-20 self-stretch bg-gradient-to-r from-black/25 via-black/5 to-black/25 flex-shrink-0 shadow-inner" 
                  style={{ width: `${spineWidth}px` }}
                />

                {/* Right Page (Base) */}
                <div 
                  onClick={() => rightPage && handleNext()}
                  className={`relative flex flex-col items-center rounded-r-lg overflow-hidden transition-all border-l ${
                    (flipState ? flipState.toRight || flipState.fromRight : rightPage) ? 'cursor-pointer hover:brightness-[0.99]' : ''
                  } ${
                    theme === 'dark' 
                      ? 'bg-[#1e1e1e] border-[#333]' 
                      : theme === 'sepia' 
                      ? 'bg-[#fdf6e3] border-[#e4dcc8]' 
                      : 'bg-white border-slate-200'
                  } shadow-md`}
                  style={{ width: `${twoPageSingleWidth}px`, flexShrink: 0 }}
                  title={(flipState ? flipState.toRight : rightPage) ? "Click right page to go to next spread" : undefined}
                >
                  {(() => {
                    const displayRightPage = flipState 
                      ? (flipState.direction === 'forward' ? flipState.toRight : flipState.fromRight)
                      : rightPage;
                    return displayRightPage ? (
                      <>
                        <PdfPageCanvas
                          key={`right-${displayRightPage}`}
                          pdfDoc={pdfDoc}
                          pageNum={displayRightPage}
                          containerWidth={twoPageSingleWidth}
                          theme={theme}
                          onRendered={handlePageRendered}
                        />
                        {/* Dynamic receiving shadow on backward flip */}
                        {flipState?.direction === 'backward' && (
                          <div className="absolute inset-0 bg-black/30 pointer-events-none animate-page-shadow rounded-r-lg" />
                        )}
                      </>
                    ) : (
                      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center text-xs opacity-50 italic min-h-[320px]">
                        <p className="font-heading text-sm font-semibold mb-1">End of document</p>
                        <p>Page {flipState?.fromLeft || leftPage} is the final page</p>
                      </div>
                    );
                  })()}
                </div>

                {/* 3D FLIPPING LEAF (FORWARD: Right page flips over to Left) */}
                {flipState?.direction === 'forward' && flipState.fromRight && (
                  <div
                    className="absolute z-30 book-page-leaf animate-page-flip-forward pointer-events-none"
                    style={{
                      top: isNarrowScreen ? '6px' : '12px',
                      bottom: isNarrowScreen ? '6px' : '12px',
                      left: `calc(50% + ${spineWidth / 2}px)`,
                      width: `${twoPageSingleWidth}px`,
                      transformOrigin: 'left center',
                    }}
                  >
                    {/* Front Face of Turning Leaf: displays fromRight */}
                    <div 
                      className={`book-page-face absolute inset-0 flex flex-col items-center rounded-r-lg overflow-hidden border-l shadow-2xl ${
                        theme === 'dark' ? 'bg-[#1e1e1e] border-[#333]' : theme === 'sepia' ? 'bg-[#fdf6e3] border-[#e4dcc8]' : 'bg-white border-slate-200'
                      }`}
                    >
                      {pageSnapshots.get(flipState.fromRight) ? (
                        <img 
                          src={pageSnapshots.get(flipState.fromRight)} 
                          alt={`Page ${flipState.fromRight}`}
                          className="w-full h-auto block select-none pointer-events-none"
                          style={{ width: `${twoPageSingleWidth}px` }}
                        />
                      ) : (
                        <PdfPageCanvas
                          pdfDoc={pdfDoc}
                          pageNum={flipState.fromRight}
                          containerWidth={twoPageSingleWidth}
                          theme={theme}
                        />
                      )}
                      <div className="absolute inset-0 bg-linear-to-r from-black/25 via-transparent to-black/10 pointer-events-none" />
                    </div>

                    {/* Back Face of Turning Leaf: displays toLeft */}
                    <div 
                      className={`book-page-face absolute inset-0 [transform:rotateY(180deg)] flex flex-col items-center rounded-l-lg overflow-hidden border-r shadow-2xl ${
                        theme === 'dark' ? 'bg-[#1e1e1e] border-[#333]' : theme === 'sepia' ? 'bg-[#fdf6e3] border-[#e4dcc8]' : 'bg-white border-slate-200'
                      }`}
                    >
                      {pageSnapshots.get(flipState.toLeft) ? (
                        <img 
                          src={pageSnapshots.get(flipState.toLeft)} 
                          alt={`Page ${flipState.toLeft}`}
                          className="w-full h-auto block select-none pointer-events-none"
                          style={{ width: `${twoPageSingleWidth}px` }}
                        />
                      ) : (
                        <PdfPageCanvas
                          pdfDoc={pdfDoc}
                          pageNum={flipState.toLeft}
                          containerWidth={twoPageSingleWidth}
                          theme={theme}
                        />
                      )}
                      <div className="absolute inset-0 bg-linear-to-l from-black/25 via-transparent to-black/10 pointer-events-none" />
                    </div>
                  </div>
                )}

                {/* 3D FLIPPING LEAF (BACKWARD: Left page flips over to Right) */}
                {flipState?.direction === 'backward' && (
                  <div
                    className="absolute z-30 book-page-leaf animate-page-flip-backward pointer-events-none"
                    style={{
                      top: isNarrowScreen ? '6px' : '12px',
                      bottom: isNarrowScreen ? '6px' : '12px',
                      right: `calc(50% + ${spineWidth / 2}px)`,
                      width: `${twoPageSingleWidth}px`,
                      transformOrigin: 'right center',
                    }}
                  >
                    {/* Front Face of Turning Leaf: displays fromLeft */}
                    <div 
                      className={`book-page-face absolute inset-0 flex flex-col items-center rounded-l-lg overflow-hidden border-r shadow-2xl ${
                        theme === 'dark' ? 'bg-[#1e1e1e] border-[#333]' : theme === 'sepia' ? 'bg-[#fdf6e3] border-[#e4dcc8]' : 'bg-white border-slate-200'
                      }`}
                    >
                      {pageSnapshots.get(flipState.fromLeft) ? (
                        <img 
                          src={pageSnapshots.get(flipState.fromLeft)} 
                          alt={`Page ${flipState.fromLeft}`}
                          className="w-full h-auto block select-none pointer-events-none"
                          style={{ width: `${twoPageSingleWidth}px` }}
                        />
                      ) : (
                        <PdfPageCanvas
                          pdfDoc={pdfDoc}
                          pageNum={flipState.fromLeft}
                          containerWidth={twoPageSingleWidth}
                          theme={theme}
                        />
                      )}
                      <div className="absolute inset-0 bg-linear-to-l from-black/25 via-transparent to-black/10 pointer-events-none" />
                    </div>

                    {/* Back Face of Turning Leaf: displays toRight */}
                    <div 
                      className={`book-page-face absolute inset-0 [transform:rotateY(180deg)] flex flex-col items-center rounded-r-lg overflow-hidden border-l shadow-2xl ${
                        theme === 'dark' ? 'bg-[#1e1e1e] border-[#333]' : theme === 'sepia' ? 'bg-[#fdf6e3] border-[#e4dcc8]' : 'bg-white border-slate-200'
                      }`}
                    >
                      {flipState.toRight && pageSnapshots.get(flipState.toRight) ? (
                        <img 
                          src={pageSnapshots.get(flipState.toRight)} 
                          alt={`Page ${flipState.toRight}`}
                          className="w-full h-auto block select-none pointer-events-none"
                          style={{ width: `${twoPageSingleWidth}px` }}
                        />
                      ) : flipState.toRight ? (
                        <PdfPageCanvas
                          pdfDoc={pdfDoc}
                          pageNum={flipState.toRight}
                          containerWidth={twoPageSingleWidth}
                          theme={theme}
                        />
                      ) : null}
                      <div className="absolute inset-0 bg-linear-to-r from-black/25 via-transparent to-black/10 pointer-events-none" />
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-3 flex items-center gap-2 text-xs text-slate-400 font-medium">
                <span>Click either page or use ← / → keys to flip pages in 3D</span>
              </div>
            </div>
          ) : (
            /* SINGLE PAGE VIEW */
            <PdfPageCanvas
              key={`single-${currentPage}`}
              pdfDoc={pdfDoc}
              pageNum={currentPage}
              containerWidth={singlePageTargetWidth}
              theme={theme}
              onRendered={handlePageRendered}
            />
          )}

          {/* Bottom Pagination Controls */}
          <div className="flex items-center justify-between w-full max-w-2xl mt-8 px-4">
            <button
              onClick={handlePrev}
              disabled={canShowTwoPages ? leftPage <= 1 : currentPage <= 1}
              className={`flex items-center space-x-1.5 sm:space-x-2 px-3.5 sm:px-5 py-2 sm:py-3 border rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium shadow-xs cursor-pointer ${toolbarClass} ${iconBtnClass}`}
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm">Previous</span>
            </button>

            <form onSubmit={handlePageInputSubmit} className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold">
              <span className={`hidden sm:inline ${textClass} opacity-70`}>
                {canShowTwoPages ? 'Pages' : 'Page'}
              </span>
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                enterKeyHint="go"
                aria-label="Jump to page"
                title="Type a page number to jump directly to it"
                value={pageInputValue}
                onChange={handlePageInputChange}
                onFocus={(e) => e.target.select()}
                onBlur={handlePageInputBlur}
                className={`w-12 sm:w-14 text-center py-1 sm:py-1.5 px-1.5 rounded-lg border font-bold text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-accent transition-all ${
                  theme === 'dark' 
                    ? 'bg-[#222] border-[#444] text-white focus:border-accent' 
                    : theme === 'sepia'
                    ? 'bg-[#f4ecd8] border-[#d8cfb9] text-amber-950 focus:border-accent'
                    : 'bg-white border-slate-300 text-slate-900 shadow-2xs focus:border-accent'
                }`}
              />
              <span className={`${textClass} opacity-70`}>
                {canShowTwoPages && rightPage ? `(${leftPage}-${rightPage})` : ''} / {numPages}
              </span>
            </form>

            <button
              onClick={handleNext}
              disabled={canShowTwoPages ? (leftPage + 1 >= numPages) : currentPage >= numPages}
              className={`flex items-center space-x-1.5 sm:space-x-2 px-3.5 sm:px-5 py-2 sm:py-3 border rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium shadow-xs cursor-pointer ${toolbarClass} ${iconBtnClass}`}
            >
              <span className="text-xs sm:text-sm">Next</span>
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

interface PdfPageCanvasProps {
  key?: React.Key;
  pdfDoc: any;
  pageNum: number;
  containerWidth: number;
  theme?: 'light' | 'dark' | 'sepia';
  onRendered?: (pageNum: number, dataUrl: string) => void;
}

// Single Page Canvas Component (renders immediately when mounted)
function PdfPageCanvas({
  pdfDoc,
  pageNum,
  containerWidth,
  theme = 'light',
  onRendered
}: PdfPageCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRendered, setIsRendered] = useState<boolean>(false);
  const [aspectRatio, setAspectRatio] = useState<number>(1.414); // Standard A4 default

  // Render canvas once mounted
  useEffect(() => {
    let renderTask: any = null;
    let isCancelled = false;
    setIsRendered(false);

    const renderPage = async () => {
      try {
        const page = await pdfDoc.getPage(pageNum);
        if (isCancelled) return;

        const unscaledViewport = page.getViewport({ scale: 1 });
        const ratio = unscaledViewport.height / unscaledViewport.width;
        setAspectRatio(ratio);

        if (!canvasRef.current) return;

        const scale = containerWidth / unscaledViewport.width;
        const viewport = page.getViewport({ scale });

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        if (!context) return;

        // High DPI canvas rendering for sharp crisp text
        const outputScale = window.devicePixelRatio || 1;
        canvas.width = Math.floor(viewport.width * outputScale);
        canvas.height = Math.floor(viewport.height * outputScale);
        canvas.style.width = `${Math.floor(viewport.width)}px`;
        canvas.style.height = `${Math.floor(viewport.height)}px`;

        const transform = outputScale !== 1 
          ? [outputScale, 0, 0, outputScale, 0, 0] 
          : null;

        renderTask = page.render({
          canvasContext: context,
          viewport: viewport,
          transform: transform || undefined,
        });

        await renderTask.promise;
        if (!isCancelled) {
          setIsRendered(true);
          if (canvasRef.current && onRendered) {
            try {
              const dataUrl = canvasRef.current.toDataURL('image/jpeg', 0.82);
              onRendered(pageNum, dataUrl);
            } catch {
              // canvas snapshot fallback
            }
          }
        }
      } catch (err: any) {
        if (err?.name !== 'RenderingCancelledException') {
          console.error(`Error rendering page ${pageNum}:`, err);
        }
      }
    };

    renderPage();

    return () => {
      isCancelled = true;
      if (renderTask) {
        renderTask.cancel();
      }
    };
  }, [pdfDoc, pageNum, containerWidth]);

  // Theme filters applied directly on canvas
  let filterStyle = 'none';
  if (theme === 'dark') {
    // Invert colors with slight contrast adjustment for comfortable reading
    filterStyle = 'invert(0.9) hue-rotate(180deg) brightness(0.95) contrast(1.1)';
  } else if (theme === 'sepia') {
    // Warm sepia parchment tone
    filterStyle = 'sepia(0.35) contrast(1.02) brightness(0.97)';
  }

  return (
    <div 
      className="relative flex justify-center items-center overflow-hidden transition-all duration-300"
      style={{
        width: `${containerWidth}px`,
        minHeight: `${Math.round(containerWidth * aspectRatio)}px`,
      }}
    >
      {!isRendered && (
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2 bg-slate-50/70 z-10">
          <Loader2 className="w-5 h-5 animate-spin text-primary opacity-60" />
          <span className="text-xs text-slate-500 font-medium">Page {pageNum}</span>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="transition-all duration-300 block select-none pointer-events-none"
        style={{
          filter: filterStyle,
          opacity: isRendered ? 1 : 0,
        }}
      />
    </div>
  );
}
