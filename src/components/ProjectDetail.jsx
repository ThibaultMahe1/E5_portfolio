import { motion, useScroll, useTransform } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import {
  ArrowLeft, Github, Calendar, User, Wrench, Target,
  BookOpen, ImageIcon, CheckCircle2, Layers, ExternalLink,
  ChevronLeft, ChevronRight, X, ZoomIn, FileText, Download,
} from 'lucide-react';
import projects from '../data/projects';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Projet introuvable</h1>
          <Link to="/" className="text-primary hover:underline">Retour à l'accueil</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white relative">
      {/* ── Decorative background orbs ── */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/[0.06] blur-[160px]" />
        <div className="absolute top-1/3 -right-60 w-[500px] h-[500px] rounded-full bg-accent/[0.05] blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-pink/[0.04] blur-[120px]" />
      </div>

      {/* ══════════ HERO ══════════ */}
      <header ref={heroRef} className="relative min-h-[40vh] sm:min-h-[55vh] flex items-end overflow-hidden">
        {/* Parallax image / gradient bg */}
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          {project.image ? (
            <>
              <img
                src={project.image}
                alt=""
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-dark/30" />
            </>
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${project.color}`}>
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent" />
            </div>
          )}
        </motion.div>

        {/* Hero content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 pb-8 sm:pb-12 pt-20 sm:pt-28"
        >
          <Link
            to="/#projets"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Projets
          </Link>

          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.h1
              variants={fadeUp}
              className="text-2xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-3 sm:mb-4 leading-tight"
            >
              {project.title}
            </motion.h1>

            <motion.p variants={fadeUp} className="text-sm sm:text-lg md:text-xl text-white/70 max-w-2xl mb-5 sm:mb-8">
              {project.description}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-2.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1 text-xs font-mono tracking-wide bg-white/[0.06] backdrop-blur-md rounded-md border border-white/[0.08] text-white/80"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark to-transparent z-[5]" />
      </header>

      {/* ══════════ BODY ══════════ */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 pb-20">
        {/* ── Quick info cards (floating overlap) ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 -mt-6 sm:-mt-10 mb-10 sm:mb-16"
        >
          {[
            project.role && { icon: User, label: 'Rôle', value: project.role, accent: 'primary' },
            project.duree && { icon: Calendar, label: 'Durée', value: project.duree, accent: 'accent' },
            project.category && { icon: Layers, label: 'Catégorie', value: project.category, accent: 'pink' },
            project.github && { icon: Github, label: 'Code source', value: 'GitHub', accent: 'white', href: project.github },
          ]
            .filter(Boolean)
            .map((card, i) => {
              const colors = {
                primary: 'text-primary bg-primary/10 border-primary/20',
                accent: 'text-accent bg-accent/10 border-accent/20',
                pink: 'text-pink bg-pink/10 border-pink/20',
                white: 'text-white bg-white/10 border-white/20',
              };
              const Wrapper = card.href ? 'a' : 'div';
              const linkProps = card.href ? { href: card.href, target: '_blank', rel: 'noopener noreferrer' } : {};
              return (
                <motion.div key={i} variants={fadeUp}>
                  <Wrapper
                    {...linkProps}
                    className={`group block rounded-xl sm:rounded-2xl p-3 sm:p-5 backdrop-blur-xl bg-dark-light/60 border border-white/[0.06] hover:border-white/15 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 ${card.href ? 'cursor-pointer' : ''}`}
                  >
                    <div className={`w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 border ${colors[card.accent]}`}>
                      <card.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <p className="text-[9px] sm:text-[11px] uppercase tracking-widest text-gray-500 mb-0.5 sm:mb-1">{card.label}</p>
                    <p className="font-semibold text-xs sm:text-sm capitalize flex items-center gap-1.5">
                      {card.value}
                      {card.href && <ExternalLink className="w-3 h-3 text-gray-500 group-hover:text-primary transition-colors" />}
                    </p>
                  </Wrapper>
                </motion.div>
              );
            })}
        </motion.div>

        {/* ── Two-column layout for bigger screens ── */}
        <div className="grid lg:grid-cols-[1fr_340px] gap-10 items-start">
          {/* Main column */}
          <div className="space-y-10 min-w-0">
            {/* Contexte */}
            {project.contexte && (
              <Section icon={BookOpen} title="Contexte du projet" accent="primary">
                <p className="text-gray-300/90 leading-[1.8] whitespace-pre-line">
                  {project.contexte}
                </p>
              </Section>
            )}

            {/* Objectifs */}
            {project.objectifs && (
              <Section icon={Target} title="Objectifs" accent="accent">
                <div className="space-y-2.5">
                  {project.objectifs.map((obj, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] transition-colors"
                    >
                      <div className="mt-0.5 w-6 h-6 rounded-lg bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <span className="text-gray-300 text-[15px]">{obj}</span>
                    </motion.div>
                  ))}
                </div>
              </Section>
            )}

            {/* Technologies */}
            {project.technologies && (
              <Section icon={Wrench} title="Technologies utilisées" accent="pink">
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.technologies.map((tech, i) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                      className="group relative rounded-2xl p-5 bg-white/[0.03] border border-white/[0.06] hover:border-primary/20 transition-all duration-300 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative">
                        <h4 className="font-bold text-white mb-1.5 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {tech.name}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{tech.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Section>
            )}

            {/* Compétences */}
            {project.competences && (
              <Section icon={BookOpen} title="Compétences mobilisées" subtitle="Référentiel BTS SIO SLAM" accent="secondary">
                <div className="space-y-2">
                  {project.competences.map((comp, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/[0.03] transition-colors group"
                    >
                      <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-xs font-mono font-bold text-primary flex-shrink-0 border border-primary/10">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-gray-300/90 text-sm group-hover:text-white transition-colors">{comp}</span>
                    </motion.div>
                  ))}
                </div>
              </Section>
            )}

            {/* Captures d'écran */}
            {project.captures && project.captures.length > 0 && (
              <Section icon={ImageIcon} title="Captures d'écran" accent="accent">
                <ImageGallery images={project.captures} title={project.title} />
              </Section>
            )}

            {/* Documentation technique */}
            {project.documentation && project.documentation.length > 0 && (
              <Section icon={FileText} title="Documentation technique" accent="secondary">
                <div className="space-y-3">
                  {project.documentation.map((doc, i) => (
                    <motion.a
                      key={i}
                      href={doc.file}
                      download
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                      className="group flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-secondary/30 hover:bg-secondary/5 transition-all duration-300"
                    >
                      <div className="w-11 h-11 rounded-xl bg-secondary/15 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/25 transition-colors">
                        <FileText className="w-5 h-5 text-secondary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm text-white group-hover:text-secondary transition-colors truncate">
                          {doc.title}
                        </p>
                        {doc.description && (
                          <p className="text-gray-400 text-xs mt-0.5 truncate">{doc.description}</p>
                        )}
                      </div>
                      <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-white/[0.05] flex items-center justify-center group-hover:bg-secondary/15 transition-colors">
                        <Download className="w-4 h-4 text-gray-400 group-hover:text-secondary transition-colors" />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </Section>
            )}
          </div>

          {/* ── Sidebar (sticky) ── */}
          <aside className="hidden lg:block">
            <div className="sticky top-8 space-y-6">
              {/* Environnement */}
              {project.environnement && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-2xl p-6 bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm"
                >
                  <div className="flex items-center gap-2.5 mb-5">
                    <div className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center">
                      <Wrench className="w-4 h-4 text-accent" />
                    </div>
                    <h3 className="font-bold text-sm">Environnement</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.environnement.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1.5 text-xs font-mono bg-dark rounded-lg border border-white/[0.08] text-gray-300 hover:border-accent/30 hover:text-accent transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Bilan */}
              {project.bilan && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-2xl overflow-hidden"
                >
                  <div className="p-6 bg-gradient-to-br from-primary/10 via-pink/5 to-accent/10 border border-white/[0.06] rounded-2xl">
                    <div className="flex items-center gap-2.5 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      </div>
                      <h3 className="font-bold text-sm">Bilan</h3>
                    </div>
                    <p className="text-gray-300/90 text-sm leading-[1.75]">
                      {project.bilan}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* GitHub CTA */}
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl bg-white/[0.06] border border-white/[0.1] hover:border-primary/30 hover:bg-primary/10 transition-all duration-300 text-sm font-semibold"
                >
                  <Github className="w-4 h-4" />
                  Voir sur GitHub
                  <ExternalLink className="w-3.5 h-3.5 text-gray-500" />
                </motion.a>
              )}
            </div>
          </aside>
        </div>

        {/* ── Mobile-only: bilan + environnement ── */}
        <div className="lg:hidden space-y-10 mt-10">
          {project.environnement && (
            <Section icon={Wrench} title="Environnement de travail" accent="accent">
              <div className="flex flex-wrap gap-2.5">
                {project.environnement.map((tool) => (
                  <span
                    key={tool}
                    className="px-3.5 py-1.5 text-xs font-mono bg-dark-light rounded-lg border border-white/[0.08] text-gray-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </Section>
          )}
          {project.bilan && (
            <Section icon={CheckCircle2} title="Bilan" accent="emerald">
              <p className="text-gray-300/90 leading-[1.8] whitespace-pre-line">
                {project.bilan}
              </p>
            </Section>
          )}
        </div>

        {/* ── Back button ── */}
        <div className="mt-16 flex justify-center">
          <Link
            to="/#projets"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary to-pink text-white font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Retour aux projets
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ── Section wrapper ── */
const accentMap = {
  primary: { bg: 'bg-primary/15', text: 'text-primary', line: 'from-primary/40' },
  accent: { bg: 'bg-accent/15', text: 'text-accent', line: 'from-accent/40' },
  pink: { bg: 'bg-pink/15', text: 'text-pink', line: 'from-pink/40' },
  secondary: { bg: 'bg-secondary/15', text: 'text-secondary', line: 'from-secondary/40' },
  emerald: { bg: 'bg-emerald-500/15', text: 'text-emerald-400', line: 'from-emerald-400/40' },
};

function Section({ icon: Icon, title, subtitle, accent = 'primary', children }) {
  const colors = accentMap[accent] || accentMap.primary;
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="flex items-center gap-3 mb-1.5">
        <div className={`w-9 h-9 rounded-xl ${colors.bg} flex items-center justify-center`}>
          <Icon className={`w-[18px] h-[18px] ${colors.text}`} />
        </div>
        <h2 className="text-xl font-bold tracking-tight">{title}</h2>
      </div>
      {subtitle && (
        <p className="text-xs text-gray-500 uppercase tracking-widest ml-12 mb-4">{subtitle}</p>
      )}
      {!subtitle && <div className="mb-5" />}
      <div className="ml-[2px] pl-[17px] border-l border-white/[0.06]">
        {children}
      </div>
    </motion.section>
  );
}

/* ── Image Gallery ── */
function ImageGallery({ images, title }) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const prev = () => setActive((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setActive((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <>
      {/* Main image */}
      <div className="relative group rounded-2xl overflow-hidden border border-white/[0.06] bg-dark-light">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="relative cursor-pointer"
          onClick={() => setLightbox(true)}
        >
          <img
            src={images[active]}
            alt={`Capture ${active + 1} \u2013 ${title}`}
            loading="lazy"
            decoding="async"
            className="w-full h-auto max-h-[480px] object-contain bg-dark-light"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-dark/30">
            <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm">
              <ZoomIn className="w-5 h-5" />
            </div>
          </div>
        </motion.div>

        {/* Navigation arrows - always visible on mobile */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-dark/60 backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-all hover:bg-dark/80 hover:scale-110 active:scale-95"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-dark/60 backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-all hover:bg-dark/80 hover:scale-110 active:scale-95"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </>
        )}

        {/* Counter badge */}
        <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-dark/70 backdrop-blur-sm text-xs font-mono border border-white/10">
          {active + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2.5 mt-3 overflow-x-auto pb-1 scrollbar-hide">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative flex-shrink-0 w-20 h-14 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                i === active
                  ? 'border-accent shadow-lg shadow-accent/20 scale-105'
                  : 'border-white/[0.06] opacity-50 hover:opacity-80 hover:border-white/20'
              }`}
            >
              <img src={src} alt="" loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-dark/95 backdrop-blur-md"
          onClick={() => setLightbox(false)}
        >
          <button
            onClick={() => setLightbox(false)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <motion.img
            key={active}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            src={images[active]}
            alt={`Capture ${active + 1}`}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-dark/80 backdrop-blur-sm text-sm font-mono border border-white/10">
            {active + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </>
  );
}
