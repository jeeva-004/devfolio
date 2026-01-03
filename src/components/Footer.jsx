import React from 'react';
import { motion } from 'framer-motion'

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white py-20 border-t border-slate-800">
            <div className="max-w-[120rem] mx-auto px-8">
                <div className="flex flex-col-reverse md:flex-row justify-between items-center border-b border-slate-800 pb-12 mb-12 gap-12 md:gap-8">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h2 className="text-[2.2rem] uppercase tracking-wider font-bold mb-4">Social</h2>
                        <div className="flex gap-4">
                            <SocialIcon href="https://www.linkedin.com/in/jeeva--m/" src="/assets/png/linkedin-ico.png" />
                            <SocialIcon href="https://github.com/jeeva-004" src="/assets/png/github-ico.png" />
                            <SocialIcon href="https://x.com/jeeva_004" src="/assets/png/twitter-ico.png" />
                            <SocialIcon href="https://www.instagram.com/nanthan.2004/" src="/assets/png/insta-ico.png" isLast />
                        </div>
                    </div>

                    <div className="text-center md:text-right w-full md:w-auto">
                        <h4 className="text-[2.2rem] uppercase font-bold mb-2">Jeevanantham M</h4>
                        <p className="text-[1.6rem] text-slate-400">
                            “Learning step by step, creating along the way.”
                        </p>
                    </div>
                </div>

                <div className="text-center text-slate-500 text-[1.4rem]">
                    &copy; {new Date().getFullYear()} Designed and Built by <span className="text-primary font-bold">Jeevanantham M</span>.
                </div>
            </div>
        </footer>
    );
};

const SocialIcon = ({ href, src, isLast }) => (
    <a href={href} target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform p-2 bg-white/5 rounded-full hover:bg-white/10">
        <img src={src} alt="Social" className="w-8 h-8 filter invert brightness-0 " /> {/* Force white icons assuming pngs are black or colored */}
    </a>
);

export default Footer;
