import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const certificationsData = [
    {
        id: 1,
        title: 'Data Science',
        image: './public/certifications/Data-science.png',
        liveLink: 'https://drive.google.com/file/d/1mEBN-oYueMdzdatdAP5L8-JVqkltc-Q0/view?usp=sharing'
    },
    {
        id: 2,
        title: 'Natural Language Processing',
        image: './public/certifications/Natural-Language-Processing.png',
        liveLink: 'https://drive.google.com/file/d/16HmK6yH1rhHVOjaS1YtXml4Xd88boKgX/view?usp=sharing'
    },
    {
        id: 3,
        title: 'Artificial Intelligence',
        image: './public/certifications/ai.png',
        liveLink: 'https://drive.google.com/file/d/1vXXLh6CM1y6m3GcpeO6HZxxw-WCveWCf/view?usp=sharing'
    }
];

const Certifications = () => {
    return (
        <section id="certifications" className="py-40 bg-white dark:bg-dark-card transition-colors duration-300">
            <div className="max-w-[120rem] mx-auto px-8">
                <div className="text-center mb-24">
                    <h2 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] uppercase font-bold tracking-[3px] mb-8 relative inline-block text-light-text dark:text-dark-text">
                        Certifications
                        <span className="absolute left-1/2 -bottom-6 w-12 h-2 bg-primary -translate-x-1/2 rounded"></span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-[2rem] font-medium max-w-[80rem] mx-auto mt-8">
                        “Continuous learning and professional development.”
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <AnimatePresence>
                        {certificationsData.map((cert) => (
                            <motion.div
                                key={cert.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="group h-auto md:h-[400px] md:perspective-1000"
                            >
                                <div className="relative w-full h-full duration-700 md:preserve-3d md:group-hover:rotate-y-180 flex flex-col md:block">
                                    {/* Front Side */}
                                    <div className="relative md:absolute inset-0 w-full h-[300px] md:h-full md:backface-hidden rounded-2xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-700 bg-white dark:bg-dark-card z-10 flex items-center justify-center p-4">
                                        <img
                                            src={cert.image}
                                            alt={cert.title}
                                            className="w-full h-full object-contain"
                                        />
                                        <div className="absolute inset-0 bg-black/5"></div>
                                    </div>

                                    {/* Back Side (Details) */}
                                    <div className="relative md:absolute inset-0 w-full md:h-full md:backface-hidden md:rotate-y-180 rounded-b-2xl md:rounded-2xl overflow-hidden shadow-xl bg-white dark:bg-dark-card md:bg-primary md:dark:bg-slate-800 p-6 md:p-8 flex flex-col items-center justify-center text-center border-t-0 md:border-2 border-slate-100 dark:border-slate-700 md:border-primary md:dark:border-slate-600">
                                        <h3 className="text-3xl font-bold text-slate-800 dark:text-white md:text-white mb-4 md:mb-6 uppercase tracking-wide">{cert.title}</h3>
                                        <a
                                            href={cert.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="py-3 px-8 bg-primary md:bg-white text-white md:text-primary uppercase font-bold text-[1.4rem] rounded-full hover:bg-blue-600 md:hover:bg-slate-100 scale-100 hover:scale-105 transition-transform shadow-lg"
                                        >
                                            View Certificate
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
