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

const MARKERS: MapMarker[] = [
  { id: "ogre", label: "OGRE", x: 53, y: 52 },
  { id: "malpils", label: "MĀLPILS", x: 52, y: 42 },
  { id: "aluksne", label: "ALŪKSNE", x: 79, y: 28 },
];

const Meteo = () => {
  const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);
  const [mapHovered, setMapHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 overflow-hidden">
      <Header />

      <main className="pt-28 pb-20">
        <div className="container mx-auto px-6">
          {/* Title - overlaps behind the map via negative margin + z-index */}
          <h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-center tracking-tight leading-none relative z-0"
            style={{
              backgroundImage: "linear-gradient(25deg, hsl(0,0%,100%), hsl(0,0%,75%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "0",
            }}
          >
            LIEPNET WEATHER
          </h1>

          {/* Map container */}
          <div className="flex justify-center relative z-10">
            <div
              className="relative max-w-3xl w-full transition-transform duration-700 ease-out cursor-default"
              onMouseEnter={() => setMapHovered(true)}
              onMouseLeave={() => setMapHovered(false)}
              style={{
                transform: mapHovered ? "scale(1.06)" : "scale(1)",
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
              {MARKERS.map((marker) => {
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
                      className="relative cursor-pointer transition-all duration-300"
                      style={{
                        width: isHovered ? 72 : 64,
                        height: isHovered ? 72 : 64,
                      }}
                      onMouseEnter={() => setHoveredMarker(marker.id)}
                      onMouseLeave={() => setHoveredMarker(null)}
                    >
                      <img
                        src={mapMarker}
                        alt="marker"
                        className="w-full h-full object-contain"
                      />
                      <div
                        className="absolute left-1/2 -translate-x-1/2 rounded-full"
                        style={{
                          bottom: -10,
                          width: isHovered ? 36 : 28,
                          height: 8,
                          background: "radial-gradient(ellipse, rgba(0,0,0,0.5) 0%, transparent 70%)",
                          filter: "blur(3px)",
                        }}
                      />
                    </div>

                    <div
                      className="absolute left-full ml-1 whitespace-nowrap text-sm font-extrabold uppercase tracking-wider transition-all duration-300 pointer-events-none"
                      style={{
                        bottom: "30%",
                        color: "white",
                        WebkitTextFillColor: "unset",
                        background: "linear-gradient(180deg, #2b4786, #172240)",
                        padding: "4px 10px",
                        borderRadius: "6px",
                        border: "1px solid rgba(43,71,134,0.6)",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
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
