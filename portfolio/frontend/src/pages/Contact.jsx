import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane, FaUser, FaAt, FaCommentAlt, FaInstagram } from 'react-icons/fa';
import { sendContactMessage } from '../services/api';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await sendContactMessage(formData);
            setStatus('Message sent successfully! I will get back to you soon.');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setStatus('Failed to send message. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactLinks = [
        { icon: <FaEnvelope />, text: 'mukteshwarjoshi9689@gmail.com', url: 'mailto:mukteshwarjoshi9689@gmail.com', color: "text-red-400" },
        { icon: <FaLinkedin />, text: 'LinkedIn', url: 'https://linkedin.com/in/mukteshwar-joshi-68bba031a', color: "text-blue-400" },
        { icon: <FaInstagram />, text: 'Instagram', url: 'https://www.instagram.com/the_unstoppable_mj?igsh=MWxpMXdxNjExZDB0aQ==', color: "text-pink-400" }
    ];

    return (
        <section className="py-24 relative overflow-hidden" id="contact">
            {/* Background Gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h3 className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4">Connection</h3>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Get In <span className="text-gradient">Touch</span></h2>
                    <p className="text-gray-400 max-w-xl mx-auto">Let's collaborate on something innovative or just have a chat about technology.</p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-10">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-black text-white">Contact Information</h3>
                            <p className="text-gray-400 leading-relaxed">
                                I'm currently open to new opportunities and collaborations. Feel free to reach out via the form or my social profiles.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            {contactLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.05)" }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-6 p-6 glass rounded-2xl border border-white/5 transition-all group"
                                >
                                    <div className={`text-3xl ${link.color} opacity-70 group-hover:opacity-100 transition-opacity`}>
                                        {link.icon}
                                    </div>
                                    <span className="text-lg font-bold text-gray-300 group-hover:text-white transition-colors">{link.text}</span>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-10 rounded-3xl border border-white/10 shadow-2xl relative"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-gray-400 flex items-center gap-2">
                                    <FaUser className="text-cyan-500" /> Full Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Mukteshwar Joshi"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 transition-colors"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-gray-400 flex items-center gap-2">
                                    <FaAt className="text-cyan-500" /> Email Address
                                </label>
                                <input
                                    type="email"
                                    placeholder="example@gmail.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 transition-colors"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-gray-400 flex items-center gap-2">
                                    <FaCommentAlt className="text-cyan-500" /> Message
                                </label>
                                <textarea
                                    placeholder="Let's build something great..."
                                    rows="4"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                ></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={isSubmitting}
                                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black rounded-xl shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-3 disabled:opacity-50"
                            >
                                {isSubmitting ? 'Sending...' : (
                                    <>
                                        Send Message <FaPaperPlane />
                                    </>
                                )}
                            </motion.button>

                            {status && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`text-center text-sm font-bold ${status.includes('success') ? 'text-green-400' : 'text-red-400'}`}
                                >
                                    {status}
                                </motion.p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
