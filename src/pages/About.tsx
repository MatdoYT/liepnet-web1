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
                "radial-gradient(ellipse 80% 70% at 50% 0%, hsl(0,0%,100%) 0%, hsl(0,0%,60%) 50%, hsl(0,0%,30%) 100%)",
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
              className="relative w-full max-w-6xl aspect-[2/1] cursor-none select-none"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* The logo, masked by a radial gradient that follows the mouse */}
              <div
                className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
                style={{
                  maskImage: isHovering
                    ? `radial-gradient(circle 320px at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.08) 100%)`
                    : "radial-gradient(circle 320px at 50% 50%, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.08) 100%)",
                  WebkitMaskImage: isHovering
                    ? `radial-gradient(circle 320px at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.08) 100%)`
                    : "radial-gradient(circle 320px at 50% 50%, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.08) 100%)",
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
                    width: 640,
                    height: 640,
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
                      "linear-gradient(160deg, hsl(150,25%,16%) 0%, hsl(155,40%,3%) 100%)",
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

          {/* OUR HISTORY section */}
          <div className="max-w-5xl mx-auto mt-24">
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight uppercase"
              style={{
                backgroundImage:
                  "linear-gradient(25deg, hsl(0,0%,100%), hsl(0,0%,70%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              OUR HISTORY
            </h2>
            <div
              className="mt-3 h-px w-full"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0.4), rgba(255,255,255,0.05))",
              }}
            />

            {/* Founded title - radial gradient style like main title */}
            <h3
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-center tracking-tight leading-none mt-20 mb-20"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse 80% 70% at 50% 0%, hsl(0,0%,100%) 0%, hsl(0,0%,60%) 50%, hsl(0,0%,30%) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              FOUNDED IN FEBRUARY OF 2025
            </h3>

            {/* Center-line alternating timeline */}
            <div className="relative">
              {/* Center vertical line */}
              <div
                className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.3) 5%, rgba(255,255,255,0.3) 95%, transparent 100%)",
                }}
              />

              {[
                { date: "February 2025", text: "LIEPNET™ was founded" },
                { date: "February 21st, 2025", text: "First LIEPNET™ official server was made" },
                { date: "April 13th, 2025", text: "The LIEPNET.ID.LV website was created" },
                { date: "June 9th, 2025", text: "The LIEPNET™ Weather project was created" },
                { date: "August 8th, 2025", text: "The LIEPNET™ SERVER 1 was installed" },
                { date: "August 19th, 2025", text: "The LIEPNET.EU website was created" },
                { date: "September 25th, 2025", text: "AUDIOBOOKSHELF.LIEPNET.ID.LV was published" },
                { date: "October 13th, 2025", text: "AZURACAST.LIEPNET.ID.LV was published" },
                { date: "November 2nd, 2025", text: "The LIEPNET™ SERVER 1 was upgraded from 16 GB RAM to 96 GB RAM capacity" },
                { date: "December 16th, 2025", text: "Major LIEPNET™ system downtime" },
                { date: "January 8th, 2026", text: "LIEPNET™ acquired LIEPNET.CLOUD" },
              ].map((item, i, arr) => {
                const isRight = i % 2 === 0;
                const isLast = i === arr.length - 1;

                return (
                  <div
                    key={i}
                    className="relative flex items-start mb-12 last:mb-0"
                    style={{ minHeight: 60 }}
                  >
                    {/* Left content */}
                    <div className={`w-1/2 pr-8 ${!isRight ? "flex flex-col items-end text-right" : ""}`}>
                      {!isRight && (
                        <>
                          <p
                            className="text-xs font-semibold tracking-wider uppercase"
                            style={{ color: "rgba(255,255,255,0.45)" }}
                          >
                            {item.date}
                          </p>
                          <p
                            className="mt-1 text-sm md:text-base font-medium"
                            style={{ color: "rgba(255,255,255,0.8)" }}
                          >
                            {item.text}
                          </p>
                        </>
                      )}
                    </div>

                    {/* Center dot */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-1 z-10">
                      <div
                        className="w-[11px] h-[11px] rounded-full relative"
                        style={{
                          background: isLast ? "white" : "hsl(0, 0%, 50%)",
                          boxShadow: isLast ? "0 0 8px rgba(255,255,255,0.6)" : "none",
                        }}
                      />
                      {isLast && (
                        <>
                          <div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[11px] h-[11px] rounded-full"
                            style={{
                              border: "1.5px solid rgba(255,255,255,0.6)",
                              animation: "timeline-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
                            }}
                          />
                          <div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[11px] h-[11px] rounded-full"
                            style={{
                              border: "1.5px solid rgba(255,255,255,0.6)",
                              animation: "timeline-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite 1s",
                            }}
                          />
                        </>
                      )}
                    </div>

                    {/* Right content */}
                    <div className={`w-1/2 pl-8 ${isRight ? "" : ""}`}>
                      {isRight && (
                        <>
                          <p
                            className="text-xs font-semibold tracking-wider uppercase"
                            style={{ color: "rgba(255,255,255,0.45)" }}
                          >
                            {item.date}
                          </p>
                          <p
                            className="mt-1 text-sm md:text-base font-medium"
                            style={{ color: "rgba(255,255,255,0.8)" }}
                          >
                            {item.text}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Timeline ping keyframes */}
          <style>{`
            @keyframes timeline-ping {
              0% {
                transform: translate(-50%, -50%) scale(1);
                opacity: 0.8;
              }
              100% {
                transform: translate(-50%, -50%) scale(4);
                opacity: 0;
              }
            }
          `}</style>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
