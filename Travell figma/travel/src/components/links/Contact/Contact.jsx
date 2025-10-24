import React from 'react';
import { Container, Row, Col, Card, Form, Button, InputGroup } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaArrowRight } from 'react-icons/fa';

// Assets: Using existing files as placeholder images
import newsletterBg from '../../../assets/images/tour.png'; 

// Footer component
import Footer from '../../Main/Footer/Footer'; 


// Contact Info Widget component
const ContactInfoWidget = () => (
    <div className="contact-info-widget p-4">
        <div className="info-block">
            <FaPhoneAlt size={20} className="text-success me-3" />
            <div className="info-details">
                <small className="text-muted d-block">Phone</small>
                <p className="mb-0 text-dark font-weight-bold">+990-737 621 432</p>
                <p className="mb-0 text-dark font-weight-bold">+990-737 324 465</p>
            </div>
        </div>
        <hr className="my-3"/>
        <div className="info-block">
            <FaEnvelope size={20} className="text-success me-3" />
            <div className="info-details">
                <small className="text-muted d-block">Email Now</small>
                <p className="mb-0 text-dark font-weight-bold">Info@example.com</p>
                <p className="mb-0 text-dark font-weight-bold">example@example.com</p>
            </div>
        </div>
        <hr className="my-3"/>
        <div className="info-block">
            <FaMapMarkerAlt size={20} className="text-success me-3" />
            <div className="info-details">
                <small className="text-muted d-block">Location</small>
                <p className="mb-0 text-dark font-weight-bold">168/170, Avenue 01, Old York Drive</p>
                <p className="mb-0 text-dark font-weight-bold">Mirpur DOHS, Bangladesh</p>
            </div>
        </div>
        <hr className="my-3"/>
        <div className="info-block">
            <FaClock size={20} className="text-success me-3" />
            <div className="info-details">
                <small className="text-muted d-block">Opening Time</small>
                <p className="mb-0 text-dark font-weight-bold">8:00Am - 10-Pm. Friday Close</p>
            </div>
        </div>
    </div>
);


// Contact Form component
const ContactForm = () => {
    return (
        <Card className="p-4 p-md-5 contact-form-card">
            <h3 className="mb-4">Reach Us Anytime</h3>
            <Form>
                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="formName">
                            <Form.Label>Name*</Form.Label>
                            <Form.Control type="text" placeholder="Daniel Scout" required />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group controlId="formPhone">
                            <Form.Label>Phone*</Form.Label>
                            <Form.Control type="tel" placeholder="Phone Number" required />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email*</Form.Label>
                            <Form.Control type="email" placeholder="Email Us..." required />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group controlId="formMessage" className="mb-4">
                    <Form.Label>Write Your Message*</Form.Label>
                    <Form.Control as="textarea" rows={6} placeholder="Your Message..." required />
                </Form.Group>
                <Button variant="success" type="submit" className="w-100 py-3 submit-btn">
                    Submit Now
                </Button>
            </Form>
        </Card>
    );
};


const Contact = () => {
    
    // --- STYLES DEFINITION ---
    const customStyles = `
        /* Hero Section */
        .contact-hero-section {
            min-height: 40vh;
            background-image: url('https://images.unsplash.com/photo-1549440618-9710f27c8130?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80');
            background-size: cover;
            background-position: center;
            position: relative;
            z-index: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            margin-bottom: 50px;
        }
        .contact-hero-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.4);
            z-index: -1;
        }
        .contact-hero-section h1 {
            font-size: 3rem;
            font-weight: bold;
            margin-bottom: 10px;
        }
        .contact-hero-section p {
            font-size: 1rem;
            opacity: 0.8;
        }

        /* Contact Info & Form Layout */
        .contact-info-widget {
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
            height: 100%; /* Match height of form */
        }
        .info-block {
            display: flex;
            align-items: center;
            padding: 10px 0;
        }
        .info-block .text-success {
            color: #4CAF50 !important;
        }
        .info-details small {
            font-size: 0.8rem;
            color: #777 !important;
        }
        .info-details p {
            font-size: 0.95rem;
            font-weight: 500;
            line-height: 1.2;
        }

        .contact-form-card {
            background-color: #f8fff7; /* Very light green background for the form area */
            border-radius: 10px;
            border: 1px solid #e0ffe0; /* Light green border */
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }
        .contact-form-card h3 {
            color: #4CAF50;
            font-weight: 700;
        }
        .contact-form-card .form-control {
            border-radius: 5px;
            padding: 10px 15px;
            border: 1px solid #ddd;
        }
        .contact-form-card .form-label {
            font-weight: 500;
            color: #555;
            margin-bottom: 5px;
            font-size: 0.9rem;
        }
        .submit-btn {
            background-color: #4CAF50 !important;
            border-color: #4CAF50 !important;
            font-weight: 600;
            transition: background-color 0.3s;
        }
        .submit-btn:hover {
            background-color: #388E3C !important;
            border-color: #388E3C !important;
        }

        /* Map Section */
        .map-container {
            height: 500px;
            width: 100%;
            border-radius: 10px;
            overflow: hidden;
            margin-bottom: 50px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        /* Newsletter Section (reusing styles) */
        .newsletter-section {
            background-size: cover;
            background-position: center;
            border-radius: 15px;
            padding: 60px 0;
            margin: 50px 15px; 
            background-color: #f8f8f8;
            background-image: url(${newsletterBg});
        }
        .newsletter-title {
            font-size: 2.2rem;
            font-weight: bold;
            color: #333;
            margin-bottom: 10px;
        }
        .newsletter-subtitle {
            font-size: 1rem;
            color: #555;
            margin-bottom: 30px;
        }
        .newsletter-input-group .form-control {
            border-top-left-radius: 8px;
            border-bottom-left-radius: 8px;
            border: 1px solid #ccc;
            padding: 10px 15px;
            font-size: 1rem;
        }
        .newsletter-btn {
            background-color: #4CAF50 !important;
            border-color: #4CAF50 !important;
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
            padding: 10px 15px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    `;

    // --- MAIN RENDER ---
    return (
        <div className="contact-page">
            <style>{customStyles}</style>

            {/* 1. Hero Section */}
            <section className="contact-hero-section">
                <Container className="text-center">
                    <h1>Contact</h1>
                    <p>
                        <small>Home → Contact</small>
                    </p>
                </Container>
            </section>

            {/* 2. Contact Content: Info & Form */}
            <section className="contact-content-section py-5">
                <Container>
                    <Row className="g-4 mb-5">
                        <Col lg={4}>
                            <ContactInfoWidget />
                        </Col>
                        <Col lg={8}>
                            <ContactForm />
                        </Col>
                    </Row>
                </Container>
            </section>
            
            {/* 3. Map Section */}
            <section className="map-section">
                <Container>
                    <div className="map-container">
                        {/* Placeholder for an embedded Google Map. 
                            In a real app, you would use an iframe with a map embed or a library like react-google-maps.
                        */}
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9022630592966!2d90.39501501498144!3d23.75091218458928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b89a8c17b889%3A0x6b6a378d5218d6f1!2sDhaka%20University!5e0!3m2!1sen!2sbd!4v1641031234567!5m2!1sen!2sbd" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            title="Location Map"
                        ></iframe>
                    </div>
                </Container>
            </section>

            {/* 4. Newsletter Section */}
            <section className="newsletter-section">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={8} lg={6} className="text-center">
                            <h2 className="newsletter-title">Join The Newsletter</h2>
                            <p className="newsletter-subtitle">To receive our best monthly deals</p>
                            <div className="input-group mb-3 newsletter-input-group">
                                <input type="email" className="form-control" placeholder="Enter Your Email Address..." aria-label="Email Address" />
                                <Button variant="success" className="newsletter-btn">
                                    <FaArrowRight />
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            
            {/* 5. Footer Section */}
            <Footer /> 
        </div>
    );
}

export default Contact;
