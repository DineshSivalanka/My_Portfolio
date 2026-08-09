import { motion } from 'framer-motion';
import { Coffee, Server, Layout, BookOpen, GitBranch } from 'lucide-react';
import './About.css';

const About = () => {
  const loves = [
    { title: 'Java', icon: <Coffee size={24} />, desc: 'Core language for problem solving.' },
    { title: 'Backend', icon: <Server size={24} />, desc: 'Building scalable REST APIs with Spring Boot.' },
    { title: 'React', icon: <Layout size={24} />, desc: 'Crafting interactive modern UIs.' },
    { title: 'DSA', icon: <BookOpen size={24} />, desc: 'Analyzing algorithms and optimizing solutions.' },
    { title: 'Open Source', icon: <GitBranch size={24} />, desc: 'Contributing to GSSoC and giving back.' },
  ];

  const timeline = [
    { title: 'Started Programming', desc: 'Curious to build and explore.' },
    { title: 'Learned Java', desc: 'Fell in love with the language.' },
    { title: 'Solved DSA Problems', desc: 'Building problem-solving skills.' },
    { title: 'Built Full Stack Projects', desc: 'Turned ideas into real solutions.' },
    { title: 'Open Source Contributor', desc: 'Giving back to the community.' },
    { title: 'Preparing for Placements', desc: 'Stronger every day.' },
  ];

  return (
    <section id="about" className="about-section section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title text-gradient">About Me</h2>
          <p className="section-subtitle">Developer. Problem Solver. Lifelong Learner.</p>
        </motion.div>
        
        <div className="about-grid">
          {/* My Story */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="about-card story-card glass"
          >
            <h3>My Story</h3>
            <p>
              I'm Dinesh Sivalanka, a passionate Java Full Stack Developer who loves building real-world applications and solving challenging problems. I enjoy turning ideas into impactful solutions and continuously learning new technologies to grow every day.
            </p>
            <div className="education-timeline mt-4">
              <h4>Education</h4>
              <div className="edu-item">
                <div className="edu-dot"></div>
                <div>
                  <h5>SSC</h5>
                  <span>Completed</span>
                </div>
              </div>
              <div className="edu-item">
                <div className="edu-dot"></div>
                <div>
                  <h5>Diploma in Computer Engineering</h5>
                  <span>96.5% | Smt.B.Seetha Polytechnic</span>
                </div>
              </div>
              <div className="edu-item">
                <div className="edu-dot"></div>
                <div>
                  <h5>B.Tech in Computer Science</h5>
                  <span>2024 - 2027 | SRKR Engineering College</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="about-right-col">
            {/* What I Love */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="about-card glass"
            >
              <h3>What I Love</h3>
              <div className="loves-grid">
                {loves.map((item, index) => (
                  <div key={index} className="love-item">
                    <div className="love-icon">{item.icon}</div>
                    <span>{item.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* My Journey */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="about-card glass mt-4"
            >
              <h3>My Journey</h3>
              <div className="journey-timeline">
                {timeline.map((item, index) => (
                  <div key={index} className="journey-item">
                    <div className="journey-dot"></div>
                    <div className="journey-content">
                      <h5>{item.title}</h5>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
