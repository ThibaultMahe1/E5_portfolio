import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import About from './components/About';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="min-h-screen bg-dark text-white overflow-x-hidden relative">
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <TechMarquee />
        <About />
        <Stats />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
