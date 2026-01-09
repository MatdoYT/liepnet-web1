import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const { currentLanguage, setLanguage, t } = useLanguage();
  const [isAtTop, setIsAtTop] = useState(true);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 50);
    };
    
    handleScroll(); // Check initial position
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
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
    <header className={`w-full px-6 flex items-center justify-between fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
      isAtTop ? 'py-6 bg-transparent border-b border-transparent' : 'py-4 bg-black/80 backdrop-blur-xl border-b border-white/5'
    }`}>
      {/* Logo Area - Clickable Home Button */}
      <div className="flex items-center">
        <Link to="/" className="hover:opacity-80 transition-all duration-300">
          <img 
            src="/lovable-uploads/4ebce7aa-c438-4114-8c2a-b420e2c6453b.png" 
            alt="LIEPNET Logo - Home" 
            className={`w-auto transition-all duration-300 ${isAtTop ? 'h-14' : 'h-10'}`}
          />
        </Link>
      </div>

      {/* Navigation Links */}
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
      <div className="flex items-center space-x-4">
        {/* Language Dropdown */}
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
        <Button variant="ghost" className="md:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </Button>
      </div>
    </header>
  );
};

export default Header;
