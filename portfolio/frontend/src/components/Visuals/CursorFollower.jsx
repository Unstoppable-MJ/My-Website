import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CursorFollower = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const springConfig = { damping: 25, stiffness: 200 };
    const cursorX = useSpring(0, springConfig);
    const cursorY = useSpring(0, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-cyan-500 pointer-events-none z-[9999] hidden lg:block"
            style={{
                x: cursorX,
                y: cursorY,
                scale: isHovering ? 2.5 : 1,
                backgroundColor: isHovering ? "rgba(0, 242, 254, 0.1)" : "transparent",
                borderColor: isHovering ? "rgba(0, 242, 254, 0.8)" : "rgba(0, 242, 254, 0.5)",
                mixBlendMode: isHovering ? "difference" : "normal",
            }}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
        />
    );
};

export default CursorFollower;
