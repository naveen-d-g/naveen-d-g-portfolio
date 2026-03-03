import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const certifications = [
  {
    title: 'Python Fundamentals',
    issuer: 'Infosys',
    date: 'June 2025',
    file: '/certificates/Python_Fundamentals.pdf',
  },
  {
    title: 'Python Django',
    issuer: 'Infosys',
    date: 'January 2026',
    file: '/certificates/Python_Django.pdf',
  },
  {
    title: 'Data Visualization Techniques',
    issuer: 'Infosys',
    date: 'January 2026',
    file: '/certificates/Data_Visualization_Techniques.pdf',
  },
  {
    title: 'Fundamentals of Information Security',
    issuer: 'Infosys',
    date: 'January 2026',
    file: '/certificates/Fundamentals_of_Information_Security.pdf',
  },
  {
    title: 'Explore Automation Development with UiPath',
    issuer: 'UiPath Academy',
    date: 'August 2025',
    file: '/certificates/Explore_Automation_UiPath.pdf',
  },
  {
    title: 'UI Automation with Modern Design in Studio',
    issuer: 'UiPath Academy',
    date: 'August 2025',
    file: '/certificates/UI_Automation_UiPath.pdf',
  },
];

const CertCard = ({ cert }: { cert: typeof certifications[0] }) => (
  <a
    href={cert.file}
    target="_blank"
    rel="noopener noreferrer"
    className="glass-card p-5 hover-glow group block shrink-0 w-[320px]"
  >
    <div className="flex items-start gap-4">
      <div className="w-11 h-11 shrink-0 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
        <Award className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-foreground text-sm leading-tight group-hover:text-primary transition-colors">
          {cert.title}
        </h3>
        <p className="text-primary/80 text-xs font-medium mt-1.5">{cert.issuer}</p>
        <div className="flex items-center gap-1.5 mt-2 text-muted-foreground text-xs">
          <Calendar className="w-3 h-3" />
          <span>{cert.date}</span>
        </div>
      </div>
      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
    </div>
  </a>
);

const Certifications = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Duplicate the list for seamless looping
  const doubled = [...certifications, ...certifications];

  return (
    <section id="certifications" className="section-padding section-border relative">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm text-glow">// Certifications</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">
            Certifications & Achievements
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Professional certifications earned through continuous learning and skill development.
          </p>
        </motion.div>
      </div>

      {/* Marquee container - full width, overflow hidden */}
      <div className="relative overflow-hidden w-full group/marquee">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
          style={{ willChange: 'transform' }}
        >
          {doubled.map((cert, i) => (
            <CertCard key={`${cert.title}-${i}`} cert={cert} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
