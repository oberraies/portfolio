import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './assets/Components/Header';
import Footer  from './assets/Components/Footer';
import Home from './pages/Home';
import CV  from './pages/CV';
import Projets  from './pages/Projets';
import Contact  from './pages/Contact';
import './App.css';

function App() {
    return(
        <div className="app-container">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/CV" element={<CV />} />
                <Route path="/Projets" element={<Projets />} />
                <Route path="/Contact" element={<Contact />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;