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


        {/* Goals Section - Radial Layout */}
        <div className="mt-24">
          <div className="text-center mb-16 relative">
            <h2 
              className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent" 
              style={{ backgroundImage: 'linear-gradient(25deg, hsl(0, 0%, 100%), hsl(0, 0%, 75%))' }}
            >
              OUR GOALS
            </h2>
            
            {/* Particle/Glow effect emanating from title */}
            <div className="absolute left-1/2 top-full -translate-x-1/2 w-full h-32 overflow-visible">
              {/* Center line */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-1 h-full bg-gradient-to-b from-white/40 to-transparent"></div>
              {/* Left line */}
              <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-white/40 to-transparent origin-top -translate-x-1/2" style={{ transform: 'translateX(-50%) rotate(-25deg)' }}></div>
              {/* Right line */}
              <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-white/40 to-transparent origin-top -translate-x-1/2" style={{ transform: 'translateX(-50%) rotate(25deg)' }}></div>
              
              {/* Glow effect */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-64 h-24 bg-white/10 blur-3xl rounded-full"></div>
            </div>
          </div>
          
          {/* Cards in radial layout */}
          <div className="relative flex justify-center items-end gap-4 md:gap-8 mt-32 px-4">
            {[{
              title: t('awardWinner'),
              desc: t('awardDesc'),
              image: "/lovable-uploads/53ab33fd-314e-49bc-80a1-ec4006d71675.png",
              alt: "Meteorological station",
              offset: 'translate-y-8'
            }, {
              title: t('globalReach'),
              desc: t('globalDesc'),
              image: "/lovable-uploads/ab598fe3-b0e7-47e8-8010-d1382caf53d6.png",
              alt: "Global network hosting infrastructure",
              offset: '-translate-y-4'
            }, {
              title: t('industryLeader'),
              desc: t('industryDesc'),
              image: "/lovable-uploads/d332fcb6-19fe-479b-a90f-3e538575b0a9.png",
              alt: "LIEPNET™ Services - Gaming and technology",
              offset: 'translate-y-8'
            }].map((item, index) => (
              <div 
                key={index} 
                className={`bg-gray-900/60 border border-gray-700/40 rounded-t-3xl rounded-b-lg p-5 animate-fade-in relative overflow-hidden group hover:scale-105 transition-all duration-300 w-full max-w-xs ${item.offset}`}
                style={{
                  animationDelay: `${(index + 4) * 0.1}s`,
                  clipPath: 'polygon(8% 0%, 92% 0%, 100% 8%, 100% 100%, 0% 100%, 0% 8%)'
                }}
              >
                {/* Card gradient overlay */}
                <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-gray-600/20 to-transparent group-hover:opacity-50 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Image */}
                  <div className="w-full aspect-square bg-gray-800/30 rounded-lg mb-4 overflow-hidden relative">
                    <img 
                      src={item.image} 
                      alt={item.alt} 
                      className="w-full h-full object-cover" 
                    />
                    {/* Black gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tl from-black/60 via-black/20 to-transparent"></div>
                  </div>
                  
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