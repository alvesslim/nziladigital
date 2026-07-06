import { SEOHead } from '@/components/seo/SEOHead';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { CTASection } from '@/components/sections/CTASection';

const homepageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://nziladigital.com/#webpage',
  'url': 'https://nziladigital.com/',
  'name': 'Nzila Digital | Agência de Marketing Digital & Tecnologia em Angola',
  'description': 'A agência digital líder em Angola. Especializados em Web Design, Tráfego Pago, Gestão de Marca e Educação Executiva. Transformamos negócios em líderes de mercado.',
  'isPartOf': { '@id': 'https://nziladigital.com/#website' },
  'about': { '@id': 'https://nziladigital.com/#organization' },
  'inLanguage': 'pt-AO',
  'breadcrumb': {
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Início',
        'item': 'https://nziladigital.com/'
      }
    ]
  }
};

const Index = () => {
  return (
    <>
      <SEOHead
        title="Nzila Digital | Agência de Marketing Digital & Tecnologia em Angola"
        description="A agência digital líder em Angola. Especializados em Web Design, Tráfego Pago (Meta & Google Ads), Gestão de Marca e Nzila Academy. Luanda → Mundo."
        canonical="https://nziladigital.com/"
        jsonLd={homepageJsonLd}
      />
      <div className="min-h-screen">
        <main aria-label="Conteúdo principal da Nzila Digital">
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <EducationSection />
          <PortfolioSection />
          <TestimonialsSection />
          <TeamSection />
          <CTASection />
        </main>
      </div>
    </>
  );
};

export default Index;
