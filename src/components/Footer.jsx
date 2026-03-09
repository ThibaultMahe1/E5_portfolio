import { motion } from 'framer-motion';
import { Code2, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <motion.a
            href="#accueil"
            className="flex items-center gap-2 text-lg font-bold"
            whileHover={{ scale: 1.05 }}
          >
            <Code2 className="w-6 h-6 text-primary" />
            <span className="gradient-text">Portfolio</span>
          </motion.a>

          {/* Copyright */}
          <p className="text-gray-500 text-sm flex items-center gap-1">
            © {currentYear} - Fait avec
            <Heart className="w-4 h-4 text-red-500 inline" />
            par <span className="text-primary">Prénom Nom</span>
          </p>

          {/* Quick links */}
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#apropos" className="hover:text-white transition-colors">À propos</a>
            <a href="#projets" className="hover:text-white transition-colors">Projets</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
