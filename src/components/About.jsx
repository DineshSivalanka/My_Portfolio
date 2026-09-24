import { motion } from 'framer-motion';
import { Code, BookOpen, Cpu, GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { label: "LeetCode Solved", value: "170+", icon: <Code size={20} /> },
    { label: "Education", value: "B.Tech CSE", icon: <BookOpen size={20} /> },
    { label: "Focus", value: "Full Stack", icon: <Cpu size={20} /> }
  ];

  const educationList = [
    {
      institution: "SRKR Engineering College",
      location: "Bhimavaram, India",
      period: "Jul 2024 – Present",
      degree: "B.Tech in Computer Science & Engineering",
      score: "CGPA: 9.23",
      isCurrent: true
    },
    {
      institution: "Smt. B. Seetha Polytechnic",
      location: "Bhimavaram, India",
      period: "Sept 2021 – April 2024",
      degree: "Diploma in Computer Science & Engineering",
      score: "Percentage: 96.5%",
      isCurrent: false
    },
    {
      institution: "Govt High School Yendagandi",
      location: "Yendagandi, India",
      period: "Jun 2020 – Jun 2021",
      degree: "SSC (Secondary School Certificate)",
      score: "CGPA: 9.7",
      isCurrent: false
    }
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

        {/* Narrative & Stats */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start mb-20">
          
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

        {/* Education History Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full pt-12 border-t border-brand-border"
        >
          <div className="flex items-center gap-3 mb-10">
            <GraduationCap className="text-brand-gold" size={26} />
            <h3 className="font-space font-bold text-[24px] sm:text-[28px] text-white uppercase tracking-tight">
              EDUCATION JOURNEY
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {educationList.map((edu, idx) => (
              <div 
                key={idx} 
                className="glass-card p-6 sm:p-8 flex flex-col justify-between relative group hover:border-brand-gold/60 transition-all duration-500"
              >
                {edu.isCurrent && (
                  <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider text-brand-gold bg-brand-gold/10 border border-brand-gold/30 px-2.5 py-1 rounded-full">
                    Current
                  </span>
                )}
                <div>
                  <div className="flex items-center gap-2 text-[12px] text-brand-gold font-mono font-medium mb-3">
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                  </div>
                  <h4 className="font-space text-[18px] sm:text-[20px] font-bold text-white mb-2 group-hover:text-brand-gold transition-colors">
                    {edu.institution}
                  </h4>
                  <div className="flex items-center gap-1.5 text-[13px] text-gray-400 mb-4">
                    <MapPin size={13} className="text-gray-500" />
                    <span>{edu.location}</span>
                  </div>
                  <p className="text-[14px] text-gray-300 font-medium leading-relaxed mb-6">
                    {edu.degree}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] text-gray-500 uppercase tracking-wider font-semibold flex items-center gap-1">
                    <Award size={13} className="text-brand-gold" /> Performance
                  </span>
                  <span className="text-[14px] font-bold text-brand-gold font-mono">
                    {edu.score}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
