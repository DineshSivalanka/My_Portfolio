import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "LANGUAGES",
      skills: ["Java", "JavaScript", "TypeScript", "Python", "SQL"]
    },
    {
      title: "FRONTEND",
      skills: ["React.js", "HTML5", "CSS3", "Axios"]
    },
    {
      title: "BACKEND",
      skills: ["Spring Boot", "Node.js", "Express.js", "REST APIs"]
    },
    {
      title: "DATABASE",
      skills: ["PostgreSQL", "MySQL", "MongoDB"]
    },
    {
      title: "TOOLS & CLOUD",
      skills: ["Git", "GitHub", "Postman", "AWS", "Vercel", "Render"]
    },
    {
      title: "DSA & CS FUNDAMENTALS",
      skills: ["Data Structures", "Algorithms", "OOP", "DBMS", "Operating Systems"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="relative w-full py-24 sm:py-32 px-6 sm:px-12 bg-brand-bg">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center sm:items-start mb-16 sm:mb-24"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[12px] font-bold tracking-[0.2em] text-brand-gold uppercase">02 //</span>
            <div className="w-12 h-[1px] bg-brand-gold/50"></div>
          </div>
          <h2 className="font-space font-extrabold text-[40px] sm:text-[56px] text-white uppercase tracking-tight">
            SKILLS
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="glass-card p-8 group hover:-translate-y-2 hover:border-brand-gold transition-all duration-500"
            >
              <h3 className="font-space text-[15px] font-bold tracking-[0.15em] text-white uppercase mb-6 flex items-center gap-3">
                <span className="w-2 h-2 bg-brand-gold rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[13px] text-gray-300 font-medium group-hover:border-brand-gold/40 group-hover:bg-brand-gold/5 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
