import { useEffect, useRef, useState, useCallback } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import aboutLogoSrc from "@/assets/liepnet-logo-about.webp";

const MISSION_BOXES = [
  {
    title: "LATVIA'S FIRST NON-PROFIT CROWDSOURCED METEOROLOGICAL NETWORK",
    description:
      "Our objective is to establish the first non-profit crowdsourced meteorological network in Latvia, which will offer real-time data at no cost and supplementary data for a nominal fee.",
  },
  {
    title: "AFFORDABLE HOSTING SOLUTIONS",
    description:
      "Our goal is to provide affordable hosting services for businesses and individuals, regardless of whether they require website hosting, radio station software hosting, or Discord bot hosting.",
  },
  {
    title: "ASSISTING BUSINESSES WITH TECHNICAL ISSUES",
    description:
      "We aim to assist Latvian companies in dealing with technological challenges and developing far better solutions; we can assist businesses with WI-FI and network planning.",
  },
];

const About = () => {
  const { t } = useLanguage();
  const logoContainerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    document.title = "About - LIEPNET™";
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <Header />

      <main className="pt-28 pb-20">
        <div className="container mx-auto px-6">
          {/* Big title - same style as Meteo page */}
          <h1
            className="text-7xl md:text-8xl lg:text-9xl font-bold text-center tracking-tight leading-none mb-16"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 80% 70% at 50% 100%, hsl(0,0%,100%) 0%, hsl(0,0%,60%) 50%, hsl(0,0%,30%) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            WHAT'S LIEPNET™?
          </h1>

          {/* Flashlight logo area */}
          <div className="flex justify-center mb-24">
            <div
              ref={logoContainerRef}
              className="relative w-full max-w-2xl aspect-square cursor-none select-none"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* The logo, masked by a radial gradient that follows the mouse */}
              <div
                className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
                style={{
                  maskImage: isHovering
                    ? `radial-gradient(circle 180px at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0) 100%)`
                    : "radial-gradient(circle 180px at 50% 50%, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 100%)",
                  WebkitMaskImage: isHovering
                    ? `radial-gradient(circle 180px at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0) 100%)`
                    : "radial-gradient(circle 180px at 50% 50%, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 100%)",
                }}
              >
                <img
                  src={aboutLogoSrc}
                  alt="LIEPNET logo"
                  className="w-[85%] h-[85%] object-contain opacity-90"
                  loading="eager"
                  decoding="async"
                />
              </div>

              {/* Subtle ambient glow at mouse position */}
              {isHovering && (
                <div
                  className="absolute pointer-events-none rounded-full"
                  style={{
                    width: 360,
                    height: 360,
                    left: `${mousePos.x * 100}%`,
                    top: `${mousePos.y * 100}%`,
                    transform: "translate(-50%, -50%)",
                    background:
                      "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
                  }}
                />
              )}
            </div>
          </div>

          {/* OUR MISSION section - matching Meteo station title style */}
          <div className="max-w-5xl mx-auto">
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight uppercase"
              style={{
                backgroundImage:
                  "linear-gradient(25deg, hsl(0,0%,100%), hsl(0,0%,70%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              OUR MISSION
            </h2>
            <div
              className="mt-3 h-px w-full"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0.4), rgba(255,255,255,0.05))",
              }}
            />

            {/* Mission boxes */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {MISSION_BOXES.map((box) => (
                <div
                  key={box.title}
                  className="rounded-xl p-6 flex flex-col transition-transform duration-500 ease-out hover:scale-[1.04]"
                  style={{
                    background:
                      "linear-gradient(160deg, hsl(140,30%,8%) 0%, hsl(150,40%,4%) 100%)",
                    border: "1px solid rgba(255,255,255,0.25)",
                  }}
                >
                  <h3
                    className="text-base font-bold tracking-wide uppercase leading-snug"
                    style={{
                      backgroundImage:
                        "linear-gradient(25deg, hsl(0,0%,100%), hsl(0,0%,75%))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {box.title}
                  </h3>
                  <p
                    className="mt-3 text-sm leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    {box.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
