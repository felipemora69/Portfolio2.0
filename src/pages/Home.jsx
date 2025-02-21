import React, { useRef } from 'react';
import { Container, Row, Col, Button, Form, Carousel } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ThreeScene from '../components/ThreeScene';

const Home = () => {
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
    { id: 1, title: 'Project 1', image: '/images/project_1.jpg', description: 'A modern web application'  },
    { id: 2, title: 'Project 2', image: '/images/project_1.jpg', description: 'Brand identity design' },
    { id: 3, title: 'Project 3', image: 'https://source.unsplash.com/800x600/?design,creative', description: 'Brand identity design' },
    { id: 4, title: 'Project 4', image: 'https://source.unsplash.com/800x600/?design,creative', description: 'Brand identity design' },
    { id: 5, title: 'Project 5', image: 'https://source.unsplash.com/800x600/?design,creative', description: 'Brand identity design' },
    { id: 6, title: 'Project 6', image: 'https://source.unsplash.com/800x600/?design,creative', description: 'Brand identity design' },
    { id: 7, title: 'Project 7', image: 'https://source.unsplash.com/800x600/?design,creative', description: 'Brand identity design' },
    { id: 8, title: 'Project 8', image: 'https://source.unsplash.com/800x600/?design,creative', description: 'Brand identity design' },
  ];

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
                  src="src/assets/images/tat.logo.png"
                  alt="Hero"
                  style={{ width: '200px', height: 'auto' }}
                />
                <div className="flex justify-between w-full">
                  <img
                    src="src/assets/images/m-logo.png"
                    alt="Left Image"
                    style={{ width: '250px', height: 'auto' }}
                  />
                  <img
                    src="src/assets/images/joya-logo.png"
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
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Row className="align-items-center relative">
              <Col md={6}>
                <div className="relative z-10 bg-[#B2CAC9] p-6 rounded-lg shadow-md mb-6" style={{ position: 'absolute', top: '5%', left: '0', right: '0', width: '55%' }}>
                  <h2 className="text-4xl mb-1">About Me</h2>
                  <p className="mb-1">
                    Hi, I'm Felipe.
                  </p>
                  <p className=" mb-1 text-justify font-light">
                  I'm currently in my last semester of a Software Development diploma at Bow Valley College. With a Bachelor of Business Administration and 6 years of experience managing multiple responsibilities, I am passionate about coding, problem-solving, and continuous learning. I specialize in web development, focusing on user experience, responsive design, and performance optimization.<br></br>
                  My expertise includes data visualization, project management, and creating user-friendly, data-driven web interfaces. I have strong data analytics skills, with experience in market research, trend analysis, and predictive insights. I also have a solid background in improving data workflows to ensure accuracy and consistency in many industries.
                  Beyond technology, I am passionate about art and design, believing that logos, images, and graphics can communicate culture, identity, and user interaction like a work of art.
                  </p>

                  {/* See More Button */}
                  <div className="mt-3">
                    <p className="text-sm font-medium text-left mb-2">
                      Discover what's behind the scenes!
                    </p>
                    <Link to="/aboutme">
                      <Button variant="primary" size="md" className="d-inline-flex align-items-center see-more-btn">
                        See More
                      </Button>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col md={6} className="relative">
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
      <section className="py-20 bg-background">
          <Container>
            <h2 className="text-4xl mb-8 text-center">Featured Projects</h2>
            <div 
              ref={scrollRef}
              onWheel={handleWheel}
              className="flex overflow-x-auto hide-scrollbar gap-6 mb-8 pb-4"
              style={{ scrollBehavior: 'smooth' }}
            >
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  className="flex-none w-[400px]"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[400px] object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-[1.02] cursor-pointer"
                    />
                    <div className="absolute bottom-0 left-0 p-4 rounded-br-lg">
                      <h3 className="text-[#E8F2F5] text-3xl font-bold">{project.title}</h3>
                      <p className="text-[#E8F2F5] text-xl font-light">{project.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
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
              <div className="mb-3" style={{ top: '2175px', left: '-50px', position: 'absolute', height: '610px', width: '1380px' }}>
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