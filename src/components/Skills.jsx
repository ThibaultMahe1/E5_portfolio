import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code, Database, Globe, Server, 
  Smartphone, GitBranch, Terminal, Palette, Zap 
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Globe,
    color: 'from-blue-400 to-cyan-400',
    accent: '#38bdf8',
    skills: [
      { name: 'HTML/CSS', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'React', level: 75 },
      { name: 'Tailwind CSS', level: 80 },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'from-emerald-400 to-green-400',
    accent: '#34d399',
    skills: [
      { name: 'PHP', level: 80 },
      { name: 'Node.js', level: 70 },
      { name: 'Python', level: 75 },
      { name: 'Java', level: 65 },
    ],
  },
  {
    title: 'Base de données',
    icon: Database,
    color: 'from-violet-400 to-purple-400',
    accent: '#a78bfa',
    skills: [
      { name: 'MySQL', level: 85 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'MariaDB', level: 60 },
      { name: 'SQL Server', level: 65 },
    ],
  },
  {
    title: 'Outils & Autres',
    icon: GitBranch,
    color: 'from-orange-400 to-amber-400',
    accent: '#fb923c',
    skills: [
      { name: 'Git/GitHub', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Linux', level: 70 },
      { name: 'Docker', level: 55 },
    ],
  },
];

function SkillBar({ name, level, delay, isInView, color, accent }) {
  return (
    <div className="mb-3.5">
      <div className="flex justify-between mb-1.5">
        <span className="text-xs sm:text-sm text-gray-300">{name}</span>
        <span className="text-xs font-mono text-gray-500">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
          className={`h-full bg-gradient-to-r ${color} rounded-full`}
          style={{ boxShadow: `0 0 12px ${accent}40` }}
        />
      </div>
    </div>
  );
}

function SkillCard({ category, index, isInView }) {
  const Icon = category.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="group rounded-2xl p-5 sm:p-6 border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/12 transition-all duration-500 hover:shadow-xl hover:shadow-primary/[0.05]"
    >
      <motion.div 
        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 transition-transform duration-300`}
        style={{ boxShadow: `0 8px 30px -8px ${category.accent}50` }}
        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15, transition: { duration: 0.5 } }}
      >
        <Icon className="w-6 h-6 text-white" />
      </motion.div>
      <h3 className={`text-lg font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${category.color}`}>{category.title}</h3>
      <div>
        {category.skills.map((skill, skillIndex) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            delay={0.3 + index * 0.1 + skillIndex * 0.06}
            isInView={isInView}
            color={category.color}
            accent={category.accent}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="competences" className="py-20 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/4 left-0 w-[350px] h-[350px] bg-accent/[0.05] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-pink/[0.05] rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="section-label">
            <Zap className="w-3.5 h-3.5" />
            Compétences
          </span>
          <h2 className="section-title">
            Mon <span className="gradient-text">expertise</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Les technologies et outils que je maîtrise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.title}
              category={category}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
