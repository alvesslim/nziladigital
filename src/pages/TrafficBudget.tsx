import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SEOHead } from '@/components/seo/SEOHead';
import {
  Send, ArrowLeft, AlertTriangle, CheckCircle2, Info, TrendingUp,
  Minus, Zap, Target, Users, BarChart3, Shield,
  Brain, Lightbulb, ChevronDown, Star
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

// ─── Types ────────────────────────────────────────────────────────────────────
type AlertLevel = 'critical' | 'warning' | 'positive' | 'premium' | 'info';
type CampaignLevel = 'Teste Inicial' | 'Básico' | 'Intermediário' | 'Profissional' | 'Escalável' | null;
type PotentialLevel = 'Baixo potencial' | 'Potencial moderado' | 'Alto potencial' | 'Excelente potencial' | null;

interface Insight {
  level: AlertLevel;
  icon: React.ReactNode;
  title: string;
  message: string;
}

// ─── Static Data ──────────────────────────────────────────────────────────────
const plataformasOpcoes = [
  { id: 'Meta Ads', label: 'Meta Ads', emoji: '📘', desc: 'Facebook & Instagram' },
  { id: 'Google Ads', label: 'Google Ads', emoji: '🔍', desc: 'Pesquisa & Display' },
  { id: 'TikTok Ads', label: 'TikTok Ads', emoji: '🎵', desc: 'Branding & Alcance' },
  { id: 'LinkedIn Ads', label: 'LinkedIn Ads', emoji: '💼', desc: 'B2B & Corporativo' },
];

const objetivosOpcoes = [
  '📈 Aumentar as vendas',
  '👥 Gerar leads',
  '🌐 Aumentar visitas ao website',
  '💬 Receber mais mensagens (WhatsApp)',
  '📞 Receber mais chamadas',
  '📱 Aumentar seguidores e engajamento',
  '🎯 Promover um produto ou serviço',
  '🚀 Lançar um novo produto',
  '🏢 Aumentar o reconhecimento da marca',
  '📍 Atrair clientes para a loja física',
  '📅 Promover um evento',
  '📲 Gerar downloads do aplicativo',
  '🔄 Fidelizar clientes',
  '✍️ Outro (especificar)',
];

// ─── Color Maps ────────────────────────────────────────────────────────────────
const alertStyles: Record<AlertLevel, { bg: string; border: string; icon: string }> = {
  critical: { bg: 'bg-red-950/40', border: 'border-red-500/40', icon: 'text-red-400' },
  warning: { bg: 'bg-amber-950/40', border: 'border-amber-500/40', icon: 'text-amber-400' },
  positive: { bg: 'bg-emerald-950/40', border: 'border-emerald-500/40', icon: 'text-emerald-400' },
  premium: { bg: 'bg-[#1a1200]/60', border: 'border-nzila-gold/40', icon: 'text-nzila-gold' },
  info: { bg: 'bg-blue-950/40', border: 'border-blue-500/40', icon: 'text-blue-400' },
};

const levelColors: Record<NonNullable<CampaignLevel>, { text: string; bg: string }> = {
  'Teste Inicial': { text: 'text-orange-400', bg: 'bg-orange-500/10' },
  'Básico': { text: 'text-amber-400', bg: 'bg-amber-500/10' },
  'Intermediário': { text: 'text-blue-400', bg: 'bg-blue-500/10' },
  'Profissional': { text: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  'Escalável': { text: 'text-nzila-gold', bg: 'bg-nzila-gold/10' },
};

const potentialColors: Record<NonNullable<PotentialLevel>, string> = {
  'Baixo potencial': 'text-red-400',
  'Potencial moderado': 'text-amber-400',
  'Alto potencial': 'text-emerald-400',
  'Excelente potencial': 'text-nzila-gold',
};

const platformInsights: Record<string, { icon: string; title: string; desc: string; tags: string[] }> = {
  'Meta Ads': {
    icon: '📘',
    title: 'Meta Ads — Facebook & Instagram',
    desc: 'Ideal para alcance massivo, engajamento, geração de leads e vendas com segmentação avançada por interesses e comportamentos.',
    tags: ['Leads', 'Vendas Online', 'Branding', 'Remarketing'],
  },
  'Google Ads': {
    icon: '🔍',
    title: 'Google Ads',
    desc: 'Perfeito para captar pessoas com intenção direta de compra. Posiciona a sua marca no momento exato da procura.',
    tags: ['Intenção de Compra', 'Pesquisa', 'Display', 'Shopping'],
  },
  'TikTok Ads': {
    icon: '🎵',
    title: 'TikTok Ads',
    desc: 'Melhor plataforma para campanhas criativas. Ideal para branding rápido, alcance jovem e conteúdo de alto impacto.',
    tags: ['Branding', 'Viralidade', 'Alcance Jovem', 'Criatividade'],
  },
  'LinkedIn Ads': {
    icon: '💼',
    title: 'LinkedIn Ads',
    desc: 'Indicado exclusivamente para negócios B2B. Segmentação por cargo, setor e empresa para leads corporativos de alto valor.',
    tags: ['B2B', 'Corporativo', 'Leads Qualificados', 'Networking'],
  },
};

// ─── Helper Components ────────────────────────────────────────────────────────
const InsightCard = ({ insight }: { insight: Insight }) => {
  const s = alertStyles[insight.level];
  return (
    <motion.div
      initial={{ opacity: 0, y: -8, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.97 }}
      transition={{ duration: 0.3 }}
      className={`rounded-xl border p-4 ${s.bg} ${s.border}`}
    >
      <div className="flex gap-3">
        <div className={`mt-0.5 shrink-0 ${s.icon}`}>{insight.icon}</div>
        <div>
          <p className={`text-sm font-semibold mb-1 ${s.icon}`}>{insight.title}</p>
          <p className="text-sm text-white/65 leading-relaxed">{insight.message}</p>
        </div>
      </div>
    </motion.div>
  );
};

const FormInput = ({
  label, hint, children,
}: { label: string; hint?: string; children: React.ReactNode }) => (
  <div>
    <label className="block text-sm font-medium text-white/65 mb-2">{label}</label>
    {children}
    {hint && <p className="mt-2 text-xs text-white/30 leading-relaxed">{hint}</p>}
  </div>
);

const inputClass =
  'w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-nzila-gold/60 transition-all duration-300 placeholder:text-white/18 text-sm';

const selectClass =
  'w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-nzila-gold/60 transition-all duration-300 appearance-none text-sm';

// ─── Analysis Hook ────────────────────────────────────────────────────────────
function useCampaignAnalysis(
  duracao: number,
  diario: number,
  formData: {
    plataformas: string[];
    localizacao: string;
    interesses: string;
    comportamentos: string;
    idadeMin: string;
    idadeMax: string;
  }
) {
  return useMemo(() => {
    const insights: Insight[] = [];
    let qualityScore = 0;
    let campaignLevel: CampaignLevel = null;
    let potentialLevel: PotentialLevel = null;

    const hasLocation = !!formData.localizacao;
    const hasInterests = !!formData.interesses;
    const hasBehaviors = !!formData.comportamentos;
    const hasPlatform = formData.plataformas.length > 0;
    const idadeMin = Number(formData.idadeMin) || 0;
    const idadeMax = Number(formData.idadeMax) || 0;
    const hasAgeRange = idadeMin > 0 && idadeMax > 0;
    const ageRangeSpan = hasAgeRange ? idadeMax - idadeMin : 0;

    // Duration insights
    if (duracao > 0) {
      if (duracao < 7) {
        insights.push({
          level: 'critical',
          icon: <AlertTriangle size={16} />,
          title: 'Campanha em fase de teste',
          message: 'Campanhas com menos de 7 dias entram apenas na fase de aprendizagem do algoritmo. Para dados confiáveis e melhores resultados, recomendamos no mínimo 7 dias.',
        });
        qualityScore += 10;
      } else if (duracao <= 14) {
        insights.push({
          level: 'positive',
          icon: <CheckCircle2 size={16} />,
          title: 'Boa escolha de duração',
          message: 'Este período já permite iniciar otimizações e identificar as campanhas com melhor desempenho.',
        });
        qualityScore += 30;
      } else if (duracao <= 30) {
        insights.push({
          level: 'positive',
          icon: <TrendingUp size={16} />,
          title: 'Excelente estrutura temporal',
          message: 'Período ideal para estabilidade, otimização contínua e maior potencial de performance. Estrutura recomendada para resultados sólidos.',
        });
        qualityScore += 45;
      } else {
        insights.push({
          level: 'premium',
          icon: <Zap size={16} />,
          title: 'Estrutura escalável de longo prazo',
          message: 'Campanhas de longo prazo permitem escalar resultados, testar estratégias avançadas e otimizar continuamente. Perfil premium.',
        });
        qualityScore += 55;
      }
    }

    // Budget insights
    if (diario > 0) {
      if (diario < 2) {
        insights.push({
          level: 'critical',
          icon: <AlertTriangle size={16} />,
          title: 'Orçamento insuficiente',
          message: 'Este orçamento é extremamente limitado para campanhas profissionais. O algoritmo pode não conseguir gerar dados suficientes para otimizar os anúncios corretamente.',
        });
      } else if (diario < 4) {
        // $2–3/day: accessible entry for small businesses
        insights.push({
          level: 'warning',
          icon: <Minus size={16} />,
          title: 'Orçamento de teste inicial',
          message: 'Este orçamento pode ser utilizado para testes iniciais e validação da campanha, especialmente para pequenos negócios em fase inicial. Para campanhas mais consistentes e com maior potencial de performance, recomendamos estruturas acima de $5/dia.',
        });
        qualityScore += 8;
      } else if (diario < 5) {
        // $4/day transition band
        insights.push({
          level: 'warning',
          icon: <Minus size={16} />,
          title: 'Orçamento de entrada',
          message: 'Valor próximo do limiar recomendado para campanhas mais consistentes. Aumentar para $5/dia ou mais melhora significativamente a aprendizagem do algoritmo e os resultados obtidos.',
        });
        qualityScore += 12;
      } else if (diario < 10) {
        insights.push({
          level: 'positive',
          icon: <CheckCircle2 size={16} />,
          title: 'Boa estrutura de orçamento',
          message: 'Este valor já permite campanhas mais consistentes e melhor aprendizagem do algoritmo. Boa base para resultados reais e progressivos.',
        });
        qualityScore += 20;
      } else if (diario < 20) {
        insights.push({
          level: 'positive',
          icon: <TrendingUp size={16} />,
          title: 'Excelente orçamento profissional',
          message: 'Excelente estrutura para campanhas profissionais com maior capacidade de otimização e performance. Permite testes contínuos e crescimento progressivo.',
        });
        qualityScore += 30;
      } else {
        insights.push({
          level: 'premium',
          icon: <Star size={16} />,
          title: 'Estrutura altamente escalável',
          message: 'Este orçamento permite estratégias avançadas, testes contínuos e expansão progressiva da campanha. Perfil de alto crescimento e escala.',
        });
        qualityScore += 40;
      }
    }

    // Dangerous combo: very short + very low budget
    if (duracao > 0 && diario > 0 && duracao < 7 && diario < 2) {
      insights.push({
        level: 'critical',
        icon: <AlertTriangle size={16} />,
        title: 'Combinação de alto risco',
        message: 'A combinação de poucos dias com orçamento muito reduzido elimina praticamente as chances de resultado. A campanha não terá dados suficientes para otimização. Recomendamos rever ambos os parâmetros antes de avançar.',
      });
    } else if (duracao > 0 && diario > 0 && duracao < 7 && diario < 5) {
      insights.push({
        level: 'warning',
        icon: <AlertTriangle size={16} />,
        title: 'Atenção: estrutura limitada',
        message: 'Com poucos dias e orçamento reduzido, a campanha funcionará principalmente como fase de aprendizagem e teste. Campanhas iniciais ajudam a validar públicos, criativos e estratégias — mas resultados mais consistentes normalmente exigem maior volume de dados e otimização contínua.',
      });
    }

    // Segmentation
    if (!hasInterests || !hasBehaviors) {
      insights.push({
        level: 'info',
        icon: <Lightbulb size={16} />,
        title: 'Segmentação pode ser aprimorada',
        message: 'Adicionar interesses e comportamentos melhora significativamente a precisão da campanha e reduz o desperdício de orçamento.',
      });
    } else {
      qualityScore += 5;
    }

    if (hasAgeRange && ageRangeSpan >= 40) {
      insights.push({
        level: 'warning',
        icon: <Users size={16} />,
        title: 'Faixa etária muito ampla',
        message: 'Intervalos como 18–65 anos podem dificultar a otimização. Recomendamos segmentações etárias mais específicas.',
      });
    } else if (hasAgeRange) {
      qualityScore += 5;
    }

    if (hasLocation) qualityScore += 5;
    if (hasPlatform) qualityScore += 10;

    const cappedScore = Math.min(qualityScore, 100);

    // Campaign level — ordered from highest to lowest specificity
    if (duracao > 30 && diario > 20) campaignLevel = 'Escalável';
    else if (duracao >= 15 && diario >= 10) campaignLevel = 'Profissional';
    else if (duracao >= 7 && diario >= 5) campaignLevel = 'Intermediário';
    else if (duracao >= 3 && diario >= 2 && diario < 5) campaignLevel = 'Teste Inicial';
    else if (duracao >= 7 && diario >= 2) campaignLevel = 'Básico';
    else if (duracao > 0 && diario > 0) campaignLevel = 'Teste Inicial';

    // Potential level
    if (cappedScore >= 80) potentialLevel = 'Excelente potencial';
    else if (cappedScore >= 55) potentialLevel = 'Alto potencial';
    else if (cappedScore >= 30) potentialLevel = 'Potencial moderado';
    else if (duracao > 0 || diario > 0) potentialLevel = 'Baixo potencial';

    // Final analysis
    let finalAnalysis = '';
    if (duracao > 0 && diario > 0) {
      if (cappedScore >= 80)
        finalAnalysis = 'A sua campanha apresenta excelente potencial estratégico. A estrutura está bem dimensionada para gerar resultados consistentes. A nossa equipa irá garantir otimização máxima desde o primeiro dia.';
      else if (cappedScore >= 55)
        finalAnalysis = 'A sua campanha possui alto potencial. A estrutura é sólida e permite otimizações eficazes. Recomendamos manter ou aumentar ligeiramente o orçamento para maximizar os resultados.';
      else if (cappedScore >= 30)
        finalAnalysis = 'A sua campanha possui potencial moderado. Recomendamos aumentar ligeiramente o orçamento diário e manter a campanha ativa por pelo menos 7 dias para permitir melhor otimização do algoritmo.';
      else
        finalAnalysis = 'A campanha apresenta limitações que podem comprometer os resultados. Recomendamos revisar a duração e o orçamento antes de avançar, para garantir que o investimento gera retorno real.';
    }

    return { insights, qualityScore: cappedScore, campaignLevel, potentialLevel, finalAnalysis };
  }, [duracao, diario, formData]);
}

// ─── SectionCard ──────────────────────────────────────────────────────────────
function SectionCard({
  step, title, icon, children,
}: {
  step: number;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: step * 0.08 }}
      className="bg-[#0d0d0d] border border-white/8 rounded-2xl p-5 sm:p-7"
    >
      <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/5">
        <div className="w-7 h-7 rounded-full bg-nzila-gold/15 border border-nzila-gold/25 flex items-center justify-center text-nzila-gold text-xs font-black shrink-0">
          {step}
        </div>
        <span className="text-nzila-gold shrink-0">{icon}</span>
        <h2 className="text-sm font-bold text-white tracking-wide">{title}</h2>
      </div>
      {children}
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function TrafficBudget() {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    contacto: '',
    plataformas: [] as string[],
    objetivo: '',
    localizacao: '',
    idadeMin: '',
    idadeMax: '',
    genero: 'Todos',
    interesses: '',
    comportamentos: '',
    outros: '',
    duracao: '',
    diario: '',
  });

  const duracaoNum = Number(formData.duracao) || 0;
  const diarioNum = Number(formData.diario) || 0;

  const investimentoAnuncios = duracaoNum * diarioNum * 1200;
  const taxaGestao = investimentoAnuncios * 0.5;
  const totalCliente = investimentoAnuncios + taxaGestao;

  const { insights, qualityScore, campaignLevel, potentialLevel, finalAnalysis } =
    useCampaignAnalysis(duracaoNum, diarioNum, {
      plataformas: formData.plataformas,
      localizacao: formData.localizacao,
      interesses: formData.interesses,
      comportamentos: formData.comportamentos,
      idadeMin: formData.idadeMin,
      idadeMax: formData.idadeMax,
    });

  const formatAOA = (value: number) =>
    new Intl.NumberFormat('pt-AO', {
      style: 'currency',
      currency: 'AOA',
      minimumFractionDigits: 0,
    }).format(value);

  const set = (field: string, value: string) =>
    setFormData(prev => ({ ...prev, [field]: value }));

  const togglePlataforma = (plat: string) =>
    setFormData(prev => ({
      ...prev,
      plataformas: prev.plataformas.includes(plat)
        ? prev.plataformas.filter(p => p !== plat)
        : [...prev.plataformas, plat],
    }));

  const activePlatformInsight =
    formData.plataformas.length === 1 ? platformInsights[formData.plataformas[0]] : null;

  const chartData =
    totalCliente > 0
      ? [
          { name: 'Anúncios', value: investimentoAnuncios, fill: '#3b82f6' },
          { name: 'Gestão', value: taxaGestao, fill: '#C9A84C' },
        ]
      : [{ name: 'Aguardando', value: 1, fill: '#1a1a1a' }];

  const handleEnviarWhatsApp = () => {
    // Validate all fields
    const requiredFields = [
      formData.nome, formData.empresa, formData.contacto, formData.objetivo,
      formData.localizacao, formData.idadeMin, formData.idadeMax,
      formData.interesses, formData.comportamentos, formData.duracao, formData.diario
    ];

    if (requiredFields.some(field => !field || !field.trim()) || formData.plataformas.length === 0) {
      alert("Por favor, preencha todos os campos do formulário para obter uma análise estratégica completa.");
      return;
    }

    const level = campaignLevel ?? 'Não classificado';
    const potential = potentialLevel ?? 'Não calculado';
    const msg =
      `*Orçamento Estratégico — Nzila Digital*\n\n` +
      `*Dados do Cliente:*\n` +
      `- Nome: ${formData.nome || 'N/A'}\n- Empresa: ${formData.empresa || 'N/A'}\n- Contacto: ${formData.contacto || 'N/A'}\n\n` +
      `*Campanha:*\n` +
      `- Plataformas: ${formData.plataformas.join(', ') || 'N/A'}\n- Objetivo: ${formData.objetivo || 'N/A'}\n- Duração: ${formData.duracao} dias\n- Orçamento Diário: $${formData.diario} USD\n\n` +
      `*Segmentação:*\n` +
      `- Localização: ${formData.localizacao || 'N/A'}\n- Idade: ${formData.idadeMin || 'N/A'}–${formData.idadeMax || 'N/A'} anos\n- Género: ${formData.genero}\n- Interesses: ${formData.interesses || 'N/A'}\n- Comportamentos: ${formData.comportamentos || 'N/A'}\n\n` +
      `*Análise Estratégica:*\n` +
      `- Nível: ${level}\n- Potencial: ${potential}\n- Índice de Qualidade: ${qualityScore}/100\n\n` +
      `*Resumo Financeiro:*\n` +
      `- Investimento em Anúncios: ${formatAOA(investimentoAnuncios)}\n- Taxa de Gestão (50%): ${formatAOA(taxaGestao)}\n- *Total: ${formatAOA(totalCliente)}*\n\n` +
      `_Análise gerada pelo simulador estratégico da Nzila Digital._`;

    window.open(`https://wa.me/244946361183?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const levelInfo = campaignLevel ? levelColors[campaignLevel] : null;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Início', 'item': 'https://nziladigital.com/' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Simulador de Campanha', 'item': 'https://nziladigital.com/orcamento-trafego' }
    ]
  };

  return (
    <>
      <SEOHead
        title="Simulador de Orçamento para Tráfego Pago | Nzila Digital Angola"
        description="Calcule gratuitamente o orçamento ideal para as suas campanhas de tráfego pago no Meta Ads e Google Ads em Angola. Análise estratégica em tempo real pela Nzila Digital."
        canonical="https://nziladigital.com/orcamento-trafego"
        ogTitle="Simulador de Campanha Grátis — Meta Ads & Google Ads em Angola"
        ogDescription="Descubra quanto investir em tráfego pago para a sua empresa em Angola. Ferramenta gratuita da Nzila Digital com análise estratégica em tempo real."
        jsonLd={breadcrumbJsonLd}
      />
    <div className="min-h-screen bg-background">


      {/* ── Hero Header ─────────────────────────────────────────────────────── */}
      <div className="relative pt-12 pb-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-nzila-gold/[0.04] blur-[120px] rounded-full" />
        </div>
        <div className="container-max relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/40 hover:text-nzila-gold transition-colors mb-8 text-sm font-medium group"
          >
            <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
            Voltar ao site
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-nzila-gold/10 border border-nzila-gold/20 rounded-full px-4 py-1.5 mb-6">
              <Brain size={13} className="text-nzila-gold" />
              <span className="text-nzila-gold text-xs font-semibold uppercase tracking-widest">
                Consultor Estratégico Automatizado
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight leading-tight">
              Simulador de <span className="text-gradient-gold">Campanha</span>
            </h1>
            <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-xl">
              Preencha os dados e receba análise estratégica em tempo real. O sistema avalia estrutura, calcula potencial e gera recomendações profissionais antes de qualquer investimento.
            </p>
          </motion.div>

          {/* Credibility Badges */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            {[
              { icon: <Shield size={12} />, label: 'Análise gratuita' },
              { icon: <Zap size={12} />, label: 'Tempo real' },
              { icon: <Target size={12} />, label: 'Personalizado' },
              { icon: <BarChart3 size={12} />, label: 'Transparência total' },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-1.5 text-white/35 text-xs">
                <span className="text-nzila-gold">{item.icon}</span>
                {item.label}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Main Grid ───────────────────────────────────────────────────────── */}
      <div className="container-max pb-24">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

          {/* ── LEFT: FORM ────────────────────────────────────────────────── */}
          <div className="xl:col-span-7 space-y-5">

            {/* Card 1 – Identificação */}
            <SectionCard step={1} title="Identificação" icon={<Users size={15} />}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormInput label="Seu nome" hint="Como devemos chamá-lo?">
                  <input type="text" className={inputClass} value={formData.nome}
                    onChange={e => set('nome', e.target.value)} placeholder="Ex: João Silva" />
                </FormInput>
                <FormInput label="Empresa / Negócio">
                  <input type="text" className={inputClass} value={formData.empresa}
                    onChange={e => set('empresa', e.target.value)} placeholder="Nome da empresa" />
                </FormInput>
                <FormInput label="WhatsApp / Contacto">
                  <input type="text" className={inputClass} value={formData.contacto}
                    onChange={e => set('contacto', e.target.value)} placeholder="+244 9XX XXX XXX" />
                </FormInput>
                <FormInput label="Objetivo da Campanha">
                  <div className="relative">
                    <select className={selectClass} value={formData.objetivo}
                      onChange={e => set('objetivo', e.target.value)}>
                      <option value="" disabled>Selecione o objetivo</option>
                      {objetivosOpcoes.map(obj => <option key={obj} value={obj}>{obj}</option>)}
                    </select>
                    <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
                  </div>
                </FormInput>
              </div>
            </SectionCard>

            {/* Card 2 – Plataforma */}
            <SectionCard step={2} title="Plataforma de Veiculação" icon={<BarChart3 size={15} />}>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {plataformasOpcoes.map(plat => {
                  const isActive = formData.plataformas.includes(plat.id);
                  return (
                    <button
                      key={plat.id}
                      type="button"
                      onClick={() => togglePlataforma(plat.id)}
                      className={`relative flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all duration-300 ${
                        isActive
                          ? 'bg-nzila-gold/10 border-nzila-gold/50 shadow-[0_0_18px_-4px_rgba(201,168,76,0.2)]'
                          : 'bg-black/25 border-white/8 hover:border-white/20'
                      }`}
                    >
                      {isActive && <div className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-nzila-gold" />}
                      <span className="text-lg shrink-0">{plat.emoji}</span>
                      <div className="min-w-0">
                        <p className={`text-sm font-semibold truncate ${isActive ? 'text-nzila-gold' : 'text-white/80'}`}>{plat.label}</p>
                        <p className="text-xs text-white/30">{plat.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>

              <AnimatePresence mode="wait">
                {activePlatformInsight && (
                  <motion.div
                    key={activePlatformInsight.title}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-blue-950/30 border border-blue-500/20 rounded-xl p-4 mt-1">
                      <div className="flex gap-3">
                        <span className="text-lg shrink-0">{activePlatformInsight.icon}</span>
                        <div>
                          <p className="text-sm font-semibold text-blue-300 mb-1">{activePlatformInsight.title}</p>
                          <p className="text-xs text-white/55 leading-relaxed mb-3">{activePlatformInsight.desc}</p>
                          <div className="flex flex-wrap gap-2">
                            {activePlatformInsight.tags.map(tag => (
                              <span key={tag} className="text-xs bg-blue-500/15 text-blue-300 px-2.5 py-1 rounded-full">{tag}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </SectionCard>

            {/* Card 3 – Segmentação */}
            <SectionCard step={3} title="Segmentação do Público" icon={<Target size={15} />}>
              <div className="bg-amber-950/25 border border-amber-500/15 rounded-xl p-3 mb-5 flex gap-2.5">
                <Info size={13} className="text-amber-400 mt-0.5 shrink-0" />
                <p className="text-xs text-amber-200/65 leading-relaxed">
                  Uma segmentação precisa reduz desperdício de orçamento e aumenta a performance da campanha.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <FormInput label="Localização" hint="Cidades, regiões ou países que deseja atingir.">
                    <input type="text" className={inputClass} value={formData.localizacao}
                      onChange={e => set('localizacao', e.target.value)} placeholder="Ex: Luanda, Angola" />
                  </FormInput>
                </div>
                <FormInput label="Idade mínima">
                  <input type="number" className={inputClass} value={formData.idadeMin}
                    onChange={e => set('idadeMin', e.target.value)} placeholder="Ex: 25" min={13} />
                </FormInput>
                <FormInput label="Idade máxima">
                  <input type="number" className={inputClass} value={formData.idadeMax}
                    onChange={e => set('idadeMax', e.target.value)} placeholder="Ex: 45" min={13} />
                </FormInput>
                <div className="sm:col-span-2">
                  <FormInput label="Género">
                    <div className="relative">
                      <select className={selectClass} value={formData.genero}
                        onChange={e => set('genero', e.target.value)}>
                        <option value="Todos">Todos os géneros</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                      </select>
                      <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
                    </div>
                  </FormInput>
                </div>
                <div className="sm:col-span-2">
                  <FormInput label="Interesses" hint="Ex: Tecnologia, Moda, Desporto, Negócios...">
                    <input type="text" className={inputClass} value={formData.interesses}
                      onChange={e => set('interesses', e.target.value)} placeholder="Interesses do seu público" />
                  </FormInput>
                </div>
                <div className="sm:col-span-2">
                  <FormInput label="Comportamentos" hint="Ex: Compradores online, Viajantes, Empreendedores...">
                    <input type="text" className={inputClass} value={formData.comportamentos}
                      onChange={e => set('comportamentos', e.target.value)} placeholder="Comportamentos do seu público" />
                  </FormInput>
                </div>
                <div className="sm:col-span-2">
                  <FormInput label="Informações adicionais">
                    <textarea
                      className={`${inputClass} resize-none h-24`}
                      value={formData.outros}
                      onChange={e => set('outros', e.target.value)}
                      placeholder="Qualquer detalhe adicional sobre o seu negócio ou campanha..."
                    />
                  </FormInput>
                </div>
              </div>
            </SectionCard>

            {/* Card 4 – Parâmetros */}
            <SectionCard step={4} title="Parâmetros da Campanha" icon={<TrendingUp size={15} />}>
              <div className="bg-blue-950/25 border border-blue-500/15 rounded-xl p-3 mb-5 flex gap-2.5">
                <Info size={13} className="text-blue-400 mt-0.5 shrink-0" />
                <p className="text-xs text-blue-200/65 leading-relaxed">
                  Estes são os parâmetros mais críticos. O algoritmo precisa de tempo e orçamento adequados para aprender e otimizar os resultados.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                <div>
                  <label className="block text-sm font-medium text-white/65 mb-2">Duração da Campanha (dias)</label>
                  <input
                    type="number"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-5 text-white focus:outline-none focus:border-nzila-gold/60 transition-all duration-300 text-3xl font-bold placeholder:text-white/12"
                    value={formData.duracao}
                    onChange={e => set('duracao', e.target.value)}
                    placeholder="0"
                    min={1}
                  />
                  <p className="mt-2 text-xs text-white/28">Mínimo recomendado: 7 dias</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/65 mb-2">Orçamento Diário (USD)</label>
                  <div className="relative">
                    <span className="absolute left-5 top-1/2 -translate-y-1/2 text-white/28 font-bold text-2xl">$</span>
                    <input
                      type="number"
                      className="w-full bg-black/40 border border-white/10 rounded-xl pl-12 pr-5 py-5 text-white focus:outline-none focus:border-nzila-gold/60 transition-all duration-300 text-3xl font-bold placeholder:text-white/12"
                      value={formData.diario}
                      onChange={e => set('diario', e.target.value)}
                      placeholder="0"
                      min={1}
                    />
                  </div>
                  <p className="mt-2 text-xs text-white/28">Mínimo recomendado: $5/dia</p>
                </div>
              </div>

              {/* Real-time insights */}
              <AnimatePresence>
                {insights.length > 0 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <p className="text-xs text-white/28 uppercase tracking-widest font-semibold flex items-center gap-2 mb-3">
                      <Brain size={11} className="text-nzila-gold" />
                      Análise em tempo real
                    </p>
                    <div className="space-y-2.5">
                      <AnimatePresence>
                        {insights.map((insight, i) => (
                          <InsightCard key={`${insight.title}-${i}`} insight={insight} />
                        ))}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </SectionCard>

            {/* Final Analysis */}
            <AnimatePresence>
              {finalAnalysis && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-gradient-to-br from-nzila-gold/8 to-black/50 border border-nzila-gold/25 rounded-2xl p-5 sm:p-6"
                >
                  <div className="flex gap-3">
                    <div className="p-2 bg-nzila-gold/15 rounded-lg h-fit shrink-0">
                      <Brain size={15} className="text-nzila-gold" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-nzila-gold mb-2 uppercase tracking-wider">
                        Análise Final da Campanha
                      </p>
                      <p className="text-sm text-white/65 leading-relaxed">{finalAnalysis}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── RIGHT: SIDEBAR ──────────────────────────────────────────── */}
          <div className="xl:col-span-5">
            <div className="space-y-4">

              {/* Quality Score */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="bg-[#0d0d0d] border border-white/8 rounded-2xl p-5"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest">
                    Índice de Qualidade
                  </h3>
                  <span className="text-2xl font-black text-white">
                    {qualityScore}
                    <span className="text-xs text-white/25 font-normal">/100</span>
                  </span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden mb-4">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-nzila-gold/70 to-nzila-gold"
                    animate={{ width: `${qualityScore}%` }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className={`rounded-xl p-3 border border-white/5 ${levelInfo?.bg ?? 'bg-white/3'}`}>
                    <p className="text-xs text-white/35 mb-1 uppercase tracking-wider">Nível</p>
                    {campaignLevel
                      ? <p className={`text-sm font-bold ${levelInfo?.text}`}>{campaignLevel}</p>
                      : <p className="text-sm text-white/18">—</p>}
                  </div>
                  <div className="rounded-xl p-3 border border-white/5 bg-white/3">
                    <p className="text-xs text-white/35 mb-1 uppercase tracking-wider">Potencial</p>
                    {potentialLevel
                      ? <p className={`text-xs font-bold leading-tight ${potentialColors[potentialLevel]}`}>{potentialLevel}</p>
                      : <p className="text-sm text-white/18">—</p>}
                  </div>
                </div>
              </motion.div>

              {/* Donut Chart */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22 }}
                className="bg-[#0d0d0d] border border-white/8 rounded-2xl p-5"
              >
                <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest mb-4">
                  Composição do Investimento
                </h3>
                <div className="flex justify-center mb-5">
                  <div className="relative w-44 h-44">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie data={chartData} dataKey="value" innerRadius={52} outerRadius={72}
                          strokeWidth={0} paddingAngle={totalCliente > 0 ? 3 : 0} isAnimationActive>
                          {chartData.map((entry, i) => <Cell key={i} fill={entry.fill} />)}
                        </Pie>
                        {totalCliente > 0 && (
                          <Tooltip
                            formatter={(v: number) => [formatAOA(v), '']}
                            contentStyle={{ background: '#111', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, fontSize: 12 }}
                            itemStyle={{ color: '#fff' }}
                          />
                        )}
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                      {totalCliente > 0 ? (
                        <>
                          <p className="text-xs text-white/25 mb-0.5">Total</p>
                          <p className="text-xs font-bold text-white text-center px-3 leading-tight">
                            {formatAOA(totalCliente)}
                          </p>
                        </>
                      ) : (
                        <p className="text-xs text-white/18">Aguardando</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="space-y-2.5">
                  {[
                    { color: 'bg-[#3b82f6]', label: 'Investimento em Anúncios', value: formatAOA(investimentoAnuncios) },
                    { color: 'bg-nzila-gold', label: 'Taxa de Gestão (50%)', value: formatAOA(taxaGestao) },
                  ].map(item => (
                    <div key={item.label} className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2 min-w-0">
                        <div className={`w-2 h-2 rounded-full shrink-0 ${item.color}`} />
                        <span className="text-xs text-white/45 truncate">{item.label}</span>
                      </div>
                      <span className="text-xs font-semibold text-white shrink-0">{item.value}</span>
                    </div>
                  ))}
                  <div className="pt-2.5 mt-1 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Total</span>
                    <span className="text-base font-black text-nzila-gold">{formatAOA(totalCliente)}</span>
                  </div>
                </div>
              </motion.div>

              {/* Campaign Summary */}
              <AnimatePresence>
                {duracaoNum > 0 && diarioNum > 0 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    className="bg-[#0d0d0d] border border-white/8 rounded-2xl p-5"
                  >
                    <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest mb-3">
                      Resumo da Campanha
                    </h3>
                    <div className="space-y-2">
                      {[
                        { label: 'Duração', value: `${duracaoNum} dias` },
                        { label: 'Orçamento diário', value: `$${diarioNum} USD` },
                        { label: 'Total USD', value: `$${(duracaoNum * diarioNum).toFixed(0)}` },
                        { label: 'Plataformas', value: formData.plataformas.join(', ') || '—' },
                        { label: 'Objetivo', value: formData.objetivo.replace(/^.{1,4}/, '').trim() || '—' },
                      ].map(item => (
                        <div key={item.label} className="flex items-start justify-between gap-3">
                          <span className="text-xs text-white/30 shrink-0">{item.label}</span>
                          <span className="text-xs font-medium text-white/70 text-right">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <button
                  onClick={handleEnviarWhatsApp}
                  className="w-full bg-[#25D366] hover:bg-[#1fb859] text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2.5 shadow-[0_10px_35px_-10px_rgba(37,211,102,0.4)] hover:-translate-y-0.5 active:translate-y-0 text-sm"
                >
                  <Send size={18} />
                  Enviar Orçamento via WhatsApp
                </button>
                <p className="text-center text-xs text-white/22 mt-2.5 leading-relaxed">
                  Os dados desta análise serão enviados para a equipa da Nzila Digital.
                </p>
              </motion.div>

              {/* Edu tip */}
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 space-y-3">
                <div className="flex gap-2.5">
                  <Lightbulb size={13} className="text-nzila-gold shrink-0 mt-0.5" />
                  <p className="text-xs text-white/30 leading-relaxed">
                    Orçamentos menores podem funcionar como ponto de partida, especialmente para testes e validação de público. O importante é começar com expectativas realistas.
                  </p>
                </div>
                <div className="flex gap-2.5 border-t border-white/5 pt-3">
                  <Lightbulb size={13} className="text-nzila-gold shrink-0 mt-0.5" />
                  <p className="text-xs text-white/30 leading-relaxed">
                    Campanhas profissionais normalmente possuem maior estabilidade e potencial de escala. Resultados mais consistentes exigem maior volume de dados e otimização contínua.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  );
}
