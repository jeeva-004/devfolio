import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaLayerGroup, FaCode } from 'react-icons/fa';
import { projectsData } from '../data/projects';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-dark-bg text-slate-800 dark:text-slate-100">
                <h2 className="text-4xl font-bold mb-4">Project Not Found</h2>
                <Link to="/" className="text-primary hover:underline text-xl">Back to Home</Link>
            </div>
        );
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-dark-bg transition-colors duration-300 relative overflow-hidden font-sans">
            {/* Background Decoration */}
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-white/70 dark:bg-dark-card/70 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 transition-all duration-300">
                <div className="max-w-[120rem] mx-auto px-8 py-5">
                    <Link to="/#projects" className="inline-flex items-center gap-3 text-[1.6rem] font-bold text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary transition-all group">
                        <span className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full group-hover:-translate-x-1 transition-transform">
                            <FaArrowLeft size={16} />
                        </span>
                        Back to Projects
                    </Link>
                </div>
            </nav>

            <main className="pt-48 pb-32 max-w-[110rem] mx-auto px-8 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Header Section */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <span className="inline-block py-2 px-6 bg-primary/10 text-primary rounded-full text-[1.4rem] font-bold uppercase tracking-wider mb-6">
                            Case Study
                        </span>
                        <h1 className="text-[4rem] md:text-[6rem] font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
                            {project.title}
                        </h1>
                        <p className="text-[1.8rem] text-slate-600 dark:text-slate-400 max-w-[80rem] mx-auto leading-relaxed">
                            {project.description}
                        </p>
                    </motion.div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Left Column: Image */}
                        <motion.div variants={itemVariants} className="">
                            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-dark-card relative group">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-auto max-h-[500px] object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </motion.div>

                        {/* Right Column: Details Card */}
                        <motion.div variants={itemVariants} className="relative">
                            <div className="bg-white/80 dark:bg-dark-card/80 backdrop-blur-md p-10 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 sticky top-40">

                                <div className="mb-10">
                                    <div className="flex items-center gap-3 mb-6">
                                        <FaLayerGroup className="text-primary text-3xl" />
                                        <h3 className="text-[2.2rem] font-bold text-slate-900 dark:text-white">Tech Stack</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        {project.technologies.map((tech, index) => (
                                            <motion.span
                                                key={tech}
                                                whileHover={{ scale: 1.05 }}
                                                className="bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-lg text-[1.4rem] font-semibold border border-slate-200 dark:border-slate-600 cursor-default"
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <h3 className="text-[2.2rem] font-bold text-slate-900 dark:text-white flex items-center gap-3">
                                        <FaCode className="text-primary text-3xl" /> Links & Resources
                                    </h3>
                                    <div className="grid grid-cols-1 gap-4">
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="group flex items-center justify-between p-4 bg-primary text-white rounded-xl font-bold text-[1.6rem] shadow-lg shadow-primary/30 hover:shadow-primary/40 transition-all hover:-translate-y-1"
                                        >
                                            <span className="flex items-center gap-3"><FaExternalLinkAlt /> Live Preview</span>
                                            <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        </a>
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="group flex items-center justify-between p-4 bg-slate-800 dark:bg-slate-700 text-white rounded-xl font-bold text-[1.6rem] shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                                        >
                                            <span className="flex items-center gap-3"><FaGithub /> Source Code</span>
                                            <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    </div>

                </motion.div>
            </main>
        </div>
    );
};

export default ProjectDetails;
