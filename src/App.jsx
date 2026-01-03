import { FaArrowUp } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetails from './components/ProjectDetails';

const Portfolio = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [hash]);

    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Projects />
                <Contact />
            </main>
            <Footer />
            <ScrollToTop />
        </>
    );
};

function App() {
    return (
        <div className="App font-sans text-base text-[#333] leading-normal">
            <Routes>
                <Route path="/" element={<Portfolio />} />
                <Route path="/project/:id" element={<ProjectDetails />} />
            </Routes>
        </div>
    );
}

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div
            className={`fixed bottom-8 right-8 z-50 transition-all duration-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        >
            <button
                onClick={scrollToTop}
                className="p-4 bg-primary hover:bg-blue-700 text-white rounded-full shadow-lg transition-all animate-bounce"
                aria-label="Scroll to Top"
            >
                <FaArrowUp size={24} />
            </button>
        </div>
    );
};

export default App;
