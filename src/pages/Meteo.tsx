import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import latviaMap from "@/assets/latvia-map.webp";
import mapMarker from "@/assets/map-marker.webp";

interface MapMarker {
  id: string;
  label: string;
  x: number;
  y: number;
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

          <div className="flex justify-center">
            <div
              className="relative max-w-4xl w-full transition-all duration-500"
              onMouseEnter={() => setMapHovered(true)}
              onMouseLeave={() => setMapHovered(false)}
              style={{
                filter: mapHovered
                  ? "drop-shadow(0 0 40px rgba(255,255,255,0.12)) drop-shadow(0 0 80px rgba(255,255,255,0.06))"
                  : "none",
              }}
            >
              <img
                src={latviaMap}
                alt="Latvia map"
                className="w-full h-auto"
              />

              {/* Markers */}
              {TEST_MARKERS.map((marker) => {
                const isHovered = hoveredMarker === marker.id;
                return (
                  <div
                    key={marker.id}
                    className="absolute flex items-end"
                    style={{
                      left: `${marker.x}%`,
                      top: `${marker.y}%`,
                      transform: "translate(-50%, -85%)",
                    }}
                  >
                    <div
                      className="relative cursor-pointer transition-transform duration-300"
                      style={{
                        width: isHovered ? 38 : 32,
                        height: isHovered ? 38 : 32,
                      }}
                      onMouseEnter={() => setHoveredMarker(marker.id)}
                      onMouseLeave={() => setHoveredMarker(null)}
                    >
                      <img
                        src={mapMarker}
                        alt="marker"
                        className="w-full h-full object-contain"
                      />
                      {/* Shadow below marker */}
                      <div
                        className="absolute left-1/2 -translate-x-1/2 rounded-full"
                        style={{
                          bottom: -8,
                          width: isHovered ? 20 : 16,
                          height: 5,
                          background: "radial-gradient(ellipse, rgba(0,0,0,0.45) 0%, transparent 70%)",
                          filter: "blur(2px)",
                        }}
                      />
                    </div>

                    {/* Label */}
                    <div
                      className="absolute left-full ml-1 whitespace-nowrap text-xs font-semibold text-white/90 transition-all duration-300 pointer-events-none"
                      style={{
                        bottom: "30%",
                        opacity: isHovered ? 1 : 0,
                        transform: isHovered ? "translateX(0)" : "translateX(-8px)",
                        clipPath: isHovered ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
                      }}
                    >
                      {marker.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Meteo;
