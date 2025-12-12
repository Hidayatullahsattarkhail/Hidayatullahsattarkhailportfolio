import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: 'React', level: 95, color: 'from-primary to-primary-glow' },
    { name: 'TypeScript', level: 90, color: 'from-blue-400 to-blue-600' },
    { name: 'Node.js', level: 85, color: 'from-green-400 to-green-600' },
    { name: 'Three.js', level: 80, color: 'from-accent to-purple-400' },
    { name: 'Python', level: 75, color: 'from-yellow-400 to-yellow-600' },
    { name: 'UI/UX Design', level: 85, color: 'from-pink-400 to-pink-600' },
  ];

  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Three.js', icon: '🎮' },
    { name: 'Figma', icon: '🎨' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Docker', icon: '🐳' },
  ];

  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Expertise
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient-primary">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated collection of tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skills Bars */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground text-sm">{skill.level}%</span>
                </div>
                <div className="h-3 rounded-full bg-secondary overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.4 + index * 0.1 }}
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                    style={{
                      boxShadow: '0 0 20px hsl(175 80% 50% / 0.3)',
                    }}
                  />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Technology Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card rounded-xl p-6 text-center cursor-pointer hover:border-primary/30 transition-colors duration-300"
              >
                <div className="text-3xl mb-3">{tech.icon}</div>
                <div className="text-sm font-medium">{tech.name}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
