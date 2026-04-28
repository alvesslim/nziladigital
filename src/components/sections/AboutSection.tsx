import { motion } from 'framer-motion';
import { Target, Eye, Heart, CheckCircle2 } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Missão',
    description: 'Impulsionar o crescimento digital com inteligência estratégica e execução de elite.',
    gradient: 'from-[#C9A84C]/10 to-transparent'
  },
  {
    icon: Eye,
    title: 'Visão',
    description: 'Ser a autoridade definitiva em transformação digital e educação executiva.',
    gradient: 'from-[#C9A84C]/10 to-transparent'
  },
  {
    icon: Heart,
    title: 'Propósito',
    description: 'Democratizar o acesso a estratégias de crescimento de classe mundial.',
    gradient: 'from-[#C9A84C]/10 to-transparent'
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative bg-background py-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-nzila-gold/[0.03] to-transparent pointer-events-none" />

      <div className="container-max relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-20px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-4 rounded-sm bg-nzila-gold/10 border border-nzila-gold/20 text-nzila-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
              A Essência
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white leading-[1.1] tracking-tight">
              Estratégia. Execução. <br />
              <span className="text-gradient-gold">
                Evolução Contínua.
              </span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-lg text-lg leading-relaxed mt-8">
            Não somos apenas uma agência. Somos seus parceiros estratégicos na conquista do território digital.
          </p>
        </motion.div>

        {/* Bento Grid Layout for Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-32">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: '-20px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative h-full bg-card/50 backdrop-blur-xl border border-white/5 rounded-xl p-8 hover:bg-card/80 transition-all duration-300 overflow-hidden">
                {/* Hover Gradient Blur */}
                <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${value.gradient} blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-sm bg-white/[0.03] border border-white/5 flex items-center justify-center mb-6 text-white group-hover:bg-nzila-gold group-hover:text-black group-hover:border-nzila-gold transition-all duration-500 shadow-xl">
                    <value.icon size={26} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-white/90 transition-colors">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Split Section */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <h3 className="text-3xl font-display font-bold text-white mb-6">
                Por que a <span className="text-nzila-gold">Nzila Digital?</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Combinamos visão de longo prazo com táticas de guerrilha digital. Enquanto outros focam apenas em "likes", nós focamos na construção de ativos digitais que geram receita real.
              </p>
              <ul className="space-y-4">
                {[
                  'Metodologia Proprietária de Crescimento',
                  'Design Orientado a Conversão (CRO)',
                  'Consultoria Executiva Dedicada'
                ].map((item, i) => (
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.3 + (i * 0.1), ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center gap-4 text-white font-medium"
                  >
                    <CheckCircle2 className="text-nzila-gold" size={20} />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Stats / Visual Side */}
            <div className="relative bg-black/40 p-10 md:p-16 flex items-center justify-center min-h-[400px]">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 md:rounded-r-3xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

              <div className="relative z-10 text-center">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 15 }}
                >
                  <span className="block text-7xl md:text-8xl font-bold text-white mb-2 tracking-tighter">
                    5<span className="text-nzila-gold">+</span>
                  </span>
                  <span className="text-sm md:text-base text-muted-foreground uppercase tracking-widest font-semibold border-t border-white/10 pt-4 inline-block">
                    Anos de Liderança Digital
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section >
  );
}