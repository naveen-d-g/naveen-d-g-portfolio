import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section id="education" className="section-padding section-border relative">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm text-glow">// Academic Background</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">
            Education
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="glass-card p-8 hover-glow relative overflow-hidden"
          >
            {/* Decorative Element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full" />
            
            <div className="relative">
              <div className="flex items-start gap-4">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0"
                >
                  <GraduationCap className="w-8 h-8 text-primary" />
                </motion.div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground">
                    Bachelor of Engineering
                  </h3>
                  <p className="text-primary font-medium mt-1 text-glow">
                    Computer Science and Engineering
                  </p>
                  <p className="text-foreground/90 mt-2 font-medium">
                    Arunai Engineering College
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mt-4 text-sm text-foreground/70">
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary/70" />
                      Tiruvannamalai
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary/70" />
                      Graduation: April 2026
                    </span>
                  </div>
                </div>
              </div>

              {/* GPA Highlight */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 }}
                className="mt-6 pt-6 border-t-2 border-border/60"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-primary" />
                    <span className="text-foreground/80">Current GPA</span>
                  </div>
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="text-3xl font-bold gradient-text cursor-default"
                  >
                    7.78
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
