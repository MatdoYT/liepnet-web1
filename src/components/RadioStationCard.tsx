import { useState, useRef, useEffect } from 'react';
import { Play } from 'lucide-react';
import { useRadioPlayer } from '@/contexts/RadioPlayerContext';

interface RadioStationCardProps {
  id: string;
  name: string;
  logo: string;
  streamUrl: string;
  hasQualityOptions?: boolean;
}

const RadioStationCard = ({ id, name, logo, streamUrl, hasQualityOptions = false }: RadioStationCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [darkness, setDarkness] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const { playStation } = useRadioPlayer();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;
      
      const distance = Math.sqrt(
        Math.pow(e.clientX - cardCenterX, 2) + Math.pow(e.clientY - cardCenterY, 2)
      );
      
      // Maximum distance to consider (in pixels)
      const maxDistance = 400;
      // Calculate darkness from 0 to 0.6 based on distance
      const darknessValue = Math.min(distance / maxDistance, 1) * 0.6;
      setDarkness(darknessValue);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handlePlay = () => {
    playStation({ id, name, logo, streamUrl, hasQualityOptions });
  };

  return (
    <div
      ref={cardRef}
      className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={logo} 
        alt={name} 
        className="w-full h-full object-cover"
      />
      
      {/* Distance-based darkness overlay */}
      <div 
        className="absolute inset-0 bg-black pointer-events-none transition-opacity duration-200"
        style={{ opacity: darkness }}
      />
      
      {/* Hover overlay */}
      <div 
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 flex items-center justify-center ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <button
          onClick={handlePlay}
          className="w-16 h-16 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
        >
          <Play className="w-8 h-8 text-black ml-1" fill="currentColor" />
        </button>
      </div>

      {/* Station name */}
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
        <p className="text-white font-medium text-sm truncate">{name}</p>
      </div>
    </div>
  );
};

export default RadioStationCard;
