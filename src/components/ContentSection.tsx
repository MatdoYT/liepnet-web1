import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContentSection = () => {
  const { t } = useLanguage();
  const imageRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg)");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    
    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / centerY * -10; // Max 10 degrees
    const rotateY = (x - centerX) / centerX * 10;   // Max 10 degrees
    
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg)");
  };
  return <section className="px-4 md:px-6 py-12 md:py-16 relative">
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main content columns */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          {/* Text Column */}
          <div className="space-y-4 md:space-y-6 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(25deg, hsl(0, 0%, 100%), hsl(0, 0%, 75%))' }}>
              {t('whatIsLiepnetTitle')}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: t('whatIsLiepnetPara1') }} />
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: t('whatIsLiepnetPara2') }} />
          </div>

          {/* Image Column - Hidden on mobile, shown on larger screens */}
          <div className="animate-fade-in hidden lg:block" style={{
          animationDelay: '0.2s'
        }}>
            <div 
              ref={imageRef}
              className="relative rounded-2xl overflow-hidden cursor-pointer"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: transform,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <img 
                src="/lovable-uploads/e98631d3-970c-4648-98fd-9425dd2e5140.png" 
                alt="Modern digital workspace" 
                className="w-full h-96 object-contain" 
              />
              <div className="absolute inset-0 card-gradient opacity-10"></div>
            </div>
          </div>
        </div>


        {/* Accomplishments Section */}
        <div className="mt-16 md:mt-24">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(25deg, hsl(0, 0%, 100%), hsl(0, 0%, 75%))' }}>{t('accomplishments')}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {[{
              title: t('awardWinner'),
              desc: t('awardDesc')
            }, {
              title: t('globalReach'),
              desc: t('globalDesc')
            }, {
              title: t('industryLeader'),
              desc: t('industryDesc')
            }].map((item, index) => (
              <div 
                key={index} 
                className="goal-card backdrop-blur-md border border-emerald-500/40 rounded-xl md:rounded-2xl p-4 md:p-6 animate-fade-in relative overflow-hidden group hover:scale-105 hover:border-emerald-400/70 hover:shadow-[0_0_35px_rgba(16,185,129,0.5)] transition-all duration-300" 
                style={{ 
                  animationDelay: `${(index + 4) * 0.1}s`,
                  background: 'linear-gradient(45deg, rgba(16, 185, 129, 0.15), rgba(16, 185, 129, 0.05))'
                }}
              >
                <div className="relative z-10">
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-2 md:mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>;
};
export default ContentSection;