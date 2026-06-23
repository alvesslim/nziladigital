import { motion, Variants } from 'framer-motion';
import { ArrowRight, MessageCircle, TrendingUp, Users } from 'lucide-react';
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
        delayChildren: 0.2,
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

  const imageVariants: Variants = {
    hidden: { scale: 0.9, opacity: 0, rotateX: 10 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 20,
        delay: 0.4
      }
    }
  };



  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-background selection:bg-nzila-gold/30 pt-24 pb-12">
      
      {/* 1. Dynamic Background (Spotlight Effect) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Top Left Glow */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[500px] bg-nzila-gold/5 blur-[120px] rounded-full mix-blend-screen animate-pulse-gold" />
        
        {/* Right Glow */}
        <div className="absolute top-1/2 right-[-20%] -translate-y-1/2 w-[800px] h-[800px] bg-nzila-gold/[0.03] blur-[150px] rounded-full animate-pulse-gold delay-500" />

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
      <div className="container-max relative z-10 w-full px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTA */}
          <motion.div
            className="flex flex-col items-start text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl mb-8 group cursor-default transition-all hover:border-nzila-gold/40 hover:bg-white/[0.05]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nzila-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-nzila-gold"></span>
              </span>
              <span className="text-xs font-semibold text-nzila-gold tracking-[0.2em] uppercase">
                Nzila Digital · Excellence
              </span>
            </motion.div>

            {/* Typography H1 */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
            >
              <span className="block text-white opacity-95">A agência que</span>
              <span className="block text-white opacity-95">transforma</span>
              <span className="block mt-2 relative inline-block">
                <span className="absolute -inset-4 bg-nzila-gold/20 blur-2xl filter rounded-full"></span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-nzila-gold via-yellow-200 to-nzila-gold relative z-10">Negócios em Marcas</span>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-white/70 max-w-xl mb-10 leading-relaxed font-light"
            >
              Evoluímos empresas comuns para <span className="text-nzila-gold font-medium">líderes de mercado</span> através de inteligência digital, design imersivo e estratégias de alto impacto.
            </motion.p>

            {/* CTA Group */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <button
                onClick={openWhatsApp}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-nzila-gold text-black font-semibold rounded-lg overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(201,168,76,0.3)]"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <MessageCircle size={20} className="group-hover:rotate-12 transition-transform" />
                <span className="relative">Solicitar Orçamento</span>
              </button>

              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 text-white font-medium rounded-lg border border-white/10 hover:bg-white/10 transition-all hover:border-white/20"
              >
                <span>Descobrir Serviços</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Metrics (Moved below CTA for Split Layout) */}
            <motion.div
              variants={itemVariants}
              className="mt-16 pt-8 border-t border-white/10 w-full grid grid-cols-3 gap-6"
            >
              {[
                { label: 'Projetos', value: '100+' },
                { label: 'ROI Médio', value: '300%' },
                { label: 'Países', value: '3' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col group">
                  <span className="text-3xl font-bold text-white mb-1 group-hover:text-nzila-gold transition-colors">{stat.value}</span>
                  <span className="text-[10px] text-white/50 uppercase tracking-wider font-medium">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Abstract Professional UI */}
          <motion.div 
            className="relative hidden lg:flex items-center justify-center h-full min-h-[600px] perspective-1000"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Core Glass Pane */}
            <motion.div 
              variants={imageVariants}
              className="relative z-10 w-full max-w-[460px] aspect-square rounded-3xl overflow-hidden border border-white/[0.08] bg-black/40 backdrop-blur-3xl shadow-[0_0_80px_rgba(201,168,76,0.1)] flex flex-col justify-between p-10 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-nzila-gold/10 via-transparent to-transparent opacity-50"></div>
              
              <div className="relative z-20 flex justify-between items-start w-full">
                <div className="flex flex-col">
                  <span className="text-white/50 text-sm font-medium tracking-wider uppercase mb-1">Crescimento</span>
                  <span className="text-5xl font-bold text-white tracking-tight group-hover:text-nzila-gold transition-colors duration-500">+342%</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-nzila-gold/10 flex items-center justify-center border border-nzila-gold/20">
                  <TrendingUp size={24} className="text-nzila-gold" />
                </div>
              </div>

              {/* Abstract Chart */}
              <div className="relative z-20 flex items-end gap-3 h-40 mt-8 w-full">
                {[40, 55, 45, 70, 65, 85, 100].map((height, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ duration: 1.5, delay: 0.5 + (i * 0.1), ease: "easeOut" }}
                    className={`flex-1 rounded-t-sm ${i === 6 ? 'bg-nzila-gold shadow-[0_0_20px_rgba(201,168,76,0.5)]' : 'bg-white/10 group-hover:bg-white/20'} transition-colors duration-500`}
                  />
                ))}
              </div>

              <div className="relative z-20 flex items-center gap-4 mt-8 pt-6 border-t border-white/5">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-zinc-800 border-2 border-black flex items-center justify-center">
                      <Users size={14} className="text-white/50" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-white">Marcas parceiras</span>
                  <span className="text-xs text-white/50">Junte-se aos líderes</span>
                </div>
              </div>
            </motion.div>

            {/* Background decorative ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] aspect-square border border-white/[0.03] rounded-full z-0 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] aspect-square border border-nzila-gold/[0.02] rounded-full z-0 pointer-events-none animate-[spin_60s_linear_infinite]" />

          </motion.div>
        </div>
      </div>
    </section>
  );
}
