import { Facebook, Instagram, Youtube, ArrowUp, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { href: '#o-nama', label: 'O Nama' },
    { href: '#aktivnosti', label: 'Aktivnosti' },
    { href: '#galerija', label: 'Galerija' },
    { href: '#dogadjaji', label: 'Događaji' },
    { href: '#kontakt', label: 'Kontakt' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'Youtube' },
  ];

  return (
    <footer className="relative bg-foreground text-primary-foreground overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-warm" />
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full border border-primary-foreground/5 opacity-50" />
        <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full border border-primary-foreground/5 opacity-30" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading text-2xl font-bold">E</span>
              </div>
              <div>
                <h3 className="font-heading text-2xl font-semibold">KK Endukas</h3>
                <p className="text-primary-foreground/60 text-sm">Mali Iđoš, Vojvodina</p>
              </div>
            </div>
            
            <p className="font-body text-primary-foreground/70 leading-relaxed max-w-md mb-8">
              Konjički Klub Endukas je posvećen promovisanju endurance jahanja 
              i izgradnji zajednice ljubitelja konja u Vojvodini. Pridružite nam se u ovoj neverovatnoj avanturi.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="group w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5 text-primary-foreground/80 group-hover:text-primary-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 relative inline-block">
              Brzi Linkovi
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-primary" />
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-primary-foreground/70 hover:text-primary-foreground hover:translate-x-2 transition-all duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-primary group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 relative inline-block">
              Kontakt
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-primary" />
            </h4>
            <ul className="space-y-4 font-body text-primary-foreground/70">
              <li className="hover:text-primary-foreground transition-colors duration-300">
                Mali Iđoš, Vojvodina
                <br />
                Srbija
              </li>
              <li>
                <a href="mailto:info@kkendukas.rs" className="hover:text-primary-foreground transition-colors duration-300">
                  info@kkendukas.rs
                </a>
              </li>
              <li>
                <a href="tel:+381000000000" className="hover:text-primary-foreground transition-colors duration-300">
                  +381 XX XXX XXXX
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-sm text-primary-foreground/50 flex items-center gap-1">
              © {currentYear} Konjički Klub Endukas. Napravljeno sa 
              <Heart className="w-4 h-4 text-primary fill-primary" />
              u Vojvodini.
            </p>
            <p className="font-body text-sm text-primary-foreground/50">
              Građanski klub za endurance jahanje
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-glow flex items-center justify-center transition-all duration-500 hover:scale-110 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer;
