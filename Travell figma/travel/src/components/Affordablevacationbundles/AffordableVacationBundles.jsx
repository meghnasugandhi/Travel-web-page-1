import React from 'react';
import { Container, Row, Col, Card, Button, Nav } from 'react-bootstrap';
// Import icons for the new section
import { FaGlobe, FaDollarSign, FaCalendarCheck, FaUser, FaHeadset, FaCalendarAlt } from 'react-icons/fa';


const VacationBundleCard = ({ bundle }) => {
  const { duration, destination, title, from, price, oldPrice } = bundle;

  return (
    <Card className="h-100 vacation-card-custom shadow-sm" style={styles.card}>
      <div style={styles.cardImgPlaceholder}>
        <div style={styles.cardBadges}>
          <span style={styles.durationBadge}>{duration}</span>
          <span style={styles.destinationBadge}>{destination}</span>
        </div>
      </div>
      <Card.Body className="d-flex flex-column" style={styles.cardBody}>
        <Card.Title style={styles.cardTitle}>{title}</Card.Title>
        <Card.Text style={styles.routeText}>
          {from.join(' → ')}
        </Card.Text>
        <div style={styles.cardFooter}>
          <div style={styles.priceInfoContainer}>
            <p style={styles.priceLabel}>Starting From:</p>
            <div style={styles.priceContainer}>
              <span style={styles.currentPrice}>${price}</span>
              <span style={styles.oldPrice}>${oldPrice}</span>
            </div>
            <p style={styles.taxesInfo}>TAXES INCL/PERS</p>
          </div>
          <div style={styles.buttonContainer}>
            <span style={styles.tripCode}>BONA A THD → BONA A THD</span>
            <Button style={styles.bookTripButton}>Book A Trip</Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

// New component for the "Why Choose TripRex" section
const WhyChooseTripRexSection = () => {
    const features = [
      {
        title: 'Worldwide Coverage',
        text: 'Cras facilisis fermentum ex seda ullamcorper odio rutrum accoun Phasellus auctor',
        icon: <FaGlobe />,
        color: 'green'
      },
      {
        title: 'Competitive Pricing',
        text: 'Burabitur convallis enim athora ullamcorper sagittis. Morbi nug scelerisque for thana.',
        icon: <FaDollarSign />,
        color: 'orange'
      },
      {
        title: 'Fast Booking',
        text: 'Fermentom eitorx quis maximum Etiam luctus erat vulputate urnan posuere convallis.',
        icon: <FaCalendarCheck />,
        color: 'yellow'
      },
      {
        title: 'Guided Tours',
        text: 'Pellentesque venenatis egestasoi diam Proin velgorat elit porttitor metus convallis.',
        icon: <FaUser />,
        color: 'green'
      },
      {
        title: 'Best Support 24/7',
        text: 'Sed venenatis mauris nec nulla euismod, accoumv varius lectus viverra oncen.',
        icon: <FaHeadset />,
        color: 'orange'
      },
      {
        title: 'Ultimate Flexibility',
        text: 'Duis leo sapien, lacinia uforren! efficitur utom suscipit quis nulla Sed auctor eu',
        icon: <FaCalendarAlt />,
        color: 'yellow'
      }
    ];

    return (
        <Container className="mt-5">
            <Row className="g-4">
                {features.map((feature, index) => (
                    <Col xs={12} md={6} lg={4} key={index}>
                        <Card className="custom-card h-100">
                            <Card.Body className="p-4">
                                <div className={`icon-circle ${feature.color}`}>
                                    {feature.icon}
                                </div>
                                <Card.Title className="fw-bold">
                                    {feature.title}
                                </Card.Title>
                                <Card.Text>
                                    {feature.text}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

const AffordableVacationBundles = () => {
  const vacationBundles = [
    {
      duration: '7 DAYS / 6 NIGHT',
      destination: 'EGYPT',
      title: 'Discover Serenity, Exploration, And Enlightenment.',
      from: ['SAINT MASTER', 'EXAGERACHSEN', 'CODES BAZAR', 'BLACK'],
      price: 340,
      oldPrice: 460,
    },
    {
      duration: '3 DAYS / 4 NIGHT',
      destination: 'INDONESIA',
      title: 'Embracing City Lights, Landm, And Iconic Culture.',
      from: ['BANDAIS BAN', 'CODES BAZAR', 'SAINT MASTER', 'SEA'],
      price: 240,
      oldPrice: 380,
    },
    {
      duration: '10 DAYS / 11 NIGHT',
      destination: 'NEW YORK',
      title: 'Immersive Cultural Expirees, Local Cuisine.',
      from: ['SAJEC VALEY', 'SEA RELICH', 'BANDAIS BAN', 'CODES BAZAR'],
      price: 500,
      oldPrice: 860,
    },
    {
      duration: '4 DAYS / 6 NIGHT',
      destination: 'SAUDI ARAB',
      title: 'Exploring Ancient Ruins, Histor Landmarks, And Cultural.',
      from: ['BANDAIS BAN', 'CODES BAZAR', 'EXAGERACHSEN', 'SEA'],
      price: 760,
      oldPrice: 800,
    },
    {
      duration: '5 DAYS / 4 NIGHT',
      destination: 'SPAIN',
      title: 'Adventure Art, Architecture, And Mediterranean.',
      from: ['SAJEC VALEY', 'SEA RELICH', 'BANDAIS BAN', 'SMART HOLYERS'],
      price: 170,
      oldPrice: 220,
    },
    {
      duration: '3 DAYS / 2 NIGHT',
      destination: 'FRANCE',
      title: 'A Journey Of Tour Beauty And Inspiration.',
      from: ['BANDAIS BAN', 'CODES BAZAR', 'EXAGERACHSEN', 'SEA'],
      price: 160,
      oldPrice: 180,
    },
  ];

  return (
    <section style={styles.section}>
      <Container>
        <div style={styles.header}>
          <p style={styles.subtitle}>~ Popular Tours ~</p>
          <h2 style={styles.title}>Affordable Vacation Bundles</h2>
          <Nav style={styles.filterNav}>
            <Nav.Item>
              <Nav.Link style={styles.filterBtnActive}>Tour Package</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={styles.filterBtn}>Hotel</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={styles.filterBtn}>Transports</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <Row className="g-4">
          {vacationBundles.map((bundle, index) => (
            <Col key={index} xs={12} md={6} lg={4}>
              <VacationBundleCard bundle={bundle} />
            </Col>
          ))}
        </Row>
        <div style={styles.viewAllContainer}>
          <Button style={styles.viewAllBtn}>View All Package</Button>
        </div>
      </Container>
      
      {/* ADDED UI SECTION BELOW */}
      <Container>
        <p className='d-flex justify-content-center text-success mt-3'>Our Success</p>
        <h1 className='d-flex justify-content-center'>WHY CHOOSE TRIPREX</h1>
      </Container>
      <WhyChooseTripRexSection />
      {/* END OF ADDED UI SECTION */}

    </section>
  );
};


// All CSS styles in JavaScript object format
const styles = {
  section: {
    backgroundColor: '#f8f9fa',
    padding: '3rem 0',
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  subtitle: {
    color: '#28a745',
    fontSize: '0.9rem',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    marginBottom: '0.5rem',
  },
  title: {
    color: '#333',
    fontSize: '2.2rem',
    fontWeight: 'bold',
    position: 'relative',
    paddingBottom: '15px',
    marginBottom: '1.5rem',
  },
  titleAfter: {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '60px',
    height: '3px',
    backgroundColor: '#28a745',
  },
  filterNav: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1.5rem',
  },
  filterBtn: {
    color: '#6c757d',
    padding: '8px 20px',
    borderRadius: '30px',
    margin: '0 0.5rem',
    textDecoration: 'none',
    transition: 'all 0.3s',
  },
  filterBtnActive: {
    backgroundColor: '#28a745',
    color: 'white',
    padding: '8px 20px',
    borderRadius: '30px',
    margin: '0 0.5rem',
    textDecoration: 'none',
  },
  card: {
    border: 'none',
    borderRadius: '12px',
    overflow: 'hidden',
    transition: 'transform 0.3s',
  },
  cardImgPlaceholder: {
    height: '180px',
    background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    padding: '15px',
  },
  cardBadges: {
    display: 'flex',
    gap: '10px',
  },
  durationBadge: {
    padding: '5px 12px',
    borderRadius: '20px',
    fontSize: '0.75rem',
    fontWeight: '600',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    color: '#333',
  },
  destinationBadge: {
    padding: '5px 12px',
    borderRadius: '20px',
    fontSize: '0.75rem',
    fontWeight: '600',
    backgroundColor: '#28a745',
    color: 'white',
  },
  cardBody: {
    padding: '1.5rem',
  },
  cardTitle: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#333',
    lineHeight: '1.4',
    minHeight: '60px',
    marginBottom: '1rem',
  },
  routeText: {
    fontSize: '0.85rem',
    color: '#6c757d',
    fontWeight: '500',
    marginBottom: '1.5rem',
  },
  cardFooter: {
    marginTop: 'auto',
  },
  priceInfoContainer: {
    backgroundColor: '#f8f9fa',
    padding: '10px 15px',
    borderRadius: '8px',
    marginBottom: '1rem',
  },
  priceLabel: {
    fontSize: '0.8rem',
    color: '#6c757d',
    marginBottom: '0.5rem',
  },
  priceContainer: {
    display: 'flex',
    alignItems: 'baseline',
    marginBottom: '0.25rem',
  },
  currentPrice: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#28a745',
    marginRight: '0.5rem',
  },
  oldPrice: {
    fontSize: '1rem',
    color: '#6c757d',
    textDecoration: 'line-through',
  },
  taxesInfo: {
    fontSize: '0.75rem',
    color: '#6c757d',
    marginBottom: '0',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tripCode: {
    fontSize: '0.8rem',
    color: '#6c757d',
    fontWeight: '500',
  },
  bookTripButton: {
    backgroundColor: '#28a745',
    border: 'none',
    borderRadius: '30px',
    padding: '8px 20px',
    fontSize: '0.9rem',
    fontWeight: '600',
  },
  viewAllContainer: {
    textAlign: 'center',
    marginTop: '3rem',
  },
  viewAllBtn: {
    border: '2px solid #28a745',
    color: '#28a745',
    backgroundColor: 'transparent',
    borderRadius: '30px',
    fontWeight: '600',
    padding: '10px 30px',
  },
};

// All CSS styles in JavaScript object format
const styleSheet = document.styleSheets[0];
if (styleSheet) {
  styleSheet.insertRule(`
    .vacation-card-custom:hover {
      transform: translateY(-5px);
    }
  `, styleSheet.cssRules.length);
  
  styleSheet.insertRule(`
    .filter-nav .nav-link:hover {
      background-color: #28a745;
      color: white;
    }
  `, styleSheet.cssRules.length);
  
  styleSheet.insertRule(`
    .view-all-btn:hover {
      background-color: #28a745;
      color: white;
    }
  `, styleSheet.cssRules.length);
  
  styleSheet.insertRule(`
    .book-trip-button:hover {
      background-color: #218838;
    }
  `, styleSheet.cssRules.length);

  // ADDED NEW CSS RULES BELOW
  styleSheet.insertRule(`
    .custom-card {
      border: 1px solid #f0f0f0;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0,0,0,.05);
      transition: transform 0.2s;
    }
  `, styleSheet.cssRules.length);

  styleSheet.insertRule(`
    .custom-card:hover {
      transform: translateY(-5px);
    }
  `, styleSheet.cssRules.length);

  styleSheet.insertRule(`
    .icon-circle {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 24px;
      margin-bottom: 1.5rem;
    }
  `, styleSheet.cssRules.length);

  styleSheet.insertRule(`
    .icon-circle.green {
      border: 2px solid #81c251;
      color: #81c251;
    }
  `, styleSheet.cssRules.length);

  styleSheet.insertRule(`
    .icon-circle.orange {
      border: 2px solid #f29a3a;
      color: #f29a3a;
    }
  `, styleSheet.cssRules.length);

  styleSheet.insertRule(`
    .icon-circle.yellow {
      border: 2px solid #e2cf39;
      color: #e2cf39;
    }
  `, styleSheet.cssRules.length);
  // END OF NEW CSS RULES
}

// Add media queries
styleSheet.insertRule(`
  @media (max-width: 768px) {
    .section-title {
      font-size: 1.8rem;
    }
    
    .card-title-custom {
      font-size: 1rem;
      min-height: auto;
    }
    
    .button-container {
      flex-direction: column;
      gap: 10px;
    }
    
    .trip-code {
      margin-bottom: 10px;
    }
  }
`, styleSheet.cssRules.length);

// Add the pseudo-element for the title underline
styleSheet.insertRule(`
  .section-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: #28a745;
  }
`, styleSheet.cssRules.length);

export default AffordableVacationBundles;