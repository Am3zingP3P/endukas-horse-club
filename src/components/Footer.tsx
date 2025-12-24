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
    // JAVÍTÁS: dark:bg-card és dark:border-t hozzáadva, hogy sötét módban is sötét maradjon a háttér
    <footer className="relative bg-foreground dark:bg-card dark:border-t dark:border-white/10 text-primary-foreground overflow-hidden transition-colors duration-500">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-5">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute top-40 -left-20 w-72 h-72 rounded-full bg-gold blur-3xl" />
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading text-[15rem] leading-none opacity-10 whitespace-nowrap text-primary-foreground select-none">
          Endukas
        </span>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="font-heading text-xl font-bold text-primary-foreground">E</span>
              </div>
              <span className="font-heading text-2xl font-semibold">KK Endukas</span>
            </div>
            <p className="font-body text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
              Mesto gde se tradicija konjičkog sporta susreće sa modernim pristupom endurance jahanju.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl font-semibold mb-6 text-primary-foreground">Brzi Linkovi</h4>
            <ul className="space-y-3 font-body text-sm text-primary-foreground/70">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="hover:text-gold transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-xl font-semibold mb-6 text-primary-foreground">Kontakt</h4>
            <ul className="space-y-4 font-body text-sm text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <span className="block mt-1 min-w-[4px] h-[4px] rounded-full bg-primary" />
                <span>
                  Mali Iđoš, Vojvodina<br />
                  Srbija
                </span>
              </li>
              <li>
                <a href="mailto:info@endukas.rs" className="hover:text-primary-foreground transition-colors duration-300">
                  info@endukas.rs
                </a>
              </li>
              <li>
                <a href="tel:+381000000000" className="hover:text-primary-foreground transition-colors duration-300">
                  +381 XX XXX XXXX
                </a>
              </li>
            </ul>
          </div>

          {/* Working Hours - vagy egyéb infó */}
          <div>
             <h4 className="font-heading text-xl font-semibold mb-6 text-primary-foreground">Radno Vreme</h4>
             <ul className="space-y-3 font-body text-sm text-primary-foreground/70">
               <li className="flex justify-between">
                 <span>Pon - Pet:</span>
                 <span>08:00 - 20:00</span>
               </li>
               <li className="flex justify-between">
                 <span>Subota:</span>
                 <span>09:00 - 18:00</span>
               </li>
               <li className="flex justify-between">
                 <span>Nedelja:</span>
                 <span>Zatvoreno</span>
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
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer;