import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Collaboration from './pages/collaboration';
import Aboutme from './pages/Aboutme';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/collaboration" element={<Collaboration />} />
            <Route path="/aboutme" element={<Aboutme />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;