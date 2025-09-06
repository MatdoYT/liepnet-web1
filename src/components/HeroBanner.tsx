import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

// English banners
import heroBg1 from "@/assets/banners/hero-bg-1.jpg";
import heroBg2 from "@/assets/banners/hero-bg-2.jpg";
import heroBg3 from "@/assets/banners/hero-bg-3.jpg";
import heroBg4 from "@/assets/banners/hero-bg-4.jpg";
import mobileBg1 from "@/assets/banners/mobile/hero-bg-1.jpg";
import mobileBg2 from "@/assets/banners/mobile/hero-bg-2.jpg";
import mobileBg3 from "@/assets/banners/mobile/hero-bg-3.jpg";
import mobileBg4 from "@/assets/banners/mobile/hero-bg-4.jpg";

// Latvian banners
import lvHeroBg1 from "@/assets/banners/lv/hero-bg-1.jpg";
import lvHeroBg2 from "@/assets/banners/lv/hero-bg-2.jpg";
import lvHeroBg3 from "@/assets/banners/lv/hero-bg-3.jpg";
import lvHeroBg4 from "@/assets/banners/lv/hero-bg-4.jpg";
import lvMobileBg1 from "@/assets/banners/lv/mobile/hero-bg-1.jpg";
import lvMobileBg2 from "@/assets/banners/lv/mobile/hero-bg-2.jpg";
import lvMobileBg3 from "@/assets/banners/lv/mobile/hero-bg-3.jpg";
import lvMobileBg4 from "@/assets/banners/lv/mobile/hero-bg-4.jpg";

// Russian banners
import ruHeroBg1 from "@/assets/banners/ru/hero-bg-1.jpg";
import ruHeroBg2 from "@/assets/banners/ru/hero-bg-2.jpg";
import ruHeroBg3 from "@/assets/banners/ru/hero-bg-3.jpg";
import ruHeroBg4 from "@/assets/banners/ru/hero-bg-4.jpg";
import ruMobileBg1 from "@/assets/banners/ru/mobile/hero-bg-1.jpg";
import ruMobileBg2 from "@/assets/banners/ru/mobile/hero-bg-2.jpg";
import ruMobileBg3 from "@/assets/banners/ru/mobile/hero-bg-3.jpg";
import ruMobileBg4 from "@/assets/banners/ru/mobile/hero-bg-4.jpg";

// French banners
import frHeroBg1 from "@/assets/banners/fr/hero-bg-1.jpg";
import frHeroBg2 from "@/assets/banners/fr/hero-bg-2.jpg";
import frHeroBg3 from "@/assets/banners/fr/hero-bg-3.jpg";
import frHeroBg4 from "@/assets/banners/fr/hero-bg-4.jpg";
import frMobileBg1 from "@/assets/banners/fr/mobile/hero-bg-1.jpg";
import frMobileBg2 from "@/assets/banners/fr/mobile/hero-bg-2.jpg";
import frMobileBg3 from "@/assets/banners/fr/mobile/hero-bg-3.jpg";
import frMobileBg4 from "@/assets/banners/fr/mobile/hero-bg-4.jpg";

// Greek banners
import elHeroBg1 from "@/assets/banners/el/hero-bg-1.jpg";
import elHeroBg2 from "@/assets/banners/el/hero-bg-2.jpg";
import elHeroBg3 from "@/assets/banners/el/hero-bg-3.jpg";
import elHeroBg4 from "@/assets/banners/el/hero-bg-4.jpg";
import elMobileBg1 from "@/assets/banners/el/mobile/hero-bg-1.jpg";
import elMobileBg2 from "@/assets/banners/el/mobile/hero-bg-2.jpg";
import elMobileBg3 from "@/assets/banners/el/mobile/hero-bg-3.jpg";
import elMobileBg4 from "@/assets/banners/el/mobile/hero-bg-4.jpg";

// Lithuanian banners
import ltHeroBg1 from "@/assets/banners/lt/hero-bg-1.jpg";
import ltHeroBg2 from "@/assets/banners/lt/hero-bg-2.jpg";
import ltHeroBg3 from "@/assets/banners/lt/hero-bg-3.jpg";
import ltHeroBg4 from "@/assets/banners/lt/hero-bg-4.jpg";
import ltMobileBg1 from "@/assets/banners/lt/mobile/hero-bg-1.jpg";
import ltMobileBg2 from "@/assets/banners/lt/mobile/hero-bg-2.jpg";
import ltMobileBg3 from "@/assets/banners/lt/mobile/hero-bg-3.jpg";
import ltMobileBg4 from "@/assets/banners/lt/mobile/hero-bg-4.jpg";

// Estonian banners
import etHeroBg1 from "@/assets/banners/et/hero-bg-1.jpg";
import etHeroBg2 from "@/assets/banners/et/hero-bg-2.jpg";
import etHeroBg3 from "@/assets/banners/et/hero-bg-3.jpg";
import etHeroBg4 from "@/assets/banners/et/hero-bg-4.jpg";
import etMobileBg1 from "@/assets/banners/et/mobile/hero-bg-1.jpg";
import etMobileBg2 from "@/assets/banners/et/mobile/hero-bg-2.jpg";
import etMobileBg3 from "@/assets/banners/et/mobile/hero-bg-3.jpg";
import etMobileBg4 from "@/assets/banners/et/mobile/hero-bg-4.jpg";

// Swedish banners
import svHeroBg1 from "@/assets/banners/sv/hero-bg-1.jpg";
import svHeroBg2 from "@/assets/banners/sv/hero-bg-2.jpg";
import svHeroBg3 from "@/assets/banners/sv/hero-bg-3.jpg";
import svHeroBg4 from "@/assets/banners/sv/hero-bg-4.jpg";
import svMobileBg1 from "@/assets/banners/sv/mobile/hero-bg-1.jpg";
import svMobileBg2 from "@/assets/banners/sv/mobile/hero-bg-2.jpg";
import svMobileBg3 from "@/assets/banners/sv/mobile/hero-bg-3.jpg";
import svMobileBg4 from "@/assets/banners/sv/mobile/hero-bg-4.jpg";

const HeroBanner = () => {
  const { currentLanguage } = useLanguage();
  
  // Language-specific image sets
  const imagesByLanguage = {
    en: {
      desktop: [heroBg1, heroBg2, heroBg3, heroBg4],
      mobile: [mobileBg1, mobileBg2, mobileBg3, mobileBg4]
    },
    lv: {
      desktop: [lvHeroBg1, lvHeroBg2, lvHeroBg3, lvHeroBg4],
      mobile: [lvMobileBg1, lvMobileBg2, lvMobileBg3, lvMobileBg4]
    },
    ru: {
      desktop: [ruHeroBg1, ruHeroBg2, ruHeroBg3, ruHeroBg4],
      mobile: [ruMobileBg1, ruMobileBg2, ruMobileBg3, ruMobileBg4]
    },
    fr: {
      desktop: [frHeroBg1, frHeroBg2, frHeroBg3, frHeroBg4],
      mobile: [frMobileBg1, frMobileBg2, frMobileBg3, frMobileBg4]
    },
    el: {
      desktop: [elHeroBg1, elHeroBg2, elHeroBg3, elHeroBg4],
      mobile: [elMobileBg1, elMobileBg2, elMobileBg3, elMobileBg4]
    },
    de: {
      desktop: [deHeroBg1, deHeroBg2, deHeroBg3, deHeroBg4],
      mobile: [deMobileBg1, deMobileBg2, deMobileBg3, deMobileBg4]
    },
    lt: {
      desktop: [ltHeroBg1, ltHeroBg2, ltHeroBg3, ltHeroBg4],
      mobile: [ltMobileBg1, ltMobileBg2, ltMobileBg3, ltMobileBg4]
    },
    et: {
      desktop: [etHeroBg1, etHeroBg2, etHeroBg3, etHeroBg4],
      mobile: [etMobileBg1, etMobileBg2, etMobileBg3, etMobileBg4]
    },
    sv: {
      desktop: [svHeroBg1, svHeroBg2, svHeroBg3, svHeroBg4],
      mobile: [svMobileBg1, svMobileBg2, svMobileBg3, svMobileBg4]
    }
  };
  
  const [isMobile, setIsMobile] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Get current background images based on screen size and language
  const currentImages = imagesByLanguage[currentLanguage];
  const backgroundImages = isMobile ? currentImages.mobile : currentImages.desktop;

  // Screen size detection
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const startAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isPaused) {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 5000); // Change image every 5 seconds
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const dragEndX = e.clientX;
    const dragDistance = dragStartX - dragEndX;
    const minDragDistance = 50;

    if (Math.abs(dragDistance) > minDragDistance) {
      if (dragDistance > 0) {
        // Dragged left, go to next image
        setCurrentImageIndex((prevIndex) => 
          prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
        );
      } else {
        // Dragged right, go to previous image
        setCurrentImageIndex((prevIndex) => 
          prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1
        );
      }
      
      setIsPaused(true);
      
      // Clear existing pause timeout
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
      
      // Resume auto-cycling after 5 seconds
      pauseTimeoutRef.current = setTimeout(() => {
        setIsPaused(false);
      }, 5000);
    }
    
    setIsDragging(false);
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, [backgroundImages.length, isPaused, currentLanguage]);

  return (
    <section 
      className={`relative w-full overflow-hidden animate-fade-in-banner cursor-grab active:cursor-grabbing select-none ${
        isMobile ? 'h-[20rem] sm:h-[24rem]' : 'h-[24rem] md:h-[28rem] lg:h-[32rem]'
      }`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={() => setIsDragging(false)}
    >
      {/* Background images with slide transition */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ${
            index === currentImageIndex 
              ? 'opacity-50 translate-x-0' 
              : index === (currentImageIndex - 1 + backgroundImages.length) % backgroundImages.length
                ? 'opacity-0 -translate-x-full'
                : 'opacity-0 translate-x-full'
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      
      {/* Banner with fade effect */}
      <div className="absolute inset-0 banner-fade"></div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
    </section>
  );
};

export default HeroBanner;