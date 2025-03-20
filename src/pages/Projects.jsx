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
      image: 'https://images.unsplash.com/photo-1567696911980-2eed69a46042?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Web application that allows users to create custom beer recipes adjusting the liters, to design your personalized beer, choosing from over 50 different beer styles.',
      link: 'https://brewnation.netlify.app/'
    },
    {
      id: 2,
      title: 'Trojan Record Shop',
      image: 'https://images.unsplash.com/photo-1549477606-43a329b26066?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'E-commerce platform that brings the joy of vinyl records to collectors and music enthusiasts worldwide, offering a wide range of classic albums, and new releases.',
      link: 'https://trojan-record-shop.vercel.app/'
    },
    {
      id: 3,
      title: 'ILRCC',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1510&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Client project focuses on enhancing both the back-end and front-end of the website to improve overall functionality, database structure, performance, and user experience.',
      link: 'https://yourprojectlink4.com'
    },
    {
      id: 4,
      title: 'AI Logo Generator',
      image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Web application that allows users to create professional logos using AI, providing a user-friendly interface with customizable styles, and make it through a prompt.',
      link: 'https://ailogogen.netlify.app/'
    },
    {
      id: 5,
      title: 'Weather Forecast',
      image: 'https://images.unsplash.com/photo-1630260667842-830a17d12ec9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'This application allows users to register for various events hosted by the BVC Sports Club. Upon registration, users receive a confirmation with their registration details.',
      link: 'https://weatherfore01.netlify.app/'
    },
    {
      id: 6,
      title: 'Profile Sections Project',
      image: 'https://images.unsplash.com/photo-1624296031259-87f8e19558cb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'This project showcases several interactive web functionalities such as converting numerical grades to letter, and converting temperatures between C° and F°.',
      link: 'https://profilesections.netlify.app/'
    },
    {
      id: 7,
      title: 'UI Projects',
      image: 'https://images.unsplash.com/photo-1624296031259-87f8e19558cb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'The database is designed to manage customer accounts, employee information, loan processing, and branch management.',
      link: 'https://profilesections.netlify.app/'
    },
    {
      id: 8,
      title: 'Bank Database Project',
      image: 'https://images.unsplash.com/photo-1624296031259-87f8e19558cb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'The database is designed to manage customer accounts, employee information, loan processing, and branch management.',
      link: 'https://yourprojectlink4.com'
    },
    {
      id: 9,
      title: 'Bank Database Project',
      image: 'https://images.unsplash.com/photo-1624296031259-87f8e19558cb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'The database is designed to manage customer accounts, employee information, loan processing, and branch management.',
      link: 'https://yourprojectlink4.com'
    },
    {
      id: 10,
      title: 'Bank Database Project',
      image: 'https://images.unsplash.com/photo-1624296031259-87f8e19558cb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
                {/* Wrap the Card with an anchor tag for linking */}
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Card className="project-card h-100">
                    <Card.Img 
                      variant="top" 
                      src={project.image} 
                      className="project-img"
                      style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                    />
                    <Card.Body>
                      <Card.Title style={{ color: 'var(--primary)', fontSize: '24px', textAlign: 'justify' }}>{project.title}</Card.Title>
                      <Card.Text style={{ color: 'var(--dark)', fontSize: '15px', textAlign: 'justify' }}>{project.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </a>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;