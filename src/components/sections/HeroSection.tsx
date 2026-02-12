import { motion, Variants } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function HeroSection() {
  const openWhatsApp = () => {
    window.open(
      'https://wa.me/244946554601?text=Olá! Gostaria de saber mais sobre os serviços da Nzila Digital.',
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
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-background selection:bg-nzila-gold/30">
      
      {/* 1. Dynamic Background (Spotlight Effect) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Top Center Glow */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-nzila-blue/20 blur-[120px] rounded-full mix-blend-screen" />
        
        {/* Bottom Right Gold Glow */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-nzila-gold/10 blur-[100px] rounded-full mix-blend-screen" />
        
        {/* Grid Texture */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`,
            backgroundSize: `40px 40px`,
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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 group cursor-default transition-colors hover:border-nzila-gold/50"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nzila-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-nzila-gold"></span>
            </span>
            <span className="text-sm font-medium text-white/80 tracking-wide uppercase text-[10px] sm:text-xs">
              Nzila Digital Solutions 2026
            </span>
          </motion.div>

          {/* Massive Typography H1 */}
          <motion.h1 
            variants={itemVariants}
            className="display-title mb-6"
          >
            <span className="block text-white">Dominamos A</span>
            <span className="block mt-2 relative">
              <span className="absolute -inset-1 blurred-gold opacity-20 blur-xl filter"></span>
              <span className="text-gradient-gold relative z-10">Futuro Digital</span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed font-light"
          >
            Transformamos empresas comuns em <span className="text-white font-medium">líderes de mercado</span> através de inteligência digital, design de alto impacto e estratégias de crescimento escalável.
          </motion.p>

          {/* CTA Group */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button
              onClick={openWhatsApp}
              className="btn-gold group flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} className="group-hover:rotate-12 transition-transform" />
              <span>Iniciar Projeto</span>
            </button>
            
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-glass group flex items-center justify-center gap-2"
            >
              <span>Nossos Serviços</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Social Proof / Metrics */}
          <motion.div 
            variants={itemVariants}
            className="mt-20 pt-10 border-t border-white/5 w-full grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { label: 'Projetos Entregues', value: '100+' },
              { label: 'Crescimento Médio', value: '300%' },
              { label: 'Clientes Ativos', value: '50+' },
              { label: 'Países Alcançados', value: '3' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>

      {/* 3. Floating Abstract Elements (Foreground Depth) */}
      <div className="absolute top-1/3 left-[10%] w-20 h-20 bg-gradient-to-br from-nzila-blue to-transparent opacity-20 blur-2xl animate-float delay-100 pointer-events-none" />
      <div className="absolute bottom-1/3 right-[10%] w-32 h-32 bg-gradient-to-tr from-nzila-gold to-transparent opacity-10 blur-3xl animate-float delay-700 pointer-events-none" />

    </section>
  );
}
