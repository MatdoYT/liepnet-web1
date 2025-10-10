import { useParams, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RadioPlayer from '@/components/RadioPlayer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MapPin, Play } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import radioSkontoLogo from '@/assets/radio-skonto-logo.png';
import ehrLogo from '@/assets/ehr-logo.png';
import { useRadioPlayer } from '@/contexts/RadioPlayerContext';

// Placeholder data - will be dynamic based on station ID
const stationData: Record<string, any> = {
  'radio-skonto': {
    name: 'Radio Skonto',
    logo: radioSkontoLogo,
    streamUrl: 'https://stream.radioskonto.lv:8443/stereo',
    hasQualityOptions: false,
    description: 'Since 1993, Radio Skonto, one of Latvia\'s most recognizable FM stations, has been transmitting on 107,2 MHz in Riga. It is renowned for its cozy, laid-back style, which combines short news updates, amiable, conversational hosts, timeless hits, and local favorites with soft pop. By providing a comfortable, familiar, and intimate listening experience whether at home, at work, or while traveling, the station has amassed a devoted adult audience. Radio Skonto is still a mainstay of Latvian radio culture thanks to its soothing playlists and reliable voices.',
    frequencies: [
      { city: 'Rīga', frequency: '107,2 MHz' },
      { city: 'Cēsis', frequency: '97,6 MHz' },
      { city: 'Limbaži', frequency: '92,8 MHz' },
      { city: 'Saldus', frequency: '98,1 MHz' },
      { city: 'Talsi', frequency: '87,5 MHz' },
      { city: 'Salacgrīva', frequency: '88,0 MHz' },
      { city: 'Valmiera', frequency: '97,0 MHz' },
      { city: 'Valga', frequency: '94,6 MHz' },
      { city: 'Alūksne', frequency: '94,2 MHz' },
      { city: 'Cesvaine', frequency: '99,8 MHz' },
      { city: 'Rugāji', frequency: '92,2 MHz' },
      { city: 'Jēkabpils', frequency: '94,7 MHz' },
      { city: 'Dagda', frequency: '99,1 MHz' },
      { city: 'Daugavpils', frequency: '106,1 MHz' },
      { city: 'Skrunda', frequency: '97,6 MHz' },
      { city: 'Kuldīga', frequency: '96,9 MHz' },
      { city: 'Aizpute', frequency: '96,6 MHz' },
      { city: 'Ventspils', frequency: '100,5 MHz' },
      { city: 'Liepāja', frequency: '97,5 MHz' },
    ],
    website: 'https://radioskonto.lv',
    ownedBy: 'SIA SKONTO GROUP',
    address: 'Rīga, Mūkusalas iela 41, LV-1004',
    timeZone: 'EEST/EET',
    musicGenre: 'Soft pop, classic hits',
    phone: '+371 24992499',
  },
  'ehr': {
    name: 'European Hit Radio',
    logo: ehrLogo,
    streamUrl: 'https://playerservices.streamtheworld.com/api/livestream-redirect/EHR.mp3',
    hasQualityOptions: false,
    description: 'One of Latvia\'s top commercial stations, European Hit Radio (EHR), has been airing since 1992 and is well-known for its emphasis on the newest local and international hits. EHR provides a continuous mix of Top 40, pop, and dance songs on its flagship frequency in Riga (104,3 MHz), which reflects current trends in both Europe and the US. The station makes sure that listeners always hear the newest and most well-liked songs by curating its playlists straight from music charts. With its lively music flow, countdown shows, themed charts, and interactive features, EHR—which is specifically targeted at younger audiences—is the go-to place for anyone looking to keep up with today\'s popular music culture.',
    frequencies: [
      { city: 'Rīga', frequency: '104,3 MHz' },
      { city: 'Cēsis', frequency: '99,2 MHz' },
      { city: 'Valmiera', frequency: '102,4 MHz' },
      { city: 'Madona', frequency: '102,0 MHz' },
      { city: 'Gulbene', frequency: '88,4 MHz' },
      { city: 'Valka', frequency: '96,2 MHz' },
      { city: 'Rēzekne', frequency: '97,1 MHz' },
      { city: 'Daugavpils', frequency: '92,9 MHz' },
      { city: 'Jēkabpils', frequency: '98,4 MHz' },
      { city: 'Saldus', frequency: '93,6 MHz' },
      { city: 'Talsi', frequency: '100,8 MHz' },
      { city: 'Kuldīga', frequency: '107,4 MHz' },
      { city: 'Liepāja', frequency: '96,1 MHz' },
      { city: 'Ventspils', frequency: '101,9 MHz' },
    ],
    website: 'https://www.ehr.fm',
    ownedBy: 'SIA "EHR Mediju Grupa"',
    address: 'Rīga, Krasta iela 44, LV-1003',
    timeZone: 'EEST/EET',
    musicGenre: 'Contemporary pop, Top 40, dance music',
    phone: '+371 67204404',
  },
};

const RadioStation = () => {
  const { stationId } = useParams<{ stationId: string }>();
  const navigate = useNavigate();
  const { playStation } = useRadioPlayer();
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const tableRef = useRef<HTMLDivElement>(null);
  
  const station = stationData[stationId || ''] || {
    name: 'Station',
    logo: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
    description: 'A great radio station broadcasting quality content.',
    frequencies: [],
  };

  const handlePlay = () => {
    playStation({
      id: stationId || '',
      name: station.name,
      logo: station.logo,
      streamUrl: station.streamUrl,
      hasQualityOptions: station.hasQualityOptions,
    });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const calculateOpacity = (element: HTMLElement | null) => {
    if (!element) return 1;
    
    const rect = element.getBoundingClientRect();
    const elementCenterX = rect.left + rect.width / 2;
    const elementCenterY = rect.top + rect.height / 2;
    
    const distance = Math.sqrt(
      Math.pow(mousePosition.x - elementCenterX, 2) + 
      Math.pow(mousePosition.y - elementCenterY, 2)
    );
    
    const maxDistance = 500;
    const minOpacity = 0.5;
    const opacity = Math.max(minOpacity, 1 - (distance / maxDistance) * (1 - minOpacity));
    
    return opacity;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-24 mb-32">
        <Button
          variant="ghost"
          onClick={() => navigate('/radio')}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Radio
        </Button>

        {/* Station Logo and Description */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
          <div
              className="relative w-full max-w-md aspect-square rounded-2xl shadow-2xl mx-auto overflow-hidden cursor-pointer group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={handlePlay}
              style={{ 
                filter: 'drop-shadow(0 0 30px rgba(255, 255, 255, 0.5)) drop-shadow(0 0 60px rgba(255, 255, 255, 0.3))'
              }}
            >
              <img
                src={station.logo}
                alt={station.name}
                className={`w-full h-full object-cover transition-all duration-300 ${isHovered ? 'blur-sm scale-105' : 'blur-0 scale-100'}`}
              />
              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-2xl">
                  <Play className="w-10 h-10 text-black ml-1" fill="black" />
                </div>
              </div>
            </div>

          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{station.name}</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {station.description}
            </p>
          </div>
        </div>

        {/* Frequencies and Station Details */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column: Frequencies */}
          <div className="space-y-4" ref={tableRef}>
              <div className="flex items-center gap-2 text-xl font-semibold">
                <MapPin className="w-6 h-6 text-white" />
                <h2 className="text-white">Broadcast Frequencies</h2>
              </div>
              <div className="rounded-lg border border-border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-white">City</TableHead>
                      <TableHead className="text-white">Frequency</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {station.frequencies?.map((item: any, index: number) => {
                      const rowRef = useRef<HTMLTableRowElement>(null);
                      return (
                        <TableRow 
                          key={item.city}
                          ref={rowRef}
                          style={{
                            opacity: calculateOpacity(document.querySelector(`[data-row-index="${index}"]`))
                          }}
                          data-row-index={index}
                          className="transition-opacity duration-100"
                        >
                          <TableCell className="font-medium">{item.city}</TableCell>
                          <TableCell>{item.frequency}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
              <p className="text-sm text-muted-foreground">
                Frequencies updated on the 10th of October, 2025.<br />
                Information source: <a href="https://www.fmlist.org" target="_blank" rel="noopener noreferrer" className="hover:underline">www.fmlist.org</a>
              </p>
            </div>

          {/* Right Column: Station Details */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white">{station.name} website</h3>
              <a href={station.website} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
                {station.website?.replace('https://', '').replace('http://', '')}
              </a>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white">Owned by</h3>
              <p className="text-muted-foreground">{station.ownedBy}</p>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white">Legal address</h3>
              <p className="text-muted-foreground">{station.address}</p>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white">Local time zone</h3>
              <p className="text-muted-foreground">{station.timeZone}</p>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white">Music genre</h3>
              <p className="text-muted-foreground">{station.musicGenre}</p>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white">Phone number</h3>
              <a href={`tel:${station.phone}`} className="text-red-500 hover:underline">
                {station.phone}
              </a>
            </div>
          </div>
        </div>
      </main>

      <RadioPlayer />
      <Footer />
    </div>
  );
};

export default RadioStation;
