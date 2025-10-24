import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';

// Assets: Using existing files as placeholder images for the destination grid
import imagePlaceholder1 from '../../../assets/images/ab1.png';
import imagePlaceholder2 from '../../../assets/images/ab2.png';
import imagePlaceholder3 from '../../../assets/images/ab3.png';
import imagePlaceholder4 from '../../../assets/images/ab4.png';
import imagePlaceholder5 from '../../../assets/images/Logo1.png'; 
import imagePlaceholder6 from '../../../assets/images/Ballon.png';

// Newsletter background (tour.png)
import newsletterBg from '../../../assets/images/tour.png'; 

// Footer component (using the corrected path from the previous step)
import Footer from '../../Main/Footer/Footer'; 


const Destination = () => {
    // Data structure for the destination grid
    const destinations = [
        { name: 'Sweden', tours: 4, image: imagePlaceholder1 },
        { name: 'Japan', tours: 2, image: imagePlaceholder2 },
        { name: 'India', tours: 1, image: imagePlaceholder3 },
        { name: 'Brazil', tours: 1, image: imagePlaceholder4 },
        { name: 'Australia', tours: 1, image: imagePlaceholder5 },
        { name: 'Spain', tours: 0, image: imagePlaceholder6 },
        { name: 'Italy', tours: 1, image: imagePlaceholder3 },
        { name: 'Indonesia', tours: 1, image: imagePlaceholder2 },
    ];

    // --- STYLES DEFINITION ---
    const customStyles = `
        /* Hero Section - Reusing style from Tour component */
        .destination-hero-section {
            min-height: 40vh;
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
        .destination-hero-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.4);
            z-index: -1;
        }
        .destination-hero-section h1 {
            font-size: 3rem;
            font-weight: bold;
            margin-bottom: 10px;
        }
        .destination-hero-section p {
            font-size: 1rem;
            opacity: 0.8;
        }

        /* Destination Card Styling */
        .destination-card {
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border: none;
            position: relative;
            min-height: 250px;
        }
        .destination-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }
        .destination-card .card-img-top {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 0;
        }
        
        .card-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.7) 100%);
            z-index: 1;
            color: white;
            padding: 15px;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-start;
        }

        .tour-count-badge {
            position: absolute;
            top: 15px;
            right: 15px;
            background-color: #FFC107; /* Yellow badge color */
            color: #333;
            padding: 5px 10px;
            border-radius: 5px;
            font-size: 0.8rem;
            font-weight: 600;
            z-index: 2;
        }

        .destination-name {
            font-size: 1.5rem;
            font-weight: 700;
            margin: 0;
            line-height: 1.2;
        }
        .destination-link {
            font-size: 0.9rem;
            opacity: 0.8;
            margin-top: 5px;
            color: white; /* Ensure text remains visible */
        }
        
        /* Newsletter Section - Reusing style from Tour component */
        .newsletter-section {
            background-color: #f8f8f8;
            background-size: cover;
            background-position: center;
            border-radius: 15px;
            padding: 60px 0;
            margin: 50px 15px; /* Added margin */
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
        .newsletter-btn svg {
            font-size: 1.2rem;
        }
        
        /* Pagination Styling */
        .pagination .page-item .page-link {
            color: #333;
            border-radius: 5px;
            margin: 0 5px;
            min-width: 40px;
            text-align: center;
            font-weight: 500;
        }
        .pagination .page-item.active .page-link {
            background-color: #4CAF50;
            border-color: #4CAF50;
            color: #fff;
        }
        .pagination .page-item:not(.active) .page-link:hover {
            color: #4CAF50;
            background-color: #e9ecef;
        }
    `;

    // --- RENDER FUNCTION ---
    return (
        <div className="destination-page">
            <style>{customStyles}</style>

            {/* 1. Hero Section */}
            <section className="destination-hero-section"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1502791447083-d98eae4ef035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1762&q=80')` }}>
                <Container className="text-center">
                    <h1>Destination</h1>
                    <p>
                        <small>Home → Destination</small>
                    </p>
                </Container>
            </section>

            {/* 2. Destination Grid Section */}
            <section className="destination-grid-section py-5">
                <Container>
                    <Row className="g-4">
                        {destinations.map((dest, index) => (
                            <Col key={index} xs={6} md={4} lg={3}>
                                <Card className="destination-card w-100">
                                    <Card.Img variant="top" src={dest.image} alt={dest.name} />
                                    <div className="tour-count-badge">{dest.tours} Tour</div>
                                    <div className="card-overlay">
                                        <p className="destination-link">Travel To</p>
                                        <h2 className="destination-name">{dest.name}</h2>
                                    </div>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    
                    {/* Pagination */}
                    <div className="d-flex justify-content-center mt-5">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item active"><a className="page-link" href="#!">01</a></li>
                                <li className="page-item"><a className="page-link" href="#!">02</a></li>
                                <li className="page-item"><a className="page-link" href="#!"><FaArrowRight /></a></li>
                            </ul>
                        </nav>
                    </div>
                </Container>
            </section>

            {/* 3. Newsletter Section */}
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
            
            {/* 4. Footer Section */}
            <Footer /> 
        </div>
    );
}

export default Destination;
