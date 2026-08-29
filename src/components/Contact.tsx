import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Linkedin, Github, Instagram } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'naveendg101@gmail.com',
    href: 'mailto:naveendg101@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 99445 66476',
    href: 'tel:+919944566476',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/naveen-d-g',
    href: 'https://www.linkedin.com/in/naveen-d-g',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/naveen-d-g',
    href: 'https://github.com/naveen-d-g',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: 'im_naveen_dg',
    href: 'https://www.instagram.com/im_naveen_dg?igsh=ejRmMWNoNDVjYjJu',
  },
];

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="contact" className="section-padding section-border relative">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm text-glow">// Get In Touch</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 text-foreground">
            Let's Connect
          </h2>
          <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, projects, or just having a chat about technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card p-5 sm:p-8">
            <h3 className="text-xl font-bold mb-6 text-foreground">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ x: 4, scale: 1.02 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50 hover:bg-secondary hover:border-primary/40 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">{item.label}</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
