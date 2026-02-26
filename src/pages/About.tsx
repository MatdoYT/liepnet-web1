import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import aboutLogoSrc from "@/assets/liepnet-logo-about.webp";
import heroContentSrc from "@/assets/hero-content.jpg";
import liepnetLeaf from "@/assets/liepnet-leaf.webp";

const LOADER_DURATION = 3000;

const About = () => {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    document.title = "About - LIEPNET™";

    const fadeTimer = setTimeout(() => setFadeOut(true), LOADER_DURATION - 500);
    const loadTimer = setTimeout(() => setLoading(false), LOADER_DURATION);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(loadTimer);
    };
  }, []);

  if (loading) {
    return (
      <div
        className={`fixed inset-0 bg-background flex items-center justify-center z-50 transition-opacity duration-500 ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
        <img 
          src={liepnetLeaf} 
          alt="" 
          className="w-12 h-12 animate-spin opacity-70"
          style={{ animationDuration: '1.5s' }}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-black">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[70vh]">
            {/* Left: Image */}
            <div className="relative animate-fade-in">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={heroContentSrc}
                  alt="About LIEPNET"
                  className="w-full h-auto object-cover aspect-[4/3]"
                  loading="eager"
                  decoding="async"
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>

            {/* Right: Text */}
            <div className="space-y-6 animate-fade-in animation-delay-200">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {t("whatIsTitle")}
              </h1>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                {t("whatIsContent")}
              </p>
              <div className="pt-6 border-t border-white/10">
                <p className="text-base text-white/50 italic">
                  "{t("footerQuote")}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
