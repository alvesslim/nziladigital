import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const openWhatsApp = () => {
    window.open(
      'https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os serviços da Nzila Digital.',
      '_blank'
    );
  };

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
      ref={ref}
      style={{
        background: 'linear-gradient(135deg, hsl(215 85% 22%) 0%, hsl(220 40% 10%) 50%, hsl(42 70% 30%) 100%)',
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-25"
          style={{
            background: 'radial-gradient(circle, hsl(42 90% 55%) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, hsl(215 85% 45%) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 rounded-2xl bg-nzila-gold/20 flex items-center justify-center mx-auto mb-8"
          >
            <MessageCircle className="text-nzila-gold" size={28} />
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Pronto para fortalecer sua presença digital?
          </h2>
          <p className="text-xl text-primary-foreground/70 mb-10 leading-relaxed">
            Vamos conversar sobre como podemos ajudar você ou sua empresa a crescer
            de forma estratégica no ambiente online.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
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
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-sm text-primary-foreground/50"
          >
            Resposta rápida • Sem compromisso • Atendimento personalizado
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}