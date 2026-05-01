import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo-nzila-official.png';
import { track } from '@vercel/analytics';

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

  // Scroll Progress Logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

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
    track('menu_navigation', { section: href });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 [transform:translate3d(0,0,0)] will-change-transform ${isScrolled
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
              onClick={() => {
                track('whatsapp_click', { location: 'header_desktop' });
                window.open('https://wa.me/244946361183?text=Olá! Gostaria de falar com um especialista da Nzila Digital.', '_blank');
              }}
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

        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-nzila-gold origin-left z-[61]"
          style={{ scaleX }}
        />
      </motion.header>


      {/* Mobile Menu Overlay - Outside Header Container */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-[#050505] z-[55] flex flex-col items-center justify-center md:hidden"
          >
            {/* Close Button Inside Menu */}
            <button
              className="absolute top-6 right-6 p-3 text-white bg-white/5 rounded-full border border-white/10 active:scale-90 transition-transform"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Fechar menu"
            >
              <X size={28} />
            </button>

            {/* Background Decor for Mobile Menu */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-nzila-gold/10 blur-[100px] rounded-full" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-nzila-gold/5 blur-[100px] rounded-full" />
            </div>

            <div className="relative z-10 flex flex-col items-center gap-8 w-full px-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
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

              <div className="w-20 h-[1px] bg-white/10 my-1" />

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="w-full flex flex-col gap-4"
              >
                <Button
                  className="btn-gold h-14 w-full text-xs font-black shadow-2xl"
                  onClick={() => window.open('https://wa.me/244946361183?text=Olá! Vim pelo site da Nzila Digital e quero começar um projecto.', '_blank')}
                >
                  WhatsApp da Agência
                </Button>

                <p className="text-center text-white/30 text-[9px] uppercase tracking-[0.3em] font-bold">
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

