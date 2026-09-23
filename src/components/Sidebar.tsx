import { X, Home, Bookmark, Library, ChevronDown, Users, Layers, Newspaper, PlayCircle, Headphones, Download, Quote, BookOpen } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useBookmarks } from '../hooks/useBookmarks';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormatOption {
  id: 'article' | 'video' | 'audio' | 'pdf' | 'quote' | 'short treatise';
  label: string;
  icon: typeof BookOpen;
}

const FORMAT_OPTIONS: FormatOption[] = [
  { id: 'article', label: 'Articles', icon: Newspaper },
  { id: 'video', label: 'Videos', icon: PlayCircle },
  { id: 'audio', label: 'Audios', icon: Headphones },
  { id: 'pdf', label: 'PDFs', icon: Download },
  { id: 'quote', label: 'Quotes', icon: Quote },
  { id: 'short treatise', label: 'Short Treatises', icon: BookOpen },
];

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const navigate = useNavigate();
  const { bookmarks } = useBookmarks();
  const [isFormatsOpen, setIsFormatsOpen] = useState(true);
  const [openFormatDropdown, setOpenFormatDropdown] = useState<string | null>(null);
  const [isTranslatorsOpen, setIsTranslatorsOpen] = useState(true);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(true);

  const handleFormatNav = (tag: string, translator: string = 'all') => {
    const params = new URLSearchParams();
    if (tag !== 'all') params.set('tag', tag);
    if (translator !== 'all') params.set('translator', translator);
    const query = params.toString() ? `?${params.toString()}` : '';
    navigate(`/search${query}`);
    onClose();
  };

  const handleTranslatorNav = (translator: string) => {
    if (translator === 'all') {
      navigate('/search');
    } else {
      navigate(`/search?translator=${encodeURIComponent(translator)}`);
    }
    onClose();
  };

  const handleCategoryNav = (category: string) => {
    navigate(`/search?category=${encodeURIComponent(category)}`);
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 transition-opacity z-40 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Sidebar Drawer */}
      <div 
        className={`fixed inset-y-0 left-0 w-72 bg-white text-slate-800 shadow-2xl transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex justify-between items-center p-6 border-b border-slate-100">
          <Link to="/" onClick={onClose} className="flex items-center gap-3 text-primary font-semibold text-lg hover:text-red-700 transition-colors">
            <Home className="w-5 h-5" />
            <span>Home</span>
          </Link>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-red-600 transition-colors p-2 cursor-pointer"
            aria-label="Close sidebar"
          >
            <X className="w-6 h-6 stroke-[1.5]" />
          </button>
        </div>

        <div className="flex-1 py-6 px-6 space-y-8">
          {/* USER SECTION */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 tracking-widest uppercase mb-4">
              <Bookmark className="w-4 h-4 text-primary" />
              <span>Personal</span>
            </div>
            <ul className="space-y-3 pl-6 text-sm text-slate-600">
              <li>
                <Link to="/bookmarks" onClick={onClose} className="hover:text-red-700 transition-colors flex items-center justify-between py-1 cursor-pointer">
                  <span>My Bookmarks</span>
                  {bookmarks.length > 0 && (
                    <span className="text-[11px] font-semibold bg-accent/20 text-accent-dark px-2 py-0.5 rounded-full">
                      {bookmarks.length}
                    </span>
                  )}
                </Link>
              </li>
              <li>
                <Link to="/notes" onClick={onClose} className="hover:text-red-700 transition-colors block py-1 cursor-pointer">My Notes</Link>
              </li>
              <li>
                <Link to="/glossary" onClick={onClose} className="hover:text-red-700 transition-colors flex items-center gap-2 py-1 cursor-pointer">
                  <span>Glossary of Terms</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTENT FORMATS */}
          <div>
            <button 
              onClick={() => setIsFormatsOpen(!isFormatsOpen)}
              className="flex items-center justify-between w-full text-xs font-bold text-slate-900 tracking-widest uppercase mb-4 group cursor-pointer hover:text-red-700 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-primary group-hover:text-red-700 transition-colors" />
                <span>Content Formats</span>
              </div>
              <ChevronDown className={`w-4 h-4 text-slate-400 group-hover:text-red-700 transition-transform duration-200 ${isFormatsOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <div className={`grid transition-all duration-200 ease-in-out ${isFormatsOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <ul className="space-y-3 pl-2 text-sm text-slate-600 overflow-hidden">
                <li>
                  <button 
                    onClick={() => handleFormatNav('all')} 
                    className="hover:text-red-700 transition-colors text-left block w-full py-1 font-medium text-slate-700 cursor-pointer text-sm"
                  >
                    All Content
                  </button>
                </li>

                {FORMAT_OPTIONS.map(fmt => {
                  const IconComponent = fmt.icon;
                  const isExpanded = openFormatDropdown === fmt.id;

                  return (
                    <li key={fmt.id} className="space-y-1">
                      <div className="flex items-center justify-between group">
                        <button 
                          onClick={() => handleFormatNav(fmt.id, 'all')} 
                          className="flex items-center gap-2.5 hover:text-red-700 transition-colors text-left flex-1 py-1 font-medium text-slate-700 cursor-pointer text-sm"
                        >
                          <IconComponent className="w-3.5 h-3.5 text-slate-400 group-hover:text-red-700 transition-colors shrink-0" />
                          <span>{fmt.label}</span>
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenFormatDropdown(isExpanded ? null : fmt.id);
                          }}
                          className="p-1 text-slate-400 hover:text-red-700 transition-colors cursor-pointer rounded-sm hover:bg-slate-100"
                          title={`Toggle translators for ${fmt.label}`}
                          aria-label={`Toggle translators for ${fmt.label}`}
                        >
                          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-red-700' : ''}`} />
                        </button>
                      </div>

                      <div className={`grid transition-all duration-200 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                        <ul className="pl-6 space-y-1.5 border-l border-slate-200 overflow-hidden mt-1 text-xs text-slate-500">
                          <li>
                            <button
                              onClick={() => handleFormatNav(fmt.id, 'all')}
                              className="hover:text-red-700 transition-colors text-left block w-full py-0.5 cursor-pointer"
                            >
                              All Translators
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => handleFormatNav(fmt.id, 'Abu_Talhah')}
                              className="hover:text-red-700 transition-colors text-left block w-full py-0.5 cursor-pointer"
                            >
                              Abū Ṭalḥah al-ʾAfġhānī
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => handleFormatNav(fmt.id, 'Abu_Mundhir')}
                              className="hover:text-red-700 transition-colors text-left block w-full py-0.5 cursor-pointer"
                            >
                              Abū Mundhir ar-Ruwāndī
                            </button>
                          </li>
                        </ul>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* TRANSLATORS */}
          <div>
            <button 
              onClick={() => setIsTranslatorsOpen(!isTranslatorsOpen)}
              className="flex items-center justify-between w-full text-xs font-bold text-slate-900 tracking-widest uppercase mb-4 group cursor-pointer hover:text-red-700 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary group-hover:text-red-700 transition-colors" />
                <span>Translators</span>
              </div>
              <ChevronDown className={`w-4 h-4 text-slate-400 group-hover:text-red-700 transition-transform duration-200 ${isTranslatorsOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`grid transition-all duration-200 ease-in-out ${isTranslatorsOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <ul className="space-y-2.5 pl-6 text-sm text-slate-600 overflow-hidden">
                <li>
                  <button 
                    onClick={() => handleTranslatorNav('all')} 
                    className="hover:text-red-700 transition-colors text-left block w-full py-1 cursor-pointer"
                  >
                    All Translators
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleTranslatorNav('Abu_Talhah')} 
                    className="hover:text-red-700 transition-colors text-left block w-full py-1 cursor-pointer font-medium text-slate-700"
                  >
                    Abū Ṭalḥah al-ʾAfġhānī
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleTranslatorNav('Abu_Mundhir')} 
                    className="hover:text-red-700 transition-colors text-left block w-full py-1 cursor-pointer font-medium text-slate-700"
                  >
                    Abū Mundhir ar-Ruwāndī
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* CATEGORIES */}
          <div>
            <button 
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              className="flex items-center justify-between w-full text-xs font-bold text-slate-900 tracking-widest uppercase mb-4 group cursor-pointer hover:text-red-700 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Library className="w-4 h-4 text-primary group-hover:text-red-700 transition-colors" />
                <span>Categories</span>
              </div>
              <ChevronDown className={`w-4 h-4 text-slate-400 group-hover:text-red-700 transition-transform duration-200 ${isCategoriesOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`grid transition-all duration-200 ease-in-out ${isCategoriesOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <ul className="space-y-2 pl-6 text-sm text-slate-600 overflow-hidden">
                <li>
                  <button onClick={() => handleCategoryNav('ʿAqīdah')} className="hover:text-red-700 transition-colors text-left block w-full py-1 cursor-pointer">ʿAqīdah</button>
                </li>
                <li>
                  <button onClick={() => handleCategoryNav('Uṣool')} className="hover:text-red-700 transition-colors text-left block w-full py-1 cursor-pointer">Uṣool</button>
                </li>
                <li>
                  <button onClick={() => handleCategoryNav('Ḥadīth')} className="hover:text-red-700 transition-colors text-left block w-full py-1 cursor-pointer">Ḥadīth</button>
                </li>
                <li>
                  <button onClick={() => handleCategoryNav('Heart-Softeners')} className="hover:text-red-700 transition-colors text-left block w-full py-1 cursor-pointer">Heart-Softeners</button>
                </li>
              </ul>
            </div>
          </div>

          {/* TRANSLATORS' SOCIALS */}
          <div className="pt-4 border-t border-slate-100">
            <div className="text-xs font-bold text-slate-900 tracking-widest uppercase mb-3 flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <span>Channels & Socials</span>
            </div>
            
            <div className="space-y-3">
              {/* Abū Mundhir */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-lg p-2.5">
                <p className="text-xs font-semibold text-slate-800 mb-1.5">Abū Mundhir ar-Ruwāndī</p>
                <div className="flex items-center gap-1.5">
                  <a
                    href="https://www.tiktok.com/@wahyite"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1 px-2 py-1 bg-white hover:bg-slate-100 border border-slate-200 rounded text-[11px] font-medium text-slate-700 transition-colors"
                  >
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3 15.28 6.34 6.34 0 0 0 9.34 21.6a6.34 6.34 0 0 0 6.34-6.32V8.62a8.28 8.28 0 0 0 3.91 1.07V6.69z"/>
                    </svg>
                    <span>TikTok</span>
                  </a>
                  <a
                    href="https://www.instagram.com/wahyite"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1 px-2 py-1 bg-white hover:bg-slate-100 border border-slate-200 rounded text-[11px] font-medium text-slate-700 transition-colors"
                  >
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                    <span>Instagram</span>
                  </a>
                </div>
              </div>

              {/* Abū Ṭalḥah */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-lg p-2.5">
                <p className="text-xs font-semibold text-slate-800 mb-1.5">Abū Ṭalḥah al-ʾAfġhānī</p>
                <div className="flex items-center gap-1.5">
                  <a
                    href="https://www.tiktok.com/@abu_talhah.1430"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1 px-2 py-1 bg-white hover:bg-slate-100 border border-slate-200 rounded text-[11px] font-medium text-slate-700 transition-colors"
                  >
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3 15.28 6.34 6.34 0 0 0 9.34 21.6a6.34 6.34 0 0 0 6.34-6.32V8.62a8.28 8.28 0 0 0 3.91 1.07V6.69z"/>
                    </svg>
                    <span>TikTok</span>
                  </a>
                  <a
                    href="https://www.instagram.com/kulfiking99"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1 px-2 py-1 bg-white hover:bg-slate-100 border border-slate-200 rounded text-[11px] font-medium text-slate-700 transition-colors"
                  >
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
