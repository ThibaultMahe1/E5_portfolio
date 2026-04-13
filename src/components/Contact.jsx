import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, AlertCircle, MessageSquare } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'mahethibault44@gmail.com', href: 'mailto:mahethibault44@gmail.com', color: 'from-pink-400 to-rose-400', accent: '#f472b6' },
  { icon: Phone, label: 'Téléphone', value: '06 59 02 72 37', href: 'tel:+33659027237', color: 'from-emerald-400 to-green-400', accent: '#34d399' },
  { icon: MapPin, label: 'Localisation', value: 'Saint-Nazaire, France', href: null, color: 'from-blue-400 to-cyan-400', accent: '#38bdf8' },
];

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/ThibaultMahe1' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/thibault-mahe-176b16354/' },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '0f3ac403-42a4-4664-a47a-1cbc76e2d38f',
          from_name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Nouveau message portfolio de ${formData.name}`,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-pink/[0.05] rounded-full blur-[130px]" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-primary/[0.05] rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="section-label">
            <MessageSquare className="w-3.5 h-3.5" />
            Contact
          </span>
          <h2 className="section-title">
            Me <span className="gradient-text">contacter</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Une question ou un projet ? N'hésitez pas à me contacter
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5 tracking-tight">Restons en contact</h3>
            <p className="text-gray-400 mb-7 sm:mb-8 text-sm sm:text-base leading-relaxed">
              Je suis actuellement à la recherche d'opportunités de stage et d'alternance.
              N'hésitez pas à me contacter pour discuter de vos projets !
            </p>

            {/* Contact cards */}
            <div className="space-y-3 mb-7 sm:mb-8">
              {contactInfo.map(({ icon: Icon, label, value, href, color, accent }, index) => {
                const content = (
                  <div className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300 group">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      style={{ boxShadow: `0 6px 20px -6px ${accent}50` }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">{label}</p>
                      <p className="text-sm font-medium text-gray-200">{value}</p>
                    </div>
                  </div>
                );

                return (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    {href ? <a href={href}>{content}</a> : content}
                  </motion.div>
                );
              })}
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3.5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-gray-400" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <form onSubmit={handleSubmit} className="rounded-2xl p-6 sm:p-8 border border-white/[0.06] bg-white/[0.02]">
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-dark-light border border-white/[0.06] rounded-xl focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-sm sm:text-base placeholder:text-gray-600"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-dark-light border border-white/[0.06] rounded-xl focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all text-sm sm:text-base placeholder:text-gray-600"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-dark-light border border-white/[0.06] rounded-xl focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none text-sm sm:text-base placeholder:text-gray-600"
                    placeholder="Votre message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 text-sm sm:text-base ${
                    status === 'success'
                      ? 'bg-gradient-to-r from-emerald-500 to-green-500'
                      : status === 'error'
                      ? 'bg-gradient-to-r from-red-500 to-rose-500'
                      : 'bg-gradient-to-r from-primary to-pink hover:shadow-lg hover:shadow-primary/20'
                  } ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {status === 'sending' && (
                    <>
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Envoi en cours...
                    </>
                  )}
                  {status === 'success' && (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message envoyé !
                    </>
                  )}
                  {status === 'error' && (
                    <>
                      <AlertCircle className="w-5 h-5" />
                      Erreur, réessayez
                    </>
                  )}
                  {status === 'idle' && (
                    <>
                      <Send className="w-4 h-4" />
                      Envoyer le message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
