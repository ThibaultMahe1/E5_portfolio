import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative">
      <div className="shimmer-line" />
      <div className="py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.a
              href="#accueil"
              className="flex items-center gap-2.5 text-lg font-bold"
              whileHover={{ scale: 1.03 }}
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-pink flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="gradient-text">Portfolio</span>
            </motion.a>

            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#apropos" className="hover:text-gray-300 transition-colors">À propos</a>
              <a href="#projets" className="hover:text-gray-300 transition-colors">Projets</a>
              <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
