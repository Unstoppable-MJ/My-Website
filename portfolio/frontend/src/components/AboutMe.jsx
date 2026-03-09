import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaBrain, FaServer, FaCogs, FaReact, FaDatabase } from 'react-icons/fa';

const SkillCard = ({ name, level, icon: SkillIcon, description, index }) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: index * 0.1 }
                }
            }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="relative group glass p-6 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300 shadow-xl overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10 flex flex-col items-center text-center gap-4">
                {/* Icon & Radial Progress */}
                <div className="relative w-24 h-24 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                        <circle
                            cx="48"
                            cy="48"
                            r="40"
                            stroke="currentColor"
                            strokeWidth="6"
                            fill="transparent"
                            className="text-white/5"
                        />
                        <motion.circle
                            cx="48"
                            cy="48"
                            r="40"
                            stroke="currentColor"
                            strokeWidth="6"
                            fill="transparent"
                            strokeDasharray="251.2"
                            initial={{ strokeDashoffset: 251.2 }}
                            whileInView={{ strokeDashoffset: 251.2 - (251.2 * level) / 100 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                            className="text-cyan-500 transition-all"
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-3xl text-white group-hover:text-cyan-400 transition-colors">
                        <SkillIcon />
                    </div>
                </div>

                <div className="space-y-1">
                    <h4 className="text-xl font-black text-white">{name}</h4>
                    <span className="text-cyan-500 font-mono text-sm tracking-widest">{level}%</span>
                </div>

                <p className="text-gray-500 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

const AboutMe = () => {
    const skills = [
        {
            name: "Python",
            level: 95,
            icon: FaPython,
            description: "Backend development, automation, and high-performance ML scripts."
        },
        {
            name: "Machine Learning",
            level: 90,
            icon: FaBrain,
            description: "Building predictive models and neural network architectures."
        },
        {
            name: "Scalable Systems",
            level: 85,
            icon: FaCogs,
            description: "Designing architectures that handle high-load data environments."
        },
        {
            name: "Backend Development",
            level: 85,
            icon: FaServer,
            description: "Implementing complex server-side logic and robust API endpoints."
        },
        {
            name: "React",
            level: 75,
            icon: FaReact,
            description: "Crafting interactive and responsive UIs with modern patterns."
        },
        {
            name: "SQL",
            level: 80,
            icon: FaDatabase,
            description: "Architecting efficient database schemas and optimizing complex queries."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    return (
        <section className="py-24 relative overflow-hidden" id="about">
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4">About Me</h3>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
                            Transforming Ideas Into <span className="text-gradient">Real-World Code</span>
                        </h2>
                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                            <p>
                                As a results-oriented Python Developer, I specialize in building sophisticated Machine Learning models
                                and high-performance backend architectures. I have a proven track record of solving complex
                                algorithmic problems by leveraging data-driven insights to create intelligent applications.
                            </p>
                            <p>
                                My architectural focus is on designing scalable systems that maintain a commitment to clean code
                                and structural integrity, ensuring that every solution I build is prepared for future growth.
                            </p>
                            <div className="pt-6">
                                <motion.div
                                    whileHover={{ x: 10 }}
                                    className="flex items-center gap-4 text-white font-bold cursor-pointer"
                                >
                                    <span className="w-12 h-[2px] bg-cyan-500"></span>
                                    Learn more about my journey
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="space-y-8">
                        <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-4">
                            Technical Expertise
                            <span className="flex-grow h-[1px] bg-white/10"></span>
                        </h3>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                        >
                            {skills.map((skill, index) => (
                                <SkillCard key={skill.name} {...skill} index={index} />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
