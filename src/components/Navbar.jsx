import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar as BsNavbar, Container, Nav } from 'react-bootstrap';
import logo from '/images/m-logo.png';

const Navbar = () => {
  const location = useLocation();
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.location.reload();
    } else {
      window.location.href = '/';
    }
  };

  // Handle menu when is clicked
  const handleMenuClick = () => {
    setIsMenuExpanded(!isMenuExpanded);
  };

  return (
    <BsNavbar expand="lg" className="py-2 shadow-sm bg-[#2C8780]">
      <Container>
        <BsNavbar.Brand as={Link} to="/" className="d-flex align-items-center">
          {/* Logo Image */}
          <img src={logo} alt="Logo" className="me-2" style={{ width: '60px', height: '45px' }} />
        </BsNavbar.Brand>
        <div onClick={handleMenuClick} className="d-lg-none burger-icon">
          <span className="navbar-toggler-icon"></span>
        </div>
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/projects"
              className={location.pathname === '/projects' ? 'active' : ''}
            >
              Projects
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/collaboration"
              className={location.pathname === '/collaboration' ? 'active' : ''}
            >
              Collaboration
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/aboutme"
              className={location.pathname === '/aboutme' ? 'active' : ''}
            >
              About me
            </Nav.Link>
          </Nav>
        </BsNavbar.Collapse>

        {/* Dropdown menu */}
        {isMenuExpanded && (
          <div className="side-menu">
            <Nav className="flex-column">
              <Nav.Link 
                as={Link} 
                to="/projects"
                className={location.pathname === '/projects' ? 'active' : ''}
              >
                Projects
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/collaboration"
                className={location.pathname === '/collaboration' ? 'active' : ''}
              >
                Collaboration
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                to="/aboutme"
                className={location.pathname === '/aboutme' ? 'active' : ''}
              >
                About me
              </Nav.Link>
            </Nav>
          </div>
        )}
      </Container>
    </BsNavbar>
  );
};

export default Navbar;