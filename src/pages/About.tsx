import { useLanguage } from "@/contexts/LanguageContext";
import { useAdvancedScrollAnimation, useParallaxScroll } from "@/hooks/useAdvancedScrollAnimation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Target, Trophy, Lightbulb, Shield, Rocket, Globe, Leaf, ArrowDown } from "lucide-react";

const FullScreenSection = ({ 
  children, 
  className = "",
  background = "bg-background"
}: { 
  children: React.ReactNode; 
  className?: string;
  background?: string;
}) => {
  return (
    <section className={`min-h-screen flex items-center justify-center relative ${background} ${className}`}>
      {children}
    </section>
  );
};

const AnimatedCard = ({ 
  icon: Icon, 
  title, 
  content, 
  color,
  delay = 0,
  animationType = 'slideUp'
}: {
  icon: any;
  title: string;
  content: string;
  color: string;
  delay?: number;
  animationType?: 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn';
}) => {
  const { ref, animationClass } = useAdvancedScrollAnimation({ animationType });
  
  return (
    <div
      ref={ref}
      className={`${animationClass} bg-card/80 backdrop-blur-lg border border-border/50 rounded-3xl p-8 hover:scale-105 hover:border-primary/50 transition-all duration-500 group`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className={`p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent group-hover:scale-110 transition-transform duration-300`}>
          <Icon className={`w-8 h-8 ${color}`} />
        </div>
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
          {content}
        </p>
      </div>
    </div>
  );
};

const About = () => {
  const { t } = useLanguage();
  const scrollY = useParallaxScroll();
  
  const { ref: heroRef, animationClass: heroAnimation } = useAdvancedScrollAnimation({ animationType: 'fadeIn' });
  const { ref: whatIsRef, animationClass: whatIsAnimation } = useAdvancedScrollAnimation({ animationType: 'slideUp' });
  const { ref: meaningRef, animationClass: meaningAnimation } = useAdvancedScrollAnimation({ animationType: 'slideRight' });

  const achievements = [
    {
      icon: Globe,
      title: t('achievement1Title'),
      content: t('achievement1Content'),
      color: 'text-blue-400'
    },
    {
      icon: Shield,
      title: t('achievement2Title'),
      content: t('achievement2Content'),
      color: 'text-emerald-400'
    },
    {
      icon: Lightbulb,
      title: t('achievement3Title'),
      content: t('achievement3Content'),
      color: 'text-purple-400'
    }
  ];

  const plans = [
    {
      icon: Target,
      title: t('plan1Title'),
      content: t('plan1Content'),
      color: 'text-orange-400'
    },
    {
      icon: Leaf,
      title: t('plan2Title'),
      content: t('plan2Content'),
      color: 'text-green-400'
    },
    {
      icon: Rocket,
      title: t('plan3Title'),
      content: t('plan3Content'),
      color: 'text-pink-400'
    }
  ];

  const reasons = [
    {
      icon: Shield,
      title: t('reason1Title'),
      content: t('reason1Content'),
      color: 'text-blue-400'
    },
    {
      icon: Lightbulb,
      title: t('reason2Title'),
      content: t('reason2Content'),
      color: 'text-purple-400'
    },
    {
      icon: MapPin,
      title: t('reason3Title'),
      content: t('reason3Content'),
      color: 'text-emerald-400'
    },
    {
      icon: Trophy,
      title: t('reason4Title'),
      content: t('reason4Content'),
      color: 'text-yellow-400'
    }
  ];

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Header />
      
      {/* Hero Section - Full Screen */}
      <FullScreenSection className="relative" background="bg-gradient-to-br from-background via-primary/5 to-background">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            background: 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)'
          }}
        />
        
        <div ref={heroRef} className={`${heroAnimation} container mx-auto px-6 text-center relative z-10`}>
          <div className="space-y-8">
            <h1 className="text-5xl md:text-8xl font-bold bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent animate-float">
              {t('aboutTitle')}
            </h1>
            <p className="text-xl md:text-3xl text-muted-foreground max-w-4xl mx-auto">
              {t('aboutSubtitle')}
            </p>
            <div className="flex items-center justify-center space-x-3 text-emerald-400">
              <MapPin className="w-6 h-6" />
              <span className="text-lg font-medium">{t('countryOrigin')}</span>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-primary" />
          </div>
        </div>
      </FullScreenSection>

      {/* What is LIEPNET - Full Screen */}
      <FullScreenSection background="bg-gradient-to-br from-card/50 to-background">
        <div ref={whatIsRef} className={`${whatIsAnimation} container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center`}>
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold text-primary">
              {t('whatIsTitle')}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {t('whatIsContent')}
            </p>
          </div>
          
          <div 
            className="relative"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center backdrop-blur-sm border border-primary/30">
              <Globe className="w-32 h-32 text-primary animate-float" />
            </div>
          </div>
        </div>
      </FullScreenSection>

      {/* What LIEPNET means - Full Screen */}
      <FullScreenSection background="bg-gradient-to-br from-background to-primary/5">
        <div ref={meaningRef} className={`${meaningAnimation} container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center`}>
          <div 
            className="order-2 lg:order-1 relative"
            style={{ transform: `translateY(${scrollY * -0.1}px)` }}
          >
            <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-emerald-500/20 via-blue-500/20 to-purple-500/20 flex items-center justify-center backdrop-blur-sm border border-emerald-400/30">
              <Lightbulb className="w-32 h-32 text-emerald-400 animate-float" />
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold text-primary">
              {t('whatMeansTitle')}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {t('whatMeansContent')}
            </p>
          </div>
        </div>
      </FullScreenSection>

      {/* Achievements - Full Screen */}
      <FullScreenSection background="bg-gradient-to-br from-card/30 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-8">
              {t('whatDoneTitle')}
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <AnimatedCard
                key={index}
                icon={achievement.icon}
                title={achievement.title}
                content={achievement.content}
                color={achievement.color}
                delay={index * 200}
                animationType={index % 2 === 0 ? 'slideUp' : 'scaleIn'}
              />
            ))}
          </div>
        </div>
      </FullScreenSection>

      {/* Future Plans - Full Screen */}
      <FullScreenSection background="bg-gradient-to-br from-background to-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-8">
              {t('whatPlansTitle')}
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <AnimatedCard
                key={index}
                icon={plan.icon}
                title={plan.title}
                content={plan.content}
                color={plan.color}
                delay={index * 200}
                animationType={index % 3 === 0 ? 'slideLeft' : index % 3 === 1 ? 'slideUp' : 'slideRight'}
              />
            ))}
          </div>
        </div>
      </FullScreenSection>

      {/* Why Choose LIEPNET - Full Screen */}
      <FullScreenSection background="bg-gradient-to-br from-primary/10 via-background to-purple-500/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-8">
              {t('whyChooseTitle')}
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {reasons.map((reason, index) => (
              <AnimatedCard
                key={index}
                icon={reason.icon}
                title={reason.title}
                content={reason.content}
                color={reason.color}
                delay={index * 150}
                animationType={index % 2 === 0 ? 'slideUp' : 'scaleIn'}
              />
            ))}
          </div>
        </div>
      </FullScreenSection>

      <Footer />
    </div>
  );
};

export default About;