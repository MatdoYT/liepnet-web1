import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import latviaSvg from "@/assets/latvia-map.svg";

interface MapMarker {
  id: string;
  label: string;
  x: number; // percentage
  y: number; // percentage
}

const TEST_MARKERS: MapMarker[] = [
  { id: "1", label: "TEST NODE", x: 45, y: 50 },
  { id: "2", label: "TEST NODE", x: 72, y: 65 },
];

const Meteo = () => {
  const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);
  const [mapHovered, setMapHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
      <Header />

      <main className="pt-28 pb-20">
        <div className="container mx-auto px-6">
          {/* Title */}
          <h1
            className="text-5xl md:text-6xl font-bold text-center mb-16 tracking-tight"
            style={{
              backgroundImage: "linear-gradient(25deg, hsl(0,0%,100%), hsl(0,0%,75%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            LIEPNET WEATHER
          </h1>

          {/* Map container */}
          <div className="flex justify-center">
            <div
              className="relative max-w-4xl w-full transition-all duration-500"
              onMouseEnter={() => setMapHovered(true)}
              onMouseLeave={() => setMapHovered(false)}
              style={{
                filter: mapHovered
                  ? "drop-shadow(0 0 30px rgba(255,255,255,0.15)) drop-shadow(0 0 60px rgba(255,255,255,0.08))"
                  : "none",
              }}
            >
              {/* SVG map with green gradient overlay */}
              <div className="relative">
                {/* Base map - made white via filter */}
                <img
                  src={latviaSvg}
                  alt="Latvia map"
                  className="w-full h-auto"
                  style={{
                    filter: "brightness(0) invert(1)",
                    opacity: 0.9,
                  }}
                />
                {/* Green gradient overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, hsl(140,60%,55%), hsl(150,50%,25%))",
                    mixBlendMode: "multiply",
                  }}
                />
              </div>

              {/* Markers */}
              {TEST_MARKERS.map((marker) => (
                <div
                  key={marker.id}
                  className="absolute flex items-center"
                  style={{
                    left: `${marker.x}%`,
                    top: `${marker.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {/* Dot */}
                  <div
                    className="relative z-10 rounded-full bg-white cursor-pointer transition-transform duration-300"
                    style={{
                      width: hoveredMarker === marker.id ? 14 : 10,
                      height: hoveredMarker === marker.id ? 14 : 10,
                      boxShadow: "0 0 8px rgba(255,255,255,0.6)",
                    }}
                    onMouseEnter={() => setHoveredMarker(marker.id)}
                    onMouseLeave={() => setHoveredMarker(null)}
                  />

                  {/* Label - slides out from the right */}
                  <div
                    className="absolute left-full ml-1 whitespace-nowrap text-xs font-semibold text-white/90 transition-all duration-300 pointer-events-none"
                    style={{
                      opacity: hoveredMarker === marker.id ? 1 : 0,
                      transform: hoveredMarker === marker.id
                        ? "translateX(0)"
                        : "translateX(-8px)",
                      clipPath: hoveredMarker === marker.id
                        ? "inset(0 0 0 0)"
                        : "inset(0 100% 0 0)",
                    }}
                  >
                    {marker.label}
                  </div>
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

export default Meteo;
