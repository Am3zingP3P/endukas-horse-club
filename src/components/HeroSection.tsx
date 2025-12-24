import { useEffect, useState } from 'react';
import heroImage from '@/assets/hero-horse.jpg';
import { Sparkles } from 'lucide-react';
import { useMouseParallax } from '@/hooks/useParallax';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const mousePosition = useMouseParallax(0.015);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradient Overlay - JAVÍTVA: erősebb blur és sötétebb overlay a jobb kontrasztért */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-background/90 z-[1] backdrop-blur-[3px]" />
      
      {/* Decorative floating elements */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-breathe"
          style={{ 
            transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gold/20 blur-3xl animate-breathe animation-delay-500"
          style={{ 
            transform: `translate(${mousePosition.x * -2}px, ${mousePosition.y * -2}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
      </div>

      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0"
        style={{ 
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(1.05)`,
          transition: 'transform 0.5s ease-out'
        }}
      >
        <img
          src={heroImage}
          alt="Konj u trku na otvorenom polju"
          className={`w-full h-full object-cover transition-all duration-1000 ${
            isLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
          }`}
        />
      </div>

      {/* Grain Texture Overlay */}
      <div className="absolute inset-0 grain z-[2] pointer-events-none" />

      {/* Vignette Effect */}
      <div className="absolute inset-0 z-[2] pointer-events-none" 
        style={{ 
          background: 'radial-gradient(ellipse at center, transparent 40%, hsl(0 0% 0% / 0.5) 100%)' 
        }} 
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Premium Badge */}
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark mb-8 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="font-body text-white/90 text-xs uppercase tracking-[0.25em]">
              Mali Iđoš, Vojvodina
            </span>
          </div>
          
          {/* Main Title with reveal effect */}
          {/* JAVÍTÁS: pb-4 a levágás ellen, text-white a láthatóságért */}
          <div className="overflow-hidden mb-6 pb-4">
            <h1 
              className={`font-heading text-6xl md:text-8xl lg:text-9xl text-white font-semibold leading-[0.9] transition-all duration-1000 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              Konjički Klub
            </h1>
          </div>
          <div className="overflow-hidden mb-8">
            <h1 
              className={`font-heading text-6xl md:text-8xl lg:text-9xl italic transition-all duration-1000 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}
              style={{ 
                transitionDelay: '500ms',
                background: 'linear-gradient(135deg, #ffffff 0%, hsl(var(--gold)) 50%, #ffffff 100%)', // Hardcoded white gradients
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: isLoaded ? 'gradient-shift 6s ease infinite' : 'none'
              }}
            >
              Endukas
            </h1>
          </div>
          
          {/* Decorative line */}
          <div 
            className={`w-24 h-[2px] mx-auto mb-8 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
            style={{ 
              transitionDelay: '600ms',
              background: 'linear-gradient(90deg, transparent, hsl(var(--gold)), transparent)'
            }}
          />
          
          {/* JAVÍTÁS: text-white/90 a jobb olvashatóságért */}
          <p 
            className={`font-body text-white/90 text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '700ms', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
          >
            Gde strast prema konjima susreće izdržljivost i avanturu. 
            <span className="block mt-2 text-white/70 text-base md:text-lg">
              Pridružite se našoj zajednici ljubitelja endurance jahanja.
            </span>
          </p>
          
          {/* Premium CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '900ms' }}
          >
            <a
              href="#o-nama"
              className="group relative px-10 py-5 bg-primary text-white rounded-full font-body font-medium text-sm uppercase tracking-wider overflow-hidden transition-all duration-500 hover:shadow-gold hover:scale-105"
            >
              <span className="relative z-10">Saznaj Više</span>
              <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" 
                style={{ background: 'linear-gradient(120deg, transparent 0%, rgba(255,255,255, 0.2) 50%, transparent 100%)', backgroundSize: '200% 100%' }}
              />
            </a>
            <a
              href="#kontakt"
              className="group relative px-10 py-5 rounded-full font-body font-medium text-sm uppercase tracking-wider text-white border border-white/30 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-white/60 hover:scale-105"
            >
              <span className="relative z-10 group-hover:text-black transition-colors duration-500">Kontaktiraj Nas</span>
              <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '1100ms' }}
      >
        <a href="#o-nama" className="group flex flex-col items-center gap-3 text-white/60 hover:text-white transition-colors">
          <span className="font-body text-[10px] uppercase tracking-[0.3em]">Skroluj</span>
          <div className="relative w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-current animate-bounce-gentle" />
          </div>
        </a>
      </div>

      {/* Decorative corner accents */}
      <div className="absolute top-8 left-8 w-24 h-24 border-l-2 border-t-2 border-white/20 z-10" />
      <div className="absolute top-8 right-8 w-24 h-24 border-r-2 border-t-2 border-white/20 z-10" />
      <div className="absolute bottom-8 left-8 w-24 h-24 border-l-2 border-b-2 border-white/20 z-10" />
      <div className="absolute bottom-8 right-8 w-24 h-24 border-r-2 border-b-2 border-white/20 z-10" />
    </section>
  );
};

export default HeroSection;