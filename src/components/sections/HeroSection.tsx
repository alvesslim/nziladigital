import { motion, Variants } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { track } from '@vercel/analytics';

export function HeroSection() {
  const openWhatsApp = () => {
    track('whatsapp_click', { location: 'hero' });
    window.open(
      'https://wa.me/244946361183?text=Olá! Gostaria de solicitar um orçamento com a Nzila Digital.',
      '_blank',
      'noopener,noreferrer'
    );
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-background selection:bg-nzila-gold/30">

      {/* 1. Dynamic Background (Spotlight Effect) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Top Center Glow */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-nzila-gold/5 blur-[120px] rounded-full mix-blend-screen animate-pulse-gold" />

        {/* Center Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-nzila-gold/[0.02] blur-[150px] rounded-full animate-pulse-gold delay-500" />

        {/* Grid Texture */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(#C9A84C 1px, transparent 1px)`,
            backgroundSize: `64px 64px`,
          }}
        />
      </div>

      {/* 2. Main Content */}
      <div className="container-max relative z-10 pt-20">
        <motion.div
          className="max-w-5xl mx-auto text-center flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-sm border border-white/5 bg-white/[0.02] backdrop-blur-xl mb-10 group cursor-default transition-all hover:border-nzila-gold/30"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nzila-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-nzila-gold"></span>
            </span>
            <span className="text-[10px] font-bold text-nzila-gold tracking-[0.3em] uppercase">
              Nzila Digital · Excellence 2026
            </span>
          </motion.div>

          {/* Massive Typography H1 */}
          <motion.h1
            variants={itemVariants}
            className="display-title mb-8"
          >
            <span className="block text-white opacity-90">A agência que transforma</span>
            <span className="block mt-2 relative">
              <span className="absolute -inset-4 blurred-gold opacity-10 blur-2xl filter"></span>
              <span className="text-gradient-gold relative z-10">Negócios em Marcas</span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed font-light tracking-wide"
          >
            Transformamos empresas comuns em <span className="text-nzila-gold font-medium">líderes de mercado</span> através de inteligência digital, design de alto impacto e resultados reais.
          </motion.p>

          {/* CTA Group */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
          >
            <button
              onClick={openWhatsApp}
              className="btn-gold group flex items-center justify-center gap-3"
            >
              <MessageCircle size={18} className="group-hover:rotate-12 transition-transform" />
              <span>Solicitar Orçamento</span>
            </button>

            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-glass group flex items-center justify-center gap-3"
            >
              <span>Descobrir Serviços</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Social Proof / Metrics */}
          <motion.div
            variants={itemVariants}
            className="mt-24 pt-12 border-t border-white/[0.03] w-full grid grid-cols-2 md:grid-cols-4 gap-12"
          >
            {[
              { label: 'Projetos de Elite', value: '100+' },
              { label: 'ROI Estimado', value: '300%' },
              { label: 'Marcas Ativas', value: '50+' },
              { label: 'Presença Global', value: '3' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center group">
                <span className="text-3xl md:text-5xl font-bold text-white mb-2 group-hover:text-nzila-gold transition-colors duration-500">{stat.value}</span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-[0.25em] font-medium">{stat.label}</span>
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>

      {/* 3. Floating Abstract Elements (Foreground Depth) */}
      <div className="absolute top-1/4 left-[5%] w-32 h-32 bg-nzila-gold/5 blur-[100px] animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 right-[5%] w-48 h-48 bg-nzila-gold/[0.03] blur-[120px] animate-float delay-700 pointer-events-none" />

    </section>
  );
}
