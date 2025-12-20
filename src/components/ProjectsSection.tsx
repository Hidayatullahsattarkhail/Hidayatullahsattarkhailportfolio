import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Play } from 'lucide-react';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'AI Smart Gesture Mirror',
      description: 'An AI-powered smart mirror with gesture control, voice assistant, and real-time widgets for an interactive experience.',
      tags: ['Python', 'AI', 'Computer Vision', 'OpenCV'],
      color: 'from-primary/20 to-blue-500/20',
      accent: 'primary',
      github: 'https://github.com/Hidayatullahsattarkhail/AI-Smart-Gesture-Mirror',
      video: 'https://www.linkedin.com/posts/hidayatullah-sattarkhail-b77b3a283_semesterproject-projectnimbus-aiproject-activity-7405714407500009472-L3Nz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEULsQsBksNx7rB00TBMatAvmD7IkRJ6V6Q',
      emoji: '🪞',
    },
    {
      title: 'University Management System',
      description: 'Complete system for managing students, exams, fees, and transport with Python backend.',
      tags: ['Python', 'Database', 'Management System'],
      color: 'from-accent/20 to-pink-500/20',
      accent: 'accent',
      github: 'https://github.com/Hidayatullahsattarkhail/University-Management-System',
      emoji: '🎓',
    },
    {
      title: 'Hidayat\'s AI Canvas',
      description: 'AI-powered creative canvas built with TypeScript for interactive and intelligent design experiences.',
      tags: ['TypeScript', 'AI', 'Creative Tools'],
      color: 'from-purple-500/20 to-indigo-500/20',
      accent: 'primary',
      live: 'https://hidayats-ai-canvas.lovable.app',
      emoji: '🎨',
    },
    {
      title: 'Data Structures & Algorithms',
      description: 'Comprehensive collection of DSA implementations in C++ covering fundamental computer science concepts.',
      tags: ['C++', 'DSA', 'Algorithms'],
      color: 'from-green-500/20 to-teal-500/20',
      accent: 'accent',
      github: 'https://github.com/Hidayatullahsattarkhail/Data-Structures-and-Algorithms',
      emoji: '📊',
    },
  ];

  return (
    <section id="projects" className="relative py-20 sm:py-32 px-4 sm:px-6">
      {/* Background */}
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[120px]" />
      
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            AI and software projects showcasing my skills in Machine Learning, Computer Vision, and Development
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}
              className="group relative"
            >
              {/* Animated glow background */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.color} blur-xl opacity-0 group-hover:opacity-70 transition-all duration-500`} />
              
              <div className="relative glass-card rounded-2xl p-5 sm:p-8 h-full border border-border card-hover-glow border-reveal transition-all duration-500">
                {/* Project Preview Placeholder */}
                <div className={`h-36 sm:h-48 rounded-xl mb-4 sm:mb-6 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500`}>
                  <motion.div 
                    className="text-5xl sm:text-6xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.emoji}
                  </motion.div>
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                </div>
                
                <h3 className="font-display text-xl sm:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 + tagIndex * 0.05 }}
                      className="px-2 sm:px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground group-hover:bg-primary/20 group-hover:text-primary transition-colors duration-300"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-glow transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  )}
                  {project.video && (
                    <motion.a
                      href={project.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-sm font-medium text-red-500 hover:text-red-400 transition-colors"
                    >
                      <Play size={16} />
                      Watch Demo
                    </motion.a>
                  )}
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github size={16} />
                      View Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Hidayatullahsattarkhail"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card border border-border hover:border-primary/50 transition-all duration-300"
          >
            <Github size={20} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
