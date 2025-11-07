import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import hostingBanner from "@/assets/hosting-banner.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Hosting = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [clickPosition, setClickPosition] = useState<{ x: number; y: number } | null>(null);
  const [showBubbles, setShowBubbles] = useState(false);
  
  useEffect(() => {
    document.title = t('hostingTitle');
  }, [t]);

  const handleHostingClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setClickPosition({ x, y });
    setShowBubbles(true);
    
    setTimeout(() => {
      setShowBubbles(false);
      navigate('/hosting/liepnet-website-hosting');
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 relative overflow-hidden">
        {/* Banner Background with Fade */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover brightness-[0.7]"
            style={{ 
              backgroundImage: `url(${hostingBanner})`,
              backgroundPosition: 'center 75%'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          {/* Title with Gradient */}
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-24 bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent">
            {t('hostingTitle')}
          </h1>

          {/* Hosting Options */}
          <div className="w-full px-8">
            <button
              onClick={handleHostingClick}
              className="relative w-full group overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              {/* Button Background with Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background" />
              
              {/* Border with Green Gradient */}
              <div className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-br from-emerald-900/50 via-emerald-700/30 to-emerald-900/50">
                <div className="h-full w-full rounded-lg bg-gradient-to-br from-background/95 via-muted/20 to-background/95" />
              </div>

              {/* Content */}
              <div className="relative z-10 py-6 px-8 flex items-center justify-between">
                {/* Left Side: Title & Description */}
                <div className="flex-1 text-left">
                  <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-2">
                    {t('websiteHosting')}
                  </h2>
                  <p className="text-muted-foreground">
                    {t('websiteHostingDesc')}
                  </p>
                </div>
                
                {/* Right Side: Pricing */}
                <div className="flex items-center gap-8 ml-8">
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground mb-1">{t('setupFeeLabel')}</p>
                    <p className="text-2xl font-bold text-foreground">100€</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground mb-1">{t('hostingLabel')}</p>
                    <div>
                      <span className="text-xs text-muted-foreground">{t('startingFrom')} </span>
                      <span className="text-xl font-bold text-foreground">20€/mo</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Green Bubble Portal Animation */}
              {showBubbles && clickPosition && (
                <>
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute rounded-full bg-emerald-500/30 pointer-events-none"
                      style={{
                        left: clickPosition.x,
                        top: clickPosition.y,
                        width: 0,
                        height: 0,
                        animation: `bubble-expand 0.8s ease-out ${i * 0.1}s forwards`,
                      }}
                    />
                  ))}
                </>
              )}
            </button>
          </div>
        </div>
      </main>

      <Footer />

      <style>{`
        @keyframes bubble-expand {
          0% {
            width: 0;
            height: 0;
            opacity: 0.6;
            transform: translate(-50%, -50%) scale(0);
          }
          50% {
            opacity: 0.4;
          }
          100% {
            width: 300px;
            height: 300px;
            opacity: 0;
            transform: translate(-50%, -50%) scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default Hosting;
