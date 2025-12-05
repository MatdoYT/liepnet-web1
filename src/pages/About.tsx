import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  MapPin, Target, Trophy, Lightbulb, Shield, Rocket, 
  Globe, Leaf, ArrowDown, Sparkles, Zap, Users 
} from "lucide-react";
import liepnetHero from "@/assets/liepnet-hero.png";

// Hero section with parallax and scroll-scrubbed animation
const ParallaxHero = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, 1 - (rect.bottom / window.innerHeight)));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden"
      style={{ willChange: 'transform' }}
    >
      {/* Background layer - slowest parallax */}
      <div 
        className="absolute inset-0 bg-background"
        style={{ 
          transform: `translateY(${scrollProgress * 50}px) scale(${1 + scrollProgress * 0.1})`,
          opacity: 1 - scrollProgress * 0.3
        }}
      />
      
      {/* Image layer - medium parallax */}
      <div
        className="absolute inset-0"
        style={{ 
          transform: `translateY(${scrollProgress * 100}px) scale(${1 + scrollProgress * 0.15})`,
          opacity: 1 - scrollProgress * 0.5
        }}
      >
        <img 
          src={liepnetHero} 
          alt="LIEPNET Hero" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, transparent 0%, transparent 66.67%, hsl(var(--background)) 100%)`,
          opacity: 0.5 + scrollProgress * 0.5
        }}
      />

      {/* Scroll progress indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
        <div 
          className="h-full bg-primary transition-all"
          style={{ 
            width: `${scrollProgress * 100}%`,
            transition: 'width 100ms linear'
          }}
        />
      </div>
    </section>
  );
};

// Staggered card reveal with hover effects
const AnimatedCard = ({ 
  icon: Icon, 
  title, 
  content, 
  color,
  delay = 0,
  index = 0
}: {
  icon: any;
  title: string;
  content: string;
  color: string;
  delay?: number;
  index?: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * 10, y: -x * 10 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      className="group relative"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: `all var(--motion-slow) var(--ease-out-quad) ${delay}ms`,
        willChange: 'transform, opacity'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="relative bg-card/80 backdrop-blur-lg border border-border/50 rounded-3xl p-8 hover-lift overflow-hidden"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform var(--motion-fast) var(--ease-spring)',
          boxShadow: 'var(--shadow-md)'
        }}
      >

        <div className="relative flex flex-col items-center text-center space-y-4">
          <div className="p-4 rounded-2xl bg-muted group-hover:scale-110 transition-transform duration-300">
            <Icon className={`w-8 h-8 text-foreground`} />
          </div>
          <h3 className="text-xl font-bold text-foreground group-hover:text-foreground transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
            {content}
          </p>
        </div>

      </div>
    </div>
  );
};

// Sticky pinned section with scroll-driven animation
const StickySection = () => {
  const { t } = useLanguage();
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        const scrolled = Math.abs(rect.top);
        const total = sectionHeight - windowHeight;
        setProgress(Math.min(1, scrolled / total));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    { icon: Globe, label: t('achievement1Title'), color: 'text-foreground' },
    { icon: Shield, label: t('achievement2Title'), color: 'text-foreground' },
    { icon: Sparkles, label: t('achievement3Title'), color: 'text-foreground' },
    { icon: Zap, label: 'Innovation', color: 'text-foreground' }
  ];

  const currentStep = Math.floor(progress * steps.length);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[300vh] bg-background"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <div className="w-full max-w-md mx-auto h-2 bg-border/30 rounded-full overflow-hidden">
              <div 
                className="h-full bg-foreground transition-all duration-300"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {steps.map((step, index) => {
              const isActive = index <= currentStep;
              const isPast = index < currentStep;
              
              return (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-4"
                  style={{
                    opacity: isActive ? 1 : 0.3,
                    transform: isActive ? 'scale(1)' : 'scale(0.9)',
                    transition: 'all var(--motion-normal) var(--ease-spring)'
                  }}
                >
                  <div 
                    className={`p-6 rounded-2xl bg-card/80 backdrop-blur border ${
                      isActive ? 'border-foreground/50' : 'border-border/30'
                    } relative`}
                    style={{
                      boxShadow: isActive ? 'var(--shadow-lg)' : 'var(--shadow-sm)'
                    }}
                  >
                    <step.icon className={`w-12 h-12 ${step.color}`} />
                    {isPast && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-foreground rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-background" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <p className={`text-sm font-medium ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {step.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// Morphing button/card transition
const MorphingCTA = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="flex justify-center items-center min-h-[60vh] py-20">
      <div className="relative">
        <div
          className="relative cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            width: isExpanded ? '600px' : '200px',
            height: isExpanded ? '400px' : '60px',
            transition: 'all var(--motion-slow) var(--ease-spring)',
            maxWidth: '90vw'
          }}
        >
          <div className="absolute inset-0 bg-foreground rounded-3xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
            {!isExpanded ? (
              <div className="flex items-center justify-center h-full">
                <span className="text-background font-bold text-lg">Learn More</span>
              </div>
            ) : (
              <div className="p-8 text-background space-y-4 opacity-0 animate-in fade-in duration-500" style={{ animationDelay: '200ms', opacity: 1 }}>
                <h3 className="text-2xl font-bold">Why Choose LIEPNET?</h3>
                <p className="text-background/90">
                  {t('whyChooseTitle')}
                </p>
                <div className="flex gap-4 mt-6">
                  <Users className="w-6 h-6" />
                  <Target className="w-6 h-6" />
                  <Rocket className="w-6 h-6" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = 'LIEPNET™';
  }, []);

  const achievements = [
    {
      icon: Globe,
      title: t('achievement1Title'),
      content: t('achievement1Content'),
      color: 'text-foreground'
    },
    {
      icon: Shield,
      title: t('achievement2Title'),
      content: t('achievement2Content'),
      color: 'text-foreground'
    },
    {
      icon: Lightbulb,
      title: t('achievement3Title'),
      content: t('achievement3Content'),
      color: 'text-foreground'
    }
  ];

  const plans = [
    {
      icon: Target,
      title: t('plan1Title'),
      content: t('plan1Content'),
      color: 'text-foreground'
    },
    {
      icon: Leaf,
      title: t('plan2Title'),
      content: t('plan2Content'),
      color: 'text-foreground'
    },
    {
      icon: Rocket,
      title: t('plan3Title'),
      content: t('plan3Content'),
      color: 'text-foreground'
    }
  ];

  const reasons = [
    {
      icon: Shield,
      title: t('reason1Title'),
      content: t('reason1Content'),
      color: 'text-foreground'
    },
    {
      icon: Lightbulb,
      title: t('reason2Title'),
      content: t('reason2Content'),
      color: 'text-foreground'
    },
    {
      icon: MapPin,
      title: t('reason3Title'),
      content: t('reason3Content'),
      color: 'text-foreground'
    },
    {
      icon: Trophy,
      title: t('reason4Title'),
      content: t('reason4Content'),
      color: 'text-foreground'
    }
  ];

  return (
    <div className="bg-background text-foreground overflow-x-hidden pt-20">
      <Header />
      
      {/* Hero with parallax */}
      <ParallaxHero />

      {/* What is LIEPNET */}
      <section className="min-h-screen flex items-center justify-center py-20 bg-background">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground">
              {t('whatIsTitle')}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {t('whatIsContent')}
            </p>
          </div>
          
          <div className="relative flex justify-center">
            <div className="w-80 h-80 rounded-full bg-card border border-border flex items-center justify-center animate-float">
              <Globe className="w-32 h-32 text-foreground" />
            </div>
          </div>
        </div>
      </section>

      {/* Sticky scroll section */}
      <StickySection />

      {/* Achievements with staggered reveal */}
      <section className="min-h-screen flex items-center justify-center py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
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
                delay={index * 60}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Morphing CTA */}
      <section className="bg-background">
        <MorphingCTA />
      </section>

      {/* Future Plans */}
      <section className="min-h-screen flex items-center justify-center py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
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
                delay={index * 60}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose LIEPNET */}
      <section className="min-h-screen flex items-center justify-center py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
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
                delay={index * 50}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
