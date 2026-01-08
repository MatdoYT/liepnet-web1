import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useRef, useEffect } from "react";
import meteoVideo from "@/assets/videos/meteo-card.webm";
import hostingVideo from "@/assets/videos/hosting-card.webm";
import networkVideo from "@/assets/videos/network-card.webm";
import logoVideo from "@/assets/videos/logo-card.webm";
import hostingImage from "@/assets/services/hosting-card.webp";
import networkImage from "@/assets/services/network-card.webp";
import logoImage from "@/assets/services/logo-card.webp";
import meteoImage from "@/assets/services/meteo-card.webp";

interface ServiceCard {
  title: string;
  link: string;
  backgroundImage: string;
  hoverVideo?: string;
}

const ServiceCards = () => {
  const { t } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const services: ServiceCard[] = [
    {
      title: t('hosting'),
      link: "/hosting",
      backgroundImage: hostingImage,
      hoverVideo: hostingVideo
    },
    {
      title: t('wifiNetworking'),
      link: "/network-planning",
      backgroundImage: networkImage,
      hoverVideo: networkVideo
    },
    {
      title: t('logoDesign'),
      link: "/logos",
      backgroundImage: logoImage,
      hoverVideo: logoVideo
    },
    {
      title: t('meteorologicalNetwork'),
      link: "/meteo",
      backgroundImage: meteoImage,
      hoverVideo: meteoVideo
    }
  ];

  // Handle video play/pause on hover
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (hoveredIndex === index) {
          video.play().catch(() => {});
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [hoveredIndex]);

  return (
    <section className="px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Divider with SERVICES label */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-xs tracking-widest text-muted-foreground/60 uppercase">Services</span>
          <div className="flex-1 h-px bg-muted-foreground/60" />
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer block"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background Image with lazy loading */}
              <img
                src={service.backgroundImage}
                alt=""
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover brightness-50 transition-all duration-300 group-hover:brightness-[0.6] group-hover:scale-105"
              />
              
              {/* Hover Video - only load when needed */}
              {service.hoverVideo && (
                <video
                  ref={el => videoRefs.current[index] = el}
                  src={service.hoverVideo}
                  className={`absolute inset-0 w-full h-full object-cover brightness-50 transition-opacity duration-300 group-hover:brightness-[0.6] ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                  muted
                  loop
                  playsInline
                  preload="none"
                />
              )}
              
              {/* Bottom Gradient - only 1/4 of card */}
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/70 to-transparent" />
              
              {/* Text - top left */}
              <div className="absolute top-4 left-4 z-10 transition-all duration-300 group-hover:blur-sm">
                <h3 className="text-sm md:text-base lg:text-lg font-semibold uppercase tracking-wide opacity-50 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  {service.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Divider with WHAT IS LIEPNET label */}
        <div className="flex items-center gap-4 mt-12">
          <span className="text-xs tracking-widest text-muted-foreground/60 uppercase">What is LIEPNET</span>
          <div className="flex-1 h-px bg-muted-foreground/60" />
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;