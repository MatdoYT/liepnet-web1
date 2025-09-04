import { Button } from "@/components/ui/button";
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
      {/* Gradient from banner to content */}
      <div className="banner-glow"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main content columns */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Column */}
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground">{t('whatIsLiepnet')}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{t('liepnetDescription')}</p>
            
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
                    {isFirst ? t('meteorologicalNetwork') : 
                     isFourth ? t('hosting') : 
                     isSecond ? t('logoDesign') : 
                     isFifth ? t('gaming') : 
                     isThird ? t('wifiNetworking') : 
                     isSixth ? t('forumsTechTips') : 
                     isSeventh ? t('radio') : 
                     isEighth ? t('maps') : 
                     isNinth ? t('more') : 
                     `Feature ${item}`}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {isFirst
                      ? t('meteorologicalDesc')
                      : isFourth
                      ? t('hostingDesc')
                      : isSecond
                      ? t('logoDesc')
                      : isFifth
                      ? t('gamingDesc')
                      : isThird
                      ? t('wifiDesc')
                      : isSixth
                      ? t('forumsDesc')
                      : isSeventh
                      ? t('radioDesc')
                      : isEighth
                      ? t('mapsDesc')
                      : isNinth
                      ? t('moreDesc')
                      : 'Discover powerful features that help you achieve more with less effort. Our solutions are designed for modern workflows.'
                    }
                  </p>
                  {isFirst && <Button variant="outline" className="mt-2">{t('explore')}</Button>}
                  {isFourth && <Button variant="outline" className="mt-2">{t('start')}</Button>}
                  {isSecond && <Button variant="outline" className="mt-2">{t('order')}</Button>}
                  {isFifth && <Button variant="outline" className="mt-2" onClick={() => window.location.href = '/gaming'}>{t('play')}</Button>}
                  {isThird && <Button variant="outline" className="mt-2">{t('request')}</Button>}
                  {isSixth && <Button variant="outline" className="mt-2">{t('explore')}</Button>}
                  {isSeventh && <Button variant="outline" className="mt-2">{t('listen')}</Button>}
                  {isEighth && <Button variant="outline" className="mt-2">{t('explore')}</Button>}
                  {isNinth && <Button variant="outline" className="mt-2">{t('more')}</Button>}
                </div>
              </div>
            );
          })}
        </div>

        {/* Accomplishments Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">{t('accomplishments')}</h2>
            <p className="text-muted-foreground">{t('accomplishmentsDesc')}</p>
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
          }].map((item, index) => <div key={index} className="bg-emerald-950/30 border border-emerald-900/20 rounded-2xl p-6 animate-fade-in relative overflow-hidden group hover:scale-105 transition-all duration-300" style={{
            animationDelay: `${(index + 4) * 0.1}s`
          }}>
                {/* Card gradient overlay */}
                <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-emerald-600/10 to-transparent group-hover:opacity-50 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Image */}
                  <div className="w-full aspect-square bg-emerald-800/20 rounded-lg mb-4 overflow-hidden">
                    {index === 0 ? (
                      <img 
                        src="/lovable-uploads/53ab33fd-314e-49bc-80a1-ec4006d71675.png" 
                        alt="Meteorological station" 
                        className="w-full h-full object-cover" 
                      />
                    ) : index === 1 ? (
                      <img 
                        src="/lovable-uploads/ab598fe3-b0e7-47e8-8010-d1382caf53d6.png" 
                        alt="Global network hosting infrastructure" 
                        className="w-full h-full object-cover" 
                      />
                    ) : (
                      <img 
                        src="/lovable-uploads/d332fcb6-19fe-479b-a90f-3e538575b0a9.png" 
                        alt="LIEPNET™ Services - Gaming and technology" 
                        className="w-full h-full object-cover" 
                      />
                    )}
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