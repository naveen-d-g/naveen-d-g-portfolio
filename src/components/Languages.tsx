import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Globe } from 'lucide-react';

const languages = [
  { name: 'English', level: 85, label: 'Professional' },
  { name: 'Tamil', level: 95, label: 'Native' },
  { name: 'Telugu', level: 70, label: 'Conversational' },
  { name: 'Hindi', level: 60, label: 'Basic' },
];

const Languages = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className="section-padding relative">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">// Communication</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Language Proficiency
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-4">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 hover-glow"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-primary" />
                  <span className="font-semibold">{lang.name}</span>
                </div>
                <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                  {lang.label}
                </span>
              </div>
              
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${lang.level}%` } : {}}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                  className="h-full bg-gradient-to-r from-primary to-cyan-400 rounded-full"
                />
              </div>
              <div className="text-right text-xs text-muted-foreground mt-1">
                {lang.level}%
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
