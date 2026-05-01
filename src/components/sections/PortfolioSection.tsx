import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { FolderOpen, ExternalLink } from 'lucide-react';

type Category = 'Todos' | 'Fotografia' | 'Design' | 'Programação';

const categories: Category[] = ['Todos', 'Fotografia', 'Design', 'Programação'];

const projects = [
  // Design — Branding / Identity
  { id: 1, src: '/portfolio/01.jpg', title: 'Arcanjo Digital — Branding', category: 'Design' as Category, link: null },
  { id: 2, src: '/portfolio/02.jpg', title: 'Donselu — Identidade Visual', category: 'Design' as Category, link: null },
  { id: 3, src: '/portfolio/03.jpg', title: 'Auto Car WS — Logo 3D', category: 'Design' as Category, link: null },
  { id: 4, src: '/portfolio/1.jpg', title: 'Arcanjo Digital — Logo 3D', category: 'Design' as Category, link: null },
  { id: 5, src: '/portfolio/2.jpg', title: 'Donselu — Logo 3D', category: 'Design' as Category, link: null },
  { id: 6, src: '/portfolio/3.jpg', title: 'Auto Car WS — Branding', category: 'Design' as Category, link: null },
  { id: 7, src: '/portfolio/P4.jpg', title: 'Social Media — Campanhas', category: 'Design' as Category, link: null },
  { id: 8, src: '/portfolio/P5.jpg', title: 'Auto Car WS — Outdoor', category: 'Design' as Category, link: null },

  // Fotografia
  { id: 10, src: '/portfolio/f1.jpeg', title: 'ITAGS LIBEA — Sessão Escolar', category: 'Fotografia' as Category, link: null },
  { id: 11, src: '/portfolio/f2.jpeg', title: 'Retrato — Sessão Individual', category: 'Fotografia' as Category, link: null },
  { id: 12, src: '/portfolio/f4.jpeg', title: 'Retrato — Sessão Estudantil', category: 'Fotografia' as Category, link: null },

  // Programação - Websites
  { id: 9, src: '/portfolio/P6.jpg', title: 'ITAGS LIBEA — Sistema de Gestão Escolar', category: 'Programação' as Category, link: null },
  { id: 13, src: '/portfolio/w1.jpg', title: 'José Zinga — Website', category: 'Programação' as Category, link: null },
  { id: 14, src: '/portfolio/w2.jpg', title: 'Manhanga — Dashboard', category: 'Programação' as Category, link: null },
  { id: 15, src: '/portfolio/w3.jpg', title: 'Manhanga — Login Page', category: 'Programação' as Category, link: null },
  { id: 16, src: '/portfolio/11.png', title: 'Facilita — Sistema Académico', category: 'Programação' as Category, link: 'https://facilita.it.ao/' },
  { id: 17, src: '/portfolio/12.png', title: 'Elias da Silva — Portfólio', category: 'Programação' as Category, link: 'https://eliasdasilva.it.ao/' },
  { id: 18, src: '/portfolio/13.png', title: 'Motherboard — Website Oficial', category: 'Programação' as Category, link: 'https://motherboard.it.ao/' },
];

export function PortfolioSection() {
  const ref = useRef(null);
  const [activeCategory, setActiveCategory] = useState<Category>('Todos');

  const filteredProjects = activeCategory === 'Todos'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="relative bg-background py-32 overflow-hidden" ref={ref}>
      {/* Background Strips */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/[0.02]" />
        <div className="absolute top-0 left-2/4 w-[1px] h-full bg-white/[0.02]" />
        <div className="absolute top-0 left-3/4 w-[1px] h-full bg-white/[0.02]" />
      </div>

      <div className="container-max relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-20px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <FolderOpen size={18} className="text-nzila-gold" />
            <span className="text-nzila-gold font-bold tracking-[0.3em] text-[10px] uppercase">
              Selected Works
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white tracking-tight leading-[1.1] mb-6">
            Onde a estratégia encontra
            <span className="text-gradient-gold"> a arte digital.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma amostra dos nossos projectos mais recentes em design, fotografia e desenvolvimento.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-sm text-sm font-bold uppercase tracking-[0.15em] transition-all duration-300 border ${activeCategory === cat
                ? 'bg-nzila-gold text-black border-nzila-gold'
                : 'bg-white/[0.02] text-white/60 border-white/10 hover:border-nzila-gold/40 hover:text-white'
                }`}
            >
              {cat === 'Todos' ? 'Todos os Projetos' : cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative overflow-hidden rounded-sm border border-white/[0.03] bg-[#111] hover:border-nzila-gold/20 transition-colors duration-500"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.src}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                    <div className="p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out w-full">
                      <span className="text-[10px] font-bold text-nzila-gold uppercase tracking-[0.2em] mb-2 block">
                        {project.category}
                      </span>
                      <h3 className="text-lg font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-bold text-nzila-gold uppercase tracking-wider hover:underline"
                        >
                          Ver Projecto <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}