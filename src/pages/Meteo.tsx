import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import latviaMap from "@/assets/latvia-map.webp";
import mapMarker from "@/assets/map-marker.webp";
import { Thermometer, Wind, CloudRain, Sun, Gauge, Camera, AlertTriangle } from "lucide-react";

interface MapMarker {
  id: string;
  label: string;
  x: number;
  y: number;
}

interface StationInfo {
  title: string;
  description: string;
  measurements: { icon: React.ReactNode; label: string }[];
}

const MARKERS: MapMarker[] = [
  { id: "ogre", label: "OGRE", x: 51, y: 52 },
  { id: "malpils", label: "MĀLPILS", x: 54, y: 42 },
  { id: "aluksne", label: "ALŪKSNE", x: 81, y: 28 },
];

const STATIONS: StationInfo[] = [
  {
    title: "MĀLPILS",
    description: "The LIEPNET™ WEATHER network's first station, located on top of the Mālpils secondary school, provides real-time weather data.",
    measurements: [
      { icon: <Thermometer size={16} />, label: "Temperature & humidity" },
      { icon: <Wind size={16} />, label: "Wind speed & direction" },
      { icon: <CloudRain size={16} />, label: "Rain gauge" },
      { icon: <Sun size={16} />, label: "UV index" },
      { icon: <Gauge size={16} />, label: "Barometric pressure" },
      { icon: <Camera size={16} />, label: "Live-feed camera" },
    ],
  },
  {
    title: "OGRE",
    description: "This LIEPNET™ WEATHER station, despite its small size, provides extensive data. It is also one of the network's first stations.",
    measurements: [
      { icon: <Thermometer size={16} />, label: "Temperature & humidity" },
      { icon: <Wind size={16} />, label: "Wind speed & direction" },
      { icon: <CloudRain size={16} />, label: "Rain gauge" },
      { icon: <Sun size={16} />, label: "UV index" },
      { icon: <Gauge size={16} />, label: "Barometric pressure" },
    ],
  },
  {
    title: "ALŪKSNE",
    description: "This LIEPNET™ WEATHER station, despite its small size, provides extensive data. It is also one of the network's first stations.",
    measurements: [
      { icon: <Thermometer size={16} />, label: "Temperature & humidity" },
      { icon: <Wind size={16} />, label: "Wind speed & direction" },
      { icon: <CloudRain size={16} />, label: "Rain gauge" },
      { icon: <Sun size={16} />, label: "UV index" },
      { icon: <Gauge size={16} />, label: "Barometric pressure" },
    ],
  },
];

const Meteo = () => {
  const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);
  const [mapHovered, setMapHovered] = useState(false);

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <Header />

      <main className="pt-28 pb-20">
        <div className="container mx-auto px-6">
          {/* Title - overlaps behind the map via negative margin + z-index */}
          <h1
            className="text-7xl md:text-8xl lg:text-9xl font-bold text-center tracking-tight leading-none relative z-0 transition-all duration-700"
            style={{
              backgroundImage: "radial-gradient(ellipse 80% 70% at 50% 100%, hsl(0,0%,100%) 0%, hsl(0,0%,60%) 50%, hsl(0,0%,30%) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "1rem",
              filter: mapHovered ? "blur(4px)" : "none",
              opacity: mapHovered ? 0.4 : 1,
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
          {/* Stations Section */}
          <div className="mt-20 max-w-5xl mx-auto">
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight uppercase"
              style={{
                backgroundImage: "linear-gradient(25deg, hsl(0,0%,100%), hsl(0,0%,70%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              STATIONS
            </h2>
            <div
              className="mt-3 h-px w-full"
              style={{
                background: "linear-gradient(90deg, rgba(255,255,255,0.4), rgba(255,255,255,0.05))",
              }}
            />

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {STATIONS.map((station) => (
                <div
                  key={station.title}
                  className="rounded-xl p-5 flex flex-col transition-transform duration-500 ease-out hover:scale-[1.04]"
                  style={{
                    background: "linear-gradient(160deg, rgba(255,255,255,0.14) 0%, rgba(0,0,0,0.7) 100%)",
                    border: "1px solid rgba(255,255,255,0.13)",
                  }}
                >
                  <h3
                    className="text-lg font-bold tracking-wide uppercase"
                    style={{
                      backgroundImage: "linear-gradient(25deg, hsl(0,0%,100%), hsl(0,0%,75%))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {station.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {station.description}
                  </p>

                  <div className="mt-4 flex flex-col gap-2">
                    {station.measurements.map((m) => (
                      <div key={m.label} className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                        <span style={{ color: "rgba(255,255,255,0.5)" }}>{m.icon}</span>
                        {m.label}
                      </div>
                    ))}
                  </div>

                  <div
                    className="mt-5 rounded-lg px-4 py-3 flex items-center gap-2 text-sm font-semibold"
                    style={{
                      background: "linear-gradient(160deg, rgba(202,160,40,0.25) 0%, rgba(140,100,10,0.15) 100%)",
                      border: "1px solid rgba(202,160,40,0.35)",
                      color: "rgba(230,190,60,0.9)",
                    }}
                  >
                    <AlertTriangle size={16} />
                    This station is not yet active.
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
