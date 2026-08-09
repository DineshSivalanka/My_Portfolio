import { motion } from 'framer-motion';
import { Briefcase, Award, FileBadge, ExternalLink } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      type: 'Internship',
      title: 'MERN Full Stack Development',
      org: 'EduSkills',
      duration: '2023 - 2024',
      desc: 'Developed full stack web applications and gained hands-on experience in modern web technologies.'
    },
    {
      type: 'Open Source',
      title: 'GSSoC Contributor',
      org: 'GirlScript Summer of Code',
      duration: '2024',
      desc: 'Contributed to open source projects, resolving issues and adding new features to existing codebases.'
    },
    {
      type: 'Internship',
      title: 'AWS Cloud Computing - DevOps',
      org: 'APSSDC',
      duration: '2023',
      desc: 'Learned cloud infrastructure, deployment pipelines, and basic DevOps practices.'
    }
  ];

  const certificates = [
    { name: 'AWS Cloud Practitioner', issuer: 'AWS', link: '#' },
    { name: 'Java Basics', issuer: 'HackerRank', link: '#' },
    { name: 'Python Essentials', issuer: 'Cisco NetAcad', link: '#' },
    { name: 'NPTEL Certification', issuer: 'NPTEL', link: '#' },
    { name: 'Oracle Cloud Infrastructure', issuer: 'Oracle', link: '#' },
    { name: 'Infosys Springboard', issuer: 'Infosys', link: '#' }
  ];

  const achievements = [
    { year: '2024', title: 'Top Performer in GSSoC', desc: 'Recognized for consistent contributions.' },
    { year: '2023', title: 'College Hackathon Winner', desc: 'Built an innovative solution for agriculture.' },
    { year: '2023', title: 'CodeChef 3 Star Rating', desc: 'Consistent performance in coding contests.' }
  ];

  return (
    <section id="experience" className="experience-section section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title text-gradient">Experience & Achievements</h2>
          <p className="section-subtitle">My professional journey and recognitions.</p>
        </motion.div>

        <div className="experience-grid">
          {/* Experience & Roles */}
          <div className="exp-left-col">
            <h3 className="sub-heading"><Briefcase size={24} /> Experience & Roles</h3>
            <div className="exp-timeline">
              {experiences.map((exp, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="exp-card glass"
                >
                  <span className="exp-type">{exp.type}</span>
                  <h4>{exp.title}</h4>
                  <div className="exp-meta">
                    <span className="exp-org">{exp.org}</span>
                    <span className="exp-duration">{exp.duration}</span>
                  </div>
                  <p>{exp.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="exp-right-col">
            {/* Certificates */}
            <h3 className="sub-heading"><FileBadge size={24} /> Certifications</h3>
            <div className="certs-grid">
              {certificates.map((cert, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="cert-card glass"
                >
                  <h5>{cert.name}</h5>
                  <span className="cert-issuer">{cert.issuer}</span>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                    View <ExternalLink size={14} />
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Achievements Timeline */}
            <h3 className="sub-heading mt-4"><Award size={24} /> Achievements</h3>
            <div className="achievements-timeline">
              {achievements.map((ach, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="achievement-item"
                >
                  <div className="ach-year">{ach.year}</div>
                  <div className="ach-content glass">
                    <h5>{ach.title}</h5>
                    <p>{ach.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
