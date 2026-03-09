import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const colors = ['#6366f1', '#ec4899', '#06b6d4', '#8b5cf6'];

function Particle({ delay }) {
  const randomX = Math.random() * 100;
  const randomSize = Math.random() * 3 + 2;
  const randomDuration = Math.random() * 15 + 20;
  const randomOpacity = Math.random() * 0.3 + 0.1;
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: `${randomX}%`,
        width: randomSize,
        height: randomSize,
        backgroundColor: randomColor,
        opacity: randomOpacity,
        willChange: 'transform',
      }}
      initial={{ y: '100vh' }}
      animate={{ y: '-10vh' }}
      transition={{
        duration: randomDuration,
        delay: delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
}

export default function ParticleBackground() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      delay: Math.random() * 15,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
      {particles.map((particle) => (
        <Particle key={particle.id} delay={particle.delay} />
      ))}
    </div>
  );
}
