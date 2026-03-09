import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code, Database, Globe, Server, 
  Smartphone, GitBranch, Terminal, Palette 
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Globe,
    color: 'from-blue-500 to-cyan-500',
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
    color: 'from-green-500 to-emerald-500',
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
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'MySQL', level: 85 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'MongoDB', level: 60 },
      { name: 'SQL Server', level: 65 },
    ],
  },
  {
    title: 'Outils & Autres',
    icon: GitBranch,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Git/GitHub', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Linux', level: 70 },
      { name: 'Docker', level: 55 },
    ],
  },
];

function SkillBar({ name, level, delay, isInView, color }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm text-gray-200">{name}</span>
        <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">{level}%</span>
      </div>
      <div className="h-2.5 bg-dark/50 rounded-full overflow-hidden border border-white/10">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className={`h-full bg-gradient-to-r ${color} rounded-full shadow-lg`}
          style={{ boxShadow: '0 0 10px currentColor' }}
        />
      </div>
    </div>
  );
}

function SkillCard({ category, index, isInView }) {
  const Icon = category.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative rounded-2xl p-6 card-hover overflow-hidden group"
    >
      {/* Colorful gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
      <div className="absolute inset-0 glass" />
      
      {/* Content */}
      <div className="relative z-10">
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 shadow-lg`}
          style={{ boxShadow: `0 10px 40px -10px var(--tw-gradient-from)` }}
        >
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h3 className={`text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${category.color}`}>{category.title}</h3>
        <div>
          {category.skills.map((skill, skillIndex) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              delay={0.2 + index * 0.1 + skillIndex * 0.05}
              isInView={isInView}
              color={category.color}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="competences" className="py-20 md:py-32 relative overflow-hidden">
      {/* Static colorful background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-pink-500/15 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Mes <span className="gradient-text">compétences</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Les technologies et outils que je maîtrise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
