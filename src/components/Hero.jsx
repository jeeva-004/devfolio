import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaArrowDown } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen min-h-[600px] flex flex-col justify-center items-center overflow-hidden bg-light-bg dark:bg-dark-bg transition-colors duration-300">
            {/* Background Decorative Elements */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] opacity-50 dark:opacity-20 animate-blob"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] opacity-50 dark:opacity-20 animate-blob animation-delay-2000"></div>

            {/* Social Links - Absolute Position Left */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="hidden xl:flex flex-col gap-8 absolute left-12 bottom-0 top-0 justify-center z-10"
            >
                <SocialLink href="https://github.com/jeeva-004" icon="github" />
                <SocialLink href="https://www.linkedin.com/in/jeeva--m/" icon="linkedin" />
                <SocialLink href="https://x.com/jeeva_004" icon="twitter" />
                <SocialLink href="https://www.instagram.com/nanthan.2004/" icon="instagram" />
                <div className="w-[1px] h-24 bg-slate-300 dark:bg-slate-700 mx-auto mt-4"></div>
            </motion.div>

            {/* Main Content */}
            <div className="text-center z-10 px-4">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-[1.6rem] md:text-[2rem] font-medium text-primary mb-4 tracking-widest uppercase"
                >
                    Hi There!
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-[4rem] md:text-[7rem] font-bold tracking-tight mb-6 text-light-text dark:text-dark-text leading-tight"
                >
                    I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Jeevanantham M</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-[2rem] md:text-[3rem] text-slate-600 dark:text-slate-400 font-light mb-12"
                >
                    Full Stack Developer & UI/UX Enthusiast
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <a
                        href="#projects"
                        className="inline-block py-4 px-10 bg-primary hover:bg-blue-600 text-white font-bold text-[1.6rem] rounded-full shadow-lg shadow-blue-500/30 hover:shadow-xl hover:-translate-y-1 transition-all"
                    >
                        See My Work
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400 dark:text-slate-600"
            >
                <FaArrowDown size={24} />
            </motion.div>
        </section>
    );
};

const SocialLink = ({ href, icon }) => {
    let Icon = FaGithub;
    if (icon === 'linkedin') Icon = FaLinkedinIn;
    if (icon === 'twitter') Icon = FaTwitter;
    if (icon === 'instagram') Icon = FaInstagram;

    return (
        <a href={href} target="_blank" rel="noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary hover:-translate-y-1 transition-all transform text-3xl">
            <Icon />
        </a>
    )
}

export default Hero;
