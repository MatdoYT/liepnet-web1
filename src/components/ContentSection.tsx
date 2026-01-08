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
              WHAT IS LIEPNET™?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">LIEPNET™</strong> is a Latvia-based project that provides online services such as <strong className="text-foreground">website hosting</strong> and intends to establish a network with very low latency between <strong className="text-foreground">Europe</strong> and <strong className="text-foreground">North America</strong>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Matīss Apsītis</strong> founded LIEPNET™. The word <strong className="text-foreground">LIEPNET™</strong> is derived from <strong className="text-foreground">"liepa"</strong> (Latvian for linden/tilia), which means <strong className="text-foreground">"linden network"</strong> in English.
            </p>
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
              desc: t('awardDesc'),
              effect: 'clouds'
            }, {
              title: t('globalReach'),
              desc: t('globalDesc'),
              effect: 'lightning'
            }, {
              title: t('industryLeader'),
              desc: t('industryDesc'),
              effect: 'rays'
            }].map((item, index) => (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur-md border border-emerald-900/50 rounded-2xl p-6 animate-fade-in relative overflow-hidden group hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300" 
                style={{ animationDelay: `${(index + 4) * 0.1}s` }}
              >
                {/* Clouds Effect */}
                {item.effect === 'clouds' && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
                    <div className="absolute w-20 h-10 bg-white/20 rounded-full blur-xl top-4 left-2 animate-[float_3s_ease-in-out_infinite]" />
                    <div className="absolute w-16 h-8 bg-white/15 rounded-full blur-lg top-8 right-4 animate-[float_4s_ease-in-out_infinite_0.5s]" />
                    <div className="absolute w-24 h-12 bg-white/10 rounded-full blur-xl bottom-6 left-1/2 -translate-x-1/2 animate-[float_3.5s_ease-in-out_infinite_1s]" />
                    <div className="absolute w-12 h-6 bg-white/20 rounded-full blur-lg top-1/2 left-8 animate-[float_2.5s_ease-in-out_infinite_0.3s]" />
                  </div>
                )}

                {/* Lightning Effect */}
                {item.effect === 'lightning' && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none overflow-hidden">
                    <svg className="absolute top-2 left-1/4 w-8 h-16 animate-[flash_1.5s_ease-in-out_infinite]" viewBox="0 0 32 64" fill="none">
                      <path d="M18 0L8 28H16L12 64L28 24H18L24 0H18Z" fill="url(#lightning1)" />
                      <defs>
                        <linearGradient id="lightning1" x1="16" y1="0" x2="16" y2="64" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#10B981" stopOpacity="0.8" />
                          <stop offset="1" stopColor="#34D399" stopOpacity="0.3" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <svg className="absolute bottom-4 right-1/4 w-6 h-12 animate-[flash_2s_ease-in-out_infinite_0.7s]" viewBox="0 0 32 64" fill="none">
                      <path d="M18 0L8 28H16L12 64L28 24H18L24 0H18Z" fill="url(#lightning2)" />
                      <defs>
                        <linearGradient id="lightning2" x1="16" y1="0" x2="16" y2="64" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#6EE7B7" stopOpacity="0.6" />
                          <stop offset="1" stopColor="#10B981" stopOpacity="0.2" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 bg-emerald-400/5 animate-[flash_1.5s_ease-in-out_infinite]" />
                  </div>
                )}

                {/* Glow Rays Effect */}
                {item.effect === 'rays' && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                      <div className="absolute top-1/2 left-1/2 w-1 h-24 bg-gradient-to-b from-transparent via-emerald-400/40 to-transparent -translate-x-1/2 -translate-y-1/2 animate-[spin_8s_linear_infinite]" />
                      <div className="absolute top-1/2 left-1/2 w-1 h-24 bg-gradient-to-b from-transparent via-emerald-300/30 to-transparent -translate-x-1/2 -translate-y-1/2 rotate-45 animate-[spin_8s_linear_infinite]" />
                      <div className="absolute top-1/2 left-1/2 w-1 h-24 bg-gradient-to-b from-transparent via-emerald-500/35 to-transparent -translate-x-1/2 -translate-y-1/2 rotate-90 animate-[spin_8s_linear_infinite]" />
                      <div className="absolute top-1/2 left-1/2 w-1 h-24 bg-gradient-to-b from-transparent via-emerald-400/25 to-transparent -translate-x-1/2 -translate-y-1/2 rotate-[135deg] animate-[spin_8s_linear_infinite]" />
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-emerald-400/20 blur-xl animate-pulse" />
                  </div>
                )}

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