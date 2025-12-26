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


        {/* Goals Section - 2.5D long blocks converging toward title */}
        <div className="mt-24 relative">
          <div className="relative w-full overflow-hidden" style={{ height: 720 }}>
            {/* Long "depth" blocks (illusion) */}
            <svg
              className="absolute inset-0 z-0 pointer-events-none"
              viewBox="0 0 1000 720"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="beamA" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--foreground) / 0.02)" />
                  <stop offset="55%" stopColor="hsl(var(--foreground) / 0.08)" />
                  <stop offset="100%" stopColor="hsl(var(--foreground) / 0.18)" />
                </linearGradient>
                <linearGradient id="beamB" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--foreground) / 0.02)" />
                  <stop offset="55%" stopColor="hsl(var(--foreground) / 0.08)" />
                  <stop offset="100%" stopColor="hsl(var(--foreground) / 0.18)" />
                </linearGradient>
                <linearGradient id="beamC" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--foreground) / 0.02)" />
                  <stop offset="55%" stopColor="hsl(var(--foreground) / 0.08)" />
                  <stop offset="100%" stopColor="hsl(var(--foreground) / 0.18)" />
                </linearGradient>
              </defs>

              {/* Left beam (doesn't touch center) */}
              <polygon
                points="160,720 360,720 490,0 465,0"
                fill="url(#beamA)"
                stroke="hsl(var(--foreground) / 0.22)"
                strokeWidth="1"
              />
              {/* Center beam */}
              <polygon
                points="400,720 600,720 515,0 485,0"
                fill="url(#beamB)"
                stroke="hsl(var(--foreground) / 0.22)"
                strokeWidth="1"
              />
              {/* Right beam (doesn't touch center) */}
              <polygon
                points="640,720 840,720 535,0 510,0"
                fill="url(#beamC)"
                stroke="hsl(var(--foreground) / 0.22)"
                strokeWidth="1"
              />
            </svg>

            {/* Title layer (sits on the fade) */}
            <div className="absolute top-8 left-0 right-0 z-30 text-center">
              <h2
                className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(25deg, hsl(0, 0%, 100%), hsl(0, 0%, 75%))' }}
              >
                OUR GOALS
              </h2>
            </div>

            {/* Fade layer (where the beams "disappear" behind the title) */}
            <div
              className="absolute top-0 left-0 right-0 z-20 pointer-events-none"
              style={{
                height: 320,
                backgroundImage:
                  'linear-gradient(to bottom, hsl(var(--background)) 0%, hsl(var(--background)) 62%, transparent 100%)'
              }}
            />

            {/* Original cards (kept), positioned in front */}
            <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center items-end gap-4 sm:gap-6 md:gap-10 px-4 pb-8">
              {[
                {
                  title: t('awardWinner'),
                  desc: t('awardDesc'),
                  image: "/lovable-uploads/53ab33fd-314e-49bc-80a1-ec4006d71675.png",
                  alt: "Meteorological station"
                },
                {
                  title: t('globalReach'),
                  desc: t('globalDesc'),
                  image: "/lovable-uploads/ab598fe3-b0e7-47e8-8010-d1382caf53d6.png",
                  alt: "Global network hosting infrastructure"
                },
                {
                  title: t('industryLeader'),
                  desc: t('industryDesc'),
                  image: "/lovable-uploads/d332fcb6-19fe-479b-a90f-3e538575b0a9.png",
                  alt: "LIEPNET™ Services - Gaming and technology"
                }
              ].map((item, index) => (
                <div key={index} className="relative w-[180px] sm:w-[220px] md:w-[260px]" style={{ height: 420 }}>
                  <div
                    className="absolute bottom-0 left-0 right-0 rounded-2xl p-4 md:p-5"
                    style={{
                      backgroundImage:
                        'linear-gradient(to bottom, hsl(var(--foreground) / 0.10), hsl(var(--foreground) / 0.06))',
                      border: '1px solid hsl(var(--foreground) / 0.28)'
                    }}
                  >
                    <div
                      className="w-full aspect-square rounded-lg overflow-hidden relative mb-4"
                      style={{ border: '1px solid hsl(var(--foreground) / 0.20)' }}
                    >
                      <img src={item.image} alt={item.alt} className="w-full h-full object-cover" loading="lazy" />
                      <div
                        className="absolute inset-0"
                        style={{ backgroundImage: 'linear-gradient(to top left, hsl(var(--background) / 0.65), transparent)' }}
                      />
                    </div>

                    <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContentSection;