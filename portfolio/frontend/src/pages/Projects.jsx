import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCode } from 'react-icons/fa';
import { getProjects, getRepos } from '../services/api';

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

            <div className="relative glass rounded-2xl overflow-hidden h-full flex flex-col border border-white/10 hover:border-cyan-500/50 transition-colors duration-500 shadow-2xl">
                {/* Image Placeholder with Animation */}
                <div className="h-48 bg-gray-900/50 relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent"></div>
                    <motion.span
                        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="text-gray-800 text-8xl font-black opacity-10 select-none"
                    >
                        {project.title[0]}
                    </motion.span>
                    <div className="absolute bottom-4 right-4 flex gap-2">
                        {project.tech_stack.slice(0, 2).map((tech, i) => (
                            <span key={i} className="px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-[10px] text-cyan-400 font-bold uppercase tracking-wider border border-cyan-500/20">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="p-8 flex-grow flex flex-col">
                    <h3 className="text-2xl font-black text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
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
                            <FaGithub className="text-lg" /> Source
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 bg-white/5 hover:bg-cyan-500 text-white text-xs font-black rounded-lg transition-all duration-300 flex items-center gap-2 border border-white/10"
                        >
                            <FaCode /> Open Project
                        </motion.a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [projectsRes, reposRes] = await Promise.all([getProjects(), getRepos()]);
                setProjects(projectsRes.data);
                setRepos(reposRes.data);
            } catch (err) {
                console.error("Error fetching data:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

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
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                {/* GitHub Repositories Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-6 mb-12"
                >
                    <h2 className="text-3xl font-black text-white whitespace-nowrap">Open Source <span className="text-gradient">Activity</span></h2>
                    <div className="h-[1px] bg-white/10 flex-grow" />
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {loading ? (
                        [...Array(3)].map((_, i) => (
                            <div key={i} className="h-40 glass rounded-2xl animate-pulse bg-white/5 border border-white/5" />
                        ))
                    ) : Array.isArray(repos) ? repos.slice(0, 3).map((repo, index) => (
                        <motion.a
                            key={repo.name}
                            href={repo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -8, borderColor: "rgba(0, 242, 254, 0.4)", backgroundColor: "rgba(255,255,255,0.08)" }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="glass p-6 rounded-2xl border border-white/5 flex flex-col justify-between group h-full shadow-lg"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400 group-hover:scale-110 transition-transform">
                                        <FaCode />
                                    </div>
                                    <div className="flex items-center gap-1.5 text-yellow-500 text-xs font-mono bg-yellow-500/5 px-2 py-1 rounded-full border border-yellow-500/20">
                                        <FaStar /> {repo.stars}
                                    </div>
                                </div>
                                <h3 className="text-lg font-black text-white group-hover:text-cyan-400 transition-colors truncate mb-2">
                                    {repo.name}
                                </h3>
                                <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
                                    {repo.description || "Experimental repository exploring modern web patterns."}
                                </p>
                            </div>
                            <div className="flex justify-between items-center mt-6 text-[10px] font-black uppercase tracking-widest">
                                <span className="text-cyan-500">{repo.language || "Markdown"}</span>
                                <span className="text-gray-600 group-hover:text-white transition-colors">GitHub →</span>
                            </div>
                        </motion.a>
                    )) : (
                        <p className="text-center text-gray-500 col-span-full">No repositories found or failed to fetch.</p>
                    )}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <motion.a
                        href="https://github.com/Unstoppable-MJ"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 glass border border-white/10 rounded-xl text-white font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-3"
                    >
                        <FaGithub className="text-xl" /> View More on GitHub
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
