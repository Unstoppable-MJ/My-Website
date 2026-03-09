import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const Certificates = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    const certs = [
        {
            title: "Python for Data Science",
            org: "IBM",
            date: "Jan 2024",
            image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80",
            category: "Programming"
        },
        {
            title: "Machine Learning Specialization",
            org: "DeepLearning.AI",
            date: "Nov 2023",
            image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
            category: "AI/ML"
        },
        {
            title: "AWS Cloud Practitioner",
            org: "Amazon Web Services",
            date: "Sept 2023",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
            category: "Cloud"
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden" id="certificates">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h3 className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4">Credentials</h3>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Professional <span className="text-gradient">Certifications</span></h2>
                    <p className="text-gray-400 max-w-xl mx-auto">Validated expertise across specialized domains in software engineering and artificial intelligence.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certs.map((cert, index) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass p-6 rounded-3xl border border-white/5 relative group h-full flex flex-col"
                        >
                            <div className="relative h-48 mb-6 rounded-2xl overflow-hidden border border-white/10">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <button
                                        onClick={() => setSelectedImg(cert.image)}
                                        className="p-3 bg-white/10 backdrop-blur-3xl rounded-full text-white hover:bg-cyan-500 transition-colors"
                                    >
                                        <FaExternalLinkAlt />
                                    </button>
                                </div>
                            </div>

                            <div className="flex-grow">
                                <div className="flex items-center gap-3 mb-3">
                                    <FaGraduationCap className="text-cyan-400" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400/80">{cert.category}</span>
                                </div>
                                <h3 className="text-xl font-black text-white mb-2">{cert.title}</h3>
                                <p className="text-gray-400 text-sm font-bold">{cert.org}</p>
                            </div>

                            <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center">
                                <span className="text-xs text-gray-500 font-mono italic">{cert.date}</span>
                                <button className="text-[10px] uppercase tracking-widest font-black text-white/40 hover:text-cyan-400 transition-colors">Verify Credential →</button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImg(null)}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6 md:p-12 cursor-zoom-out"
                    >
                        <button className="absolute top-8 right-8 text-white text-3xl hover:text-cyan-400 transition-colors">
                            <FaTimes />
                        </button>
                        <motion.img
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            src={selectedImg}
                            className="max-w-full max-h-full rounded-2xl shadow-2xl border border-white/10"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certificates;
