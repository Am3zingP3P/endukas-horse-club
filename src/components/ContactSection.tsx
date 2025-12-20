import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Poruka poslata!',
      description: 'Hvala na interesovanju. Odgovorićemo vam u najkraćem roku.',
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
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
    <section id="kontakt" className="py-24 lg:py-32 bg-gradient-section overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ease-out ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="font-body text-primary text-sm uppercase tracking-[0.2em] mb-4">
            Kontakt
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground font-semibold mb-6">
            Javite Nam Se
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            Imate pitanja? Želite da nas posetite ili da se pridružite? 
            Slobodno nas kontaktirajte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div 
            ref={formRef}
            className={`bg-card rounded-2xl shadow-elevated p-8 lg:p-10 transition-all duration-700 ease-out ${
              formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
              Pošaljite Poruku
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-body text-sm text-foreground mb-2">
                  Ime i Prezime
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Vaše ime"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block font-body text-sm text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="vas@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block font-body text-sm text-foreground mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="+381..."
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block font-body text-sm text-foreground mb-2">
                  Poruka
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Kako vam možemo pomoći?"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-body font-medium transition-all hover:shadow-glow hover:scale-[1.02]"
              >
                <Send className="w-5 h-5" />
                Pošalji Poruku
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div 
            ref={infoRef}
            className={`flex flex-col justify-center transition-all duration-700 ease-out ${
              infoVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div 
                  key={info.title} 
                  className={`flex items-start gap-4 transition-all duration-500 ${
                    infoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
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

            {/* Map Placeholder */}
            <div className="mt-12 h-64 bg-card rounded-2xl overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22304.08774397707!2d19.65!3d45.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475c88d6c1a8c26d%3A0x3b8b15e8f8f8f8f8!2sMali%20I%C4%91o%C5%A1!5e0!3m2!1sen!2srs!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokacija kluba"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
