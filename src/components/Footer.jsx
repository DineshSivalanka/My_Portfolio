import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section glass">
      <div className="container">
        <div className="footer-content">
          <div className="footer-header">
            <h3>Dinesh Sivalanka</h3>
            <p style={{ maxWidth: '1000px', margin: '0 auto' }}>Java Full Stack Developer passionate about building impactful and scalable software solutions.</p>
          </div>
          <div className="footer-links">
            <a href="https://github.com/DineshSivalanka" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span className="separator">&middot;</span>
            <a href="https://www.linkedin.com/in/dinesh-venkata-kumar-sivalanka-5348842a9/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <span className="separator">&middot;</span>
            <a href="mailto:sivalankadinesh2005@gmail.com">Email</a>
          </div>
          <p className="copyright">&copy; {new Date().getFullYear()} Dinesh Sivalanka &middot; All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
