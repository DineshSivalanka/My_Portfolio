import { motion } from 'framer-motion';
import { Mail, GitBranch as Github, User as Linkedin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full py-24 sm:py-32 px-6 sm:px-12 bg-[#050505]">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-20">
        
        {/* Left Side - Info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[12px] font-bold tracking-[0.2em] text-brand-gold uppercase">05 //</span>
            <div className="w-12 h-[1px] bg-brand-gold/50"></div>
          </div>
          
          <h2 className="font-space font-extrabold text-[45px] sm:text-[65px] text-white leading-[1.05] uppercase tracking-tight mb-8">
            LET'S BUILD<br />
            SOMETHING<br />
            <span className="text-brand-gold-muted italic font-script capitalize font-normal text-[50px] sm:text-[75px]">Meaningful.</span>
          </h2>
          
          <p className="text-gray-400 text-[16px] sm:text-[18px] max-w-[400px] mb-12">
            Have an idea, opportunity, or project in mind? Let's connect and create something impactful together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="mailto:sivalankadinesh2005@gmail.com"
              className="flex items-center justify-center gap-3 h-14 px-8 rounded-full bg-white text-black font-bold text-[14px] hover:bg-brand-gold transition-colors"
            >
              <Mail size={18} /> Email Me
            </a>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/dinesh-venkata-kumar-sivalanka-5348842a9/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 rounded-full border border-gray-700 text-white hover:border-brand-gold hover:text-brand-gold transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/DineshSivalanka"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 rounded-full border border-gray-700 text-white hover:border-brand-gold hover:text-brand-gold transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 w-full max-w-[550px]"
        >
          <div className="glass-card p-8 sm:p-12">
            <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase">Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors placeholder:text-gray-700"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase">Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors placeholder:text-gray-700"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase">Message</label>
                <textarea 
                  placeholder="Tell me about your project..."
                  rows="4"
                  className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors placeholder:text-gray-700 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="mt-4 group flex items-center justify-between w-full h-14 px-6 rounded-xl border border-brand-gold bg-brand-gold/5 text-brand-gold font-bold text-[13px] uppercase tracking-wider hover:bg-brand-gold hover:text-black transition-all"
              >
                Send Message 
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
