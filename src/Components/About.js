import React from 'react';
import { Accordion, Col } from 'react-bootstrap';
import Footer from './Footer';
import Navbar from '../Navbar/navbar';
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div>
      <Navbar />
      <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
               <li className="breadcrumb-item" aria-current="page">
                <Link to="/" className='text-dark text-primary custom-link text-decoration-none'>Home</Link>
              </li>
              <li className="breadcrumb-item active">
                <Link to="/about" className='custom-link text-primary fw-bold text-decoration-none'>About</Link>
              </li> 
            </ol>
          </nav>
      <br /><br /><br />
      <h2 className='text-center text-info'>Contact and About Us</h2>
      <br />
      <div className='d-flex justify-content-center'>
        <Col xs={14} md={8} lg={12}>
          <Accordion defaultActiveKey="0" flush className='acc'>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h2 className='acchead'>Organisation Name</h2>
              </Accordion.Header>
              <Accordion.Body className='text-center accon'>
                <strong>Quicklearn</strong>
                <p>Learn from Quicklearn - topics for free</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <h2 className='acchead'>Location & Address</h2>
              </Accordion.Header>
              <Accordion.Body className='text-center accon'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus vitae ullam veniam quasi earum sint, aperiam ratione impedit accusamus consectetur maxime, non laborum qui? Officia esse, minus quos voluptate beatae molestiae dignissimos quod omnis rem nulla vel accusamus. Temporibus obcaecati laudantium voluptas voluptates magnam omnis aut dignissimos recusandae mollitia dolorem officia, dolorum maiores! Cumque ad repudiandae qui nisi totam facilis temporibus ullam commodi aspernatur.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <h2 className='acchead'>Contact</h2>
              </Accordion.Header>
              <Accordion.Body className='text-center accon'>
                +91-7125648725
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <h2 className='acchead'>Email Address</h2>
              </Accordion.Header>
              <Accordion.Body className='text-center accon'>
                quicklearn@gmail.com
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </div>
      <Footer/>
    </div>
  );
};

export default About;