import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Rss, Globe, Youtube, BookOpen, Users,
  ExternalLink, Newspaper, MessageCircle, Eye,
} from 'lucide-react';

const sources = [
  {
    title: 'Sites & Blogs',
    icon: Globe,
    color: 'from-blue-400 to-cyan-400',
    accent: '#38bdf8',
    items: [
      { name: 'Dev.to', url: 'https://dev.to', desc: 'Articles et tutoriels de la communauté dev' },
      { name: 'Medium', url: 'https://medium.com', desc: 'Articles approfondis sur le développement' },
      { name: 'Korben.info', url: 'https://korben.info', desc: 'Actualités tech et astuces en français' },
    ],
  },
  {
    title: 'Réseaux & Communautés',
    icon: Users,
    color: 'from-violet-400 to-purple-400',
    accent: '#a78bfa',
    items: [
      { name: 'Reddit (r/webdev)', url: 'https://reddit.com/r/webdev', desc: 'Discussions et tendances du développement web' },
      { name: 'GitHub Trending', url: 'https://github.com/trending', desc: 'Repos et technologies en tendance' },
      { name: 'Stack Overflow', url: 'https://stackoverflow.com', desc: 'Résolution de problèmes et bonnes pratiques' },
    ],
  },
  {
    title: 'Vidéos & Podcasts',
    icon: Youtube,
    color: 'from-rose-400 to-pink-400',
    accent: '#fb7185',
    items: [
      { name: 'Fireship', url: 'https://www.youtube.com/@Fireship', desc: 'Résumés rapides des tendances tech' },
      { name: 'Grafikart', url: 'https://www.youtube.com/@grafikart', desc: 'Tutoriels et actus dev en français' },
      { name: 'Traversy Media', url: 'https://www.youtube.com/@TraversyMedia', desc: 'Tutoriels développement web' },
    ],
  },
  {
    title: 'Newsletters & Flux',
    icon: Rss,
    color: 'from-amber-400 to-orange-400',
    accent: '#fbbf24',
    items: [
      { name: 'TLDR Newsletter', url: 'https://tldr.tech', desc: 'Le résumé quotidien de l\'actualité tech' },
      { name: 'JavaScript Weekly', url: 'https://javascriptweekly.com', desc: 'Veille hebdomadaire JavaScript' },
      { name: 'CSS-Tricks', url: 'https://css-tricks.com', desc: 'Astuces et nouveautés CSS / front-end' },
    ],
  },
];

const methodology = [
  {
    icon: Newspaper,
    title: 'Lecture quotidienne',
    desc: 'Je consulte chaque jour mes sources pour rester informé des dernières évolutions.',
  },
  {
    icon: MessageCircle,
    title: 'Veille communautaire',
    desc: 'J\'échange avec la communauté sur Reddit, GitHub et Discord pour confronter mes connaissances.',
  },
  {
    icon: BookOpen,
    title: 'Expérimentation',
    desc: 'Je teste les nouvelles technologies via des projets personnels pour consolider ma veille.',
  },
];

function SourceCard({ source, index, isInView }) {
  const Icon = source.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="group rounded-2xl p-5 sm:p-6 border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/12 transition-all duration-500 hover:shadow-xl hover:shadow-primary/[0.05]"
    >
      <motion.div
        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${source.color} flex items-center justify-center mb-4 transition-transform duration-300`}
        style={{ boxShadow: `0 8px 30px -8px ${source.accent}50` }}
        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15, transition: { duration: 0.5 } }}
      >
        <Icon className="w-6 h-6 text-white" />
      </motion.div>
      <h3 className={`text-lg font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${source.color}`}>
        {source.title}
      </h3>
      <div className="space-y-3">
        {source.items.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300 group/link"
          >
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-200 group-hover/link:text-white transition-colors flex items-center gap-1.5">
                {item.name}
                <ExternalLink className="w-3 h-3 text-gray-500 group-hover/link:text-primary-light transition-colors flex-shrink-0" />
              </p>
              <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </motion.div>
  );
}

export default function TechWatch() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="veille" className="py-20 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/4 right-0 w-[350px] h-[350px] bg-primary/[0.04] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-accent/[0.04] rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="section-label">
            <Eye className="w-3.5 h-3.5" />
            Veille
          </span>
          <h2 className="section-title">
            Ma <span className="gradient-text">veille technologique</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Comment je me tiens informé des dernières tendances et technologies
          </p>
        </motion.div>

        {/* Méthodologie */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="grid sm:grid-cols-3 gap-4 sm:gap-5 mb-12 sm:mb-16"
        >
          {methodology.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="relative rounded-2xl p-5 sm:p-6 border border-white/[0.06] bg-gradient-to-br from-white/[0.03] to-transparent text-center group hover:border-white/10 transition-all duration-300"
              >
                <div className="w-11 h-11 mx-auto mb-3 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-5 h-5 text-primary-light" />
                </div>
                <h4 className="font-bold text-sm sm:text-base mb-1.5">{step.title}</h4>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Sources */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {sources.map((source, index) => (
            <SourceCard
              key={source.title}
              source={source}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
