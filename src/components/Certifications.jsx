import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle2, Calendar, Hash, Building2, Sparkles, X } from 'lucide-react';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      id: "hackerrank-java-basic",
      title: "Java (Basic)",
      issuer: "HackerRank",
      partner: "HackerRank Skill Certification",
      recipient: "DINESH VENKATA KUMAR SIVALANKA",
      issueDate: "January 12, 2025",
      credentialType: "Certificate of Accomplishment",
      category: "Core Java & OOP",
      badgeText: "HackerRank Certified",
      code: "574B9AEEC14A",
      iconColor: "from-emerald-500/20 to-teal-500/20",
      accentBorder: "group-hover:border-emerald-500/50",
      skills: ["Java Basics", "OOP Principles", "Control Structures", "Data Types", "Logic Building"],
      description: "Passed the official HackerRank skill certification test for Java (Basic), proving competence in core Java concepts, object-oriented design, syntax, and logic."
    },
    {
      id: "python-essentials-2",
      title: "Python Essentials 2",
      issuer: "Cisco Networking Academy",
      partner: "OpenEDG Python Institute",
      recipient: "DINESH VENKATA KUMAR SIVALANKA",
      issueDate: "December 31, 2024",
      credentialType: "Statement of Achievement",
      category: "Programming & OOP",
      badgeText: "Student Level Credential",
      code: "CISCO-PCAP-2024",
      iconColor: "from-blue-500/20 to-cyan-500/20",
      accentBorder: "group-hover:border-blue-500/50",
      skills: ["Python 3", "OOP Categories", "Multi-Module Programs", "Refactoring", "PCAP Prep"],
      description: "Achieved student level credential for completing Python Essentials 2, demonstrating proficiency in designing multi-module Python 3 programs and OOP architectures."
    },
    {
      id: "python-essentials-1",
      title: "Python Essentials 1",
      issuer: "Cisco Networking Academy",
      partner: "OpenEDG Python Institute",
      recipient: "DINESH VENKATA KUMAR SIVALANKA",
      issueDate: "December 27, 2024",
      credentialType: "Statement of Achievement",
      category: "Python Fundamentals",
      badgeText: "Student Level Credential",
      code: "CISCO-PCEP-2024",
      iconColor: "from-indigo-500/20 to-blue-500/20",
      accentBorder: "group-hover:border-indigo-500/50",
      skills: ["Python 3 Basics", "Algorithmic Thinking", "Python Standard Library", "Debugging", "PCEP Prep"],
      description: "Achieved student level credential for completing Python Essentials 1, mastering core Python semantics, algorithmic problem solving, and standard library tools."
    },
    {
      id: "intro-numpy",
      title: "Introduction to NumPy",
      issuer: "Simplilearn SkillUp",
      partner: "SkillUp Academy",
      recipient: "Dinesh Venkata Kumar",
      issueDate: "January 14, 2025",
      credentialType: "Certificate of Completion",
      category: "Data Science & Python",
      badgeText: "Verified Certificate",
      code: "7771762",
      iconColor: "from-amber-500/20 to-yellow-500/20",
      accentBorder: "group-hover:border-brand-gold/50",
      skills: ["NumPy Arrays", "Data Analysis", "Numerical Computing", "Python Data Science"],
      description: "Demonstrated initiative and commitment to deepening data analysis capabilities by completing numerical computing and vector math operations using NumPy."
    },
    {
      id: "figma-uiux-workshop",
      title: "Figma & UI/UX Workshop",
      issuer: "Association of Computer Engineers (ACE)",
      partner: "Dept. of CSE, SRKR Engineering College",
      recipient: "S Dinesh Venkata Kumar",
      issueDate: "2024",
      credentialType: "Certificate of Appreciation",
      category: "UI/UX & Product Design",
      badgeText: "Departmental Workshop",
      code: "ACE-SRKREC-UIUX",
      iconColor: "from-purple-500/20 to-pink-500/20",
      accentBorder: "group-hover:border-purple-500/50",
      skills: ["UI/UX Basics", "Figma Design", "Wireframing", "Prototyping", "User Centric Design"],
      description: "Successfully learnt the fundamentals of UI/UX design and Figma prototyping by attending the official workshop organized by ACE, Department of Computer Science & Engineering."
    }
  ];

  return (
    <section id="certifications" className="relative w-full py-24 sm:py-32 px-6 sm:px-12 bg-brand-bg">
      <div className="max-w-[1200px] mx-auto">
        
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
            CERTIFICATIONS
          </h2>
          <p className="text-gray-400 text-[15px] sm:text-[16px] max-w-[500px] mt-2">
            Verified technical achievements and certifications from globally recognized academies and institutions.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              onClick={() => setSelectedCert(cert)}
              className={`glass-card p-6 sm:p-8 flex flex-col justify-between relative group cursor-pointer transition-all duration-500 border border-brand-border ${cert.accentBorder} hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(253,224,71,0.12)]`}
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-gold bg-brand-gold/10 border border-brand-gold/30 px-3 py-1 rounded-full flex items-center gap-1.5">
                    <ShieldCheck size={13} className="text-brand-gold" />
                    {cert.badgeText}
                  </span>
                  <span className="text-[11px] font-mono text-gray-500 font-medium">
                    {cert.category}
                  </span>
                </div>

                {/* Issuer Info */}
                <div className="flex items-center gap-2 text-[13px] text-gray-400 mb-2 font-medium">
                  <Building2 size={15} className="text-brand-gold" />
                  <span>{cert.issuer}</span>
                </div>

                {/* Title */}
                <h3 className="font-space font-bold text-[22px] sm:text-[24px] text-white mb-3 leading-snug group-hover:text-brand-gold transition-colors">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-[14px] leading-relaxed mb-6 line-clamp-3">
                  {cert.description}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.skills.slice(0, 3).map((skill, sIdx) => (
                    <span key={sIdx} className="text-[11px] font-medium text-gray-300 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-md">
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="text-[11px] font-medium text-brand-gold bg-brand-gold/5 px-2 py-0.5 rounded-md">
                      +{cert.skills.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[12px] text-gray-500 font-mono">
                <div className="flex items-center gap-1.5">
                  <Calendar size={13} className="text-gray-400" />
                  <span>{cert.issueDate}</span>
                </div>
                {cert.code && (
                  <div className="flex items-center gap-1 text-brand-gold font-semibold">
                    <Hash size={12} />
                    <span>{cert.code}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal View for Certificate Details */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="glass-card max-w-[650px] w-full p-8 relative border border-brand-gold/40 shadow-2xl bg-[#0c0c0c]"
              >
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-6 right-6 text-gray-400 hover:text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>

                <div className="flex items-center gap-2 text-brand-gold text-[12px] font-bold tracking-widest uppercase mb-3">
                  <Award size={18} /> Verified Certificate
                </div>

                <h3 className="font-space font-extrabold text-[28px] sm:text-[32px] text-white uppercase tracking-tight mb-2">
                  {selectedCert.title}
                </h3>

                <p className="text-gray-400 text-[14px] mb-6">
                  Issued by <span className="text-white font-semibold">{selectedCert.issuer}</span> {selectedCert.partner && `(${selectedCert.partner})`}
                </p>

                <div className="space-y-4 mb-6 text-[14px] text-gray-300 leading-relaxed bg-white/5 p-5 rounded-xl border border-white/10">
                  <div className="flex items-center justify-between text-[13px] text-gray-400 border-b border-white/5 pb-3">
                    <span>Credential Recipient:</span>
                    <span className="text-white font-bold font-mono">{selectedCert.recipient}</span>
                  </div>
                  <div className="flex items-center justify-between text-[13px] text-gray-400 border-b border-white/5 pb-3">
                    <span>Issue Date:</span>
                    <span className="text-brand-gold font-bold font-mono">{selectedCert.issueDate}</span>
                  </div>
                  {selectedCert.code && (
                    <div className="flex items-center justify-between text-[13px] text-gray-400 pb-1">
                      <span>Credential Code / ID:</span>
                      <span className="text-brand-gold font-mono font-bold">{selectedCert.code}</span>
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <h4 className="text-[12px] font-bold text-gray-400 uppercase tracking-wider mb-3">Verified Skills & Competencies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((skill, i) => (
                      <span key={i} className="text-[12px] font-medium text-brand-gold border border-brand-gold/30 bg-brand-gold/10 px-3 py-1 rounded-full flex items-center gap-1.5">
                        <CheckCircle2 size={13} /> {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-[13px] text-gray-400 leading-relaxed">
                  {selectedCert.description}
                </p>

                <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="px-6 py-2.5 rounded-xl bg-brand-gold text-black font-bold text-[13px] hover:bg-white transition-colors"
                  >
                    Close Preview
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Certifications;
