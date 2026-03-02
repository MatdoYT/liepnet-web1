import { useEffect, useRef, useState, useCallback } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import aboutLogoSrc from "@/assets/liepnet-logo-about.webp";

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

  const missionBoxes = [
    { title: t('aboutMission1Title'), description: t('aboutMission1Desc') },
    { title: t('aboutMission2Title'), description: t('aboutMission2Desc') },
    { title: t('aboutMission3Title'), description: t('aboutMission3Desc') },
  ];

  const historyItems = [
    { date: t('aboutHistoryDate1'), text: t('aboutHistoryText1') },
    { date: t('aboutHistoryDate2'), text: t('aboutHistoryText2') },
    { date: t('aboutHistoryDate3'), text: t('aboutHistoryText3') },
    { date: t('aboutHistoryDate4'), text: t('aboutHistoryText4') },
    { date: t('aboutHistoryDate5'), text: t('aboutHistoryText5') },
    { date: t('aboutHistoryDate6'), text: t('aboutHistoryText6') },
    { date: t('aboutHistoryDate7'), text: t('aboutHistoryText7') },
    { date: t('aboutHistoryDate8'), text: t('aboutHistoryText8') },
    { date: t('aboutHistoryDate9'), text: t('aboutHistoryText9') },
    { date: t('aboutHistoryDate10'), text: t('aboutHistoryText10') },
    { date: t('aboutHistoryDate11'), text: t('aboutHistoryText11') },
  ];

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <Header />

      <main className="pt-28 pb-20">
        <div className="container mx-auto px-6">
          {/* Big title */}
          <h1
            className="text-7xl md:text-8xl lg:text-9xl font-bold text-center tracking-tight leading-none mb-16"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 80% 70% at 50% 0%, hsl(0,0%,100%) 0%, hsl(0,0%,60%) 50%, hsl(0,0%,30%) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {t('aboutWhatsLiepnet')}
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

          {/* OUR MISSION section */}
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
              {t('aboutOurMission')}
            </h2>
            <div
              className="mt-3 h-px w-full"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0.4), rgba(255,255,255,0.05))",
              }}
            />

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {missionBoxes.map((box) => (
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
              {t('aboutOurHistory')}
            </h2>
            <div
              className="mt-3 h-px w-full"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0.4), rgba(255,255,255,0.05))",
              }}
            />

            <h3
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-center tracking-tight leading-none mt-20 mb-20"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse 80% 70% at 50% 0%, hsl(0,0%,100%) 0%, hsl(0,0%,60%) 50%, hsl(0,0%,30%) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {t('aboutFoundedIn')}
            </h3>

            {/* Center-line alternating timeline */}
            <div className="relative">
              <div
                className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.3) 5%, rgba(255,255,255,0.3) 95%, transparent 100%)",
                }}
              />

              {historyItems.map((item, i, arr) => {
                const isRight = i % 2 === 0;
                const isLast = i === arr.length - 1;

                return (
                  <div
                    key={i}
                    className="relative flex items-start mb-12 last:mb-0"
                    style={{ minHeight: 60 }}
                  >
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

                    <div className={`w-1/2 pl-8`}>
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