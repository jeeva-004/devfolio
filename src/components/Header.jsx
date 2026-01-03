import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-dark-card/80 backdrop-blur-md shadow-sm transition-colors duration-300">
      <div className="flex justify-between items-center py-4 px-8 max-w-[120rem] mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-4 cursor-pointer">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20 ring-2 ring-primary/10 transition-all hover:ring-primary/50">
            <img
              src="/assets/png/my-image.png"
              alt="Jeeva M"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-2xl font-bold uppercase tracking-wide text-light-text dark:text-dark-text hover:text-primary transition-colors">
            Jeevanantham M
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav>
            <ul className="flex gap-8 text-[1.6rem] font-medium text-light-text dark:text-dark-text">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-primary dark:hover:text-primary transition-colors duration-300 relative group px-2 py-1"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            onClick={toggleTheme}
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <FaMoon size={18} /> : <FaSun size={18} />}
          </button>
        </div>


        {/* Mobile Menu Actions */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-yellow-400"
          >
            {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
          </button>
          <button onClick={toggleMenu} className="text-light-text dark:text-dark-text z-50 p-2">
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaTimes size={28} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaBars size={28} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 w-full bg-white dark:bg-dark-card shadow-xl border-t border-gray-100 dark:border-gray-800 md:hidden flex flex-col items-center py-8"
            >
              <ul className="flex flex-col items-center gap-6 text-2xl font-bold uppercase text-light-text dark:text-dark-text w-full">
                {navLinks.map((link) => (
                  <li key={link.name} className="w-full text-center">
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block w-full py-2 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
