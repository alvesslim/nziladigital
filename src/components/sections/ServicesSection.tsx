import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Zap, Share2, TrendingUp, Layers, Code, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Design & Dev',
    description: 'Websites de alta performance que convertem visitantes em clientes fiéis. Design responsivo e SEO nativo.',
    features: ['Next.js / React', 'SEO Avançado', 'UX/UI Premium'],
    color: 'text-blue-400'
  },
  {
    icon: Zap,
    title: 'Landing Pages',
    description: 'Páginas de vendas projetadas com psicologia de consumo para maximizar seu ROAS (Retorno sobre Anúncio).',
    features: ['Copywriting Persuasivo', 'A/B Testing', 'Velocidade Extrema'],
    color: 'text-amber-400'
  },
  {
    icon: Share2,
    title: 'Gestão de Tráfego',
    description: 'Estratégias de anúncios pagos no Meta e Google para escalar suas vendas de forma previsível.',
    features: ['Gestão de Orçamento', 'Remarketing', 'Relatórios Mensais'],
    color: 'text-emerald-400'
  },
  {
    icon: TrendingUp,
    title: 'Social Media',
    description: 'Gestão de marca e comunidade para transformar seguidores em defensores da sua marca.',
    features: ['Conteúdo Viral', 'Design de Feed', 'Gestão de Crise'],
    color: 'text-purple-400'
  },
  {
    icon: Layers,
    title: 'Consultoria Digital',
    description: 'Diagnóstico completo do seu negócio para identificar gargalos e oportunidades de crescimento.',
    features: ['Roadmap Digital', 'Mentoria', 'Auditoria Técnica'],
    color: 'text-rose-400'
  },
  {
    icon: Code,
    title: 'Sistemas Web',
    description: 'Desenvolvimento de dashboards, CRMs e aplicações personalizadas para automatizar sua operação.',
    features: ['SaaS', 'Automação', 'APIs'],
    color: 'text-cyan-400'
  }
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="services"
      className="relative py-32 bg-background overflow-hidden"
      ref={ref}
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-nzila-blue/10 via-background to-background pointer-events-none" />
      
      <div className="container-max relative z-10">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
        >
          <span className="text-nzila-gold font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
            Nossa Expertise
          </span>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Soluções para <span className="text-transparent bg-clip-text bg-gradient-to-r from-nzila-gold to-white">Escalar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Da concepção à implementação, entregamos tecnologia de ponta com design de classe mundial.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative h-full"
            >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-nzila-gold/0 via-nzila-gold/10 to-nzila-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl" />
                
                <div className="relative h-full bg-card/40 backdrop-blur-md border border-white/5 p-8 rounded-2xl hover:border-nzila-gold/30 transition-all duration-300 flex flex-col">
                    <div className={`w-14 h-14 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-nzila-gold group-hover:text-black transition-all duration-300 ${service.color}`}>
                        <service.icon size={26} strokeWidth={1.5} />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-nzila-gold transition-colors">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                        {service.description}
                    </p>

                    <div className="border-t border-white/5 pt-6 mt-auto">
                        <ul className="space-y-2 mb-6">
                            {service.features.map((feature) => (
                                <li key={feature} className="text-sm text-white/60 flex items-center gap-2">
                                    <span className="w-1 h-1 rounded-full bg-nzila-gold" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button className="flex items-center gap-2 text-sm font-bold text-white group-hover:text-nzila-gold transition-colors">
                            Saiba mais <ArrowRight size={16} />
                        </button>
                    </div>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}