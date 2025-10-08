import { useState } from 'react';
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
  const { playStation } = useRadioPlayer();

  const handlePlay = () => {
    playStation({ id, name, logo, streamUrl, hasQualityOptions });
  };

  return (
    <div
      className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={logo} 
        alt={name} 
        className="w-full h-full object-cover"
      />
      
      {/* Hover overlay */}
      <div 
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 flex items-center justify-center ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <button
          onClick={handlePlay}
          className="w-16 h-16 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
        >
          <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
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
