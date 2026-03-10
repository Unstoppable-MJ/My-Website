import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaKeyboard, FaPaperPlane, FaUser } from 'react-icons/fa';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hi! I'm Ask Muku 🤖\nI can tell you about Mukteshwar's projects, skills, and work.\nAsk me anything!",
            sender: 'bot',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const knowledgeBase = {
        about: "Mukteshwar Joshi is a developer focused on Artificial Intelligence, Machine Learning, and full-stack development. He builds projects involving ML models, financial prediction systems, and AI tools.",
        projects: "Mukteshwar has built several projects including:\n\n1. Bitcoin Price Prediction using ARIMA, CNN, and RNN models\n2. AI Scam Detector using NLP and Machine Learning\n3. Stock Market AI Dashboard using financial data and ML analysis",
        skills: "Python, Machine Learning, TensorFlow, Pandas, NumPy, React, FastAPI, SQL, Java.",
        resume: "You can download Mukteshwar's resume using the button in the Hero section or from here.",
        contact: "Email: mukteshwarjoshi9689@gmail.com\nLinkedIn: https://www.linkedin.com/in/mukteshwar-joshi-68bba031a",
    };

    const getBotResponse = (input) => {
        const lowerInput = input.toLowerCase();

        if (lowerInput.includes('project')) return knowledgeBase.projects;
        if (lowerInput.includes('skill') || lowerInput.includes('tech') || lowerInput.includes('stack')) return knowledgeBase.skills;
        if (lowerInput.includes('resume') || lowerInput.includes('cv') || lowerInput.includes('download')) return knowledgeBase.resume;
        if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('linkedin') || lowerInput.includes('reach')) return knowledgeBase.contact;
        if (lowerInput.includes('about') || lowerInput.includes('who') || lowerInput.includes('mukteshwar') || lowerInput.includes('muku')) return knowledgeBase.about;

        return "I'm here to answer questions about Mukteshwar's portfolio, projects, and skills.";
    };

    const handleSend = (text = inputValue) => {
        if (!text.trim()) return;

        const newUserMessage = {
            id: Date.now(),
            text: text,
            sender: 'user',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => [...prev, newUserMessage]);
        setInputValue('');
        setIsTyping(true);

        // Simulate typing delay
        setTimeout(() => {
            const botResponse = {
                id: Date.now() + 1,
                text: getBotResponse(text),
                sender: 'bot',
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, botResponse]);
            setIsTyping(false);
        }, 1000);
    };

    const quickButtons = [
        { label: 'Projects', icon: '🚀' },
        { label: 'Skills', icon: '💻' },
        { label: 'Resume', icon: '📄' },
        { label: 'Contact', icon: '📧' },
        { label: 'About', icon: '👤' }
    ];

    return (
        <div className="fixed bottom-6 right-6 z-[9999] font-sans">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9, transformOrigin: 'bottom right' }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        className="mb-4 w-[350px] md:w-[400px] h-[550px] glass border border-white/10 rounded-2xl flex flex-col shadow-2xl overflow-hidden backdrop-blur-xl bg-black/40"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-white/10 flex justify-between items-center bg-gradient-to-r from-cyan-500/20 to-blue-600/20">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-cyan-500 rounded-lg">
                                    <FaRobot className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-sm">Ask Muku</h3>
                                    <p className="text-xs text-cyan-400">AI Portfolio Assistant</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <FaTimes />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, x: msg.sender === 'user' ? 20 : -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.sender === 'user'
                                            ? 'bg-cyan-600 text-white rounded-tr-none shadow-lg'
                                            : 'bg-white/10 text-gray-200 border border-white/5 rounded-tl-none'
                                        }`}>
                                        <p className="whitespace-pre-line">{msg.text}</p>
                                        <span className="text-[10px] opacity-40 mt-1 block text-right">{msg.timestamp}</span>
                                    </div>
                                </motion.div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none border border-white/5">
                                        <div className="flex gap-1">
                                            <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                                            <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                                            <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Buttons */}
                        <div className="p-3 flex gap-2 overflow-x-auto no-scrollbar border-t border-white/5">
                            {quickButtons.map((btn) => (
                                <button
                                    key={btn.label}
                                    onClick={() => handleSend(btn.label)}
                                    className="whitespace-nowrap px-3 py-1.5 glass border border-white/10 rounded-full text-xs text-cyan-400 hover:bg-cyan-500/10 transition-all flex items-center gap-1"
                                >
                                    <span>{btn.icon}</span> {btn.label}
                                </button>
                            ))}
                        </div>

                        {/* Input Area */}
                        <form
                            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                            className="p-4 border-t border-white/10 bg-black/20"
                        >
                            <div className="relative">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Type a message..."
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-all"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-cyan-500 hover:text-cyan-400 disabled:opacity-50"
                                    disabled={!inputValue.trim() || isTyping}
                                >
                                    <FaPaperPlane />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all ${isOpen ? 'bg-red-500 shadow-red-500/20' : 'bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-cyan-500/40'
                    }`}
            >
                {isOpen ? (
                    <FaTimes className="text-white text-xl" />
                ) : (
                    <div className="relative">
                        <FaRobot className="text-white text-2xl" />
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-transparent border-white/10 animate-pulse"></span>
                    </div>
                )}
            </motion.button>
        </div>
    );
};

export default Chatbot;
