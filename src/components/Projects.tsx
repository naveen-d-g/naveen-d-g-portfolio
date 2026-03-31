import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Languages, Users, FileText, Mic, Image, Shield, Database, Layers, Bot, Activity, Zap, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
const projects = [{
  title: 'LangBridge',
  subtitle: 'Multimodal Multilingual Translator',
  description: 'Python app supporting text, speech, image, and PDF translation with AI-powered language detection. Implemented OCR, text-to-speech, and real-time translation via Microsoft Translator API.',
  features: ['AI-powered language detection', 'OCR for image translation', 'Text-to-speech & real-time translation', 'Translation history & export to PDF/DOCX'],
  tech: ['Python', 'CustomTkinter', 'Microsoft Translator API', 'OCR', 'TTS'],
  icons: [Languages, FileText, Mic, Image],
  gradient: 'from-cyan-500/20 to-blue-500/20',
  accentColor: 'text-cyan-400',
  github: 'https://github.com/naveen-d-g/Langbridge.git',
}, {
  title: 'Trust Engine',
  subtitle: 'Autonomous Digital Trust & Resilience',
  description: 'AI-driven security platform for real-time bot detection and behavioral trust analysis using machine learning and backend APIs. Built to identify automated threats through user interaction patterns and enforce security actions dynamically.',
  features: ['ML-based bot detection using behavioral analytics', 'Real-time anomaly detection with Random Forest, Isolation Forest, XGBoost', 'Flask REST APIs for prediction and backend processing', 'Real-time dashboards with WebSockets integration', 'Automated security responses (session termination, alerts)'],
  tech: ['Python', 'Flask', 'Machine Learning', 'React', 'WebSockets', 'Behavioral Analytics'],
  icons: [Bot, Activity, Zap, BarChart3],
  gradient: 'from-emerald-500/20 to-teal-500/20',
  accentColor: 'text-emerald-400',
  github: 'https://github.com/naveen-d-g/TRUST-ENGINE-Autonomous-Digital-Trust-Resilience.git',
}, {
  title: 'Employee Management System',
  subtitle: 'Full-Stack Web Application',
  description: 'Full-stack web app using Django REST Framework and React.js for employee data management. Implemented user registration, token authentication, CRUD operations, filtering, and soft delete with secure REST APIs and a responsive React frontend.',
  features: ['User registration & token auth', 'CRUD operations & filtering', 'Soft delete functionality', 'Secure REST APIs & responsive UI'],
  tech: ['Django REST Framework', 'React', 'REST APIs', 'Token Auth', 'MySQL'],
  icons: [Users, Shield, Database, Layers],
  gradient: 'from-purple-500/20 to-pink-500/20',
  accentColor: 'text-purple-400',
  github: 'https://github.com/naveen-d-g/EMS-Django.git',
}];
const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  return <section id="projects" className="section-padding section-border relative">
      <div className="container-custom">
        <motion.div ref={ref} initial={{
        opacity: 0,
        y: 40
      }} animate={inView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <span className="text-primary font-mono text-sm text-glow">// Featured Work</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">
            Projects
          </h2>
          <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
            Showcasing applications that demonstrate my skills in full-stack development, 
            AI integration, and clean software architecture.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => <motion.div key={project.title} initial={{
          opacity: 0,
          y: 40
        }} animate={inView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.6,
          delay: index * 0.2
        }} whileHover={{ y: -6 }} className="glass-card overflow-hidden hover-glow group">
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative p-8 md:p-10">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  {/* Content */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">{project.title}</h3>
                      <p className={`${project.accentColor} font-mono text-sm mt-1 text-glow`}>
                        {project.subtitle}
                      </p>
                    </div>
                    
                    <p className="text-foreground/80 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => <motion.li key={i} initial={{
                    opacity: 0,
                    x: -20
                  }} animate={inView ? {
                    opacity: 1,
                    x: 0
                  } : {}} transition={{
                    delay: index * 0.2 + i * 0.1 + 0.3
                  }} className="flex items-center gap-3 text-sm text-foreground/70">
                          <span className={`w-1.5 h-1.5 rounded-full ${project.accentColor} bg-current`} />
                          {feature}
                        </motion.li>)}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map(tech => <span key={tech} className="px-3 py-1 text-xs font-mono bg-secondary border border-border/50 rounded-full text-foreground/70 hover:text-foreground hover:border-primary/40 transition-all duration-300">
                          {tech}
                        </span>)}
                    </div>
                  </div>

                  {/* Visual */}
                  <div className="relative flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                      {project.icons.map((Icon, i) => <motion.div key={i} initial={{
                    opacity: 0,
                    scale: 0.8
                  }} animate={inView ? {
                    opacity: 1,
                    scale: 1
                  } : {}} transition={{
                    delay: index * 0.2 + i * 0.1 + 0.4
                  }} whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    y: -4
                  }} className="aspect-square glass-card flex items-center justify-center group/icon cursor-pointer">
                          <Icon className={`w-10 h-10 ${project.accentColor} group-hover/icon:scale-110 transition-transform`} />
                        </motion.div>)}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default Projects;