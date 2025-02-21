import React from 'react';
import { Container } from 'react-bootstrap';
import { Github, Linkedin, Instagram } from 'lucide-react';
import logo from '../assets/images/m-white-logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#2C8780] py-8 mt-auto">
      <Container className="text-center">
        {/* Logo in Footer */}
        <div className="mb-4 d-flex justify-content-center">
          <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto' }} />
        </div>
        <p className="mb-2 text-[#E8F2F5]">Located in Calgary, AB from Colombia</p>
        <p className="mb-4 text-[#E8F2F5]">+1 (403) 714-6577</p>
        <div className="flex justify-center gap-4 mb-4">
          <a href="https://github.com/felipemora69" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/felipe-mora92/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Linkedin size={24} />
          </a>
          <a href="https://www.instagram.com/felipemora69/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Instagram size={24} />
          </a>
        </div>
        <p className="text-sm text-[#E8F2F5]">© {new Date().getFullYear()} All rights reserved, trojan69 Design. <br></br>Making the complex simple. </p>
      </Container>
    </footer>
  );
};

export default Footer;