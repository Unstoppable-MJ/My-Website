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
                <div className="container mx-auto px-6 flex flex-col items-center gap-4">
                    <p className="mb-0 text-gray-400">&copy; {new Date().getFullYear()} Mukteshwar Joshi</p>

                    <div className="flex justify-center items-center">
                        <img
                            src="https://visitor-badge.laobi.icu/badge?page_id=Unstoppable-MJ.portfolio&left_text=Portfolio%20Visitors&left_color=%23343b41&right_color=%230891b2"
                            alt="Portfolio Visitors"
                            className="rounded-md shadow-lg shadow-cyan-500/10"
                        />
                    </div>

                    <p className="text-sm opacity-60">Built with React, FastAPI & Framer Motion</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
