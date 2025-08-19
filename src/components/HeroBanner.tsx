import heroBg from "@/assets/hero-bg.jpg";

const HeroBanner = () => {
  return (
    <section className="relative w-full h-96 overflow-hidden rounded-2xl mx-6 animate-fade-in-banner">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>
      
      {/* Banner with fade effect */}
      <div className="absolute inset-0 banner-fade"></div>
      
      {/* Content overlay */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Welcome to the Future
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Experience innovation with our cutting-edge solutions designed to transform your digital presence.
          </p>
        </div>
      </div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
    </section>
  );
};

export default HeroBanner;