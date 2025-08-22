interface BannerDotsProps {
  backgroundImages: string[];
  currentImageIndex: number;
  onDotClick: (index: number) => void;
}

const BannerDots = ({ backgroundImages, currentImageIndex, onDotClick }: BannerDotsProps) => {
  return (
    <div className="flex justify-center space-x-3 py-4">
      {backgroundImages.map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 ${
            index === currentImageIndex
              ? 'bg-primary shadow-lg ring-2 ring-primary/30'
              : 'bg-muted-foreground/50 hover:bg-muted-foreground/70'
          }`}
          aria-label={`Go to image ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default BannerDots;