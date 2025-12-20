import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading text-xl font-bold">E</span>
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold">KK Endukas</h3>
                <p className="text-primary-foreground/70 text-sm">Mali Iđoš</p>
              </div>
            </div>
            <p className="font-body text-primary-foreground/80 leading-relaxed max-w-md mb-6">
              Konjički Klub Endukas je posvećen promovisanju endurance jahanja 
              i izgradnji zajednice ljubitelja konja u Vojvodini.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Brzi Linkovi</h4>
            <ul className="space-y-3">
              {['O Nama', 'Aktivnosti', 'Galerija', 'Događaji', 'Kontakt'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="font-body text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Kontakt</h4>
            <ul className="space-y-3 font-body text-primary-foreground/80">
              <li>Mali Iđoš, Vojvodina</li>
              <li>Srbija</li>
              <li className="pt-2">info@kkendukas.rs</li>
              <li>+381 XX XXX XXXX</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-sm text-primary-foreground/60">
              © {currentYear} Konjički Klub Endukas. Sva prava zadržana.
            </p>
            <p className="font-body text-sm text-primary-foreground/60">
              Građanski klub za endurance jahanje
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
