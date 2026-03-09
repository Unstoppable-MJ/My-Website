import React from 'react';
import Hero from '../components/Hero';
import About from '../components/AboutMe';
import Projects from './Projects';
import Certificates from '../components/Certificates';
import CodingActivity from '../components/CodingActivity';
import SocialActivities from '../components/SocialActivities';
import CodingProfiles from '../components/CodingProfiles';
import Contact from './Contact';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <Hero />
            <About />
            <div id="projects">
                <Projects />
            </div>
            <CodingActivity />
            <Certificates />
            <SocialActivities />
            <CodingProfiles />
            <Contact />
        </motion.div>
    );
};

export default Home;
