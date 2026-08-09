import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, GitBranch as Github } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filters = ['All', 'Full Stack', 'Frontend', 'AI/ML'];

  const projects = [
    {
      title: 'AI Agriculture Assistant',
      description: 'An AI-powered platform that helps farmers analyze crops and get disease predictions using Machine Learning and real-time data.',
      category: 'AI/ML',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      tags: ['React', 'Spring Boot', 'Python', 'ML'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Construction Worker Portal',
      description: 'A portal to manage workers, projects, and attendance with admin and worker modules. Includes secure JWT authentication.',
      category: 'Full Stack',
      image: 'https://images.unsplash.com/photo-1541888087625-f810f1ce2f81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      tags: ['React', 'Spring Boot', 'PostgreSQL'],
      github: '#',
      demo: '#'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with product management, cart, payments, and order tracking.',
      category: 'Full Stack',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      tags: ['React', 'Spring Boot', 'MySQL'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Task Manager App',
      description: 'A productivity app to manage tasks, set priorities, and track progress with real-time updates.',
      category: 'Frontend',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      tags: ['React', 'Node.js', 'Firebase'],
      github: '#',
      demo: '#'
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects-section section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title text-gradient">My Projects</h2>
          <p className="section-subtitle">Building ideas into reality</p>
        </motion.div>

        {/* Filters */}
        <div className="projects-filter">
          {filters.map((f, idx) => (
            <button 
              key={idx} 
              className={`filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        
        <motion.div layout className="projects-grid">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.title} 
                className="project-card glass"
              >
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-overlay">
                    <div className="project-links-overlay">
                      <a href={project.demo} className="btn btn-primary btn-sm">Live Demo <ExternalLink size={14} style={{marginLeft: '4px'}}/></a>
                      <a href={project.github} className="btn btn-outline btn-sm">GitHub <Github size={14} style={{marginLeft: '4px'}}/></a>
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="project-tag">{tag}</span>
                    ))}
                  </div>
                  
                  {/* Buttons for Mobile or static view */}
                  <div className="project-mobile-links">
                    <a href={project.demo} className="btn btn-primary btn-sm">Live Demo</a>
                    <a href={project.github} className="btn btn-outline btn-sm">GitHub</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="view-all-container">
          <a href="#" className="btn btn-outline">View All Projects →</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
