import React, { useEffect, useState } from 'react';
import './wlcStyle.css';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import bgImage from '../images/bg1.jpg';
import circuitCraftsLogo from '../images/logo.png';

const WelcomePage = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
<>

      <Container fluid className="background-container">    
      <Row> 
      <Col xs={6} md={12}>
     
<div className='background-container' style={{backgroundImage: `url(${bgImage})`}}>
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
</div>
          
        </Col>
      </Row>
      </Container>

    </>
  );
};

export default WelcomePage;
