import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'mark' | 'horizontal';
  showSubtitle?: boolean;
  theme?: 'dark' | 'light' | 'gold';
}

export function Logo({
  className = 'h-10 w-auto',
  variant = 'horizontal',
  showSubtitle = true,
  theme = 'light',
}: LogoProps) {
  // Color palette matching the official Dar al-Wahi emblem
  const goldColor = '#C19B53';
  const goldLight = '#D8B878';
  const goldDark = '#9E7A32';
  const greenColor = '#0E4924';
  const greenDark = '#083218';
  const textColor = theme === 'dark' ? '#FFFFFF' : theme === 'gold' ? '#C19B53' : '#FFFFFF';
  const dividerColor = 'rgba(193, 155, 83, 0.45)';

  if (variant === 'mark') {
    return (
      <svg
        viewBox="0 0 260 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Dār al-Waḥī Emblem"
      >
        <defs>
          <linearGradient id="bookGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={goldLight} />
            <stop offset="50%" stopColor={goldColor} />
            <stop offset="100%" stopColor={goldDark} />
          </linearGradient>
          <linearGradient id="rihalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={greenColor} />
            <stop offset="100%" stopColor={greenDark} />
          </linearGradient>
        </defs>

        {/* Radiating Light Beams */}
        <g stroke={goldColor} strokeLinecap="round" opacity="0.85">
          <line x1="130" y1="95" x2="35" y2="40" strokeWidth="2.8" opacity="0.6" />
          <line x1="130" y1="95" x2="55" y2="24" strokeWidth="3" opacity="0.75" />
          <line x1="130" y1="95" x2="80" y2="12" strokeWidth="3.2" opacity="0.85" />
          <line x1="130" y1="95" x2="105" y2="5" strokeWidth="3.4" opacity="0.95" />
          <line x1="130" y1="95" x2="130" y2="2" strokeWidth="3.5" opacity="1" />
          <line x1="130" y1="95" x2="155" y2="5" strokeWidth="3.4" opacity="0.95" />
          <line x1="130" y1="95" x2="180" y2="12" strokeWidth="3.2" opacity="0.85" />
          <line x1="130" y1="95" x2="205" y2="24" strokeWidth="3" opacity="0.75" />
          <line x1="130" y1="95" x2="225" y2="40" strokeWidth="2.8" opacity="0.6" />
        </g>

        {/* Riḥāl Stand */}
        <path
          d="M 68 185 C 75 145 105 130 130 138 C 122 152 110 162 90 168 C 82 171 74 177 68 185 Z"
          fill="url(#rihalGrad)"
        />
        <path
          d="M 62 186 C 68 165 92 142 130 134 C 112 148 95 168 85 190 C 76 186 68 186 62 186 Z"
          fill="url(#rihalGrad)"
        />
        <path
          d="M 192 185 C 185 145 155 130 130 138 C 138 152 150 162 170 168 C 178 171 186 177 192 185 Z"
          fill="url(#rihalGrad)"
        />
        <path
          d="M 198 186 C 192 165 168 142 130 134 C 148 148 165 168 175 190 C 184 186 192 186 198 186 Z"
          fill="url(#rihalGrad)"
        />
        <path
          d="M 70 188 C 78 175 92 168 108 175 C 96 182 86 188 70 188 Z"
          fill="#083218"
          opacity="0.3"
        />
        <path
          d="M 190 188 C 182 175 168 168 152 175 C 164 182 174 188 190 188 Z"
          fill="#083218"
          opacity="0.3"
        />

        {/* Open Book */}
        <path
          d="M 130 128 L 244 80 C 248 84 246 92 240 96 L 130 144 L 20 96 C 14 92 12 84 16 80 Z"
          fill={goldDark}
        />
        <path
          d="M 130 122 C 95 106 50 82 22 72 C 16 70 14 74 18 78 C 45 92 90 114 130 134 Z"
          fill="url(#bookGrad)"
        />
        <path
          d="M 130 122 C 165 106 210 82 238 72 C 244 70 246 74 242 78 C 215 92 170 114 130 134 Z"
          fill="url(#bookGrad)"
        />
        <line x1="130" y1="120" x2="130" y2="138" stroke="#684A1A" strokeWidth="2.5" />
      </svg>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2 sm:gap-4 select-none max-w-full ${className}`}>
      {/* Arabic Typography & English Subtitle */}
      <div className="flex flex-col items-center justify-center text-center">
        {/* Arabic Typography: دار الوحي in bold geometric blocky Kufic style */}
        <span 
          className="font-bold tracking-tight leading-normal text-lg sm:text-[1.75rem] py-0.5"
          style={{ 
            fontFamily: '"Noto Kufi Arabic", "Kufam", "Almarai", system-ui, sans-serif',
            color: goldColor,
            fontWeight: 800,
            letterSpacing: '0.01em',
            textShadow: '0 1px 2px rgba(0,0,0,0.18)'
          }}
        >
          دار الوحي
        </span>

        {/* English Brand Subtitle with clean separation so it never overlaps */}
        {showSubtitle && (
          <div className="flex items-center gap-1 mt-1 sm:mt-1.5">
            <span 
              className="font-heading font-semibold text-[8.5px] sm:text-xs tracking-[0.24em] sm:tracking-[0.28em] uppercase leading-none"
              style={{ color: textColor }}
            >
              Dār al-Waḥī
            </span>
          </div>
        )}
      </div>

      {/* Elegant Hairline Divider */}
      <div 
        className="h-7 sm:h-11 w-[1.5px] rounded-full self-center shrink-0" 
        style={{ backgroundColor: dividerColor }} 
      />

      {/* Emblem: Quran on Riḥāl with Radiating Light */}
      <div className="w-8 h-8 sm:w-14 sm:h-14 flex items-center justify-center shrink-0">
        <svg
          viewBox="0 0 260 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-contain filter drop-shadow-xs"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="bookGradH" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={goldLight} />
              <stop offset="50%" stopColor={goldColor} />
              <stop offset="100%" stopColor={goldDark} />
            </linearGradient>
            <linearGradient id="rihalGradH" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={greenColor} />
              <stop offset="100%" stopColor={greenDark} />
            </linearGradient>
          </defs>

          {/* Radiating Light Beams */}
          <g stroke={goldColor} strokeLinecap="round">
            <line x1="130" y1="95" x2="35" y2="40" strokeWidth="2.8" opacity="0.6" />
            <line x1="130" y1="95" x2="55" y2="24" strokeWidth="3" opacity="0.75" />
            <line x1="130" y1="95" x2="80" y2="12" strokeWidth="3.2" opacity="0.85" />
            <line x1="130" y1="95" x2="105" y2="5" strokeWidth="3.4" opacity="0.95" />
            <line x1="130" y1="95" x2="130" y2="2" strokeWidth="3.5" opacity="1" />
            <line x1="130" y1="95" x2="155" y2="5" strokeWidth="3.4" opacity="0.95" />
            <line x1="130" y1="95" x2="180" y2="12" strokeWidth="3.2" opacity="0.85" />
            <line x1="130" y1="95" x2="205" y2="24" strokeWidth="3" opacity="0.75" />
            <line x1="130" y1="95" x2="225" y2="40" strokeWidth="2.8" opacity="0.6" />
          </g>

          {/* Riḥāl Stand */}
          <path
            d="M 68 185 C 75 145 105 130 130 138 C 122 152 110 162 90 168 C 82 171 74 177 68 185 Z"
            fill="url(#rihalGradH)"
          />
          <path
            d="M 62 186 C 68 165 92 142 130 134 C 112 148 95 168 85 190 C 76 186 68 186 62 186 Z"
            fill="url(#rihalGradH)"
          />
          <path
            d="M 192 185 C 185 145 155 130 130 138 C 138 152 150 162 170 168 C 178 171 186 177 192 185 Z"
            fill="url(#rihalGradH)"
          />
          <path
            d="M 198 186 C 192 165 168 142 130 134 C 148 148 165 168 175 190 C 184 186 192 186 198 186 Z"
            fill="url(#rihalGradH)"
          />
          {/* Stand feet arches */}
          <path
            d="M 70 188 C 78 175 92 168 108 175 C 96 182 86 188 70 188 Z"
            fill="#083218"
            opacity="0.3"
          />
          <path
            d="M 190 188 C 182 175 168 168 152 175 C 164 182 174 188 190 188 Z"
            fill="#083218"
            opacity="0.3"
          />

          {/* Open Sacred Book */}
          <path
            d="M 130 128 L 244 80 C 248 84 246 92 240 96 L 130 144 L 20 96 C 14 92 12 84 16 80 Z"
            fill={goldDark}
          />
          <path
            d="M 130 122 C 95 106 50 82 22 72 C 16 70 14 74 18 78 C 45 92 90 114 130 134 Z"
            fill="url(#bookGradH)"
          />
          <path
            d="M 130 122 C 165 106 210 82 238 72 C 244 70 246 74 242 78 C 215 92 170 114 130 134 Z"
            fill="url(#bookGradH)"
          />
          <line x1="130" y1="120" x2="130" y2="138" stroke="#684A1A" strokeWidth="2.5" />
        </svg>
      </div>
    </div>
  );
}
