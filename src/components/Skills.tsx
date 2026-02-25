import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, Database, Layers, Wrench,
  Terminal
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming & Development',
    icon: Code,
    skills: ['Python', 'Java', 'HTML', 'CSS', 'JavaScript', 'C/C++'],
  },
  {
    title: 'Frameworks & Libraries',
    icon: Layers,
    skills: [
      'Django REST Framework',
      'Flask',
      'React',
      'FastAPI',
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
      'NumPy',
      'Pandas',
      'Matplotlib',
      'Seaborn',
      'CustomTkinter',
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MySQL', 'Advanced SQL Querying'],
  },
  {
    title: 'Developer Tools',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'Postman', 'Canva', 'Photoshop'],
  },
  {
    title: 'Core Competencies',
    icon: Terminal,
    skills: [
      'REST API Development & Integration',
      'Full-Stack Web Development',
      'Machine Learning (Supervised & Unsupervised)',
      'Model Training & Data Visualization',
    ],
  },
];

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="skills" className="section-padding section-border relative">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm text-glow">// Technical Skills</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">
            Technologies I Work With
          </h2>
          <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit built through projects, internships, and continuous learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card p-6 hover-glow group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                  <category.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="skill-tag"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
