import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollToTop(); }}
              className="text-xl font-bold gradient-text inline-block"
            >
              {'<'}Naveen{' />'}
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Naveen D G. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
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
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Built With */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-destructive" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>

        {/* Back to Top */}
        <motion.button
          onClick={scrollToTop}
          className="absolute right-6 -top-6 p-3 glass-card rounded-full hover-glow text-muted-foreground hover:text-primary transition-colors"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
