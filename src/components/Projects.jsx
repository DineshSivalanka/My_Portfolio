import { motion } from 'framer-motion';
import { ArrowUpRight, GitBranch as Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: "01",
      title: "Construction Worker Safety & Employment Portal",
      description: "A comprehensive full-stack platform connecting construction workers with contractors and employers. Features include role-based access control, secure authentication, and employment-related workflow management to ensure safety and streamlined hiring processes.",
      tech: ["React.js", "Spring Boot", "PostgreSQL", "Axios", "JWT", "REST APIs"],
      image: "/project-construction.jpg",
      github: "https://github.com/DineshSivalanka/Construction-Worker-Saftey-Employment-Portal",
      demo: null,
      align: "left"
    },
    {
      id: "02",
      title: "AgroConnect",
      description: "A specialized marketplace-style platform bridging the gap between farmers and buyers. Empowers farmers to independently create, manage, and scale agricultural product listings while utilizing secure OTP authentication for verified transactions.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "OTP Auth", "REST APIs"],
      image: "/project-agroconnect.jpg",
      github: "https://github.com/DineshSivalanka/AgroConnect-Using-MERN",
      demo: "https://agro-connect-using-mern.vercel.app/",
      align: "right"
    },
    {
      id: "03",
      title: "Portfolio",
      description: "A high-end, editorial-style personal brand portfolio designed with luxury dark aesthetics, fluid framer-motion animations, and an optimized Vite architecture. Showcases professional capabilities through asymmetric design and strong typography.",
      tech: ["React.js", "Tailwind CSS", "Framer Motion", "Vite"],
      image: "/project-portfolio.jpg",
      github: "https://github.com/DineshSivalanka/My_Portfolio",
      demo: "#",
      align: "left"
    },
    {
      id: "04",
      title: "Naik Foods",
      description: "A responsive, feature-rich web application designed for online food ordering and culinary browsing. Features an intuitive food menu interface, interactive cart drawer, real-time order tracking visualizer, and seamless Netlify deployment.",
      tech: ["React.js", "JavaScript", "Tailwind CSS", "Netlify", "REST APIs"],
      image: "/project-naikfoods.jpg",
      github: "https://github.com/DineshSivalanka/naik-foods-assignment",
      demo: "https://naik-foods-assignment.netlify.app/",
      align: "right"
    }
  ];

  return (
    <section id="projects" className="relative w-full py-24 sm:py-32 px-6 sm:px-12 bg-brand-bg">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center sm:items-start mb-20 sm:mb-32"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[12px] font-bold tracking-[0.2em] text-brand-gold uppercase">04 //</span>
            <div className="w-12 h-[1px] bg-brand-gold/50"></div>
          </div>
          <h2 className="font-space font-extrabold text-[40px] sm:text-[56px] text-white uppercase tracking-tight">
            PROJECT WORKS
          </h2>
        </motion.div>

        {/* Projects List */}
        <div className="flex flex-col gap-32">
          {projects.map((project, idx) => (
            <div 
              key={project.id} 
              className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${project.align === 'right' ? 'lg:flex-row-reverse' : ''}`}
            >
              
              {/* Project Visual Area */}
              <motion.div 
                initial={{ opacity: 0, x: project.align === 'left' ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-3/5 group relative"
              >
                <div className="aspect-[16/10] w-full bg-brand-card rounded-2xl border border-brand-border overflow-hidden relative p-1 transition-transform duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(253,224,71,0.15)]">
                  {/* Mockup Container */}
                  <div className="w-full h-full bg-[#0a0a0a] rounded-xl relative overflow-hidden flex flex-col">
                    <div className="h-8 w-full border-b border-white/10 flex items-center px-4 gap-2 bg-[#121212] z-10">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                      <span className="text-[11px] font-mono text-gray-500 ml-2 truncate opacity-70">
                        https://{project.title.toLowerCase().replace(/[^a-z0-9]/g, '')}.app
                      </span>
                    </div>
                    <div className="flex-1 w-full relative overflow-hidden bg-black">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Project Info */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full lg:w-2/5 flex flex-col"
              >
                <span className="font-script text-brand-gold text-5xl mb-4 italic block leading-none">{project.id}</span>
                <h3 className="font-space text-[28px] sm:text-[32px] font-bold text-white mb-6 leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-[15px] sm:text-[16px] leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[12px] font-medium tracking-wider text-brand-gold uppercase border border-brand-gold/20 px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-2 h-12 px-6 rounded-full border border-gray-600 text-white font-medium text-[13px] hover:border-brand-gold hover:text-brand-gold transition-colors"
                    >
                      <Github size={16} /> Code
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-brand-gold text-black font-bold text-[13px] hover:bg-white transition-colors"
                    >
                      Live Demo <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </motion.div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
