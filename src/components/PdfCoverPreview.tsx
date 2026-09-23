import { useEffect, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import { FileText, Loader2 } from 'lucide-react';

interface PdfCoverPreviewProps {
  pdfUrl: string;
  id: string;
  title: string;
  category: string;
  className?: string;
}

// In-memory cache across component re-renders and routes
const thumbnailMemoryCache = new Map<string, string>();

export function PdfCoverPreview({
  pdfUrl,
  id,
  title,
  category,
  className = ''
}: PdfCoverPreviewProps) {
  const [coverUrl, setCoverUrl] = useState<string | null>(() => {
    return thumbnailMemoryCache.get(pdfUrl) || sessionStorage.getItem(`pdf_cover_${id}`);
  });
  const [loading, setLoading] = useState<boolean>(!coverUrl);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    if (coverUrl) return;

    let isCancelled = false;

    async function loadCover() {
      try {
        setLoading(true);
        setHasError(false);

        // Ensure worker is configured
        if (!pdfjsLib.GlobalWorkerOptions.workerSrc) {
          pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';
        }

        const loadingTask = pdfjsLib.getDocument(pdfUrl);
        const doc = await loadingTask.promise;
        if (isCancelled) return;

        const page = await doc.getPage(1);
        if (isCancelled) return;

        const unscaledViewport = page.getViewport({ scale: 1 });
        // Target high-res width for retina & sharp banner preview
        const targetWidth = 640;
        const scale = targetWidth / unscaledViewport.width;
        const viewport = page.getViewport({ scale });

        const canvas = document.createElement('canvas');
        canvas.width = Math.floor(viewport.width);
        canvas.height = Math.floor(viewport.height);
        const ctx = canvas.getContext('2d');

        if (!ctx) {
          throw new Error('Canvas context unavailable');
        }

        const renderTask = page.render({
          canvasContext: ctx,
          viewport: viewport
        });

        await renderTask.promise;
        if (isCancelled) return;

        const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
        thumbnailMemoryCache.set(pdfUrl, dataUrl);
        try {
          sessionStorage.setItem(`pdf_cover_${id}`, dataUrl);
        } catch {
          // ignore potential storage quota issues
        }

        setCoverUrl(dataUrl);
        setLoading(false);
      } catch (err) {
        console.warn(`Could not render cover for ${pdfUrl}:`, err);
        if (!isCancelled) {
          setHasError(true);
          setLoading(false);
        }
      }
    }

    loadCover();

    return () => {
      isCancelled = true;
    };
  }, [pdfUrl, id, coverUrl]);

  if (coverUrl) {
    return (
      <img
        src={coverUrl}
        alt={title}
        className={`w-full h-full object-cover object-top group-hover/thumb:scale-105 transition-transform duration-300 ${className}`}
        loading="lazy"
      />
    );
  }

  // Fallback while loading or if pdfjs render fails: elegant classical manuscript cover
  return (
    <div className={`w-full h-full bg-linear-to-br from-[#0c2e24] via-[#103a2e] to-[#081f18] flex flex-col items-center justify-center p-4 relative overflow-hidden text-center select-none ${className}`}>
      {/* Decorative inner golden borders */}
      <div className="absolute inset-2 sm:inset-3 border border-amber-400/25 rounded-md pointer-events-none" />
      <div className="absolute inset-3 sm:inset-4 border border-amber-400/10 rounded-xs pointer-events-none" />
      
      {/* Subtle corner ornaments */}
      <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-amber-400/60" />
      <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-amber-400/60" />
      <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-amber-400/60" />
      <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-amber-400/60" />

      <div className="relative z-10 flex flex-col items-center max-w-[85%]">
        <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-300 mb-1.5 shadow-sm">
          {loading && !hasError ? (
            <Loader2 className="w-4 h-4 animate-spin text-amber-300" />
          ) : (
            <FileText className="w-4 h-4 text-amber-300" />
          )}
        </div>
        <p className="text-xs font-serif font-semibold text-amber-100 line-clamp-2 leading-tight">
          {title}
        </p>
        <span className="text-[10px] text-emerald-300/80 uppercase tracking-widest font-semibold mt-1">
          {category} • Classical Treatise
        </span>
      </div>
    </div>
  );
}
