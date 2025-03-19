import React, { useRef, useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ThreeScene from '../components/ThreeScene';

const Home = () => {
  const [showFullText, setShowFullText] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const scrollRef = useRef(null);

  const handleWheel = (e) => {
    if (e.deltaY !== 0) {
    
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

  const projects = [
    { id: 1, title: 'BrewNation', image: '/images/project_1.jpg', description: 'Web application that allows users to create custom beer recipes.', link: 'https://brewnation.netlify.app/' },
    { id: 2, title: 'Trojan Record Shop', image: '/images/project_1.jpg', description: 'E-commerce platform that brings the joy of vinyl records to collectors and music enthusiasts worldwide.', link: 'https://trojan-record-shop.vercel.app/' },
    { id: 3, title: 'AI Logo Generator', image: '/images/project_1.jpg', description: 'Web application that allows users to create professional logos using AI.', link: 'https://ailogogen.netlify.app/' },
    { id: 4, title: 'Weather Forecast', image: '/images/project_1.jpg', description: 'weather web application that allows users to check the current weather and forecast for a specific city.', link: 'https://weatherfore01.netlify.app/' },
    { id: 5, title: 'Profile Sections Project', image: '/images/project_1.jpg', description: 'This project showcases several 3 section interactive web functionalities', link: 'https://profilesections.netlify.app/' },
    { id: 6, title: 'Project 6', image: '/images/project_1.jpg', description: 'Brand identity design', link: 'https://yourprojectlink1.com' },
  ];

  // State for "See More"
  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-r from-background to-light">
        <Container className="h-full py-20">
          <Row className="align-items-center">
            <Col md={6}>
              <motion.div {...fadeIn}>
                <h1 className="text-6xl font-bold mb-4">Felipe Mora</h1>
                <h3 className="text-4xl font-bold mb-4">Web Developer & Data Analyst</h3>
                <p className="text-xl mb-4">Web development has allowed me to combine my passion for design with my analytical expertise, crafting intuitive, data-driven user experiences.</p>
              </motion.div>
            </Col>
            <Col md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="flex justify-center items-center flex-col space-y-4"
              >
                <img
                  src="/images/tat.logo.png"
                  alt="Hero"
                  style={{ width: '200px', height: 'auto' }}
                />
                <div className="flex justify-between w-full">
                  <img
                    src="/images/m-logo.png"
                    alt="Left Image"
                    style={{ width: '250px', height: 'auto' }}
                  />
                  <img
                    src="/images/joya-logo.png"
                    alt="Right Image"
                    style={{ width: '200px', height: 'auto' }}
                  />
                </div>
              </motion.div>
            </Col>
          </Row>

          {/* Explanation paragraph */}
          <Row className="mt-4">
            <Col md={12}>
              <p className="text-center text-sm text-dark opacity-75">
                *Design serves as a visual language that captures moments and identities, offering insight into the values and perspectives of a person, team, or brand. It communicates who we are and how we connect with the world. These logos above not only capture moments but also reflect the essence of my creative journey, shaping unique narratives that intertwine design, technology, and user experience.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section className="about-me py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Row className="about-me-row align-items-center relative">
              <Col md={6} className="about-me-text-container">
                <div className="about-me-text bg-[#B2CAC9] p-6 rounded-lg shadow-md mb-6">
                  <h2 className="text-4xl mb-1">About Me</h2>
                  <p className="mb-1">
                    Hi, I'm Felipe.
                  </p>
                  <p className=" mb-1 text-justify font-light">
                  I'm currently in my last semester of a Software Development diploma at Bow Valley College. With a Bachelor of Business Administration and 6 years of experience managing multiple responsibilities, I am passionate about coding, problem-solving, and continuous learning. I specialize in web development, focusing on user experience, responsive design, and performance optimization.
                    {/* Truncated text */}
                    {showFullText && (
                      <>
                        <br />
                        My expertise includes data visualization, project management, and creating user-friendly, data-driven web interfaces. I have strong data analytics skills, with experience in market research, trend analysis, and predictive insights. I also have a solid background in improving data workflows to ensure accuracy and consistency in many industries.
                        <br />
                        Beyond technology, I am passionate about art and design, believing that logos, images, and graphics can communicate culture, identity, and user interaction like a work of art.
                      </>
                    )}
                  </p>
                  {/* See More Toggle */}
                  <div className="mt-3">
                    <span
                      className="see-more-text cursor-pointer text-blue-600"
                      onClick={toggleText}
                    >
                      {showFullText ? 'See Less' : '... See More'}
                    </span>
                  </div>

                  {/* See More Button */}
                  <div className="mt-3">
                    <p className="text-sm font-medium text-left mb-2">
                      Discover what's behind the scenes!
                    </p>
                    <Link to="/aboutme">
                      <Button variant="primary" size="md" className="d-inline-flex align-items-center see-more-btn">
                        About me
                      </Button>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col md={6} className="image-container">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="overflow-hidden"
              >
                <img
                  src="/images/aboutme.png"
                  alt="About"
                  className="img-about rounded-lg shadow-lg transform transition-all duration-300 hover:scale-95 hover:shadow-xl cursor-pointer"
                />
              </motion.div>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </section>

      {/* Featured Projects Section */}
      <section className="featured py-20 bg-background">
          <Container>
            <h2 className="text-4xl mb-8 text-center">Featured Projects</h2>

            <div className="hide-scrollbar overflow-x-scroll w-full hidden relative lg:block">
            <div 
              ref={scrollRef}
              onWheel={handleWheel}
              className="flex gap-6 mb-8 pb-4"
              style={{ 
                '--mp-horizontal-scroll--item-width': 'calc(90% - 1rem)',
                '--mp-horizontal-scroll--item-width--desktop': 'calc(33.3333% - 1.5rem)',
                '--mp-horizontal-scroll--item-max-width': '20rem',       '--mp-horizontal-scroll--item-max-width--desktop': '24rem',
                scrollBehavior: 'smooth',
                padding: 0, }}
            >
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  className="flex-none"
                  style={{
                    width: 'var(--mp-horizontal-scroll--item-width)',
                    maxWidth: 'var(--mp-horizontal-scroll--item-max-width)'
                  }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}

                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <div className="relative group overflow-hidden rounded-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[400px] object-cover rounded-xl transition-transform duration-300 group-hover:scale-110 cursor-pointer"
                    />
                    <div className="absolute bottom-0 left-0 p-4 rounded-br-xl">
                      <h3 className="text-[#E8F2F5] text-3xl font-bold">{project.title}</h3>
                      <p className="text-[#E8F2F5] text-xl font-light">{project.description}</p>
                    </div>
                  </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
            <div className="text-center">
              <Link to="/projects">
                <Button variant="primary" size="lg" className="d-inline-flex align-items-center">
                  View All Projects
                </Button>
              </Link>
            </div>
          </Container>
        </section>


      {/* Contact Section */}
      <section className="custom-padding bg-light">
        <Container>
          <Row>
            <Col md={6}>
              <h2 className="text-4xl mb-3">Let's Work Together</h2>
              <div className="three-scene-container mb-3">
                <ThreeScene />
              </div>
            </Col>
            <Col md={6} style={{ zIndex: 10 }}>
              <Form className="contact-form">
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Your message" />
                </Form.Group>
                <Button variant="primary" type="button" as="a" href="mailto:felipe.moraa13@gmail.com?subject=Let's%20Connect!" >
                  Send Message
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;