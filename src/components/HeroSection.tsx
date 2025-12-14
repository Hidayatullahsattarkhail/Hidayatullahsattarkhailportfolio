import { motion } from 'framer-motion';
import Scene3D from './3d/Scene3D';
import profilePhoto from '@/assets/hidayat-profile.png';
import TypewriterText from './TypewriterText';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Scene3D />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      <div className="relative z-10 text-center px-6 max-w-5xl">
        {/* Profile Photo with Glowing Border and Floating Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -10, 0]
          }}
          transition={{ 
            opacity: { duration: 0.8, delay: 0.3 },
            scale: { duration: 0.8, delay: 0.3 },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
          className="mb-10"
        >
          <div className="relative inline-block">
            {/* Outer glow effect */}
            <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-50 blur-xl animate-pulse" />
            {/* Glowing ring effect */}
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-75 blur-md" />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-accent" />
            <img
              src={profilePhoto}
              alt="Hidayat Ullah"
              className="relative w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full object-cover border-4 border-background shadow-2xl"
            />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary border border-primary/30 rounded-full glass-card">
            ✦ B.S AI Student at PAF-IAST
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          Hidayat{' '}
          <span className="text-gradient-primary">Ullah</span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed h-8"
        >
          <TypewriterText 
            text="AI & Machine Learning Enthusiast | Computer Vision | Deep Learning"
            delay={1200}
            speed={40}
          />
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-muted-foreground text-base max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Passionate about building real-time AI solutions and creating immersive digital experiences
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg glow-primary transition-all duration-300 hover:shadow-[0_0_50px_hsl(175_80%_50%/0.6)]"
          >
            View My Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full glass-card border border-border font-semibold text-lg hover:border-primary/50 transition-all duration-300"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
