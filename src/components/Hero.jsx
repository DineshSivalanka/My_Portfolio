import { motion } from 'framer-motion';
import { Mail, ArrowRight, GitBranch as Github, User as Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 flex flex-col xl:flex-row items-center xl:items-start justify-between gap-16 xl:gap-8 relative z-10">
        
        {/* LEFT COLUMN: Main Intro */}
        <div className="flex-1 w-full max-w-[650px] flex flex-col z-20 mt-8 xl:mt-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-[2px] bg-brand-gold"></div>
            <span className="text-[12px] font-bold tracking-[0.2em] text-brand-gold uppercase">HI, I'M</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-space font-extrabold text-[clamp(45px,6vw,90px)] leading-[0.95] text-white tracking-tighter uppercase mb-8"
          >
            SIVALANKA DINESH<br />
            VENKATA KUMAR
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block border border-brand-gold/30 px-4 py-2 mb-6 self-start bg-brand-gold/5"
          >
            <h2 className="text-[14px] sm:text-[16px] font-bold tracking-[0.1em] text-brand-gold uppercase">
              SOFTWARE DEVELOPER & AI ENTHUSIAST
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white text-[18px] sm:text-[20px] font-bold mb-4 max-w-[500px] leading-snug"
          >
            Final Year B.Tech Computer Science Engineering Student
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-400 text-[15px] sm:text-[16px] mb-10 max-w-[450px] leading-relaxed"
          >
            Building practical software solutions with clean code, problem-solving and curiosity.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <a href="#projects" className="group flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-brand-gold text-black font-bold text-[14px] transition-all hover:bg-white">
              View My Work <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/Dinesh_Resume.pdf" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-2 h-12 px-8 rounded-xl border border-brand-border bg-black/20 text-white font-bold text-[14px] transition-all hover:border-brand-gold hover:text-brand-gold">
              Resume <Mail size={16} className="text-gray-400 group-hover:text-brand-gold transition-colors" />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-5"
          >
            <a href="https://github.com/DineshSivalanka" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
              <Github size={22} />
            </a>
            <a href="https://www.linkedin.com/in/dinesh-venkata-kumar-sivalanka-5348842a9/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
              <Linkedin size={22} />
            </a>
            <a href="mailto:sivalankadinesh2005@gmail.com" className="text-gray-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
              <Mail size={22} />
            </a>
          </motion.div>
        </div>

        {/* MIDDLE COLUMN: Tagline & Process */}
        <div className="hidden lg:flex flex-col flex-1 max-w-[280px] xl:max-w-[300px] z-20 mt-12 xl:mt-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-16"
          >
            <h3 className="font-script text-[42px] leading-[1.1] text-brand-gold-muted text-glow italic">
              Better Ideas<br/>
              Brighter<br/>
              Tomorrow
            </h3>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col gap-10 border-l-[1px] border-brand-border relative pl-8"
          >
            {/* Animated Gold Line overlay */}
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1.5, delay: 1 }}
              className="absolute top-0 left-[-1px] w-[2px] bg-brand-gold/40"
            />
            
            <div className="relative group">
              <span className="font-space text-[11px] font-bold text-white mb-2 block tracking-[0.15em]">01 LEARN</span>
              <p className="text-[13px] text-gray-400 font-medium leading-relaxed group-hover:text-gray-300 transition-colors">Explore new<br/>technologies</p>
            </div>
            
            <div className="relative group">
              <span className="font-space text-[11px] font-bold text-white mb-2 block tracking-[0.15em]">02 BUILD</span>
              <p className="text-[13px] text-gray-400 font-medium leading-relaxed group-hover:text-gray-300 transition-colors">Turn ideas into<br/>solutions</p>
            </div>
            
            <div className="relative group">
              <span className="font-space text-[11px] font-bold text-white mb-2 block tracking-[0.15em]">03 CREATE</span>
              <p className="text-[13px] text-gray-400 font-medium leading-relaxed group-hover:text-gray-300 transition-colors">Build meaningful<br/>applications</p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Portrait */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full sm:w-[80%] xl:w-auto xl:flex-1 max-w-[480px] z-20 flex justify-center xl:justify-end mt-12 xl:mt-0"
        >
          <div className="relative w-full aspect-[3/4] max-h-[700px] rounded-3xl overflow-hidden glass-card p-2 group">
            {/* Inner image container */}
            <div className="w-full h-full rounded-2xl overflow-hidden relative bg-brand-card">
              <img 
                src="/profile.jpeg" 
                alt="Dinesh Sivalanka" 
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle inner shadow overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
