import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'AI Dashboard',
      description: 'A comprehensive analytics dashboard with real-time data visualization and AI-powered insights.',
      tags: ['React', 'TypeScript', 'D3.js', 'Python'],
      color: 'from-primary/20 to-blue-500/20',
      accent: 'primary',
    },
    {
      title: '3D Configurator',
      description: 'Interactive 3D product configurator with WebGL rendering and real-time customization.',
      tags: ['Three.js', 'React', 'WebGL', 'Node.js'],
      color: 'from-accent/20 to-pink-500/20',
      accent: 'accent',
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration and inventory management.',
      tags: ['Next.js', 'Stripe', 'PostgreSQL', 'AWS'],
      color: 'from-green-500/20 to-teal-500/20',
      accent: 'primary',
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication and real-time transactions.',
      tags: ['React Native', 'Node.js', 'MongoDB', 'Redux'],
      color: 'from-orange-500/20 to-yellow-500/20',
      accent: 'accent',
    },
  ];

  return (
    <section id="projects" className="relative py-32 px-6">
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
            A selection of my recent work showcasing innovative solutions and creative designs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.color} blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300`} />
              
              <div className="relative glass-card rounded-2xl p-8 h-full border border-border hover:border-primary/30 transition-colors duration-300">
                {/* Project Preview Placeholder */}
                <div className={`h-48 rounded-xl mb-6 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
                  <div className="text-6xl opacity-50">🚀</div>
                </div>
                
                <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-glow transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
