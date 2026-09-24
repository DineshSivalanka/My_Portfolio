import { motion } from 'framer-motion';
import { MapPin, Calendar, Sparkles, Building2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      period: "May 2026 – Present",
      role: "Open Source Contributor",
      company: "GirlScript Summer of Code (GSSoC 2026)",
      type: "Internship · Remote",
      location: "India (Remote)",
      isCurrent: true,
      highlights: [
        "Selected for GirlScript Summer of Code 2026 (Open Source Track).",
        "Actively contributing to production open-source repositories, resolving issues, and building new software features.",
        "Mastering Git-based collaborative workflows, code reviews, and scalable system design."
      ],
      skills: ["Git", "GitHub", "Open Source", "System Design", "Code Review"]
    },
    {
      period: "May 2025 – Jun 2025",
      role: "Green Intern",
      company: "1M1B (1 Million for 1 Billion)",
      type: "Internship · Remote",
      location: "Bhimavaram, Andhra Pradesh, India",
      isCurrent: false,
      highlights: [
        "Architected an AI-powered Waste Segregation Management System as part of the 1M1B Green Internship Program.",
        "Trained a computer vision model to detect and classify waste into categories like plastic, metal, organic, and glass.",
        "Aligned the solution with UN Sustainable Development Goals (SDGs), particularly Goal 11 (Sustainable Cities) and Goal 13 (Climate Action).",
        "Gained deep insights into environmental sustainability through expert sessions and presented a live working prototype."
      ],
      skills: ["Computer Vision", "Artificial Intelligence", "Tableau", "ESG", "Sustainability Tech"]
    },
    {
      period: "Nov 2023 – May 2024",
      role: "Student Intern",
      company: "MyAccess Technologies (My Access Pvt Ltd)",
      type: "Internship · On-site",
      location: "Bhimavaram, Andhra Pradesh, India",
      isCurrent: false,
      highlights: [
        "Completed a 6-month hands-on engineering internship focused on full-stack software development and Python programming.",
        "Worked on real-world industry applications, applying basic machine learning concepts to deliver software modules.",
        "Collaborated with professional engineering teams to write clean, maintainable code and deliver innovative solutions."
      ],
      skills: ["Full-Stack Development", "Python", "REST APIs", "Machine Learning Basics", "Agile Collaboration"]
    }
  ];

  return (
    <section id="experience" className="relative w-full py-24 sm:py-32 px-6 sm:px-12 bg-brand-bg">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center sm:items-start mb-20 sm:mb-24"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[12px] font-bold tracking-[0.2em] text-brand-gold uppercase">05 //</span>
            <div className="w-12 h-[1px] bg-brand-gold/50"></div>
          </div>
          <h2 className="font-space font-extrabold text-[40px] sm:text-[56px] text-white uppercase tracking-tight">
            WORK EXPERIENCE
          </h2>
          <p className="text-gray-400 text-[15px] sm:text-[16px] max-w-[550px] mt-2">
            Real-world software development internships, AI systems engineering, and open-source contributions.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-brand-border/60 ml-4 sm:ml-8 pl-8 sm:pl-16 flex flex-col gap-16">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] sm:-left-[73px] top-1.5 w-5 h-5 rounded-full border-2 border-brand-gold bg-brand-bg group-hover:scale-125 group-hover:bg-brand-gold transition-all duration-300 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold group-hover:bg-black"></div>
              </div>
              
              <div className="glass-card p-6 sm:p-10 border border-brand-border group-hover:border-brand-gold/50 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(253,224,71,0.1)]">
                
                {/* Header Meta Info */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2 text-brand-gold font-mono text-[13px] font-semibold">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  {exp.isCurrent && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-gold bg-brand-gold/10 border border-brand-gold/30 px-3 py-1 rounded-full flex items-center gap-1.5">
                      <Sparkles size={12} /> Present Role
                    </span>
                  )}
                </div>

                {/* Role & Company */}
                <h3 className="font-space text-[24px] sm:text-[30px] font-bold text-white mb-2 group-hover:text-brand-gold transition-colors">
                  {exp.role}
                </h3>
                
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[14px] text-gray-300 font-medium mb-6">
                  <span className="text-brand-gold font-bold flex items-center gap-1.5">
                    <Building2 size={15} /> {exp.company}
                  </span>
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-400">{exp.type}</span>
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-400 flex items-center gap-1">
                    <MapPin size={13} className="text-gray-500" /> {exp.location}
                  </span>
                </div>

                {/* Highlights List */}
                <ul className="space-y-3 mb-8">
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-3 text-gray-300 text-[14px] sm:text-[15px] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {exp.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="text-[11px] font-medium tracking-wider text-brand-gold uppercase border border-brand-gold/20 bg-brand-gold/5 px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
