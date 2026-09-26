import { ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-background/90 pt-8 pb-12 mt-14 border-t-2 border-accent/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          
          {/* Brand & Mission Statement */}
          <div className="max-w-md text-left">
            <h3 className="font-heading text-lg sm:text-xl text-accent font-semibold mb-1 tracking-wide">
              Dār al-Waḥī
            </h3>
            <p className="text-xs sm:text-sm text-background/75 leading-relaxed">
              Preserving and translating the Heritage of Ahl us-Sunnah wal-Jamāʿah upon the understanding of the Salaf aṣ-Ṣāliḥ.
            </p>
            <p className="text-[11px] text-background/50 mt-2">
              All treatises, athār, and audio lessons translated with authentic classical references.
            </p>
            <div className="mt-3 flex items-center gap-3">
              <button
                onClick={async () => {
                  try {
                    if ('caches' in window) {
                      const keys = await caches.keys();
                      await Promise.all(keys.map(k => caches.delete(k)));
                    }
                    if ('serviceWorker' in navigator) {
                      const registrations = await navigator.serviceWorker.getRegistrations();
                      await Promise.all(registrations.map(r => r.unregister()));
                    }
                  } catch (e) {
                    console.error(e);
                  }
                  window.location.reload();
                }}
                className="inline-flex items-center gap-1.5 text-[11px] text-accent/80 hover:text-white transition-colors underline decoration-dotted underline-offset-2 cursor-pointer"
                title="Force refresh content and update cache"
              >
                <span>Check for updates</span>
              </button>
            </div>
          </div>
          
          {/* Translators Socials Cards - Fully Responsive on Mobile & Desktop */}
          <div className="w-full lg:w-auto flex flex-col md:flex-row items-stretch gap-3.5">
            
            {/* Abū Mundhir ar-Ruwāndī */}
            <div className="bg-white/5 border border-white/15 rounded-xl p-3.5 sm:p-4 flex flex-col gap-2.5 shadow-2xs flex-1">
              <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-2">
                <div>
                  <span className="text-accent text-xs sm:text-sm font-semibold tracking-wide block">
                    Abū Mundhir ar-Ruwāndī
                  </span>
                  <span className="text-[10px] text-background/60 tracking-wider">
                    Dār al-Waḥī Translator
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-2">
                <a
                  href="https://www.tiktok.com/@wahyite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 active:bg-white/25 text-white text-xs font-medium transition-colors min-h-[40px]"
                  title="Abū Mundhir on TikTok"
                >
                  <div className="flex items-center gap-2 truncate">
                    {/* TikTok Icon */}
                    <svg className="w-4 h-4 shrink-0 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3 15.28 6.34 6.34 0 0 0 9.34 21.6a6.34 6.34 0 0 0 6.34-6.32V8.62a8.28 8.28 0 0 0 3.91 1.07V6.69z"/>
                    </svg>
                    <span className="truncate font-medium">TikTok @wahyite</span>
                  </div>
                  <ExternalLink className="w-3 h-3 opacity-60 shrink-0" />
                </a>

                <a
                  href="https://www.instagram.com/wahyite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 active:bg-white/25 text-white text-xs font-medium transition-colors min-h-[40px]"
                  title="Abū Mundhir on Instagram"
                >
                  <div className="flex items-center gap-2 truncate">
                    {/* Instagram Icon */}
                    <svg className="w-4 h-4 shrink-0 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                    <span className="truncate font-medium">IG @wahyite</span>
                  </div>
                  <ExternalLink className="w-3 h-3 opacity-60 shrink-0" />
                </a>
              </div>
            </div>

            {/* Abū Ṭalḥah al-ʾAfġhānī */}
            <div className="bg-white/5 border border-white/15 rounded-xl p-3.5 sm:p-4 flex flex-col gap-2.5 shadow-2xs flex-1">
              <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-2">
                <div>
                  <span className="text-accent text-xs sm:text-sm font-semibold tracking-wide block">
                    Abū Ṭalḥah al-ʾAfġhānī
                  </span>
                  <span className="text-[10px] text-background/60 tracking-wider">
                    Dār al-Waḥī Translator
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-2">
                <a
                  href="https://www.tiktok.com/@abu_talhah.1430"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 active:bg-white/25 text-white text-xs font-medium transition-colors min-h-[40px]"
                  title="Abū Ṭalḥah on TikTok"
                >
                  <div className="flex items-center gap-2 truncate">
                    {/* TikTok Icon */}
                    <svg className="w-4 h-4 shrink-0 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3 15.28 6.34 6.34 0 0 0 9.34 21.6a6.34 6.34 0 0 0 6.34-6.32V8.62a8.28 8.28 0 0 0 3.91 1.07V6.69z"/>
                    </svg>
                    <span className="truncate font-medium">TikTok @abu_talhah.1430</span>
                  </div>
                  <ExternalLink className="w-3 h-3 opacity-60 shrink-0" />
                </a>

                <a
                  href="https://www.instagram.com/kulfiking99"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 active:bg-white/25 text-white text-xs font-medium transition-colors min-h-[40px]"
                  title="Abū Ṭalḥah on Instagram"
                >
                  <div className="flex items-center gap-2 truncate">
                    {/* Instagram Icon */}
                    <svg className="w-4 h-4 shrink-0 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                    <span className="truncate font-medium">IG @kulfiking99</span>
                  </div>
                  <ExternalLink className="w-3 h-3 opacity-60 shrink-0" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
