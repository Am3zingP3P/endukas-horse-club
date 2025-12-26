import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext'; // Hook importálása

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { language, toggleLanguage, t } = useLanguage(); // Nyelv használata

  // Dark mode logika (ez maradt a régi)
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme as 'light' | 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['kontakt', 'dogadjaji', 'galerija', 'aktivnosti', 'o-nama'];
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#o-nama', label: t('header.about'), id: 'o-nama' },
    { href: '#aktivnosti', label: t('header.activities'), id: 'aktivnosti' },
    { href: '#galerija', label: t('header.gallery'), id: 'galerija' },
    { href: '#dogadjaji', label: t('header.events'), id: 'dogadjaji' },
    { href: '#kontakt', label: t('header.contact'), id: 'kontakt' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3 bg-background/90 backdrop-blur-xl shadow-soft border-b border-border/50'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
              isScrolled ? 'bg-primary' : 'bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20'
            }`}>
              <span className={`font-heading text-xl font-bold transition-colors duration-500 ${
                isScrolled ? 'text-primary-foreground' : 'text-primary-foreground'
              }`}>E</span>
              <div className="absolute inset-0 rounded-full bg-primary/20 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </div>
            <div className="hidden sm:block">
              <h1 className={`font-heading text-lg font-semibold transition-colors duration-500 ${
                isScrolled ? 'text-foreground' : 'text-primary-foreground'
              }`}>
                KK Endukas
              </h1>
              <p className={`text-xs transition-colors duration-500 ${
                isScrolled ? 'text-muted-foreground' : 'text-primary-foreground/70'
              }`}>
                {t('header.subtitle')}
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-5 py-2.5 font-body text-sm font-medium transition-all duration-300 rounded-full ${
                  isScrolled 
                    ? activeSection === link.id
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary'
                    : activeSection === link.id
                      ? 'text-primary-foreground'
                      : 'text-primary-foreground/80 hover:text-primary-foreground'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${
                    isScrolled ? 'bg-primary' : 'bg-primary-foreground'
                  }`} />
                )}
              </a>
            ))}
            
            {/* Divider */}
            <div className={`h-6 w-px mx-2 ${isScrolled ? 'bg-border' : 'bg-primary-foreground/20'}`} />

            {/* Language Switcher Button - ELEGÁNS TEXT STÍLUS */}
            <button
              onClick={toggleLanguage}
              className={`p-2 rounded-full transition-all duration-300 flex items-center gap-1 font-heading font-bold text-sm tracking-widest ${
                isScrolled
                  ? 'text-foreground hover:bg-muted'
                  : 'text-primary-foreground hover:bg-primary-foreground/10'
              }`}
              aria-label="Promeni jezik / Nyelvváltás"
            >
              <span className={language === 'sr' ? 'text-primary underline decoration-2 underline-offset-4' : 'opacity-50'}>SR</span>
              <span className="opacity-30">/</span>
              <span className={language === 'hu' ? 'text-primary underline decoration-2 underline-offset-4' : 'opacity-50'}>HU</span>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`ml-1 p-2.5 rounded-full transition-all duration-300 ${
                isScrolled
                  ? 'text-foreground hover:bg-muted'
                  : 'text-primary-foreground hover:bg-primary-foreground/10'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <a
              href="#kontakt"
              className={`ml-4 px-7 py-3 rounded-full font-body text-sm font-medium transition-all duration-500 overflow-hidden group relative ${
                isScrolled 
                  ? 'bg-primary text-primary-foreground hover:shadow-glow' 
                  : 'bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/30 hover:bg-primary-foreground/20'
              }`}
            >
              <span className="relative z-10">{t('header.join')}</span>
              <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
          </nav>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            
            {/* Mobile Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`p-2 rounded-full font-heading font-bold text-xs tracking-widest ${
                isScrolled 
                  ? 'text-foreground hover:bg-muted' 
                  : 'text-primary-foreground hover:bg-primary-foreground/10'
              }`}
            >
              {language.toUpperCase()}
            </button>

            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 ${
                isScrolled 
                  ? 'text-foreground hover:bg-muted' 
                  : 'text-primary-foreground hover:bg-primary-foreground/10'
              }`}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-full transition-all duration-300 ${
                isScrolled 
                  ? 'text-foreground hover:bg-muted' 
                  : 'text-primary-foreground hover:bg-primary-foreground/10'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-6 border-t border-border/20">
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 font-body text-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-300 ${
                    activeSection === link.id ? 'text-primary bg-primary/5' : ''
                  }`}
                  style={{ 
                    opacity: isMobileMenuOpen ? 1 : 0,
                    transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                    transition: `all 0.3s ease ${index * 0.05}s`
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#kontakt"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-6 py-4 bg-primary text-primary-foreground rounded-xl font-body text-sm font-medium text-center transition-all hover:shadow-glow"
                style={{ 
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(10px)',
                  transition: 'all 0.3s ease 0.25s'
                }}
              >
                {t('header.join')}
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;