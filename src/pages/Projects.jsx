import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Projects = () => {

  useEffect(() => {
          window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'BrewNation',
      image: 'https://brewnation.netlify.app/',
      description: 'Web application that allows users to create custom beer recipes, to design your personalized beer, choosing from over 50 different beer styles',
      link: 'https://brewnation.netlify.app/'
    },
    {
      id: 2,
      title: 'Trojan Record Shop',
      image: 'https://source.unsplash.com/800x600/?portfolio',
      description: 'e-commerce platform that brings the joy of vinyl records to collectors and music enthusiasts worldwide.',
      link: 'https://trojan-record-shop.vercel.app/'
    },
    {
      id: 3,
      title: 'AI Logo Generator',
      image: 'https://source.unsplash.com/800x600/?portfolio',
      description: 'Web application that allows users to create professional logos using AI.',
      link: 'https://ailogogen.netlify.app/'
    },
    {
      id: 4,
      title: 'Weather Forecast',
      image: 'https://source.unsplash.com/800x600/?portfolio',
      description: 'This application allows users to register for various events hosted by the BVC Sports Club. Upon registration, users receive a confirmation with their registration details.',
      link: 'https://weatherfore01.netlify.app/'
    },
    {
      id: 5,
      title: 'Profile Sections Project',
      image: 'https://source.unsplash.com/800x600/?portfolio',
      description: 'This project showcases several interactive web functionalities such as displaying profile pictures with delayed name display, updating the current date and time in real-time, converting numerical grades to letter grades, sorting staff members in a table, and converting temperatures between Celsius and Fahrenheit.',
      link: 'https://profilesections.netlify.app/'
    },
    {
      id: 6,
      title: 'Bank Database Project',
      image: 'https://source.unsplash.com/800x600/?portfolio',
      description: 'The database is designed to manage customer accounts, employee information, loan processing, and branch management.',
      link: 'https://profilesections.netlify.app/'
    },
    {
      id: 7,
      title: 'Bank Database Project',
      image: 'https://source.unsplash.com/800x600/?portfolio',
      description: 'The database is designed to manage customer accounts, employee information, loan processing, and branch management.',
      link: 'https://yourprojectlink4.com'
    },
    {
      id: 8,
      title: 'Bank Database Project',
      image: 'https://source.unsplash.com/800x600/?portfolio',
      description: 'The database is designed to manage customer accounts, employee information, loan processing, and branch management.',
      link: 'https://yourprojectlink4.com'
    },
    {
      id: 9,
      title: 'Bank Database Project',
      image: 'https://source.unsplash.com/800x600/?portfolio',
      description: 'The database is designed to manage customer accounts, employee information, loan processing, and branch management.',
      link: 'https://yourprojectlink4.com'
    },
    {
      id: 10,
      title: 'Bank Database Project',
      image: 'https://source.unsplash.com/800x600/?portfolio',
      description: 'The database is designed to manage customer accounts, employee information, loan processing, and branch management.',
      link: 'https://yourprojectlink4.com'
    }
  ];

  return (
    <div className="py-20 bg-background">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl mb-4 text-center">My Projects</h1>
          <p className="text-xl mb-8 text-center">
            A collection of my recent work and creative endeavors
          </p>
        </motion.div>

        <Row className="g-4">
          {projects.map((project) => (
            <Col key={project.id} md={6} lg={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="project-card h-100">
                  <Card.Img variant="top" src={project.image} />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;