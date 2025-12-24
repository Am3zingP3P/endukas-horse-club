import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ContactSection = () => {
  const { toast } = useToast();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: 'Poruka poslata!',
      description: 'Hvala na interesovanju. Odgovorićemo vam u najkraćem roku.',
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresa',
      content: 'Mali Iđoš, Vojvodina, Srbija',
    },
    {
      icon: Phone,
      title: 'Telefon',
      content: '+381 XX XXX XXXX',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@kkendukas.rs',
    },
    {
      icon: Clock,
      title: 'Radno Vreme',
      content: 'Svaki dan 08:00 - 18:00',
    },
  ];

  return (
    <section id="kontakt" className="relative py-32 lg:py-40 bg-background overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute inset-0 bg-gradient-radial opacity-40 pointer-events-none" />
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full border border-primary/10 animate-pulse-scale opacity-50" />
      <div className="absolute bottom-40 left-20 w-48 h-48 rounded-full border border-accent/10 animate-pulse-scale opacity-40" style={{ animationDelay: '1.5s' }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`max-w-4xl mx-auto text-center mb-20 transition-all duration-1000 ease-out-expo ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <span className="inline-block font-body text-primary text-xs uppercase tracking-[0.3em] mb-6">
            Kontakt
          </span>
          
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground font-semibold mb-8 leading-[1.1]">
            Javite Nam{' '}
            <span className="italic text-primary">Se</span>
          </h2>
          
          <p className="font-body text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Imate pitanja? Želite da nas posetite ili da se pridružite? 
            Slobodno nas kontaktirajte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div 
            ref={formRef}
            className={`card-premium p-8 lg:p-12 transition-all duration-1000 ease-out-expo ${
              formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
            }`}
          >
            <h3 className="font-heading text-2xl lg:text-3xl font-semibold text-foreground mb-8">
              Pošaljite Poruku
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-body text-sm text-foreground mb-3 font-medium">
                  Ime i Prezime
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-background border border-border rounded-xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
                  placeholder="Vaše ime"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block font-body text-sm text-foreground mb-3 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-background border border-border rounded-xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
                    placeholder="vas@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block font-body text-sm text-foreground mb-3 font-medium">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-background border border-border rounded-xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
                    placeholder="+381..."
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block font-body text-sm text-foreground mb-3 font-medium">
                  Poruka
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-5 py-4 bg-background border border-border rounded-xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 resize-none"
                  placeholder="Kako vam možemo pomoći?"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full flex items-center justify-center gap-3 px-8 py-5 bg-primary text-primary-foreground rounded-xl font-body font-medium text-sm uppercase tracking-wider overflow-hidden transition-all duration-500 hover:shadow-glow disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Slanje...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Pošalji Poruku
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div 
            ref={infoRef}
            className={`flex flex-col justify-between transition-all duration-1000 ease-out-expo ${
              infoVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
            }`}
          >
            {/* Info Cards */}
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <div 
                  key={info.title} 
                  className={`group flex items-start gap-5 p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-soft transition-all duration-500 ${
                    infoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-foreground mb-1">
                      {info.title}
                    </h4>
                    <p className="font-body text-muted-foreground">
                      {info.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="relative h-72 bg-card rounded-3xl overflow-hidden border border-border/50 group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22304.08774397707!2d19.65!3d45.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475c88d6c1a8c26d%3A0x3b8b15e8f8f8f8f8!2sMali%20I%C4%91o%C5%A1!5e0!3m2!1sen!2srs!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokacija kluba"
                className="grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Overlay with CTA */}
              <div className="absolute bottom-4 left-4 right-4">
                <a 
                  href="https://maps.google.com/?q=Mali+Idjos" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-5 py-3 bg-card/95 backdrop-blur-sm rounded-xl border border-border/50 group/link hover:border-primary/50 transition-all duration-300"
                >
                  <span className="font-body text-sm text-foreground">Otvori u Google Maps</span>
                  <ArrowRight className="w-4 h-4 text-primary transition-transform duration-300 group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
