import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import aboutLogoSrc from "@/assets/liepnet-logo-about.webp";
import heroContentSrc from "@/assets/hero-content.jpg";

const LOADER_DURATION = 3000; // 3 seconds

const About = () => {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    document.title = "About - LIEPNET™";

    // Start fade out slightly before loader ends for smooth transition
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
        className={`fixed inset-0 bg-black flex items-center justify-center z-50 transition-opacity duration-500 ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Rockstar-style ring loader around logo */}
        <div className="relative w-48 h-48 md:w-64 md:h-64">
          {/* Rotating ring stroke */}
          <svg
            className="absolute inset-0 w-full h-full animate-spin-slow"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="hsl(var(--about-stroke))"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="72 217"
              className="opacity-80"
            />
          </svg>

          {/* Logo with stroke only (transparent fill, white stroke) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={aboutLogoSrc}
              alt="LIEPNET Logo"
              className="w-24 h-24 md:w-32 md:h-32 object-contain opacity-20"
              style={{
                filter: "brightness(0) invert(1)",
              }}
            />
          </div>
        </div>
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
