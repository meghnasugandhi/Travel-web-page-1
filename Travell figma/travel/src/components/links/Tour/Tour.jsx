import React, { useState, useEffect } from 'react'; // Added hooks
import axios from 'axios'; // Added axios for API calls
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';

// --- ALL LOCAL ASSETS AND COMPONENTS MOVED TO THE TOP (Fixes ESLint Errors) ---
import Footer from '../../Main/Footer/Footer';
import tourImage1 from '../../../assets/images/ab1.png';
import tourImage2 from '../../../assets/images/ab2.png';
import tourImage3 from '../../../assets/images/ab3.png';
import tourImage4 from '../../../assets/images/ab4.png';
import tourImage5 from '../../../assets/images/Logo1.png';  
import tourImage6 from '../../../assets/images/Ballon.png'; 
import newsletterBg from '../../../assets/images/tour.png'; 
// -----------------------------------------------------------------------------

// --- CONFIGURATION ---
const API_BASE_URL = 'http://localhost:5000/api';

// Map backend data paths to local image imports
const tourImageMap = {
    'path/to/ab1.png': tourImage1,
    'path/to/ab2.png': tourImage2,
    'path/to/ab3.png': tourImage3,
    'path/to/ab4.png': tourImage4,
    'path/to/Logo1.png': tourImage5,
    'path/to/Ballon.png': tourImage6,
};
// ---------------------


const Tour = () => {
    // 1. STATE MANAGEMENT
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [email, setEmail] = useState(''); // For Newsletter
    const [newsletterMessage, setNewsletterMessage] = useState('');
    const [isNewsletterSuccess, setIsNewsletterSuccess] = useState(false);

    // 2. LIFECYCLE HOOK: Fetch Tours Data
    useEffect(() => {
        const fetchTours = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(`${API_BASE_URL}/tours`);
                
                // Map the image paths from the backend to local imports
                const processedTours = response.data.map(tour => ({
                    ...tour,
                    image: tourImageMap[tour.image] || tour.image 
                }));

                setTours(processedTours);
            } catch (err) {
                console.error("Error fetching tours:", err);
                setError("Failed to load tour packages. Please check the backend server.");
            } finally {
                setLoading(false);
            }
        };

        fetchTours();
    }, []);

    // 3. HANDLER: Book a Trip (POST Request)
    const handleBookTrip = async (tourId, tourTitle) => {
        if (window.confirm(`Confirm inquiry for: ${tourTitle}?`)) {
            try {
                // Endpoint: POST /api/inquiries/book
                const response = await axios.post(`${API_BASE_URL}/inquiries/book`, {
                    tourId: tourId,
                    tourTitle: tourTitle,
                    timestamp: new Date().toISOString()
                });
                
                alert(`✅ Inquiry successfully logged! We will contact you soon.`);
                console.log("Inquiry logged:", response.data);

            } catch (err) {
                alert("❌ Failed to submit inquiry. Check console for details.");
                console.error("Booking Inquiry Error:", err.response?.data?.message || err.message);
            }
        }
    };

    // 4. HANDLER: Newsletter Submission (POST Request)
    const handleNewsletterSubmit = async (e) => {
        e.preventDefault();
        setNewsletterMessage('');
        
        if (!email) {
            setNewsletterMessage('Please enter your email address.');
            setIsNewsletterSuccess(false);
            return;
        }

        try {
            // Endpoint: POST /api/subscribe
            const response = await axios.post(`${API_BASE_URL}/subscribe`, { email });
            setNewsletterMessage(response.data.message);
            setIsNewsletterSuccess(true);
            setEmail('');
        } catch (err) {
            const errorMsg = err.response?.data?.message || 'Subscription failed. Server error.';
            setNewsletterMessage(errorMsg);
            setIsNewsletterSuccess(false);
            console.error("Subscription Error:", err);
        }
    };
    
    // --- STYLES DEFINITION (UNCHANGED) ---
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
                    {/* Display loading, error, or data */}
                    {loading ? (
                        <div className="text-center p-5"><h3>Loading tour packages...</h3></div>
                    ) : error ? (
                        <div className="alert alert-danger text-center">{error}</div>
                    ) : (
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
                                                    <span className="tour-price-old">${tour.originalPrice}</span>
                                                    <span className="tour-price-new ms-2">${tour.currentPrice}</span>
                                                </div>
                                                <Button 
                                                    variant="success" 
                                                    className="book-trip-btn"
                                                    // *** ATTACHED BOOKING HANDLER ***
                                                    onClick={() => handleBookTrip(tour.id, tour.title)}
                                                >
                                                    Book a Trip <FaArrowRight className="ms-2" />
                                                </Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    )}
                    
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
                            <form onSubmit={handleNewsletterSubmit}>
                                <div className="input-group mb-3 newsletter-input-group">
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        placeholder="Enter Your Email Address..." 
                                        aria-label="Email Address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <Button variant="success" className="newsletter-btn" type="submit">
                                        <FaArrowRight />
                                    </Button>
                                </div>
                            </form>
                            {/* Feedback message */}
                            {newsletterMessage && (
                                <p className={`small mt-2 ${isNewsletterSuccess ? 'text-success' : 'text-danger'}`}>
                                    {newsletterMessage}
                                </p>
                            )}
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