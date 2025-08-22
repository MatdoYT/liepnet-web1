import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import BannerDots from "@/components/BannerDots";
import ContentSection from "@/components/ContentSection";
import { useState, useEffect, useRef } from "react";
import heroBg1 from "@/assets/hero-bg-1.jpg";
import heroBg2 from "@/assets/hero-bg-2.jpg";
import heroBg3 from "@/assets/hero-bg-3.jpg";

const Index = () => {
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
    }, 5000);
  };

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
    setIsPaused(true);
    
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    
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
    <div className="min-h-screen bg-background">
      <Header />
      <main className="space-y-8">
        <HeroBanner />
        <BannerDots 
          backgroundImages={backgroundImages}
          currentImageIndex={currentImageIndex}
          onDotClick={handleDotClick}
        />
        <ContentSection />
      </main>
    </div>
  );
};

export default Index;
