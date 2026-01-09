import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Globe, X, Menu } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const { currentLanguage, setLanguage, t } = useLanguage();
  const [isAtTop, setIsAtTop] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 50);
    };
    
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);
  
  const navLinks = [
    { key: 'about', label: t('about'), href: '/about' },
    { key: 'services', label: t('services'), href: '/services' },
    { key: 'hosting', label: t('hostingNav'), href: 'https://liepnet.cloud' },
    { key: 'status', label: t('status'), href: 'https://lv-status.liepnet.eu' }
  ];

  const languages = [
    { code: 'en' as const, flag: '🇺🇸', name: 'English', short: 'EN' },
    { code: 'lv' as const, flag: '🇱🇻', name: 'Latviešu', short: 'LV' },
    { code: 'ru' as const, flag: '🇷🇺', name: 'Русский', short: 'RU' },
    { code: 'fr' as const, flag: '🇫🇷', name: 'Français', short: 'FR' },
    { code: 'el' as const, flag: '🇬🇷', name: 'Ελληνικά', short: 'EL' },
    { code: 'de' as const, flag: '🇩🇪', name: 'Deutsch', short: 'DE' },
    { code: 'lt' as const, flag: '🇱🇹', name: 'Lietuvių', short: 'LT' },
    { code: 'et' as const, flag: '🇪🇪', name: 'Eesti', short: 'ET' },
    { code: 'sv' as const, flag: '🇸🇪', name: 'Svenska', short: 'SV' },
  ];

  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === currentLanguage);
  };

  const currentLang = getCurrentLanguage();

  return (
    <>
      <header className={`w-full px-4 md:px-6 flex items-center justify-between fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isAtTop ? 'py-4 md:py-6 bg-transparent border-b border-transparent' : 'py-3 md:py-4 bg-black/80 backdrop-blur-xl border-b border-white/5'
      }`}>
        {/* Logo Area - Clickable Home Button */}
        <div className="flex items-center">
          <Link to="/" className="hover:opacity-80 transition-all duration-300">
            <img 
              src="/lovable-uploads/4ebce7aa-c438-4114-8c2a-b420e2c6453b.png" 
              alt="LIEPNET Logo - Home" 
              className={`w-auto transition-all duration-300 ${isAtTop ? 'h-10 md:h-14' : 'h-8 md:h-10'}`}
            />
          </Link>
        </div>

        {/* Navigation Links - Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            link.href.startsWith('/') ? (
              <Link
                key={link.key}
                to={link.href}
                className={`transition-all duration-300 relative group ${
                  isAtTop 
                    ? 'text-foreground text-base font-medium' 
                    : 'text-foreground/60 text-sm hover:text-foreground'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ) : (
              <a
                key={link.key}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-all duration-300 relative group ${
                  isAtTop 
                    ? 'text-foreground text-base font-medium' 
                    : 'text-foreground/60 text-sm hover:text-foreground'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full"></span>
              </a>
            )
          ))}
        </nav>

        {/* Language Selector & Mobile Menu */}
        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Language Dropdown - Desktop */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                size={isAtTop ? "default" : "sm"} 
                className={`hidden md:flex items-center space-x-2 transition-all duration-300 ${
                  isAtTop ? 'text-base' : 'text-sm'
                }`}
              >
                <Globe className={`transition-all duration-300 ${isAtTop ? 'w-5 h-5' : 'w-4 h-4'}`} />
                <span className="uppercase">
                  {isAtTop ? currentLang?.name : currentLang?.short}
                </span>
                <ChevronDown className={`transition-all duration-300 ${isAtTop ? 'w-4 h-4' : 'w-3 h-3'}`} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-36 p-1">
              {languages.map((language) => (
                <DropdownMenuItem 
                  key={language.code}
                  className="cursor-pointer p-0 focus:bg-transparent"
                  onClick={() => setLanguage(language.code)}
                >
                  <div className={`flex items-center space-x-2 w-full px-3 py-2 rounded-md border transition-all duration-200 ${
                    currentLanguage === language.code 
                      ? 'bg-primary/10 border-primary/30 text-primary' 
                      : 'bg-background/50 border-border/30 hover:bg-accent/50 hover:border-border/50'
                  }`}>
                    <span className="text-sm">{language.flag}</span>
                    <span className="text-sm font-medium">{language.name}</span>
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="sm"
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Slide-out */}
      <div 
        className={`fixed top-0 right-0 h-full w-[280px] bg-background border-l border-border/20 z-50 md:hidden transition-transform duration-300 ease-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-4 border-b border-border/20">
          <span className="text-lg font-semibold">Menu</span>
          <Button 
            variant="ghost" 
            size="sm"
            className="p-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile Navigation Links */}
        <nav className="p-4 space-y-2">
          {navLinks.map((link) => (
            link.href.startsWith('/') ? (
              <Link
                key={link.key}
                to={link.href}
                className="block py-3 px-4 text-foreground hover:bg-white/5 rounded-lg transition-colors text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.key}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-3 px-4 text-foreground hover:bg-white/5 rounded-lg transition-colors text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            )
          ))}
        </nav>

        {/* Mobile Language Selector */}
        <div className="p-4 border-t border-border/20">
          <p className="text-sm text-muted-foreground mb-3 px-4">Language</p>
          <div className="grid grid-cols-3 gap-2">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => {
                  setLanguage(language.code);
                  setMobileMenuOpen(false);
                }}
                className={`flex flex-col items-center p-2 rounded-lg border transition-all duration-200 ${
                  currentLanguage === language.code 
                    ? 'bg-primary/10 border-primary/30' 
                    : 'bg-background/50 border-border/30 hover:bg-accent/50'
                }`}
              >
                <span className="text-lg">{language.flag}</span>
                <span className="text-xs mt-1">{language.short}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
