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
          <Row className="align-items-center mb-4 justify-content-center">
            <h2 className="text-center text-4xl mb-4">About Me</h2>
          </Row>

          {/* Grid Layout */}

          {/* First Row */}
          <Row className="mb-4">
            {/* First Column - Section 1 */}
            <Col md={6} className="mb-4">
              <div className="border p-4 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold">A Colombian Heart, A World of Traditions</h3>
                <p className="text-justify">
                  Hello! I’m from Bogotá, Colombia, a vibrant city in a beautiful country known for its culture, coffee, and warm-hearted people. Spanish is my first language, but I also speak English fluently, which allows me to connect with people from all walks of life. From a young age, I’ve had a deep love for sports, especially football (soccer), and I grew up playing with my brother, also enjoying basketball and tennis. But it wasn’t just about playing – sports have always been a way of bonding with my family, particularly with my grandparents. Every weekend, we would watch soccer games, Formula 1 races, and cycling events like La Vuelta a España and the Tour de France. These moments left a lasting imprint on me, and even though my grandparents are no longer with us, their love for sports lives on in me.
                </p>
                <p className="text-justify">
                  I live with my partner (whom I consider my wife) of 15 years, and our adorable cat, Kyoto, who we adopted from the Calgary Humane Society a little over a year ago. Together, we've built a life slowly but surely, and I couldn’t be more grateful for the wonderful memories we continue to create.
                </p>
              </div>
            </Col>

            {/* Second Column - Placeholder for Image */}
            <Col md={6} className="mb-4">
              {/* Add image or content here in the future */}
              <div className=''>
                <img
                  src="/images/section1.png"
                  alt="Section Image"
                  style={{ width: '500px', height: '490px', borderRadius: '8px' }}
                />
              </div>
            </Col>
          </Row>

          {/* Second Row */}
          <Row className="mb-4">
            {/* First Column - Placeholder for Image */}
            <Col md={6} className="mb-4">
              {/* Add image or content here in the future */}
              <div>
                <img
                  src="/images/section2.jpg"
                  alt="Section Image"
                  style={{ width: '600px', height: '500px', borderRadius: '8px' }}
                />
              </div>
            </Col>

            {/* Second Column - Section 2 */}
            <Col md={6} className="mb-4">
              <div className="border p-4 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold">A Passion for Reggae, Fashion, and Influences from UK & Jamaica</h3>
                <p className="text-justify">
                  Since I was a kid, I've been deeply connected to early reggae and traditional ska. These genres didn’t just shape my musical tastes but also influenced the cultural scene, especially in Jamaica and later in the UK. Reggae and ska helped fuel the independence movement in Jamaica, later evolving into rocksteady, and these sounds crossed the seas to the UK, where they became part of the culture. From skinheads to rude boys, the early reggae scene was deeply rooted in British youth culture and made its way to Colombia, where I became a part of that scene.
                </p>
                <p className="text-justify">
                  I’m a fan of brands that represent that culture, like Fred Perry, Dr. Martens (which even inspired a tattoo of a cherry-red boot!), Ben Sherman, Levi’s, and many others. Over the years, I’ve developed an admiration for terrace fashion, with brands like Stone Island, MA Strum, Lyle & Scott, Pretty Green, Merc, adidas Originals, kappa, Sergio Tachini, Fila Vintage, Lacoste, Umbro, and Ellese being some of my favorites. Though I may not own all these brands due to their cost, I admire their style and the influence they’ve had, especially on the stadium terraces.
                </p>
                <p className="text-justify">
                  I have a strong desire to travel to Jamaica and the UK to immerse myself further in the culture that has influenced me deeply.
                </p>
              </div>
            </Col>
          </Row>

          {/* Third Row */}
          <Row className="mb-4">
            {/* First Column - Section 3 */}
            <Col md={6} className="mb-4">
              <div className="border p-4 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold">Craft Beer Enthusiast & Vinyl Collector</h3>
                <p className="text-justify">
                  Aside from my love for sports and music, I have two significant hobbies that allow me to unwind and enjoy life. The first is brewing craft beer. This passion led me to start a homebrew business in Colombia called Trafuga Brewery, where I, along with my best friends, brewed some memorable beers. I still enjoy tasting different craft beers, especially German styles like Weizenbier, Stouts, Barleywine, and of course, our signature Grissette. Visiting bottle shops and tasting new beers is a tradition I continue today.
                </p>
                <p className="text-justify">
                  The second hobby is collecting vinyl records. I’ve always been a fan of ska, reggae, and rocksteady from labels like Studio One and Trojan Records. The sound of vinyl adds a certain authenticity to the music that digital platforms just can’t replicate. Alongside these genres, I enjoy a broad mix of music including indie rock, house, dance, rap, salsa, and cumbia. When I’m in the mood to party, reggaeton is my go-to!
                </p>
              </div>
            </Col>

            {/* Second Column - Placeholder for Image */}
            <Col md={6} className="mb-4">
              {/* Add image or content here in the future */}
              <div>
                <img
                  src="/images/section3.png"
                  alt="Section Image"
                  style={{ width: '500px', height: '420px', borderRadius: '8px' }}
                />
              </div>
            </Col>
          </Row>

          {/* Button to View Projects */}
          <div className="mt-4 text-center">
            <Link to="/projects">
              <Button variant="primary" size="lg">
                View My Projects
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Aboutme;