import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { FaFileDownload } from 'react-icons/fa';
import AnimatedBg from './Visuals/AnimatedBg';
import profileImg from '../assets/profile.png'; // Using the newly updated profile image

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-transparent">
            <AnimatedBg />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Hero Text */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="lg:w-1/2 text-center lg:text-left"
                    >
                        <motion.h2 variants={itemVariants} className="text-cyan-400 font-mono mb-4 text-lg lg:text-xl tracking-widest uppercase">
                            Python & Machine Learning Developer
                        </motion.h2>

                        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
                            Mukteshwar <span className="text-gradient">Joshi</span>
                        </motion.h1>

                        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-400 max-w-2xl lg:mx-0 mx-auto mb-10 leading-relaxed">
                            Architecting Scalable Systems & Data-Driven Insights
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 242, 254, 0.4)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-black text-lg shadow-lg shadow-cyan-500/20 transition-all"
                            >
                                View Projects
                            </motion.button>

                            <motion.a
                                href="/24_B_Mukteshwar_Joshi_Resume_Dev_J_RH.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)", boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-10 py-4 glass text-white rounded-full font-black text-lg flex items-center gap-2 border border-white/10 transition-all cursor-pointer"
                            >
                                <FaFileDownload /> Download Resume
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Profile Image - Cinematic Frame */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1.2, delay: 0.5, type: "spring" }}
                        className="lg:w-1/2 w-full flex justify-center items-center"
                    >
                        <div className="relative group">
                            {/* Animated Background Glow */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>

                            {/* Glass Frame */}
                            <div className="relative glass p-4 rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="relative rounded-[2rem] overflow-hidden border border-white/5"
                                >
                                    <img
                                        src={profileImg}
                                        alt="Mukteshwar Joshi"
                                        className="w-full max-w-[400px] aspect-[4/5] object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                                </motion.div>

                                {/* Decorative Elements */}
                                <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-right-2 border-cyan-500/50 rounded-tr-xl"></div>
                                <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-blue-500/50 rounded-bl-xl"></div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Cinematic Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-gray-500 font-mono text-xs uppercase tracking-[0.2em]">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-1 h-12 bg-gradient-to-b from-cyan-500 to-transparent rounded-full"
                />
            </motion.div>
        </section>
    );
};

export default Hero;
