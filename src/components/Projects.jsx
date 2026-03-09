import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Folder, Eye } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Application de Gestion',
    description: 'Application web de gestion complète avec authentification, CRUD et tableau de bord interactif.',
    image: null,
    tags: ['PHP', 'MySQL', 'Bootstrap'],
    github: '#',
    demo: '#',
    category: 'web',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Site E-commerce',
    description: 'Plateforme e-commerce avec panier, paiement en ligne et gestion des commandes.',
    image: null,
    tags: ['React', 'Node.js', 'MongoDB'],
    github: '#',
    demo: '#',
    category: 'web',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    title: 'Application Mobile',
    description: 'Application mobile de suivi de tâches avec notifications et synchronisation cloud.',
    image: null,
    tags: ['React Native', 'Firebase'],
    github: '#',
    demo: null,
    category: 'mobile',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 4,
    title: 'API REST',
    description: 'API RESTful documentée pour la gestion de ressources avec authentification JWT.',
    image: null,
    tags: ['Node.js', 'Express', 'PostgreSQL'],
    github: '#',
    demo: '#',
    category: 'backend',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    id: 5,
    title: 'Dashboard Analytics',
    description: 'Tableau de bord interactif avec graphiques et visualisation de données en temps réel.',
    image: null,
    tags: ['Vue.js', 'Chart.js', 'Python'],
    github: '#',
    demo: '#',
    category: 'web',
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 6,
    title: 'Outil de Scripting',
    description: 'Scripts d\'automatisation pour la gestion de serveurs et le déploiement.',
    image: null,
    tags: ['Python', 'Bash', 'Docker'],
    github: '#',
    demo: null,
    category: 'devops',
    color: 'from-indigo-500 to-violet-500',
  },
];

const categories = [
  { id: 'all', name: 'Tous', color: 'from-gray-500 to-gray-600' },
  { id: 'web', name: 'Web', color: 'from-blue-500 to-cyan-500' },
  { id: 'mobile', name: 'Mobile', color: 'from-green-500 to-emerald-500' },
  { id: 'backend', name: 'Backend', color: 'from-orange-500 to-yellow-500' },
  { id: 'devops', name: 'DevOps', color: 'from-purple-500 to-pink-500' },
];

function ProjectCard({ project, index, isInView }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-white/20 transition-colors duration-300">
        {/* Colorful image placeholder */}
        <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <Folder className="w-16 h-16 text-white/50 group-hover:scale-110 transition-transform duration-300" />
          </div>
          {/* Overlay on hover */}
          <div 
            className={`absolute inset-0 bg-dark/80 flex items-center justify-center gap-4 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          >
            {project.github && (
              <a
                href={project.github}
                className="p-3 bg-white/10 rounded-full hover:bg-primary/50 transition-colors transform hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                className="p-3 bg-white/10 rounded-full hover:bg-accent/50 transition-colors transform hover:scale-110"
              >
                <Eye className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-mono bg-dark rounded-full text-primary border border-primary/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projets" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Mes <span className="gradient-text">projets</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Découvrez les projets sur lesquels j'ai travaillé
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? `bg-gradient-to-r ${cat.color} text-white shadow-lg`
                  : 'bg-white/10 border border-white/20 hover:bg-white/20'
              }`}
            >
              {cat.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
