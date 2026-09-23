import { useState } from 'react';
import { DailyAthar } from '../data/dailyAthar';
import {
  X,
  Download,
  Copy,
  Check,
  Share2,
  Sparkles,
  ExternalLink,
  Smartphone,
  Square,
  RectangleVertical,
  Maximize2,
  AlertCircle
} from 'lucide-react';
import {
  generateAtharCanvas,
  downloadCanvasAsPng,
  PosterTheme,
  CardAspect,
  CardTemplate,
  ASPECT_CONFIGS
} from '../utils/atharCanvasGenerator';

interface AtharShareModalProps {
  athar: DailyAthar;
  isOpen: boolean;
  onClose: () => void;
}

export function AtharShareModal({ athar, isOpen, onClose }: AtharShareModalProps) {
  const [selectedTheme, setSelectedTheme] = useState<PosterTheme>('emerald');
  const [selectedAspect, setSelectedAspect] = useState<CardAspect>('square');
  const [selectedTemplate, setSelectedTemplate] = useState<CardTemplate>('classical');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedText, setCopiedText] = useState(false);
  const [copiedImage, setCopiedImage] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const currentAspectCfg = ASPECT_CONFIGS[selectedAspect];

  const handleDownload = async () => {
    try {
      setIsGenerating(true);
      setStatusMessage(null);
      setDownloadSuccess(false);

      const canvas = await generateAtharCanvas(athar, {
        theme: selectedTheme,
        aspect: selectedAspect,
        template: selectedTemplate
      });

      const cleanSpeaker = athar.speaker.replace(/[^a-zA-Z0-9]/g, '_');
      const filename = `Athar_${cleanSpeaker}_${selectedAspect}_${selectedTemplate}.png`;

      const result = await downloadCanvasAsPng(canvas, filename);
      if (result.blobUrl) {
        setGeneratedImageUrl(result.blobUrl);
      }

      setDownloadSuccess(true);
      setStatusMessage('Download started! If your browser blocks downloads, use "Open Image in Tab" below.');
      setTimeout(() => setDownloadSuccess(false), 4000);
    } catch (err) {
      console.error('Failed to export poster:', err);
      setStatusMessage('Could not trigger download. Try opening the image in a new tab or copying text.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopyImage = async () => {
    try {
      setIsGenerating(true);
      const canvas = await generateAtharCanvas(athar, {
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
            link.download = `Athar_${athar.speaker.replace(/[^a-zA-Z0-9]/g, '_')}_${selectedAspect}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }
        } catch (copyErr) {
          console.warn('Clipboard write failed, opening URL:', copyErr);
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
      const canvas = await generateAtharCanvas(athar, {
        theme: selectedTheme,
        aspect: selectedAspect,
        template: selectedTemplate
      });

      canvas.toBlob((blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        setGeneratedImageUrl(url);
        setStatusMessage('High-resolution card generated! See preview below or right-click / long-press to save.');
        try {
          const newWin = window.open(url, '_blank');
          if (!newWin) {
            // popup blocked or restricted by iframe
          }
        } catch {
          // ignore iframe restriction
        }
        setIsGenerating(false);
      }, 'image/png', 1.0);
    } catch (err) {
      console.error(err);
      setIsGenerating(false);
    }
  };

  const handleCopyText = () => {
    const formatted = `${athar.arabicText}\n\n${athar.englishText}\n\n— ${athar.speaker}${athar.speakerTitle ? ` (${athar.speakerTitle})` : ''}\nReference: ${athar.source}\n\n[Dār al-Waḥī - Translations & Athār]`;
    navigator.clipboard.writeText(formatted);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  const handleWebShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Athār from ${athar.speaker}`,
          text: `${athar.englishText}\n\n— ${athar.speaker}\n${athar.source}`,
          url: window.location.origin
        });
      } catch {
        // User cancelled
      }
    } else {
      handleCopyText();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full p-4 sm:p-6 shadow-2xl border border-slate-200 space-y-4 max-h-[95vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-amber-50 rounded-xl text-amber-700">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-slate-900">
                Download & Share Athār Card
              </h3>
              <p className="text-xs text-slate-500">
                Custom templates, app sizes, and typography for social apps
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 1. Size / Aspect Ratio Selector */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
              <Smartphone className="w-3.5 h-3.5 text-primary" />
              Size & Platform:
            </label>
            <span className="text-[11px] font-medium text-slate-500">
              {currentAspectCfg.width} × {currentAspectCfg.height}px ({currentAspectCfg.sublabel})
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
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
              <span className="text-[10px] text-slate-500 truncate">Feed Max Size</span>
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
              <span className="text-xs font-bold block">Landscape</span>
              <span className="text-[10px] text-slate-500 truncate">Twitter / Wide</span>
            </button>
          </div>
        </div>

        {/* 2. Template & Theme Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 border-t border-slate-100">
          {/* Template Style */}
          <div className="space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
              Card Template:
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

          {/* Palette Theme */}
          <div className="space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
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

        {/* 3. Live Card Rendered Preview Container */}
        <div className="flex flex-col items-center justify-center p-3 sm:p-5 bg-slate-100/80 rounded-2xl border border-slate-200">
          <div
            className={`w-full transition-all duration-300 relative shadow-xl rounded-2xl p-5 sm:p-7 flex flex-col justify-between select-none ${
              selectedAspect === 'square'
                ? 'max-w-md aspect-square'
                : selectedAspect === 'portrait'
                ? 'max-w-sm aspect-[4/5]'
                : selectedAspect === 'story'
                ? 'max-w-[320px] aspect-[9/16]'
                : 'max-w-xl aspect-[16/9]'
            } ${
              selectedTheme === 'emerald'
                ? 'bg-[#092e22] text-[#f1f6f3]'
                : selectedTheme === 'parchment'
                ? 'bg-[#fcf7ec] text-[#2b2216]'
                : selectedTheme === 'midnight'
                ? 'bg-[#0f141c] text-[#f0f4f8]'
                : 'bg-[#210c14] text-[#f8ecee]'
            } ${
              selectedTemplate === 'classical' || selectedTemplate === 'traditional'
                ? selectedTheme === 'emerald'
                  ? 'border-2 border-[#d4af37]'
                  : selectedTheme === 'parchment'
                  ? 'border-2 border-[#bfa477]'
                  : selectedTheme === 'midnight'
                  ? 'border-2 border-[#485569]'
                  : 'border-2 border-[#d4af37]'
                : 'border border-white/20'
            }`}
          >
            {/* Corner Decorative Ornaments for Classical / Traditional */}
            {(selectedTemplate === 'classical' || selectedTemplate === 'traditional') && (
              <>
                <div className="absolute top-2 left-2 text-[11px] opacity-80">❖</div>
                <div className="absolute top-2 right-2 text-[11px] opacity-80">❖</div>
                <div className="absolute bottom-2 left-2 text-[11px] opacity-80">❖</div>
                <div className="absolute bottom-2 right-2 text-[11px] opacity-80">❖</div>
              </>
            )}

            {/* Spotlight Template Giant Quote Watermark */}
            {selectedTemplate === 'spotlight' && (
              <div className="absolute top-2 left-4 text-7xl font-serif opacity-10 pointer-events-none select-none">
                “
              </div>
            )}

            {/* Top Badge & Topic */}
            <div className="flex items-center justify-between border-b pb-2 border-current/20 mb-2">
              <span className={`text-[10px] uppercase font-bold tracking-widest ${
                selectedTheme === 'emerald' ? 'text-[#f3ce72]' : selectedTheme === 'parchment' ? 'text-[#7c4819]' : selectedTheme === 'midnight' ? 'text-[#e0b85c]' : 'text-[#f3ce72]'
              }`}>
                DĀR AL-WAḤĪ • ĀTHĀR
              </span>
              <span className="text-[10px] font-medium opacity-75">
                {athar.category}
              </span>
            </div>

            {/* Main Content Area (Vertically Centered and Balanced) */}
            <div className="my-auto py-2 flex flex-col justify-center text-center">
              {/* Arabic Calligraphy */}
              <p
                dir="rtl"
                className={`font-arabic leading-[2.0] font-bold mb-2.5 ${
                  selectedAspect === 'story'
                    ? 'text-lg sm:text-xl'
                    : selectedAspect === 'landscape'
                    ? 'text-base sm:text-lg'
                    : 'text-lg sm:text-xl'
                } ${
                  selectedTheme === 'emerald' ? 'text-[#faeec8]' : selectedTheme === 'parchment' ? 'text-[#2b1b0d]' : selectedTheme === 'midnight' ? 'text-[#fff5da]' : 'text-[#faeec8]'
                }`}
              >
                {athar.arabicText}
              </p>

              {/* Decorative Divider */}
              <div className="flex items-center justify-center gap-2 my-2 opacity-60">
                <div className="w-10 h-px bg-current" />
                <span className="text-[10px]">❖</span>
                <div className="w-10 h-px bg-current" />
              </div>

              {/* English Translation */}
              <p className={`font-serif italic leading-relaxed ${
                selectedAspect === 'story' ? 'text-xs sm:text-sm' : 'text-xs sm:text-sm'
              } ${
                selectedTheme === 'emerald' ? 'text-[#e9f2ec]' : selectedTheme === 'parchment' ? 'text-[#241b12]' : selectedTheme === 'midnight' ? 'text-[#edf2f7]' : 'text-[#f7ecee]'
              }`}>
                “{athar.englishText.replace(/^[“"]|[”"]$/g, '')}”
              </p>
            </div>

            {/* Attribution & Classical Source Footer */}
            <div className="pt-2 border-t border-current/20 flex flex-col space-y-1">
              <div className="flex items-baseline justify-between gap-2">
                <span className={`font-heading text-xs sm:text-sm font-bold truncate ${
                  selectedTheme === 'emerald' ? 'text-[#f3ce72]' : selectedTheme === 'parchment' ? 'text-[#632c0c]' : selectedTheme === 'midnight' ? 'text-[#f5cc6b]' : 'text-[#f3ce72]'
                }`}>
                  {athar.speaker}
                </span>
                <span className="text-[10px] opacity-85 italic truncate">
                  {athar.source}
                </span>
              </div>
              {athar.speakerTitle && (
                <span className="text-[9px] opacity-70 italic truncate">
                  {athar.speakerTitle}
                </span>
              )}
            </div>
          </div>

          {/* Direct image preview when available */}
          {generatedImageUrl && (
            <div className="mt-3 p-3 bg-white border border-slate-200 rounded-xl w-full text-center animate-in fade-in shadow-2xs">
              <p className="text-xs font-semibold text-slate-800 mb-1 flex items-center justify-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" />
                High-Resolution Card Ready!
              </p>
              <p className="text-[11px] text-slate-500 mb-2">
                Tap and hold or right-click the image below to save directly to Photos:
              </p>
              <div className="flex justify-center">
                <img 
                  src={generatedImageUrl} 
                  alt={`Athar poster - ${athar.speaker}`} 
                  className="rounded-lg max-h-48 shadow-sm border border-slate-200 object-contain"
                />
              </div>
            </div>
          )}
        </div>

        {/* Feedback Alert */}
        {statusMessage && (
          <div className="flex items-start gap-2 p-2.5 bg-amber-50 border border-amber-200/60 rounded-xl text-xs text-amber-900 animate-in fade-in">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span className="leading-snug">{statusMessage}</span>
          </div>
        )}

        {/* Primary Action Buttons */}
        <div className="space-y-2 pt-1">
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={handleDownload}
              disabled={isGenerating}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary text-white text-xs sm:text-sm font-semibold rounded-xl hover:bg-primary/90 transition-all shadow-xs active:scale-[0.98] disabled:opacity-50"
            >
              {isGenerating ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Rendering Card...</span>
                </>
              ) : downloadSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>Card Generated & Downloaded!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download {currentAspectCfg.label}</span>
                </>
              )}
            </button>

            <button
              onClick={handleCopyImage}
              disabled={isGenerating}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-medium rounded-xl transition-all disabled:opacity-50"
              title="Copy Image to clipboard"
            >
              {copiedImage ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Image</span>
                </>
              )}
            </button>

            <button
              onClick={handleOpenImageInNewTab}
              disabled={isGenerating}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-medium rounded-xl transition-all disabled:opacity-50"
              title="Open full resolution in new browser tab"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="hidden sm:inline">Open Full Res</span>
            </button>
          </div>

          <div className="flex items-center justify-between text-xs pt-1">
            <button
              onClick={handleCopyText}
              className="text-slate-500 hover:text-slate-800 font-medium inline-flex items-center gap-1 transition-colors"
            >
              {copiedText ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Text Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy text only</span>
                </>
              )}
            </button>

            <button
              onClick={handleWebShare}
              className="text-slate-500 hover:text-slate-800 font-medium inline-flex items-center gap-1 transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share via device...</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
