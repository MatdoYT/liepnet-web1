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
  return <section className="px-6 py-16 relative">
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main content columns */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Column */}
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(25deg, hsl(0, 0%, 100%), hsl(0, 0%, 75%))' }}>
              {t('whatIsLiepnetTitle')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: t('whatIsLiepnetPara1') }} />
            <p className="text-lg text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: t('whatIsLiepnetPara2') }} />
          </div>

          {/* Image Column */}
          <div className="animate-fade-in" style={{
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
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(25deg, hsl(0, 0%, 100%), hsl(0, 0%, 75%))' }}>{t('accomplishments')}</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
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
                className="goal-card bg-white/5 backdrop-blur-md border border-emerald-900/50 rounded-2xl p-6 animate-fade-in relative overflow-hidden group hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300" 
                style={{ animationDelay: `${(index + 4) * 0.1}s` }}
              >
                {/* Delayed gradient overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-[5000ms] pointer-events-none bg-gradient-to-br from-emerald-500/30 via-sky-400/20 to-emerald-600/25 rounded-2xl" />

                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
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