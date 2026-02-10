import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle, ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const openWhatsApp = () => {
    window.open(
      'https://wa.me/244946554601?text=Olá! Gostaria de saber mais sobre os serviços da Nzila Digital.',
      '_blank'
    );
  };

  return (
    <section
      id="contact"
      className="relative py-32 overflow-hidden"
      ref={ref}
    >
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-nzila-blue/10 via-background to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-nzila-gold/5 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="container-max relative z-10">
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg p-12 md:p-24 text-center">
            
            {/* Inner Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-nzila-gold/50 to-transparent" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nzila-gold/10 border border-nzila-gold/20 text-nzila-gold text-sm font-bold uppercase tracking-widest mb-8">
                    <Zap size={16} fill="currentColor" />
                    Vamos Escalar?
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-8 leading-tight">
                    Sua marca merece <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-nzila-gold to-white drop-shadow-sm">
                        estar no topo.
                    </span>
                </h2>
                
                <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                    Não espere o futuro chegar. Construa sua autoridade digital hoje com quem entende de crescimento real.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Button
                        className="btn-gold h-auto text-lg px-10 py-5 rounded-full shadow-[0_0_40px_-10px_rgba(234,179,8,0.5)] hover:shadow-[0_0_60px_-10px_rgba(234,179,8,0.6)] w-full sm:w-auto"
                        onClick={openWhatsApp}
                    >
                        <MessageCircle className="mr-3" size={24} />
                        Iniciar Projeto Agora
                        <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
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