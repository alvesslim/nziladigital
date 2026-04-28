import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, MessageCircle, ArrowUpRight, Send, CheckCircle, User, AtSign, MessageSquare } from 'lucide-react';
import logo from '@/assets/logo-nzila-official.png';
import { Button } from '@/components/ui/button';

export function Footer() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contacto de ${formData.name} via Site`);
    const body = encodeURIComponent(
      `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`
    );
    window.open(`mailto:nziladigital@gmail.com?subject=${subject}&body=${body}`, '_self');
    setIsSent(true);
    setTimeout(() => setIsSent(false), 4000);
  };

  return (
    <footer className="relative bg-background pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-nzila-gold/[0.03] blur-[100px] rounded-full pointer-events-none" />

      <div className="container-max relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-12">
          {/* Brand Column */}
          <div className="space-y-8">
            <a href="#hero" className="inline-block group">
              <img
                src={logo}
                alt="Nzila Digital Logo"
                className="h-14 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                loading="lazy"
                decoding="async"
              />
            </a>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Elevando padrões digitais através de <span className="text-white font-medium">inteligência estratégica</span> e design de classe mundial.
            </p>

            <Button
              onClick={() => window.open('https://wa.me/244946361183?text=Olá! Vim pelo site da Nzila Digital e gostaria de saber mais sobre os vossos serviços.', '_blank')}
              className="btn-gold h-12 px-8"
            >
              Iniciar Conversa
            </Button>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase">Explorar</h4>
            <ul className="space-y-4">
              {[
                { label: 'Serviços', href: '#services' },
                { label: 'Educação', href: '#education' },
                { label: 'Portfólio', href: '#portfolio' },
                { label: 'Sobre Nós', href: '#about' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-nzila-gold transition-colors flex items-center gap-2 group"
                  >
                    {link.label}
                    <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / Contact */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold tracking-wider text-white uppercase">Conectar</h4>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: 'https://www.instagram.com/nziladigital17/', label: 'Instagram' },
                { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61586026881838', label: 'Facebook' },
                { icon: MessageCircle, href: 'https://wa.me/244946361183?text=Olá! Vim pelo site da Nzila Digital e gostaria de saber mais sobre os vossos serviços.', label: 'WhatsApp' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 rounded-sm border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-nzila-gold hover:border-nzila-gold hover:text-background transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
            <div className="pt-2 space-y-2">
              <p className="text-sm text-muted-foreground">Luanda, Angola</p>
              <p className="text-sm text-white"><span className="text-muted-foreground">Telefone:</span> +244 946 361 183</p>
              <p className="text-sm text-muted-foreground">nziladigital@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Enhanced Contact Form - Full Width */}
        <div className="mt-8 mb-20">
          <div className="relative rounded-sm border border-white/[0.05] bg-gradient-to-br from-white/[0.02] to-white/[0.005] backdrop-blur-xl overflow-hidden">
            {/* Top gold accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-nzila-gold/50 to-transparent" />

            {/* Glow behind form */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-nzila-gold/[0.02] blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 p-8 md:p-16">
              {/* Form Header */}
              <div className="text-center mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ margin: '-20px' }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm bg-nzila-gold/10 border border-nzila-gold/20 text-nzila-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
                    <Send size={12} />
                    Contacto
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3 tracking-tight">
                    Envie-nos uma <span className="text-gradient-gold">Mensagem</span>
                  </h3>
                  <p className="text-muted-foreground max-w-md mx-auto text-sm">
                    Preencha o formulário abaixo e entraremos em contacto o mais breve possível.
                  </p>
                </motion.div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Name Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <label htmlFor="footer-name" className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-2">
                      Nome Completo <span className="text-nzila-gold">*</span>
                    </label>
                    <div className={`relative rounded-sm border transition-all duration-300 ${focusedField === 'name' ? 'border-nzila-gold/60 shadow-[0_0_20px_-8px_rgba(201,168,76,0.3)]' : 'border-white/10'
                      }`}>
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30">
                        <User size={16} />
                      </div>
                      <input
                        id="footer-name"
                        type="text"
                        placeholder="Ex: João Silva"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-white/[0.03] rounded-sm pl-11 pr-4 py-4 text-sm text-white placeholder:text-white/20 focus:outline-none"
                      />
                    </div>
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <label htmlFor="footer-email" className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-2">
                      Email <span className="text-nzila-gold">*</span>
                    </label>
                    <div className={`relative rounded-sm border transition-all duration-300 ${focusedField === 'email' ? 'border-nzila-gold/60 shadow-[0_0_20px_-8px_rgba(201,168,76,0.3)]' : 'border-white/10'
                      }`}>
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30">
                        <AtSign size={16} />
                      </div>
                      <input
                        id="footer-email"
                        type="email"
                        placeholder="seu@email.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-white/[0.03] rounded-sm pl-11 pr-4 py-4 text-sm text-white placeholder:text-white/20 focus:outline-none"
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="mb-8"
                >
                  <label htmlFor="footer-message" className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-2">
                    Mensagem <span className="text-nzila-gold">*</span>
                  </label>
                  <div className={`relative rounded-sm border transition-all duration-300 ${focusedField === 'message' ? 'border-nzila-gold/60 shadow-[0_0_20px_-8px_rgba(201,168,76,0.3)]' : 'border-white/10'
                    }`}>
                    <div className="absolute left-4 top-4 text-white/30">
                      <MessageSquare size={16} />
                    </div>
                    <textarea
                      id="footer-message"
                      placeholder="Descreva o seu projecto ou ideia..."
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-white/[0.03] rounded-sm pl-11 pr-4 py-4 text-sm text-white placeholder:text-white/20 focus:outline-none resize-none"
                    />
                  </div>
                </motion.div>

                {/* Submit */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="flex justify-center"
                >
                  <Button
                    type="submit"
                    className={`h-14 px-16 flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-[0.15em] transition-all duration-300 rounded-sm ${isSent
                      ? 'bg-green-600 text-white border-green-600'
                      : 'btn-gold'
                      }`}
                    disabled={isSent}
                  >
                    {isSent ? (
                      <>
                        <CheckCircle size={18} />
                        Mensagem Enviada!
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col items-center gap-4 text-sm text-muted-foreground text-center">
          <p>© Copyright 2026 Nzila Digital Solutions. Todos os direitos reservados.</p>
          <p className="text-white/30 text-xs">Designed by Orlando Correia — Nzila Digital</p>
        </div>
      </div>
    </footer>
  );
}