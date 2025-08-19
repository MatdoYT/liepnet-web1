import { Button } from "@/components/ui/button";

const Header = () => {
  const navLinks = ["Home", "About", "Services", "Portfolio", "Contact"];

  return (
    <header className="w-full px-6 py-4 flex items-center justify-between relative z-10">
      {/* Logo Area */}
      <div className="flex items-center">
        <img 
          src="/lovable-uploads/4ebce7aa-c438-4114-8c2a-b420e2c6453b.png" 
          alt="Business Logo" 
          className="h-10 w-auto"
        />
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => (
          <a
            key={link}
            href="#"
            className="text-foreground/80 hover:text-primary transition-colors duration-200 relative group"
          >
            {link}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </nav>

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
    </header>
  );
};

export default Header;