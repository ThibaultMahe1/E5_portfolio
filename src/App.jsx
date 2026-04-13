import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

// Lazy load below-the-fold components
const TechMarquee = lazy(() => import('./components/TechMarquee'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Timeline = lazy(() => import('./components/Timeline'));
const TechWatch = lazy(() => import('./components/TechWatch'));
const Contact = lazy(() => import('./components/Contact'));
const ProjectDetail = lazy(() => import('./components/ProjectDetail'));

function HomePage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Suspense fallback={null}>
          <TechMarquee />
          <About />
          <Skills />
          <Projects />
          <Timeline />
          <TechWatch />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <div className="min-h-screen bg-dark text-white overflow-x-hidden relative">
      <ParticleBackground />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projet/:id" element={
          <Suspense fallback={<div className="min-h-screen" />}>
            <ProjectDetail />
          </Suspense>
        } />
      </Routes>
    </div>
  );
}

export default App;
