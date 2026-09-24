import { GithubIcon, LinkedinIcon, LeetcodeIcon, MailIcon } from './SocialIcons';

const Footer = () => {
  return (
    <footer className="w-full bg-[#030303] py-16 px-6 sm:px-12 border-t border-brand-border">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex flex-col items-center md:items-start">
          <span className="font-space font-bold text-xl tracking-[0.15em] text-white mb-2">
            DINESH SIVALANKA<span className="text-brand-gold">.</span>
          </span>
          <span className="text-[13px] text-gray-500 font-medium tracking-wide uppercase">
            Software Developer & AI Enthusiast
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/DineshSivalanka" target="_blank" rel="noopener noreferrer" title="GitHub" className="text-gray-500 hover:text-brand-gold transition-colors">
            <GithubIcon size={20} />
          </a>
          <a href="https://www.linkedin.com/in/dinesh-venkata-kumar-sivalanka-5348842a9/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="text-gray-500 hover:text-brand-gold transition-colors">
            <LinkedinIcon size={20} />
          </a>
          <a href="https://leetcode.com/u/sivalankadinesh2005/" target="_blank" rel="noopener noreferrer" title="LeetCode" className="text-gray-500 hover:text-brand-gold transition-colors">
            <LeetcodeIcon size={20} />
          </a>
          <a href="mailto:sivalankadinesh2005@gmail.com" title="Email" className="text-gray-500 hover:text-brand-gold transition-colors">
            <MailIcon size={20} />
          </a>
        </div>

      </div>
      
      <div className="max-w-[1200px] mx-auto mt-12 pt-8 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[12px] text-gray-600">
          © 2026 Dinesh Sivalanka. All rights reserved.
        </p>
        <p className="text-[12px] text-gray-600">
          Designed with purpose. Built with passion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
