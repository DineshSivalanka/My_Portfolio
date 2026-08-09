import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FileText, Mail, Code, Terminal, Database, Zap } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section section">
      {/* Background Floating Elements */}
      <div className="animated-bg">
        <motion.div animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }} transition={{ repeat: Infinity, duration: 5 }} className="floating-icon icon-2"><Terminal size={30} /></motion.div>
        <motion.div animate={{ y: [0, -15, 0], opacity: [0.4, 0.7, 0.4] }} transition={{ repeat: Infinity, duration: 3.5 }} className="floating-icon icon-3"><Database size={35} /></motion.div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-badge"
          >
            <span className="badge-text">✨ Welcome to my Portfolio</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hero-subtitle-top"
          >
            Hi, I'm
          </motion.h2>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hero-title text-gradient"
          >
            Sivalanka Dinesh Venkata Kumar
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hero-description"
          >
            Java Full Stack Developer | Problem Solver | React & Spring Boot Enthusiast
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hero-typing"
          >
            <TypeAnimation
              sequence={[
                'Java Full Stack Developer',
                2000,
                'React Developer',
                2000,
                'DSA Enthusiast',
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="typing-text"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hero-cta"
          >
            <a href="#contact" className="btn btn-primary">Get in Touch <Mail size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} /></a>
            <div className="social-icons" style={{ display: 'flex', gap: '0.8rem' }}>
              <a href="https://www.linkedin.com/in/dinesh-venkata-kumar-sivalanka-5348842a9/" target="_blank" rel="noopener noreferrer" className="btn-icon linkedin-btn" title="LinkedIn">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://github.com/DineshSivalanka" target="_blank" rel="noopener noreferrer" className="btn-icon github-btn" title="GitHub">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="https://leetcode.com/u/sivalankadinesh2005/" target="_blank" rel="noopener noreferrer" className="btn-icon leetcode-btn" title="LeetCode">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.541l5.967 5.68c.8.705 2.015.705 2.815 0l5.807-5.52a5.96 5.96 0 0 0 1.583-2.617 5.57 5.57 0 0 0 .093-2.628 5.485 5.485 0 0 0-.903-2.031l-3.805-4.11L14.444.438A1.374 1.374 0 0 0 13.483 0zm0 2.663c.123 0 .245.048.339.141l3.69 3.99 3.551 3.842a2.803 2.803 0 0 1 .462 1.041 2.863 2.863 0 0 1-.047 1.348 3.267 3.267 0 0 1-.871 1.438l-5.807 5.52c-.407.359-1.018.359-1.425 0l-5.967-5.68a3.243 3.243 0 0 1-.692-.843 3.13 3.13 0 0 1-.19-.548 2.818 2.818 0 0 1-.032-1.216 2.564 2.564 0 0 1 .59-1.02l3.854-4.127 5.176-5.545a.48.48 0 0 1 .68 0 .48.48 0 0 1 0 .68l-5.176 5.545-3.642 3.9c-.114.122-.162.29-.136.46a1.182 1.182 0 0 0 .014.509 1.488 1.488 0 0 0 .324.64l5.967 5.68c.11.096.255.143.4.143s.29-.047.4-.143l5.807-5.52a1.6 1.6 0 0 0 .426-.704 1.258 1.258 0 0 0 .02-.593 1.183 1.183 0 0 0-.197-.432l-3.551-3.842-3.69-3.99c-.187-.202-.5-.202-.68 0l-5.176 5.545a.48.48 0 0 1-.68 0 .48.48 0 0 1 0-.68l5.176-5.545a1.442 1.442 0 0 1 1.034-.413zM6.93 11.238l4.316 4.545a.48.48 0 0 1 0 .68.48.48 0 0 1-.68 0l-4.316-4.545a.48.48 0 0 1 0-.68.48.48 0 0 1 .68 0zm7.151-6.17l-4.316-4.545a.48.48 0 0 1 0-.68.48.48 0 0 1 .68 0l4.316 4.545a.48.48 0 0 1 0 .68.48.48 0 0 1-.68 0z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hero-image-container"
        >
          <div className="hero-profile-wrapper animate-float">
            <div className="hero-profile-inner">
              <img src="/profile.jpeg" alt="Dinesh Sivalanka" className="hero-profile-img" />
            </div>
            
            {/* Overlay and Tech Icons */}
            
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
