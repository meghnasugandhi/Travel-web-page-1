import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';

// --- UPDATED IMPORTS TO USE YOUR EXISTING FILES (ab1.png, ab2.png, etc.) ---
import tourImage1 from '../../../assets/images/ab1.png';
import tourImage2 from '../../../assets/images/ab2.png';
import tourImage3 from '../../../assets/images/ab3.png';
import tourImage4 from '../../../assets/images/ab4.png';
import tourImage5 from '../../../assets/images/Logo1.png';  // Using another existing file
import tourImage6 from '../../../assets/images/Ballon.png'; // Using another existing file

// --- CORRECT PATH FOR NEWSLETTER BACKGROUND ---
import newsletterBg from '../../../assets/images/tour.png'; 
 import Footer from '../../Main/Footer/Footer';

const Tour = () => {
  // --- TOUR DATA (Will now use your existing PNGs for images) ---
  const tours = [
    {
      id: 1,
      duration: '1 Week',
      location: 'Egypt',
      title: 'Discover Serenity, Exploration, And Enlightenment.',
      description: 'SAINT MARTIN → KHADRACHORI → COX’S BAZAR → BL',
      originalPrice: '$340',
      currentPrice: '$460',
      image: tourImage1,
    },
    {
      id: 2,
      duration: '5 Days / 4 Night',
      location: 'Indonesia',
      title: 'Embracing City Lights, Landm, And Iconic Culture.',
      description: 'BANDAR BAN → COX’S BAZAR → SAINT MARTIN → SEJ',
      originalPrice: '$240',
      currentPrice: '$380',
      image: tourImage2,
    },
    {
      id: 3,
      duration: '10 Days / 11 Night',
      location: 'New York',
      title: 'Immersive Cultural Expirees, Local Cuisine.',
      description: 'SADEX VALLEY → SEA BEACH → BANDAR BAN → COX’S',
      originalPrice: '$500',
      currentPrice: '$680',
      image: tourImage3,
    },
    {
      id: 4,
      duration: '4 Days / 5 Night',
      location: 'Saudi Arabia',
      title: 'Exploring Energy, Landmarks, And Timeless Traditions.',
      description: 'SADEX VALLEY → SEA BEACH → SAINT MARTIN → KHAC',
      originalPrice: '$460',
      currentPrice: '$670',
      image: tourImage4,
    },
    {
      id: 5,
      duration: '4 Days / 5 Night',
      location: 'Brazil + Sweden',
      title: 'Embark Tranquility, Adventure, And Spiritual.',
      description: 'SAINT MARTIN → COX’S BAZAR → SADEX VALLEY → SEJ',
      originalPrice: '$460',
      currentPrice: '$670',
      image: tourImage5,
    },
    {
      id: 6,
      duration: '7 Days / 8 Night',
      location: 'Australia + Sweden',
      title: 'Immersive Cultural Expirees, Local Cuisine.',
      description: 'SADEX VALLEY → SEA BEACH → BANDAR BAN → COX’S',
      originalPrice: '$500',
      currentPrice: '$680',
      image: tourImage6,
    },
  ];

  // --- STYLES DEFINITION AS A STRING (UNCHANGED) ---
  const customStyles = `
    /* Hero Section */
    .tour-hero-section {
      min-height: 40vh;
      background-size: cover;
      background-position: center;
      position: relative;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
    }
    .tour-hero-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.4);
      z-index: -1;
    }
    .tour-hero-section h1 {
      font-size: 3rem;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .tour-hero-section p {
      font-size: 1rem;
      opacity: 0.8;
    }

    /* Tour Card Styling */
    .tour-card {
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
      border: none;
    }
    .tour-card:hover {
      transform: translateY(-5px);
    }
    .card-img-container {
      position: relative;
    }
    .tour-card .card-img-top {
      width: 100%;
      height: 220px;
      object-fit: cover;
    }
    .card-badge {
      position: absolute;
      background-color: #000;
      color: #fff;
      padding: 5px 12px;
      border-radius: 5px;
      font-size: 0.8rem;
      font-weight: 500;
      z-index: 2;
    }
    .duration-badge {
      top: 15px;
      left: 15px;
    }
    .location-badge {
      top: 15px;
      right: 15px;
      background-color: #4CAF50;
    }
    .tour-title {
      font-size: 1.3rem;
      font-weight: 600;
      margin-bottom: 10px;
      color: #333;
    }
    .tour-description {
      font-size: 0.9rem;
      color: #777;
      margin-bottom: 15px;
    }
    .tour-price-old {
      text-decoration: line-through;
      color: #999;
      font-size: 1rem;
      font-weight: 400;
    }
    .tour-price-new {
      color: #4CAF50;
      font-size: 1.3rem;
      font-weight: bold;
    }
    .book-trip-btn {
        background-color: #4CAF50 !important;
        border-color: #4CAF50 !important;
        font-weight: 600;
        padding: 8px 15px;
        display: flex;
        align-items: center;
        gap: 5px;
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
    
    /* Newsletter Section */
    .newsletter-section {
      background-color: #f8f8f8;
      background-size: cover;
      background-position: center;
      border-radius: 15px;
      padding: 60px 0;
      margin-left: 15px;
      margin-right: 15px;
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
    /* Responsive adjustments for smaller screens */
    @media (max-width: 767.98px) {
      .tour-hero-section h1 {
        font-size: 2.5rem;
      }
      .newsletter-title {
        font-size: 1.8rem;
      }
    }
  `;

  // --- RENDER FUNCTION ---
  return (
    <div>
      {/* Inject custom CSS directly into the component */}
      <style>{customStyles}</style>

      {/* 1. Hero Section */}
      <section className="tour-hero-section"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1502791447083-d98eae4ef035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1762&q=80')` }}>
        <Container className="text-center">
          <h1>Tour Packages</h1>
          <p>
            <small>Home → Package Grid</small>
          </p>
        </Container>
      </section>

      {/* 2. Tour Grid Section */}
      <section className="tour-grid-section py-5">
        <Container>
          <Row className="g-4">
            {tours.map((tour) => (
              <Col key={tour.id} md={6} lg={4}>
                <Card className="tour-card h-100">
                  <div className="card-img-container">
                    <Card.Img variant="top" src={tour.image} alt={tour.title} />
                    <div className="card-badge duration-badge">{tour.duration}</div>
                    <div className="card-badge location-badge">{tour.location}</div>
                  </div>
                  <Card.Body>
                    <Card.Title className="tour-title">{tour.title}</Card.Title>
                    <Card.Text className="tour-description">
                      {tour.description}
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <div>
                        <span className="tour-price-old">{tour.originalPrice}</span>
                        <span className="tour-price-new ms-2">{tour.currentPrice}</span>
                      </div>
                      <Button variant="success" className="book-trip-btn">
                        Book a Trip <FaArrowRight className="ms-2" />
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          {/* 3. Pagination */}
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

      {/* 4. Newsletter Section */}
      <section className="newsletter-section py-5 mt-5" style={{ 
          backgroundImage: `url(${newsletterBg})`, 
          margin: '0 15px' 
        }}>
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
      <div>
 <Footer></Footer>
      </div>
    </div>

  );
}

export default Tour;