import React, { useEffect, useState } from 'react';
import './wlcStyle.css';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import bgImage from '../images/bg1.jpg';
import bgImage2 from '../images/bg2.jpg';
import bgImage3 from '../images/bg3.jpg';
import bgImage4 from '../images/bg4.jpg';
import circuitCraftsLogo from '../images/logo.png';

const WelcomePage = () => {

// -------------------------------------------- for the auto background change ----------------

  const [bgIndex, setBgIndex] = useState(0);
  const bgImages = [bgImage, bgImage2, bgImage3, bgImage4]; 

  useEffect(() => {
    const interval = setInterval(() => {
      
      setBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, [bgImages.length]);


  //---------------------------------------------- title animation -----------------------
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

 //-------------------------------------------------------------------------------------

  return (
<>

      <Container fluid className="background-container">    
      <Row> 
      <Col xs={6} md={12}>
     
<div className='background-container' style={{backgroundImage: `url(${bgImages[bgIndex]})`}}>
  <div className='overlay'>

    <Navbar bg="dark" variant="dark" expand="lg" className="justify-content-between">
      <Container>
      <Navbar.Brand href="#">
            <img
              src={circuitCraftsLogo}
              alt="CircuitCrafts Logo"
              height="30"
              className="d-inline-block align-top"
            />
      </Navbar.Brand>
      
          <Nav className="ml-auto">
            <button className='b1' >SIGN UP</button>
            <button className='b2' >SIGN IN</button>
          </Nav>
          
      </Container>
    </Navbar>

  </div>
      <div className={`con-left ${isVisible ? 'visible' : ''}`}>
          <h1>CircuitCrafts</h1>
          <p>Crafting innovation with Arduino and Electronics...</p>
          <button>See More...</button>
         
      </div> 

<div className='copy-right'>
<p>© 2023 CircuitCrafts. All rights reserved.</p>
</div>

</div>

        </Col>
      </Row>
      </Container>

    </>
  );
};

export default WelcomePage;
