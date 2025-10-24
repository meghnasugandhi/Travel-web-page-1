import React from 'react';
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaRegUser, FaRegBell, FaRegHeart } from 'react-icons/fa';
import { Link } from "react-router-dom";   // ✅ import Link
import logo from '../../assets/images/logo.png';

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" style={{
      backgroundColor: '#fff',
      borderBottom: '5px solid #00aaff',
      padding: '10px 0',
      width: '100%'
    }}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/">   {/* ✅ use Link instead of href */}
          <img
            src={logo}
            alt="Travelfest Logo"
            height="40"
            style={{ display: 'inline-block', verticalAlign: 'top' }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{ alignItems: 'center' }}>
            <Nav.Link as={Link} to="/" style={{ color: '#4CAF50', fontWeight: '500', marginRight: '20px' }}>Home +</Nav.Link>
            <Nav.Link as={Link} to="/hotels" style={{ color: '#000', fontWeight: '500', marginRight: '20px' }}>Hotels</Nav.Link>
            <Nav.Link as={Link} to="/tours" style={{ color: '#000', fontWeight: '500', marginRight: '20px' }}>Tours</Nav.Link>

            

           <Nav.Link as={Link} to="/Destination" style={{ color: '#000', fontWeight: '500' }}>Destination</Nav.Link>
            <Nav.Link as={Link} to="/Villas" style={{ color: '#000', fontWeight: '500' }}>villas</Nav.Link>
            <Nav.Link as={Link} to="/Contact" style={{ color: '#000', fontWeight: '500' }}>Contact</Nav.Link>
          </Nav>

          <Nav className="ms-auto d-flex align-items-center">
             <Link to="/faq" style={{ textDecoration: 'none' }}> {/* ✅ Wrap button in Link to /faq */}
            <Button variant="success" style={{
              backgroundColor: '#66BB6A',
              borderColor: '#66BB6A',
              color: 'white',
              padding: '8px 20px',
              fontWeight: '600',
              marginRight: '20px'
            }}>Become a Partner</Button>
            </Link>


            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginRight: '20px', color: '#000' }}>
              <FaRegUser style={{ fontSize: '20px' }} />
              <FaRegBell style={{ fontSize: '20px' }} />
              <FaRegHeart style={{ fontSize: '20px' }} />
            </div>

            <div style={{ marginLeft: '1rem' }}>
              <p style={{ fontSize: '12px', color: '#777', textAlign: 'right', marginBottom: '0', lineHeight: '1' }}>To More Inquiry</p>
              <h5 style={{ fontSize: '16px', color: '#4CAF50', fontWeight: 'bold', textAlign: 'right', marginBottom: '0', lineHeight: '1' }}>990-737 621 432</h5>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
