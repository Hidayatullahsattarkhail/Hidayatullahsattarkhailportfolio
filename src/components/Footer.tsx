import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative py-8 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-muted-foreground text-sm"
        >
          © 2024 Hidayat Ullah. Built with passion for AI & Innovation.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-2 text-sm text-muted-foreground"
        >
          <span>Built with</span>
          <span className="text-primary">React</span>
          <span>&</span>
          <span className="text-accent">Three.js</span>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
