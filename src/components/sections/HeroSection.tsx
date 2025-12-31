import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const openWhatsApp = () => {
    window.open(
      'https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os serviços da Nzila Digital.',
      '_blank'
    );
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, hsl(215 85% 20%) 0%, hsl(220 40% 8%) 50%, hsl(215 70% 15%) 100%)',
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gold Gradient Orb */}
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-25"
          style={{
            background: 'radial-gradient(circle, hsl(42 90% 55%) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        {/* Blue Gradient Orb */}
        <motion.div
          className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, hsl(215 85% 45%) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(42 90% 55%) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(42 90% 55%) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Content */}
      <div className="container-max section-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-nzila-gold/30 bg-nzila-gold/10 backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-nzila-gold animate-pulse" />
            <span className="text-sm text-primary-foreground/80">Orlando Correia</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6"
          >
            Soluções Digitais Estratégicas para{' '}
            <span className="text-gradient bg-gradient-to-r from-nzila-gold to-nzila-gold-light">
              Crescimento Real
            </span>{' '}
            no Ambiente Online
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Ajudamos empresas e profissionais a estruturarem, crescerem e escalarem sua presença digital com estratégia, tecnologia e conhecimento.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              variant="gold"
              size="xl"
              onClick={openWhatsApp}
              className="group"
            >
              <MessageCircle className="mr-2" size={20} />
              Falar com a Nzila Digital
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
            <Button
              variant="hero-outline"
              size="xl"
              onClick={() => {
                document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Conheça nossos serviços
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 pt-8 border-t border-primary-foreground/10"
          >
            <p className="text-sm text-primary-foreground/50 mb-6">Transformando negócios com estratégia digital</p>
            <div className="flex flex-wrap justify-center gap-8 text-primary-foreground/40">
              <div className="text-center">
                <p className="text-2xl font-bold text-nzila-gold">100+</p>
                <p className="text-xs">Projetos</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-nzila-gold">50+</p>
                <p className="text-xs">Clientes</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-nzila-gold">5+</p>
                <p className="text-xs">Anos de Experiência</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-nzila-gold/40 flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-nzila-gold"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}