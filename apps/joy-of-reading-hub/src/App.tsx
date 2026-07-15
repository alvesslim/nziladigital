import { useState, useEffect } from "react";

// ---- Section building blocks ----

function TopBar() {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return (
    <div className="sticky top-0 z-50 w-full bg-red-600 text-white text-center text-xs sm:text-sm py-2 sm:py-3 font-bold tracking-wide shadow-md flex items-center justify-center flex-wrap gap-1.5 sm:gap-2 px-3">
      <span className="opacity-100">🎁 Oferta expira em:</span>
      <span className="bg-white/20 px-2 py-0.5 rounded font-mono text-sm sm:text-base">{timeString}</span>
      <span className="hidden sm:inline mx-1 opacity-50">·</span>
      <span className="hidden sm:inline">Acesso imediato após a compra</span>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(1200px 600px at 85% -10%, oklch(0.86 0.16 88 / 0.35), transparent 60%), radial-gradient(900px 500px at -10% 110%, oklch(0.44 0.11 152 / 0.18), transparent 60%)",
        }}
      />
      <div className="container-page relative pt-6 pb-10 md:pt-16 md:pb-20 grid md:grid-cols-2 gap-6 md:gap-12 items-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft text-primary px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Novo · Método passo a passo
          </span>
          <h1 className="mt-4 md:mt-5 font-display font-black text-[1.85rem] leading-[1.05] sm:text-4xl md:text-[3.5rem] text-ink">
            <span className="text-primary">Vê o brilho no olhar do teu filho</span>{" "}
            <span className="text-red-600">quando ele lê a primeira frase sozinho.</span>
          </h1>
          <p className="mt-3 md:mt-5 text-sm md:text-lg text-muted-foreground max-w-xl">
            Um método simples, feito para pais ocupados, que transforma 10 minutos por
            dia numa jornada divertida de leitura, escrita e coordenação motora — sem
            gritos, sem pressão, sem experiência prévia.
          </p>

          <ul className="mt-4 md:mt-6 space-y-2 text-[13px] md:text-[15px]">
            {[
              "Apenas 10 minutos por dia — cabe na tua rotina",
              "Para crianças dos 2 aos 12 anos, em qualquer nível",
              "Feito para aplicares em casa, sem ser professor",
              "Funciona também para crianças com TDAH e autismo",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-[10px] font-bold">
                  ✓
                </span>
                <span className="text-ink/85">{t}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 md:mt-7 flex flex-col sm:flex-row gap-3 sm:items-center">
            <a
              href="#oferta"
              onClick={(e) => {
                if (typeof (window as any).fbq === 'function') {
                  (window as any).fbq('trackCustom', 'ClickCTA');
                }
              }}
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 md:px-8 md:py-4 font-extrabold text-primary-foreground text-sm md:text-base whitespace-nowrap shadow-[0_20px_60px_-20px_oklch(0.44_0.11_152/0.55)] hover:-translate-y-0.5 transition-transform"
              style={{
                background:
                  "linear-gradient(180deg, oklch(0.5 0.13 152), oklch(0.4 0.11 152))",
              }}
            >
              Quero o Meu Filho Lendo Rápido! 👇
            </a>
            <span className="text-xs sm:text-sm text-muted-foreground">
              🔒 Pagamento seguro · Garantia de 7 dias
            </span>
          </div>

          <div className="mt-5 md:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-4 text-xs">
            {[
              ["500+", "Famílias atendidas"],
              ["100%", "Acesso imediato"],
              ["PDF", "Produto digital"],
              ["0Kz", "Sem mensalidades"],
            ].map(([n, l]) => (
              <div key={l} className="rounded-xl bg-card border p-2.5 md:p-3 text-center">
                <div className="font-display font-black text-base md:text-lg text-primary">{n}</div>
                <div className="text-muted-foreground mt-0.5 text-[11px] md:text-xs">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-up md:-mt-8 flex flex-col items-center" style={{ animationDelay: ".15s" }}>
          <div className="transform scale-105 origin-center">
            <img
              src={`${import.meta.env.BASE_URL}hero-kit.jpg`}
              alt="Mockup do Kit Alfabetização Divertida com tablet, cadernos e atividades para crianças"
              width={1408}
              height={1200}
              className="w-full h-auto"
            />
          </div>
          <div className="mt-8 md:mt-12 rounded-full bg-card border shadow-sm px-5 py-3 flex items-center justify-center gap-3 w-fit">
            <div className="flex -space-x-2">
              {["🧒", "👧", "👦"].map((e) => (
                <span
                  key={e}
                  className="h-8 w-8 rounded-full bg-primary-soft flex items-center justify-center text-lg border-2 border-card"
                >
                  {e}
                </span>
              ))}
            </div>
            <div className="text-xs text-left">
              <div className="font-bold text-ink">+500 pais confiam</div>
              <div className="text-muted-foreground">⭐️⭐️⭐️⭐️⭐️ 4.9/5</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pain() {
  const items = [
    { icon: "📖", text: "O teu filho evita ler ou fecha o livro em segundos?" },
    { icon: "🔤", text: "Ainda tem dificuldade em reconhecer letras e sons?" },
    { icon: "✍️", text: "A caligrafia é um desafio e a mão cansa depressa?" },
    { icon: "🎯", text: "Perde a concentração e desiste antes de terminar?" },
    { icon: "😔", text: "Sente-se envergonhado por não acompanhar a turma?" },
    { icon: "🕒", text: "Não tens horas para dar reforço todos os dias?" },
  ];
  return (
    <section className="py-12 md:py-28 bg-muted/60">
      <div className="container-page">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-accent">
            Se te reconheces aqui, não estás sozinho
          </p>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-black text-ink">
            Alfabetizar em casa não devia ser um{" "}
            <span className="text-red-600">campo de batalha.</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            Muitos pais sentem-se perdidos, culpados e sem tempo. A boa notícia: o
            problema nunca foi o teu filho — foi a falta de um método simples que ele
            realmente queira seguir.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((i) => (
            <div
              key={i.text}
              className="group rounded-3xl bg-gradient-to-b from-card to-card/50 border border-border/60 p-6 flex flex-col gap-4 shadow-sm hover:shadow-md hover:border-accent/40 transition-all duration-300"
            >
              <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center text-3xl group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                {i.icon}
              </div>
              <p className="text-ink/90 font-medium leading-relaxed">{i.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solution() {
  return (
    <section className="py-12 md:py-28">
      <div className="container-page grid md:grid-cols-2 gap-8 md:gap-14 items-center">
        <div className="relative order-2 md:order-1">
          <div className="absolute -inset-4 rounded-[2rem] bg-primary-soft blur-2xl -z-10" />
          <img
            src={`${import.meta.env.BASE_URL}kit-materials.jpg`}
            alt="Páginas do kit de atividades: alfabeto, tracing, matemática e coloração"
            width={1408}
            height={1008}
            loading="lazy"
            className="w-full h-auto rounded-[2rem] border shadow-[var(--shadow-soft)]"
          />
        </div>
        <div className="order-1 md:order-2">
          <span className="inline-block text-sm font-bold uppercase tracking-widest text-primary">
            A solução
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-black text-ink">
            Um caminho simples, colorido e feito para{" "}
            <span className="text-primary">crianças reais.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            O Kit Alfabetização Divertida transforma a aprendizagem numa brincadeira
            guiada. Atividades curtas, visuais e progressivas que despertam curiosidade e
            constroem confiança — do reconhecimento das primeiras letras até frases
            completas.
          </p>

          <div className="mt-8 space-y-4">
            {[
              [
                "1",
                "Escolhes a página do dia",
                "Materiais organizados por idade e fase de aprendizagem.",
              ],
              [
                "2",
                "10 minutos com o teu filho",
                "Traços, cores e sons — sem stress, sem ecrãs.",
              ],
              [
                "3",
                "Vês a evolução acontecer",
                "Semana após semana, ele lê e escreve com mais autonomia.",
              ],
            ].map(([n, t, d]) => (
              <div key={n} className="flex gap-4">
                <div className="shrink-0 h-10 w-10 rounded-full bg-primary text-primary-foreground font-display font-black flex items-center justify-center">
                  {n}
                </div>
                <div>
                  <div className="font-bold text-ink">{t}</div>
                  <div className="text-muted-foreground text-sm">{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    ["📚", "Leitura fluente", "Reconhecimento rápido de letras, sílabas e palavras."],
    ["✏️", "Escrita bonita", "Caligrafia treinada com traçados guiados e repetição divertida."],
    ["🖐️", "Coordenação motora", "Grafismos que preparam a mão para escrever com firmeza."],
    ["🔠", "Consciência fonética", "Método som-letra que acelera a leitura."],
    ["🧠", "Desenvolvimento cognitivo", "Atividades que estimulam foco, memória e lógica."],
    ["💛", "Mais confiança", "A criança sente-se capaz e pede para continuar."],
    ["🎨", "Aprendizagem divertida", "Cores, personagens e temas que prendem a atenção."],
    ["🏠", "Feito para casa", "Sem precisar de professor, imprimes e usas quando quiseres."],
  ];
  return (
    <section className="py-12 md:py-28 bg-muted/60">
      <div className="container-page">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">
            Benefícios reais
          </p>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-black text-ink">
            O que muda na tua casa nas próximas semanas
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map(([icon, title, desc]) => (
            <div
              key={title}
              className="rounded-2xl bg-card border p-6 hover:-translate-y-1 transition-transform"
            >
              <div className="h-12 w-12 rounded-xl bg-primary-soft flex items-center justify-center text-2xl">
                {icon}
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-ink">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatYouGet() {
  return (
    <section className="py-12 md:py-28 overflow-hidden">
      <div className="container-page">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-accent">
            O que vais receber
          </p>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-black text-ink">
            Um ecossistema completo de aprendizagem
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Mais de 600 páginas prontas a imprimir, organizadas para acompanhar o teu
            filho durante meses de evolução.
          </p>
        </div>
      </div>

      <div className="mt-14 marquee-pause overflow-hidden relative">
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(90deg, var(--background), transparent)" }}
        />
        <div
          aria-hidden
          className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(-90deg, var(--background), transparent)" }}
        />
        <div className="flex gap-5 w-max animate-marquee items-center py-4">
          {[...Array(9), ...Array(9)].map((_, i) => {
            const itemNum = (i % 9) + 1;
            return (
              <div
                key={i}
                className="w-[280px] sm:w-[320px] shrink-0 rounded-2xl overflow-hidden border shadow-sm bg-card hover:-translate-y-1 transition-transform"
              >
                <img
                  src={`${import.meta.env.BASE_URL}vais-receber/item-${itemNum}.jpg`}
                  alt={`Conteúdo do kit de alfabetização ${itemNum}`}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Comparison() {
  return (
    <section className="py-12 md:py-28 bg-muted/60">
      <div className="container-page">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">
            A diferença
          </p>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-black text-ink">
            Como será a rotina do seu filho antes e depois do kit
          </h2>
        </div>

        <div className="mt-8 md:mt-14 grid md:grid-cols-2 gap-5">
          <div className="rounded-3xl border p-5 md:p-8 bg-card/60">
            <div className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-full bg-destructive/10 text-destructive flex items-center justify-center text-xl font-black">
                ✕
              </span>
              <h3 className="font-display text-2xl font-bold text-ink">Sem o Kit</h3>
            </div>
            <ul className="mt-6 space-y-3 text-ink/80">
              {[
                "Procuras materiais soltos no Google, sem ligação entre si",
                "A criança perde interesse rapidamente",
                "Cada sessão vira uma discussão",
                "Sentes que perdes tempo sem ver evolução",
                "Comparas o teu filho com os colegas e ficas ansioso",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="text-destructive font-bold">–</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-3xl p-5 md:p-8 text-primary-foreground relative overflow-hidden"
            style={{
              background:
                "linear-gradient(160deg, oklch(0.5 0.13 152), oklch(0.36 0.1 152))",
            }}
          >
            <div className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-full bg-primary-foreground/15 flex items-center justify-center text-xl font-black">
                ✓
              </span>
              <h3 className="font-display text-2xl font-black">Com o Kit</h3>
            </div>
            <ul className="mt-6 space-y-3">
              {[
                "Tudo organizado por fases, do 2 aos 12 anos",
                "A criança pede para fazer mais uma página",
                "Sessões curtas, leves e cheias de conquistas",
                "Vês progresso real em poucas semanas",
                "Sentes-te presente e confiante na educação do teu filho",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="text-sun font-black">+</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---- WhatsApp testimonials marquee ----

type Msg = { text: string; time: string; from?: "me" | "them" };
type Chat = {
  name: string;
  initials: string;
  avatarColor: string;
  status: string;
  msgs: Msg[];
  censorVariant?: number;
  photo?: string;
};

const CHATS: Chat[] = [
  {
    name: "Professora Luciana",
    initials: "LU",
    avatarColor: "#E91E8C",
    status: "online",
    photo: `${import.meta.env.BASE_URL}foto_de_perfil/foto1.jpg`,
    msgs: [
      { from: "them", text: "Apaixonada, profe 😍", time: "18:48" },
      { from: "them", text: "Simplesmente, tudo !!!!!", time: "18:48" },
      { from: "me", text: "Que bom amiga que gostou 😍😍", time: "18:48" },
    ],
  },
  {
    name: "ANON",
    initials: "+244 923881445",
    avatarColor: "none",
    status: "online",
    censorVariant: 1,
    photo: `${import.meta.env.BASE_URL}foto_de_perfil/foto2.jpg`,
    msgs: [
      { from: "them", text: "Meu Deus estou encantada com esse material.. 👏👏😍😍", time: "8:10" },
      { from: "me", text: "Que bom meu bem❤️❤️❤️", time: "8:10" },
      { from: "me", text: "Fico muito feliz 😊", time: "8:10" },
      { from: "them", text: "Ainda estou vendo... Os que já vi estou apaixonada 😍", time: "8:11" },
    ],
  },
  {
    name: "Ana Paula",
    initials: "AP",
    avatarColor: "#1565C0",
    status: "online",
    photo: `${import.meta.env.BASE_URL}foto_de_perfil/foto3.jpg`,
    msgs: [
      { from: "them", text: "Obrigada, profe", time: "8:34" },
      { from: "them", text: "Amei o conteúdo 😍", time: "8:34" },
      { from: "me", text: "Eu que agradeço amiga 🥰🥰", time: "8:35" },
    ],
  },
  {
    name: "ANON",
    initials: "+244 946301776",
    avatarColor: "none",
    status: "há 5 min",
    censorVariant: 2,
    msgs: [
      { from: "them", text: "Irei perder pouco tempo em sala com esses conteúdos.", time: "8:35" },
      { from: "them", text: "E é mais prático para eles entenderem ❤️ 🤱", time: "8:35" },
      { from: "me", text: "Fico muito feliz em ouvir isso! 🙏", time: "8:36" },
    ],
  },
  {
    name: "ANON",
    initials: "+244 927990122",
    avatarColor: "none",
    status: "há 2 min",
    censorVariant: 3,
    photo: `${import.meta.env.BASE_URL}foto_de_perfil/foto5.jpg`,
    msgs: [
      { from: "them", text: "O meu filho leu a primeira frase sozinho hoje! 😭🙌", time: "10:11" },
      { from: "them", text: "Obrigada pelo material! Que bom meu bem 😍😍", time: "10:12" },
      { from: "me", text: "Que notícia maravilhosa! Parabéns! 🌟", time: "10:14" },
    ],
  },
  {
    name: "Beatriz Lima",
    initials: "BL",
    avatarColor: "#00796B",
    status: "online",
    photo: `${import.meta.env.BASE_URL}foto_de_perfil/foto6.jpg`,
    msgs: [
      { from: "them", text: "Recomendei para o grupo das mães da escola 💬", time: "9:22" },
      { from: "me", text: "Muito obrigada, Beatriz! 🙏", time: "9:23" },
      { from: "them", text: "Merece muito 👏👏 excelente material!", time: "9:23" },
    ],
  },
  {
    name: "ANON",
    initials: "+244 951772388",
    avatarColor: "none",
    status: "há 1 h",
    censorVariant: 4,
    msgs: [
      { from: "them", text: "Comprei para a minha filha de 5 anos 🥰", time: "19:00" },
      { from: "them", text: "Ela ficou fascinada pelas páginas de grafismo!!", time: "19:01" },
      { from: "me", text: "Que orgulho! Um beijo 💛", time: "19:02" },
    ],
  },
  {
    name: "Prof. Marta",
    initials: "PM",
    avatarColor: "#4527A0",
    status: "online",
    photo: `${import.meta.env.BASE_URL}foto_de_perfil/foto8.jpg`,
    msgs: [
      { from: "them", text: "Usei na minha sala de aula hoje!", time: "15:02" },
      { from: "them", text: "Os miúdos ADORARAM as páginas do grafismo ✨", time: "15:02" },
      { from: "me", text: "Fico feliz! Obrigada pela partilha 💚", time: "15:05" },
    ],
  },
];

// No-photo silhouette SVG avatar
function WaNoPhotoAvatar() {
  return (
    <div
      className="h-10 w-10 rounded-full shrink-0 flex items-center justify-center overflow-hidden"
      style={{ background: "#B0BEC5" }}
    >
      <svg viewBox="0 0 24 24" width="28" height="28" fill="#fff">
        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
      </svg>
    </div>
  );
}

function WaInitialsAvatar({ initials, color }: { initials: string; color: string }) {
  return (
    <div
      className="h-10 w-10 rounded-full flex items-center justify-center text-white text-sm font-black shrink-0"
      style={{ background: color }}
    >
      {initials}
    </div>
  );
}

// Phone number with realistic manual scribble overlay — parece rabisco feito à mão
function CensoredNumber({ number, variant = 1 }: { number: string; variant?: number }) {
  const scribbles = [
    // Variant 1 — passagem ondulada depois do "+244 ", cobre os dígitos com traço natural
    <>
      <path
        d="M 22 13 C 30 5 40 17 52 9 C 62 3 70 15 82 8 C 89 4 95 12 100 9"
        fill="none" stroke="#25D366" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"
      />
      <path
        d="M 25 7 C 36 14 48 4 60 12 C 70 18 80 5 92 11"
        fill="none" stroke="#1db954" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"
      />
    </>,

    // Variant 2 — dois traços oblíquos que se cruzam, bordas ficam ligeiramente visíveis
    <>
      <path
        d="M 28 4 C 45 11 62 6 78 15 C 88 19 95 13 100 15"
        fill="none" stroke="#25D366" strokeWidth="7.5" strokeLinecap="round"
      />
      <path
        d="M 26 16 C 40 9 55 18 70 8 C 82 1 93 9 100 5"
        fill="none" stroke="#20c05c" strokeWidth="7" strokeLinecap="round"
      />
    </>,

    // Variant 3 — três traços curtos com pequenas falhas entre eles
    <>
      <path
        d="M 16 10 C 26 4 36 15 48 8"
        fill="none" stroke="#25D366" strokeWidth="7.5" strokeLinecap="round"
      />
      <path
        d="M 46 6 C 58 14 68 3 80 11 C 86 15 93 8 100 11"
        fill="none" stroke="#1aab55" strokeWidth="7.5" strokeLinecap="round"
      />
      <path
        d="M 22 15 C 38 8 52 16 66 9 C 76 4 86 13 96 9"
        fill="none" stroke="#25D366" strokeWidth="5.5" strokeLinecap="round" opacity="0.85"
      />
    </>,

    // Variant 4 — traço único amplo e irregular, parece passagem de dedo com marcador
    <>
      <path
        d="M 14 8 C 26 3 38 15 52 9 C 64 4 74 16 86 9 C 92 6 97 12 100 10"
        fill="none" stroke="#25D366" strokeWidth="8.5" strokeLinecap="round" strokeLinejoin="round"
      />
      <path
        d="M 18 13 C 32 8 46 16 62 10 C 74 5 87 13 98 8"
        fill="none" stroke="#0d8c42" strokeWidth="5.5" strokeLinecap="round" opacity="0.8"
      />
    </>,
  ];

  return (
    <div className="relative inline-block leading-tight whitespace-nowrap max-w-full">
      <span className="font-semibold text-white text-[14px] truncate block">{number}</span>
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-100"
        viewBox="0 0 100 20"
        preserveAspectRatio="none"
      >
        {scribbles[(variant - 1) % scribbles.length]}
      </svg>
    </div>
  );
}

function ChatCard({ chat }: { chat: Chat }) {
  const isAnon = chat.name === "ANON";

  return (
    <div
      className="w-[300px] sm:w-[330px] shrink-0 rounded-2xl overflow-hidden shadow-lg flex flex-col"
      style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", height: "360px" }}
    >
      {/* WhatsApp Header */}
      <div
        className="px-3 py-2.5 flex items-center gap-2.5 shrink-0"
        style={{ background: "#075E54" }}
      >
        {/* Back arrow */}
        <svg className="w-5 h-5 text-white opacity-90 shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
        </svg>

        {chat.photo ? (
          <img src={chat.photo} alt={chat.name} className="h-10 w-10 rounded-full shrink-0 object-cover" />
        ) : isAnon ? (
          <WaNoPhotoAvatar />
        ) : (
          <WaInitialsAvatar initials={chat.initials} color={chat.avatarColor} />
        )}

        <div className="flex-1 min-w-0">
          {isAnon ? (
            <CensoredNumber number={chat.initials} variant={chat.censorVariant} />
          ) : (
            <div className="font-semibold text-white text-[14px] truncate leading-tight">
              {chat.name}
            </div>
          )}
          <div className="text-[11px] text-white/75 leading-tight">{chat.status}</div>
        </div>

        <div className="flex gap-3.5 opacity-90 shrink-0">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17 10.5V7a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1v-3.5l4 4v-11l-4 4z" />
          </svg>
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </div>
      </div>

      {/* Chat body — flex-1 so it fills remaining space */}
      <div
        className="flex-1 px-3 py-3 space-y-1.5 overflow-hidden"
        style={{
          backgroundColor: "#ECE5DD",
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c8b9a8' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        {chat.msgs.map((m, i) => (
          <div
            key={i}
            className={"flex " + (m.from === "me" ? "justify-end" : "justify-start")}
          >
            <div
              className="relative max-w-[82%] px-2.5 py-1.5 text-[13px] leading-snug shadow-sm"
              style={{
                background: m.from === "me" ? "#DCF8C6" : "#FFFFFF",
                borderRadius:
                  m.from === "me"
                    ? "12px 12px 2px 12px"
                    : "12px 12px 12px 2px",
                color: "#111",
              }}
            >
              <p style={{ marginBottom: "2px" }}>{m.text}</p>
              <div
                className="flex items-center justify-end gap-1"
                style={{ fontSize: "10px", color: "#8696A0" }}
              >
                <span>{m.time}</span>
                {m.from === "me" && (
                  <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
                    <path d="M11.071.653L4.42 7.305 1.479 4.363.066 5.776l4.354 4.353 8.063-8.063L11.07.653z" fill="#53BDEB" />
                    <path d="M15.352.653l-6.65 6.652-1.43-1.43L5.86 7.287l2.843 2.843L16.765 2.066 15.352.653z" fill="#53BDEB" />
                  </svg>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input bar — always at bottom */}
      <div
        className="px-2 py-2 flex items-center gap-2 shrink-0"
        style={{ background: "#F0F2F5" }}
      >
        {/* Emoji icon */}
        <svg className="w-6 h-6 shrink-0" style={{ color: "#8696A0" }} fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
        </svg>

        {/* Text input */}
        <div className="flex-1 bg-white rounded-full px-3 py-1.5 text-[13px] text-gray-400 flex items-center justify-between">
          <span>Mensagem</span>
          <div className="flex items-center gap-2.5">
            {/* Attachment icon */}
            <svg className="w-4 h-4" style={{ color: "#8696A0" }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z" />
            </svg>
            {/* Camera icon */}
            <svg className="w-4 h-4" style={{ color: "#8696A0" }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 15.2a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4z" /><path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
            </svg>
          </div>
        </div>

        {/* Mic button */}
        <div
          className="h-9 w-9 rounded-full flex items-center justify-center shrink-0"
          style={{ background: "#25D366" }}
        >
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 15c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v7c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.42 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  const loop = [...CHATS, ...CHATS];
  return (
    <section className="py-12 md:py-28">
      <div className="container-page">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">
            Histórias reais
          </p>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-black text-ink">
            Mensagens que recebemos todos os dias
          </h2>
        </div>
      </div>

      <div className="mt-14 marquee-pause overflow-hidden relative">
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(90deg, var(--background), transparent)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(-90deg, var(--background), transparent)" }}
        />
        <div className="flex gap-5 w-max animate-marquee">
          {loop.map((c, i) => (
            <ChatCard key={i} chat={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Offer() {
  useEffect(() => {
    if (!document.getElementById("stander-checkout-script")) {
      const script = document.createElement("script");
      script.id = "stander-checkout-script";
      script.src = "https://www.standerpay.com/embed/stander-checkout.js";
      script.async = true;
      document.body.appendChild(script);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (typeof (window as any).fbq === 'function') {
            (window as any).fbq('track', 'ViewContent');
          }
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    const el = document.getElementById("oferta");
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const handleEssencialClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'InitiateCheckout');
    }
    const standerContainer = document.querySelector('.stander-checkout[data-product="59d12f7f-51c0-4cd4-bfe3-9a64fed52e93"]');
    if (standerContainer) {
      const standerBtn = standerContainer.querySelector('button, a') || standerContainer;
      if (standerBtn) {
        e.preventDefault();
        (standerBtn as HTMLElement).click();
      }
    }
  };

  const handlePremiumClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'InitiateCheckout');
    }
    const standerContainer = document.querySelector('.stander-checkout[data-product="c6c54990-79a4-4dec-8621-ee69994edaa4"]');
    if (standerContainer) {
      const standerBtn = standerContainer.querySelector('button, a') || standerContainer;
      if (standerBtn) {
        e.preventDefault();
        (standerBtn as HTMLElement).click();
      }
    }
  };

  return (
    <section id="oferta" className="py-12 md:py-28 bg-muted/60">
      <div style={{ display: "none" }} aria-hidden="true">
        {/* Essencial Checkout */}
        <div
          className="stander-checkout"
          data-product="59d12f7f-51c0-4cd4-bfe3-9a64fed52e93"
          data-mode="modal"
          data-theme="light"
          data-primary="#0a1744"
          data-button-color="#0a1744"
          data-button-text="Comprar agora"
          data-radius="12"
          data-lang="pt"
        ></div>
        {/* Premium Checkout */}
        <div
          className="stander-checkout"
          data-product="c6c54990-79a4-4dec-8621-ee69994edaa4"
          data-mode="modal"
          data-theme="light"
          data-primary="#0a1744"
          data-button-color="#0a1744"
          data-button-text="Comprar agora"
          data-radius="12"
          data-lang="pt"
        ></div>
        {/* Discount Checkout (Exit Intent) */}
        <div
          className="stander-checkout"
          data-product="8e379baa-cd5b-4876-b4e9-747b7d233a5b"
          data-mode="modal"
          data-theme="light"
          data-primary="#0a1744"
          data-button-color="#0a1744"
          data-button-text="Comprar agora"
          data-radius="12"
          data-lang="pt"
        ></div>
      </div>
      <div className="container-page">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-accent">
            Escolhe o teu acesso
          </p>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-black text-ink">
            Investe hoje. Vê a evolução amanhã.
          </h2>
        </div>

        {/* Imagem escolha */}
        <div className="mt-12 max-w-4xl mx-auto rounded-3xl overflow-hidden border shadow-md">
          <img
            src={`${import.meta.env.BASE_URL}escolha .jpeg`}
            alt="Escolhe o teu plano: Essencial ou Premium"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>

        <div className="mt-6 md:mt-8 grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {/* Essencial */}
          <div className="rounded-3xl border-2 border-green-500 bg-card p-5 md:p-8 flex flex-col">
            <h3 className="font-display text-xl md:text-2xl font-bold text-ink">
              Kit Grafismo Fonético + Caligrafia Essencial
            </h3>
            <div className="mt-6 flex flex-col gap-1">
              <span className="text-muted-foreground line-through text-lg">14.500 Kz</span>
              <span className="font-display text-5xl font-black text-primary">4.500 Kz</span>
            </div>
            <ul className="mt-6 space-y-2.5 text-sm text-ink/85 flex-1">
              {[
                "Kit Grafismo Fonético Americano",
                "Kit de Caligrafia Infantil",
                "Histórias Bíblicas para Colorir",
                "Bónus Silabário Cursivo",
                "Bónus Frases Cursivas",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <span className="text-primary font-bold shrink-0">✅</span>
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted-foreground text-center">
              ⚡ Acesso imediato | 📄 Tudo em PDF | 🔒 Sem mensalidades
            </p>
            <a
              href="https://www.standerpay.com/checkout/59d12f7f-51c0-4cd4-bfe3-9a64fed52e93"
              onClick={handleEssencialClick}
              className="mt-6 inline-flex w-full justify-center rounded-full border-2 border-primary text-primary font-black py-3.5 text-sm md:text-base hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              QUERO O ESSENCIAL
            </a>
          </div>

          {/* Premium */}
          <div
            className="relative rounded-3xl border-2 border-[#FFD700] p-5 md:p-8 pt-10 text-primary-foreground flex flex-col overflow-visible"
            style={{
              background:
                "linear-gradient(160deg, oklch(0.5 0.13 152), oklch(0.34 0.1 152))",
            }}
          >
            {/* Badge MAIS POPULAR centrado na borda superior */}
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-[11px] font-black uppercase tracking-wider px-4 py-1.5 rounded-full whitespace-nowrap shadow-lg">
              🔥 MAIS POPULAR
            </span>

            <h3 className="font-display text-xl md:text-2xl font-black mt-2" style={{ color: "#FFD700" }}>
              Kit Grafismo Fonético + Caligrafia Premium 👑
            </h3>

            <div className="mt-6 flex flex-col gap-1">
              {/* Badge oferta limitada piscando */}
              <div className="mb-2 inline-flex items-center gap-2 bg-red-600 text-white font-bold text-xs px-4 py-2 rounded-full w-fit animate-pulse">
                ⚡ OFERTA LIMITADA
              </div>
              <span className="text-primary-foreground/70 line-through text-lg">19.900 Kz</span>
            </div>
            <p className="text-sm text-primary-foreground/80 mt-1">Hoje está por apenas</p>
            <span className="font-display text-5xl font-black mt-1" style={{ color: "#FFD700" }}>6.500 Kz</span>

            <ul className="mt-6 space-y-2.5 text-sm flex-1">
              {[
                "Tudo do Essencial",
                "35 Livros Cristãos para Colorir",
                "35 Livros Infantis PDF",
                "365 Desenhos para Colorir",
                "Kit Caligrafia Avançado",
                "Davi e Golias para Colorir",
                "Príncipe Cristão para Colorir",
                "Coordenação Motora Avançada",
                "Acesso prioritário a novos materiais",
                "Suporte VIP via WhatsApp",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <span className="font-bold shrink-0">✅</span>
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-primary-foreground/80 text-center">
              ⚡ Acesso imediato | 📄 Tudo em PDF | 🔒 Sem mensalidades
            </p>
            <a
              href="https://www.standerpay.com/checkout/c6c54990-79a4-4dec-8621-ee69994edaa4"
              onClick={handlePremiumClick}
              className="mt-6 inline-flex w-full justify-center rounded-full font-black py-3.5 text-sm md:text-base transition hover:brightness-90"
              style={{ background: "#FFD700", color: "#1a1a1a" }}
            >
              QUERO O PREMIUM AGORA! 👑
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Guarantee() {
  return (
    <section className="py-12 md:py-28">
      <div className="container-page">
        <div className="max-w-3xl mx-auto rounded-[2rem] border bg-card p-5 md:p-12 flex flex-col md:flex-row items-center gap-5 md:gap-8 shadow-[var(--shadow-soft)]">
          <div className="shrink-0 h-32 w-32 rounded-full flex items-center justify-center bg-primary text-primary-foreground border-4 border-primary/30">
            <span className="font-display font-black text-6xl leading-none">7</span>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-primary">
              Garantia incondicional
            </p>
            <h2 className="mt-3 font-display text-2xl md:text-4xl font-black text-ink">
              7 dias para experimentar sem risco
            </h2>
            <p className="mt-4 text-muted-foreground">
              Experimenta o kit com o teu filho durante 7 dias. Se não sentires que faz
              sentido, escreve-nos e devolvemos 100% do teu investimento — sem perguntas,
              sem burocracia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const qs = [
    ["Como recebo o kit depois da compra?", "Imediatamente após o pagamento recebes um email com o acesso a todos os PDFs para descarregar."],
    ["É um produto físico ou digital?", "É 100% digital, em PDF. Podes usar quantas vezes quiseres, imprimir ou preencher em ecrã."],
    ["Funciona no telemóvel e no tablet?", "Sim. Podes abrir os ficheiros em qualquer dispositivo — telemóvel, tablet ou computador."],
    ["Preciso de imprimir?", "Não é obrigatório, mas recomendamos imprimir para a criança escrever com o lápis, o que ajuda muito na coordenação motora."],
    ["Serve para qualquer idade?", "Sim. As atividades estão organizadas por níveis para crianças dos 2 aos 12 anos."],
    ["Posso usar com mais do que um filho?", "Claro. Uma única compra serve para toda a família — imprime as páginas as vezes que precisares."],
    ["Preciso de experiência para aplicar?", "Não. O Guia dos Pais explica em minutos como conduzir cada sessão de forma leve."],
    ["E se eu não gostar?", "Tens 7 dias para pedir o reembolso total, sem perguntas."],
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-12 md:py-28 bg-muted/60">
      <div className="container-page max-w-3xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">FAQ</p>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-black text-ink">
            Perguntas frequentes
          </h2>
        </div>
        <div className="mt-12 space-y-3">
          {qs.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div key={q} className="rounded-2xl border bg-card overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between text-left px-6 py-5 font-bold text-ink hover:bg-muted/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{q}</span>
                  <span
                    className={
                      "shrink-0 h-8 w-8 rounded-full bg-primary-soft text-primary flex items-center justify-center text-xl transition-transform " +
                      (isOpen ? "rotate-45" : "")
                    }
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 -mt-1 text-muted-foreground animate-fade-up">
                    {a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="py-12 md:py-28 bg-muted/60">
      <div className="container-page">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">
            Processo Simples
          </p>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-black text-ink">
            Como funciona?
          </h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            ["1", "Compra segura", "Faz a tua inscrição através do nosso checkout seguro."],
            ["2", "Recebe acesso", "Recebes imediatamente no teu email o link para descarregar todos os materiais."],
            ["3", "Aplica as atividades", "Imprime ou usa digitalmente com o teu filho, apenas 10 a 15 minutos por dia."],
            ["4", "Acompanha a evolução", "Celebra cada conquista e vê o desenvolvimento acontecer."],
          ].map(([n, t, d]) => (
            <div key={n} className="text-center">
              <div className="mx-auto shrink-0 h-16 w-16 rounded-full bg-primary-soft text-primary font-display text-2xl font-black flex items-center justify-center">
                {n}
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-ink">{t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-10 md:py-16 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(700px 400px at 50% 0%, oklch(0.86 0.16 88 / 0.35), transparent 60%)",
        }}
      />
      <div className="container-page relative text-center max-w-3xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 text-accent px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Acesso imediato
        </span>
        <h2 className="mt-6 font-display text-2xl md:text-5xl font-black text-ink leading-[1.1]">
          Daqui a <span className="text-primary">3 meses</span>, o teu filho pode estar a <span className="text-red-600">ler frases inteiras</span> sozinho.
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          Ou pode continuar exatamente no mesmo ponto. A diferença é começar hoje, com
          o método certo, ao lado de quem ele mais confia — tu.
        </p>
        <a
          href="#oferta"
          onClick={(e) => {
            if (typeof (window as any).fbq === 'function') {
              (window as any).fbq('trackCustom', 'ClickCTA');
            }
          }}
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 md:px-10 md:py-5 font-black text-base md:text-lg text-primary-foreground shadow-[0_25px_70px_-25px_oklch(0.44_0.11_152/0.7)] hover:-translate-y-0.5 transition-transform"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.5 0.13 152), oklch(0.38 0.1 152))",
          }}
        >
          Começar agora →
        </a>
        <p className="mt-4 text-xs text-muted-foreground">
          🔒 Pagamento seguro · 🛡️ Garantia de 7 dias · 📩 Envio automático por email
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t py-10 text-center text-xs text-muted-foreground">
      <div className="container-page">
        © {new Date().getFullYear()} Kit Alfabetização Divertida · Todos os direitos
        reservados
      </div>
    </footer>
  );
}

function Bonus() {
  return (
    <section className="py-12 md:py-28 bg-sun/10">
      <div className="container-page">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-5xl font-black text-ink">
            Bónus Exclusivos Somente Hoje!
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          <div className="rounded-3xl overflow-hidden border bg-card shadow-sm hover:shadow-md transition-shadow hover:-translate-y-1 transform">
            <img src={`${import.meta.env.BASE_URL}bonus1.png`} alt="Bónus 1" className="w-full h-auto object-cover" loading="lazy" />
          </div>
          <div className="rounded-3xl overflow-hidden border bg-card shadow-sm hover:shadow-md transition-shadow hover:-translate-y-1 transform">
            <img src={`${import.meta.env.BASE_URL}bonus2.png`} alt="Bónus 2" className="w-full h-auto object-cover" loading="lazy" />
          </div>
        </div>

        <div className="mt-14 max-w-3xl mx-auto text-center">
          <a
            href="#oferta"
            onClick={(e) => {
              if (typeof (window as any).fbq === 'function') {
                (window as any).fbq('trackCustom', 'ClickCTA');
              }
            }}
            className="inline-block w-full bg-red-600 text-white font-black text-center py-3.5 px-4 rounded-full text-base sm:text-xl shadow-[0_15px_40px_-10px_rgba(220,38,38,0.6)] hover:bg-red-700 hover:-translate-y-1 transition-all"
          >
            ⏰ Estes bónus desaparecem quando a oferta fechar!
          </a>
        </div>
      </div>
    </section>
  );
}

const salesNames = [
  "Maria João", "Ana Paula", "Teresa", "José Eduardo", "Paulo",
  "Domingos", "Helena", "Isabel", "Rui", "Marta",
  "João Pedro", "Manuel", "Esperança", "Fátima", "Filomena",
  "Carlos", "Miguel", "Beatriz", "Inês", "Tiago",
  "Lurdes", "Fernanda", "Augusto", "Leonor", "Catarina",
  "Francisco", "Ricardo", "Sara", "António", "Vasco"
];

const salesProducts = [
  "o Kit Essencial",
  "o Kit Premium",
  "o Kit Alfabetização Divertida",
  "o Kit Completo"
];

function SalesNotification() {
  const [visible, setVisible] = useState(false);
  const [currentName, setCurrentName] = useState("");
  const [currentProduct, setCurrentProduct] = useState("");

  useEffect(() => {
    const triggerNotification = () => {
      const randomName = salesNames[Math.floor(Math.random() * salesNames.length)];
      const randomProduct = salesProducts[Math.floor(Math.random() * salesProducts.length)];
      setCurrentName(randomName);
      setCurrentProduct(randomProduct);
      setVisible(true);

      setTimeout(() => {
        setVisible(false);
      }, 5000);
    };

    const initialTimeout = setTimeout(triggerNotification, 3000);
    const interval = setInterval(triggerNotification, 40000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-3 left-3 z-[100] flex items-center gap-2 rounded-2xl bg-white border border-border shadow-[var(--shadow-glow)] p-2.5 pr-4 transition-all duration-500 transform max-w-[calc(100vw-1.5rem)] ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
        }`}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>
      <div>
        <p className="text-sm font-semibold text-ink leading-tight">{currentName}</p>
        <p className="text-xs text-muted-foreground leading-tight mt-0.5">
          acabou de comprar <span className="font-bold text-ink">{currentProduct}</span>
        </p>
      </div>
    </div>
  );
}

function BonusModal() {
  const [visible, setVisible] = useState(false);
  const [closed, setClosed] = useState(false);
  const [claimed, setClaimed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 45000); // 45 seconds delay to appear more natural
    return () => clearTimeout(timer);
  }, []);

  if (closed || !visible) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm transition-opacity duration-300">
      <div className="bg-white rounded-3xl p-6 md:p-8 max-w-sm w-full shadow-2xl relative transform transition-all duration-300 scale-100">
        <button
          onClick={() => setClosed(true)}
          className="absolute top-4 right-4 h-8 w-8 flex items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-muted/80 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        {!claimed ? (
          <>
            <div className="h-16 w-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto text-3xl mb-4 shadow-inner">
              🎁
            </div>
            <h3 className="font-display text-2xl font-black text-ink text-center mb-2">
              Surpresa Desbloqueada!
            </h3>
            <p className="text-center text-muted-foreground mb-6 text-[15px]">
              Acabaste de ganhar acesso a <span className="font-bold text-ink">Bónus Exclusivos</span>. Esta oferta é válida <span className="font-bold text-red-600">apenas para a tua compra de hoje</span>!
            </p>
            <button
              onClick={() => {
                setClaimed(true);
                setTimeout(() => {
                  setClosed(true);
                }, 3000);
              }}
              className="w-full text-primary-foreground font-black py-4 rounded-full hover:brightness-110 transition-all shadow-[var(--shadow-glow)]"
              style={{ background: "linear-gradient(180deg, oklch(0.5 0.13 152), oklch(0.4 0.11 152))" }}
            >
              GARANTIR MEU BÓNUS
            </button>
          </>
        ) : (
          <div className="py-4 animate-fade-up">
            <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-4xl mb-4 shadow-inner">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-display text-2xl font-black text-ink text-center mb-2">
              Parabéns!
            </h3>
            <p className="text-center text-muted-foreground text-[15px]">
              O seu bónus foi garantido com sucesso.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function ExitIntentModal() {
  const [visible, setVisible] = useState(false);
  const [closed, setClosed] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutes countdown
  const triggered = useState(false);

  useEffect(() => {
    if (!document.getElementById("stander-checkout-script")) {
      const script = document.createElement("script");
      script.id = "stander-checkout-script";
      script.src = "https://www.standerpay.com/embed/stander-checkout.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    if (closed) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Fire only when the mouse goes toward the top of the viewport (browser chrome / tab)
      if (e.clientY <= 10 && !triggered[0]) {
        (triggered as [boolean, React.Dispatch<React.SetStateAction<boolean>>])[1](true);
        setVisible(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [closed]);

  // Countdown timer
  useEffect(() => {
    if (!visible) return;
    const t = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(t);
  }, [visible]);

  const handleDiscountClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'InitiateCheckout');
    }
    const standerContainer = document.querySelector('.stander-checkout[data-product="8e379baa-cd5b-4876-b4e9-747b7d233a5b"]');
    if (standerContainer) {
      const standerBtn = standerContainer.querySelector('button, a') || standerContainer;
      if (standerBtn) {
        e.preventDefault();
        (standerBtn as HTMLElement).click();
        setClosed(true);
      } else {
        setClosed(true);
      }
    } else {
      setClosed(true);
    }
  };

  if (!visible || closed) return null;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const timeString = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/65 px-4 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl max-w-xs w-full shadow-2xl overflow-hidden">

        {/* Header strip */}
        <div
          className="px-5 py-4 text-center text-white"
          style={{ background: "linear-gradient(135deg, oklch(0.5 0.13 152), oklch(0.36 0.1 152))" }}
        >
          <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-0.5">Espera! Antes de saíres…</p>
          <h3 className="font-display text-lg font-black leading-tight">
            Oferta especial só para ti 👇
          </h3>
        </div>

        {/* Close button */}
        <button
          onClick={() => setClosed(true)}
          className="absolute top-3 right-4 text-white/70 hover:text-white transition-colors text-xl font-bold leading-none"
          aria-label="Fechar"
        >
          ✕
        </button>

        <div className="px-5 py-4">
          {/* Countdown */}
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-xs text-muted-foreground font-medium">Expira em:</span>
            <span
              className="font-mono font-black text-base px-2 py-0.5 rounded-lg text-white"
              style={{ background: "#DC2626" }}
            >
              {timeString}
            </span>
          </div>

          {/* Product & Price */}
          <div className="rounded-xl border-2 border-green-500 p-3 bg-green-50 text-center mb-3">
            <p className="text-xs font-bold uppercase tracking-widest text-green-700 mb-1">Oferta exclusiva apenas para ti!</p>
            <h4 className="font-display text-sm font-black text-ink mb-2 leading-tight">
              Kit Grafismo Fonético + Caligrafia Premium 👑
            </h4>
            <div className="flex items-center justify-center gap-2">
              <span className="text-muted-foreground line-through text-sm">6.500 Kz</span>
              <span
                className="font-display text-2xl font-black"
                style={{ color: "oklch(0.44 0.11 152)" }}
              >
                5.350Kz
              </span>
            </div>
            <p className="mt-0.5 text-xs text-muted-foreground">Poupa 1.505 Kz — <strong className="text-red-600">só nesta sessão</strong></p>
          </div>

          {/* Perks */}
          <ul className="space-y-1 text-xs text-ink/85 mb-4">
            {[
              "Acesso imediato a todos os PDFs",
              "600+ páginas prontas a imprimir",
              "Bónus + suporte VIP via WhatsApp",
              "Garantia 7 dias — sem perguntas",
            ].map(t => (
              <li key={t} className="flex items-center gap-1.5">
                <span className="text-green-600 font-bold shrink-0">✓</span>
                {t}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="https://www.standerpay.com/checkout/8e379baa-cd5b-4876-b4e9-747b7d233a5b"
            onClick={handleDiscountClick}
            className="block w-full text-center font-black py-3 rounded-full text-sm transition hover:brightness-110 shadow-lg"
            style={{ background: "#FFD700", color: "#1a1a1a" }}
          >
            QUERO COM DESCONTO! 👑
          </a>
          <button
            onClick={() => setClosed(true)}
            className="block w-full text-center text-xs text-muted-foreground mt-2 hover:underline"
          >
            Não, obrigado.
          </button>
        </div>
      </div>
    </div>
  );
}

function WhatsAppButton() {
  const handleClick = () => {
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'Contact');
    }
  };

  return (
    <a
      href="https://wa.me/244946554601?text=Olá!%20Tenho%20uma%20dúvida%20sobre%20o%20Kit%20Alfabetização%20Divertida."
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-4 right-4 z-[100] flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
      aria-label="Falar no WhatsApp"
    >
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 2.17.7 4.19 1.94 5.83L2.53 22l4.38-1.15A9.953 9.953 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.85 14.15c-.24.68-1.38 1.25-1.95 1.34-.52.09-1.21.14-3.41-.78-2.65-1.1-4.35-3.83-4.48-4.01-.13-.18-1.07-1.42-1.07-2.71 0-1.29.67-1.93.91-2.18.24-.24.52-.3.7-.3h.49c.21 0 .44-.06.63.4.22.52.74 1.81.8 1.95.07.13.11.28.02.46-.09.18-.13.3-.26.43-.13.13-.27.3-.39.42-.11.12-.24.25-.1.5.13.24.59 1 1.27 1.6 .88.78 1.63 1.02 1.88 1.13.24.11.39.09.53-.07.15-.17.65-.75.82-1.01.17-.26.35-.22.57-.14.22.09 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.58-.18 1.26z" />
      </svg>
    </a>
  );
}

export default function App() {
  // Always start at the very top of the page, regardless of browser scroll restoration
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Disable browser's automatic scroll restoration
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, []);

  return (
    <main className="bg-background text-foreground">
      <TopBar />
      <Hero />
      <Pain />
      <Solution />
      <Comparison />
      <Benefits />
      <WhatYouGet />
      <Bonus />
      <HowItWorks />
      <Testimonials />
      <Offer />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
      <SalesNotification />
      <BonusModal />
      <ExitIntentModal />
      <WhatsAppButton />
    </main>
  );
}
