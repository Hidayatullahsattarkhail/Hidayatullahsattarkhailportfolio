import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: '4+', label: 'Years Experience' },
    { value: '10+', label: 'Projects Completed' },
    { value: '3', label: 'Semesters B.Sc AI' },
    { value: '6+', label: 'Certifications' },
  ];

  return (
    <section id="about" className="relative py-32 px-6">
      {/* Background Elements */}
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-accent/10 rounded-full blur-[100px]" />
      
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Glowing border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/50 to-accent/50 blur-xl opacity-50" />
              
              {/* Image placeholder - glass card with 3D effect */}
              <div className="relative glass-card rounded-3xl p-8 h-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
                <div className="relative z-10 text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="text-5xl font-display font-bold text-primary-foreground">HU</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-2">Hidayat Ullah</h3>
                  <p className="text-muted-foreground">AI Student & Developer</p>
                  <p className="text-sm text-primary mt-2">PAF-IAST University</p>
                </div>
                
                {/* Floating elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-10 right-10 w-16 h-16 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/30"
                />
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute bottom-20 left-10 w-12 h-12 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30"
                />
              </div>
            </div>
          </motion.div>
          
          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              About Me
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              AI Explorer &{' '}
              <span className="text-gradient-primary">Innovator</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm a B.Sc Artificial Intelligence student at Pak-Austria Fachhochschule (PAF-IAST), 
              passionate about Machine Learning, Deep Learning, and Computer Vision. My goal is 
              to become an AI Researcher and build real-time AI solutions.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Beyond academics, I've taken leadership roles as Director of Social Media at IEEE 
              Student Branch, Director of Marketing at Hult Prize, and Director of Volleyball Society. 
              I also founded a motivational YouTube channel with 4+ years of content creation experience.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="glass-card rounded-xl p-4 text-center"
                >
                  <div className="text-2xl md:text-3xl font-display font-bold text-gradient-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
