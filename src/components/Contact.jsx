import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle, AlertCircle } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'mahethibault44@gmail.com', href: 'mailto:mahethibault44@gmail.com', color: 'from-pink-500 to-rose-500' },
  { icon: Phone, label: 'Téléphone', value: '06 59 02 72 37', href: 'tel:+33659027237', color: 'from-green-500 to-emerald-500' },
  { icon: MapPin, label: 'Localisation', value: 'Saint-Nazaire, France', href: null, color: 'from-blue-500 to-cyan-500' },
];

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/ThibaultMahe1', color: 'from-gray-600 to-gray-800' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/thibault-mahe-176b16354/', color: 'from-blue-600 to-blue-800' },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

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
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Static colorful background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-purple-900/20 to-blue-900/20" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-pink-500/15 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Me <span className="gradient-text">contacter</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Une question ou un projet ? N'hésitez pas à me contacter
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Restons en contact</h3>
            <p className="text-gray-400 mb-8">
              Je suis actuellement à la recherche d'opportunités de stage et d'alternance.
              N'hésitez pas à me contacter pour discuter de vos projets !
            </p>

            {/* Contact cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map(({ icon: Icon, label, value, href, color }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  {href ? (
                    <a
                      href={href}
                      className="flex items-center gap-4 p-4 relative rounded-xl overflow-hidden group hover:scale-[1.02] transition-transform"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                      <div className="absolute inset-0 backdrop-blur-sm bg-dark/30 border border-white/10 rounded-xl" />
                      
                      <div className={`relative z-10 w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="relative z-10">
                        <p className="text-sm text-gray-400">{label}</p>
                        <p className={`font-medium text-transparent bg-clip-text bg-gradient-to-r ${color}`}>
                          {value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 relative rounded-xl overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-20`} />
                      <div className="absolute inset-0 backdrop-blur-sm bg-dark/30 border border-white/10 rounded-xl" />
                      
                      <div className={`relative z-10 w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="relative z-10">
                        <p className="text-sm text-gray-400">{label}</p>
                        <p className={`font-medium text-transparent bg-clip-text bg-gradient-to-r ${color}`}>{value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, label, href, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-4 rounded-xl bg-gradient-to-br ${color} shadow-lg hover:shadow-xl transition-shadow`}
                  aria-label={label}
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-dark border border-white/10 rounded-xl focus:outline-none focus:border-primary transition-colors"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-dark border border-white/10 rounded-xl focus:outline-none focus:border-primary transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-dark border border-white/10 rounded-xl focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Votre message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-shadow ${
                    status === 'success'
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                      : status === 'error'
                      ? 'bg-gradient-to-r from-red-500 to-rose-500'
                      : 'bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/30'
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
                      <Send className="w-5 h-5" />
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
