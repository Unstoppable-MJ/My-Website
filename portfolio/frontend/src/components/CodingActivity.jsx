import React from 'react';
import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';
import { FaGithub, FaCode, FaExternalLinkAlt, FaJava, FaPython, FaDatabase } from 'react-icons/fa';

const CodingActivity = () => {
    const theme = {
        light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
        dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
    };

    const problemSolvingStats = [
        {
            language: "Java",
            solved: 120,
            proficiency: 85,
            icon: <FaJava className="text-orange-500" />,
            color: "from-orange-400 to-red-600"
        },
        {
            language: "Python",
            solved: 90,
            proficiency: 75,
            icon: <FaPython className="text-blue-500" />,
            color: "from-blue-400 to-indigo-600"
        },
        {
            language: "SQL",
            solved: 60,
            proficiency: 65,
            icon: <FaDatabase className="text-green-500" />,
            color: "from-green-400 to-emerald-600"
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden" id="coding-activity">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h3 className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4">Consistency</h3>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Coding <span className="text-gradient">Activity</span></h2>
                    <p className="text-gray-400 max-w-xl mx-auto">Tracking growth and contributions across platforms to build impactful software.</p>
                </motion.div>

                <div className="grid lg:grid-cols-1 gap-12">
                    {/* GitHub Activity */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass p-8 rounded-3xl border border-white/5 relative group"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-white/5 rounded-xl text-white text-2xl">
                                <FaGithub />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-white">GitHub Contributions</h3>
                                <p className="text-gray-400 text-sm">Last year on @Unstoppable-MJ</p>
                            </div>
                        </div>

                        <div className="overflow-x-auto pb-4 scrollbar-hide flex justify-center">
                            <GitHubCalendar
                                username="Unstoppable-MJ"
                                fontSize={12}
                                blockSize={12}
                                blockMargin={4}
                                theme={theme}
                                colorScheme="dark"
                                loading={false}
                            />
                        </div>
                    </motion.div>

                    {/* Problem Solving Skills */}
                    <div className="grid md:grid-cols-1 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass p-8 rounded-3xl border border-white/5 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <FaCode className="text-8xl" />
                            </div>

                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-white/5 rounded-xl text-cyan-400 text-2xl">
                                        <FaCode />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black text-white">Problem Solving Skills</h3>
                                        <p className="text-gray-400 text-sm">Experience across Programming Languages</p>
                                    </div>
                                </div>
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    href="https://leetcode.com/u/Unstoppable-MJ/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-2.5 bg-white/5 hover:bg-yellow-500/20 text-white text-xs font-black rounded-xl border border-white/10 transition-all flex items-center gap-2 uppercase tracking-widest"
                                >
                                    <FaExternalLinkAlt /> View LeetCode Profile
                                </motion.a>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {problemSolvingStats.map((stat, index) => (
                                    <motion.div
                                        key={stat.language}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="p-6 bg-white/5 rounded-2xl border border-white/5 group hover:border-white/10 transition-all relative overflow-hidden"
                                    >
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="p-3 bg-white/5 rounded-xl text-3xl group-hover:scale-110 transition-transform">
                                                {stat.icon}
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-black text-white">{stat.language}</h4>
                                                <p className="text-gray-500 text-[10px] uppercase tracking-widest font-black">Problems Solved: <span className="text-white">{stat.solved}</span></p>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex justify-between items-center">
                                                <span className="text-[10px] uppercase tracking-widest font-black text-gray-400">Proficiency</span>
                                                <span className="text-xs font-mono text-white">{stat.proficiency}%</span>
                                            </div>
                                            <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${stat.proficiency}%` }}
                                                    transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
                                                    className={`h-full bg-gradient-to-r ${stat.color}`}
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CodingActivity;
