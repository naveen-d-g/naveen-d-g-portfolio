import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Linkedin, Github, Instagram, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

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

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim() || 'No Subject',
          message: formData.message.trim(),
        });

      if (error) throw error;

      toast({
        title: 'Message Sent!',
        description: 'Thank you for reaching out. I\'ll get back to you soon!',
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">
            Let's Connect
          </h2>
          <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, projects, or just having a chat about technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-8">
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

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <h3 className="text-xl font-bold mb-2 text-foreground">Send a Message</h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-foreground/70">Name *</label>
                  <Input
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-secondary border-2 border-border/60 focus:border-primary transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-foreground/70">Email *</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-secondary border-2 border-border/60 focus:border-primary transition-all duration-300"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-foreground/70">Subject</label>
                <Input
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="bg-secondary border-2 border-border/60 focus:border-primary transition-all duration-300"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-foreground/70">Message *</label>
                <Textarea
                  placeholder="Your message..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-secondary border-2 border-border/60 focus:border-primary resize-none transition-all duration-300"
                />
              </div>
              
              <Button
                type="submit"
                size="lg"
                className="w-full glow-effect"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
