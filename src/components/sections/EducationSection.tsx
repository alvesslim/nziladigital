import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, BookOpen, Rocket, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const educationAreas = [
  {
    icon: Sparkles,
    title: 'Inteligência Artificial',
    description: 'Formações práticas sobre como utilizar IA para aumentar produtividade e resultados.',
  },
  {
    icon: BookOpen,
    title: 'Marketing Digital',
    description: 'Estratégias e táticas de marketing digital para crescer no ambiente online.',
  },
  {
    icon: Rocket,
    title: 'Vida Profissional no Digital',
    description: 'Desenvolvimento de carreira e oportunidades no mercado digital.',
  },
  {
    icon: Code,
    title: 'Produtos Digitais',
    description: 'Criação e escala de produtos digitais rentáveis e sustentáveis.',
  },
];

export function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="bg-background section-padding" ref={ref}>
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-nzila-gold font-medium text-sm tracking-wider uppercase mb-4">
              Educação & Formação
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Conhecimento que Transforma
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              A educação é um pilar estratégico da Nzila Digital. Desenvolvemos formações voltadas para
              crescimento digital, tecnologia e negócios online, capacitando profissionais e empresas
              para o futuro.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {educationAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-nzila-gold/10 flex items-center justify-center shrink-0">
                    <area.icon className="text-nzila-gold" size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">{area.title}</h4>
                    <p className="text-xs text-muted-foreground">{area.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button
              variant="gold"
              size="lg"
              onClick={() => {
                window.open(
                  'https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre as formações da Nzila Digital.',
                  '_blank'
                );
              }}
            >
              Saber mais sobre formações
            </Button>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, hsl(215 85% 25%) 0%, hsl(42 70% 45%) 100%)',
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-primary-foreground p-8">
                  <div className="w-20 h-20 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-6 animate-float">
                    <BookOpen size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Em Breve</h3>
                  <p className="text-primary-foreground/70">
                    Novas formações e cursos sendo desenvolvidos
                  </p>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-24 h-24 rounded-full border border-nzila-gold/20" />
              <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full border border-nzila-gold/20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}