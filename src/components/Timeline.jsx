import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const timelineItems = [
  {
    id: 1,
    type: 'education',
    title: 'BTS SIO option SLAM',
    organization: 'Nom du Lycée',
    location: 'Ville, France',
    date: '2024 - 2026',
    description: 'Formation en développement d\'applications avec spécialisation en solutions logicielles et applications métiers.',
    icon: GraduationCap,
  },
  {
    id: 2,
    type: 'experience',
    title: 'Stage Développeur Web',
    organization: 'Nom de l\'entreprise',
    location: 'Ville, France',
    date: 'Mai - Juin 2025',
    description: 'Développement d\'une application web de gestion interne. Technologies utilisées : React, Node.js, MySQL.',
    icon: Briefcase,
  },
  {
    id: 3,
    type: 'education',
    title: 'Baccalauréat',
    organization: 'Nom du Lycée',
    location: 'Ville, France',
    date: '2021 - 2024',
    description: 'Baccalauréat général avec spécialités NSI et Mathématiques.',
    icon: GraduationCap,
  },
  {
    id: 4,
    type: 'certification',
    title: 'Certification',
    organization: 'Organisme',
    location: 'En ligne',
    date: '2024',
    description: 'Certification en développement web ou autre compétence acquise.',
    icon: Award,
  },
];

function TimelineItem({ item, index, isInView, isLeft }) {
  const Icon = item.icon;
  
  const typeColors = {
    education: { bg: 'from-blue-500 to-cyan-500', light: 'from-blue-500/20 to-cyan-500/20' },
    experience: { bg: 'from-green-500 to-emerald-500', light: 'from-green-500/20 to-emerald-500/20' },
    certification: { bg: 'from-purple-500 to-pink-500', light: 'from-purple-500/20 to-pink-500/20' },
  };
  
  const colors = typeColors[item.type] || typeColors.certification;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`flex items-center gap-4 md:gap-8 ${
        isLeft ? 'md:flex-row-reverse md:text-right' : ''
      }`}
    >
      {/* Content */}
      <div className={`flex-1 ${isLeft ? 'md:pl-0 md:pr-8' : 'md:pl-8'}`}>
        <div className="relative rounded-2xl p-6 card-hover overflow-hidden group">
          {/* Colorful background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${colors.light} opacity-50 group-hover:opacity-70 transition-opacity`} />
          <div className="absolute inset-0 backdrop-blur-sm bg-dark/40 border border-white/10 rounded-2xl" />
          
          <div className="relative z-10">
            <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colors.bg} flex items-center justify-center shadow-lg`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <span className={`text-sm font-mono font-semibold text-transparent bg-clip-text bg-gradient-to-r ${colors.bg}`}>{item.date}</span>
            </div>
            <h3 className="text-xl font-bold mb-1 text-white">{item.title}</h3>
            <p className="text-gray-300 text-sm mb-2">
              {item.organization} • {item.location}
            </p>
            <p className="text-gray-400 text-sm">{item.description}</p>
          </div>
        </div>
      </div>

      {/* Timeline dot - visible only on md+ */}
      <div className="hidden md:flex flex-col items-center">
        <motion.div 
          className={`w-5 h-5 rounded-full bg-gradient-to-r ${colors.bg} shadow-lg`}
          style={{ boxShadow: '0 0 20px currentColor' }}
          whileHover={{ scale: 1.3 }}
        />
      </div>

      {/* Empty space for alternating layout */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  );
}

export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="parcours" className="py-20 md:py-32 relative overflow-hidden">
      {/* Static colorful background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/15 via-blue-900/15 to-purple-900/15" />
      <div className="absolute top-1/4 left-10 w-48 h-48 bg-blue-500/15 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-purple-500/15 rounded-full blur-3xl" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Mon <span className="gradient-text">parcours</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Formation, expériences et certifications
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

          {/* Items */}
          <div className="space-y-8">
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
