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
      title: 'E-commerce Platform',
      image: 'https://source.unsplash.com/800x600/?ecommerce',
      description: 'A full-featured e-commerce platform with modern UI/UX',
    },
    {
      id: 2,
      title: 'Portfolio Website',
      image: 'https://source.unsplash.com/800x600/?portfolio',
      description: 'A responsive portfolio website for a creative agency',
    },
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