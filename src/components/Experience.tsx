import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    title: 'Python Internship',
    company: 'VIVID TRANS-TECH SOLUTIONS PRIVATE LIMITED',
    location: 'Chennai, India',
    duration: '23/06/2025 – 22/07/2025',
    achievements: [
      'Built LangBridge, a multilingual translator supporting text, speech, PDF, and image (OCR).',
      'Integrated Microsoft Translator API and offline text-to-speech for accessibility.',
      'Designed a CustomTkinter GUI with history management and export to DOCX/PDF.',
    ],
  },
];

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section id="experience" className="section-padding section-border relative">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm text-glow">// Work Experience</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">
            Professional Journey
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline Line */}
              <div className="absolute left-8 top-16 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />
              
              {/* Timeline Dot */}
              <motion.div 
                className="absolute left-6 top-8 w-5 h-5 rounded-full bg-primary flex items-center justify-center z-10"
                whileHover={{ scale: 1.3 }}
                style={{ boxShadow: '0 0 20px hsl(var(--primary) / 0.5)' }}
              >
                <div className="w-2 h-2 rounded-full bg-background" />
              </motion.div>

              <motion.div 
                whileHover={{ y: -4 }}
                className="ml-16 glass-card p-8 hover-glow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold flex items-center gap-2 text-foreground">
                      <Briefcase className="w-5 h-5 text-primary" />
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium mt-1">{exp.company}</p>
                  </div>
                  <div className="flex flex-col gap-1 text-sm text-foreground/70">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary/70" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary/70" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.2 + i * 0.1 + 0.3 }}
                      className="flex items-start gap-3 text-foreground/80"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
