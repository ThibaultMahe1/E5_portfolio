import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Animation de compteur
export function AnimatedCounter({ value, duration = 2, suffix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span ref={ref}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
      >
        {isInView && (
          <motion.span
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            <Counter from={0} to={value} duration={duration} />
          </motion.span>
        )}
        {suffix}
      </motion.span>
    </span>
  );
}

function Counter({ from, to, duration }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
    >
      <motion.span
        initial={{ opacity: 1 }}
        animate={isInView ? { opacity: 1 } : {}}
        onUpdate={(latest) => {
          if (ref.current) {
            ref.current.textContent = Math.round(latest.value || 0);
          }
        }}
      >
        <motion.span
          animate={isInView ? { value: to } : { value: from }}
          initial={{ value: from }}
          transition={{ duration, ease: 'easeOut' }}
          onUpdate={(latest) => {
            if (ref.current) {
              ref.current.textContent = Math.round(latest);
            }
          }}
        />
      </motion.span>
    </motion.span>
  );
}

// Animation de révélation de texte
export function TextReveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// Animation d'apparition avec stagger
export function StaggerContainer({ children, staggerDelay = 0.1 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// Magnetic button effect
export function MagneticButton({ children, className = '' }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const btn = ref.current;
    if (!btn) return;
    
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform = 'translate(0, 0)';
    }
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-200 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );
}

// Tilt card effect - simplified for performance
export function TiltCard({ children, className = '' }) {
  return (
    <div className={`hover:scale-[1.02] transition-transform duration-300 ${className}`}>
      {children}
    </div>
  );
}

// Glowing border - simplified for performance
export function GlowingBorder({ children, className = '' }) {
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-300" />
      <div className="relative">{children}</div>
    </div>
  );
}
