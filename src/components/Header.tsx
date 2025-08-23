import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const { currentLanguage, setLanguage, t } = useLanguage();
  
  const navLinks = [
    { key: 'about', label: t('about') },
    { key: 'services', label: t('services') }
  ];

  const languages = [
    { code: 'en' as const, flag: '🇺🇸', name: t('english') },
    { code: 'lv' as const, flag: '🇱🇻', name: t('latvian') },
    { code: 'ru' as const, flag: '🇷🇺', name: t('russian') },
    { code: 'fr' as const, flag: '🇫🇷', name: t('french') },
  ];

  const getCurrentLanguageDisplay = () => {
    const current = languages.find(lang => lang.code === currentLanguage);
    return current ? current.code.toUpperCase() : 'EN';
  };

  return (
    <header className="w-full px-6 py-4 flex items-center justify-between relative z-10">
      {/* Logo Area - Clickable Home Button */}
      <div className="flex items-center">
        <a href="#" className="hover:opacity-80 transition-opacity duration-200">
          <img 
            src="/lovable-uploads/4ebce7aa-c438-4114-8c2a-b420e2c6453b.png" 
            alt="LIEPNET Logo - Home" 
            className="h-10 w-auto"
          />
        </a>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => (
          <a
            key={link.key}
            href="#"
            className="text-foreground/80 hover:text-primary transition-colors duration-200 relative group"
          >
            {link.label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </nav>

      {/* Language Selector & Mobile Menu */}
      <div className="flex items-center space-x-4">
        {/* Language Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="hidden md:flex items-center space-x-2">
              <Globe className="w-4 h-4" />
              <span>{getCurrentLanguageDisplay()}</span>
              <ChevronDown className="w-3 h-3" />
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