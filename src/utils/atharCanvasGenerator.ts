import { DailyAthar } from '../data/dailyAthar';

export type PosterTheme = 'emerald' | 'parchment' | 'midnight' | 'burgundy';
export type CardAspect = 'square' | 'portrait' | 'story' | 'landscape';
export type CardTemplate = 'classical' | 'modern' | 'spotlight' | 'traditional';

export interface CardOptions {
  theme?: PosterTheme;
  aspect?: CardAspect;
  template?: CardTemplate;
}

export interface AspectConfig {
  width: number;
  height: number;
  label: string;
  sublabel: string;
  ratio: string;
}

export const ASPECT_CONFIGS: Record<CardAspect, AspectConfig> = {
  square: {
    width: 1200,
    height: 1200,
    label: 'Square (1:1)',
    sublabel: 'Instagram, Feed, Profile',
    ratio: '1/1'
  },
  portrait: {
    width: 1080,
    height: 1350,
    label: 'Portrait (4:5)',
    sublabel: 'Instagram Feed (Max Size)',
    ratio: '4/5'
  },
  story: {
    width: 1080,
    height: 1920,
    label: 'Story / Reel (9:16)',
    sublabel: 'TikTok, IG Story, Status',
    ratio: '9/16'
  },
  landscape: {
    width: 1920,
    height: 1080,
    label: 'Landscape (16:9)',
    sublabel: 'Twitter / X, Presentation',
    ratio: '16/9'
  }
};

interface ThemePalette {
  bgGradient: [string, string, string];
  outerBorder: string;
  innerBorder: string;
  ornamentColor: string;
  headerTag: string;
  headerCategory: string;
  arabicColor: string;
  dividerColor: string;
  englishColor: string;
  speakerColor: string;
  speakerTitleColor: string;
  sourceColor: string;
  brandingColor: string;
  accentBg?: string;
  quoteMarkColor?: string;
}

export const THEMES: Record<PosterTheme, ThemePalette> = {
  emerald: {
    bgGradient: ['#07241b', '#0b392b', '#051812'],
    outerBorder: '#d4af37',
    innerBorder: 'rgba(212, 175, 55, 0.35)',
    ornamentColor: '#f3ce72',
    headerTag: '#f3ce72',
    headerCategory: '#9fc6b8',
    arabicColor: '#faeec8',
    dividerColor: 'rgba(212, 175, 55, 0.4)',
    englishColor: '#e9f2ec',
    speakerColor: '#f3ce72',
    speakerTitleColor: '#a7cbbe',
    sourceColor: '#93b5a7',
    brandingColor: 'rgba(243, 206, 114, 0.7)',
    accentBg: 'rgba(212, 175, 55, 0.08)',
    quoteMarkColor: 'rgba(243, 206, 114, 0.16)'
  },
  parchment: {
    bgGradient: ['#fcf7eb', '#f7edd8', '#efe0c3'],
    outerBorder: '#bfa477',
    innerBorder: 'rgba(175, 142, 94, 0.35)',
    ornamentColor: '#8a5322',
    headerTag: '#7c4819',
    headerCategory: '#6b5947',
    arabicColor: '#2b1b0d',
    dividerColor: 'rgba(168, 137, 95, 0.45)',
    englishColor: '#241b12',
    speakerColor: '#632c0c',
    speakerTitleColor: '#6b5947',
    sourceColor: '#796652',
    brandingColor: 'rgba(124, 72, 25, 0.8)',
    accentBg: 'rgba(168, 137, 95, 0.12)',
    quoteMarkColor: 'rgba(124, 72, 25, 0.14)'
  },
  midnight: {
    bgGradient: ['#0d1117', '#161c24', '#090d12'],
    outerBorder: '#485569',
    innerBorder: 'rgba(212, 175, 55, 0.3)',
    ornamentColor: '#e0b85c',
    headerTag: '#e0b85c',
    headerCategory: '#8b9baa',
    arabicColor: '#fff5da',
    dividerColor: 'rgba(212, 175, 55, 0.35)',
    englishColor: '#edf2f7',
    speakerColor: '#f5cc6b',
    speakerTitleColor: '#8e9eaf',
    sourceColor: '#8e9eaf',
    brandingColor: 'rgba(224, 184, 92, 0.7)',
    accentBg: 'rgba(255, 255, 255, 0.05)',
    quoteMarkColor: 'rgba(224, 184, 92, 0.15)'
  },
  burgundy: {
    bgGradient: ['#1c0a10', '#2a0e18', '#14060b'],
    outerBorder: '#d4af37',
    innerBorder: 'rgba(212, 175, 55, 0.35)',
    ornamentColor: '#f3ce72',
    headerTag: '#f3ce72',
    headerCategory: '#d8b4b8',
    arabicColor: '#faeec8',
    dividerColor: 'rgba(212, 175, 55, 0.4)',
    englishColor: '#f7ecee',
    speakerColor: '#f3ce72',
    speakerTitleColor: '#d8b4b8',
    sourceColor: '#caa6ac',
    brandingColor: 'rgba(243, 206, 114, 0.75)',
    accentBg: 'rgba(212, 175, 55, 0.08)',
    quoteMarkColor: 'rgba(243, 206, 114, 0.16)'
  }
};

/**
 * Wraps text into lines based on canvas width
 */
export function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number
): string[] {
  if (!text) return [];
  const paragraphs = text.split('\n');
  const lines: string[] = [];

  for (const para of paragraphs) {
    const trimmed = para.trim();
    if (!trimmed) continue;
    const words = trimmed.split(/\s+/);
    let currentLine = '';

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && i > 0) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    }
    if (currentLine) {
      lines.push(currentLine);
    }
  }
  return lines;
}

/**
 * Generates an HTML5 Canvas drawing of the Athār Card adapted to any aspect ratio and template
 */
export async function generateAtharCanvas(
  athar: DailyAthar,
  themeOrOptions: PosterTheme | CardOptions = 'emerald'
): Promise<HTMLCanvasElement> {
  const options: CardOptions = typeof themeOrOptions === 'string'
    ? { theme: themeOrOptions }
    : themeOrOptions;

  const theme = options.theme || 'emerald';
  const aspect = options.aspect || 'square';
  const template = options.template || 'classical';

  // Ensure custom web fonts are loaded
  try {
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }
  } catch {
    // Fallbacks will be used
  }

  const aspectCfg = ASPECT_CONFIGS[aspect] || ASPECT_CONFIGS.square;
  const W = aspectCfg.width;
  const H = aspectCfg.height;

  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;

  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Could not create canvas 2D context');

  const palette = THEMES[theme] || THEMES.emerald;

  // 1. Background Gradient
  const grad = ctx.createLinearGradient(0, 0, W, H);
  grad.addColorStop(0, palette.bgGradient[0]);
  grad.addColorStop(0.5, palette.bgGradient[1]);
  grad.addColorStop(1, palette.bgGradient[2]);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  // Safe Margins based on Aspect Ratio
  // Story (9:16) requires top/bottom safe zones for mobile UI
  const isStory = aspect === 'story';
  const isLandscape = aspect === 'landscape';

  const marginX = isLandscape ? 120 : isStory ? 70 : 60;
  const marginY = isStory ? 130 : isLandscape ? 60 : 60;
  const innerMarginX = marginX + (isStory ? 14 : 14);
  const innerMarginY = marginY + (isStory ? 14 : 14);

  // 2. Borders & Ornamental Framing
  if (template === 'classical' || template === 'traditional') {
    // Outer Border
    ctx.strokeStyle = palette.outerBorder;
    ctx.lineWidth = isStory ? 3.5 : 3;
    ctx.strokeRect(marginX, marginY, W - marginX * 2, H - marginY * 2);

    // Inner Subtle Border
    ctx.strokeStyle = palette.innerBorder;
    ctx.lineWidth = 1;
    ctx.strokeRect(innerMarginX, innerMarginY, W - innerMarginX * 2, H - innerMarginY * 2);

    // Corner Ornaments
    ctx.font = '28px serif';
    ctx.fillStyle = palette.ornamentColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const cornerOffset = (marginX + innerMarginX) / 2;
    ctx.fillText('❖', cornerOffset, cornerOffset);
    ctx.fillText('❖', W - cornerOffset, cornerOffset);
    ctx.fillText('❖', cornerOffset, H - cornerOffset);
    ctx.fillText('❖', W - cornerOffset, H - cornerOffset);
  } else if (template === 'modern') {
    // Sleek single border with subtle corner accents
    ctx.strokeStyle = palette.innerBorder;
    ctx.lineWidth = 1.5;
    ctx.strokeRect(marginX, marginY, W - marginX * 2, H - marginY * 2);

    // Modern Corner ticks
    ctx.strokeStyle = palette.outerBorder;
    ctx.lineWidth = 2.5;
    const tickLen = 22;
    // Top-left
    ctx.beginPath();
    ctx.moveTo(marginX, marginY + tickLen);
    ctx.lineTo(marginX, marginY);
    ctx.lineTo(marginX + tickLen, marginY);
    ctx.stroke();
    // Top-right
    ctx.beginPath();
    ctx.moveTo(W - marginX - tickLen, marginY);
    ctx.lineTo(W - marginX, marginY);
    ctx.lineTo(W - marginX, marginY + tickLen);
    ctx.stroke();
    // Bottom-left
    ctx.beginPath();
    ctx.moveTo(marginX, H - marginY - tickLen);
    ctx.lineTo(marginX, H - marginY);
    ctx.lineTo(marginX + tickLen, H - marginY);
    ctx.stroke();
    // Bottom-right
    ctx.beginPath();
    ctx.moveTo(W - marginX - tickLen, H - marginY);
    ctx.lineTo(W - marginX, H - marginY);
    ctx.lineTo(W - marginX, H - marginY - tickLen);
    ctx.stroke();
  } else if (template === 'spotlight') {
    // Subtle backdrop border
    ctx.strokeStyle = palette.innerBorder;
    ctx.lineWidth = 1;
    ctx.strokeRect(marginX, marginY, W - marginX * 2, H - marginY * 2);

    // Giant decorative quotation mark in background watermark
    ctx.font = 'bold 260px "Playfair Display", Georgia, serif';
    ctx.fillStyle = palette.quoteMarkColor || 'rgba(255, 255, 255, 0.08)';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText('“', marginX + 40, marginY + 60);
  }

  // 3. Header Section (Title & Category)
  const headerY = marginY + (isStory ? 80 : 70);
  const contentLeft = marginX + (isLandscape ? 80 : 45);
  const contentRight = W - marginX - (isLandscape ? 80 : 45);
  const maxContentWidth = contentRight - contentLeft;

  ctx.textBaseline = 'alphabetic';

  if (template === 'traditional') {
    // Traditional Banner Pill
    ctx.font = 'bold 18px "Playfair Display", "Times New Roman", serif';
    ctx.fillStyle = palette.headerTag;
    ctx.textAlign = 'center';
    ctx.letterSpacing = '3px';
    ctx.fillText('DĀR AL-WAḤĪ  •  ĀTHĀR AS-SALAF', W / 2, headerY - 10);

    ctx.font = 'italic 17px "Lora", Georgia, serif';
    ctx.fillStyle = palette.headerCategory;
    ctx.fillText(`— ${athar.category} —`, W / 2, headerY + 16);
  } else {
    ctx.font = 'bold 19px "Playfair Display", "Times New Roman", serif';
    ctx.fillStyle = palette.headerTag;
    ctx.textAlign = 'left';
    ctx.letterSpacing = '3px';
    ctx.fillText('DĀR AL-WAḤĪ  •  ĀTHĀR AS-SALAF', contentLeft, headerY);

    ctx.font = '500 18px "Lora", Georgia, serif';
    ctx.fillStyle = palette.headerCategory;
    ctx.textAlign = 'right';
    ctx.letterSpacing = '1px';
    ctx.fillText(athar.category, contentRight, headerY);
  }

  // Header Divider Line
  const headerDividerY = headerY + 28;
  ctx.strokeStyle = palette.innerBorder;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(contentLeft, headerDividerY);
  ctx.lineTo(contentRight, headerDividerY);
  ctx.stroke();

  // 4. Footer Positioning
  const footerHeight = isStory ? 180 : 130;
  const footerDividerY = H - marginY - footerHeight;

  // Available vertical space for content (Arabic + Divider + English)
  const contentAreaTop = headerDividerY + (isStory ? 45 : 30);
  const contentAreaBottom = footerDividerY - (isStory ? 45 : 30);
  const availableContentHeight = contentAreaBottom - contentAreaTop;

  // 5. Dynamic Typography Sizing according to Content Length and Canvas Height
  const arabicLen = athar.arabicText.length;
  const engLen = athar.englishText.length;

  let arabicFontSize = isStory ? 46 : isLandscape ? 40 : 44;
  let arabicLineHeight = isStory ? 98 : isLandscape ? 86 : 94;
  if (arabicLen > 240) {
    arabicFontSize = isStory ? 34 : 32;
    arabicLineHeight = isStory ? 74 : 70;
  } else if (arabicLen > 140) {
    arabicFontSize = isStory ? 38 : 36;
    arabicLineHeight = isStory ? 82 : 78;
  }

  ctx.font = `bold ${arabicFontSize}px "Amiri", "Traditional Arabic", serif`;
  ctx.direction = 'rtl';
  const arabicLines = wrapText(ctx, athar.arabicText, maxContentWidth);

  let engFontSize = isStory ? 30 : isLandscape ? 26 : 28;
  let engLineHeight = isStory ? 52 : isLandscape ? 44 : 48;
  if (engLen > 320) {
    engFontSize = isStory ? 24 : 22;
    engLineHeight = isStory ? 42 : 38;
  } else if (engLen > 200) {
    engFontSize = isStory ? 27 : 24;
    engLineHeight = isStory ? 46 : 42;
  }

  ctx.font = `italic ${engFontSize}px "Lora", "Playfair Display", Georgia, serif`;
  ctx.direction = 'ltr';
  const cleanEnglish = athar.englishText.replace(/^[“"]|[”"]$/g, '');
  const englishLines = wrapText(ctx, `“${cleanEnglish}”`, maxContentWidth - 30);

  // Measure total required height
  const dividerGap = isStory ? 60 : 36;
  const arabicTotalHeight = arabicLines.length * arabicLineHeight;
  const englishTotalHeight = englishLines.length * engLineHeight;
  const totalContentHeight = arabicTotalHeight + dividerGap + englishTotalHeight;

  // Optical vertical centering within available content area
  // This guarantees space isn't wasted and cards never look unbalanced
  const verticalPadding = Math.max(10, Math.round((availableContentHeight - totalContentHeight) / 2));
  let currentY = contentAreaTop + verticalPadding + (arabicLineHeight * 0.7);

  // Render Arabic Text
  ctx.direction = 'rtl';
  ctx.textAlign = 'center';
  ctx.fillStyle = palette.arabicColor;
  ctx.font = `bold ${arabicFontSize}px "Amiri", "Traditional Arabic", serif`;

  for (const line of arabicLines) {
    ctx.fillText(line, W / 2, currentY);
    currentY += arabicLineHeight;
  }

  // Render Decorative Divider
  currentY += Math.round(dividerGap / 2) - 10;
  ctx.direction = 'ltr';
  ctx.strokeStyle = palette.dividerColor;
  ctx.lineWidth = 1.5;
  const dividerWidth = isStory ? 100 : 80;

  ctx.beginPath();
  ctx.moveTo(W / 2 - dividerWidth, currentY);
  ctx.lineTo(W / 2 + dividerWidth, currentY);
  ctx.stroke();

  // Ornament at center of divider
  ctx.font = '16px serif';
  ctx.fillStyle = palette.ornamentColor;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(template === 'spotlight' ? '❖' : '♦', W / 2, currentY);
  ctx.textBaseline = 'alphabetic';

  // Render English Translation
  currentY += Math.round(dividerGap / 2) + 20;
  ctx.textAlign = 'center';
  ctx.fillStyle = palette.englishColor;
  ctx.font = `italic ${engFontSize}px "Lora", "Playfair Display", Georgia, serif`;

  for (const line of englishLines) {
    ctx.fillText(line, W / 2, currentY);
    currentY += engLineHeight;
  }

  // 6. Render Footer: Attribution, Era, Source, and Brand Watermark
  ctx.strokeStyle = palette.innerBorder;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(contentLeft, footerDividerY);
  ctx.lineTo(contentRight, footerDividerY);
  ctx.stroke();

  const footerLine1Y = footerDividerY + (isStory ? 48 : 42);
  const footerLine2Y = footerDividerY + (isStory ? 82 : 72);

  // Speaker Name (Left)
  ctx.textAlign = 'left';
  ctx.font = 'bold 28px "Playfair Display", "Times New Roman", serif';
  ctx.fillStyle = palette.speakerColor;
  ctx.fillText(athar.speaker, contentLeft, footerLine1Y);

  // Speaker Title / Era (Left)
  if (athar.speakerTitle) {
    ctx.font = 'italic 19px "Lora", Georgia, serif';
    ctx.fillStyle = palette.speakerTitleColor;
    ctx.fillText(athar.speakerTitle, contentLeft, footerLine2Y);
  }

  // Classical Reference Source (Right)
  ctx.textAlign = 'right';
  const sourceFontSize = athar.source.length > 55 ? 17 : athar.source.length > 38 ? 19 : 21;
  ctx.font = `italic ${sourceFontSize}px "Lora", Georgia, serif`;
  ctx.fillStyle = palette.sourceColor;
  ctx.fillText(athar.source, contentRight, footerLine1Y);

  // Brand Watermark (Right)
  ctx.textAlign = 'right';
  ctx.font = 'bold 15px "Playfair Display", serif';
  ctx.fillStyle = palette.brandingColor;
  ctx.letterSpacing = '2px';
  ctx.fillText('DĀR AL-WAḤĪ', contentRight, footerLine2Y);

  return canvas;
}

/**
 * Downloads a canvas as a PNG file with fallback for iframe environments
 */
export async function downloadCanvasAsPng(
  canvas: HTMLCanvasElement,
  filename: string
): Promise<{ success: boolean; blobUrl?: string }> {
  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        resolve({ success: false });
        return;
      }

      const url = URL.createObjectURL(blob);

      try {
        const link = document.createElement('a');
        link.href = url;
        link.download = filename.endsWith('.png') ? filename : `${filename}.png`;
        link.rel = 'noopener';
        document.body.appendChild(link);
        link.click();

        setTimeout(() => {
          document.body.removeChild(link);
        }, 150);

        resolve({ success: true, blobUrl: url });
      } catch (err) {
        console.error('Programmatic download failed:', err);
        resolve({ success: false, blobUrl: url });
      }
    }, 'image/png', 1.0);
  });
}
