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
  const items = [...technologies, ...technologies];
  
  return (
    <div className="relative flex overflow-hidden py-2 sm:py-3">
      <div
        className={`flex gap-3 sm:gap-5 whitespace-nowrap ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {items.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl hover:scale-105 transition-transform cursor-default"
            style={{ 
              background: `linear-gradient(135deg, ${tech.color}10, ${tech.color}05)`,
              border: `1px solid ${tech.color}25`
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: tech.color, boxShadow: `0 0 8px ${tech.color}60` }}
            />
            <span className="text-xs sm:text-sm font-medium text-gray-300">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section className="py-10 sm:py-14 overflow-hidden relative">
      {/* Subtle top/bottom border */}
      <div className="shimmer-line" />
      
      <div className="max-w-7xl mx-auto px-5 mb-5 sm:mb-7 relative z-10 mt-6">
        <p className="text-center text-xs sm:text-sm uppercase tracking-[0.2em] font-medium text-gray-500">
          Technologies que j'utilise
        </p>
      </div>
      
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-40 bg-gradient-to-r from-dark to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-40 bg-gradient-to-l from-dark to-transparent z-10" />
      
      <MarqueeRow direction="left" speed={35} />
      <MarqueeRow direction="right" speed={40} />
      
      <div className="shimmer-line mt-6" />
    </section>
  );
}
