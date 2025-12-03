import { useRef, useState, useEffect } from "react";
import heroBanner1 from "@/assets/hero-banner-main.webp";
import heroBanner2 from "@/assets/hero-banner-2.webp";
import heroBanner3 from "@/assets/hero-banner-3.webp";

const bannerImages = [heroBanner1, heroBanner2, heroBanner3];

const HeroBanner = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg)");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!logoRef.current) return;
    
    const rect = logoRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / centerY * -10;
    const rotateY = (x - centerX) / centerX * 10;
    
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg)");
  };

  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      {/* Background Images with fade transition */}
      {bannerImages.map((image, index) => (
        <div 
          key={index}
          className="absolute inset-0 bg-cover bg-center brightness-[0.7] transition-opacity duration-1000"
          style={{ 
            backgroundImage: `url(${image})`,
            opacity: currentIndex === index ? 1 : 0
          }}
        />
      ))}
      
      {/* Gradient overlay - bottom 1/3 fading to background */}
      <div 
        className="absolute inset-0"
        style={{ 
          background: 'linear-gradient(to top, hsl(var(--background)) 0%, hsl(var(--background)) 10%, hsl(var(--background) / 0.85) 25%, hsl(var(--background) / 0.4) 40%, transparent 55%)' 
        }} 
      />
      
      {/* Logo centered in gradient area */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 flex items-center justify-center">
        <div 
          ref={logoRef}
          className="cursor-pointer"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: transform,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <img 
            src="/lovable-uploads/e98631d3-970c-4648-98fd-9425dd2e5140.png" 
            alt="LIEPNET Logo" 
            className="w-64 md:w-80 lg:w-96 h-auto object-contain drop-shadow-2xl" 
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
