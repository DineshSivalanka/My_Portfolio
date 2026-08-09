import { motion } from 'framer-motion';
import { Mail, MapPin, User as Linkedin, GitBranch as Github, MessageCircle as Twitter, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <div className="contact-grid">
          {/* Left Side: Info & Availability */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-info"
          >
            <h2 className="section-title">Let's Connect</h2>
            <p className="contact-subtitle">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>

            <div className="contact-details mt-4">
              <div className="contact-item">
                <div className="contact-icon"><Mail size={20} /></div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:sivalankadinesh2005@gmail.com">sivalankadinesh2005@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><MapPin size={20} /></div>
                <div>
                  <h4>Location</h4>
                  <span>Yendagandi, India</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><Linkedin size={20} /></div>
                <div>
                  <h4>LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/dinesh-venkata-kumar-sivalanka-5348842a9/" target="_blank" rel="noopener noreferrer">DineshSivalanka</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><Github size={20} /></div>
                <div>
                  <h4>GitHub</h4>
                  <a href="https://github.com/DineshSivalanka" target="_blank" rel="noopener noreferrer">DineshSivalanka</a>
                </div>
              </div>
            </div>

            <div className="social-links-inline mt-4">
              <a href="#" className="social-icon-link"><Github size={20} /></a>
              <a href="https://www.linkedin.com/in/dinesh-venkata-kumar-sivalanka-5348842a9/" target="_blank" rel="noopener noreferrer" className="social-icon-link"><Linkedin size={20} /></a>
              <a href="#" className="social-icon-link"><Twitter size={20} /></a>
              <a href="#" className="social-icon-link"><Mail size={20} /></a>
            </div>

            <div className="availability mt-4">
              <h4>Available For</h4>
              <div className="availability-tags">
                <span className="avail-tag">Internships</span>
                <span className="avail-tag">Full-Time</span>
                <span className="avail-tag">Freelance</span>
              </div>
            </div>
            
            <p className="footer-quote mt-4">"Code. Learn. Build. Repeat." 🚀</p>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-form-container glass"
          >
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" id="name" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" id="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" id="subject" name="subject" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn">
                <Send size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
