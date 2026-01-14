import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, FileText, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Resume = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleDownload = () => {
    // Create resume content and trigger download
    const resumeUrl = '/resume-naveen-dg.pdf';
    window.open(resumeUrl, '_blank');
  };

  return (
    <section id="resume" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">// Download</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Resume
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card p-8 md:p-12 hover-glow">
            {/* Resume Preview Card */}
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center">
                <FileText className="w-12 h-12 text-primary" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold">Naveen D G</h3>
                <p className="text-primary font-mono mt-1">Python Developer | CS Student</p>
              </div>

              <p className="text-muted-foreground max-w-xl">
                Download my complete resume to view my full professional background, 
                including detailed project descriptions, technical skills, and achievements.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  className="glow-effect"
                  onClick={handleDownload}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open('mailto:naveendg101@gmail.com?subject=Resume Request', '_blank')}
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Request Updated Copy
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
