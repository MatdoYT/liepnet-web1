import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ehrLogo from "@/assets/ehr-logo.png";

const About = () => {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'About - LIEPNET™';
    setWindowHeight(window.innerHeight);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Calculate section progress (0-1) based on scroll position
  const getSectionProgress = (sectionStart: number, sectionEnd: number) => {
    const progress = (scrollY - sectionStart) / (sectionEnd - sectionStart);
    return Math.max(0, Math.min(1, progress));
  };

  // Section boundaries (in vh units, converted to pixels)
  const vh = windowHeight;
  const section1End = vh * 1;
  const section2Start = vh * 0.5;
  const section2End = vh * 2.5;
  const section3Start = vh * 2;
  const section3End = vh * 4;
  const section4Start = vh * 3.5;
  const section4End = vh * 5.5;
  const section5Start = vh * 5;

  // Background color transitions
  const getBackgroundColor = () => {
    // Section 1: White
    if (scrollY < section1End) {
      const progress = getSectionProgress(0, section1End);
      const white = 255 - Math.floor(progress * 255);
      return `rgb(${white}, ${white}, ${white})`;
    }
    // Section 2: Black
    if (scrollY < section3Start) {
      return 'rgb(0, 0, 0)';
    }
    // Section 3: Dark green to bright green gradient
    if (scrollY < section4Start) {
      const progress = getSectionProgress(section3Start, section3End);
      const greenIntensity = Math.floor(40 + progress * 60);
      return `linear-gradient(180deg, rgb(0, ${greenIntensity}, ${Math.floor(greenIntensity * 0.3)}) 0%, rgb(0, ${Math.floor(greenIntensity * 1.5)}, ${Math.floor(greenIntensity * 0.5)}) 100%)`;
    }
    // Section 4: Dark red-black
    if (scrollY < section5Start) {
      const progress = getSectionProgress(section4Start, section4End);
      const red = Math.floor(60 + progress * 40);
      return `rgb(${red}, 0, 0)`;
    }
    // Section 5: Black
    return 'rgb(0, 0, 0)';
  };

  // Intro fade in
  const introOpacity = scrollY < 100 ? 1 : Math.max(0, 1 - (scrollY - 100) / 300);
  
  // Section 2: Text from right, image fade left
  const section2Progress = getSectionProgress(section2Start, section2End);
  const textFromRight = Math.max(0, 100 - section2Progress * 150);
  const imageOpacity = Math.min(1, Math.max(0, (section2Progress - 0.3) * 2));

  // Section 3: Services/plans visibility
  const section3Progress = getSectionProgress(section3Start, section3End);
  
  // Section 4: Origins visibility
  const section4Progress = getSectionProgress(section4Start, section4End);

  // Section 5: Thank you visibility
  const section5Progress = getSectionProgress(section5Start, section5Start + vh);

  const bgStyle = getBackgroundColor();
  const isGradient = bgStyle.includes('gradient');

  return (
    <div 
      ref={containerRef}
      className="min-h-[700vh] overflow-x-hidden transition-colors duration-300"
      style={{ 
        background: isGradient ? bgStyle : undefined,
        backgroundColor: !isGradient ? bgStyle : undefined
      }}
    >
      <Header />
      
      {/* Section 1: Logo on white background - fade in */}
      <section className="h-screen flex items-center justify-center fixed top-0 left-0 right-0 pt-20">
        <div 
          className="flex flex-col items-center justify-center gap-8 transition-opacity duration-500"
          style={{ opacity: introOpacity }}
        >
          <img 
            src={ehrLogo} 
            alt="LIEPNET Logo" 
            className="w-40 h-40 md:w-56 md:h-56 object-contain animate-fade-in"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-black animate-fade-in" style={{ animationDelay: '0.3s' }}>
            LIEPNET™
          </h1>
          <p className="text-lg md:text-xl text-gray-600 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            {t('aboutSubtitle')}
          </p>
          <div className="animate-bounce mt-8">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Section 2: Text from right, image from left */}
      <section 
        className="h-screen flex items-center justify-center fixed top-0 left-0 right-0"
        style={{ 
          opacity: scrollY > section2Start * 0.8 && scrollY < section3Start ? 1 : 0,
          pointerEvents: scrollY > section2Start && scrollY < section3Start ? 'auto' : 'none',
          transition: 'opacity 0.3s ease'
        }}
      >
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* Image fades in from left */}
          <div 
            className="relative flex justify-center transition-all duration-700"
            style={{ 
              opacity: imageOpacity,
              transform: `translateX(${-50 + imageOpacity * 50}px)`
            }}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/30 backdrop-blur-lg border border-emerald-500/30 flex items-center justify-center overflow-hidden">
              <img 
                src={ehrLogo} 
                alt="LIEPNET" 
                className="w-32 h-32 md:w-48 md:h-48 object-contain"
              />
            </div>
          </div>
          
          {/* Text slides in from right */}
          <div 
            className="space-y-6 transition-all duration-500"
            style={{ 
              transform: `translateX(${textFromRight}px)`,
              opacity: Math.min(1, section2Progress * 2)
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              {t('whatIsTitle')}
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              {t('whatIsContent')}
            </p>
            <p className="text-base text-gray-400 leading-relaxed">
              {t('countryOrigin')}
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Plans and Services - Green gradient background */}
      <section 
        className="h-screen flex items-center justify-center fixed top-0 left-0 right-0"
        style={{ 
          opacity: scrollY > section3Start * 0.9 && scrollY < section4Start ? 1 : 0,
          pointerEvents: scrollY > section3Start && scrollY < section4Start ? 'auto' : 'none',
          transition: 'opacity 0.5s ease'
        }}
      >
        <div className="container mx-auto px-6">
          <div 
            className="text-center mb-12 transition-all duration-700"
            style={{ 
              opacity: Math.min(1, section3Progress * 3),
              transform: `translateY(${30 - section3Progress * 30}px)`
            }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {t('whatPlansTitle')}
            </h2>
            <p className="text-lg text-white/70">
              What LIEPNET™ offers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: t('plan1Title'), content: t('plan1Content'), delay: 0 },
              { title: t('plan2Title'), content: t('plan2Content'), delay: 0.1 },
              { title: t('plan3Title'), content: t('plan3Content'), delay: 0.2 }
            ].map((plan, index) => (
              <div 
                key={index}
                className="bg-black/30 backdrop-blur-lg border border-white/20 rounded-2xl p-6 transition-all duration-500 hover:border-emerald-400/50 hover:bg-black/40"
                style={{ 
                  opacity: Math.min(1, (section3Progress - 0.2 - plan.delay) * 3),
                  transform: `translateY(${Math.max(0, 50 - (section3Progress - plan.delay) * 100)}px)`
                }}
              >
                <h3 className="text-xl font-bold text-white mb-3">{plan.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{plan.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Origins - Dark red background with glowing text */}
      <section 
        className="h-screen flex items-center justify-center fixed top-0 left-0 right-0"
        style={{ 
          opacity: scrollY > section4Start * 0.9 && scrollY < section5Start ? 1 : 0,
          pointerEvents: scrollY > section4Start && scrollY < section5Start ? 'auto' : 'none',
          transition: 'opacity 0.5s ease'
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <div 
            className="max-w-3xl mx-auto space-y-8 transition-all duration-700"
            style={{ 
              opacity: Math.min(1, section4Progress * 2),
              transform: `scale(${0.9 + section4Progress * 0.1})`
            }}
          >
            <h2 
              className="text-4xl md:text-6xl font-bold"
              style={{
                color: 'transparent',
                WebkitTextStroke: '2px white',
                textShadow: '0 0 30px rgba(255,255,255,0.5), 0 0 60px rgba(255,255,255,0.3)',
                filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.4))'
              }}
            >
              Our Origins
            </h2>
            <p 
              className="text-lg md:text-xl leading-relaxed"
              style={{
                color: 'transparent',
                WebkitTextStroke: '1px rgba(255,255,255,0.8)',
                textShadow: '0 0 20px rgba(255,255,255,0.4)',
              }}
            >
              LIEPNET™ was founded in Latvia with a vision to connect Europe and North America 
              through cutting-edge technology. Our journey began with a simple idea: 
              make quality hosting accessible to everyone.
            </p>
            <div 
              className="text-base md:text-lg text-white/60 mt-8"
              style={{
                textShadow: '0 0 10px rgba(255,255,255,0.2)',
              }}
            >
              Founded February 2025 • Liepāja, Latvia
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Thank you - Black background */}
      <section 
        className="h-screen flex items-center justify-center fixed top-0 left-0 right-0"
        style={{ 
          opacity: scrollY > section5Start * 0.9 ? 1 : 0,
          pointerEvents: scrollY > section5Start ? 'auto' : 'none',
          transition: 'opacity 0.5s ease'
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <div 
            className="max-w-2xl mx-auto space-y-8 transition-all duration-1000"
            style={{ 
              opacity: Math.min(1, section5Progress * 2),
              transform: `translateY(${30 - section5Progress * 30}px)`
            }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              Thank You
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Thank you for taking the time to learn about LIEPNET™. 
              We're excited to have you as part of our journey.
            </p>
            <div className="pt-12 border-t border-white/10 mt-12">
              <p className="text-lg text-gray-500 italic">
                "{t('footerQuote')}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer for scroll */}
      <div className="h-[600vh]" />

      {/* Footer */}
      <div className="relative z-10 bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default About;
