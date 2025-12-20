import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, MapPin, Linkedin, Github, Youtube, Globe } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open email client with pre-filled content
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.open(`mailto:hidayatullahsattarkhail@gmail.com?subject=${subject}&body=${body}`);
    toast.success("Opening email client...");
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'hidayatullahsattarkhail@gmail.com' },
    { icon: MapPin, label: 'Location', value: 'Islamabad, Pakistan' },
    { icon: Globe, label: 'University', value: 'PAF-IAST, Haripur' },
  ];

  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: Github, 
      url: 'https://github.com/Hidayatullahsattarkhail',
      color: 'hover:text-foreground'
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      url: 'https://www.linkedin.com/in/hidayatullah-sattarkhail-b77b3a283/',
      color: 'hover:text-blue-400'
    },
    { 
      name: 'YouTube', 
      icon: Youtube, 
      url: 'https://www.youtube.com/@AKMotivational603',
      color: 'hover:text-red-500'
    },
    { 
      name: 'Portfolio', 
      icon: Globe, 
      url: 'https://sattarkhail.netlify.app',
      color: 'hover:text-primary'
    },
  ];

  return (
    <section id="contact" className="relative py-32 px-6">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient-primary">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interested in AI, Machine Learning, or collaboration? Let's discuss!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    <div className="font-medium text-sm md:text-base">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-border">
              <p className="text-muted-foreground mb-4">Connect with me</p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`w-12 h-12 rounded-lg glass-card flex items-center justify-center text-muted-foreground ${social.color} hover:border-primary/30 transition-all duration-300`}
                    title={social.name}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-8 space-y-6"
          >
            <div>
              <label className="text-sm font-medium mb-2 block">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                placeholder="Your Name"
                required
              />
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                placeholder="your@email.com"
                required
              />
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                placeholder="Tell me about your project or idea..."
                required
              />
            </div>
            
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:shadow-[0_0_40px_hsl(175_80%_50%/0.4)] transition-all duration-300"
            >
              <Send size={18} />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
