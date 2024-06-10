import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoImg from '../assets/DesertSafari_logo.png'
import { IoIosCall } from "react-icons/io";
import { Link } from 'react-router-dom';

const Header = () => {
  return (

    <div className='header bg-body-tertiary shadow'>
    <div className='header bg-body-tertiary'>
      <div className='nav-contact d-flex align-items-center justify-content-center gap-2 py-2 fw-semibold'>
        <span>DUBAI DESERT SAFARI</span>
        <div className='d-flex align-items-center justify-content-center'>
          <IoIosCall />
          <span>+971 501151643</span>
        </div>
      </div>

      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img width={"200px"} src={LogoImg} alt="Deset Safari Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggle-btn' />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex gap-3">
              <Nav.Link href="#home" className='nav-link'><Link to='/' className='link'>Home</Link></Nav.Link>
              <Nav.Link href="#link" className='nav-link'><Link to='/' className='link'>About Us</Link></Nav.Link>
              <Nav.Link href="#home" className='nav-link'><Link to='/' className='link'>Evening Desert Safari</Link></Nav.Link>
              <Nav.Link href="#link" className='nav-link'><Link to='/gallery' className='link' >Gallery</Link></Nav.Link>
              <Nav.Link href="#home" className='nav-link'><Link to='/' className='link'>Contact Us</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </div>
  )
}

export default Header
