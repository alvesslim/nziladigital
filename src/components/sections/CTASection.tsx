import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTASection() {

  const openWhatsApp = () => {
    window.open(
      'https://wa.me/244946361183?text=Olá! Gostaria de iniciar um projecto com a Nzila Digital.',
      '_blank'
    );
  };

  return (
    <section
      id="contact"
      className="relative py-32 overflow-hidden"
    >
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-nzila-gold/5 via-background to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-nzila-gold/[0.02] blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="container-max relative z-10">
        <div className="relative rounded-sm overflow-hidden border border-white/[0.03] bg-white/[0.01] backdrop-blur-xl p-12 md:p-24 text-center">

          {/* Inner Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-nzila-gold/50 to-transparent animate-gradient-shift" />

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: '-20px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-sm bg-nzila-gold/10 border border-nzila-gold/20 text-nzila-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              <Zap size={14} fill="currentColor" />
              Vamos Escalar?
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-8xl font-display font-bold text-white mb-8 leading-tight tracking-tight">
              Sua marca merece <br />
              <span className="text-gradient-gold drop-shadow-sm">
                estar no topo.
              </span>
            </h2>

            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Não espere o futuro chegar. Construa sua autoridade digital hoje com quem entende de crescimento real.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Button
                className="btn-gold h-auto text-sm px-12 py-6 rounded-sm shadow-2xl w-full sm:w-auto"
                onClick={openWhatsApp}
              >
                <MessageCircle className="mr-3" size={20} />
                Iniciar Projeto Agora
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </div>

            <p className="mt-8 text-sm text-white/30 tracking-wide font-light">
              Atendimento exclusivo • Vagas limitadas para consultoria
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}