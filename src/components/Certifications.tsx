import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'Python Fundamentals',
    issuer: 'Infosys',
    image: '/certificates/img-Python_Fundamentals.jpg',
    file: '/certificates/Python_Fundamentals.pdf',
  },
  {
    title: 'Python Django',
    issuer: 'Infosys',
    image: '/certificates/img-Python_Django.jpg',
    file: '/certificates/Python_Django.pdf',
  },
  {
    title: 'Data Visualization Techniques',
    issuer: 'Infosys',
    image: '/certificates/img-Data_Visualization.jpg',
    file: '/certificates/Data_Visualization_Techniques.pdf',
  },
  {
    title: 'Fundamentals of Information Security',
    issuer: 'Infosys',
    image: '/certificates/img-Info_Security.jpg',
    file: '/certificates/Fundamentals_of_Information_Security.pdf',
  },
  {
    title: 'Explore Automation Development with UiPath',
    issuer: 'UiPath Academy',
    image: '/certificates/img-UiPath_Automation.jpg',
    file: '/certificates/Explore_Automation_UiPath.pdf',
  },
  {
    title: 'UI Automation with Modern Design in Studio',
    issuer: 'UiPath Academy',
    image: '/certificates/img-UiPath_UI.jpg',
    file: '/certificates/UI_Automation_UiPath.pdf',
  },
];

const CertCard = ({ cert }: { cert: typeof certifications[0] }) => (
  <a
    href={cert.file}
    target="_blank"
    rel="noopener noreferrer"
    className="glass-card p-3 hover-glow group block shrink-0 w-[280px] sm:w-[320px]"
  >
    <div className="relative rounded-lg overflow-hidden border border-border/50 group-hover:border-primary/40 transition-colors">
      <img
        src={cert.image}
        alt={cert.title}
        className="w-full h-auto object-cover"
        loading="lazy"
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-background/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="text-center px-4">
          <ExternalLink className="w-6 h-6 text-primary mx-auto mb-2" />
          <p className="text-foreground text-sm font-semibold">{cert.title}</p>
          <p className="text-primary text-xs mt-1">{cert.issuer}</p>
        </div>
      </div>
    </div>
  </a>
);

const Certifications = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const doubled = [...certifications, ...certifications];

  return (
    <section id="certifications" className="section-padding section-border relative">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-primary font-mono text-sm text-glow">// Certifications</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 text-foreground">
            Certifications & Achievements
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Professional certifications earned through continuous learning and skill development.
          </p>
        </motion.div>
      </div>

      {/* Marquee container */}
      <div className="relative overflow-hidden w-full">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

        <motion.div
          className="flex gap-4 sm:gap-6 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              duration: 35,
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
