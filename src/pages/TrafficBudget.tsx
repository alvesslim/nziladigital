import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Send, ArrowLeft, PieChart as PieChartIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PieChart, Pie, Cell } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

const plataformasOpcoes = [
  'Meta Ads',
  'TikTok',
  'LinkedIn Ads',
  'Google Ads'
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
  '✍️ Outro (especificar)'
];

export default function TrafficBudget() {
  const [formData, setFormData] = useState({
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
    diario: ''
  });

  const [orcamentoGerado, setOrcamentoGerado] = useState(false);

  const handlePlataformaToggle = (plat: string) => {
    setFormData(prev => ({
      ...prev,
      plataformas: prev.plataformas.includes(plat)
        ? prev.plataformas.filter(p => p !== plat)
        : [...prev.plataformas, plat]
    }));
  };

  const duracaoNum = Number(formData.duracao) || 0;
  const diarioNum = Number(formData.diario) || 0;

  const investimentoAnuncios = duracaoNum * diarioNum * 1200;
  const lucroGestor = investimentoAnuncios * 0.50;
  const totalCliente = investimentoAnuncios + lucroGestor;

  const formatAOA = (value: number) => {
    return new Intl.NumberFormat('pt-AO', {
      style: 'currency',
      currency: 'AOA',
      minimumFractionDigits: 2
    }).format(value);
  };

  const percentAnuncios = totalCliente > 0 ? (investimentoAnuncios / totalCliente) * 100 : 0;
  const percentGestao = totalCliente > 0 ? (lucroGestor / totalCliente) * 100 : 0;

  const handleGerarOrcamento = () => {
    if (duracaoNum <= 0 || diarioNum <= 0) {
      alert("Por favor, preencha a duração e o orçamento diário com valores maiores que 0.");
      return;
    }
    setOrcamentoGerado(true);
  };

  const handleEnviarWhatsApp = () => {
    const text = `*Orçamento de Gestão de Tráfego*\n\n` +
      `*Dados do Cliente:*\n` +
      `- Empresa: ${formData.empresa || 'Não informado'}\n` +
      `- Contacto: ${formData.contacto || 'Não informado'}\n` +
      `- Plataformas: ${formData.plataformas.length > 0 ? formData.plataformas.join(', ') : 'Não informado'}\n` +
      `- Objetivo: ${formData.objetivo || 'Não informado'}\n\n` +
      `*Segmentação:*\n` +
      `- Localização: ${formData.localizacao || 'Não informado'}\n` +
      `- Idade: ${formData.idadeMin || 'N/A'} a ${formData.idadeMax || 'N/A'} anos\n` +
      `- Gênero: ${formData.genero}\n` +
      `- Interesses: ${formData.interesses || 'Não informado'}\n` +
      `- Comportamentos: ${formData.comportamentos || 'Não informado'}\n` +
      `- Outros: ${formData.outros || 'Nenhum'}\n\n` +
      `*Parâmetros da Campanha:*\n` +
      `- Duração: ${formData.duracao} dias\n` +
      `- Diário: $${formData.diario} USD\n\n` +
      `*Resumo Financeiro:*\n` +
      `- Investimento em Anúncios: ${formatAOA(investimentoAnuncios)}\n` +
      `- Gestão de Tráfego (50%): ${formatAOA(lucroGestor)}\n` +
      `- *Total a Pagar:* ${formatAOA(totalCliente)}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/244946361183?text=${encodedText}`, '_blank');
  };

  const chartData = [
    { name: 'Anúncios', value: investimentoAnuncios, fill: '#3b82f6' },
    { name: 'Gestão', value: lucroGestor, fill: '#f97316' },
  ];

  const chartConfig = {
    Anúncios: { label: 'Anúncios', color: '#3b82f6' },
    Gestão: { label: 'Gestão de Tráfego', color: '#f97316' },
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-6">
      <div className="container-max max-w-7xl mx-auto">
        
        <Link to="/" className="inline-flex items-center text-nzila-gold hover:text-white transition-colors mb-10 group text-lg font-medium">
          <ArrowLeft size={24} className="mr-3 group-hover:-translate-x-2 transition-transform" />
          Voltar aos Serviços
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
            Gerador de <span className="text-gradient-gold">Orçamento</span>
          </h1>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Preencha os detalhes abaixo para calcular o investimento ideal para a sua campanha de tráfego pago.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
          
          {/* Formulário Principal */}
          <div className="xl:col-span-8 space-y-10">
            
            {/* Dados do Cliente */}
            <div className="bg-card/40 backdrop-blur-xl border border-white/5 p-8 md:p-10 rounded-2xl shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/5 pb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-nzila-gold/20 text-nzila-gold flex items-center justify-center text-sm">1</span>
                Dados do Cliente
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Empresa do Cliente</label>
                  <input
                    type="text"
                    className="w-full bg-background border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-nzila-gold transition-all duration-300 placeholder:text-white/20"
                    value={formData.empresa}
                    onChange={e => setFormData({...formData, empresa: e.target.value})}
                    placeholder="Nome da sua empresa"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Contacto</label>
                  <input
                    type="text"
                    className="w-full bg-background border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-nzila-gold transition-all duration-300 placeholder:text-white/20"
                    value={formData.contacto}
                    onChange={e => setFormData({...formData, contacto: e.target.value})}
                    placeholder="Seu WhatsApp ou Telefone"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-white/70 mb-4">Plataformas</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {plataformasOpcoes.map(plat => (
                    <label key={plat} className="flex items-center space-x-3 cursor-pointer group bg-black/20 p-4 rounded-xl border border-white/5 hover:border-white/20 transition-all">
                      <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${formData.plataformas.includes(plat) ? 'bg-nzila-gold border-nzila-gold' : 'border-white/20 group-hover:border-white/50'}`}>
                        {formData.plataformas.includes(plat) && <div className="w-2.5 h-2.5 bg-black rounded-sm" />}
                      </div>
                      <span className="text-white/80 font-medium">{plat}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Objetivo da Campanha</label>
                <div className="relative">
                  <select
                    className="w-full bg-background border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-nzila-gold transition-all duration-300 appearance-none"
                    value={formData.objetivo}
                    onChange={e => setFormData({...formData, objetivo: e.target.value})}
                  >
                    <option value="" disabled>Selecione um objetivo</option>
                    {objetivosOpcoes.map(obj => (
                      <option key={obj} value={obj}>{obj}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Segmentação */}
            <div className="bg-card/40 backdrop-blur-xl border border-white/5 p-8 md:p-10 rounded-2xl shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/5 pb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-nzila-gold/20 text-nzila-gold flex items-center justify-center text-sm">2</span>
                Segmentação
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-white/70 mb-2">Localização</label>
                  <input
                    type="text"
                    className="w-full bg-background border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-nzila-gold transition-all duration-300 placeholder:text-white/20"
                    value={formData.localizacao}
                    onChange={e => setFormData({...formData, localizacao: e.target.value})}
                    placeholder="Ex: Luanda, Angola"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Idade Mínima</label>
                  <input
                    type="number"
                    className="w-full bg-background border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-nzila-gold transition-all duration-300 placeholder:text-white/20"
                    value={formData.idadeMin}
                    onChange={e => setFormData({...formData, idadeMin: e.target.value})}
                    placeholder="Ex: 18"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Idade Máxima</label>
                  <input
                    type="number"
                    className="w-full bg-background border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-nzila-gold transition-all duration-300 placeholder:text-white/20"
                    value={formData.idadeMax}
                    onChange={e => setFormData({...formData, idadeMax: e.target.value})}
                    placeholder="Ex: 65"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-white/70 mb-2">Gênero</label>
                  <div className="relative">
                    <select
                      className="w-full bg-background border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-nzila-gold transition-all duration-300 appearance-none"
                      value={formData.genero}
                      onChange={e => setFormData({...formData, genero: e.target.value})}
                    >
                      <option value="Todos">Todos</option>
                      <option value="Masculino">Masculino</option>
                      <option value="Feminino">Feminino</option>
                    </select>
                    <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-white/70 mb-2">Interesses</label>
                  <input
                    type="text"
                    className="w-full bg-background border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-nzila-gold transition-all duration-300 placeholder:text-white/20"
                    value={formData.interesses}
                    onChange={e => setFormData({...formData, interesses: e.target.value})}
                    placeholder="Ex: Tecnologia, Moda, Desporto"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-white/70 mb-2">Comportamentos</label>
                  <input
                    type="text"
                    className="w-full bg-background border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-nzila-gold transition-all duration-300 placeholder:text-white/20"
                    value={formData.comportamentos}
                    onChange={e => setFormData({...formData, comportamentos: e.target.value})}
                    placeholder="Ex: Compradores online, Viajantes"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-white/70 mb-2">Outros Detalhes</label>
                  <textarea
                    className="w-full bg-background border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-nzila-gold transition-all duration-300 resize-none h-32 placeholder:text-white/20"
                    value={formData.outros}
                    onChange={e => setFormData({...formData, outros: e.target.value})}
                    placeholder="Qualquer outra informação relevante..."
                  />
                </div>
              </div>
            </div>

            {/* Parâmetros da Campanha */}
            <div className="bg-card/40 backdrop-blur-xl border border-white/5 p-8 md:p-10 rounded-2xl shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/5 pb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-nzila-gold/20 text-nzila-gold flex items-center justify-center text-sm">3</span>
                Parâmetros da Campanha
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Duração (Dias)</label>
                  <input
                    type="number"
                    className="w-full bg-background border border-white/10 rounded-xl px-5 py-5 text-white focus:outline-none focus:border-nzila-gold transition-all duration-300 text-2xl font-bold placeholder:text-white/20"
                    value={formData.duracao}
                    onChange={e => setFormData({...formData, duracao: e.target.value})}
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Orçamento Diário (USD)</label>
                  <div className="relative">
                    <span className="absolute left-5 top-1/2 -translate-y-1/2 text-white/50 font-bold text-2xl">$</span>
                    <input
                      type="number"
                      className="w-full bg-background border border-white/10 rounded-xl pl-12 pr-5 py-5 text-white focus:outline-none focus:border-nzila-gold transition-all duration-300 text-2xl font-bold placeholder:text-white/20"
                      value={formData.diario}
                      onChange={e => setFormData({...formData, diario: e.target.value})}
                      placeholder="0"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Botão Gerar Orçamento */}
            <div className="flex justify-center pt-4">
              <button
                onClick={handleGerarOrcamento}
                className="w-full md:w-auto min-w-[300px] bg-nzila-gold hover:bg-nzila-gold-light text-black font-black py-5 px-10 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_40px_-10px_rgba(234,179,8,0.5)] hover:scale-105 active:scale-95 text-lg uppercase tracking-wider"
              >
                <Calculator size={24} />
                Gerar Orçamento
              </button>
            </div>

          </div>

          {/* Resumo e Gráfico Lateral (Sticky Sidebar) */}
          <div className="xl:col-span-4">
            <AnimatePresence>
              {orcamentoGerado ? (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-[#0a0a0a] border border-nzila-gold/30 p-8 rounded-2xl shadow-2xl sticky top-32"
                >
                  <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-6">
                    <div className="p-3 bg-nzila-gold/20 rounded-xl">
                      <PieChartIcon className="text-nzila-gold" size={28} />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Composição</h2>
                  </div>

                  {/* Gráfico Donut Circular com Recharts */}
                  <div className="mb-10 w-full flex justify-center">
                    <ChartContainer config={chartConfig} className="h-[250px] w-[250px]">
                      <PieChart>
                        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                        <Pie
                          data={chartData}
                          dataKey="value"
                          nameKey="name"
                          innerRadius={80}
                          outerRadius={110}
                          strokeWidth={0}
                          paddingAngle={2}
                        >
                          {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ChartContainer>
                  </div>

                  {/* Legenda Dinâmica */}
                  <div className="flex justify-between text-sm mb-10 border-t border-b border-white/5 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#3b82f6]" />
                      <span className="text-white/70">Anúncios ({percentAnuncios.toFixed(0)}%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#f97316]" />
                      <span className="text-white/70">Gestão ({percentGestao.toFixed(0)}%)</span>
                    </div>
                  </div>

                  {/* Cards de Valores */}
                  <div className="space-y-4 mb-10">
                    <div className="bg-white/5 p-5 rounded-xl border border-white/5">
                      <p className="text-sm text-white/50 mb-2">Investimento em Anúncios</p>
                      <p className="text-2xl font-bold text-[#3b82f6] tracking-tight">{formatAOA(investimentoAnuncios)}</p>
                    </div>
                    <div className="bg-white/5 p-5 rounded-xl border border-white/5">
                      <p className="text-sm text-white/50 mb-2">Lucro do Gestor (Taxa 50%)</p>
                      <p className="text-2xl font-bold text-[#f97316] tracking-tight">{formatAOA(lucroGestor)}</p>
                    </div>
                    <div className="bg-nzila-gold/10 p-6 rounded-xl border-2 border-nzila-gold/30 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-nzila-gold/20 blur-3xl rounded-full" />
                      <p className="text-sm text-nzila-gold mb-2 font-bold uppercase tracking-wider relative z-10">Total do Cliente</p>
                      <p className="text-4xl font-black text-white tracking-tighter relative z-10">{formatAOA(totalCliente)}</p>
                      <p className="text-sm text-white/60 mt-3 font-medium relative z-10">{duracaoNum} dias de campanha</p>
                    </div>
                  </div>

                  <button
                    onClick={handleEnviarWhatsApp}
                    className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-5 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_10px_30px_-10px_rgba(37,211,102,0.5)] hover:-translate-y-1 active:translate-y-0 text-lg"
                  >
                    <Send size={24} />
                    Enviar Orçamento Whatsap
                  </button>
                </motion.div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center p-12 text-center border-2 border-dashed border-white/10 rounded-2xl sticky top-32 bg-card/20">
                  <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6">
                    <Calculator className="text-white/20" size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Resumo do Orçamento</h3>
                  <p className="text-white/50 leading-relaxed">
                    Preencha os campos de Duração e Orçamento Diário no formulário ao lado e clique em <strong className="text-nzila-gold font-bold">Gerar Orçamento</strong> para visualizar a composição financeira e enviar para o WhatsApp.
                  </p>
                </div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
}
