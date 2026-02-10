import { motion } from 'framer-motion';
import { Linkedin, Instagram, Mail, ArrowUpRight } from 'lucide-react';
import logo from '@/assets/logo-nzila-v2.png';
import { Button } from '@/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-nzila-gold/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container-max relative z-10">
        <div className="grid md:grid-cols-4 gap-12 lg:gap-16 mb-20">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-8">
            <a href="#hero" className="inline-block">
              <img
                src={logo}
                alt="Nzila Digital Logo"
                className="h-16 w-auto opacity-90 hover:opacity-100 transition-opacity"
              />
            </a>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              Elevando padrões digitais através de <span className="text-white font-medium">inteligência estratégica</span> e design de classe mundial.
            </p>
            
            {/* Newsletter / CTA */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
               <Button 
                onClick={() => window.open('https://wa.me/244946554601', '_blank')}
                className="btn-gold rounded-full w-fit"
              >
                Iniciar Conversa
              </Button>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase">Explorar</h4>
            <ul className="space-y-4">
              {[
                { label: 'Serviços', href: '#services' },
                { label: 'Educação', href: '#education' },
                { label: 'Portfólio', href: '#portfolio' },
                { label: 'Sobre Nós', href: '#about' },
              ].map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-nzila-gold transition-colors flex items-center gap-2 group"
                  >
                    {link.label}
                    <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / Contact */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase">Conectar</h4>
            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Mail, href: 'mailto:contato@nziladigital.com', label: 'Email' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-nzila-gold hover:border-nzila-gold hover:text-background transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
            <div className="pt-4">
              <p className="text-sm text-muted-foreground">Luanda, Angola</p>
              <p className="text-sm text-white mt-1">+244 946 554 601</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Nzila Digital Solutions.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}