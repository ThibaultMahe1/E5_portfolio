import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Code, Coffee, FolderGit2, Award } from 'lucide-react';

const stats = [
  { icon: FolderGit2, value: 15, suffix: '+', label: 'Projets réalisés', color: 'from-blue-400 to-cyan-400', accent: '#38bdf8' },
  { icon: Code, value: 5000, suffix: '+', label: 'Lignes de code', color: 'from-violet-400 to-purple-400', accent: '#a78bfa' },
  { icon: Coffee, value: 500, suffix: '+', label: 'Cafés bus ☕', color: 'from-amber-400 to-orange-400', accent: '#fbbf24' },
  { icon: Award, value: 3, suffix: '', label: 'Certifications', color: 'from-emerald-400 to-green-400', accent: '#34d399' },
];

function AnimatedNumber({ value, suffix, isInView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    const stepTime = duration / steps;
    
    let current = 0;
    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

function StatCard({ stat, index, isInView }) {
  const Icon = stat.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <div className="rounded-2xl p-5 sm:p-6 text-center border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500">
        <div
          className={`w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
          style={{ boxShadow: `0 8px 25px -8px ${stat.accent}50` }}
        >
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </div>
        
        <div className={`text-2xl sm:text-3xl md:text-4xl font-extrabold mb-1.5 text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}>
          <AnimatedNumber value={stat.value} suffix={stat.suffix} isInView={isInView} />
        </div>
        
        <p className="text-gray-500 text-xs sm:text-sm font-medium">{stat.label}</p>
      </div>
    </motion.div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="py-14 sm:py-18 relative overflow-hidden">
      <div className="shimmer-line" />
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10 py-8" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
      <div className="shimmer-line" />
    </section>
  );
}
