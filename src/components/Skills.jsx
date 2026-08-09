import { motion } from 'framer-motion';
import { Coffee, Code, Database, Server, Layout, Wrench, Star } from 'lucide-react';
import './Skills.css';

const skillsData = [
  {
    category: 'Languages',
    icon: <Code size={24} />,
    items: [
      { name: 'Java', rating: 5, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'JavaScript', rating: 4, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'Python', rating: 4, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'C', rating: 4, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
      { name: 'SQL', rating: 4, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }
    ]
  },
  {
    category: 'Backend',
    icon: <Server size={24} />,
    items: [
      { name: 'Spring Boot', rating: 4, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      { name: 'REST APIs', rating: 4, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      { name: 'Hibernate', rating: 3, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg' },
      { name: 'JWT', rating: 4, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Maven', rating: 4, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' }
    ]
  },
  {
    category: 'Frontend',
    icon: <Layout size={24} />,
    items: [
      { name: 'React', rating: 4, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'HTML5', rating: 5, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', rating: 4, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'Bootstrap', rating: 4, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
      { name: 'Tailwind CSS', rating: 3, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' }
    ]
  },
  {
    category: 'Database',
    icon: <Database size={24} />,
    items: [
      { name: 'MySQL', rating: 4, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'PostgreSQL', rating: 4, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MongoDB', rating: 3, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' }
    ]
  },
  {
    category: 'Tools',
    icon: <Wrench size={24} />,
    items: [
      { name: 'Git', rating: 4, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', rating: 4, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'VS Code', rating: 5, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Postman', rating: 4, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title text-gradient">My Skills</h2>
          <p className="section-subtitle">Technologies I work with to build scalable solutions.</p>
        </motion.div>

        <div className="skills-categories">
          {skillsData.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="skill-category-card glass"
            >
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3>{category.category}</h3>
              </div>
              
              <div className="skills-grid">
                {category.items.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-logo-wrapper">
                      <img src={skill.icon} alt={skill.name} className="skill-logo" />
                      <div className="skill-hover-overlay">
                        <div className="stars">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={12} 
                              className={i < skill.rating ? 'star-filled' : 'star-empty'} 
                              fill={i < skill.rating ? 'currentColor' : 'none'}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
