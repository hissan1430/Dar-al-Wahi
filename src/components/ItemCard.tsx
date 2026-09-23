import { Link, useNavigate } from 'react-router-dom';
import { ContentItem } from '../data';
import { Bookmark, FileText, Quote, Play, Headphones, Newspaper, ArrowRight, Download, ListVideo } from 'lucide-react';
import { useBookmarks } from '../hooks/useBookmarks';
import { useReadingProgress } from '../hooks/useReadingProgress';
import { CollectionCardModal } from './CollectionCardModal';
import { PdfCoverPreview } from './PdfCoverPreview';
import React, { useState } from 'react';

interface ItemCardProps {
  item: ContentItem;
  key?: React.Key;
}

export function ItemCard({ item }: ItemCardProps) {
  const navigate = useNavigate();
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const { getProgress } = useReadingProgress();
  const [showCardModal, setShowCardModal] = useState(false);

  const bookmarked = isBookmarked(item.id);
  const isSeries = Boolean(item.videos && item.videos.length > 0);
  
  // Check if item is a PDF that can show cover thumbnail
  const isPdf = (item.type === 'pdf' || item.type === 'short treatise') && Boolean(item.pdfUrl);
  const hasPreviewBanner = Boolean(item.imageUrl || isPdf);

  // Only paginated PDFs track page progress - no percentages or progress on cards, videos, or quotes
  const isPaginatedPdf = item.type === 'pdf' && Boolean(item.pages && item.pages.length > 0);
  const progress = isPaginatedPdf ? getProgress(item.id) : undefined;
  const hasProgress = Boolean(
    isPaginatedPdf && 
    progress && 
    !progress.isFinished && 
    progress.currentPage && 
    progress.currentPage > 1
  );

  // Only short quotes/treatises can be converted into social poster cards - no PDFs, videos, or audios
  const canMakeCard = item.type !== 'pdf' && item.type !== 'video' && item.type !== 'audio';

  const getTypeIcon = () => {
    if (isSeries) return <ListVideo className="w-3.5 h-3.5" />;
    switch (item.type) {
      case 'video': return <Play className="w-3.5 h-3.5" />;
      case 'audio': return <Headphones className="w-3.5 h-3.5" />;
      case 'article': return <Newspaper className="w-3.5 h-3.5" />;
      case 'pdf':
      case 'short treatise': return <FileText className="w-3.5 h-3.5" />;
      default: return <Quote className="w-3.5 h-3.5" />;
    }
  };

  const getReadText = () => {
    if (isSeries) return 'Watch Series';
    switch (item.type) {
      case 'video': return 'Watch Video';
      case 'audio': return 'Listen Audio';
      case 'article': return 'Read Article';
      case 'pdf':
      case 'short treatise': return 'Read Document';
      default: return 'View Quote';
    }
  };

  return (
    <>
      <div className="bg-white border border-slate-200 rounded-xl shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group h-full">
        {/* Top Media / Scan Thumbnail Banner */}
        {hasPreviewBanner ? (
          <div 
            onClick={() => navigate(`/viewer/${item.id}`)}
            className="relative w-full aspect-video bg-slate-900 overflow-hidden cursor-pointer group/thumb shrink-0"
          >
            {item.imageUrl ? (
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            ) : isPdf && item.pdfUrl ? (
              <PdfCoverPreview
                pdfUrl={item.pdfUrl}
                id={item.id}
                title={item.title}
                category={item.category}
              />
            ) : null}
            
            {/* Dark gradient for badge contrast */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

            {/* Type Badge on Image */}
            <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-xs text-white px-2.5 py-1 rounded-md text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
              {getTypeIcon()}
              <span>{isSeries ? `Series (${item.videos!.length} Lessons)` : item.type}</span>
            </div>

            {/* Bottom Right Playlist Badge for Series */}
            {isSeries && (
              <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-xs text-white px-2 py-0.5 rounded text-[11px] font-semibold flex items-center gap-1 shadow-sm">
                <ListVideo className="w-3 h-3 text-red-400" />
                <span>{item.videos!.length} Lessons</span>
              </div>
            )}

            {/* Top Right Action Buttons on Image */}
            <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5">
              {canMakeCard && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setShowCardModal(true);
                  }}
                  className="text-white/90 hover:text-white bg-black/60 hover:bg-black/80 backdrop-blur-xs rounded-full p-2 shadow-xs transition-colors cursor-pointer"
                  title="Download as Card"
                  aria-label="Download as Card"
                >
                  <Download className="w-3.5 h-3.5" />
                </button>
              )}
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleBookmark(item.id);
                }}
                className="text-white/90 hover:text-white bg-black/60 hover:bg-black/80 backdrop-blur-xs rounded-full p-2 shadow-xs transition-colors cursor-pointer"
                title={bookmarked ? "Remove Bookmark" : "Add Bookmark"}
                aria-label="Toggle Bookmark"
              >
                <Bookmark 
                  className={`w-3.5 h-3.5 transition-all ${bookmarked ? 'text-accent fill-accent' : 'text-white/90'}`} 
                />
              </button>
            </div>

            {/* Centered Play Button for Video Items */}
            {item.type === 'video' && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg group-hover/thumb:scale-110 group-hover/thumb:bg-red-600 transition-all duration-200">
                  <Play className="w-5 h-5 fill-white translate-x-0.5" />
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Header for items without an image or PDF */
          <div className="p-6 pb-0 flex justify-between items-start shrink-0">
            <div className="flex items-center space-x-2 text-primary/70">
              {getTypeIcon()}
              <span className="text-xs font-semibold uppercase tracking-wider">{item.category}</span>
            </div>

            <div className="flex items-center gap-1.5">
              {canMakeCard && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setShowCardModal(true);
                  }}
                  className="text-slate-400 hover:text-primary transition-colors p-1.5 rounded-full hover:bg-slate-100 cursor-pointer"
                  title="Download as Card"
                  aria-label="Download as Card"
                >
                  <Download className="w-4 h-4" />
                </button>
              )}
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  toggleBookmark(item.id);
                }}
                className="text-slate-400 hover:text-accent transition-colors p-1.5 rounded-full hover:bg-slate-100 cursor-pointer"
                title={bookmarked ? "Remove Bookmark" : "Add Bookmark"}
                aria-label="Toggle Bookmark"
              >
                <Bookmark 
                  className={`w-5 h-5 transition-all ${bookmarked ? 'text-accent fill-accent' : 'text-slate-400 hover:text-accent'}`} 
                />
              </button>
            </div>
          </div>
        )}

        {/* Content Body - Uniform height structure */}
        <div className="p-4 sm:p-5 flex flex-col flex-1">
          {hasPreviewBanner && (
            <div className="flex items-center space-x-2 mb-1.5 text-primary/70">
              <span className="text-[11px] font-semibold uppercase tracking-wider">{item.category}</span>
            </div>
          )}

          {/* Title with standardized 2-line height */}
          <h3 className="font-heading text-base sm:text-lg font-medium text-slate-900 mb-1.5 line-clamp-2 leading-snug min-h-[2.85rem]" title={item.title}>
            {item.title}
          </h3>

          {/* Author or speaker with single line truncation and fixed height */}
          {(item.author || item.speaker) ? (
            <p className="text-slate-500 font-medium text-xs mb-2 line-clamp-1 truncate h-4" title={item.author || item.speaker}>
              {item.author || item.speaker}
            </p>
          ) : (
            <div className="h-4 mb-2" />
          )}

          {/* Summary with standardized 2-line height */}
          {item.summary ? (
            <p className="text-slate-600 leading-relaxed mb-3 text-xs sm:text-sm line-clamp-2 min-h-[2.5rem]">
              {item.summary}
            </p>
          ) : item.englishText ? (
            <p className="text-slate-600 leading-relaxed mb-3 text-xs sm:text-sm line-clamp-2 min-h-[2.5rem]">
              {item.englishText}
            </p>
          ) : (
            <div className="min-h-[2.5rem] mb-3" />
          )}

          {/* Footer Area - Pinned to bottom */}
          <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between gap-2 shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-400">{new Date(item.dateAdded).toLocaleDateString()}</span>
              {hasProgress && progress?.currentPage && item.pages && (
                <span className="text-[10px] font-semibold text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded">
                  p. {progress.currentPage}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              {hasProgress ? (
                <Link 
                  to={`/viewer/${item.id}?resume=true`} 
                  className="text-xs font-semibold text-white bg-primary hover:bg-primary/90 px-2.5 py-1 rounded-lg transition-colors flex items-center gap-1 shadow-2xs"
                >
                  <span>Resume</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              ) : (
                <Link 
                  to={`/viewer/${item.id}`} 
                  className="text-xs font-semibold text-primary hover:text-accent transition-colors flex items-center gap-1"
                >
                  <span>{getReadText()}</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {canMakeCard && (
        <CollectionCardModal
          item={item}
          isOpen={showCardModal}
          onClose={() => setShowCardModal(false)}
        />
      )}
    </>
  );
}
