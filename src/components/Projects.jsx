import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

const Projects = () => {
    const [filter, setFilter] = useState('all');

    const filteredProjects = filter === 'all'
        ? projectsData
        : projectsData.filter(p => p.category === filter);

    return (
        <section id="projects" className="py-40 bg-slate-50 dark:bg-dark-bg transition-colors duration-300">
            <div className="max-w-[120rem] mx-auto px-8">
                <div className="text-center mb-24">
                    <h2 className="text-[4rem] uppercase font-bold tracking-[3px] mb-8 relative inline-block text-light-text dark:text-dark-text">
                        Projects
                        <span className="absolute left-1/2 -bottom-6 w-12 h-2 bg-primary -translate-x-1/2 rounded"></span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-[2rem] font-medium max-w-[80rem] mx-auto mt-8">
                        “A curated showcase of my technical explorations and UI/UX experiments.”
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex justify-center gap-4 mb-20 flex-wrap">
                    {['All', 'Frontend', 'Full-Stack'].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat === 'All' ? 'all' : cat === 'Frontend' ? 'front' : 'full')}
                            className={`text-[1.6rem] py-3 px-8 rounded-full font-bold transition-all duration-300 border-2 ${(filter === 'all' && cat === 'All') ||
                                (filter === 'front' && cat === 'Frontend') ||
                                (filter === 'full' && cat === 'Full-Stack')
                                ? 'bg-primary border-primary text-white shadow-lg scale-105'
                                : 'bg-transparent border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="group h-auto md:h-[300px] md:perspective-1000"
                            >
                                <div className="relative w-full h-full duration-700 md:preserve-3d md:group-hover:rotate-y-180 flex flex-col md:block">
                                    {/* Front Side */}
                                    <div className="relative md:absolute inset-0 w-full h-[250px] md:h-full md:backface-hidden rounded-2xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-700 bg-white dark:bg-dark-card z-10">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/10"></div>
                                    </div>

                                    {/* Back Side (Details) */}
                                    <div className="relative md:absolute inset-0 w-full md:h-full md:backface-hidden md:rotate-y-180 rounded-b-2xl md:rounded-2xl overflow-hidden shadow-xl bg-white dark:bg-dark-card md:bg-primary md:dark:bg-slate-800 p-6 md:p-8 flex flex-col items-center justify-center text-center border-t-0 md:border-2 border-slate-100 dark:border-slate-700 md:border-primary md:dark:border-slate-600">
                                        <h3 className="text-3xl font-bold text-slate-800 dark:text-white md:text-white mb-4 md:mb-6 uppercase tracking-wide">{project.title}</h3>
                                        <Link
                                            to={`/project/${project.id}`}
                                            className="py-3 px-8 bg-primary md:bg-white text-white md:text-primary uppercase font-bold text-[1.4rem] rounded-full hover:bg-blue-600 md:hover:bg-slate-100 scale-100 hover:scale-105 transition-transform shadow-lg"
                                        >
                                            View Case Study
                                        </Link>
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

export default Projects;
