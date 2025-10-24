import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Nav } from 'react-bootstrap';
import { FaMapMarkerAlt, FaArrowLeft, FaArrowRight, FaPlayCircle, FaCheckCircle } from 'react-icons/fa';
import { FaSkating, FaParachuteBox, FaAngleDoubleUp, FaSkiing, FaWater, FaSwimmer } from 'react-icons/fa';

// --- STYLES FOR ELITE TOURIST ATTRACTIONS ---
const eliteTouristStyles = {
  section: {
    padding: '4rem 0',
    backgroundColor: '#f8f9fa',
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  subtitle: {
    color: '#82b440',
    fontSize: '0.9rem',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    marginBottom: '0.5rem',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '2rem',
  },
  filterNav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    flexWrap: 'wrap',
    marginBottom: '3rem',
  },
  filterBtn: {
    padding: '10px 25px',
    borderRadius: '8px',
    border: '1px solid #dee2e6',
    backgroundColor: '#fff',
    color: '#6c757d',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    fontWeight: '600',
  },
  filterBtnActive: {
    backgroundColor: '#6c757d',
    color: 'white',
    border: '1px solid #6c757d',
  },
  card: {
    border: 'none',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
    transition: 'transform 0.2s ease-in-out',
    height: '100%',
  },
  cardImgWrapper: {
    height: '200px',
    backgroundColor: '#e9ecef',
    position: 'relative',
    overflow: 'hidden',
  },
  cardImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  cardBadges: {
    position: 'absolute',
    top: '15px',
    left: '15px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    zIndex: 1,
  },
  badge: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    color: 'white',
    padding: '4px 10px',
    borderRadius: '5px',
    fontSize: '0.75rem',
    fontWeight: '600',
  },
  locationInfo: {
    position: 'absolute',
    bottom: '15px',
    left: '15px',
    backgroundColor: 'rgba(255,255,255,0.9)',
    color: '#333',
    padding: '5px 10px',
    borderRadius: '5px',
    fontSize: '0.8rem',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontWeight: '600',
    zIndex: 1,
  },
  cardBody: {
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
  },
  cardTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#333',
    minHeight: '60px',
    marginBottom: '1rem',
  },
  routeText: {
    fontSize: '0.85rem',
    color: '#6c757d',
    fontWeight: '500',
    marginBottom: '1rem',
  },
  priceContainer: {
    marginTop: 'auto',
    borderTop: '1px solid #eee',
    paddingTop: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  priceInfo: {
    display: 'flex',
    flexDirection: 'column',
  },
  startingFrom: {
    fontSize: '0.8rem',
    color: '#6c757d',
    marginBottom: '0.2rem',
  },
  currentPrice: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    color: '#82b440',
    marginRight: '0.5rem',
  },
  oldPrice: {
    fontSize: '0.9rem',
    color: '#6c757d',
    textDecoration: 'line-through',
  },
  bookButton: {
    backgroundColor: '#82b440',
    borderColor: '#82b440',
    borderRadius: '25px',
    padding: '8px 20px',
    fontSize: '0.9rem',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  },
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '15px',
    marginTop: '3rem',
  },
  navArrow: {
    backgroundColor: '#e9ecef',
    color: '#6c757d',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.2rem',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
  viewAllBtn: {
    backgroundColor: '#f29a3a',
    borderColor: '#f29a3a',
    color: 'white',
    borderRadius: '25px',
    padding: '10px 30px',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'background-color 0.2s ease',
  },
};

// --- DATA FOR ELITE TOURIST ATTRACTIONS ---
const attractionsData = [
  {
    id: 1,
    filter: 'Sweden',
    duration: '7 DAYS / 8 NIGHT',
    destination: 'AUSTRALIA + SWEDEN',
    location: 'AUSTRALIA + SWEDEN',
    title: 'A Journey Of Tour Beauty And Inspiration.',
    from: ['BANDAR BAN', 'COX\'S BAZAR', 'KHAGRACHORI', 'SA'],
    price: 160,
    oldPrice: 180,
    image: 'https://images.unsplash.com/photo-1549742407-c81b2c454790?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    filter: 'New York',
    duration: '5 DAYS / 6 NIGHT',
    destination: 'NEW YORK + SWEDEN',
    location: 'NEW YORK + SWEDEN',
    title: 'Exploring Energy, Landmarks, And Timeless Traditions.',
    from: ['SAJEC VALLEY', 'SEA BEACH', 'SAINT MARTIN', 'COX'],
    price: 460,
    oldPrice: 670,
    image: 'https://images.unsplash.com/photo-1579612036660-f131acb850ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    filter: 'Egypt',
    duration: '4 DAYS / 5 NIGHT',
    destination: 'SWEDEN',
    location: 'SWEDEN',
    title: 'Immersing In City Skylines, Heritage, And Vibrant Lifestyles.',
    from: ['BANDAR BAN', 'COX\'S BAZAR', 'KHAGRACHORI', 'SA'],
    price: 260,
    oldPrice: 380,
    image: 'https://images.unsplash.com/photo-1574805364817-8178d8a7c13a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 4,
    filter: 'Japan',
    duration: '9 DAYS / 10 NIGHT',
    destination: 'JAPAN',
    location: 'JAPAN',
    title: 'Discovering Ancient Shrines And Modern Wonders.',
    from: ['TOKYO', 'OSAKA', 'KYOTO', 'MOUNT FUJI'],
    price: 900,
    oldPrice: 1200,
    image: 'https://images.unsplash.com/photo-1542051841460-61b4007d4766?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

// --- STYLES FOR EXPLORE YOUR ACTIVITIES ---
const exploreActivitiesStyles = {
  section: {
    padding: '4rem 0',
    backgroundColor: '#fff',
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  subtitle: {
    color: '#82b440',
    fontSize: '0.9rem',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    marginBottom: '0.5rem',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#333',
  },
  activityButton: {
    backgroundColor: '#fff',
    borderColor: '#dee2e6',
    border: '1px solid #dee2e6',
    borderRadius: '8px',
    width: '100%',
    padding: '1.5rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    textAlign: 'center',
  },
  activityButtonActive: {
    backgroundColor: '#ff9a3a',
    color: 'white',
    borderColor: '#ff9a3a',
  },
  activityIcon: {
    fontSize: '2.5rem',
    marginBottom: '0.5rem',
    color: '#ff9a3a',
    transition: 'color 0.3s ease',
  },
  activityButtonActiveIcon: {
    color: 'white',
  },
  activityTitle: {
    color: '#ff9a3a',
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  activityDescription: {
    color: '#6c757d',
  },
  featuresList: {
    listStyleType: 'none',
    padding: 0,
    marginTop: '1rem',
  },
  featureItem: {
    color: '#6c757d',
    marginBottom: '0.5rem',
  },
  actionButton: {
    borderRadius: '25px',
    marginRight: '10px',
  },
  checkBtn: {
    backgroundColor: '#82b440',
    borderColor: '#82b440',
    color: 'white',
  },
  watchBtn: {
    backgroundColor: 'white',
    borderColor: '#6c757d',
    color: '#6c757d',
  },
  mainContentContainer: {
    padding: '2rem',
    borderRadius: '12px',
    border: '1px solid #dee2e6',
  },
  mainImages: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  imageWrapper: {
    border: '1px solid #dee2e6',
    borderRadius: '12px',
    overflow: 'hidden',
    position: 'relative',
    padding: '10px',
  },
  imageLabel: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: 'rgba(0,0,0,0.6)',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '5px',
    fontSize: '0.8rem',
  }
};

// --- DATA FOR EXPLORE YOUR ACTIVITIES ---
const activitiesData = [
  {
    name: 'Zip Lining',
    icon: <FaSkating />,
    title: 'Thrill Above Ground: The Zip Line Adventure',
    description: 'Embark on an adrenaline-fueled journey, zipping through lush landscapes, feeling the wind rush past, and experiencing nature from breathtaking heights. Unleash your inner adventurer today.',
    features: ['Treetop Views', 'Adrenaline Rush', 'Safety Measures', 'Nature Immersion'],
    images: ['https://images.unsplash.com/photo-1520115017208-16e6f98ef2e2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1549742407-c81b2c454790?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']
  },
  {
    name: 'Paragliding',
    icon: <FaParachuteBox />,
    title: 'Soar Through the Sky: A Paragliding Experience',
    description: 'Experience the world from a bird\'s-eye view. Feel the freedom of flight as you glide gracefully over stunning scenery, guided by a professional.',
    features: ['Panoramic Views', 'Guided Flight', 'Thrilling Experience', 'Professional Instructors'],
    images: ['https://images.unsplash.com/photo-1545625120-1a766c04f5e7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1521401314352-09439c2d7657?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']
  },
  {
    name: 'Bungee Jumping',
    icon: <FaAngleDoubleUp />,
    title: 'Dare to Leap: Bungee Jumping',
    description: 'Face your fears and take the ultimate plunge. The rush of freefall is an unforgettable thrill for adrenaline seekers.',
    features: ['Ultimate Thrill', 'Safety Certified', 'Unforgettable Leap', 'Professional Crew'],
    images: ['https://images.unsplash.com/photo-1588636906232-a63e84a28766?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1534954784403-12d8a59f515e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']
  },
  {
    name: 'Ski touring',
    icon: <FaSkiing />,
    title: 'Ski Tour: Backcountry Adventure',
    description: 'Explore untouched landscapes and pristine snow. This tour combines skiing with mountaineering for a unique winter journey.',
    features: ['Pristine Snow', 'Backcountry Routes', 'Guided Tour', 'Winter Wonderland'],
    images: ['https://images.unsplash.com/photo-1538356269934-035f4922e379?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1627916962450-8b1e19d7a224?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']
  },
  {
    name: 'Rafting',
    icon: <FaWater />,
    title: 'Ride the Rapids: River Rafting',
    description: 'Navigate thrilling rapids and experience the power of nature. A perfect group activity for an exciting day on the water.',
    features: ['Team Challenge', 'Scenic Rivers', 'Adrenaline Pumping', 'Experienced Guides'],
    images: ['https://images.unsplash.com/photo-1551065985-61848f217822?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1551065985-61848f217822?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']
  },
  {
    name: 'Surfing',
    icon: <FaSwimmer />, // Replaced FaSurfing with FaSwimmer
    title: 'Catch the Wave: Surfing Lessons',
    description: 'Learn to ride the waves or improve your skills with our expert instructors in some of the world\'s best surf spots.',
    features: ['Beginner Friendly', 'Expert Coaching', 'Beach Vibes', 'All Equipment Included'],
    images: ['https://images.unsplash.com/photo-1502680327312-d81a9544e32d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1589139265243-7f2e4e135f60?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']
  },
];

const ExploreYourActivities = () => {
  const [activeActivity, setActiveActivity] = useState(activitiesData[0]);

  return (
    <section style={exploreActivitiesStyles.section}>
      <Container>
        <div style={exploreActivitiesStyles.header}>
          <p style={exploreActivitiesStyles.subtitle}>~ Are you ready to Travel? ~</p>
          <h2 style={exploreActivitiesStyles.title}>Explore Your Activities</h2>
        </div>
        <Row className="g-4">
          <Col md={5}>
            <Row className="g-3">
              {activitiesData.map((activity) => (
                <Col xs={6} key={activity.name}>
                  <Button
                    onClick={() => setActiveActivity(activity)}
                    style={{
                      ...exploreActivitiesStyles.activityButton,
                      ...(activeActivity.name === activity.name ? exploreActivitiesStyles.activityButtonActive : {}),
                    }}
                  >
                    <div style={{
                      ...exploreActivitiesStyles.activityIcon,
                      ...(activeActivity.name === activity.name ? exploreActivitiesStyles.activityButtonActiveIcon : {}),
                    }}>
                      {activity.icon}
                    </div>
                    {activity.name}
                  </Button>
                </Col>
              ))}
            </Row>
          </Col>
          <Col md={7}>
            <div style={exploreActivitiesStyles.mainContentContainer}>
              <Row>
                <Col xs={12} lg={7} className="d-flex flex-column justify-content-center">
                  <p style={exploreActivitiesStyles.activityTitle}>{activeActivity.name}</p>
                  <h3>{activeActivity.title}</h3>
                  <p style={exploreActivitiesStyles.activityDescription}>{activeActivity.description}</p>
                  <Row className="mt-3">
                    {activeActivity.features.map((feature) => (
                      <Col xs={12} key={feature} className="d-flex align-items-center mb-2">
                        <FaCheckCircle className="me-2" style={{ color: '#82b440' }} />
                        <span>{feature}</span>
                      </Col>
                    ))}
                  </Row>
                  <div className="d-flex mt-4">
                    <Button style={{ ...exploreActivitiesStyles.actionButton, ...exploreActivitiesStyles.checkBtn }}>Check Availability</Button>
                    <Button variant="outline-secondary" style={{ ...exploreActivitiesStyles.actionButton, ...exploreActivitiesStyles.watchBtn }}>
                      <FaPlayCircle className="me-2" /> Watch Adventure
                    </Button>
                  </div>
                </Col>
                <Col xs={12} lg={5} className="d-flex flex-column align-items-center mt-4 mt-lg-0">
                  <div style={exploreActivitiesStyles.mainImages}>
                    <div style={exploreActivitiesStyles.imageWrapper}>
                      <img src={activeActivity.images[0]} alt={activeActivity.name} className="img-fluid rounded" />
                      <span style={exploreActivitiesStyles.imageLabel}>{activeActivity.name}</span>
                    </div>
                    <div style={exploreActivitiesStyles.imageWrapper}>
                      <img src={activeActivity.images[1]} alt={activeActivity.name} className="img-fluid rounded" />
                      <span style={exploreActivitiesStyles.imageLabel}>{activeActivity.name}</span>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

// --- STYLES FOR PHENOMENAL DEALS OFFERED ---
const dealsStyles = {
  section: {
    padding: '4rem 0',
    backgroundColor: '#fff',
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  subtitle: {
    color: '#82b440',
    fontSize: '0.9rem',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    marginBottom: '0.5rem',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#333',
  },
  card: {
    border: 'none',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
    transition: 'transform 0.2s ease-in-out',
    height: '100%',
    position: 'relative',
  },
  cardImg: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
  },
  discountBadge: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    backgroundColor: '#ff9a3a',
    color: 'white',
    padding: '8px 15px',
    borderRadius: '8px',
    fontWeight: 'bold',
    zIndex: 1,
  },
  cardContentOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.1))',
    padding: '2rem 1.5rem 1rem',
    color: 'white',
  },
  cardTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '0.2rem',
  },
  cardDescription: {
    fontSize: '0.9rem',
  },
  bookBtn: {
    backgroundColor: '#82b440',
    borderColor: '#82b440',
    color: 'white',
    borderRadius: '25px',
    padding: '8px 20px',
    fontSize: '0.9rem',
    fontWeight: '600',
    marginTop: '1rem',
  },
};

// --- DATA FOR PHENOMENAL DEALS OFFERED ---
const dealsData = [
  {
    id: 1,
    title: 'Couple Tour',
    duration: '4 Days in Switzerland',
    discount: '20%',
    image: 'https://images.unsplash.com/photo-1549742407-c81b2c454790?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    title: 'Honeymoon Tour',
    duration: '2 Country & 10 Location',
    discount: '40%',
    image: 'https://images.unsplash.com/photo-1579612036660-f131acb850ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    title: '50% Off',
    duration: 'For Your First Book',
    image: 'https://images.unsplash.com/photo-1574805364817-8178d8a7c13a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
];

const PhenomenalDealsOffered = () => {
  return (
    <section style={dealsStyles.section}>
      <Container>
        <div style={dealsStyles.header}>
          <p style={dealsStyles.subtitle}>~ Hurry Up ~</p>
          <h2 style={dealsStyles.title}>Phenomenal Deals Offered</h2>
        </div>
        <Row className="g-4">
          {dealsData.map((deal) => (
            <Col key={deal.id} md={4}>
              <Card style={dealsStyles.card}>
                <Card.Img variant="top" src={deal.image} style={dealsStyles.cardImg} />
                {deal.discount && (
                  <span style={dealsStyles.discountBadge}>
                    <p style={{ margin: 0, fontSize: '1.5rem' }}>{deal.discount}</p>
                    <p style={{ margin: 0, fontSize: '0.8rem' }}>Discover Great Deal</p>
                  </span>
                )}
                <div style={dealsStyles.cardContentOverlay}>
                  <h5 style={dealsStyles.cardTitle}>{deal.title}</h5>
                  <p style={dealsStyles.cardDescription}>{deal.duration}</p>
                  <Button style={dealsStyles.bookBtn}>Book Now</Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

// --- NEW COMPONENT: POPULAR HOTELS ---
const popularHotelsStyles = {
  section: {
    padding: '4rem 0',
    backgroundColor: '#f8f9fa',
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  subtitle: {
    color: '#82b440',
    fontSize: '0.9rem',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    marginBottom: '0.5rem',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '2rem',
  },
  filterNav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px', // Increased gap for distinct filter buttons
    flexWrap: 'wrap',
    marginBottom: '3rem',
  },
  filterItem: {
    cursor: 'pointer',
    position: 'relative',
    padding: '10px 0',
    transition: 'color 0.3s ease',
    fontWeight: '600',
    color: '#6c757d',
    textDecoration: 'none', // Ensure no default underline
  },
  filterItemActive: {
    color: '#333',
  },
  filterItemUnderline: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '3px',
    backgroundColor: '#ff9a3a', // Orange underline for active filter
    transition: 'width 0.3s ease',
  },
  // Specific style for the first filter with image
  firstFilterWithImage: {
    display: 'flex',
    alignItems: 'center',
    padding: '5px 15px',
    borderRadius: '8px',
    border: '1px solid #dee2e6',
    backgroundColor: '#fff',
    gap: '10px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
  },
  firstFilterImage: {
    width: '40px',
    height: '40px',
    borderRadius: '6px',
    objectFit: 'cover',
  },
  card: {
    border: 'none',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
    transition: 'transform 0.2s ease-in-out',
    height: '100%',
  },
  cardImgWrapper: {
    height: '200px',
    backgroundColor: '#e9ecef',
    position: 'relative',
    overflow: 'hidden',
  },
  cardImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  cardBadges: {
    position: 'absolute',
    top: '15px',
    left: '15px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    zIndex: 1,
  },
  badge: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    color: 'white',
    padding: '4px 10px',
    borderRadius: '5px',
    fontSize: '0.75rem',
    fontWeight: '600',
  },
  locationInfo: {
    position: 'absolute',
    bottom: '15px',
    left: '15px',
    backgroundColor: 'rgba(255,255,255,0.9)',
    color: '#333',
    padding: '5px 10px',
    borderRadius: '5px',
    fontSize: '0.8rem',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontWeight: '600',
    zIndex: 1,
  },
  cardBody: {
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
  },
  cardTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#333',
    minHeight: '60px',
    marginBottom: '1rem',
  },
  routeText: {
    fontSize: '0.85rem',
    color: '#6c757d',
    fontWeight: '500',
    marginBottom: '1rem',
  },
  priceContainer: {
    marginTop: 'auto',
    borderTop: '1px solid #eee',
    paddingTop: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  priceInfo: {
    display: 'flex',
    flexDirection: 'column',
  },
  startingFrom: {
    fontSize: '0.8rem',
    color: '#6c757d',
    marginBottom: '0.2rem',
  },
  currentPrice: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    color: '#82b440',
    marginRight: '0.5rem',
  },
  oldPrice: {
    fontSize: '0.9rem',
    color: '#6c757d',
    textDecoration: 'line-through',
  },
  bookButton: {
    backgroundColor: '#82b440',
    borderColor: '#82b440',
    borderRadius: '25px',
    padding: '8px 20px',
    fontSize: '0.9rem',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  },
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '15px',
    marginTop: '3rem',
  },
  navArrow: {
    backgroundColor: '#e9ecef',
    color: '#6c757d',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.2rem',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
  viewAllBtn: {
    backgroundColor: '#f29a3a',
    borderColor: '#f29a3a',
    color: 'white',
    borderRadius: '25px',
    padding: '10px 30px',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'background-color 0.2s ease',
  },
};

// --- DATA FOR POPULAR HOTELS (Expanded to match the image) ---
const hotelsData = [
  {
    id: 1,
    filter: 'Sweden',
    duration: '7 DAYS / 8 NIGHT',
    destination: 'AUSTRALIA + SWEDEN',
    location: 'AUSTRALIA + SWEDEN',
    title: 'A Journey Of Tour Beauty And Inspiration.',
    from: ['BANDAR BAN', 'COX\'S BAZAR', 'KHAGRACHORI', 'SA'],
    price: 160,
    oldPrice: 180,
    image: 'https://images.unsplash.com/photo-1549742407-c81b2c454790?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    filter: 'New York',
    duration: '5 DAYS / 6 NIGHT',
    destination: 'NEW YORK + SWEDEN',
    location: 'NEW YORK + SWEDEN',
    title: 'Exploring Energy, Landmarks, And Timeless Traditions.',
    from: ['SAJEC VALLEY', 'SEA BEACH', 'SAINT MARTIN', 'COX'],
    price: 460,
    oldPrice: 670,
    image: 'https://images.unsplash.com/photo-1579612036660-f131acb850ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    filter: 'Egypt',
    duration: '4 DAYS / 5 NIGHT',
    destination: 'SWEDEN',
    location: 'SWEDEN',
    title: 'Immersing In City Skylines, Heritage, And Vibrant Lifestyles.',
    from: ['BANDAR BAN', 'COX\'S BAZAR', 'KHAGRACHORI', 'SA'],
    price: 260,
    oldPrice: 380,
    image: 'https://images.unsplash.com/photo-1574805364817-8178d8a7c13a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 4,
    filter: 'Japan',
    duration: '6 DAYS / 7 NIGHT',
    destination: 'TOKYO + KYOTO',
    location: 'JAPAN',
    title: 'Serene Temples & Neon Streets.',
    from: ['TOKYO', 'KYOTO', 'OSAKA'],
    price: 750,
    oldPrice: 900,
    image: 'https://images.unsplash.com/photo-1542051841460-61b4007d4766?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 5,
    filter: 'Australia',
    duration: '10 DAYS / 11 NIGHT',
    destination: 'SYDNEY + MELBOURNE',
    location: 'AUSTRALIA',
    title: 'Iconic Landmarks and Coastal Beauty.',
    from: ['SYDNEY', 'MELBOURNE', 'GOLD COAST'],
    price: 1200,
    oldPrice: 1500,
    image: 'https://images.unsplash.com/photo-1506973070747-d34e6378e0d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

const PopularHotels = () => {
  const [activeFilter, setActiveFilter] = useState('Sweden'); // Default active filter

  const filteredHotels = hotelsData.filter(
    (hotel) => activeFilter === hotel.filter
  );

  return (
    <section style={popularHotelsStyles.section}>
      <Container>
        <div style={popularHotelsStyles.header}>
          <p style={popularHotelsStyles.subtitle}>~ Popular Tour ~</p>
          <h2 style={popularHotelsStyles.title}>Popular Hotels</h2>
          <Nav style={popularHotelsStyles.filterNav}>
            {['Sweden', 'Japan', 'Australia', 'New York', 'Egypt'].map((filter) => (
              <Nav.Item key={filter}>
                <Nav.Link
                  onClick={() => setActiveFilter(filter)}
                  className={`popular-hotels-filter-item ${activeFilter === filter ? 'active-filter-hotel' : ''}`}
                  style={{
                    ...popularHotelsStyles.filterItem,
                    ...(activeFilter === filter ? popularHotelsStyles.filterItemActive : {}),
                    // Specific styling for the "Sweden" filter with an image
                    ...(filter === 'Sweden' ? popularHotelsStyles.firstFilterWithImage : {}),
                  }}
                >
                  {filter === 'Sweden' && (
                    <img
                      src="https://images.unsplash.com/photo-1549742407-c81b2c454790?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Placeholder image for Sweden
                      alt="Sweden"
                      style={popularHotelsStyles.firstFilterImage}
                    />
                  )}
                  {filter}
                  {/* The underline is now handled by CSS rule `active-filter-hotel::after` */}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </div>

        <Row className="g-4">
          {filteredHotels.map((hotel) => (
            <Col key={hotel.id} xs={12} md={6} lg={4}>
              <Card className="elite-card" style={popularHotelsStyles.card}>
                <div style={popularHotelsStyles.cardImgWrapper}>
                  {hotel.image && <Card.Img variant="top" src={hotel.image} style={popularHotelsStyles.cardImg} />}
                  <div style={popularHotelsStyles.cardBadges}>
                    <span style={popularHotelsStyles.badge}>{hotel.duration}</span>
                  </div>
                  <div style={popularHotelsStyles.locationInfo}>
                    <FaMapMarkerAlt /> {hotel.location}
                  </div>
                </div>
                <Card.Body style={popularHotelsStyles.cardBody}>
                  <Card.Title style={popularHotelsStyles.cardTitle}>{hotel.title}</Card.Title>
                  <Card.Text style={popularHotelsStyles.routeText}>
                    {hotel.from.join(' → ')}
                  </Card.Text>
                  <div style={popularHotelsStyles.priceContainer}>
                    <div style={popularHotelsStyles.priceInfo}>
                      <p style={popularHotelsStyles.startingFrom}>Starting From:</p>
                      <div>
                        <span style={popularHotelsStyles.currentPrice}>${hotel.price}</span>
                        <span style={popularHotelsStyles.oldPrice}>${hotel.oldPrice}</span>
                      </div>
                      <p style={popularHotelsStyles.taxesInfo}>TAXES INCL/PERS</p>
                    </div>
                    <Button
                      style={popularHotelsStyles.bookButton}
                      className="elite-book-button"
                    >
                      Book A Trip <FaArrowRight />
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div style={popularHotelsStyles.paginationContainer}>
          <Button style={popularHotelsStyles.navArrow} className="elite-nav-arrow-left">
            <FaArrowLeft />
          </Button>
          <Button style={popularHotelsStyles.viewAllBtn} className="elite-view-all-btn">
            View All Hotels
          </Button>
          <Button style={popularHotelsStyles.navArrow} className="elite-nav-arrow-right">
            <FaArrowRight />
          </Button>
        </div>
      </Container>
    </section>
  );
};


// --- MAIN COMPONENT THAT RENDERS ALL SECTIONS ---
const EliteTouristAttractions = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredBundles = attractionsData.filter(
    (bundle) => activeFilter === 'All' || bundle.filter === activeFilter
  );

  return (
    <React.Fragment>
      <section style={eliteTouristStyles.section}>
        <Container>
          <div style={eliteTouristStyles.header}>
            <p style={eliteTouristStyles.subtitle}>~ Popular Tour ~</p>
            <h2 style={eliteTouristStyles.title}>Elite Tourist Attractions</h2>
            <Nav style={eliteTouristStyles.filterNav} className="elite-filter-nav">
              {['Sweden', 'Japan', 'Australia', 'New York', 'Egypt', 'All'].map((filter) => (
                <Nav.Item key={filter}>
                  <Nav.Link
                    onClick={() => setActiveFilter(filter)}
                    style={{
                      ...eliteTouristStyles.filterBtn,
                      ...(activeFilter === filter ? eliteTouristStyles.filterBtnActive : {}),
                    }}
                    className={activeFilter === filter ? 'active-filter-btn' : ''}
                  >
                    {filter}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </div>

          <Row className="g-4">
            {filteredBundles.map((bundle) => (
              <Col key={bundle.id} xs={12} md={6} lg={4}>
                <Card className="elite-card" style={eliteTouristStyles.card}>
                  <div style={eliteTouristStyles.cardImgWrapper}>
                    {bundle.image && <Card.Img variant="top" src={bundle.image} style={eliteTouristStyles.cardImg} />}
                    <div style={eliteTouristStyles.cardBadges}>
                      <span style={eliteTouristStyles.badge}>{bundle.duration}</span>
                    </div>
                    <div style={eliteTouristStyles.locationInfo}>
                      <FaMapMarkerAlt /> {bundle.location}
                    </div>
                  </div>
                  <Card.Body style={eliteTouristStyles.cardBody}>
                    <Card.Title style={eliteTouristStyles.cardTitle}>{bundle.title}</Card.Title>
                    <Card.Text style={eliteTouristStyles.routeText}>
                      {bundle.from.join(' → ')}
                    </Card.Text>
                    <div style={eliteTouristStyles.priceContainer}>
                      <div style={eliteTouristStyles.priceInfo}>
                        <p style={eliteTouristStyles.startingFrom}>Starting From:</p>
                        <div>
                          <span style={eliteTouristStyles.currentPrice}>${bundle.price}</span>
                          <span style={eliteTouristStyles.oldPrice}>${bundle.oldPrice}</span>
                        </div>
                        <p style={eliteTouristStyles.taxesInfo}>TAXES INCL/PERS</p>
                      </div>
                      <Button
                        style={eliteTouristStyles.bookButton}
                        className="elite-book-button"
                      >
                        Book A Trip <FaArrowRight />
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div style={eliteTouristStyles.paginationContainer}>
            <Button style={eliteTouristStyles.navArrow} className="elite-nav-arrow-left">
              <FaArrowLeft />
            </Button>
            <Button style={eliteTouristStyles.viewAllBtn} className="elite-view-all-btn">
              View All Package
            </Button>
            <Button style={eliteTouristStyles.navArrow} className="elite-nav-arrow-right">
              <FaArrowRight />
            </Button>
          </div>
        </Container>
      </section>

      <ExploreYourActivities />
      <PhenomenalDealsOffered />
      <PopularHotels /> {/* Render the new PopularHotels component here */}
    </React.Fragment>
  );
};

export default EliteTouristAttractions;

// --- CSS INJECTION FOR HOVER EFFECTS ---
const eliteStyleSheet = document.styleSheets[0];
if (eliteStyleSheet) {
  eliteStyleSheet.insertRule(`
    .elite-card:hover {
      transform: translateY(-5px);
    }
  `, eliteStyleSheet.cssRules.length);

  eliteStyleSheet.insertRule(`
    .elite-filter-nav .nav-link:hover {
      background-color: #6c757d;
      color: white;
    }
  `, eliteStyleSheet.cssRules.length);

  eliteStyleSheet.insertRule(`
    .elite-book-button:hover {
      background-color: #6a9736 !important;
      border-color: #6a9736 !important;
    }
  `, eliteStyleSheet.cssRules.length);

  eliteStyleSheet.insertRule(`
    .elite-nav-arrow-left:hover, .elite-nav-arrow-right:hover {
      background-color: #ced4da !important;
    }
  `, eliteStyleSheet.cssRules.length);

  eliteStyleSheet.insertRule(`
    .elite-view-all-btn:hover {
      background-color: #e08a2f !important;
      border-color: #e08a2f !important;
    }
  `, eliteStyleSheet.cssRules.length);

  eliteStyleSheet.insertRule(`
    @media (max-width: 576px) {
      .elite-filter-nav {
        flex-direction: column;
        align-items: stretch;
      }
      .elite-filter-nav .nav-item {
        width: 100%;
      }
      .elite-filter-nav .nav-link {
        width: 100%;
        text-align: center;
        margin-bottom: 5px;
      }
    }
  `, eliteStyleSheet.cssRules.length);

  // Styles for PopularHotels hover effects
  eliteStyleSheet.insertRule(`
    .popular-hotels-filter-item:hover {
      color: #333; /* Slightly darker on hover */
    }
  `, eliteStyleSheet.cssRules.length);

  // The active filter underline for PopularHotels
  eliteStyleSheet.insertRule(`
    .popular-hotels-filter-item.active-filter-hotel::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: #ff9a3a;
      transition: width 0.3s ease;
    }
  `, eliteStyleSheet.cssRules.length);
}