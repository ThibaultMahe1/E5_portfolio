import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Github, Folder, Eye, ArrowUpRight, FolderKanban } from 'lucide-react';
import projects, { categories } from '../data/projects';

function ProjectCard({ project, index, isInView }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      layout
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <motion.div 
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.02] hover:border-white/10 transition-all duration-500 hover:shadow-xl hover:shadow-primary/[0.08]"
      >
        {/* Project image */}
        <div className={`h-44 sm:h-52 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
          {project.image ? (
            <img src={project.image} alt={project.title} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <Folder className="w-12 sm:w-16 h-12 sm:h-16 text-white/30" />
            </div>
          )}
          {/* Overlay */}
          <div 
            className={`absolute inset-0 bg-dark/85 backdrop-blur-sm flex items-center justify-center gap-3 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 ${isHovered ? 'md:opacity-100' : ''}`}
          >
            {project.github && (
              <a
                href={project.github}
                className="p-3.5 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            <Link
              to={`/projet/${project.id}`}
              className="px-5 py-2.5 bg-gradient-to-r from-primary to-pink rounded-xl text-sm font-medium inline-flex items-center gap-2 hover:shadow-lg hover:shadow-primary/25 transition-all"
            >
              Voir le projet
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary-light transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-[11px] font-mono rounded-md text-gray-400 bg-white/[0.04] border border-white/[0.06]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
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
    <section id="projets" className="py-20 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-primary/[0.04] rounded-full blur-[130px]" />
      
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="section-label">
            <FolderKanban className="w-3.5 h-3.5" />
            Portfolio
          </span>
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
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-14"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              whileTap={{ scale: 0.95 }}
              className={`px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-primary to-pink text-white shadow-lg shadow-primary/20'
                  : 'text-gray-400 border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.06] hover:text-white'
              }`}
            >
              {cat.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isInView={isInView}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
