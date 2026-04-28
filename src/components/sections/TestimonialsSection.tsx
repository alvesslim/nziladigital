import { motion } from 'framer-motion';
import { Quote, Star, ShieldCheck } from 'lucide-react';

const testimonials = [
    {
        content: "A Nzila Digital criou toda a identidade visual da minha marca com profissionalismo e criatividade. O logotipo, os flyers e os posts para redes sociais ficaram incríveis.",
        author: "MANHANGA",
        company: "Beleza & Estética",
        role: "Serviços Empresária",
        rating: 5,
        initials: "M"
    },
    {
        content: "O sistema de gestão escolar desenvolvido pela Nzila Digital facilitou muito o processo de matrículas e controle de dados no nosso Instituto. Recomendo pelo compromisso e domínio técnico.",
        author: "JZ - Comércio & Serviços",
        company: "ITAGS LIBEA",
        role: "Subdiretor Pedagógico",
        rating: 5,
        initials: "JZ"
    },
    {
        content: "Contratei os serviços de marketing digital da Nzila Digital e tive um crescimento notável nas redes sociais. As campanhas patrocinadas foram muito bem direcionadas.",
        author: "ITAGS - LIBEA",
        company: "Roupas & Acessórios",
        role: "Gestora de Loja",
        rating: 5,
        initials: "I"
    }
];

export function TestimonialsSection() {
    return (
        <section className="py-32 bg-background relative overflow-hidden">
            {/* Background Narrative Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-nzila-gold/5 blur-[140px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-nzila-gold/5 blur-[140px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/4" />

            <div className="container-max relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-4 rounded-full bg-nzila-gold/10 border border-nzila-gold/20 text-nzila-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
                            Impacto & Resultados
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                            O que dizem os nossos <br />
                            <span className="text-gradient-gold italic">parceiros de sucesso</span>
                        </h2>
                        <p className="text-lg text-muted-foreground font-light">
                            Não entregamos apenas serviços. Entregamos ativos digitais que multiplicam o valor de marcas e negócios.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.author}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ margin: "-20px" }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.15,
                                type: "spring",
                                stiffness: 60,
                                damping: 15
                            }}
                            className="group relative"
                        >
                            {/* Card Decoration */}
                            <div className="absolute inset-0 bg-nzila-gold/0 group-hover:bg-nzila-gold/[0.03] transition-colors duration-500 rounded-2xl" />

                            <div className="relative h-full bg-card/20 backdrop-blur-3xl border border-white/5 p-10 md:p-12 rounded-2xl hover:border-nzila-gold/30 transition-all duration-500 flex flex-col shadow-2xl">

                                <div className="absolute top-10 right-10 flex items-center gap-2">
                                    <div className="flex gap-1">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} size={12} className="fill-nzila-gold text-nzila-gold" />
                                        ))}
                                    </div>
                                </div>

                                <Quote className="text-nzila-gold/10 mb-8 w-12 h-12" strokeWidth={1} />

                                <p className="text-xl text-white/90 font-light leading-relaxed mb-12 italic relative z-10">
                                    "{testimonial.content}"
                                </p>

                                <div className="mt-auto pt-8 border-t border-white/5 flex items-center gap-5">
                                    <div className="w-14 h-14 rounded-sm bg-gradient-to-br from-nzila-gold/20 to-nzila-gold/5 border border-nzila-gold/20 flex items-center justify-center text-nzila-gold font-bold text-xl uppercase shadow-inner">
                                        {testimonial.initials}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <h4 className="text-white font-bold text-lg tracking-tight">{testimonial.author}</h4>
                                            <ShieldCheck size={16} className="text-nzila-gold" />
                                        </div>
                                        <p className="text-nzila-gold/70 text-xs font-bold uppercase tracking-widest">{testimonial.role}</p>
                                        <p className="text-white/30 text-[10px] uppercase font-semibold mt-0.5">{testimonial.company}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Narrative Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 1 }}
                    className="mt-20 text-center"
                >
                    <p className="text-white/20 text-xs font-bold uppercase tracking-[0.5em]">
                        +50 Marcas Transformadas Digitalmente
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
