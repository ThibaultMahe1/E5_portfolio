import { motion } from 'framer-motion';

const technologies = [
  { name: 'React', color: '#61DAFB' },
  { name: 'JavaScript', color: '#F7DF1E' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Node.js', color: '#339933' },
  { name: 'PHP', color: '#777BB4' },
  { name: 'Python', color: '#3776AB' },
  { name: 'MySQL', color: '#4479A1' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'Git', color: '#F05032' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'Tailwind CSS', color: '#06B6D4' },
  { name: 'HTML5', color: '#E34F26' },
  { name: 'CSS3', color: '#1572B6' },
  { name: 'Java', color: '#ED8B00' },
  { name: 'Linux', color: '#FCC624' },
  { name: 'VS Code', color: '#007ACC' },
];

function MarqueeRow({ direction = 'left', speed = 30 }) {
  const items = [...technologies, ...technologies]; // Double pour boucle infinie
  
  return (
    <div className="relative flex overflow-hidden py-3">
      <div
        className={`flex gap-6 whitespace-nowrap ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {items.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="flex items-center gap-2 px-4 py-2 rounded-full hover:scale-105 transition-transform cursor-default border-2"
            style={{ 
              backgroundColor: `${tech.color}15`,
              borderColor: `${tech.color}40`
            }}
          >
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: tech.color }}
            />
            <span className="text-sm font-medium text-white">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section className="py-12 overflow-hidden relative">
      {/* Colorful background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 via-pink-900/30 to-blue-900/40" />
      
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-purple-900/80 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-blue-900/80 to-transparent z-10" />
      
      <div className="max-w-7xl mx-auto px-4 mb-6 relative z-10">
        <p className="text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400 text-sm uppercase tracking-widest font-semibold">
          Technologies que j'utilise
        </p>
      </div>
      
      <MarqueeRow direction="left" speed={35} />
      <MarqueeRow direction="right" speed={40} />
    </section>
  );
}
