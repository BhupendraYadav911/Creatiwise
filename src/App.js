import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Expertise from './components/Expertise';
import Works from './components/Works';
import Experience from './components/Experience';
import Blog from './components/Blog';
import Footer from './components/Footer';
import './styles/App.css';
import Reviews from './components/Review';
import Accordion from './components/Accordion';
import MarqueeBanner from './components/MarqueeBanner';

const App = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <div>
            <Navbar />
            <section id="home"><Home /></section>
            <section id="about"><Expertise /></section>
            <section id="projects"><Works /></section>
            <Experience />
            <Blog />
            <Reviews />
            <Accordion />
            <MarqueeBanner />
            <section id="contact"><Footer /></section>
        </div>
    );
};

export default App;
