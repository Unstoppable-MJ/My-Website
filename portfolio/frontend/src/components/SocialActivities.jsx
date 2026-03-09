import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart, FaTree, FaTimes, FaQuoteLeft } from 'react-icons/fa';

// Import blood donation assets
import bloodCert from '../assets/blood_donation_cert.png';
import blood1 from '../assets/blood_donation_1.jpg';
import blood2 from '../assets/blood_donation_2.jpg';
import bloodCert2 from '../assets/blood_donation_cert_2.jpg';

// Import tree plantation assets
import tree1 from '../assets/tree_plantation_1.jpg';
import tree2 from '../assets/tree_plantation_2.jpg';
import treeCert from '../assets/tree_plantation_cert.png';

const SocialActivities = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    const activities = [
        {
            title: "Blood Donation Drive",
            desc: "Regular donor since 2021. Successfully donated blood 6 times to support local healthcare services and emergency needs.",
            icon: <FaHeart className="text-red-500" />,
            count: "6 Donations",
            images: [blood1, blood2, bloodCert, bloodCert2]
        },
        {
            title: "Environmental Stewardship",
            desc: "Active participant in community green initiatives. Organized and participated in 2 major tree plantation events.",
            icon: <FaTree className="text-green-500" />,
            count: "2 Large Events",
            images: [tree1, tree2, treeCert]
        }
    ];

    return (
        <section className="py-24 relative bg-black/20" id="social-activities">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-3 gap-16">
                    {/* Left Column: Mission Narrative */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-1"
                    >
                        <h3 className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4">Community</h3>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                            Impact Beyond <span className="text-gradient">The Screen</span>
                        </h2>
                        <div className="relative glass p-8 rounded-3xl border border-white/10 mb-8 mt-12">
                            <FaQuoteLeft className="text-cyan-500/20 text-5xl absolute top-6 left-6" />
                            <p className="relative z-10 text-gray-400 italic font-medium leading-relaxed">
                                "Technology is a powerful tool, but the most meaningful impact we can make is direct human service. My commitment to social responsibility is as fundamental as my dedication to code."
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Column: Activities Gallery */}
                    <div className="lg:col-span-2 space-y-12">
                        {activities.map((activity, index) => (
                            <motion.div
                                key={activity.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="glass p-8 rounded-[2.5rem] border border-white/5 shadow-2xl overflow-hidden relative group"
                            >
                                <div className="flex flex-col md:flex-row gap-8 items-center">
                                    <div className="w-full md:w-1/2">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="p-4 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">
                                                {activity.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-black text-white">{activity.title}</h3>
                                                <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest">{activity.count}</span>
                                            </div>
                                        </div>
                                        <p className="text-gray-400 leading-relaxed mb-6">
                                            {activity.desc}
                                        </p>
                                    </div>

                                    <div className="w-full md:w-1/2 grid grid-cols-2 gap-3">
                                        {activity.images.map((img, imgIndex) => (
                                            <motion.div
                                                key={imgIndex}
                                                whileHover={{ scale: 1.05 }}
                                                onClick={() => setSelectedImg(img)}
                                                className="aspect-square rounded-2xl overflow-hidden cursor-zoom-in border border-white/10"
                                            >
                                                <img
                                                    src={img}
                                                    alt="Activity"
                                                    className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-500"
                                                />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
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

export default SocialActivities;
