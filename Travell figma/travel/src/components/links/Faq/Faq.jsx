import React from 'react';
import { Container, Row, Col, Button, Accordion, Card, InputGroup, Form } from 'react-bootstrap';
import { FaArrowRight, FaPlus, FaMinus } from 'react-icons/fa';

// Assets: Using existing files as placeholder images
import promoImage from '../../../assets/images/ab4.png';
import newsletterBg from '../../../assets/images/tour.png'; 

// Footer component
import Footer from '../../Main/Footer/Footer'; 


// FAQ Item Component using Accordion for interactivity
const FaqItem = ({ eventKey, question, answer }) => {
    return (
        <Accordion.Item eventKey={eventKey} className="faq-item">
            <Accordion.Header>
                {question}
            </Accordion.Header>
            <Accordion.Body>
                {answer}
            </Accordion.Body>
        </Accordion.Item>
    );
};


const Faq = () => {
    
    // Data structure for the General FAQ section
    const generalFaqs = [
        { 
            id: 1, 
            question: '01. How Do I Book A Trip On Your Website?',
            answer: 'Aptent taciti sociosqu ad litora torquent per conubia nostra, per inci only Integer purus orthis felis non aliquam.Maecenas nec just vitae ann auctor tol euismod sit amet non ipsul growing this' 
        },
        { 
            id: 2, 
            question: '02. What Payment Methods Do You Accept?',
            answer: 'We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and direct bank transfers for your convenience.' 
        },
        { 
            id: 3, 
            question: '03. Can I Make Changes To My Reservation After Booking?',
            answer: 'Yes, minor changes are usually possible, but they depend on the tour operator\'s policy and availability. Please contact us immediately.' 
        },
        { 
            id: 4, 
            question: '04. What Is Your Cancellation Policy?',
            answer: 'Our standard cancellation policy allows for a full refund if cancelled within 72 hours of booking, provided the travel date is more than 14 days away. Specific tour policies may vary.' 
        },
        { 
            id: 5, 
            question: '05. Do You Offer Group Booking Discounts?',
            answer: 'We offer special rates for groups of 10 or more. Please contact our support team to discuss custom pricing for your group trip.' 
        },
    ];

    // Data structure for the Travel Tips FAQ section
    const travelTipsFaqs = [
        { 
            id: 6, 
            question: '01. What Is Your Payment Schedule And Process?',
            answer: 'Aptent taciti sociosqu ad litora torquent per conubia nostra, per inci only Integer purus orthis felis non aliquam.Maecenas nec just vitae ann auctor tol euismod sit amet non ipsul growing this' 
        },
        { 
            id: 7, 
            question: '02. Are There Any Additional Fees Or Surcharges?',
            answer: 'All mandatory fees are included in the price listed. Any optional services (like special excursions or premium seating) will be clearly indicated.' 
        },
        { 
            id: 8, 
            question: '03. Can I Transfer My Reservation To Another Person?',
            answer: 'Reservation transfers are assessed on a case-by-case basis and may incur an administrative fee. Certain non-transferable bookings (like flights) cannot be changed.' 
        },
        { 
            id: 9, 
            question: '04. Can I Request A Private Tour For My Group?',
            answer: 'Yes, we specialize in organizing customized private tours. Contact us with your destination and group size to receive a tailored itinerary and quote.' 
        },
        { 
            id: 10, 
            question: '05. Do You Offer Special Rates For Group Bookings?',
            answer: 'Special group rates are available depending on the destination and season. Please fill out our group inquiry form for the best available pricing.' 
        },
    ];

    // --- STYLES DEFINITION ---
    const customStyles = `
        /* Hero Section */
        .faq-hero-section {
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
        .faq-hero-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.4);
            z-index: -1;
        }
        .faq-hero-section h1 {
            font-size: 3rem;
            font-weight: bold;
            margin-bottom: 10px;
        }
        .faq-hero-section p {
            font-size: 1rem;
            opacity: 0.8;
        }
        
        /* FAQ Content Styles */
        .faq-title {
            font-size: 2rem;
            font-weight: 700;
            color: #333;
            margin-bottom: 30px;
            padding-bottom: 10px;
        }
        
        /* Accordion Customization */
        .accordion-item {
            border: none;
            border-bottom: 1px solid #ddd;
            margin-bottom: 1px; /* Remove gaps between items */
            border-radius: 0 !important;
        }
        .accordion-header {
            background-color: transparent !important;
            padding: 0;
        }
        .accordion-button {
            background-color: white !important;
            color: #333 !important;
            font-size: 1rem;
            font-weight: 600;
            padding: 15px 0 !important;
            border-radius: 0 !important;
            box-shadow: none !important;
        }
        .accordion-button:not(.collapsed) {
            color: #4CAF50 !important; /* Active question color */
            border-bottom: 1px solid #ddd; /* Separator for active item */
        }
        .accordion-button::after {
            /* Custom icon styling */
            background-image: none !important;
            content: '+';
            font-weight: bold;
            font-size: 1.2rem;
            color: #4CAF50;
            transform: rotate(0deg) !important;
            transition: transform 0.2s ease-in-out;
        }
        .accordion-button:not(.collapsed)::after {
            content: '-';
            color: #4CAF50;
        }
        .accordion-body {
            background-color: #f9f9f9;
            color: #555;
            font-size: 0.95rem;
            padding: 20px 0 25px 0 !important;
            border-radius: 0;
        }

        /* Sidebar Promo Card */
        .promo-card {
            background-color: #FFC107; /* Orange/Yellow background */
            border-radius: 10px;
            overflow: hidden;
            color: #333;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            margin-bottom: 30px;
            text-align: center;
        }
        .promo-card-content {
            background-color: #FFC107;
            padding: 25px;
            text-align: left;
        }
        .promo-card-content h3 {
            font-size: 1.8rem;
            font-weight: 800;
            line-height: 1.2;
            margin-bottom: 5px;
        }
        .promo-card-content p {
            font-size: 1rem;
            margin-bottom: 15px;
        }
        .promo-card-content .btn {
            background-color: #4CAF50;
            border-color: #4CAF50;
            color: white;
            font-weight: 600;
        }
        .promo-card-image {
            width: 100%;
            height: 250px;
            object-fit: cover;
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
        <div className="faq-page">
            <style>{customStyles}</style>

            {/* 1. Hero Section */}
            <section className="faq-hero-section">
                <Container className="text-center">
                    <h1>Faqs</h1>
                    <p>
                        <small>Home → Faqs</small>
                    </p>
                </Container>
            </section>

            {/* 2. FAQ Content and Sidebar */}
            <section className="faq-content-section py-5">
                <Container>
                    <Row>
                        {/* Sidebar (Promo Card) */}
                        <Col lg={4}>
                            <Card className="promo-card">
                                <div className="promo-card-content">
                                    <h3 className="text-uppercase">Savings combinede</h3>
                                    <h2>50% Off</h2>
                                    <p>For Your First Book</p>
                                    <Button>Book Now</Button>
                                </div>
                                <img 
                                    src={promoImage} 
                                    alt="Travel Promotion" 
                                    className="promo-card-image"
                                />
                            </Card>
                        </Col>

                        {/* Main FAQ Content */}
                        <Col lg={8}>
                            {/* General FAQs */}
                            <h2 className="faq-title">General</h2>
                            <Accordion defaultActiveKey="1" alwaysOpen>
                                {generalFaqs.map((faq, index) => (
                                    <FaqItem 
                                        key={faq.id}
                                        eventKey={String(faq.id)}
                                        question={faq.question}
                                        answer={faq.answer}
                                    />
                                ))}
                            </Accordion>

                            {/* Travel Tips FAQs */}
                            <h2 className="faq-title mt-5">Travel Tips</h2>
                            <Accordion defaultActiveKey="6" alwaysOpen>
                                {travelTipsFaqs.map((faq, index) => (
                                    <FaqItem 
                                        key={faq.id}
                                        eventKey={String(faq.id)}
                                        question={faq.question}
                                        answer={faq.answer}
                                    />
                                ))}
                            </Accordion>
                        </Col>
                    </Row>
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

export default Faq;
