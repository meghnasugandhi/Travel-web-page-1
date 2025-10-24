import React from "react";
import { Container, Button, Row, Col, Form } from 'react-bootstrap';
import Ballon from '../../../assets/images/Ballon.png';
import { 
  FaPlaneDeparture, 
  FaHotel, 
  FaPassport, 
  FaTree, 
  FaCar, 
  FaSearch,
  FaMapMarkerAlt,
  FaUmbrellaBeach,
  FaCalendarAlt,
  FaClock
} from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero-section">
      <Container fluid className="p-0 position-relative" style={{ minHeight: '80vh' }}>
        {/* Background Image */}
        <img 
          src={Ballon} 
          alt="Hero Ballon" 
          className="img-fluid"
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            zIndex: 0 
          }}
        />
        
        {/* Content Overlay */}
        <div className="position-relative d-flex flex-column align-items-center justify-content-center" 
            style={{ minHeight: '80vh', zIndex: 1, paddingTop: '4rem' }}>
          
          {/* Main Heading */}
          <div className="text-center text-white mb-5">
            <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>
              Let's journey and <br /> discover a place.
            </h1>
          </div>
          
          {/* Tab Buttons */}
          <div className="d-flex flex-wrap justify-content-center mb-2">
            <Button variant="light" className="d-flex align-items-center px-4 py-2 tab-button active">
              <FaPlaneDeparture className="me-2" /> Tour
            </Button>
            <Button variant="light" className="d-flex align-items-center px-4 py-2 tab-button">
              <FaHotel className="me-2" /> Hotel
            </Button>
            <Button variant="light" className="d-flex align-items-center px-4 py-2 tab-button">
              <FaPassport className="me-2" /> Visa
            </Button>
            <Button variant="light" className="d-flex align-items-center px-4 py-2 tab-button">
              <FaTree className="me-2" /> Activities
            </Button>
            <Button variant="light" className="d-flex align-items-center px-4 py-2 tab-button">
              <FaCar className="me-2" /> Transport
            </Button>
          </div>
          
          {/* Search Form */}
         <div className="mt-auto p-4 rounded-3 shadow" style={{ width: '100%', backgroundColor: '#e8f5e9' }}>
            <Row className="" style={{backgroundColor:'#e8f5e9'}}>
              <Col >
                <div className="form-group"  >
                  <label className="form-label text-muted small mb-1">Select Destination</label>
                  <div className="position-relative">
                    <FaMapMarkerAlt className="position-absolute text-muted" 
                      style={{ top: '50%', left: '15px', transform: 'translateY(-50%)', zIndex: 5 }} />
                    <Form.Select className="form-select-lg border-0  py-3 ps-5" style={{backgroundColor:'#e8f5e9'}}>
                      <option>Tokyo, Japan</option>
                      <option>Paris, France</option>
                      <option>New York, USA</option>
                    </Form.Select>
                  </div>
                </div>
              </Col>
              <Col >
                <div className="form-group">
                  <label className="form-label text-muted small mb-1">Select Tour Type</label>
                  <div className="position-relative">
                    <FaUmbrellaBeach className="position-absolute text-muted" 
                      style={{ top: '50%', left: '15px', transform: 'translateY(-50%)', zIndex: 5 }} />
                    <Form.Select className="form-select-lg border-0  py-3 ps-5" style={{backgroundColor:'#e8f5e9'}}>
                      <option>Adventure</option>
                      <option>Cultural</option>
                      <option>Relaxation</option>
                    </Form.Select>
                  </div>
                </div>
              </Col>
              <Col >
                <div className="form-group">
                  <label className="form-label text-muted small mb-1">Select Month</label>
                  <div className="position-relative">
                    <FaCalendarAlt className="position-absolute text-muted" 
                      style={{ top: '50%', left: '15px', transform: 'translateY(-50%)', zIndex: 5 }} />
                    <Form.Select className="form-select-lg border-0 py-3 ps-5" style={{backgroundColor:'#e8f5e9'}}>
                      <option>January</option>
                      <option>February</option>
                      <option>March</option>
                      <option>April</option>
                      <option>May</option>
                      <option>June</option>
                      <option>July</option>
                      <option>August</option>
                      <option>September</option>
                      <option>October</option>
                      <option>November</option>
                      <option>December</option>
                    </Form.Select>
                  </div>
                </div>
              </Col>
              <Col >
                <div className="form-group">
                  <label className="form-label text-muted small mb-1">Select Duration</label>
                  <div className="position-relative">
                    <FaClock className="position-absolute text-muted" 
                      style={{ top: '50%', left: '15px', transform: 'translateY(-50%)', zIndex: 5 }} />
                    <Form.Select className="form-select-lg border-0  py-3 ps-5" style={{backgroundColor:'#e8f5e9'}}>
                      <option>2 Weeks</option>
                      <option>3-5 Days</option>
                      <option>1 Week</option>
                    </Form.Select>
                  </div>
                </div>
              </Col>
              <Col  className="d-flex align-items-end">
                <Button variant="primary" className="w-100 py-3 d-flex align-items-center justify-content-center" >
                  <FaSearch className="me-2" /> Search
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
      
      <style type="text/css">
        {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
        
        .hero-section {
          font-family: 'Inter', sans-serif;
        }
        
        .hero-section h1 {
          font-family: 'Inter', sans-serif;
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }
        
        .tab-button {
          background-color: rgba(255, 255, 255, 0.9) !important;
          border: none !important;
          transition: all 0.3s;
          border-radius: 0 !important;
        }
        
        .tab-button:first-child {
          border-top-left-radius: 0.375rem !important;
          border-bottom-left-radius: 0.375rem !important;
        }
        
        .tab-button:last-child {
          border-top-right-radius: 0.375rem !important;
          border-bottom-right-radius: 0.375rem !important;
        }
        
        .tab-button:hover, .tab-button.active {
          background-color: #0d6efd !important;
          color: white !important;
        }
        
        .form-select {
          box-shadow: none !important;
          padding-left: 2.5rem !important;
        }
        
        .form-select:focus {
          border-color: #ced4da;
        }
        
        .btn-primary {
          background-color: #2f9a3aff;
          border: none;
          font-weight: 600;
        }
        `}
      </style>
    </section>
  );
};

export default Hero;