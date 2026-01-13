import { motion } from 'framer-motion';
import { ArrowDown, Download, FolderOpen, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-hero-gradient" />
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-400/20 rounded-full blur-[100px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      />

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 glass-card text-sm"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-muted-foreground">Available for opportunities</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Naveen D G</span>
          </motion.h1>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-2 text-xl md:text-2xl text-muted-foreground"
          >
            <span className="font-mono text-primary">{'<'}</span>
            <span>Python Developer</span>
            <span className="text-primary">|</span>
            <span>Final-Year CS Student</span>
            <span className="font-mono text-primary">{'/>'}</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed"
          >
            Crafting scalable backend solutions, REST APIs, and AI-powered tools.
            Passionate about clean code, data processing, and building user-focused applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <Button
              size="lg"
              className="glow-effect"
              onClick={() => scrollToSection('#resume')}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hover-glow"
              onClick={() => scrollToSection('#projects')}
            >
              <FolderOpen className="w-5 h-5 mr-2" />
              View Projects
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-center gap-4 pt-8"
          >
            {[
              { icon: Github, href: 'https://github.com/naveen-d-g', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/naveen-dg', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:naveendg101@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card hover-glow text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon size={22} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection('#about')}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
