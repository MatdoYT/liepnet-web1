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


        {/* Goals Section - 3D Perspective Blocks */}
        <div className="mt-24 relative">
          {/* 3D Perspective Container */}
          <div 
            className="relative w-full overflow-hidden"
            style={{ 
              perspective: '1200px',
              perspectiveOrigin: '50% 0%',
              height: '700px'
            }}
          >
            {/* The 3D blocks */}
            <div className="absolute inset-0 flex justify-center items-end" style={{ transformStyle: 'preserve-3d' }}>
              {[
                { 
                  title: t('awardWinner'),
                  desc: t('awardDesc'),
                  rotateY: 25,
                  translateX: -180
                },
                { 
                  title: t('globalReach'),
                  desc: t('globalDesc'),
                  rotateY: 0,
                  translateX: 0
                },
                { 
                  title: t('industryLeader'),
                  desc: t('industryDesc'),
                  rotateY: -25,
                  translateX: 180
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="absolute bottom-0"
                  style={{
                    transform: `translateX(${item.translateX}px) rotateY(${item.rotateY}deg)`,
                    transformStyle: 'preserve-3d',
                    width: '220px'
                  }}
                >
                  {/* The tall 3D block */}
                  <div 
                    className="relative bg-gray-800/80 border border-gray-600/40"
                    style={{
                      width: '220px',
                      height: '550px',
                      clipPath: 'polygon(10% 0%, 90% 0%, 100% 3%, 100% 100%, 0% 100%, 0% 3%)',
                      background: 'linear-gradient(to bottom, hsl(0, 0%, 35%) 0%, hsl(0, 0%, 15%) 100%)'
                    }}
                  >
                    {/* Content inside the block - positioned at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-300">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Gradient overlay that fades blocks at the top */}
            <div 
              className="absolute top-0 left-0 right-0 z-10 pointer-events-none"
              style={{
                height: '250px',
                background: 'linear-gradient(to bottom, hsl(0, 0%, 0%) 0%, hsl(0, 0%, 0%) 40%, transparent 100%)'
              }}
            />
            
            {/* Title positioned on top of the gradient */}
            <div className="absolute top-8 left-0 right-0 z-20 text-center">
              <h2 
                className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent" 
                style={{ backgroundImage: 'linear-gradient(25deg, hsl(0, 0%, 100%), hsl(0, 0%, 75%))' }}
              >
                OUR GOALS
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContentSection;