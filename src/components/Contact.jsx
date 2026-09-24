import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, GitBranch as Github, User as Linkedin, Send, CheckCircle2, AlertCircle, Loader2, RotateCcw, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    // If access key is configured, send via Web3Forms API
    if (accessKey && accessKey.trim() !== '') {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: accessKey.trim(),
            name: formData.name.trim(),
            email: formData.email.trim(),
            subject: formData.subject.trim() || `Portfolio Inquiry from ${formData.name}`,
            message: formData.message.trim(),
            from_name: 'Portfolio Contact Form',
          }),
        });

        const data = await response.json();

        if (data.success) {
          setStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
          return;
        } else {
          setStatus('error');
          setErrorMessage(data.message || 'Failed to send message. Please try again or email directly.');
          return;
        }
      } catch (err) {
        console.error('Submission error:', err);
        setStatus('error');
        setErrorMessage('Network error while sending. You can also send directly via email below.');
        return;
      }
    }

    // Fallback if no access key configured yet: open pre-filled mail client
    const mailtoUrl = `mailto:sivalankadinesh2005@gmail.com?subject=${encodeURIComponent(
      formData.subject.trim() || `Portfolio Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Hi Dinesh,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`
    )}`;

    window.open(mailtoUrl, '_blank');
    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleReset = () => {
    setStatus('idle');
    setErrorMessage('');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const directMailtoUrl = `mailto:sivalankadinesh2005@gmail.com?subject=${encodeURIComponent(
    formData.subject || `Inquiry from ${formData.name || 'Portfolio Visitor'}`
  )}&body=${encodeURIComponent(
    formData.message ? `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}` : ''
  )}`;

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
            <span className="text-[12px] font-bold tracking-[0.2em] text-brand-gold uppercase">07 //</span>
            <div className="w-12 h-[1px] bg-brand-gold/50"></div>
          </div>
          
          <h2 className="font-space font-extrabold text-[45px] sm:text-[65px] text-white leading-[1.05] uppercase tracking-tight mb-8">
            LET'S BUILD<br />
            SOMETHING<br />
            <span className="text-brand-gold-muted italic font-script capitalize font-normal text-[50px] sm:text-[75px]">Meaningful.</span>
          </h2>
          
          <p className="text-gray-400 text-[16px] sm:text-[18px] max-w-[400px] mb-12">
            Have an idea, opportunity, or project in mind? Send a message and let's connect to create something impactful together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="mailto:sivalankadinesh2005@gmail.com"
              className="flex items-center justify-center gap-3 h-14 px-8 rounded-full bg-white text-black font-bold text-[14px] hover:bg-brand-gold transition-colors"
            >
              <Mail size={18} /> Email Me Directly
            </a>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/dinesh-venkata-kumar-sivalanka-5348842a9/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                className="flex items-center justify-center w-14 h-14 rounded-full border border-gray-700 text-white hover:border-brand-gold hover:text-brand-gold transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/DineshSivalanka"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
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
          <div className="glass-card p-8 sm:p-12 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                    <CheckCircle2 size={36} />
                  </div>
                  
                  <h3 className="font-space font-bold text-2xl text-white mb-2">
                    Message Sent!
                  </h3>
                  
                  <p className="text-gray-400 text-sm max-w-[340px] mb-8 leading-relaxed">
                    Thank you for reaching out. I have received your message and will get back to you shortly.
                  </p>

                  <button
                    onClick={handleReset}
                    className="flex items-center gap-2 px-6 h-12 rounded-xl border border-brand-gold/40 text-brand-gold hover:bg-brand-gold hover:text-black font-semibold text-sm transition-all"
                  >
                    <RotateCcw size={16} /> Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form key="contact-form" className="flex flex-col gap-6" onSubmit={handleSubmit} noValidate>
                  
                  {/* Name field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-name" className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase flex items-center justify-between">
                      <span>Name</span>
                      <span className="text-brand-gold">*</span>
                    </label>
                    <input 
                      id="contact-name"
                      name="name"
                      type="text" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      disabled={status === 'loading'}
                      placeholder="John Doe"
                      className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors placeholder:text-gray-700 text-sm disabled:opacity-50"
                    />
                  </div>
                  
                  {/* Email field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-email" className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase flex items-center justify-between">
                      <span>Email</span>
                      <span className="text-brand-gold">*</span>
                    </label>
                    <input 
                      id="contact-email"
                      name="email"
                      type="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={status === 'loading'}
                      placeholder="john@example.com"
                      className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors placeholder:text-gray-700 text-sm disabled:opacity-50"
                    />
                  </div>

                  {/* Subject field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-subject" className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase">
                      Subject
                    </label>
                    <input 
                      id="contact-subject"
                      name="subject"
                      type="text" 
                      value={formData.subject}
                      onChange={handleChange}
                      disabled={status === 'loading'}
                      placeholder="Project Collaboration / Opportunity"
                      className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors placeholder:text-gray-700 text-sm disabled:opacity-50"
                    />
                  </div>
                  
                  {/* Message field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-message" className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase flex items-center justify-between">
                      <span>Message</span>
                      <span className="text-brand-gold">*</span>
                    </label>
                    <textarea 
                      id="contact-message"
                      name="message"
                      required
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      disabled={status === 'loading'}
                      placeholder="Tell me about your project, idea, or questions..."
                      className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors placeholder:text-gray-700 resize-none text-sm disabled:opacity-50"
                    ></textarea>
                  </div>

                  {/* Error Notification */}
                  {status === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex flex-col gap-2"
                    >
                      <div className="flex items-center gap-2 font-medium">
                        <AlertCircle size={16} className="text-red-400 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                      <a 
                        href={directMailtoUrl} 
                        className="text-brand-gold hover:underline inline-flex items-center gap-1 font-semibold mt-1"
                      >
                        Send via Email App instead <ArrowUpRight size={14} />
                      </a>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    disabled={status === 'loading'}
                    className="mt-2 group flex items-center justify-between w-full h-14 px-6 rounded-xl border border-brand-gold bg-brand-gold/5 text-brand-gold font-bold text-[13px] uppercase tracking-wider hover:bg-brand-gold hover:text-black transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>
                      {status === 'loading' ? 'Sending Message...' : 'Send Message'}
                    </span>
                    {status === 'loading' ? (
                      <Loader2 size={18} className="animate-spin text-brand-gold" />
                    ) : (
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
