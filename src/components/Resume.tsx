import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, FileText, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Resume = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const resumeUrl = '/Naveen-D-G_Resume.pdf';

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Naveen-D-G_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
          <div className="glass-card p-5 sm:p-8 md:p-12 hover-glow">
            {/* Resume Preview Card */}
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center">
                <FileText className="w-12 h-12 text-primary" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold">Naveen D G</h3>
                <p className="text-primary font-mono mt-1">Python Developer | Full-Stack & Machine Learning Developer</p>
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

        {/* Embedded Resume PDF */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto mt-12"
        >
          <div className="glass-card p-4 md:p-6">
            <h3 className="text-xl font-bold mb-4 text-center">Resume Preview</h3>
          <div className="w-full rounded-lg overflow-hidden border border-border" style={{ height: '500px' }}>
            {/* On mobile, show a simpler fallback */}
              <object
                data={resumeUrl}
                type="application/pdf"
                className="w-full h-full"
              >
                <embed src={resumeUrl} type="application/pdf" className="w-full h-full" />
                <p className="text-center p-8 text-muted-foreground">
                  PDF cannot be displayed. 
                  <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="text-primary ml-1 underline">
                    Click here to view the resume
                  </a>
                </p>
              </object>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
