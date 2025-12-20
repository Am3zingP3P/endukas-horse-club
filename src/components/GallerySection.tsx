import { useState } from 'react';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
    <section id="galerija" className="py-24 lg:py-32 bg-gradient-section">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="font-body text-primary text-sm uppercase tracking-[0.2em] mb-4">
            Galerija
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground font-semibold mb-6">
            Momenti iz Kluba
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            Pogledajte naše najlepše trenutke sa takmičenja, treninga i druženja.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`${image.span} relative overflow-hidden rounded-2xl cursor-pointer group`}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="font-body text-primary-foreground text-sm font-medium px-4 py-2 bg-primary/80 backdrop-blur-sm rounded-full">
                  Pogledaj
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] animate-scale-in">
            <img
              src={selectedImage}
              alt="Uvećana slika"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-primary-foreground/20 backdrop-blur-sm rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
