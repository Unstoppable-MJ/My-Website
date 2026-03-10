import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCode } from 'react-icons/fa';
import btcImg from '../assets/projects/btc.png';
import scamImg from '../assets/projects/scam.png';
import stockImg from '../assets/projects/stock.png';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative"
        >
            {/* Animated Border Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>

            <div
                className="relative glass rounded-2xl overflow-hidden h-full flex flex-col border border-white/10 hover:border-cyan-500/50 transition-all duration-500 shadow-2xl hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]"
            >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <motion.img
                        src={project.bg_image}
                        alt={project.title}
                        className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0"
                        whileHover={{ scale: 1.06 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.90)] to-[rgba(0,0,0,0.65)]"></div>
                </div>

                <div className="relative z-10 p-8 flex-grow flex flex-col">
                    <h3 className="text-2xl font-black text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-[rgba(255,255,255,0.85)] text-sm leading-relaxed mb-6 flex-grow">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech_stack.map(tech => (
                            <span key={tech} className="text-[9px] uppercase tracking-widest font-black px-2 py-1 bg-white/5 text-gray-400 rounded-md border border-white/5">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-white/5">
                        <motion.a
                            whileHover={{ y: -2, color: "#fff" }}
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 flex items-center gap-2 text-sm font-bold transition-colors"
                        >
                            <FaGithub className="text-lg" /> Source Code
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 bg-white/5 hover:bg-cyan-500 text-white text-xs font-black rounded-lg transition-all duration-300 flex items-center gap-2 border border-white/10"
                        >
                            <FaCode /> View Project
                        </motion.a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const featuredProjects = [
        {
            id: 1,
            title: "Bitcoin Price Prediction",
            description: "Machine learning system that predicts Bitcoin price trends using ARIMA, CNN, and RNN models with historical market data and backtesting.",
            tech_stack: ["Python", "TensorFlow", "Pandas", "NumPy", "yFinance"],
            bg_image: btcImg,
            github: "https://github.com/Unstoppable-MJ/Bizmetric_Mukteshwar/tree/main/btc_forecasting",
            live: "https://github.com/Unstoppable-MJ/Bizmetric_Mukteshwar/tree/main/btc_forecasting"
        },
        {
            id: 2,
            title: "AI Scam Detector",
            description: "AI-powered system that detects scam messages and suspicious content using NLP and machine learning techniques.",
            tech_stack: ["Python", "NLP", "Machine Learning", "Scikit-learn"],
            bg_image: scamImg,
            github: "https://github.com/Unstoppable-MJ/AI-Scam-Detector",
            live: "https://github.com/Unstoppable-MJ/AI-Scam-Detector"
        },
        {
            id: 3,
            title: "Stock Market AI Dashboard",
            description: "Interactive dashboard that analyzes stock market data and predicts trends using machine learning models and real-time data.",
            tech_stack: ["Python", "FastAPI", "React", "Machine Learning", "yFinance"],
            bg_image: stockImg,
            github: "https://github.com/Unstoppable-MJ/Bizmetric_Mukteshwar/tree/main/stock_project",
            live: "https://github.com/Unstoppable-MJ/Bizmetric_Mukteshwar/tree/main/stock_project"
        }
    ];

    return (
        <section className="py-24 relative" id="projects">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h3 className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4 text-center">Portfolio</h3>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                        Innovative <span className="text-gradient">Solutions</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto text-lg">
                        Exploring the boundaries of technology through data-driven and user-centric projects.
                    </p>
                </motion.div>

                {/* Major Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
                    {featuredProjects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                {/* GitHub CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-12"
                >
                    <div className="flex items-center gap-6 w-full">
                        <h2 className="text-3xl font-black text-white whitespace-nowrap">Open Source <span className="text-gradient">Activity</span></h2>
                        <div className="h-[1px] bg-white/10 flex-grow" />
                    </div>

                    <div className="text-center space-y-8">
                        <p className="text-gray-400 max-w-md mx-auto italic">
                            Building tools, contributing to communities, and sharing knowledge through open-source code.
                        </p>

                        <motion.a
                            href="https://github.com/Unstoppable-MJ"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-12 py-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:from-cyan-500 hover:to-blue-600 glass border border-white/10 rounded-full text-white font-black text-lg uppercase tracking-widest transition-all inline-flex items-center gap-4 group shadow-2xl"
                        >
                            <FaGithub className="text-2xl group-hover:rotate-12 transition-transform" />
                            View More on GitHub
                            <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
