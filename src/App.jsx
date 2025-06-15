// App.jsx
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './components/Home';
import Expertise from './components/Expertise';
import Works from './components/Works';
import Experience from './components/Experience';
import Blog from './components/Blog';
import Reviews from './components/Review';
import Accordion from './components/Accordion';
import MarqueeBanner from './components/MarqueeBanner';

import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import ProfileWizard from './components/create-profile/ProfileWizard';

import './styles/App.css';

const MainPage = () => {
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
    <>
      <section id="home"><Home /></section>
      <section id="about"><Expertise /></section>
      <section id="projects"><Works /></section>
      <Experience />
      <Blog />
      <Reviews />
      <Accordion />
      <MarqueeBanner />
      <section id="contact"><Footer /></section>
    </>
  );
};

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile-wizard" element={<ProfileWizard />} />
      </Routes>
    </>
  );
};

export default App;
