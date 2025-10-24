import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Nav } from 'react-bootstrap';
// All your imported images
import australia from '../../../assets/images/australia.png';
import brazil from '../../../assets/images/brazil.png';
import sweden from '../../../assets/images/sweden.png';
import japan from '../../../assets/images/japan.png';
import india from '../../../assets/images/india.png';
import ab2 from '../../../assets/images/ab2.png';
import ab3 from '../../../assets/images/ab3.png';

// 1. Single data array for all 6 uniform tour cards
const tourCardData = [
    {
      img: australia, 
      alt: "Egypt Tour",
      duration: "7 DAYS / 6 NIGHT",
      destination: "EGYPT",
      title: "Discover Serenity, Exploration, And Enlightenment.",
      route: "SAINT MASTIN → KHADRACHORIRI → COX'S BAZAR → SA",
      currentPrice: "$340",
      oldPrice: "6460",
      taxesInfo: "TAKES MILL HERE",
    },
    {
      img: sweden, 
      alt: "Indonesia Tour",
      duration: "3 DAYS / 4 NIGHT",
      destination: "INDONESIA",
      title: "Embracing City Lights, Landm, And Iconic Culture.",
      route: "BANDAR BAN → COX'S BAZAR → SAINT MARTIN → SEA",
      currentPrice: "$240",
      oldPrice: "8860",
      taxesInfo: "TAKES MILL HERE",
    },
    {
      img: ab2, 
      alt: "New York Tour",
      duration: "10 DAYS / 11 NIGHT",
      destination: "NEW YORK",
      title: "Immersive Cultural Expirees, Local Cuisine.",
      route: "SASTEY VALU → SEA BEACH → BANDAR BAN → COX'S",
      currentPrice: "$500",
      oldPrice: "8880",
      taxesInfo: "TAKES MILL HERE",
    },
    {
      img: brazil, 
      alt: "Saudi Arabia Tour",
      duration: "4 DAYS / 6 NIGHT",
      destination: "SAUDI ARAB",
      title: "Exploring Ancient Ruins, Histor Landmarks, And Cultural.",
      route: "BANDAR BAN → COX'S BAZAR → KHADRACHORIRI → SA",
      currentPrice: "$760",
      oldPrice: "8600",
      taxesInfo: "TAKES MILL HERE",
    },
    {
      img: india, 
      alt: "Spain Tour",
      duration: "5 DAYS / 4 NIGHT",
      destination: "SPAIN",
      title: "Adventure Art, Architecture, And Mediterranean.",
      route: "SASTEY VALU → SEA BELCH → BANDURB BAN → EMAIR",
      currentPrice: "$170",
      oldPrice: "220",
      taxesInfo: "TAKES MILL HERE",
    },
    {
      img: japan, 
      alt: "France Tour",
      duration: "3 DAYS / 2 NIGHT",
      destination: "FRANCE",
      title: "A Journey Of Tour Beauty And Inspiration.",
      route: "BANDURB BAN → COX'S BAZAR → KIMGRAQISIBI → SA",
      currentPrice: "$160",
      oldPrice: "8480",
      taxesInfo: "TAKES MILL HERE",
    },
];

// Helper component for tour package card, handling its own hover state
const TourCard = ({ data }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isButtonHovered, setIsButtonHovered] = useState(false);

    const cardStyle = {
        ...styles.card,
        // Apply transform only when card is hovered
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 8px 12px rgba(0, 0, 0, 0.1)' : '0 4px 6px rgba(0, 0, 0, 0.05)',
    };
    
    const buttonStyle = {
        ...styles.bookButton,
        // Apply darker background when button is hovered
        backgroundColor: isButtonHovered ? '#2e8b00' : '#38b000',
    };

    return (
        <Card 
            style={cardStyle} 
            className="h-100" 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Card.Img variant="top" src={data.img} alt={data.alt} style={styles.cardImageFixed} />
            
            <Card.Body style={styles.cardBody}>
                <div style={styles.badges}>
                    <span style={styles.durationBadge}>{data.duration}</span>
                    <span style={styles.destinationBadge}>{data.destination}</span>
                </div>
                <Card.Title style={styles.cardTitle}>{data.title}</Card.Title>
                <Card.Text style={styles.routeText}>
                    {data.route}
                </Card.Text>
                <div style={styles.priceContainer}>
                    <p style={styles.priceLabel}>Starting from:</p>
                    <div style={styles.price}>
                        <span style={styles.currentPrice}>{data.currentPrice}</span>
                        <span style={styles.oldPrice}>{data.oldPrice}</span>
                    </div>
                    <p style={styles.taxesInfo}>{data.taxesInfo}</p>
                </div>
                <div style={styles.buttonContainer}>
                    <Button 
                        style={buttonStyle}
                        onMouseEnter={() => setIsButtonHovered(true)}
                        onMouseLeave={() => setIsButtonHovered(false)}
                    >
                        Book A Trip →
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};


// Helper component for Nav.Link, handling its hover state
const FilterLink = ({ children, active, style }) => {
    const [isHovered, setIsHovered] = useState(false);

    const hoverStyle = {
        backgroundColor: '#28a745',
        color: 'white',
        borderColor: '#28a745',
    };
    
    const finalStyle = {
        ...style,
        // Apply hover style only if not the active button and it is hovered
        ...(!active && isHovered ? hoverStyle : {}),
        cursor: 'pointer',
    };

    return (
        <Nav.Link
            style={finalStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
        </Nav.Link>
    );
};


const RecentSearch = () => {
    return (
        <section style={styles.section}>
            <Container>
                <div style={styles.header}>
                    <h2 style={styles.title}>Recent Search</h2>
                    <Nav style={styles.filterNav}>
                        <Nav.Item>
                            <FilterLink style={styles.filterBtnActive} active={true}>Tour Package</FilterLink>
                        </Nav.Item>
                        <Nav.Item>
                            <FilterLink style={styles.filterBtn}>Hotel</FilterLink>
                        </Nav.Item>
                        <Nav.Item>
                            <FilterLink style={styles.filterBtn}>Transports</FilterLink>
                        </Nav.Item>
                    </Nav>
                </div>

                {/* Row 1: Cards 1, 2, 3 */}
                <Row className="d-flex flex-wrap align-items-stretch" style={styles.rowMargin}>
                    {tourCardData.slice(0, 3).map((card, index) => (
                        <Col key={index} md={4} className="d-flex mb-4">
                            <TourCard data={card} />
                        </Col>
                    ))}
                </Row>

                {/* Row 2: Cards 4, 5, 6 */}
                <Row className="d-flex flex-wrap align-items-stretch" style={styles.rowMargin}>
                    {tourCardData.slice(3, 6).map((card, index) => (
                        <Col key={index + 3} md={4} className="d-flex mb-4">
                            <TourCard data={card} />
                        </Col>
                    ))}
                </Row>
                
                {/* Re-adding the special card */}
                <Row>
                    <Col md={12} lg={4}>
                         <Card style={{...styles.card, ...styles.specialCard, transition: 'none' }}>
                            <Card.Img variant="top" src={ab3} alt="australia" style={styles.cardImageFixed} />
                            <Card.Body style={styles.specialCardBody}>
                                <h3 style={styles.specialTitle}>Every Action!</h3>
                                <ul style={styles.destinationList}>
                                    <li style={styles.destinationListItem}>BRAZIL + SWEDEN + EGYPT</li>
                                    <li style={styles.destinationListItem}>JUSTIFAUL + SWEDEN</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

// All CSS styles in JavaScript object format
const styles = {
    section: {
        padding: '3rem 0',
        backgroundColor: 'white',
    },
    header: {
        textAlign: 'center',
        marginBottom: '2rem',
    },
    title: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        marginBottom: '1.5rem',
        color: '#333',
    },
    filterNav: {
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        marginBottom: '2rem',
    },
    filterBtn: {
        padding: '0.5rem 1.5rem',
        borderRadius: '30px',
        border: '1px solid #dee2e6',
        color: '#6c757d',
        textDecoration: 'none',
        fontWeight: '500',
    },
    filterBtnActive: {
        padding: '0.5rem 1.5rem',
        borderRadius: '30px',
        border: '1px solid #28a745',
        backgroundColor: '#28a745',
        color: 'white',
        textDecoration: 'none',
        fontWeight: '500',
    },
    card: {
        border: '1px solid #dee2e6',
        borderRadius: '8px',
        // boxShadow property will be dynamic
        transition: 'transform 0.3s, box-shadow 0.3s', // Ensure transition is here
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
    },
    cardImageFixed: {
        height: '220px', 
        objectFit: 'cover',
        width: '100%',
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
    },
    cardBody: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: '1',
        padding: '1rem',
    },
    badges: {
        display: 'flex',
        gap: '0.5rem',
        marginBottom: '0.5rem',
    },
    durationBadge: {
        backgroundColor: '#e9ecef',
        color: '#495057',
        padding: '0.1rem 0.5rem',
        borderRadius: '15px',
        fontSize: '0.7rem',
        fontWeight: '600',
    },
    destinationBadge: {
        backgroundColor: '#38b000',
        color: 'white',
        padding: '0.1rem 0.5rem',
        borderRadius: '15px',
        fontSize: '0.7rem',
        fontWeight: '600',
    },
    cardTitle: {
        fontSize: '1.0rem',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '0.5rem',
        lineHeight: '1.4',
        minHeight: '40px', 
    },
    routeText: {
        color: '#6c757d',
        fontSize: '0.75rem',
        marginBottom: '1rem',
        fontWeight: '500',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    priceContainer: {
        marginTop: 'auto',
    },
    priceLabel: {
        fontSize: '0.75rem',
        color: '#6c757d',
        marginBottom: '0.25rem',
    },
    price: {
        display: 'flex',
        alignItems: 'baseline',
        gap: '0.5rem',
        marginBottom: '0.25rem',
    },
    currentPrice: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: '#333',
    },
    oldPrice: {
        fontSize: '0.8rem',
        color: '#6c757d',
        textDecoration: 'line-through',
    },
    taxesInfo: {
        fontSize: '0.7rem',
        color: '#6c757d',
        marginBottom: '0.5rem',
        fontWeight: '600',
    },
    buttonContainer: {
        textAlign: 'left',
    },
    bookButton: {
        border: 'none',
        borderRadius: '5px',
        padding: '0.5rem 1rem',
        fontWeight: '600',
        fontSize: '0.8rem',
        width: '100%',
        display: 'block',
        transition: 'background-color 0.3s', // Ensure transition is here
    },
    rowMargin: {
        marginBottom: '1rem',
    },
    specialCard: {
        backgroundColor: '#e9ecef',
        marginBottom: '1.5rem',
    },
    specialCardBody: {
        padding: '1.5rem',
    },
    specialTitle: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '1rem',
    },
    destinationList: {
        listStyleType: 'none',
        padding: '0',
        margin: '0',
    },
    destinationListItem: {
        fontSize: '1rem',
        fontWeight: '600',
        color: '#495057',
        padding: '0.5rem 0',
        borderBottom: '1px solid #dee2e6',
    },
};

export default RecentSearch;