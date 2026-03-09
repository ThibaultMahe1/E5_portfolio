import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Code, Coffee, FolderGit2, Award } from 'lucide-react';

const stats = [
  { icon: FolderGit2, value: 15, suffix: '+', label: 'Projets réalisés', color: 'from-blue-500 to-cyan-500' },
  { icon: Code, value: 5000, suffix: '+', label: 'Lignes de code', color: 'from-purple-500 to-pink-500' },
  { icon: Coffee, value: 500, suffix: '+', label: 'Cafés bus ☕', color: 'from-orange-500 to-yellow-500' },
  { icon: Award, value: 3, suffix: '', label: 'Certifications', color: 'from-green-500 to-emerald-500' },
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
    <span className="gradient-text">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

function StatCard({ stat, index, isInView }) {
  const Icon = stat.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative group hover:-translate-y-2 transition-transform duration-300"
    >
      <div className="rounded-2xl p-6 text-center relative overflow-hidden border-2 border-white/10">
        {/* Colorful gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
        <div className="absolute inset-0 bg-dark/30" />
        
        {/* Icon */}
        <div
          className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center relative z-10 transition-transform duration-300 group-hover:scale-110`}
        >
          <Icon className="w-8 h-8 text-white" />
        </div>
        
        {/* Number */}
        <div className="text-3xl md:text-4xl font-bold mb-2 relative z-10">
          <span className={`text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}>
            <AnimatedNumber value={stat.value} suffix={stat.suffix} isInView={isInView} />
          </span>
        </div>
        
        {/* Label */}
        <p className="text-gray-300 text-sm relative z-10 font-medium">{stat.label}</p>
      </div>
    </motion.div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
