import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    // Skills updated as requested
    const skills = ['C', 'Java', 'React.js', 'Node.js', 'SCSS', 'Tailwind'];

    return (
        <section id="about" className="py-40 bg-white dark:bg-dark-card transition-colors duration-300">
            <div className="max-w-[120rem] mx-auto px-8">
                <div className="text-center mb-24">
                    <h2 className="text-[4rem] uppercase font-bold tracking-[3px] mb-8 relative inline-block text-light-text dark:text-dark-text">
                        About Me
                        <span className="absolute left-1/2 -bottom-6 w-12 h-2 bg-primary -translate-x-1/2 rounded"></span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-[2rem] font-medium max-w-[80rem] mx-auto mt-8">
                        “Transforming complex problems into elegant, efficient code.”
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-20 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-[2.8rem] font-bold mb-8 text-light-text dark:text-dark-text">Professional Journey</h3>
                        <div className="text-[1.8rem] text-slate-600 dark:text-slate-300 leading-relaxed space-y-6 text-justify">
                            <p>
                                I am <strong>Jeevanantham</strong>, a Mathematics specialist who has pivoted into advanced computing, currently pursuing my <strong>MCA (Master of Computer Applications)</strong>. My background in mathematics gives me a unique perspective on algorithmic problem-solving and logic optimization.
                            </p>
                            <p>
                                My passion lies in <strong>architecting robust web solutions</strong> and constantly expanding my technical arsenal. I believe in a hands-on approach to mastery—translating theoretical concepts into tangible, <strong>practical applications</strong>. Dedicated to <strong>continuous growth and consistency</strong>, I am poised to make a significant impact as a professional in the IT industry.
                            </p>
                        </div>
                        <div className="flex gap-4 mt-12 flex-wrap">
                            <a href="#contact" className="flex-1 text-center py-4 px-10 bg-primary text-white font-bold text-[1.6rem] uppercase rounded shadow-lg hover:-translate-y-1 transition-transform">Contact</a>
                            <a href="/resume/my-profile.pdf" target="_blank" className="flex-1 text-center py-4 px-10 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white font-bold text-[1.6rem] uppercase rounded shadow-lg hover:-translate-y-1 transition-transform">Resume</a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-[2.8rem] font-bold mb-8 text-light-text dark:text-dark-text">Technical Arsenal</h3>
                        <div className="flex flex-wrap gap-4">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 py-4 px-8 rounded-lg font-bold text-[1.6rem] hover:bg-primary hover:text-white hover:border-primary dark:hover:bg-primary dark:hover:text-white transition-all cursor-default shadow-sm"
                                >
                                    {skill}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default About;
