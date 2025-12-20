import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: 'Director Marketing Communications',
      company: 'Hult Prize PAF-IAST',
      type: 'Part-time',
      period: 'Nov 2025 - Present',
      location: 'Islamabad, Pakistan · Remote',
      description: 'Leading marketing communications strategy, social media management, and promotional campaigns.',
      skills: ['Social Media', 'Marketing', 'Copywriting', 'CRM'],
      color: 'from-primary to-blue-500',
    },
    {
      title: 'Director of Social Media',
      company: 'IEEE Student Branch PAF-IAST',
      type: 'Full-time',
      period: 'Oct 2025 - Dec 2025',
      location: 'Islamabad, Pakistan · Remote',
      description: 'Led online presence and communication strategy. Managed social media platforms, created digital campaigns, and handled video editing for promotions.',
      skills: ['Social Media Management', 'Video Editing', 'Digital Marketing', 'Content Creation'],
      color: 'from-blue-500 to-purple-500',
    },
    {
      title: 'Website Developer',
      company: 'DesignClinic.pk',
      type: 'Part-time',
      period: 'Feb 2025 - Sep 2025',
      location: 'Islamabad, Pakistan · On-site',
      description: 'Developed websites using modern web technologies including HTML, CSS, JavaScript, and Python.',
      skills: ['Web Development', 'HTML', 'Python', 'Video Editing'],
      color: 'from-green-500 to-teal-500',
    },
    {
      title: 'AI Intern',
      company: 'Youth Tech Link National Tech',
      type: 'Internship',
      period: 'Jul 2025 - Sep 2025',
      location: 'Remote',
      description: 'Artificial Intelligence internship focusing on ML models and AI applications.',
      skills: ['Artificial Intelligence', 'Machine Learning', 'Python'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Graphic Design Intern',
      company: 'ASET',
      type: 'Internship',
      period: 'Apr 2025',
      location: 'PAF-IAST University · On-site',
      description: 'Designed flyers, managed media content, and created website designs. Developed creative content for social media platforms.',
      skills: ['Graphic Design', '3D Graphics', 'Website Design'],
      color: 'from-pink-500 to-orange-500',
    },
    {
      title: 'YouTube Content Creator',
      company: 'AK Motivational',
      type: 'Part-time',
      period: 'Mar 2021 - Feb 2025',
      location: 'Pakistan',
      description: 'Founded AKMotivational603 channel focused on personal development. Led content creation and achieved significant engagement through targeted digital marketing.',
      skills: ['Video Editing', 'Live Streaming', 'Photography', 'Digital Marketing'],
      color: 'from-red-500 to-orange-500',
    },
  ];

  return (
    <section id="experience" className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[150px]" />
      
      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Career Journey
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey in technology, marketing, and creative content
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20 transform md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary transform md:-translate-x-1/2 z-10 shadow-[0_0_20px_hsl(175_80%_50%/0.6)]" />
                
                {/* Content card */}
                <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} pl-8`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="glass-card rounded-2xl p-6 border border-border card-hover-glow border-reveal transition-all duration-500 group"
                  >
                    <div className={`h-1 w-20 rounded-full bg-gradient-to-r ${exp.color} mb-4 group-hover:w-32 transition-all duration-500`} />
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Briefcase size={14} className="group-hover:text-primary transition-colors duration-300" />
                      <span>{exp.type}</span>
                    </div>
                    
                    <h3 className="font-display text-xl font-bold mb-1 group-hover:text-primary transition-colors duration-300">{exp.title}</h3>
                    <p className="text-primary font-medium mb-3">{exp.company}</p>
                    
                    <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground group-hover:bg-primary/20 group-hover:text-primary transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
