import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'Projeto E-commerce',
    category: 'Website',
    description: 'Loja virtual completa com integração de pagamentos e gestão de produtos.',
    image: null,
    link: '#',
  },
  {
    id: 2,
    title: 'Landing Page SaaS',
    category: 'Landing Page',
    description: 'Página de conversão para startup de tecnologia com alta taxa de conversão.',
    image: null,
    link: '#',
  },
  {
    id: 3,
    title: 'Identidade Digital',
    category: 'Branding',
    description: 'Estruturação completa de presença digital para consultoria empresarial.',
    image: null,
    link: '#',
  },
  {
    id: 4,
    title: 'Campanha de Tráfego',
    category: 'Marketing',
    description: 'Gestão de tráfego pago com ROI de 400% em 3 meses de operação.',
    image: null,
    link: '#',
  },
];

export function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="portfolio" className="bg-muted section-padding" ref={ref}>
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-nzila-gold font-medium text-sm tracking-wider uppercase mb-4">
            Portfólio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Projetos que Geram Resultados
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Conheça alguns dos projetos que desenvolvemos para nossos clientes.
            Cada solução é pensada estrategicamente para gerar crescimento real.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                {/* Image Placeholder */}
                <div className="aspect-video relative overflow-hidden">
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, hsl(215 85% ${20 + index * 5}%) 0%, hsl(42 70% ${45 + index * 5}%) 100%)`,
                    }}
                  >
                    <div className="text-center text-primary-foreground p-6">
                      <div className="w-16 h-16 rounded-xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <ExternalLink size={24} />
                      </div>
                      <p className="text-sm text-primary-foreground/70">Imagem do projeto</p>
                    </div>
                  </div>
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-nzila-gold text-nzila-dark backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-nzila-gold transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <Button variant="ghost" size="sm" className="group/btn -ml-2 hover:text-nzila-gold">
                    Ver projeto
                    <ArrowUpRight className="ml-1 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" size={16} />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            Novos projetos sendo adicionados constantemente.{' '}
            <a href="#contact" className="text-nzila-gold hover:underline">
              Entre em contato
            </a>{' '}
            para saber mais.
          </p>
        </motion.div>
      </div>
    </section>
  );
}