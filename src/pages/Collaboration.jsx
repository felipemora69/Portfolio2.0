import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import ThreeScene from '../components/ThreeScene';

const Collaboration = () => {
  return (
    <div className="py-20 bg-background">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl mb-4 text-center">Let's Collaborate</h1>
          <p className="text-xl mb-8 text-center">
            Have a project in mind? Let's work together to bring your ideas to life
          </p>
        </motion.div>

        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <div style={{ height: '400px' }}>
            <ThreeScene />
            </div>
          </Col>
          <Col md={6}>
            <Form className="contact-form bg-white p-4 rounded-lg shadow-sm">
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Project Details</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Tell me about your project" />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Send Proposal
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Collaboration;