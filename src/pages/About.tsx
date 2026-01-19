import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import aboutLogoSrc from "@/assets/liepnet-logo-about.webp";
import { useImageIsLight } from "@/hooks/useImageIsLight";

type BgClass = "about-bg-white" | "about-bg-black" | "about-bg-vision" | "about-bg-origins";

const About = () => {
  const { t } = useLanguage();

  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);

  // 0: intro, 1: what, 2: vision, 3: origins, 4: thanks, 5: footer
  const [activeIndex, setActiveIndex] = useState(0);

  // Background crossfade state
  const lastIndexRef = useRef(0);
  const [bgFromIndex, setBgFromIndex] = useState(0);
  const [bgToIndex, setBgToIndex] = useState(0);
  const [bgMix, setBgMix] = useState(1);

  const isLogoLight = useImageIsLight(aboutLogoSrc);

  const backgrounds = useMemo(
    () =>
      [
        "about-bg-white",
        "about-bg-black",
        "about-bg-vision",
        "about-bg-origins",
        "about-bg-black",
        "about-bg-black",
      ] as const satisfies readonly BgClass[],
    []
  );

  useEffect(() => {
    document.title = "About - LIEPNET™";
  }, []);

  // Crossfade background ONLY when the active section changes (no "accidental" mid-scroll fades).
  useEffect(() => {
    const from = lastIndexRef.current;
    if (activeIndex === from) return;

    lastIndexRef.current = activeIndex;

    setBgFromIndex(from);
    setBgToIndex(activeIndex);
    setBgMix(0);

    const raf = requestAnimationFrame(() => setBgMix(1));
    const timer = window.setTimeout(() => {
      setBgFromIndex(activeIndex);
      setBgToIndex(activeIndex);
      setBgMix(1);
    }, 320);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(timer);
    };
  }, [activeIndex]);

  // Track which section is "current" inside the About scroller.
  useEffect(() => {
    const root = scrollerRef.current;
    if (!root) return;

    const els = sectionRefs.current.filter(Boolean) as HTMLElement[];
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        // Pick the most visible section
        let best: { idx: number; ratio: number } | null = null;
        for (const e of entries) {
          const idx = Number((e.target as HTMLElement).dataset.aboutIndex ?? "0");
          const ratio = e.intersectionRatio;
          if (!best || ratio > best.ratio) best = { idx, ratio };
        }
        if (best && best.ratio >= 0.55) setActiveIndex(best.idx);
      },
      { root, threshold: [0.25, 0.4, 0.55, 0.7, 0.85] }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const scrollToIndex = useCallback((idx: number) => {
    const el = sectionRefs.current[idx];
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  // Wheel paging: a small wheel motion advances exactly one section.
  useEffect(() => {
    const root = scrollerRef.current;
    if (!root) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (prefersReduced || !finePointer) return;

    let locked = false;

    const onWheel = (e: WheelEvent) => {
      // Ignore if user is using ctrl/zoom or horizontal scroll
      if (e.ctrlKey || Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;

      // Tiny deltas are usually trackpad noise; keep natural scroll.
      if (Math.abs(e.deltaY) < 22) return;

      if (locked) {
        e.preventDefault();
        return;
      }

      e.preventDefault();
      locked = true;

      const direction = e.deltaY > 0 ? 1 : -1;
      const next = Math.max(0, Math.min(sectionRefs.current.length - 1, activeIndex + direction));
      scrollToIndex(next);

      window.setTimeout(() => {
        locked = false;
      }, 650);
    };

    root.addEventListener("wheel", onWheel, { passive: false });
    return () => root.removeEventListener("wheel", onWheel as EventListener);
  }, [activeIndex, scrollToIndex]);

  const logoFilterOnWhite = isLogoLight ? "invert(1)" : "none"; // make light logo dark
  const logoFilterOnDark = isLogoLight === false ? "invert(1)" : "none"; // make dark logo light

  return (
    <div className="relative h-[100svh] overflow-hidden">
      {/* Background layer (crossfades between section backgrounds) */}
      <div className="absolute inset-0 -z-10">
        <div className={`absolute inset-0 ${backgrounds[bgFromIndex]}`} />
        <div className={`absolute inset-0 ${backgrounds[bgToIndex]} transition-opacity duration-300`} style={{ opacity: bgMix }} />
      </div>

      <Header />

      <div ref={scrollerRef} className="relative h-full overflow-y-auto snap-y snap-mandatory overscroll-contain">
        {/* Intro */}
        <section
          ref={(el) => {
            sectionRefs.current[0] = el;
          }}
          data-about-section
          data-about-index={0}
          className="min-h-[100svh] snap-start flex items-center justify-center pt-20"
        >
          <div className="container mx-auto px-6 flex items-center justify-center">
            <img
              src={aboutLogoSrc}
              alt="LIEPNET Logo"
              className="w-72 md:w-[28rem] h-auto object-contain motion-safe transition-transform duration-500"
              style={{ filter: logoFilterOnWhite }}
              loading="eager"
              decoding="async"
            />
          </div>
        </section>

        {/* What is */}
        <section
          ref={(el) => {
            sectionRefs.current[1] = el;
          }}
          data-about-section
          data-about-index={1}
          className="min-h-[100svh] snap-start flex items-center justify-center"
        >
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`relative flex justify-center motion-safe transition-all duration-500 ${
                activeIndex === 1 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <img
                src={aboutLogoSrc}
                alt="LIEPNET"
                className="w-56 md:w-80 h-auto object-contain"
                style={{ filter: logoFilterOnDark }}
                loading="lazy"
                decoding="async"
              />
            </div>

            <div
              className={`space-y-6 motion-safe transition-all duration-500 ${
                activeIndex === 1 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white">{t("whatIsTitle")}</h1>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed">{t("whatIsContent")}</p>
            </div>
          </div>
        </section>

        {/* Vision / Plans */}
        <section
          ref={(el) => {
            sectionRefs.current[2] = el;
          }}
          data-about-section
          data-about-index={2}
          className="min-h-[100svh] snap-start flex items-center justify-center"
        >
          <div className="container mx-auto px-6">
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
                  <p className="text-white/70 text-sm leading-relaxed">{plan.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Origins */}
        <section
          ref={(el) => {
            sectionRefs.current[3] = el;
          }}
          data-about-section
          data-about-index={3}
          className="min-h-[100svh] snap-start flex items-center justify-center"
        >
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold about-origins-title">Our Origins</h2>
              <p className="text-lg md:text-xl leading-relaxed about-origins-body">
                LIEPNET™ was founded in Latvia with a vision to connect Europe and North America through cutting-edge
                technology. Our journey began with a simple idea: make quality hosting accessible to everyone.
              </p>
              <div className="text-base md:text-lg text-white/60 mt-8">Founded February 2025 • Liepāja, Latvia</div>
            </div>
          </div>
        </section>

        {/* Thank you */}
        <section
          ref={(el) => {
            sectionRefs.current[4] = el;
          }}
          data-about-section
          data-about-index={4}
          className="min-h-[100svh] snap-start flex items-center justify-center"
        >
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-2xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold text-white">Thank You</h2>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                Thank you for taking the time to learn about LIEPNET™. We&apos;re excited to have you as part of our
                journey.
              </p>
              <div className="pt-12 border-t border-white/10 mt-12">
                <p className="text-lg text-white/60 italic">"{t("footerQuote")}"</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer (no fade, no overlay) */}
        <section
          ref={(el) => {
            sectionRefs.current[5] = el;
          }}
          data-about-section
          data-about-index={5}
          className="min-h-[60svh] snap-start flex items-end"
        >
          <div className="w-full">
            <Footer />
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
