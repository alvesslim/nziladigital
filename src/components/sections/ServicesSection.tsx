import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Zap, Share2, TrendingUp, Layers } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Criação de Websites',
    description: 'Websites e páginas profissionais que transmitem credibilidade e convertem visitantes em clientes.',
    features: ['Design responsivo', 'SEO otimizado', 'Alta performance'],
  },
  {
    icon: Zap,
    title: 'Landing Pages',
    description: 'Páginas focadas em conversão, estrategicamente desenvolvidas para gerar resultados mensuráveis.',
    features: ['Alta conversão', 'Testes A/B', 'Copywriting estratégico'],
  },
  {
    icon: Share2,
    title: 'Gestão de Mídias Sociais',
    description: 'Gestão estratégica de redes sociais para construir autoridade e engajamento.',
    features: ['Estratégia de conteúdo', 'Calendário editorial', 'Análise de métricas'],
  },
  {
    icon: TrendingUp,
    title: 'Tráfego Pago',
    description: 'Configuração e gestão de campanhas de anúncios para atrair o público certo.',
    features: ['Google Ads', 'Meta Ads', 'Otimização de ROI'],
  },
  {
    icon: Layers,
    title: 'Estruturação Digital',
    description: 'Estruturação completa da presença digital do seu negócio, do planejamento à execução.',
    features: ['Diagnóstico completo', 'Plano estratégico', 'Implementação'],
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="services"
      className="section-padding relative overflow-hidden"
      ref={ref}
      style={{
        background: 'linear-gradient(180deg, hsl(220 40% 8%) 0%, hsl(215 60% 12%) 100%)',
      }}
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(42 90% 55%) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container-max relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-nzila-gold font-medium text-sm tracking-wider uppercase mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Soluções Digitais Completas
          </h2>
          <p className="text-lg text-primary-foreground/70 leading-relaxed">
            Do planejamento à execução, oferecemos serviços integrados para impulsionar sua presença digital.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 h-full border border-primary-foreground/10 hover:border-nzila-gold/30 hover:bg-primary-foreground/10 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-nzila-gold/20 flex items-center justify-center mb-5 group-hover:bg-nzila-gold group-hover:scale-110 transition-all duration-300">
                  <service.icon className="text-nzila-gold group-hover:text-nzila-dark" size={22} />
                </div>
                <h3 className="text-xl font-bold text-primary-foreground mb-3">{service.title}</h3>
                <p className="text-primary-foreground/60 mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-primary-foreground/50">
                      <span className="w-1.5 h-1.5 rounded-full bg-nzila-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}