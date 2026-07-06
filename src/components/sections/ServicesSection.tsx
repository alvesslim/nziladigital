import { motion } from 'framer-motion';
import { Globe, Share2, TrendingUp, Layers, ArrowRight, Headphones, GraduationCap, Megaphone, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Globe,
    title: 'Web Design & Dev',
    description: 'Websites de alta performance que convertem visitantes em clientes fiéis. Design responsivo e SEO nativo.',
    features: ['Next.js / React', 'SEO Avançado', 'UX/UI Premium'],
  },
  {
    icon: Share2,
    title: 'Gestão de Tráfego',
    description: 'Estratégias de anúncios pagos no Meta e Google para escalar suas vendas de forma previsível.',
    features: ['Gestão de Orçamento', 'Remarketing', 'Relatórios Mensais'],
  },
  {
    icon: TrendingUp,
    title: 'Social Media',
    description: 'Gestão de marca e comunidade para transformar seguidores em defensores da sua marca.',
    features: ['Conteúdo Viral', 'Design de Feed', 'Gestão de Crise'],
  },
  {
    icon: Layers,
    title: 'Consultoria Digital',
    description: 'Diagnóstico completo do seu negócio para identificar gargalos e oportunidades de crescimento.',
    features: ['Roadmap Digital', 'Mentoria', 'Auditoria Técnica'],
  },
  {
    icon: Headphones,
    title: 'Suporte & Help-Desk',
    description: 'Suporte técnico dedicado para manter seus sistemas e presença digital sempre operacionais.',
    features: ['Suporte 24/7', 'Manutenção Preventiva', 'SLA Garantido'],
  },
  {
    icon: GraduationCap,
    title: 'Aulas & Formações',
    description: 'Capacitação profissional em tecnologia, marketing e ferramentas digitais para a sua equipa.',
    features: ['Workshops Práticos', 'Certificação', 'Materiais Exclusivos'],
  },
  {
    icon: Megaphone,
    title: 'Marketing Digital',
    description: 'Estratégias completas de marketing online para posicionar a sua marca e gerar leads qualificados.',
    features: ['SEO & SEM', 'Email Marketing', 'Funis de Venda'],
  },
  {
    icon: Palette,
    title: 'Design Gráfico',
    description: 'Criação de identidade visual, materiais gráficos e peças de comunicação que destacam a sua marca.',
    features: ['Logótipos', 'Branding Completo', 'Materiais Impressos'],
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative py-32 bg-background overflow-hidden"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-nzila-gold/5 via-background to-background pointer-events-none" />

      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-20px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="text-nzila-gold font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">
            Nossa Expertise
          </span>
          <h2 id="services-heading" className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight">
            Soluções para <span className="text-gradient-gold">Escalar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Da concepção à implementação, entregamos tecnologia de ponta com design de classe mundial.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              role="article"
              aria-label={`Serviço: ${service.title}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: '-20px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3, type: 'spring', stiffness: 300 } }}
              className="group relative h-full"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-nzila-gold/0 via-nzila-gold/10 to-nzila-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl" />

              <div className="relative h-full bg-card/40 backdrop-blur-xl border border-white/[0.03] p-8 rounded-sm hover:border-nzila-gold/30 transition-all duration-500 flex flex-col">
                <div className="w-14 h-14 rounded-sm bg-white/[0.03] flex items-center justify-center mb-6 group-hover:bg-nzila-gold group-hover:text-black transition-all duration-300 text-nzila-gold shadow-lg">
                  <service.icon size={26} strokeWidth={1.5} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-nzila-gold transition-colors">{service.title}</h3>
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
                  {service.title === 'Gestão de Tráfego' ? (
                    <Link
                      to="/orcamento-trafego"
                      className="flex items-center gap-2 text-sm font-bold text-white group-hover:text-nzila-gold transition-colors"
                    >
                      Saiba mais <ArrowRight size={16} />
                    </Link>
                  ) : (
                    <a
                      href={`https://wa.me/244946361183?text=Olá! Gostaria de saber mais sobre o serviço de ${service.title} da Nzila Digital.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-bold text-white group-hover:text-nzila-gold transition-colors"
                    >
                      Saiba mais <ArrowRight size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}