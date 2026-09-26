import { useState } from 'react';
import { ContentItem } from '../data';
import { toCurlyQuotes } from '../utils/typography';
import {
  X,
  Download,
  Copy,
  Check,
  Sparkles,
  ExternalLink,
  Square,
  RectangleVertical,
  Smartphone,
  Maximize2,
  AlertCircle
} from 'lucide-react';
import {
  PosterTheme,
  CardAspect,
  CardTemplate,
  ASPECT_CONFIGS,
  downloadCanvasAsPng
} from '../utils/atharCanvasGenerator';
import { generateCollectionCardCanvas } from '../utils/collectionCardGenerator';

interface CollectionCardModalProps {
  item: ContentItem;
  isOpen: boolean;
  onClose: () => void;
}

export function CollectionCardModal({ item, isOpen, onClose }: CollectionCardModalProps) {
  const [selectedTheme, setSelectedTheme] = useState<PosterTheme>('emerald');
  const [selectedAspect, setSelectedAspect] = useState<CardAspect>(item.imageUrl ? 'landscape' : 'square');
  const [selectedTemplate, setSelectedTemplate] = useState<CardTemplate>('classical');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedText, setCopiedText] = useState(false);
  const [copiedImage, setCopiedImage] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const currentAspectCfg = ASPECT_CONFIGS[selectedAspect];
  const hasImage = !!item.imageUrl;

  const handleDownload = async () => {
    try {
      setIsGenerating(true);
      setStatusMessage(null);
      setDownloadSuccess(false);

      const canvas = await generateCollectionCardCanvas(item, {
        theme: selectedTheme,
        aspect: selectedAspect,
        template: selectedTemplate
      });

      const cleanTitle = item.title.replace(/[^a-zA-Z0-9]/g, '_').slice(0, 30);
      const filename = `${cleanTitle}_${selectedAspect}_${selectedTemplate}.png`;

      const result = await downloadCanvasAsPng(canvas, filename);
      if (result.blobUrl) {
        setGeneratedImageUrl(result.blobUrl);
      }

      setDownloadSuccess(true);
      setStatusMessage('Download started! If preview blocked it, use "Open Full Res" or tap-and-hold to save.');
      setTimeout(() => setDownloadSuccess(false), 4000);
    } catch (err) {
      console.error('Failed to export card:', err);
      setStatusMessage('Could not trigger automatic download. You can open the image in a new tab or copy text.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopyImage = async () => {
    try {
      setIsGenerating(true);
      const canvas = await generateCollectionCardCanvas(item, {
        theme: selectedTheme,
        aspect: selectedAspect,
        template: selectedTemplate
      });

      canvas.toBlob(async (blob) => {
        if (!blob) return;
        let url = '';
        try {
          url = URL.createObjectURL(blob);
          setGeneratedImageUrl(url);

          if (navigator.clipboard && window.ClipboardItem) {
            await navigator.clipboard.write([
              new ClipboardItem({ 'image/png': blob })
            ]);
            setCopiedImage(true);
            setTimeout(() => setCopiedImage(false), 2500);
          } else {
            const link = document.createElement('a');
            link.href = url;
            link.download = `${item.title.replace(/[^a-zA-Z0-9]/g, '_')}_${selectedAspect}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }
        } catch (copyErr) {
          console.warn('Clipboard write failed, opening image URL instead:', copyErr);
          if (url) {
            window.open(url, '_blank');
          }
        } finally {
          setIsGenerating(false);
        }
      }, 'image/png', 1.0);
    } catch (e) {
      console.error('Failed to copy image:', e);
      setIsGenerating(false);
    }
  };

  const handleOpenImageInNewTab = async () => {
    try {
      setIsGenerating(true);
      const canvas = await generateCollectionCardCanvas(item, {
        theme: selectedTheme,
        aspect: selectedAspect,
        template: selectedTemplate
      });

      canvas.toBlob((blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        setGeneratedImageUrl(url);
        setStatusMessage('High-resolution card ready! View below or long-press / right-click to save.');
        try {
          const newWin = window.open(url, '_blank');
          if (!newWin) {
            // blocked in iframe
          }
        } catch {
          // ignore iframe restriction
        }
        setIsGenerating(false);
      }, 'image/png', 1.0);
    } catch (e) {
      console.error('Failed to open image:', e);
      setIsGenerating(false);
    }
  };

  const handleCopyText = () => {
    const textLines = [
      item.title,
      '',
      item.arabicText ? `${item.arabicText}\n` : '',
      item.englishText || item.summary || '',
      '',
      item.author || item.speaker ? `Author/Speaker: ${item.author || item.speaker}` : '',
      item.translator && item.translator !== 'None' 
        ? `Translator: ${item.translator === 'Abu_Mundhir' ? 'Abū Mundhir ar-Ruwāndī' : 'Abū Ṭalḥah al-ʾAfġhānī'}`
        : '',
      item.citation ? `Source: ${item.citation}` : '',
      '— Dār al-Waḥī'
    ].filter(Boolean).join('\n');

    navigator.clipboard.writeText(textLines);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2500);
  };

  const translatorLabel = item.translator === 'Abu_Mundhir'
    ? 'Abū Mundhir ar-Ruwāndī'
    : item.translator === 'Abu_Talhah'
    ? 'Abū Ṭalḥah al-ʾAfġhānī'
    : 'Dār al-Waḥī';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[95vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-slate-100 bg-slate-50/70 shrink-0">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 bg-amber-100/80 text-amber-800 rounded-xl">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-slate-900 text-base">
                Download Collection Card
              </h3>
              <p className="text-xs text-slate-500">
                Optimized layouts for Instagram, TikTok, Twitter, and print
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-4 flex-1 bg-slate-50/60">
          {/* Status Alert Message */}
          {statusMessage && (
            <div className="bg-amber-50 border border-amber-200 text-amber-900 px-4 py-2.5 rounded-xl text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-amber-600" />
              <span>{statusMessage}</span>
            </div>
          )}

          {/* 1. Size / Aspect Ratio Selector */}
          <div className="bg-white p-3 sm:p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 text-primary" />
                Download Format & App Size:
              </span>
              <span className="text-[11px] font-medium text-slate-500">
                {currentAspectCfg.width} × {currentAspectCfg.height}px ({currentAspectCfg.sublabel})
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <button
                onClick={() => {
                  setSelectedAspect('landscape');
                  setGeneratedImageUrl(null);
                }}
                className={`p-2.5 rounded-xl text-left border transition-all flex flex-col justify-between ${
                  selectedAspect === 'landscape'
                    ? 'bg-primary/5 border-primary ring-2 ring-primary/20 text-slate-900 shadow-2xs'
                    : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <Maximize2 className="w-4 h-4 text-primary" />
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">16:9</span>
                </div>
                <span className="text-xs font-bold block">Landscape (Wide)</span>
                <span className="text-[10px] text-slate-500 truncate">Twitter & Dual Pane</span>
              </button>

              <button
                onClick={() => {
                  setSelectedAspect('square');
                  setGeneratedImageUrl(null);
                }}
                className={`p-2.5 rounded-xl text-left border transition-all flex flex-col justify-between ${
                  selectedAspect === 'square'
                    ? 'bg-primary/5 border-primary ring-2 ring-primary/20 text-slate-900 shadow-2xs'
                    : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <Square className="w-4 h-4 text-primary" />
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">1:1</span>
                </div>
                <span className="text-xs font-bold block">Square</span>
                <span className="text-[10px] text-slate-500 truncate">Instagram Post</span>
              </button>

              <button
                onClick={() => {
                  setSelectedAspect('portrait');
                  setGeneratedImageUrl(null);
                }}
                className={`p-2.5 rounded-xl text-left border transition-all flex flex-col justify-between ${
                  selectedAspect === 'portrait'
                    ? 'bg-primary/5 border-primary ring-2 ring-primary/20 text-slate-900 shadow-2xs'
                    : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <RectangleVertical className="w-4 h-4 text-primary" />
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">4:5</span>
                </div>
                <span className="text-xs font-bold block">Portrait</span>
                <span className="text-[10px] text-slate-500 truncate">Feed Max Height</span>
              </button>

              <button
                onClick={() => {
                  setSelectedAspect('story');
                  setGeneratedImageUrl(null);
                }}
                className={`p-2.5 rounded-xl text-left border transition-all flex flex-col justify-between ${
                  selectedAspect === 'story'
                    ? 'bg-primary/5 border-primary ring-2 ring-primary/20 text-slate-900 shadow-2xs'
                    : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <Smartphone className="w-4 h-4 text-primary" />
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">9:16</span>
                </div>
                <span className="text-xs font-bold block">Story / Reel</span>
                <span className="text-[10px] text-slate-500 truncate">TikTok, IG Story</span>
              </button>
            </div>
          </div>

          {/* 2. Template Style and Color Palette */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-white p-3 sm:p-4 rounded-2xl border border-slate-200 shadow-2xs">
            {/* Template Selector */}
            <div className="space-y-1.5">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                Visual Template:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { id: 'classical', label: 'Classical Frame' },
                  { id: 'modern', label: 'Modern Clean' },
                  { id: 'spotlight', label: 'Quote Spotlight' },
                  { id: 'traditional', label: 'Crest Banner' }
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      setSelectedTemplate(t.id as CardTemplate);
                      setGeneratedImageUrl(null);
                    }}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      selectedTemplate === t.id
                        ? 'bg-slate-900 text-white font-semibold shadow-2xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Theme Selector */}
            <div className="space-y-1.5">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                Color Palette:
              </span>
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => {
                    setSelectedTheme('emerald');
                    setGeneratedImageUrl(null);
                  }}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                    selectedTheme === 'emerald'
                      ? 'bg-emerald-950 text-amber-300 ring-2 ring-amber-400 font-semibold shadow-2xs'
                      : 'bg-emerald-50 text-emerald-900 hover:bg-emerald-100'
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37]" />
                  Emerald Gold
                </button>

                <button
                  onClick={() => {
                    setSelectedTheme('parchment');
                    setGeneratedImageUrl(null);
                  }}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                    selectedTheme === 'parchment'
                      ? 'bg-[#f4ebd0] text-amber-950 ring-2 ring-amber-700 font-semibold shadow-2xs'
                      : 'bg-amber-50 text-amber-900 hover:bg-amber-100'
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#8a5322]" />
                  Parchment
                </button>

                <button
                  onClick={() => {
                    setSelectedTheme('midnight');
                    setGeneratedImageUrl(null);
                  }}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                    selectedTheme === 'midnight'
                      ? 'bg-slate-950 text-white ring-2 ring-slate-400 font-semibold shadow-2xs'
                      : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#e0b85c]" />
                  Midnight
                </button>

                <button
                  onClick={() => {
                    setSelectedTheme('burgundy');
                    setGeneratedImageUrl(null);
                  }}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                    selectedTheme === 'burgundy'
                      ? 'bg-[#2a0e18] text-amber-200 ring-2 ring-amber-400 font-semibold shadow-2xs'
                      : 'bg-rose-50 text-rose-900 hover:bg-rose-100'
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37]" />
                  Burgundy
                </button>
              </div>
            </div>
          </div>

          {/* 3. Live Preview Container */}
          <div className="flex flex-col items-center justify-center p-3 sm:p-5 bg-slate-200/50 rounded-2xl border border-slate-300/60">
            <div
              className={`w-full transition-all duration-300 relative shadow-xl rounded-2xl p-5 sm:p-6 flex flex-col justify-between select-none ${
                selectedAspect === 'landscape'
                  ? 'max-w-3xl aspect-[16/9]'
                  : selectedAspect === 'square'
                  ? 'max-w-md aspect-square'
                  : selectedAspect === 'portrait'
                  ? 'max-w-sm aspect-[4/5]'
                  : 'max-w-[320px] aspect-[9/16]'
              } ${
                selectedTheme === 'emerald'
                  ? 'bg-[#092e22] text-[#f1f6f3]'
                  : selectedTheme === 'parchment'
                  ? 'bg-[#fcf7ec] text-[#241a10]'
                  : selectedTheme === 'midnight'
                  ? 'bg-[#101620] text-[#f1f5f9]'
                  : 'bg-[#210c14] text-[#f8ecee]'
              } ${
                selectedTemplate === 'classical' || selectedTemplate === 'traditional'
                  ? selectedTheme === 'emerald'
                    ? 'border-2 border-[#d4af37]'
                    : selectedTheme === 'parchment'
                    ? 'border-2 border-[#bfa477]'
                    : selectedTheme === 'midnight'
                    ? 'border-2 border-[#5b6b82]'
                    : 'border-2 border-[#d4af37]'
                  : 'border border-white/20'
              }`}
            >
              {/* Corner Ornaments */}
              {(selectedTemplate === 'classical' || selectedTemplate === 'traditional') && (
                <>
                  <div className="absolute top-2 left-2 text-[10px] opacity-75">❖</div>
                  <div className="absolute top-2 right-2 text-[10px] opacity-75">❖</div>
                  <div className="absolute bottom-2 left-2 text-[10px] opacity-75">❖</div>
                  <div className="absolute bottom-2 right-2 text-[10px] opacity-75">❖</div>
                </>
              )}

              {/* Header */}
              <div className="flex items-center justify-between border-b pb-2 border-current/20 mb-2">
                <span className={`text-[10px] uppercase font-bold tracking-widest ${
                  selectedTheme === 'emerald' ? 'text-[#f3ce72]' : selectedTheme === 'parchment' ? 'text-[#7c4819]' : selectedTheme === 'midnight' ? 'text-[#e0b85c]' : 'text-[#f3ce72]'
                }`}>
                  DĀR AL-WAḤĪ • {translatorLabel}
                </span>
                <span className="text-[10px] font-semibold opacity-75">
                  {item.category}
                </span>
              </div>

              {/* Content Layout depending on Aspect Ratio and Image presence */}
              {selectedAspect === 'landscape' && hasImage ? (
                // DUAL PANE LAYOUT (Landscape with Image)
                <div className="grid grid-cols-12 gap-4 items-center my-auto py-2">
                  <div className="col-span-5 flex justify-center">
                    <div className="w-full rounded-xl overflow-hidden border border-current/30 shadow-md bg-black/20 max-h-56 flex items-center justify-center">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="col-span-7 flex flex-col justify-center space-y-2">
                    <h4 className={`font-heading font-bold text-sm sm:text-base leading-snug ${
                      selectedTheme === 'emerald' ? 'text-[#f3ce72]' : selectedTheme === 'parchment' ? 'text-[#632c0c]' : selectedTheme === 'midnight' ? 'text-[#f5cc6b]' : 'text-[#f3ce72]'
                    }`}>
                      {toCurlyQuotes(item.title)}
                    </h4>
                    {item.arabicText && (
                      <p dir="rtl" className="font-arabic text-sm sm:text-base leading-relaxed font-bold opacity-95 line-clamp-3">
                        {item.arabicText}
                      </p>
                    )}
                    <p className="font-serif italic text-xs sm:text-sm leading-relaxed opacity-90 line-clamp-4">
                      {toCurlyQuotes(item.englishText || item.summary)}
                    </p>
                  </div>
                </div>
              ) : (
                // VERTICAL STACK LAYOUT (Square, Portrait, Story, or Landscape without Image)
                <div className="flex flex-col items-center justify-center text-center my-auto py-2 space-y-2">
                  {hasImage && (
                    <div className={`rounded-lg overflow-hidden border border-current/30 shadow-sm bg-black/20 ${
                      selectedAspect === 'story' ? 'max-h-48' : 'max-h-36'
                    }`}>
                      <img
                        src={item.imageUrl}
                        alt={toCurlyQuotes(item.title)}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}

                  <h4 className={`font-heading font-bold leading-snug ${
                    selectedAspect === 'story' ? 'text-base sm:text-lg' : 'text-sm sm:text-base'
                  } ${
                    selectedTheme === 'emerald' ? 'text-[#f3ce72]' : selectedTheme === 'parchment' ? 'text-[#632c0c]' : selectedTheme === 'midnight' ? 'text-[#f5cc6b]' : 'text-[#f3ce72]'
                  }`}>
                    {toCurlyQuotes(item.title)}
                  </h4>

                  {item.arabicText && (
                    <p dir="rtl" className="font-arabic text-sm sm:text-base leading-relaxed font-bold opacity-95 line-clamp-3">
                      {item.arabicText}
                    </p>
                  )}

                  <p className="font-serif italic text-xs sm:text-sm leading-relaxed opacity-90 line-clamp-3">
                    {toCurlyQuotes(item.englishText || item.summary)}
                  </p>
                </div>
              )}

              {/* Footer */}
              <div className="pt-2 border-t border-current/20 flex items-center justify-between text-[10px] opacity-80">
                <span className="font-semibold truncate max-w-[50%]">
                  {toCurlyQuotes(item.author || item.speaker || 'Classical Statement')}
                </span>
                <span className="italic truncate max-w-[45%]">
                  {toCurlyQuotes(item.citation || 'Dār al-Waḥī')}
                </span>
              </div>
            </div>

            {/* Direct image render feedback */}
            {generatedImageUrl && (
              <div className="mt-3 p-3 bg-white border border-slate-200 rounded-xl w-full text-center animate-in fade-in shadow-2xs">
                <p className="text-xs font-semibold text-slate-800 mb-1 flex items-center justify-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600" />
                  High-Resolution Card Ready!
                </p>
                <p className="text-[11px] text-slate-500 mb-2">
                  Tap and hold or right-click below to save directly:
                </p>
                <div className="flex justify-center">
                  <img 
                    src={generatedImageUrl} 
                    alt={`Collection card - ${item.title}`} 
                    className="rounded-lg max-h-48 shadow-sm border border-slate-200 object-contain"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Bottom Action Footer */}
        <div className="px-5 sm:px-6 py-3.5 border-t border-slate-100 bg-white flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <button
            onClick={handleCopyText}
            className="text-xs text-slate-500 hover:text-slate-800 font-medium inline-flex items-center gap-1.5 order-2 sm:order-1 transition-colors"
          >
            {copiedText ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-semibold">Text Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy text & citation</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-2 w-full sm:w-auto order-1 sm:order-2">
            <button
              onClick={handleOpenImageInNewTab}
              disabled={isGenerating}
              className="px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium rounded-xl transition-all disabled:opacity-50 inline-flex items-center gap-1.5"
              title="Open high resolution in new browser tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open Tab</span>
            </button>

            <button
              onClick={handleCopyImage}
              disabled={isGenerating}
              className="px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-medium rounded-xl transition-all disabled:opacity-50 inline-flex items-center gap-1.5"
              title="Copy image to clipboard"
            >
              {copiedImage ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Image</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownload}
              disabled={isGenerating}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary text-white text-xs font-semibold rounded-xl hover:bg-primary/90 transition-all shadow-xs active:scale-[0.98] disabled:opacity-50"
            >
              {isGenerating ? (
                <>
                  <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Rendering...</span>
                </>
              ) : downloadSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Downloaded!</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>Download {currentAspectCfg.label}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
