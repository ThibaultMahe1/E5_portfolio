import { useEffect, useState } from 'react';

const palette = [
  { color: '#7c3aed', glow: 'rgba(124,58,237,0.4)' },
  { color: '#f472b6', glow: 'rgba(244,114,182,0.4)' },
  { color: '#06b6d4', glow: 'rgba(6,182,212,0.4)' },
  { color: '#8b5cf6', glow: 'rgba(139,92,246,0.35)' },
  { color: '#34d399', glow: 'rgba(52,211,153,0.35)' },
];

function FloatingParticle({ x, size, duration, delay, colorObj, drift }) {
  return (
    <div
      className="absolute particle-rise"
      style={{
        left: `${x}%`,
        '--drift': `${drift}px`,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
      }}
    >
      <div
        className="rounded-full particle-pulse"
        style={{
          width: size,
          height: size,
          backgroundColor: colorObj.color,
          boxShadow: `0 0 ${size * 3}px ${size}px ${colorObj.glow}`,
          animationDuration: `${2 + Math.random() * 3}s`,
          animationDelay: `${delay}s`,
        }}
      />
    </div>
  );
}

function TwinkleStar({ x, y, size, delay }) {
  return (
    <div
      className="absolute rounded-full bg-white particle-twinkle"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        animationDuration: `${3 + Math.random() * 4}s`,
        animationDelay: `${delay}s`,
      }}
    />
  );
}

export default function ParticleBackground() {
  const [elements, setElements] = useState({ particles: [], stars: [] });

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 8 : 16;
    const starCount = isMobile ? 10 : 25;

    const particles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 3 + 2,
      duration: Math.random() * 18 + 18,
      delay: Math.random() * 20,
      drift: (Math.random() - 0.5) * 120,
      colorObj: palette[Math.floor(Math.random() * palette.length)],
    }));

    const stars = Array.from({ length: starCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      delay: Math.random() * 6,
    }));

    setElements({ particles, stars });
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Ambient gradient orbs */}
      <div className="absolute -top-20 -right-20 w-64 sm:w-96 h-64 sm:h-96 bg-primary/[0.06] rounded-full blur-[100px] orb-float-1" />
      <div className="absolute top-1/3 -left-20 w-56 sm:w-80 h-56 sm:h-80 bg-pink/[0.06] rounded-full blur-[100px] orb-float-2" />
      <div className="absolute bottom-20 right-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-cyan-400/[0.05] rounded-full blur-[100px] orb-float-3" />

      {/* Rising glowing particles */}
      {elements.particles.map((p) => (
        <FloatingParticle key={`p-${p.id}`} {...p} />
      ))}

      {/* Twinkling stars */}
      {elements.stars.map((s) => (
        <TwinkleStar key={`s-${s.id}`} {...s} />
      ))}
    </div>
  );
}
