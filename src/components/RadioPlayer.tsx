import { Volume2, Pause, Play, Maximize2, Settings } from 'lucide-react';
import { useRadioPlayer } from '@/contexts/RadioPlayerContext';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';
import { toast } from '@/hooks/use-toast';

const RadioPlayer = () => {
  const { currentStation, isPlaying, volume, quality, pauseStation, playStation, setVolume, setQuality } = useRadioPlayer();
  const navigate = useNavigate();

  if (!currentStation) return null;

  const handleTogglePlay = () => {
    if (isPlaying) {
      pauseStation();
    } else {
      playStation(currentStation);
    }
  };

  const handleOpenStation = () => {
    navigate(`/radio/${currentStation.id}`);
  };

  const handleCopyStreamLink = () => {
    navigator.clipboard.writeText(currentStation.streamUrl);
    toast({
      title: "Stream link copied!",
      description: "The stream URL has been copied to your clipboard.",
    });
  };

  return (
    <div className="fixed bottom-6 left-6 right-6 z-50 animate-slide-up">
      <div className="backdrop-blur-xl bg-gradient-to-b from-black/60 to-black/80 border border-white/10 rounded-2xl shadow-2xl p-4">
        <div className="flex items-center gap-4">
          {/* Station logo */}
          <img 
            src={currentStation.logo} 
            alt={currentStation.name}
            className="w-16 h-16 rounded-lg object-cover shadow-lg"
          />

          {/* Station info & controls */}
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-foreground truncate">{currentStation.name}</p>
            <p className="text-sm text-muted-foreground">Live Radio</p>
          </div>

          {/* Play/Pause button */}
          <Button
            onClick={handleTogglePlay}
            size="icon"
            className="w-12 h-12 rounded-full shadow-lg bg-white hover:bg-gray-100 text-black"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5" fill="currentColor" />
            ) : (
              <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
            )}
          </Button>

          {/* Stream info dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
              >
                <Settings className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="backdrop-blur-xl bg-background/95 border-white/10">
              <DropdownMenuLabel>Stream Quality</DropdownMenuLabel>
              <DropdownMenuItem disabled>
                <span className="text-green-500">128 Kbps</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleCopyStreamLink}>
                📋 Copy Stream Link
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Volume control */}
          <div className="flex items-center gap-2 min-w-[120px]">
            <Volume2 className="w-5 h-5 text-muted-foreground" />
            <Slider
              value={[volume]}
              onValueChange={(value) => setVolume(value[0])}
              max={100}
              step={1}
              className="w-24"
            />
          </div>

          {/* Expand button */}
          <Button
            onClick={handleOpenStation}
            variant="ghost"
            size="icon"
            className="rounded-full"
          >
            <Maximize2 className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RadioPlayer;
