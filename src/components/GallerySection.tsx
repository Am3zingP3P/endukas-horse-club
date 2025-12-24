import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: galleryRef, isVisible: galleryVisible, getStaggerDelay } = useStaggeredAnimation(6);

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      alt: 'Konji na pašnjaku',
      span: 'col-span-2 row-span-2',
    },
    {
      src: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=600&h=400&fit=crop',
      alt: 'Endurance trka',
      span: 'col-span-1 row-span-1',
    },
    {
      src: 'https://images.unsplash.com/photo-1598974357801-cbca100e65d3?w=600&h=400&fit=crop',
      alt: 'Škola jahanja',
      span: 'col-span-1 row-span-1',
    },
    {
      src: 'https://images.unsplash.com/photo-1534307671554-9a6d81f4d629?w=600&h=400&fit=crop',
      alt: 'Jahač sa konjem',
      span: 'col-span-1 row-span-1',
    },
    {
      src: 'https://images.unsplash.com/photo-1450052590821-8bf91254a353?w=600&h=400&fit=crop',
      alt: 'Konji u prirodi',
      span: 'col-span-1 row-span-1',
    },
    {
      src: 'https://images.unsplash.com/photo-1460924535017-83f7b3f33685?w=800&h=600&fit=crop',
      alt: 'Zalazak sunca sa konjima',
      span: 'col-span-2 row-span-1',
    },
  ];

  return (
    <section id="galerija" className="relative py-32 lg:py-40 bg-background overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute inset-0 bg-gradient-radial opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`max-w-4xl mx-auto text-center mb-20 transition-all duration-1000 ease-out-expo ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <span className="inline-block font-body text-primary text-xs uppercase tracking-[0.3em] mb-6">
            Galerija
          </span>
          
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground font-semibold mb-8 leading-[1.1]">
            Momenti iz{' '}
            <span className="italic text-primary">Kluba</span>
          </h2>
          
          <p className="font-body text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Pogledajte naše najlepše trenutke sa takmičenja, treninga i druženja.
          </p>
        </div>

        {/* Gallery Grid */}
        <div ref={galleryRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[180px] md:auto-rows-[220px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`${image.span} relative overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer group transition-all duration-700 ${
                galleryVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{ 
                ...getStaggerDelay(index),
                transitionDuration: '800ms',
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onClick={() => setSelectedImage(image.src)}
            >
              {/* Image */}
              <div className="image-reveal w-full h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Hover content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="w-14 h-14 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center mb-4 transform scale-50 group-hover:scale-100 transition-transform duration-500">
                  <ZoomIn className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="font-body text-primary-foreground text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  {image.alt}
                </span>
              </div>

              {/* Corner accent */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary-foreground/0 group-hover:border-primary-foreground/50 transition-all duration-500" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary-foreground/0 group-hover:border-primary-foreground/50 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-foreground/95 backdrop-blur-xl animate-fade-in" />
          
          {/* Image container */}
          <div 
            className="relative max-w-6xl max-h-[90vh] animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Uvećana slika"
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
            />
            
            {/* Close button */}
            <button
              className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-glow transition-transform duration-300 hover:scale-110"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
