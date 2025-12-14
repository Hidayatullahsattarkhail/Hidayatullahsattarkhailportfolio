import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: 'Python', level: 90, color: 'from-blue-400 to-blue-600' },
    { name: 'Machine Learning', level: 85, color: 'from-primary to-primary-glow' },
    { name: 'Deep Learning', level: 80, color: 'from-purple-400 to-purple-600' },
    { name: 'Computer Vision', level: 75, color: 'from-green-400 to-green-600' },
    { name: 'C/C++', level: 80, color: 'from-accent to-pink-400' },
    { name: 'Web Development', level: 75, color: 'from-orange-400 to-orange-600' },
  ];

  const technologies = [
    { name: 'Python', icon: '🐍' },
    { name: 'TensorFlow', icon: '🧠' },
    { name: 'OpenCV', icon: '👁️' },
    { name: 'C++', icon: '⚡' },
    { name: 'HTML/CSS', icon: '🌐' },
    { name: 'Git', icon: '📦' },
    { name: 'Figma', icon: '🎨' },
    { name: 'Premiere Pro', icon: '🎬' },
  ];

  const certifications = [
    'Google Data Analytics',
    'Microsoft Word & Excel',
    'Data Visualization',
    'AI Pricing & ROI',
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
            AI/ML technologies and tools I use to build intelligent solutions
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
            className="space-y-8"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                  animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.08 }}
                  whileHover={{ scale: 1.1, y: -8, rotateY: 10 }}
                  className="glass-card rounded-xl p-4 text-center cursor-pointer card-hover-glow border-reveal group"
                >
                  <motion.div 
                    className="text-2xl mb-2"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    transition={{ duration: 0.3 }}
                  >
                    {tech.icon}
                  </motion.div>
                  <div className="text-xs font-medium group-hover:text-primary transition-colors duration-300">{tech.name}</div>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <h3 className="font-display text-lg font-semibold mb-4">Certifications</h3>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <motion.span
                    key={cert}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    className="px-3 py-2 text-sm rounded-lg bg-primary/10 text-primary border border-primary/20"
                  >
                    {cert}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
