import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'DSA', href: '#dsa' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'CERTIFICATIONS', href: '#certifications' },
    { name: 'CONTACT', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-bg/90 backdrop-blur-lg border-b border-brand-border py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#home" className="flex items-baseline relative z-50">
          <span className="font-space font-bold text-lg sm:text-xl tracking-[0.1em] text-white">
            DINESH SIVALANKA
          </span>
          <span className="text-brand-gold text-2xl leading-[0] ml-1">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-12 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] font-semibold tracking-[0.15em] text-gray-400 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-1/2 w-0 h-[1px] bg-brand-gold group-hover:w-1/2 transition-all duration-300"></span>
              <span className="absolute -bottom-2 right-1/2 w-0 h-[1px] bg-brand-gold group-hover:w-1/2 transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Right CTA */}
        <div className="hidden lg:block relative z-50">
          <a
            href="#contact"
            className="group flex items-center gap-2 h-10 px-6 rounded-full border border-gray-600 text-white font-medium text-[13px] hover:border-brand-gold hover:text-brand-gold transition-colors"
          >
            Get In Touch 
            <ArrowUpRight size={16} className="text-gray-400 group-hover:text-brand-gold transition-colors" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white relative z-50 p-2 -mr-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 w-full bg-brand-bg border-b border-brand-border shadow-2xl p-6 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold tracking-widest text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 h-12 w-full rounded-full border border-brand-gold text-brand-gold font-medium text-[14px]"
            >
              Get In Touch <ArrowUpRight size={18} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
