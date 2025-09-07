import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Target, Trophy, Lightbulb, Shield, Rocket, Globe, Leaf } from "lucide-react";

const AnimatedSection = ({ 
  children, 
  className = "", 
  delay = 0 
}: { 
  children: React.ReactNode; 
  className?: string; 
  delay?: number;
}) => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const About = () => {
  const { t } = useLanguage();

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
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              {t('aboutTitle')}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              {t('aboutSubtitle')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What is LIEPNET */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              {t('whatIsTitle')}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
              {t('whatIsContent')}
            </p>
            <div className="flex items-center justify-center space-x-2 text-emerald-400">
              <MapPin className="w-5 h-5" />
              <span className="text-lg font-medium">{t('countryOrigin')}</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What LIEPNET means */}
      <section className="py-16 px-6 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              {t('whatMeansTitle')}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {t('whatMeansContent')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What LIEPNET has done */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              {t('whatDoneTitle')}
            </h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <AnimatedSection key={index} delay={index * 200}>
                <div className="bg-card border border-border rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 hover:border-primary/50">
                  <achievement.icon className={`w-12 h-12 mx-auto mb-4 ${achievement.color}`} />
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.content}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What LIEPNET plans to do */}
      <section className="py-16 px-6 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              {t('whatPlansTitle')}
            </h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <AnimatedSection key={index} delay={index * 200}>
                <div className="bg-card border border-border rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 hover:border-primary/50">
                  <plan.icon className={`w-12 h-12 mx-auto mb-4 ${plan.color}`} />
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    {plan.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {plan.content}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose LIEPNET */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              {t('whyChooseTitle')}
            </h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <div className="bg-card border border-border rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 hover:border-primary/50">
                  <reason.icon className={`w-10 h-10 mx-auto mb-3 ${reason.color}`} />
                  <h3 className="text-lg font-bold mb-3 text-foreground">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {reason.content}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;