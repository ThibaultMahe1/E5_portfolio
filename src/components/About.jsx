import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Calendar, GraduationCap, Heart, User } from 'lucide-react';

const infos = [
  { icon: MapPin, label: 'Localisation', value: 'Saint-Nazaire, France', color: 'from-blue-400 to-cyan-400' },
  { icon: Calendar, label: 'Âge', value: '20 ans', color: 'from-violet-400 to-purple-400' },
  { icon: GraduationCap, label: 'Formation', value: 'BTS SIO SLAM', color: 'from-amber-400 to-orange-400' },
  { icon: Heart, label: 'Passions', value: 'Dev, Tech, Gaming', color: 'from-pink-400 to-rose-400' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="apropos" className="py-20 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background orbs - CSS only */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/[0.06] rounded-full blur-[120px] orb-float-1" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-pink/[0.06] rounded-full blur-[100px] orb-float-2" />
      
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="section-label">
            <User className="w-3.5 h-3.5" />
            À propos
          </span>
          <h2 className="section-title">
            Qui <span className="gradient-text">suis-je</span> ?
          </h2>
          <p className="section-subtitle mx-auto">
            Découvrez mon parcours et ce qui me passionne
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          {/* Image / Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 mx-auto">
              {/* Gradient ring - static, no spin for performance */}
              <div className="absolute -inset-1.5 rounded-2xl">
                <div className="w-full h-full rounded-2xl animated-gradient opacity-30 blur-md" />
              </div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-dark-light">
                <div className="w-full h-full flex items-center justify-center text-7xl sm:text-8xl bg-gradient-to-br from-primary/10 via-transparent to-pink/10">
                  <img src={`${import.meta.env.BASE_URL}profil.jpg`} alt="Photo de Thibault Mahé, développeur web BTS SIO SLAM" loading="lazy" decoding="async" />
                </div>
              </div>
              {/* Floating decorative elements - CSS only */}
              <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-pink opacity-80 shadow-lg shadow-primary/30 orb-float-1" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-gradient-to-br from-accent to-blue-400 opacity-80 shadow-lg shadow-accent/30 orb-float-2" />
              <div className="absolute top-1/2 -right-4 w-3 h-3 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 opacity-60 orb-float-3" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-5 tracking-tight">
              Bonjour, je suis <span className="gradient-text-animated">Thibault Mahé</span> !
            </h3>
            <p className="text-gray-400 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
              Actuellement en BTS SIO option SLAM, je suis passionné par le développement 
              d'applications et la création de solutions numériques innovantes. J'aime 
              relever des défis techniques et apprendre de nouvelles technologies.
            </p>
            <p className="text-gray-400 mb-7 sm:mb-8 leading-relaxed text-sm sm:text-base">
              Mon objectif est de devenir un développeur fullstack capable de concevoir 
              des applications web et mobiles performantes, tout en restant à l'écoute 
              des dernières tendances du secteur.
            </p>

            {/* Info cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {infos.map(({ icon: Icon, label, value, color }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group rounded-xl p-3.5 sm:p-4 border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300 card-lift"
                >
                  <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center mb-2.5 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mb-0.5">{label}</p>
                  <p className={`text-sm sm:text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r ${color}`}>{value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
