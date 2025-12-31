import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Heart } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Missão',
    description: 'Impulsionar o crescimento digital de empresas e pessoas com soluções estratégicas e práticas.',
  },
  {
    icon: Eye,
    title: 'Visão',
    description: 'Ser uma referência em soluções digitais e educação para o crescimento online.',
  },
  {
    icon: Heart,
    title: 'Propósito',
    description: 'Ajudar negócios e profissionais a evoluírem no digital de forma estruturada e consciente.',
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="bg-background section-padding" ref={ref}>
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-nzila-gold font-medium text-sm tracking-wider uppercase mb-4">
            Quem Somos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Estratégia, Execução e Educação Digital
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Somos uma empresa focada em soluções digitais que unem estratégia, execução e educação.
            Acreditamos que crescimento digital sustentável exige planejamento, tecnologia e conhecimento contínuo.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 h-full border border-border shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-nzila-blue to-nzila-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="text-primary-foreground" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-muted rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Por que a Nzila Digital?
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Combinamos visão estratégica de longo prazo com atuação prática orientada a resultados.
                Nosso diferencial está no equilíbrio entre serviços e educação, focando em crescimento real e sustentável.
              </p>
              <ul className="space-y-3">
                {[
                  'Visão estratégica de longo prazo',
                  'Atuação prática e orientada a resultados',
                  'Foco em crescimento real e sustentável',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <span className="w-2 h-2 rounded-full bg-nzila-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-nzila-blue/20 to-nzila-gold/20 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-5xl font-bold text-gradient bg-gradient-to-r from-nzila-blue to-nzila-gold mb-2">5+</p>
                  <p className="text-muted-foreground">Anos transformando<br />negócios no digital</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}