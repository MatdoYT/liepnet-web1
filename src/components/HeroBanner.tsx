import { useState, useEffect, useRef } from "react";
import heroBg1 from "@/assets/hero-bg-1.jpg";
import heroBg2 from "@/assets/hero-bg-2.jpg";
import heroBg3 from "@/assets/hero-bg-3.jpg";

const HeroBanner = () => {
  const backgroundImages = [heroBg1, heroBg2, heroBg3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
    setIsPaused(true);
    
    // Clear existing pause timeout
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    
    // Resume auto-cycling after 20 seconds
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 20000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, [backgroundImages.length, isPaused]);

  return (
    <div className="space-y-4">
      <section className="relative w-full h-[24rem] md:h-[28rem] lg:h-[32rem] overflow-hidden animate-fade-in-banner">
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
      
      {/* Navigation dots - moved outside banner */}
      <div className="flex justify-center space-x-3 pb-4">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 ${
              index === currentImageIndex
                ? 'bg-primary shadow-lg ring-2 ring-primary/30'
                : 'bg-muted-foreground/50 hover:bg-muted-foreground/70'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;