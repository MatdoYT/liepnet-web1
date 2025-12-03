import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface ServiceCard {
  title: string;
  link: string;
  backgroundImage: string;
}

const ServiceCards = () => {
  const { t } = useLanguage();

  const services: ServiceCard[] = [
    {
      title: t('hosting'),
      link: "/hosting",
      backgroundImage: "/lovable-uploads/ab598fe3-b0e7-47e8-8010-d1382caf53d6.png"
    },
    {
      title: t('wifiNetworking'),
      link: "/network-planning",
      backgroundImage: "/lovable-uploads/d332fcb6-19fe-479b-a90f-3e538575b0a9.png"
    },
    {
      title: t('logoDesign'),
      link: "/logos",
      backgroundImage: "/lovable-uploads/53ab33fd-314e-49bc-80a1-ec4006d71675.png"
    },
    {
      title: t('meteorologicalNetwork'),
      link: "/meteo",
      backgroundImage: "/lovable-uploads/4ebce7aa-c438-4114-8c2a-b420e2c6453b.png"
    }
  ];

  return (
    <section className="px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Divider with SERVICES label */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-xs tracking-widest text-muted-foreground uppercase">Services</span>
          <div className="flex-1 h-px bg-muted-foreground/30" />
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer block"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center brightness-50 transition-all duration-300 group-hover:brightness-[0.6] group-hover:scale-105"
                style={{ backgroundImage: `url(${service.backgroundImage})` }}
              />
              
              {/* Bottom Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              
              {/* Text - top left */}
              <div className="absolute top-4 left-4 z-10">
                <h3 className="text-sm md:text-base lg:text-lg font-semibold text-foreground uppercase tracking-wide">
                  {service.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
