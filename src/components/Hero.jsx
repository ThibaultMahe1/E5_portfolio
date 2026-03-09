import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import TypeWriter from './TypeWriter';
import { MagneticButton } from './AnimatedElements';

const roles = [
  'Développeur Web',
  'Étudiant BTS SIO',
  'Passionné de Code',
  'Futur Développeur Fullstack',
];

export default function Hero() {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Colorful background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-pink-900/30 to-blue-900/40" />
      
      {/* Static colorful background shapes - optimized */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary/30 to-pink-500/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-secondary/30 to-cyan-500/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Code tag animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/40 rounded-full text-sm font-mono mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
            <span className="text-green-300">Disponible pour un stage / alternance</span>
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          Prénom <span className="gradient-text">NOM</span>
        </motion.h1>

        {/* TypeWriter effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 mb-4 h-10 md:h-14 flex items-center justify-center"
        >
          <TypeWriter words={roles} typingSpeed={80} deletingSpeed={40} pauseTime={2000} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-500 mb-8 max-w-2xl mx-auto"
        >
          Passionné par le développement web et logiciel, je crée des solutions
          numériques modernes et performantes.
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-4 mb-12"
        >
          {[
            { icon: Github, href: '#', label: 'GitHub' },
            { icon: Linkedin, href: '#', label: 'LinkedIn' },
            { icon: Mail, href: '#contact', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <MagneticButton key={label}>
              <a
                href={href}
                className="p-3 glass rounded-xl hover:bg-white/10 transition-colors inline-block"
                aria-label={label}
              >
                <Icon className="w-6 h-6" />
              </a>
            </MagneticButton>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <MagneticButton>
            <a
              href="#projets"
              className="px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/30 transition-shadow inline-block"
            >
              Voir mes projets
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="#contact"
              className="px-8 py-3 glass rounded-xl font-semibold hover:bg-white/10 transition-colors inline-flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Télécharger CV
            </a>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#apropos"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1, duration: 0.5 },
          y: { delay: 1, duration: 1.5, repeat: Infinity }
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-white transition-colors"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.a>
    </section>
  );
}
