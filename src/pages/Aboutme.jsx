import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Aboutme = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-20 bg-white">
      <Container>
        <motion.div {...fadeIn}>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 className="text-4xl mb-4">About Me</h2>
              <p className="text-lg font-light">
                Hi, I'm Felipe! I have a passion for coding and problem-solving, and I'm on a journey to improve my skills in web development.
              </p>
              <p className="mb-3">
                I'm currently finishing my Software Development diploma at Bow Valley College, and I hold a Bachelor of Business Administration. Over the last 6 years, I've had the opportunity to work in various roles that required me to manage responsibilities and lead teams. This experience has helped me gain a strong foundation in project management, data analysis, and web development.
              </p>
              <p>
                I'm always excited about learning new technologies and tools to improve my development skills. In my free time, I enjoy exploring design concepts and creating user interfaces that are both visually appealing and functional.
              </p>
              <div className="mt-3">
                <Link to="/projects">
                  <Button variant="primary" size="lg">
                    View My Projects
                  </Button>
                </Link>
              </div>
            </Col>
            <Col md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="overflow-hidden"
              >
                <img
                  src="/images/aboutme.png" // Make sure the image path is correct
                  alt="About"
                  className="rounded-lg shadow-lg transform transition-all duration-300 hover:scale-95 hover:shadow-xl cursor-pointer"
                />
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Aboutme;