import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Layers, Sparkles } from 'lucide-react';

const highlights = [
  { icon: Code2, label: 'Full-Stack Dev', description: 'Frontend & Backend' },
  { icon: Database, label: 'REST APIs', description: 'Django, Flask, FastAPI' },
  { icon: Layers, label: 'Machine Learning', description: 'PyTorch, TensorFlow' },
  { icon: Sparkles, label: 'Clean Design', description: 'Scalable Solutions' },
];

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section id="about" className="section-padding section-border relative">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm text-glow">// About Me</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 text-foreground">
            Executive Summary
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-5 sm:p-8 hover-glow">
              <div className="prose prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-foreground/80">
                  <span className="text-foreground font-semibold">Python Developer</span> with expertise in{' '}
                  <span className="text-primary text-glow font-medium">Full-Stack Web Development</span> and{' '}
                  <span className="text-primary text-glow font-medium">Machine Learning</span>, experienced in building scalable and secure applications.
                </p>
                <p className="text-lg leading-relaxed text-foreground/80 mt-4">
                  Proficient in developing RESTful APIs using{' '}
                  <span className="text-primary text-glow font-medium">Django REST Framework</span> and{' '}
                  <span className="text-primary text-glow font-medium">Flask</span>, integrating third-party APIs and implementing authentication systems.
                </p>
                <p className="text-lg leading-relaxed text-foreground/80 mt-4">
                  Strong background in <span className="text-foreground font-semibold">data preprocessing</span>, <span className="text-foreground font-semibold">model training</span> and <span className="text-foreground font-semibold">data visualization</span> with a focus on clean backend design and solutions.
                </p>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t-2 border-border/60">
                {[
                  { value: '7.78', label: 'GPA' },
                  { value: '2+', label: 'Projects' },
                  { value: '2026', label: 'Graduating' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center cursor-default"
                  >
                    <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-sm text-foreground/70 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 grid grid-cols-1 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="glass-card p-5 text-center hover-glow group cursor-default"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                  <item.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-semibold text-sm text-foreground">{item.label}</h3>
                <p className="text-xs text-foreground/60 mt-1">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
