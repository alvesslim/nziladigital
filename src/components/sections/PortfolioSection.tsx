import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, ArrowUpRight, FolderOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'E-commerce Premium',
    category: 'Desenvolvimento Web',
    description: 'Plataforma de vendas high-ticket com experiência de compra imersiva e checkout otimizado.',
    tags: ['Next.js', 'Stripe', 'UI/UX'],
    gradient: 'from-blue-600 to-indigo-900'
  },
  {
    id: 2,
    title: 'SaaS Dashboard',
    category: 'Product Design',
    description: 'Interface administrativa para gestão de frota com análise de dados em tempo real.',
    tags: ['React', 'D3.js', 'Tailwind'],
    gradient: 'from-emerald-600 to-teal-900'
  },
  {
    id: 3,
    title: 'Campanha Black Friday',
    category: 'Marketing de Performance',
    description: 'Estratégia omnicanal que gerou 800% de ROAS para varejista de moda.',
    tags: ['Meta Ads', 'Google Ads', 'Strategy'],
    gradient: 'from-purple-600 to-fuchsia-900'
  },
  {
    id: 4,
    title: 'Rebranding Corporativo',
    category: 'Branding',
    description: 'Redesign completo de identidade visual para consultoria financeira internacional.',
    tags: ['Brand Identity', 'Guidelines', 'Social'],
    gradient: 'from-amber-500 to-orange-900'
  },
];

export function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="portfolio" className="relative bg-background py-32 overflow-hidden" ref={ref}>
      {/* Background Strips */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/5" />
        <div className="absolute top-0 left-2/4 w-[1px] h-full bg-white/5" />
        <div className="absolute top-0 left-3/4 w-[1px] h-full bg-white/5" />
      </div>

      <div className="container-max relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                <div className="flex items-center gap-3 mb-4">
                    <FolderOpen size={20} className="text-nzila-gold" />
                    <span className="text-nzila-gold font-bold tracking-[0.2em] text-xs uppercase">
                        Selected Works
                    </span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white max-w-2xl">
                    Onde a estratégia encontra 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-nzila-gold to-white"> a arte digital.</span>
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 hover:text-white rounded-full px-8">
                    Ver Todos os Projetos <ArrowUpRight className="ml-2" size={16} />
                </Button>
            </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-card/10 border border-white/10">
                {/* Image Placeholder Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50 transition-transform duration-700 group-hover:scale-105`} />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    <div className="flex justify-end">
                        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                            <ExternalLink size={20} />
                        </div>
                    </div>
                
                    <div>
                        <div className="flex flex-wrap gap-2 mb-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                            {project.tags.map(tag => (
                                <span key={tag} className="text-xs font-medium text-white/80 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h3 className="text-3xl font-display font-bold text-white mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            {project.title}
                        </h3>
                        <p className="text-white/70 max-w-md line-clamp-2">
                            {project.description}
                        </p>
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}