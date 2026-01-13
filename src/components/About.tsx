import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Layers, Sparkles } from 'lucide-react';

const highlights = [
  { icon: Code2, label: 'Python & Django', description: 'Backend Development' },
  { icon: Database, label: 'REST APIs', description: 'Scalable Systems' },
  { icon: Layers, label: 'ML & AI Tools', description: 'OCR, NLP, Vision' },
  { icon: Sparkles, label: 'Clean Code', description: 'Best Practices' },
];

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">// About Me</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
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
            <div className="glass-card p-8 hover-glow">
              <div className="prose prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Aspiring <span className="text-foreground font-medium">final-year Computer Science student</span> skilled in{' '}
                  <span className="text-primary">Python</span>,{' '}
                  <span className="text-primary">Machine Learning</span>,{' '}
                  <span className="text-primary">OCR/NLP</span> and{' '}
                  <span className="text-primary">Django REST Framework</span> with experience developing scalable REST APIs, secure authentication systems and user-friendly desktop and web applications.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                  Strong in <span className="text-foreground font-medium">API integration</span>, <span className="text-foreground font-medium">data processing</span> and <span className="text-foreground font-medium">clean backend design</span> with a proven ability to deliver reliable, user-focused software solutions.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                  Attention to detail with strong <span className="text-primary">problem-solving skills</span> and a focus on delivering reliable, user-focused solutions.
                </p>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-border">
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
                    className="text-center"
                  >
                    <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
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
            className="lg:col-span-2 grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-5 text-center hover-glow group cursor-default"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm">{item.label}</h3>
                <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
