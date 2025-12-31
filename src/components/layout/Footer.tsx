import { motion } from 'framer-motion';
import { Linkedin, Instagram, Mail } from 'lucide-react';
import logo from '@/assets/logo-nzila-v2.png';

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Mail, href: 'mailto:contato@nziladigital.com', label: 'Email' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-nzila-dark text-primary-foreground">
      <div className="container-max section-padding py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Nzila Digital Logo"
                className="h-14 w-auto"
              />
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Soluções Digitais & Educação
              <br />
              Estratégia, tecnologia e conhecimento para o seu crescimento digital.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-nzila-gold">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#about" className="hover:text-nzila-gold transition-colors">Sobre Nós</a></li>
              <li><a href="#services" className="hover:text-nzila-gold transition-colors">Serviços</a></li>
              <li><a href="#education" className="hover:text-nzila-gold transition-colors">Educação</a></li>
              <li><a href="#portfolio" className="hover:text-nzila-gold transition-colors">Portfólio</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-nzila-gold">Contato</h4>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Pronto para crescer no digital?
              <br />
              Entre em contato conosco.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-nzila-gold hover:text-nzila-dark transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/50">
              © {currentYear} Nzila Digital. Todos os direitos reservados.
            </p>
            <p className="text-sm text-primary-foreground/50">
              Soluções Digitais & Educação
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}