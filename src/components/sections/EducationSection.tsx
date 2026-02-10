import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, BookOpen, Rocket, Code, GraduationCap, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const educationAreas = [
  {
    icon: Sparkles,
    title: 'IA e Produtividade',
    description: 'Domine ferramentas de IA para multiplicar sua produção e qualidade criativa.',
    highlight: 'Novo'
  },
  {
    icon: BookOpen,
    title: 'Estratégia Digital',
    description: 'Fundamentos de marketing e branding para construir marcas sólidas no longo prazo.',
    highlight: null
  },
  {
    icon: Rocket,
    title: 'Carreira Tech',
    description: 'Mentoria para profissionais que desejam ingressar ou crescer no mercado de tecnologia.',
    highlight: 'Em Breve'
  },
  {
    icon: Code,
    title: 'Produtos Digitais',
    description: 'Da ideação ao lançamento: como criar produtos digitais escaláveis e lucrativos.',
    highlight: null
  },
];

export function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="relative bg-background py-32 overflow-hidden" ref={ref}>
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-nzila-blue/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />
      
      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-nzila-gold/10 border border-nzila-gold/20">
                    <GraduationCap className="text-nzila-gold" size={24} />
                </div>
                <span className="text-nzila-gold font-bold tracking-widest text-sm uppercase">
                    Nzila Academy
                </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-8 leading-tight">
              O conhecimento é a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-nzila-gold to-white">
                única vantagem injusta.
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 border-l-2 border-nzila-gold/30 pl-6">
              Não vendemos apenas serviços. Compartilhamos o conhecimento prático que usamos para crescer nossos próprios negócios e o de nossos clientes. Sem teorias vazias, apenas campo de batalha.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {educationAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="relative group p-6 rounded-xl bg-white/5 border border-white/5 hover:border-nzila-gold/30 transition-all duration-300"
                >
                    {area.highlight && (
                        <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-nzila-gold text-black text-[10px] font-bold uppercase rounded-sm">
                            {area.highlight}
                        </span>
                    )}
                    <div className="mb-4 text-white group-hover:text-nzila-gold transition-colors">
                        <area.icon size={28} strokeWidth={1.5} />
                    </div>
                    <h4 className="font-bold text-white mb-2">{area.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed content-start">
                        {area.description}
                    </p>
                </motion.div>
              ))}
            </div>

            <Button
              className="btn-gold text-lg px-8 py-6 rounded-full w-full sm:w-auto shadow-[0_0_30px_-10px_rgba(234,179,8,0.3)]"
              onClick={() => window.open('https://wa.me/244946554601?text=Tenho interesse na Nzila Academy.', '_blank')}
            >
              Entrar na Lista de Espera
            </Button>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Abstract Card Stack */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-8 flex flex-col justify-between group">
                <div className="absolute inset-0 bg-gradient-to-br from-nzila-gold/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                {/* Top Badge */}
                <div className="flex justify-between items-start">
                    <div className="flex flex-col">
                        <span className="text-6xl font-bold text-white/10">01</span>
                    </div>
                </div>

                <div className="relative z-10">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-nzila-gold to-amber-600 flex items-center justify-center mb-6 shadow-lg shadow-amber-500/20">
                        <BookOpen className="text-white" size={40} />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">Masterclass Executiva</h3>
                    <ul className="space-y-3 mb-8">
                        {['Liderança Digital', 'Gestão de Crise', 'Branding Pessoal'].map(item => (
                            <li key={item} className="flex items-center gap-3 text-muted-foreground">
                                <Check size={16} className="text-nzila-gold" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Floating Elements behind */}
                <div className="absolute top-10 right-10 w-32 h-32 bg-nzila-blue/20 blur-3xl rounded-full" />
                <div className="absolute bottom-10 left-10 w-40 h-40 bg-nzila-gold/10 blur-3xl rounded-full" />
            </div>

            {/* Decoration Card Behind */}
            <div className="absolute -z-10 top-8 -right-8 w-full h-full rounded-3xl border border-white/5 bg-black/40 backdrop-blur-sm" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}