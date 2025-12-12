import { motion } from 'framer-motion';

const Navigation = () => {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="glass-card rounded-full px-8 py-4 flex items-center justify-between">
          <motion.a 
            href="#home"
            className="font-display text-xl font-bold text-gradient-primary"
            whileHover={{ scale: 1.05 }}
          >
            PORTFOLIO
          </motion.a>
          
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <a
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium tracking-wide"
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </ul>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:shadow-[0_0_30px_hsl(175_80%_50%/0.5)] transition-shadow duration-300"
          >
            Let's Talk
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
