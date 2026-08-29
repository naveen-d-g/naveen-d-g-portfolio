import { motion } from 'framer-motion';
import { ArrowDown, Download, FolderOpen, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import naveenPhoto from '@/assets/naveen-photo.jpeg';

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
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4"
    >

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-center lg:text-left flex-1"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 glass-card text-sm"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-muted-foreground">Freelancer • Open to work</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            >
              Hi, I'm{' '}
              <span className="gradient-text">Naveen D G</span>
            </motion.h1>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-1 sm:gap-2 text-base sm:text-xl md:text-2xl text-muted-foreground"
            >
              <span className="font-mono text-primary">{'<'}</span>
              <span>Freelance Python Developer</span>
              <span className="text-primary">|</span>
              <span>Full-Stack & ML Engineer</span>
              <span className="font-mono text-primary">{'/>'}</span>
            </motion.div>

            {/* Freelance services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-sm sm:text-base text-foreground/80"
            >
              <span className="text-primary font-mono">//</span>
              <span>Available for Web Development, Software Projects & Video Editing</span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="max-w-2xl text-sm sm:text-lg text-muted-foreground leading-relaxed"
            >
              Building scalable full-stack applications, REST APIs, and machine learning solutions.
              Passionate about clean backend design, data visualization, and user-focused software.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4"
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
              className="flex items-center justify-center lg:justify-start gap-4 pt-8"
            >
              {[
                { icon: Github, href: 'https://github.com/naveen-d-g', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/naveen-d-g', label: 'LinkedIn' },
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

          {/* Right - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative flex-shrink-0"
          >
            {/* Outer decorative ring */}
            <motion.div 
              className="absolute -inset-6 rounded-full border-2 border-cyan-300/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{ boxShadow: '0 0 40px hsl(190 90% 70% / 0.18)' }}
            />
            {/* Middle decorative ring */}
            <motion.div 
              className="absolute -inset-3 rounded-full border border-violet-300/25"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            {/* Soft ambient glow behind image */}
            <div 
              className="absolute inset-0 rounded-full"
              style={{ 
                boxShadow: '0 0 70px 25px hsl(190 90% 70% / 0.18), 0 0 120px 50px hsl(262 85% 70% / 0.1)',
              }}
            />
            {/* Main image container */}
            <div 
              className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-cyan-200/40"
              style={{ 
                boxShadow: '0 0 45px hsl(190 90% 70% / 0.25), inset 0 0 35px hsl(190 90% 70% / 0.08)',
              }}
            >
              <img
                src={naveenPhoto}
                alt="Naveen D G"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Soft pulsing overlay */}
            <motion.div 
              className="absolute inset-0 rounded-full border-2 border-cyan-200/35"
              animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.25, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>

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
