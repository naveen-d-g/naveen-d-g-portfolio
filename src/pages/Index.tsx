import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Languages from '@/components/Languages';
import Contact from '@/components/Contact';
import Resume from '@/components/Resume';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative">
      {/* Global Background Effects */}
      <div className="fixed inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="fixed inset-0 bg-hero-gradient pointer-events-none" />
      
      {/* Floating Glow Orbs */}
      <motion.div
        className="fixed top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px] pointer-events-none"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-400/15 rounded-full blur-[120px] pointer-events-none"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="fixed top-1/2 right-1/3 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"
        animate={{
          x: [0, 60, 0],
          y: [0, -80, 0],
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Languages />
        <Contact />
        <Resume />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
