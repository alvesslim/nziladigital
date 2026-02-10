import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo-nzila-v2.png';

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

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-background/80 backdrop-blur-xl border-b border-white/5 py-3'
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
          className="relative z-50"
          whileHover={{ scale: 1.05 }}
        >
          {/* Assuming logo might need a brightness filter for dark mode if it's dark text, 
              but usually logos are prepared. If not, we can add brightness-0 invert if needed. 
              For now keeping as is. */}
          <img
            src={logo}
            alt="Nzila Digital Logo"
            className="h-12 w-auto object-contain"
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
            className="bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-full px-6 transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://wa.me/244946554601', '_blank')}
          >
            Fale Conosco
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex items-center justify-center md:hidden"
            >
              <div className="flex flex-col items-center gap-8">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="text-2xl font-bold text-white hover:text-nzila-gold transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="w-12 h-[1px] bg-white/20 my-4" />
                <Button
                  className="bg-nzila-gold hover:bg-yellow-500 text-background font-bold rounded-full px-8 py-6 text-lg"
                  onClick={() => window.open('https://wa.me/244946554601', '_blank')}
                >
                  WhatsApp
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
