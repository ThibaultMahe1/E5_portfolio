import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Download, ArrowRight, Sparkles } from 'lucide-react';
import TypeWriter from './TypeWriter';
import { MagneticButton } from './AnimatedElements';

const roles = [
  'Développeur Web',
  'Étudiant BTS SIO',
  'Passionné de Code',
  'Futur Développeur Fullstack',
];

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: { 
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section id="accueil" className="min-h-[100dvh] flex items-center justify-center relative overflow-hidden pt-16 sm:pt-0">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.08] via-dark to-dark" />
        {/* Static morphing orbs with CSS animations */}
        <div className="absolute top-20 right-[15%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/20 rounded-full blur-[100px] sm:blur-[150px] orb-float-1" />
        <div className="absolute bottom-20 left-[10%] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-pink/15 rounded-full blur-[100px] sm:blur-[130px] orb-float-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-accent/10 rounded-full blur-[80px] sm:blur-[120px] orb-float-3" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Floating code decorations - desktop only */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="hidden lg:block absolute top-[18%] left-[8%] px-4 py-2.5 rounded-lg border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm text-[11px] font-mono text-gray-500"
        >
          <span className="text-primary-light">const</span> passion = <span className="text-emerald-400">'code'</span>;
        </motion.div>
        <motion.div
          animate={{ y: [0, 12, 0], rotate: [0, -2, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="hidden lg:block absolute bottom-[22%] right-[8%] px-4 py-2.5 rounded-lg border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm text-[11px] font-mono text-gray-500"
        >
          <span className="text-pink">function</span> <span className="text-accent">create</span>() {'{ ... }'}
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="hidden lg:block absolute top-[30%] right-[12%] px-3 py-2 rounded-lg border border-emerald-500/20 bg-emerald-500/[0.05] text-[11px] font-mono text-emerald-400"
        >
          ✓ Build successful
        </motion.div>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-5 sm:px-6 max-w-4xl mx-auto"
      >
        {/* Availability badge */}
        <motion.div variants={fadeUpItem}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-mono border border-emerald-500/30 bg-emerald-500/[0.08] mb-6 sm:mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
            <span className="text-emerald-300">Disponible pour un stage / alternance</span>
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeUpItem}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 sm:mb-6 tracking-tight"
        >
          <span className="text-white">Thibault</span>{' '}
          <span className="gradient-text-animated">MAHÉ</span>
        </motion.h1>

        {/* TypeWriter */}
        <motion.div
          variants={fadeUpItem}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-400 mb-4 sm:mb-5 h-9 sm:h-10 md:h-14 flex items-center justify-center"
        >
          <TypeWriter words={roles} typingSpeed={80} deletingSpeed={40} pauseTime={2000} />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={fadeUpItem}
          className="text-sm sm:text-base md:text-lg text-gray-500 mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed"
        >
          Passionné par le développement web et logiciel, Thibault Mahé crée des solutions
          numériques modernes et performantes.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUpItem}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-14"
        >
          <MagneticButton>
            <a
              href="#projets"
              className="group px-7 sm:px-8 py-3.5 bg-gradient-to-r from-primary to-pink rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              Voir mes projets
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href={`${import.meta.env.BASE_URL}CV%20Mahe%20Thibault.pdf`}
              download
              className="px-7 sm:px-8 py-3.5 rounded-xl font-semibold inline-flex items-center justify-center gap-2 text-sm sm:text-base border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              Télécharger CV
            </a>
          </MagneticButton>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={fadeUpItem}
          className="flex justify-center gap-3"
        >
          {[
            { icon: Github, href: 'https://github.com/ThibaultMahe1', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/thibault-mahe-176b16354/', label: 'LinkedIn' },
            { icon: Mail, href: '#contact', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <MagneticButton key={label}>
              <a
                href={href}
                className="p-3 rounded-xl border border-white/[0.06] bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/15 transition-all duration-300 inline-block group"
                aria-label={label}
              >
                <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </MagneticButton>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#apropos"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ 
          opacity: { delay: 1.5, duration: 0.5 },
          y: { delay: 1.5, duration: 2, repeat: Infinity, ease: 'easeInOut' }
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-gray-300 transition-colors"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.a>
    </section>
  );
}
