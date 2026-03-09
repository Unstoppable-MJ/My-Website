import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-transparent">
            <Navbar />
            <main>
                {children}
            </main>
            <footer className="py-10 border-t border-white/5 text-center text-gray-500 glass">
                <div className="container mx-auto px-6">
                    <p className="mb-2">&copy; {new Date().getFullYear()} Mukteshwar Joshi</p>
                    <p className="text-sm">Built with React, FastAPI & Framer Motion</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
