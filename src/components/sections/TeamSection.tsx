import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Linkedin, Mail, Instagram, Facebook, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  photo: string;
  social?: {
    linkedin?: string;
    instagram?: string;
    facebook?: string;
    whatsapp?: string;
    email?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Orlando Correia',
    role: 'CEO & Fundador',
    bio: 'Visionário digital com mais de 3 anos de experiência em estratégia de marca e crescimento empresarial. Lidera a Nzila Digital com foco em inovação e resultados mensuráveis para cada cliente.',
    photo: '/team/member1.png',
    social: {
      linkedin: 'https://www.linkedin.com/in/orlandojoseorreia/',
      instagram: 'https://www.instagram.com/orlandocorreiaoficial?igsh=N3IwMHE5bHNtOW53',
      facebook: 'https://www.facebook.com/profile.php?id=100076718228192',
      whatsapp: 'https://wa.me/244946554601',
      email: 'mailto:orlandojosecorreia1@outlook.com'
    }
  },
  {
    id: 2,
    name: 'Elias da Silva',
    role: 'Diretor Criativo',
    bio: 'Especialista em design de marca e experiência visual. Transforma conceitos abstratos em identidades visuais poderosas que conectam marcas ao seu público-alvo.',
    photo: '/team/member2.png',
  },
  {
    id: 3,
    name: 'Eric Graça',
    role: 'Developer Full-Stack',
    bio: 'Engenheiro de software focado em criar soluções web de alta performance. Domina as tecnologias mais modernas para entregar produtos digitais escaláveis e robustos.',
    photo: '/team/member3.png',
  },
  {
    id: 4,
    name: 'Alonso dos Santos',
    role: 'Gestora de Marketing',
    bio: 'Estrategista de marketing digital com talento para campanhas que convertem. Especializada em tráfego pago, funis de venda e crescimento orgânico nas redes sociais.',
    photo: '/team/member4.png',
  },
];

// Pyramid positions: [front, back-center, back-left, back-right]
type PyramidPosition = {
  x: number;
  y: number;
  scale: number;
  opacity: number;
  zIndex: number;
  blur: number;
};

const pyramidPositions: PyramidPosition[] = [
  { x: 0, y: 70, scale: 1.1, opacity: 1, zIndex: 40, blur: 0 },           // Front (hero)
  { x: 0, y: -50, scale: 0.78, opacity: 0.5, zIndex: 20, blur: 1.5 },     // Back center
  { x: -160, y: -10, scale: 0.72, opacity: 0.4, zIndex: 10, blur: 2 },    // Back left
  { x: 160, y: -10, scale: 0.72, opacity: 0.4, zIndex: 10, blur: 2 },     // Back right
];

const mobilePyramidPositions: PyramidPosition[] = [
  { x: 0, y: 10, scale: 1.05, opacity: 1, zIndex: 40, blur: 0 },
  { x: 0, y: -35, scale: 0.7, opacity: 0.45, zIndex: 20, blur: 1.5 },
  { x: -75, y: -15, scale: 0.65, opacity: 0.35, zIndex: 10, blur: 2 },
  { x: 75, y: -15, scale: 0.65, opacity: 0.35, zIndex: 10, blur: 2 },
];

export function TeamSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // State for rendering
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Updaters
  const updateActiveIndex = (newIndex: number) => {
    setActiveIndex(newIndex);
  };

  const nextMember = () => {
    setActiveIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevMember = () => {
    setActiveIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  // Mobile detection
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Compute pyramid position for each member
  const getPositionIndex = (memberIndex: number): number => {
    return (memberIndex - activeIndex + teamMembers.length) % teamMembers.length;
  };

  const activeMember = teamMembers[activeIndex];
  const positions = isMobile ? mobilePyramidPositions : pyramidPositions;
  const photoSize = isMobile ? 140 : 240;

  return (
    <section
      ref={sectionRef}
      id="team"
      className="relative bg-background min-h-[100dvh] overflow-hidden"
    >
      {/* Full viewport container */}
      <div className="min-h-[100dvh] w-full flex items-center relative py-24 md:py-0">

        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-nzila-gold/[0.03] blur-[150px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-nzila-gold/[0.02] blur-[120px] rounded-full" />
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: 'radial-gradient(#C9A84C 0.5px, transparent 0.5px)',
              backgroundSize: '48px 48px',
            }}
          />
        </div>

        <div className="container-max relative z-10 w-full">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-10 md:mb-14"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users size={18} className="text-nzila-gold" />
              <span className="text-nzila-gold font-bold tracking-[0.3em] text-[10px] uppercase">
                Nossa Equipa
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-[1.1]">
              As mentes por trás da{' '}
              <span className="text-gradient-gold">sua transformação.</span>
            </h2>
          </motion.div>

          {/* Main Grid: Photos + Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">

            {/* Left: Pyramid Formation */}
            <div
              className="relative flex items-center justify-center"
              style={{
                height: isMobile ? 260 : 440,
                perspective: '2000px',
              }}
            >
              {teamMembers.map((member, i) => {
                const posIdx = getPositionIndex(i);
                const pos = positions[posIdx];

                return (
                  <motion.div
                    key={member.id}
                    className="absolute"
                    animate={{
                      x: pos.x,
                      y: pos.y,
                      scale: pos.scale,
                      opacity: pos.opacity,
                      zIndex: pos.zIndex,
                      filter: `blur(${pos.blur}px)`,
                    }}
                    transition={{
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{ zIndex: pos.zIndex }}
                  >
                    {/* Photo container */}
                    <div
                      className="relative rounded-2xl overflow-hidden"
                      style={{ width: photoSize, height: photoSize }}
                    >
                      {/* Golden ring for front member */}
                      <motion.div
                        className="absolute -inset-[3px] rounded-2xl"
                        animate={{
                          background: posIdx === 0
                            ? 'linear-gradient(135deg, #E8C97A, #C9A84C, #8B6914, #C9A84C)'
                            : 'linear-gradient(135deg, transparent, transparent)',
                          opacity: posIdx === 0 ? 1 : 0,
                        }}
                        transition={{ duration: 0.7 }}
                      />

                      {/* Photo */}
                      <div className="absolute inset-[3px] rounded-[13px] overflow-hidden bg-card">
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="w-full h-full object-cover"
                          loading="eager"
                          decoding="async"
                        />
                        {/* Depth overlay for background members */}
                        <motion.div
                          className="absolute inset-0 bg-black"
                          animate={{ opacity: posIdx === 0 ? 0 : 0.35 }}
                          transition={{ duration: 0.7 }}
                        />
                      </div>

                      {/* Shadow glow for front */}
                      <motion.div
                        className="absolute -inset-4 rounded-2xl pointer-events-none"
                        animate={{
                          boxShadow: posIdx === 0
                            ? '0 30px 70px -15px rgba(201, 168, 76, 0.3), 0 20px 40px -10px rgba(0, 0, 0, 0.6)'
                            : '0 10px 30px -10px rgba(0, 0, 0, 0.4)',
                        }}
                        transition={{ duration: 0.7 }}
                      />
                    </div>


                  </motion.div>
                );
              })}
            </div>

            {/* Right: Member Info */}
            <div className="relative min-h-[240px] md:min-h-[280px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMember.id}
                  initial={{ opacity: 0, x: 40, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, x: -40, filter: 'blur(10px)' }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="text-center md:text-left"
                >
                  {/* Role tag */}
                  <span className="inline-block px-4 py-1.5 rounded-sm bg-nzila-gold/10 border border-nzila-gold/20 text-nzila-gold text-[10px] font-bold uppercase tracking-[0.25em] mb-6">
                    {activeMember.role}
                  </span>

                  {/* Name */}
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6 tracking-tight">
                    {activeMember.name}
                  </h3>

                  {/* Bio */}
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
                    {activeMember.bio}
                  </p>

                  {/* Social links */}
                  <div className="flex items-center gap-4 justify-center md:justify-start">
                    {activeMember.social?.linkedin && (
                      <a
                        href={activeMember.social.linkedin}
                        target="_blank" rel="noopener noreferrer"
                        className="w-11 h-11 rounded-sm bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-white/40 hover:text-nzila-gold hover:border-nzila-gold/30 transition-all duration-300"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={18} />
                      </a>
                    )}
                    {activeMember.social?.instagram && (
                      <a
                        href={activeMember.social.instagram}
                        target="_blank" rel="noopener noreferrer"
                        className="w-11 h-11 rounded-sm bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-white/40 hover:text-nzila-gold hover:border-nzila-gold/30 transition-all duration-300"
                        aria-label="Instagram"
                      >
                        <Instagram size={18} />
                      </a>
                    )}
                    {activeMember.social?.facebook && (
                      <a
                        href={activeMember.social.facebook}
                        target="_blank" rel="noopener noreferrer"
                        className="w-11 h-11 rounded-sm bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-white/40 hover:text-nzila-gold hover:border-nzila-gold/30 transition-all duration-300"
                        aria-label="Facebook"
                      >
                        <Facebook size={18} />
                      </a>
                    )}
                    {activeMember.social?.whatsapp && (
                      <a
                        href={activeMember.social.whatsapp}
                        target="_blank" rel="noopener noreferrer"
                        className="w-11 h-11 rounded-sm bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-white/40 hover:text-nzila-gold hover:border-nzila-gold/30 transition-all duration-300"
                        aria-label="WhatsApp"
                      >
                        <MessageCircle size={18} />
                      </a>
                    )}
                    {activeMember.social?.email && (
                      <a
                        href={activeMember.social.email}
                        className="w-11 h-11 rounded-sm bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-white/40 hover:text-nzila-gold hover:border-nzila-gold/30 transition-all duration-300"
                        aria-label="Email"
                      >
                        <Mail size={18} />
                      </a>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Progress dots & Arrows */}
              <div className="flex items-center gap-4 mt-10 justify-center md:justify-start">
                <button
                  onClick={prevMember}
                  className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-white/60 hover:text-nzila-gold hover:bg-white/10 transition-all"
                  aria-label="Membro anterior"
                >
                  <ChevronLeft size={20} />
                </button>

                <div className="flex items-center gap-3">
                  {teamMembers.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => updateActiveIndex(i)}
                      className="group relative py-2"
                      aria-label={`Ver membro ${i + 1}`}
                    >
                      <div
                        className={`h-1.5 rounded-full transition-all duration-700 ease-out ${i === activeIndex
                          ? 'w-12 bg-nzila-gold'
                          : 'w-4 bg-white/10 group-hover:bg-white/25'
                          }`}
                      />
                    </button>
                  ))}
                </div>

                <button
                  onClick={nextMember}
                  className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-white/60 hover:text-nzila-gold hover:bg-white/10 transition-all"
                  aria-label="Próximo membro"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
