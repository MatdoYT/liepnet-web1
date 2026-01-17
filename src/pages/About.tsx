import { useEffect, useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import liepnetLogoWhite from "@/assets/liepnet-logo-white.webp";

const clamp01 = (n: number) => Math.max(0, Math.min(1, n));

const About = () => {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);
  const [vh, setVh] = useState(() => (typeof window !== "undefined" ? window.innerHeight : 0));

  useEffect(() => {
    document.title = "About - LIEPNET™";

    const onScroll = () => setScrollY(window.scrollY);
    const onResize = () => setVh(window.innerHeight);

    onResize();
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Each “area” lasts a bit longer than a screen, with a *small* transition window at the end.
  const sectionCount = 5;
  const segmentPx = Math.max(1, Math.floor(vh * 1.15)); // faster than before
  const fadeFrac = 0.08; // only fade in the last ~8% (so it won’t trigger on tiny scrolls)

  const backgrounds = useMemo(
    () => ["about-bg-white", "about-bg-black", "about-bg-vision", "about-bg-origins", "about-bg-black"] as const,
    []
  );

  const getSectionProgress = (index: number) => {
    const start = index * segmentPx;
    const p = (scrollY - start) / segmentPx;
    return clamp01(p);
  };

  const getHoldOpacity = (p: number) => {
    const inP = clamp01(p / fadeFrac);
    const outP = clamp01((1 - p) / fadeFrac);
    return Math.min(inP, outP);
  };

  // Background crossfade only near the end of each segment.
  const bgIndex = Math.min(sectionCount - 1, Math.max(0, Math.floor(scrollY / segmentPx)));
  const intra = (scrollY - bgIndex * segmentPx) / segmentPx;
  const bgFade = clamp01((intra - (1 - fadeFrac)) / fadeFrac);

  const bgA = backgrounds[bgIndex];
  const bgB = backgrounds[Math.min(sectionCount - 1, bgIndex + 1)];

  // Animations per section
  const introP = getSectionProgress(0);
  const introOpacity = getHoldOpacity(introP);

  const whatP = getSectionProgress(1);
  const whatOpacity = getHoldOpacity(whatP);
  const whatTextT = clamp01((whatP - 0.12) / 0.28);
  const whatImgT = clamp01((whatP - 0.22) / 0.28);
  const whatTextX = 120 * (1 - whatTextT);
  const whatImgX = -80 * (1 - whatImgT);

  const visionP = getSectionProgress(2);
  const visionOpacity = getHoldOpacity(visionP);

  const originsP = getSectionProgress(3);
  const originsOpacity = getHoldOpacity(originsP);

  const thanksP = getSectionProgress(4);
  const thanksOpacity = getHoldOpacity(thanksP);

  return (
    <div className="relative overflow-x-hidden">
      {/* Fixed background layer with controlled crossfade */}
      <div className="fixed inset-0 -z-10">
        <div className={`absolute inset-0 ${bgA}`} />
        <div className={`absolute inset-0 ${bgB} transition-opacity duration-150`} style={{ opacity: bgFade }} />
      </div>

      <Header />

      <main className="relative">
        {/* Section 1 */}
        <section style={{ height: segmentPx }} className="relative">
          <div className="sticky top-0 h-screen flex items-center justify-center pt-20">
            <div className="flex flex-col items-center justify-center gap-10" style={{ opacity: introOpacity }}>
              <img
                src={liepnetLogoWhite}
                alt="LIEPNET Logo"
                className="w-72 md:w-[28rem] h-auto object-contain animate-fade-in"
                style={{ filter: "invert(1)" }}
              />
              <div className="animate-bounce">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section style={{ height: segmentPx }} className="relative">
          <div className="sticky top-0 h-screen flex items-center justify-center">
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center" style={{ opacity: whatOpacity }}>
              <div
                className="relative flex justify-center"
                style={{
                  opacity: whatImgT,
                  transform: `translateX(${whatImgX}px)`,
                }}
              >
                <img src={liepnetLogoWhite} alt="LIEPNET" className="w-56 md:w-80 h-auto object-contain" />
              </div>

              <div
                className="space-y-6"
                style={{
                  opacity: Math.max(0.2, whatTextT),
                  transform: `translateX(${whatTextX}px)`,
                }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-white">{t("whatIsTitle")}</h1>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">{t("whatIsContent")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section style={{ height: segmentPx }} className="relative">
          <div className="sticky top-0 h-screen flex items-center justify-center">
            <div className="container mx-auto px-6" style={{ opacity: visionOpacity }}>
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">{t("whatPlansTitle")}</h2>
                <p className="text-lg text-white/70">What LIEPNET™ offers</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {[
                  { title: t("plan1Title"), content: t("plan1Content") },
                  { title: t("plan2Title"), content: t("plan2Content") },
                  { title: t("plan3Title"), content: t("plan3Content") },
                ].map((plan, idx) => (
                  <div
                    key={idx}
                    className="bg-black/30 backdrop-blur-lg border border-white/20 rounded-2xl p-6 transition-all duration-300 hover:border-white/30 hover:bg-black/40"
                  >
                    <h3 className="text-xl font-bold text-white mb-3">{plan.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{plan.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section style={{ height: segmentPx }} className="relative">
          <div className="sticky top-0 h-screen flex items-center justify-center">
            <div className="container mx-auto px-6 text-center" style={{ opacity: originsOpacity }}>
              <div className="max-w-3xl mx-auto space-y-8">
                <h2 className="text-4xl md:text-6xl font-bold about-origins-title">Our Origins</h2>
                <p className="text-lg md:text-xl leading-relaxed about-origins-body">
                  LIEPNET™ was founded in Latvia with a vision to connect Europe and North America through cutting-edge
                  technology. Our journey began with a simple idea: make quality hosting accessible to everyone.
                </p>
                <div className="text-base md:text-lg text-white/60 mt-8">Founded February 2025 • Liepāja, Latvia</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section style={{ height: segmentPx }} className="relative">
          <div className="sticky top-0 h-screen flex items-center justify-center">
            <div className="container mx-auto px-6 text-center" style={{ opacity: thanksOpacity }}>
              <div className="max-w-2xl mx-auto space-y-8">
                <h2 className="text-4xl md:text-6xl font-bold text-white">Thank You</h2>
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                  Thank you for taking the time to learn about LIEPNET™. We&apos;re excited to have you as part of our
                  journey.
                </p>
                <div className="pt-12 border-t border-white/10 mt-12">
                  <p className="text-lg text-gray-500 italic">"{t("footerQuote")}"</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer sits in normal flow, after Thank You */}
        <div className="relative bg-black">
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default About;
