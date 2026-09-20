import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      year: "2024 - Present",
      title: "Full Stack Developer",
      subtitle: "Personal & Academic Projects",
      desc: "Architected and developed full-stack applications like AgroConnect and Construction Worker Safety Portal using React, Spring Boot, and Node.js."
    },
    {
      year: "2023 - 2024",
      title: "DSA & Problem Solving",
      subtitle: "LeetCode & GeeksForGeeks",
      desc: "Solved 170+ algorithmic challenges. Built strong foundations in Data Structures, OOPs, and core computer science fundamentals."
    },
    {
      year: "2022 - 2023",
      title: "Open Source & Hackathons",
      subtitle: "Active Contributor",
      desc: "Participated in university hackathons and collaborated on open-source initiatives to build practical, community-driven software."
    }
  ];

  return (
    <section id="experience" className="relative w-full py-24 sm:py-32 px-6 sm:px-12 bg-brand-bg">
      <div className="max-w-[1000px] mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center sm:items-start mb-20 sm:mb-24"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[12px] font-bold tracking-[0.2em] text-brand-gold uppercase">04 //</span>
            <div className="w-12 h-[1px] bg-brand-gold/50"></div>
          </div>
          <h2 className="font-space font-extrabold text-[40px] sm:text-[56px] text-white uppercase tracking-tight">
            EXPERIENCE & ACHIEVEMENTS
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-brand-border/50 ml-4 sm:ml-8 pl-8 sm:pl-16 flex flex-col gap-16">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] sm:-left-[73px] top-1 w-4 h-4 rounded-full border-2 border-brand-gold bg-brand-bg group-hover:scale-150 group-hover:bg-brand-gold transition-all duration-300"></div>
              
              <div className="flex flex-col">
                <span className="font-space text-brand-gold font-bold tracking-widest text-[14px] mb-2">{exp.year}</span>
                <h3 className="font-space text-white text-[24px] sm:text-[28px] font-bold mb-1">{exp.title}</h3>
                <h4 className="text-gray-400 font-medium text-[15px] mb-4">{exp.subtitle}</h4>
                <p className="text-gray-500 leading-relaxed text-[15px] sm:text-[16px] max-w-[600px]">
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
