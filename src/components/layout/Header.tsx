import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo-nzila-official.png';

const navItems = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#about' },
  { label: 'Serviços', href: '#services' },
  { label: 'Educação', href: '#education' },
  { label: 'Portfólio', href: '#portfolio' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-background/95 backdrop-blur-xl border-b border-white/5 py-3'
          : 'bg-transparent py-5'
          }`}
      >
        <div className="container-max flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#hero');
            }}
            className="relative z-[60]"
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={logo}
              alt="Nzila Digital Logo"
              className="h-10 w-auto object-contain"
              loading="eager"
              decoding="async"
            />
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-sm font-medium text-white/70 hover:text-nzila-gold transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-nzila-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            <Button
              className="btn-gold h-10 px-6"
              onClick={() => window.open('https://wa.me/244946361183?text=Olá! Gostaria de falar com um especialista da Nzila Digital.', '_blank')}
            >
              Falar com Especialista
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-[60] p-2 text-white bg-white/5 rounded-sm border border-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay - Outside Header Container */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-[#050505] z-[55] flex flex-col items-center justify-center md:hidden"
          >
            {/* Background Decor for Mobile Menu */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-nzila-gold/10 blur-[100px] rounded-full" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-nzila-gold/5 blur-[100px] rounded-full" />
            </div>

            <div className="relative z-10 flex flex-col items-center gap-10 w-full px-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-3xl font-display font-bold text-white hover:text-nzila-gold transition-colors active:scale-95"
                >
                  {item.label}
                </motion.a>
              ))}

              <div className="w-20 h-[1px] bg-white/10 my-2" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="w-full flex flex-col gap-4"
              >
                <Button
                  className="btn-gold h-16 w-full text-sm sm:text-base font-black shadow-[0_0_30px_-5px_rgba(201,168,76,0.3)]"
                  onClick={() => window.open('https://wa.me/244946361183?text=Olá! Vim pelo site da Nzila Digital e quero começar um projecto.', '_blank')}
                >
                  Falar no WhatsApp
                </Button>

                <p className="text-center text-white/30 text-[10px] uppercase tracking-[0.3em] font-bold">
                  Nzila Digital · 2026
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

