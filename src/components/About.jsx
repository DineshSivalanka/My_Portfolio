import { motion } from 'framer-motion';
import { Code, BookOpen, Cpu } from 'lucide-react';

const About = () => {
  const stats = [
    { label: "LeetCode Solved", value: "170+", icon: <Code size={20} /> },
    { label: "Education", value: "B.Tech CSE", icon: <BookOpen size={20} /> },
    { label: "Focus", value: "Full Stack", icon: <Cpu size={20} /> }
  ];

  return (
    <section id="about" className="relative w-full py-24 sm:py-32 px-6 sm:px-12 bg-brand-bg">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center sm:items-start mb-16 sm:mb-24"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[12px] font-bold tracking-[0.2em] text-brand-gold uppercase">01 //</span>
            <div className="w-12 h-[1px] bg-brand-gold/50"></div>
          </div>
          <h2 className="font-space font-extrabold text-[40px] sm:text-[56px] text-white uppercase tracking-tight">
            ABOUT ME
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Main Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <h3 className="font-script text-[28px] sm:text-[36px] text-brand-gold-muted leading-snug mb-8">
              "Translating complex problems into elegant, scalable solutions through clean architecture."
            </h3>
            
            <div className="space-y-6 text-gray-400 text-[15px] sm:text-[16px] leading-relaxed max-w-[650px]">
              <p>
                As a final year B.Tech Computer Science Engineering student, I possess a deep fascination for software development and artificial intelligence. My journey is defined by a relentless curiosity to understand how things work under the hood.
              </p>
              <p>
                My expertise centers around building robust backend systems and dynamic user interfaces. I primarily work with <span className="text-gray-200 font-medium">Java</span>, <span className="text-gray-200 font-medium">Python</span>, and <span className="text-gray-200 font-medium">JavaScript</span>. 
                I specialize in developing RESTful APIs and microservices using <span className="text-gray-200 font-medium">Spring Boot</span> and <span className="text-gray-200 font-medium">Node.js</span>, while utilizing <span className="text-gray-200 font-medium">React.js</span> to craft responsive and intuitive frontend experiences.
              </p>
              <p>
                Whether it involves optimizing <span className="text-gray-200 font-medium">PostgreSQL</span> or <span className="text-gray-200 font-medium">MongoDB</span> databases, or tackling complex Data Structures & Algorithms challenges, I approach every task with a focus on writing maintainable and efficient code.
              </p>
            </div>
          </motion.div>

          {/* Stats & Highlights Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[380px] flex flex-col gap-6"
          >
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="glass-card p-6 sm:p-8 group hover:border-brand-gold transition-colors duration-500"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-brand-gold">{stat.icon}</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Highlight</span>
                </div>
                <h4 className="font-space text-[28px] sm:text-[32px] font-bold text-white mb-1 group-hover:text-brand-gold transition-colors duration-500">
                  {stat.value}
                </h4>
                <p className="text-[13px] text-gray-400 font-medium tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
