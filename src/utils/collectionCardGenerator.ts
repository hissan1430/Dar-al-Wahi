import { ContentItem } from '../data';
import {
  PosterTheme,
  CardAspect,
  CardTemplate,
  CardOptions,
  ASPECT_CONFIGS,
  wrapText,
  THEMES
} from './atharCanvasGenerator';
import { toCurlyQuotes } from './typography';

export interface CollectionCardThemePalette {
  bgGradient: [string, string, string];
  outerBorder: string;
  innerBorder: string;
  ornamentColor: string;
  headerTag: string;
  headerCategory: string;
  arabicColor: string;
  dividerColor: string;
  englishColor: string;
  authorColor: string;
  translatorColor: string;
  citationColor: string;
  brandingColor: string;
  imageBorder: string;
  imageBg: string;
  cardSurface: string;
}

const COLLECTION_THEMES: Record<PosterTheme, CollectionCardThemePalette> = {
  emerald: {
    bgGradient: ['#07241b', '#0b392b', '#051812'],
    outerBorder: '#d4af37',
    innerBorder: 'rgba(212, 175, 55, 0.35)',
    ornamentColor: '#f3ce72',
    headerTag: '#f3ce72',
    headerCategory: '#9fc6b8',
    arabicColor: '#faeec8',
    dividerColor: 'rgba(212, 175, 55, 0.4)',
    englishColor: '#f3f8f5',
    authorColor: '#f3ce72',
    translatorColor: '#a7cbbe',
    citationColor: '#93b5a7',
    brandingColor: 'rgba(243, 206, 114, 0.75)',
    imageBorder: 'rgba(212, 175, 55, 0.55)',
    imageBg: 'rgba(0, 0, 0, 0.35)',
    cardSurface: 'rgba(6, 30, 23, 0.6)'
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
    englishColor: '#1f160e',
    authorColor: '#632c0c',
    translatorColor: '#6b5947',
    citationColor: '#796652',
    brandingColor: 'rgba(124, 72, 25, 0.85)',
    imageBorder: 'rgba(168, 137, 95, 0.65)',
    imageBg: 'rgba(255, 255, 255, 0.6)',
    cardSurface: 'rgba(255, 255, 255, 0.45)'
  },
  midnight: {
    bgGradient: ['#0d1117', '#151c26', '#090d12'],
    outerBorder: '#5b6b82',
    innerBorder: 'rgba(212, 175, 55, 0.3)',
    ornamentColor: '#e0b85c',
    headerTag: '#e0b85c',
    headerCategory: '#94a3b8',
    arabicColor: '#fff5da',
    dividerColor: 'rgba(212, 175, 55, 0.35)',
    englishColor: '#f1f5f9',
    authorColor: '#f5cc6b',
    translatorColor: '#94a3b8',
    citationColor: '#94a3b8',
    brandingColor: 'rgba(224, 184, 92, 0.75)',
    imageBorder: 'rgba(91, 107, 130, 0.6)',
    imageBg: 'rgba(0, 0, 0, 0.45)',
    cardSurface: 'rgba(18, 24, 34, 0.6)'
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
    authorColor: '#f3ce72',
    translatorColor: '#d8b4b8',
    citationColor: '#caa6ac',
    brandingColor: 'rgba(243, 206, 114, 0.75)',
    imageBorder: 'rgba(212, 175, 55, 0.55)',
    imageBg: 'rgba(0, 0, 0, 0.35)',
    cardSurface: 'rgba(28, 10, 16, 0.6)'
  }
};

/**
 * Loads an image from URL into an HTMLImageElement safely
 */
function loadImage(src: string): Promise<HTMLImageElement | null> {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = () => {
      console.warn(`Failed to load image at: ${src}`);
      resolve(null);
    };
    img.src = src;
  });
}

/**
 * Clean HTML formatting tags from text while preserving clean punctuation & whitespace
 */
function sanitizeText(raw: string): string {
  const cleaned = raw
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<\/div>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&apos;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .trim();
  return toCurlyQuotes(cleaned);
}

/**
 * Helper to draw image maintaining aspect ratio within container
 */
function drawContainedImage(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  x: number,
  y: number,
  w: number,
  h: number,
  borderColor: string
) {
  // Draw background container
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(x, y, w, h);

  const imgRatio = img.naturalWidth / (img.naturalHeight || 1);
  const containerRatio = w / h;

  let drawW = w;
  let drawH = h;
  let drawX = x;
  let drawY = y;

  if (imgRatio > containerRatio) {
    drawW = w;
    drawH = w / imgRatio;
    drawY = y + (h - drawH) / 2;
  } else {
    drawH = h;
    drawW = h * imgRatio;
    drawX = x + (w - drawW) / 2;
  }

  // Draw image
  ctx.drawImage(img, drawX, drawY, drawW, drawH);

  // Outer illuminated border around the container
  ctx.strokeStyle = borderColor;
  ctx.lineWidth = 1.5;
  ctx.strokeRect(x, y, w, h);
}

/**
 * Generates an HTML5 Canvas drawing of a ContentItem card
 * Adapted to any chosen Aspect Ratio (1:1, 4:5, 9:16, 16:9) and Template
 */
export async function generateCollectionCardCanvas(
  item: ContentItem,
  themeOrOptions: PosterTheme | CardOptions = 'emerald'
): Promise<HTMLCanvasElement> {
  const options: CardOptions = typeof themeOrOptions === 'string'
    ? { theme: themeOrOptions }
    : themeOrOptions;

  const theme = options.theme || 'emerald';
  const aspect = options.aspect || (item.imageUrl ? 'landscape' : 'square');
  const template = options.template || 'classical';

  // Ensure custom web fonts are loaded
  try {
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }
  } catch {
    // ignore
  }

  const palette = COLLECTION_THEMES[theme] || COLLECTION_THEMES.emerald;

  // Load image if available
  let scanImg: HTMLImageElement | null = null;
  if (item.imageUrl) {
    scanImg = await loadImage(item.imageUrl);
  }
  const hasImage = !!scanImg;

  const aspectCfg = ASPECT_CONFIGS[aspect] || ASPECT_CONFIGS.square;
  const W = aspectCfg.width;
  const H = aspectCfg.height;

  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;

  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Could not create canvas 2D context');

  // 1. Background Gradient
  const grad = ctx.createLinearGradient(0, 0, W, H);
  grad.addColorStop(0, palette.bgGradient[0]);
  grad.addColorStop(0.5, palette.bgGradient[1]);
  grad.addColorStop(1, palette.bgGradient[2]);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  // Safe Margins based on Aspect Ratio
  const isStory = aspect === 'story';
  const isLandscape = aspect === 'landscape';
  const isPortrait = aspect === 'portrait';

  const marginX = isLandscape ? 80 : isStory ? 70 : 60;
  const marginY = isStory ? 120 : isLandscape ? 50 : 55;
  const innerMarginX = marginX + 14;
  const innerMarginY = marginY + 14;

  // 2. Borders & Ornamental Framing
  if (template === 'classical' || template === 'traditional') {
    ctx.strokeStyle = palette.outerBorder;
    ctx.lineWidth = 3;
    ctx.strokeRect(marginX, marginY, W - marginX * 2, H - marginY * 2);

    ctx.strokeStyle = palette.innerBorder;
    ctx.lineWidth = 1;
    ctx.strokeRect(innerMarginX, innerMarginY, W - innerMarginX * 2, H - innerMarginY * 2);

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
    ctx.strokeStyle = palette.innerBorder;
    ctx.lineWidth = 1.5;
    ctx.strokeRect(marginX, marginY, W - marginX * 2, H - marginY * 2);

    ctx.strokeStyle = palette.outerBorder;
    ctx.lineWidth = 2.5;
    const tickLen = 22;
    // Ticks at corners
    ctx.beginPath();
    ctx.moveTo(marginX, marginY + tickLen);
    ctx.lineTo(marginX, marginY);
    ctx.lineTo(marginX + tickLen, marginY);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(W - marginX - tickLen, marginY);
    ctx.lineTo(W - marginX, marginY);
    ctx.lineTo(W - marginX, marginY + tickLen);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(marginX, H - marginY - tickLen);
    ctx.lineTo(marginX, H - marginY);
    ctx.lineTo(marginX + tickLen, H - marginY);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(W - marginX - tickLen, H - marginY);
    ctx.lineTo(W - marginX, H - marginY);
    ctx.lineTo(W - marginX, H - marginY - tickLen);
    ctx.stroke();
  } else if (template === 'spotlight') {
    ctx.strokeStyle = palette.innerBorder;
    ctx.lineWidth = 1;
    ctx.strokeRect(marginX, marginY, W - marginX * 2, H - marginY * 2);

    // Decorative quote watermark
    ctx.font = 'bold 240px "Playfair Display", Georgia, serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.06)';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText('“', marginX + 30, marginY + 50);
  }

  // 3. Header Section (DĀR AL-WAḤĪ + Category)
  const headerY = marginY + (isStory ? 70 : 60);
  const contentLeft = marginX + 45;
  const contentRight = W - marginX - 45;
  const contentWidth = contentRight - contentLeft;

  ctx.textBaseline = 'alphabetic';

  const hasTranslator = item.translator && item.translator !== 'None';
  const translatorTag = item.translatorName
    ? item.translatorName.toUpperCase()
    : item.translator === 'Abu_Mundhir'
    ? 'ABŪ MUNDHIR AR-RUWĀNDĪ'
    : 'ABŪ ṬALḤAH AL-ʾAFĠHĀNĪ';
  const headerBrand = hasTranslator
    ? `DĀR AL-WAḤĪ  •  ${translatorTag}`
    : 'DĀR AL-WAḤĪ';

  ctx.font = 'bold 18px "Playfair Display", "Times New Roman", serif';
  ctx.fillStyle = palette.headerTag;
  ctx.textAlign = 'left';
  ctx.letterSpacing = '3px';
  ctx.fillText(headerBrand, contentLeft, headerY);

  ctx.font = '500 18px "Lora", Georgia, serif';
  ctx.fillStyle = palette.headerCategory;
  ctx.textAlign = 'right';
  ctx.letterSpacing = '1px';
  ctx.fillText(item.category.toUpperCase(), contentRight, headerY);

  const headerDividerY = headerY + 24;
  ctx.strokeStyle = palette.innerBorder;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(contentLeft, headerDividerY);
  ctx.lineTo(contentRight, headerDividerY);
  ctx.stroke();

  // 4. Footer Positioning
  const footerHeight = isStory ? 160 : 120;
  const footerDividerY = H - marginY - footerHeight;

  ctx.strokeStyle = palette.innerBorder;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(contentLeft, footerDividerY);
  ctx.lineTo(contentRight, footerDividerY);
  ctx.stroke();

  const footerLine1Y = footerDividerY + 40;
  const footerLine2Y = footerDividerY + 70;

  // Author or Speaker (Left)
  const primaryAttribution = item.author || item.speaker || 'Classical Statement';
  ctx.textAlign = 'left';
  ctx.font = 'bold 24px "Playfair Display", "Times New Roman", serif';
  ctx.fillStyle = palette.authorColor;
  ctx.fillText(primaryAttribution, contentLeft, footerLine1Y);

  if (item.speaker && item.author) {
    ctx.font = 'italic 18px "Lora", Georgia, serif';
    ctx.fillStyle = palette.translatorColor;
    ctx.fillText(`Delivered by ${item.speaker}`, contentLeft, footerLine2Y);
  } else if (item.translator && item.translator !== 'None') {
    ctx.font = 'italic 18px "Lora", Georgia, serif';
    ctx.fillStyle = palette.translatorColor;
    const translatorShort = item.translatorName
      ? item.translatorName
      : item.translator === 'Abu_Mundhir'
      ? 'Abū Mundhir'
      : 'Abū Ṭalḥah';
    ctx.fillText(`Curated & Translated by ${translatorShort}`, contentLeft, footerLine2Y);
  }

  // Citation (Right)
  if (item.citation) {
    ctx.textAlign = 'right';
    const citationSize = item.citation.length > 50 ? 16 : 19;
    ctx.font = `italic ${citationSize}px "Lora", Georgia, serif`;
    ctx.fillStyle = palette.citationColor;
    ctx.fillText(item.citation, contentRight, footerLine1Y);
  }

  ctx.textAlign = 'right';
  ctx.font = 'bold 15px "Playfair Display", serif';
  ctx.fillStyle = palette.brandingColor;
  ctx.letterSpacing = '2px';
  ctx.fillText('DĀR AL-WAḤĪ', contentRight, footerLine2Y);

  // 5. Main Content Area Calculation
  const mainContentTop = headerDividerY + 30;
  const mainContentBottom = footerDividerY - 30;
  const availableContentHeight = mainContentBottom - mainContentTop;

  const englishSource = sanitizeText(item.englishText || item.summary || item.title);
  const arabicSource = item.arabicText ? item.arabicText.trim() : '';

  // Determine Layout: Side-by-side or Vertical Stack
  // Side-by-side when Landscape (16:9) or Square with image
  const useSideBySide = isLandscape && hasImage;

  if (useSideBySide && scanImg) {
    // DUAL PANE LAYOUT (Landscape 16:9 with image)
    const leftColWidth = Math.round(contentWidth * 0.42);
    const colGap = 50;
    const rightColLeft = contentLeft + leftColWidth + colGap;
    const rightColWidth = contentWidth - leftColWidth - colGap;

    // Left Column: Image with illuminated border
    drawContainedImage(
      ctx,
      scanImg,
      contentLeft,
      mainContentTop,
      leftColWidth,
      availableContentHeight,
      palette.imageBorder
    );

    // Right Column: Title + Arabic + English (vertically balanced)
    // Title
    ctx.textAlign = 'left';
    ctx.fillStyle = palette.authorColor;
    ctx.font = 'bold 28px "Playfair Display", "Times New Roman", serif';
    const titleLines = wrapText(ctx, item.title, rightColWidth);

    // Arabic text
    let arabicFontSize = arabicSource.length > 250 ? 24 : arabicSource.length > 120 ? 28 : 34;
    let arabicLineHeight = Math.round(arabicFontSize * 1.9);
    ctx.font = `bold ${arabicFontSize}px "Amiri", "Traditional Arabic", serif`;
    const arabicLines = arabicSource ? wrapText(ctx, arabicSource, rightColWidth) : [];

    // English text
    let engFontSize = englishSource.length > 450 ? 18 : englishSource.length > 220 ? 21 : 24;
    let engLineHeight = Math.round(engFontSize * 1.6);
    ctx.font = `italic ${engFontSize}px "Lora", Georgia, serif`;
    const englishLines = wrapText(ctx, englishSource, rightColWidth);

    // Calculate total height
    const titleH = titleLines.length * 36;
    const arabicH = arabicLines.length > 0 ? arabicLines.length * arabicLineHeight + 20 : 0;
    const dividerH = arabicLines.length > 0 ? 30 : 15;
    const engH = englishLines.length * engLineHeight;
    const totalTextH = titleH + arabicH + dividerH + engH;

    const verticalOffset = Math.max(0, Math.round((availableContentHeight - totalTextH) / 2));
    let textY = mainContentTop + verticalOffset + 24;

    // Render Title
    ctx.fillStyle = palette.authorColor;
    ctx.font = 'bold 28px "Playfair Display", "Times New Roman", serif';
    for (const tLine of titleLines) {
      ctx.fillText(tLine, rightColLeft, textY);
      textY += 36;
    }
    textY += 10;

    // Render Arabic Text
    if (arabicLines.length > 0) {
      ctx.direction = 'rtl';
      ctx.textAlign = 'right';
      ctx.fillStyle = palette.arabicColor;
      ctx.font = `bold ${arabicFontSize}px "Amiri", "Traditional Arabic", serif`;
      for (const aLine of arabicLines) {
        ctx.fillText(aLine, rightColLeft + rightColWidth, textY);
        textY += arabicLineHeight;
      }
      ctx.direction = 'ltr';
      textY += 10;

      // Divider
      ctx.strokeStyle = palette.dividerColor;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(rightColLeft, textY);
      ctx.lineTo(rightColLeft + Math.min(200, rightColWidth), textY);
      ctx.stroke();
      textY += 24;
    }

    // Render English Translation
    ctx.textAlign = 'left';
    ctx.fillStyle = palette.englishColor;
    ctx.font = `italic ${engFontSize}px "Lora", Georgia, serif`;
    for (const eLine of englishLines) {
      ctx.fillText(eLine, rightColLeft, textY);
      textY += engLineHeight;
    }
  } else {
    // VERTICAL STACK LAYOUT (Story 9:16, Portrait 4:5, Square 1:1, or Landscape without image)
    let currentY = mainContentTop;

    // If there is an image, frame it nicely at the top of the content area
    if (hasImage && scanImg) {
      let imgHeight = isStory ? 520 : isPortrait ? 380 : isLandscape ? 360 : 320;
      imgHeight = Math.min(imgHeight, Math.round(availableContentHeight * 0.42));

      drawContainedImage(
        ctx,
        scanImg,
        contentLeft + Math.round(contentWidth * 0.05),
        currentY,
        Math.round(contentWidth * 0.9),
        imgHeight,
        palette.imageBorder
      );
      currentY += imgHeight + (isStory ? 40 : 25);
    }

    // Remaining height for text
    const textAvailableHeight = mainContentBottom - currentY;

    // Title
    ctx.textAlign = 'center';
    ctx.fillStyle = palette.authorColor;
    const titleSize = isStory ? 32 : isLandscape ? 28 : 26;
    ctx.font = `bold ${titleSize}px "Playfair Display", "Times New Roman", serif`;
    const titleLines = wrapText(ctx, item.title, contentWidth - 40);

    // Arabic text
    let arabicFontSize = isStory ? 40 : isLandscape ? 34 : 32;
    let arabicLineHeight = Math.round(arabicFontSize * 1.9);
    if (arabicSource.length > 250) {
      arabicFontSize = isStory ? 30 : 26;
      arabicLineHeight = Math.round(arabicFontSize * 1.85);
    }
    ctx.font = `bold ${arabicFontSize}px "Amiri", "Traditional Arabic", serif`;
    const arabicLines = arabicSource ? wrapText(ctx, arabicSource, contentWidth - 30) : [];

    // English text
    let engFontSize = isStory ? 26 : isLandscape ? 22 : 21;
    let engLineHeight = Math.round(engFontSize * 1.6);
    if (englishSource.length > 400) {
      engFontSize = isStory ? 20 : 18;
      engLineHeight = Math.round(engFontSize * 1.55);
    }
    ctx.font = `italic ${engFontSize}px "Lora", Georgia, serif`;
    const englishLines = wrapText(ctx, englishSource, contentWidth - 40);

    // Measure total text height and vertically balance it
    const titleH = titleLines.length * (titleSize + 8);
    const arabicH = arabicLines.length > 0 ? arabicLines.length * arabicLineHeight + 16 : 0;
    const dividerH = arabicLines.length > 0 ? 30 : 15;
    const engH = englishLines.length * engLineHeight;
    const totalTextH = titleH + arabicH + dividerH + engH;

    const verticalPadding = Math.max(5, Math.round((textAvailableHeight - totalTextH) / 2));
    currentY += verticalPadding + titleSize;

    // Render Title
    ctx.textAlign = 'center';
    ctx.fillStyle = palette.authorColor;
    ctx.font = `bold ${titleSize}px "Playfair Display", "Times New Roman", serif`;
    for (const tLine of titleLines) {
      ctx.fillText(tLine, W / 2, currentY);
      currentY += titleSize + 8;
    }
    currentY += 12;

    // Render Arabic Text
    if (arabicLines.length > 0) {
      ctx.direction = 'rtl';
      ctx.textAlign = 'center';
      ctx.fillStyle = palette.arabicColor;
      ctx.font = `bold ${arabicFontSize}px "Amiri", "Traditional Arabic", serif`;
      for (const aLine of arabicLines) {
        ctx.fillText(aLine, W / 2, currentY);
        currentY += arabicLineHeight;
      }
      ctx.direction = 'ltr';

      // Small Divider
      currentY += 10;
      ctx.strokeStyle = palette.dividerColor;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(W / 2 - 60, currentY);
      ctx.lineTo(W / 2 + 60, currentY);
      ctx.stroke();

      ctx.font = '14px serif';
      ctx.fillStyle = palette.ornamentColor;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('♦', W / 2, currentY);
      ctx.textBaseline = 'alphabetic';

      currentY += 24;
    }

    // Render English Translation
    ctx.textAlign = 'center';
    ctx.fillStyle = palette.englishColor;
    ctx.font = `italic ${engFontSize}px "Lora", Georgia, serif`;
    for (const eLine of englishLines) {
      ctx.fillText(eLine, W / 2, currentY);
      currentY += engLineHeight;
    }
  }

  return canvas;
}
