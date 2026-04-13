import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Award, Route } from 'lucide-react';

const timelineItems = [
  {
    id: 1,
    type: 'education',
    title: 'BTS SIO option SLAM',
    organization: 'Institut d\'Informatique Appliquée',
    location: 'Saint-Nazaire, France',
    date: '2024 - 2026',
    description: 'Formation en développement d\'applications avec spécialisation en solutions logicielles et applications métiers.',
    icon: GraduationCap,
  },
  {
    id: 2,
    type: 'experience',
    title: 'Stage Développeur Web/Logiciel',
    organization: 'centre equestre de pontchateau',
    location: 'Pontchâteau, France',
    date: '2026',
    description: 'Développement d\'un site web de vitrine et d\'une application web de gestion interne. Technologies utilisées : Laravel, JavaScript, MySQL, C#.',
    icon: Briefcase,
  },
  {
    id: 3,
    type: 'experience',
    title: 'Stage Développeur Logiciel',
    organization: 'METALU',
    location: 'Saint-Brevin les Pins, France',
    date: '2025',
    description: 'Développement de module pour l\'ERP de l\'entreprise. Technologies utilisées : windev, hfSQL.',
    icon: Briefcase,
  },
  {
    id: 4,
    type: 'education',
    title: 'Baccalauréat',
    organization: 'Lycée Saint François d\'Assise',
    location: 'Savenay, France',
    date: '2021 - 2024',
    description: 'Baccalauréat STI2D option SIN.',
    icon: GraduationCap,
  },
];

const typeColors = {
  education: { bg: 'from-blue-400 to-cyan-400', accent: '#38bdf8' },
  experience: { bg: 'from-emerald-400 to-green-400', accent: '#34d399' },
  certification: { bg: 'from-violet-400 to-purple-400', accent: '#a78bfa' },
};

function TimelineItem({ item, index, isInView, isLeft }) {
  const Icon = item.icon;
  const colors = typeColors[item.type] || typeColors.certification;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, x: isLeft ? 30 : -30 }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className={`flex items-center gap-4 md:gap-8 ${
        isLeft ? 'md:flex-row-reverse md:text-right' : ''
      }`}
    >
      {/* Content */}
      <div className={`flex-1 ${isLeft ? 'md:pl-0 md:pr-8' : 'md:pl-8'}`}>
        <div className="flex items-start gap-3 md:block">
          {/* Mobile timeline indicator */}
          <div className="flex flex-col items-center md:hidden pt-2 flex-shrink-0">
            <motion.div
              animate={isInView ? { scale: [0, 1.3, 1] } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
              className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${colors.bg}`}
              style={{ boxShadow: `0 0 10px ${colors.accent}60` }}
            />
            <div className="w-px flex-1 bg-gradient-to-b from-white/10 to-transparent min-h-[calc(100%-12px)]" />
          </div>
          
          <motion.div 
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group rounded-2xl p-5 sm:p-6 border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 flex-1 hover:shadow-lg hover:shadow-primary/[0.05]"
          >
            <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
              <motion.div 
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br ${colors.bg} flex items-center justify-center flex-shrink-0 transition-transform duration-300`}
                style={{ boxShadow: `0 6px 20px -6px ${colors.accent}50` }}
                whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1, transition: { duration: 0.4 } }}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </motion.div>
              <span className={`text-xs sm:text-sm font-mono font-semibold text-transparent bg-clip-text bg-gradient-to-r ${colors.bg}`}>{item.date}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-1 text-white">{item.title}</h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-2">
              {item.organization} • {item.location}
            </p>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{item.description}</p>
          </motion.div>
        </div>
      </div>

      {/* Desktop timeline dot */}
      <div className="hidden md:flex flex-col items-center">
        <motion.div 
          className={`w-4 h-4 rounded-full bg-gradient-to-r ${colors.bg} ring-4 ring-dark`}
          style={{ boxShadow: `0 0 15px ${colors.accent}40` }}
          initial={{ scale: 0 }}
          animate={isInView ? { scale: [0, 1.5, 1] } : {}}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
          whileHover={{ scale: 1.6 }}
        />
      </div>

      <div className="hidden md:block flex-1" />
    </motion.div>
  );
}

export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="parcours" className="py-20 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-blue-500/[0.04] rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-primary/[0.04] rounded-full blur-[120px]" />
      
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="section-label">
            <Route className="w-3.5 h-3.5" />
            Parcours
          </span>
          <h2 className="section-title">
            Mon <span className="gradient-text">parcours</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Formation, expériences et certifications
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated vertical line (desktop only) */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-pink/30 to-accent/30 origin-top"
          />

          <div className="space-y-4 sm:space-y-6">
            {timelineItems.map((item, index) => (
              <TimelineItem
                key={item.id}
                item={item}
                index={index}
                isInView={isInView}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
