import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
const ContentSection = () => {
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
  return <section className="px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Main content columns */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Column */}
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground">WHAT IS LIEPNET™?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">LIEPNET™ provides a range of services, including logo development, hosting, business WI-FI and network planning, meteorological information, and tech tips for everyone.</p>
            
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

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => {
            const isFirst = item === 1;
            const isSecond = item === 2;
            const isThird = item === 3;
            const isFourth = item === 4;
            const isFifth = item === 5;
            const isSixth = item === 6;
            const isSeventh = item === 7;
            const isEighth = item === 8;
            const isNinth = item === 9;
            return (
              <div key={item} className={`${
                isFirst ? 'light-blue-gradient' : 
                isFourth ? 'dark-green-gradient' : 
                isSecond ? 'bright-green-gradient' : 
                isFifth ? 'purple-gradient' : 
                isThird ? 'bright-red-gradient' : 
                isSixth ? 'yellow-gradient' : 
                isSeventh ? 'orange-gradient' : 
                isEighth ? 'blue-gradient' : 
                isNinth ? 'gray-gradient' : 
                'card-gradient'
              } rounded-2xl p-8 stroke-border animate-fade-in relative overflow-hidden group hover:scale-105 transition-all duration-300`} style={{
                animationDelay: `${item * 0.1}s`
              }}>
                {/* Card gradient overlay */}
                <div className={`absolute inset-0 opacity-50 bg-gradient-to-br ${
                  isFirst ? 'from-blue-400/10' : 
                  isFourth ? 'from-green-700/10' : 
                  isSecond ? 'from-green-400/10' : 
                  isFifth ? 'from-purple-400/10' : 
                  isThird ? 'from-red-400/10' : 
                  isSixth ? 'from-yellow-400/10' : 
                  isSeventh ? 'from-orange-400/10' : 
                  isEighth ? 'from-blue-500/10' : 
                  isNinth ? 'from-gray-400/10' : 
                  'from-primary/10'
                } to-transparent group-hover:opacity-70 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-lg ${
                    isFirst ? 'bg-blue-400/20' : 
                    isFourth ? 'bg-green-700/20' : 
                    isSecond ? 'bg-green-400/20' : 
                    isFifth ? 'bg-purple-400/20' : 
                    isThird ? 'bg-red-400/20' : 
                    isSixth ? 'bg-yellow-400/20' : 
                    isSeventh ? 'bg-orange-400/20' : 
                    isEighth ? 'bg-blue-500/20' : 
                    isNinth ? 'bg-gray-400/20' : 
                    'bg-primary/20'
                  } flex items-center justify-center mb-6`}>
                    <div className={`w-6 h-6 rounded ${
                      isFirst ? 'bg-blue-400' : 
                      isFourth ? 'bg-green-700' : 
                      isSecond ? 'bg-green-400' : 
                      isFifth ? 'bg-purple-400' : 
                      isThird ? 'bg-red-400' : 
                      isSixth ? 'bg-yellow-400' : 
                      isSeventh ? 'bg-orange-400' : 
                      isEighth ? 'bg-blue-500' : 
                      isNinth ? 'bg-gray-400' : 
                      'bg-primary'
                    }`}></div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {isFirst ? 'Meteorological network' : 
                     isFourth ? 'Hosting' : 
                     isSecond ? 'Logo development' : 
                     isFifth ? 'Gaming' : 
                     isThird ? 'WI-FI & network planning' : 
                     isSixth ? 'Forums & tech tips' : 
                     isSeventh ? 'Radio' : 
                     isEighth ? 'Maps' : 
                     isNinth ? 'More...' : 
                     `Feature ${item}`}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {isFirst
                      ? 'The LIEPNET™ meteorological network in Latvia.' 
                      : isFourth
                      ? 'LIEPNET™ hosting services'
                      : isSecond
                      ? 'Does your business need a new refreshed look?'
                      : isFifth
                      ? 'Bored? Then check out our games!'
                      : isThird
                      ? 'Does your business have WI-FI or connectivity issues? Is your tech outdated?'
                      : isSixth
                      ? 'Explore the LIEPNET™ forums and tech tips!'
                      : isSeventh
                      ? 'LIEPNET™ Radio Player'
                      : isEighth
                      ? 'Explore the LIEPNET™ maps'
                      : isNinth
                      ? 'See more of our services'
                      : 'Discover powerful features that help you achieve more with less effort. Our solutions are designed for modern workflows.'
                    }
                  </p>
                  {isFirst && <Button variant="outline" className="mt-2">Explore</Button>}
                  {isFourth && <Button variant="outline" className="mt-2">Start</Button>}
                  {isSecond && <Button variant="outline" className="mt-2">Order</Button>}
                  {isFifth && <Button variant="outline" className="mt-2">Play</Button>}
                  {isThird && <Button variant="outline" className="mt-2">Request</Button>}
                  {isSixth && <Button variant="outline" className="mt-2">Explore</Button>}
                  {isSeventh && <Button variant="outline" className="mt-2">Listen</Button>}
                  {isEighth && <Button variant="outline" className="mt-2">Explore</Button>}
                  {isNinth && <Button variant="outline" className="mt-2">More...</Button>}
                </div>
              </div>
            );
          })}
        </div>

        {/* Accomplishments Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Accomplishments</h2>
            <p className="text-muted-foreground">Celebrating our milestones and achievements</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[{
            title: "Award Winner",
            desc: "Recognized for excellence in innovation and technology solutions."
          }, {
            title: "Global Reach",
            desc: "Serving clients across 50+ countries with premium services."
          }, {
            title: "Industry Leader",
            desc: "Setting new standards in digital transformation and growth."
          }].map((item, index) => <div key={index} className="bg-emerald-950/30 border border-emerald-900/20 rounded-2xl p-6 animate-fade-in relative overflow-hidden group hover:scale-105 transition-all duration-300" style={{
            animationDelay: `${(index + 4) * 0.1}s`
          }}>
                {/* Card gradient overlay */}
                <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-emerald-600/10 to-transparent group-hover:opacity-50 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Image placeholder */}
                  <div className="w-full h-32 bg-emerald-800/20 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-emerald-400/60 text-sm">Achievement Image</div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default ContentSection;