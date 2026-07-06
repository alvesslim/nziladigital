import { useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { SEOHead } from '@/components/seo/SEOHead';
import { ArrowLeft, Home, MessageCircle } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEOHead
        title="Página não encontrada (404) | Nzila Digital"
        description="A página que procura não existe. Volte ao site da Nzila Digital e descubra os nossos serviços de Marketing Digital, Web Design e Tráfego Pago em Angola."
        canonical="https://nziladigital.com/404"
        noindex={true}
      />
      <div className="flex min-h-screen items-center justify-center bg-background px-6">
        <div className="text-center max-w-md">
          {/* 404 Number */}
          <p className="text-8xl font-bold text-white/5 select-none mb-2">404</p>

          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-nzila-gold/10 border border-nzila-gold/20 flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">🔍</span>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Página não encontrada
          </h1>
          <p className="text-white/50 text-base leading-relaxed mb-8">
            A página <span className="text-nzila-gold font-mono text-sm">{location.pathname}</span> não existe ou foi movida.
            Explore o nosso site para encontrar o que precisa.
          </p>

          {/* Action Links */}
          <nav aria-label="Opções de navegação" className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-nzila-gold text-black font-semibold rounded-lg hover:bg-nzila-gold/90 transition-colors"
            >
              <Home size={18} />
              Voltar ao Início
            </Link>

            <a
              href="https://wa.me/244946361183?text=Olá! Preciso de ajuda no site da Nzila Digital."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 text-white font-medium rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
            >
              <MessageCircle size={18} />
              Falar com Suporte
            </a>
          </nav>

          {/* Useful links */}
          <div className="mt-10 pt-8 border-t border-white/5">
            <p className="text-white/30 text-xs uppercase tracking-widest mb-4">Páginas úteis</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
              {[
                { label: 'Serviços', href: '/#services' },
                { label: 'Portfólio', href: '/#portfolio' },
                { label: 'Contacto', href: '/#contact' },
                { label: 'Simulador de Orçamento', href: '/orcamento-trafego' },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm text-white/40 hover:text-nzila-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
