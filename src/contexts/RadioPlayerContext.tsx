import React, { createContext, useContext, useState, ReactNode } from 'react';

interface RadioStation {
  id: string;
  name: string;
  logo: string;
  streamUrl: string;
  description?: string;
  broadcastAreas?: string[];
  hasQualityOptions?: boolean;
  programs?: string[];
}

interface RadioPlayerContextType {
  currentStation: RadioStation | null;
  isPlaying: boolean;
  volume: number;
  quality: string;
  playStation: (station: RadioStation) => void;
  pauseStation: () => void;
  setVolume: (volume: number) => void;
  setQuality: (quality: string) => void;
}

const RadioPlayerContext = createContext<RadioPlayerContextType | undefined>(undefined);

export const useRadioPlayer = () => {
  const context = useContext(RadioPlayerContext);
  if (!context) {
    throw new Error('useRadioPlayer must be used within RadioPlayerProvider');
  }
  return context;
};

export const RadioPlayerProvider = ({ children }: { children: ReactNode }) => {
  const [currentStation, setCurrentStation] = useState<RadioStation | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(75);
  const [quality, setQuality] = useState('high');

  const playStation = (station: RadioStation) => {
    setCurrentStation(station);
    setIsPlaying(true);
  };

  const pauseStation = () => {
    setIsPlaying(false);
  };

  return (
    <RadioPlayerContext.Provider
      value={{
        currentStation,
        isPlaying,
        volume,
        quality,
        playStation,
        pauseStation,
        setVolume,
        setQuality,
      }}
    >
      {children}
    </RadioPlayerContext.Provider>
  );
};
