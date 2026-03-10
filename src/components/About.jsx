import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Calendar, GraduationCap, Heart } from 'lucide-react';

const infos = [
  { icon: MapPin, label: 'Localisation', value: 'Ville, France', color: 'from-blue-500 to-cyan-500' },
  { icon: Calendar, label: 'Âge', value: '20 ans', color: 'from-purple-500 to-pink-500' },
  { icon: GraduationCap, label: 'Formation', value: 'BTS SIO SLAM', color: 'from-orange-500 to-yellow-500' },
  { icon: Heart, label: 'Passions', value: 'Dev, Tech, Gaming', color: 'from-pink-500 to-rose-500' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="apropos" className="py-20 md:py-32 relative overflow-hidden">
      {/* Static colorful background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-pink-500/15 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            À <span className="gradient-text">propos</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Découvrez qui je suis et ce qui me passionne
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image / Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              {/* Static gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 rounded-2xl blur-lg opacity-60" />
              <div className="relative w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border-2 border-white/20">
                {/* Placeholder pour la photo */}
                <div className="w-full h-full flex items-center justify-center text-7xl bg-gradient-to-br from-purple-900/50 to-pink-900/50">
                  
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Bonjour, je suis <span className="text-primary">thibault</span> !
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Actuellement en BTS SIO option SLAM, je suis passionné par le développement 
              d'applications et la création de solutions numériques innovantes. J'aime 
              relever des défis techniques et apprendre de nouvelles technologies.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Mon objectif est de devenir un développeur fullstack capable de concevoir 
              des applications web et mobiles performantes, tout en restant à l'écoute 
              des dernières tendances du secteur.
            </p>

            {/* Info cards */}
            <div className="grid grid-cols-2 gap-4">
              {infos.map(({ icon: Icon, label, value, color }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="relative rounded-xl p-4 overflow-hidden group hover:scale-105 transition-transform"
                >
                  {/* Colored background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                  <div className="absolute inset-0 backdrop-blur-sm bg-dark/30 border border-white/10 rounded-xl" />
                  
                  <div className="relative z-10">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center mb-2`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">{label}</p>
                    <p className={`font-semibold text-transparent bg-clip-text bg-gradient-to-r ${color}`}>{value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
