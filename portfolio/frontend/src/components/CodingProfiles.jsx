import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { getGithubData } from '../services/api';

const CodingProfiles = () => {
    const [githubStats, setGithubStats] = useState(null);

    useEffect(() => {
        getGithubData().then(res => setGithubStats(res.data)).catch(console.error);
    }, []);

    const profiles = [
        {
            name: "GitHub",
            icon: <FaGithub />,
            url: "https://github.com/Unstoppable-MJ",
            gradient: "from-gray-700 to-black",
            accent: "cyan",
            username: "@Unstoppable-MJ",
            stats: githubStats ? `${githubStats.followers} Followers • ${githubStats.public_repos} Repos` : "Fetching data..."
        },
        {
            name: "LeetCode",
            icon: <SiLeetcode />,
            url: "https://leetcode.com/u/MukteshwarJoshi/",
            gradient: "from-yellow-500 to-orange-700",
            accent: "yellow",
            username: "MukteshwarJoshi",
            stats: "270 Problems Solved • Top 15%"
        },
        {
            name: "LinkedIn",
            icon: <FaLinkedin />,
            url: "https://www.linkedin.com/in/mukteshwar-joshi-68bba031a",
            gradient: "from-blue-600 to-blue-800",
            accent: "blue",
            username: "mukteshwar-joshi",
            stats: "Professional Network • 500+ Connections"
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden" id="profiles">
            {/* Background Light */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h3 className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4">Engagement</h3>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Coding <span className="text-gradient">Presence</span></h2>
                    <p className="text-gray-400 max-w-xl mx-auto">Live statistics and professional hubs where I contribute to the tech community.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {profiles.map((profile, index) => (
                        <motion.a
                            key={profile.name}
                            href={profile.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ y: -10 }}
                            className="relative group p-1 rounded-3xl overflow-hidden"
                        >
                            {/* Glowing Border Path */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/0 opacity-50 transition-opacity group-hover:opacity-100" />

                            {/* Inner Card */}
                            <div className="relative glass p-10 rounded-[calc(1.5rem-1px)] h-full flex flex-col items-center gap-6 border border-white/5 transition-all duration-500 group-hover:bg-white/5 shadow-2xl">
                                <motion.div
                                    whileHover={{ rotate: 15, scale: 1.1 }}
                                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${profile.gradient} flex items-center justify-center text-4xl text-white shadow-2xl`}
                                >
                                    {profile.icon}
                                </motion.div>

                                <div className="space-y-2">
                                    <h3 className="text-2xl font-black text-white">{profile.name}</h3>
                                    <p className="text-cyan-400 font-mono text-xs tracking-widest">{profile.username}</p>
                                </div>

                                <div className="w-full h-[1px] bg-white/5" />

                                <p className="text-gray-400 text-sm font-medium leading-relaxed italic text-center">
                                    {profile.stats}
                                </p>

                                <div className="mt-auto pt-4 flex items-center gap-2 text-white/50 group-hover:text-white transition-colors text-xs font-black uppercase tracking-widest">
                                    Visit Profile <span className="text-lg group-hover:translate-x-2 transition-transform">→</span>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CodingProfiles;
