import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

// --- 1. Custom Link Component (Simulates React Router Link) ---
/**
 * A custom Link component that acts as the router Link, preventing full page reloads.
 */
const Link = ({ to, children, style, className, onClick, ...rest }) => {
    const handleCustomClick = (e) => {
        // Prevent default browser navigation for internal paths
        if (to && (to.startsWith('#') || to.startsWith('/'))) {
            e.preventDefault();
            console.log(`[Custom Link] Navigation handled internally for route: ${to}`);
        }
        if (onClick) {
            onClick(e);
        }
    };

    return (
        <a href={to} style={styles.resetLink(style)} className={className} onClick={handleCustomClick} {...rest}>
            {children}
        </a>
    );
};


// --- 2. Inline SVG Icon Components for Features and Stats ---

// Feature Icons (Inside the 2x2 grid from original section)
const FeatureIcon = ({ children }) => (
    <div style={styles.featureIconContainer}>
        {children}
    </div>
);
// SVG Icons (LUCIDE ICONS, matching the style in the image)
const SafetyIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#82b440" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>);
const GuideIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#82b440" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 10l-4 4l-2 2"/><path d="M22 17H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2"/><circle cx="10" cy="14" r="2"/><path d="M2 12s.5-1 2-1c2 0 4 1 4 1"/></svg>);
const ExpertiseIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#82b440" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2c4 0 7.9 1.5 10.9 4.1C24.4 7.6 24 8.2 24 9.1v2.8c0 2.2-1.8 4.2-4 4.2H17v1.8c0 1.9-1.3 3.5-3 3.5H10c-1.7 0-3-1.6-3-3.5V16h-3c-2.2 0-4-2-4-4.2V9.1c0-.9-.4-1.5-.9-3 3-2.6 6.9-4.1 10.9-4.1z"/></svg>);
const SavingsIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#82b440" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>);
const PlayIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#82b440" style={{marginLeft: '8px'}}><path d="M3 8v8l6-4zm9 4c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8-8 3.582-8 8zm8 0c0 3.313 2.687 6 6 6s6-2.687 6-6-2.687-6-6-6-6 2.687-6 6z"/></svg>);

// Stat Icons (Below the main section)
const HappyTravelerIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#82b440" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>);
const ToursSuccessIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#82b440" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="8 12 12 16 16 12"/></svg>);
const PositiveReviewIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#82b440" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9l-4 4l-2-2"/><path d="M22 17H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2"/><circle cx="10" cy="14" r="2"/></svg>);
const TravelGuideStatIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#82b440" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20v-8M8 16v-4M16 16v-4M20 10V5l-8-3-8 3v5c0 6 8 10 8 10s8-4 8-10z"/></svg>);


// NEW ICONS FOR WHY TRIPREX IS BEST SECTION
const GlobeIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#82b440" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 0-9.9 9.87A10 10 0 0 0 12 22a10 10 0 0 0 9.9-9.87A10 10 0 0 0 12 2zM12 2v20M3.27 7.5h17.46M3.27 16.5h17.46"/></svg>);
const TagIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#82b440" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.5 4.5l-16 16M4 20l16-16"/><path d="M4 4h5v5H4zM15 15h5v5h-5z"/></svg>);
const CalendarIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#82b440" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>);
const CompassIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#82b440" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>);
const SupportIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#82b440" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 12h.01"/><path d="M12 16h.01"/></svg>);
const UnlockIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#82b440" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>);
// NEW ICONS FOR TOUR CARDS
const RatingStarIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#ffc107" stroke="#ffc107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>);
const ClockIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>);
const MapPinIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>);
const CheckCircleIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>);


// --- 3. STYLES FOR THE PAGE ---
const styles = {
    resetLink: (extraStyle) => ({
        textDecoration: 'none',
        ...extraStyle
    }),
    // Hero Section
    heroSection: {
        backgroundImage: `url('https://placehold.co/1920x400/292d3e/white?text=About+Us+Hero')`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '350px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        color: 'white',
        textAlign: 'center',
    },
    heroOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    },
    heroContent: {
        zIndex: 2,
        padding: '20px',
    },
    heroTitle: {
        fontSize: '3rem',
        fontWeight: '700', 
        marginBottom: '10px',
    },
    breadcrumb: {
        fontSize: '1rem',
        color: '#ccc',
    },

    // Story & Features Section
    storySection: {
        padding: '5rem 0 7rem 0', 
    },
    sectionSubtitle: {
        color: '#82b440',
        fontSize: '1rem',
        fontWeight: '600',
        marginBottom: '8px',
        display: 'inline-block',
        textTransform: 'uppercase',
    },
    sectionTitle: {
        fontSize: '2.5rem',
        fontWeight: '900',
        color: '#1a1a1a',
        marginBottom: '20px',
        lineHeight: '1.2',
    },
    storyText: {
        color: '#555',
        lineHeight: '1.8',
        marginBottom: '30px',
    },
    // 2x2 Feature Grid (Original)
    featureCard: {
        display: 'flex',
        alignItems: 'center',
        padding: '15px',
        borderRadius: '10px',
        border: '1px solid #eee',
        boxShadow: '0 2px 5px rgba(0,0,0,0.02)',
        backgroundColor: '#fff',
        transition: 'transform 0.2s, box-shadow 0.2s',
        width: '100%',
    },
    featureIconContainer: {
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        padding: '10px',
        marginRight: '15px',
        border: '1px solid #82b44033',
        minWidth: '44px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    featureText: {
        fontSize: '0.95rem',
        fontWeight: '600',
        color: '#333',
    },
    // Buttons
    findOutBtn: {
        backgroundColor: '#82b440',
        borderColor: '#82b440',
        color: 'white',
        padding: '12px 25px',
        borderRadius: '8px',
        fontWeight: '600',
        fontSize: '1rem',
        marginRight: '15px',
        transition: 'background-color 0.3s ease',
    },
    watchTourBtn: {
        backgroundColor: 'transparent',
        color: '#1a1a1a',
        borderColor: 'transparent',
        padding: '10px 20px',
        borderRadius: '8px',
        fontSize: '1rem',
        fontWeight: '600',
        display: 'inline-flex',
        alignItems: 'center',
    },
    playIconRing: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: '#82b4401a', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '10px',
        color: '#82b440',
    },

    // Image and Badge Column
    imageContainer: {
        position: 'relative',
        padding: '20px',
        marginTop: '20px', 
    },
    storyImage: {
        width: '100%',
        height: 'auto',
        borderRadius: '12px',
        boxShadow: '10px 10px 0 0 #82b440', 
        transform: 'rotate(-1deg)',
        filter: 'saturate(1.1) brightness(1.05)',
    },
    experienceBadge: {
        position: 'absolute',
        bottom: '0px', 
        right: '20px', 
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        backgroundColor: '#82b440',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: '0.85rem',
        fontWeight: '600',
        boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
        zIndex: 10,
        textTransform: 'uppercase',
        border: '3px solid white',
    },
    badgeYears: {
        fontSize: '2.5rem', 
        fontWeight: 'bold',
        lineHeight: 1,
    },

    // Stats Bar Section
    statsBarSection: {
        padding: '3rem 0',
        borderTop: '1px solid #eee',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
    },
    statItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px 0',
    },
    statNumberText: {
        fontSize: '2rem',
        fontWeight: '800',
        color: '#1a1a1a',
        margin: '5px 0',
    },
    statDescription: {
        fontSize: '0.9rem',
        color: '#555',
    },
    // Tripadvisor Rating
    tripadvisorRating: {
        marginTop: '30px',
        paddingTop: '20px',
        borderTop: '1px solid #f0f0f0',
    },
    ratingText: {
        fontSize: '1rem',
        fontWeight: '500',
        color: '#1a1a1a',
        marginBottom: '10px',
    },
    star: {
        color: '#ffc107',
        fontSize: '1.2rem',
        margin: '0 1px',
    },
    tripadvisorLogo: {
        fontSize: '1rem',
        fontWeight: 'bold',
        color: '#00b769',
        marginLeft: '10px',
    },

    // NEW SECTION: Why TripRex Is Best & Tour Packages
    whyBestSection: {
        padding: '7rem 0',
        backgroundColor: '#fff',
    },
    whyBestHeader: {
        textAlign: 'center',
        marginBottom: '4rem',
    },
    whyBestSubtitle: {
        color: '#82b440',
        fontSize: '1.1rem',
        fontWeight: '600',
        marginBottom: '10px',
        display: 'inline-block',
        position: 'relative',
        textTransform: 'uppercase',
    },
    whyBestTitle: {
        fontSize: '3rem',
        fontWeight: '900',
        color: '#1a1a1a',
        lineHeight: '1.2',
    },
    // New Feature Grid (2x3) Cards
    featureGridCard: {
        padding: '20px',
        borderRadius: '12px',
        backgroundColor: '#f8f8f8',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        transition: 'transform 0.3s, box-shadow 0.3s',
    },
    featureGridIconContainer: {
        width: '50px',
        height: '50px',
        borderRadius: '10px',
        backgroundColor: 'rgba(130, 180, 64, 0.1)',
        border: '1px solid rgba(130, 180, 64, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '15px',
    },
    featureGridCardTitle: {
        fontSize: '1.1rem',
        fontWeight: '700',
        color: '#1a1a1a',
        marginBottom: '5px',
    },
    featureGridCardText: {
        fontSize: '0.9rem',
        color: '#666',
        lineHeight: '1.6',
    },

    // Tour Package Cards Section
    tourCardContainer: {
        marginTop: '5rem',
    },
    // Discount Card (Left)
    discountCard: {
        backgroundImage: `url('https://placehold.co/800x600/5b94da/ffffff?text=Discounted+Vacation')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '15px',
        color: 'white',
        padding: '30px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '300px',
        position: 'relative',
        overflow: 'hidden',
    },
    discountText: {
        fontSize: '2.5rem',
        fontWeight: '900',
        lineHeight: '1.1',
        textShadow: '0 2px 5px rgba(0,0,0,0.5)',
    },
    discountSubtitle: {
        fontSize: '1.2rem',
        fontWeight: '600',
        marginBottom: '10px',
        textShadow: '0 1px 3px rgba(0,0,0,0.5)',
    },
    discountBtn: {
        backgroundColor: 'white',
        borderColor: 'white',
        color: '#5b94da',
        fontWeight: '600',
        padding: '10px 20px',
        borderRadius: '8px',
        width: 'fit-content',
        transition: 'background-color 0.3s',
    },

    // Regular Tour Card (Right)
    tourPackageCard: {
        border: '1px solid #eee',
        borderRadius: '15px',
        padding: '0',
        boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
        height: '100%',
    },
    tourPackageImage: {
        width: '100%',
        height: '180px',
        objectFit: 'cover',
        borderTopLeftRadius: '15px',
        borderTopRightRadius: '15px',
    },
    tourPackageBody: {
        padding: '20px',
    },
    tourPackageRating: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px',
        color: '#666',
    },
    tourPackageRatingText: {
        fontSize: '0.9rem',
        marginLeft: '5px',
    },
    tourPackageTitle: {
        fontSize: '1.2rem',
        fontWeight: '700',
        color: '#1a1a1a',
        marginBottom: '15px',
        lineHeight: '1.3',
    },
    tourPackageDetails: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '0.9rem',
        color: '#555',
        marginBottom: '15px',
        flexWrap: 'wrap',
    },
    detailItem: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '15px',
        whiteSpace: 'nowrap',
    },
    detailIcon: {
        marginRight: '5px',
        color: '#82b440',
    },
    tourPackagePrice: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: '1px solid #eee',
        paddingTop: '15px',
        marginTop: '15px',
    },
    priceText: {
        fontSize: '1.5rem',
        fontWeight: '800',
        color: '#82b440',
    },
    oldPriceText: {
        fontSize: '1rem',
        fontWeight: '400',
        color: '#999',
        textDecoration: 'line-through',
        marginLeft: '10px',
    },
    viewAllBtn: {
        backgroundColor: '#82b440',
        borderColor: '#82b440',
        color: 'white',
        padding: '8px 15px',
        borderRadius: '6px',
        fontWeight: '600',
        fontSize: '0.9rem',
        display: 'flex',
        alignItems: 'center',
        transition: 'background-color 0.3s ease',
    },

    // NEW: Our Particular Activities Section Styles (Exact from Image)
    activitiesSection: {
        padding: '5rem 0',
        backgroundColor: '#fff',
    },
    activitiesHeader: {
        textAlign: 'center',
        marginBottom: '3rem',
    },
    activitiesMainTitle: {
        fontSize: '2.5rem',
        fontWeight: '700',
        color: '#1a1a1a',
        marginBottom: '2rem',
    },
    activitiesList: {
        paddingRight: '2rem',
    },
    activityListItem: {
        display: 'flex',
        alignItems: 'flex-start',
        padding: '1.2rem 0',
        borderBottom: '1px solid #f0f0f0',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
    },
    activityListTitle: {
        fontSize: '1.3rem',
        fontWeight: '700',
        color: '#333',
        transition: 'color 0.3s ease',
        lineHeight: '1.4',
    },
    activityDetailCard: {
        border: 'none',
        borderRadius: '15px',
        boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        height: '100%',
        backgroundColor: 'white',
    },
    activityDetailBody: {
        padding: '2.5rem',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
    activitySubtitle: {
        fontSize: '1.8rem',
        fontWeight: '700',
        color: '#1a1a1a',
        marginBottom: '1.5rem',
        lineHeight: '1.3',
    },
    activityDetailDescription: {
        color: '#555',
        lineHeight: '1.7',
        marginBottom: '2rem',
        fontSize: '1.1rem',
    },
    featuresList: {
        marginBottom: '2rem',
    },
    featureItem: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '0.8rem',
        padding: '0.3rem 0',
    },
    featureBullet: {
        color: '#82b440',
        fontWeight: 'bold',
        marginRight: '0.8rem',
        fontSize: '1.2rem',
    },
    featureText: {
        color: '#333',
        fontSize: '1rem',
        fontWeight: '500',
    },
    bottomDivider: {
        border: 'none',
        borderTop: '2px solid #e0e0e0',
        margin: '2rem 0 1.5rem 0',
    },
    availabilitySection: {
        marginTop: 'auto',
    },
    availabilityContent: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    availabilityText: {
        color: '#82b440',
        fontWeight: '700',
        fontSize: '1.2rem',
        cursor: 'pointer',
        transition: 'color 0.3s ease',
        textDecoration: 'none',
    },
    watchCultureSection: {
        textAlign: 'right',
    },
    watchCultureTitle: {
        fontSize: '1.1rem',
        fontWeight: '600',
        color: '#666',
        margin: 0,
        fontStyle: 'italic',
    },
};

// --- New Component for Why TripRex Is Best Section ---
const WhyTripRexIsBestSection = () => {
    const features = [
        { icon: <GlobeIcon />, title: 'Worldwide Coverage', text: 'Curabitur commodo semper sagittis. Ut ullamcorper sagittis.' },
        { icon: <TagIcon />, title: 'Competitive Pricing', text: 'Bindibus curabiture morbi mag praferipque for fisna.' },
        { icon: <CalendarIcon />, title: 'Fast Booking', text: 'Fermentum eltura quis maximum Etiam ornare posuere convallis.' },
        { icon: <CompassIcon />, title: 'Guided Tours', text: 'Pellentesque venenatis egeebosi diam Proin velgritrat elit porttitor metus convallis.' },
        { icon: <SupportIcon />, title: 'Best Support 24/7', text: 'Sed venenatis mauris naci nulla euismod, accums varius lectus vivna sinces.' },
        { icon: <UnlockIcon />, title: 'Ultimate Flexibility', text: 'Duis leo sapien, lacinia aterment efficitur enim suscipit quis nulla sed auctor eu' },
    ];

    return (
        <section style={styles.whyBestSection}>
            <Container>
                {/* Section Header */}
                <div style={styles.whyBestHeader}>
                    <p style={styles.whyBestSubtitle}>— Who We Are —</p>
                    <h2 style={styles.whyBestTitle}>Why TripRex Is Best</h2>
                </div>

                {/* 2x3 Feature Grid */}
                <Row className="g-4">
                    {features.map((feature, index) => (
                        <Col lg={4} md={6} key={index}>
                            <div style={styles.featureGridCard} className="feature-grid-card-hover">
                                <div style={styles.featureGridIconContainer}>
                                    {React.cloneElement(feature.icon, { strokeWidth: 1.5 })}
                                </div>
                                <h3 style={styles.featureGridCardTitle}>{feature.title}</h3>
                                <p style={styles.featureGridCardText}>{feature.text}</p>
                            </div>
                        </Col>
                    ))}
                </Row>

                {/* Tour Packages Section (Two Cards) */}
                <Row className="g-4" style={styles.tourCardContainer}>
                    {/* 1. Discount Card (Left - 50% width on desktop) */}
                    <Col lg={6}>
                        <div style={styles.discountCard}>
                            <CheckCircleIcon />
                            <div>
                                <h2 style={styles.discountSubtitle}>Savings worldwide 20% Of</h2>
                                <h3 style={styles.discountText}>Discover Great Deal</h3>
                                <Link to="/view-this-trip">
                                    <Button style={styles.discountBtn} className="discount-btn-hover">
                                        View This Trip
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </Col>

                    {/* 2. Standard Tour Package Card (Right - 50% width on desktop) */}
                    <Col lg={6}>
                        <Card style={styles.tourPackageCard}>
                            <Card.Img 
                                variant="top" 
                                src="https://placehold.co/800x600/6a9736/white?text=Tropical+Exploration" 
                                style={styles.tourPackageImage} 
                                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/500x180/82b440/white?text=Scenic+Tour"; }}
                            />
                            <div style={styles.tourPackageBody}>
                                <div style={styles.tourPackageRating}>
                                    <RatingStarIcon />
                                    <RatingStarIcon />
                                    <RatingStarIcon />
                                    <RatingStarIcon />
                                    <RatingStarIcon />
                                    <span style={styles.tourPackageRatingText}>(00)</span>
                                </div>
                                <Card.Title style={styles.tourPackageTitle}>
                                    Discover Serenity, Exploration, And Enlightenment.
                                </Card.Title>
                                
                                <div style={styles.tourPackageDetails}>
                                    <span style={styles.detailItem}><span style={styles.detailIcon}><ClockIcon /></span>1 Week</span>
                                    <span style={styles.detailItem}><span style={styles.detailIcon}><MapPinIcon /></span>4 Location</span>
                                    <span style={styles.detailItem}><span style={styles.detailIcon}><GlobeIcon /></span>1 Countries</span>
                                </div>

                                <div style={styles.tourPackagePrice}>
                                    <div>
                                        <span style={styles.priceText}>$340</span>
                                        <span style={styles.oldPriceText}>$450</span>
                                    </div>
                                    <Link to="/view-all-packages">
                                        <Button style={styles.viewAllBtn} className="view-all-btn-hover">
                                            View All Package
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '8px'}}><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

// --- Our Particular Activities Section (Exact from Image) ---
const OurActivitiesSection = () => {
    // Add hover effects
    React.useEffect(() => {
        const styleSheet = document.styleSheets[0];
        if (styleSheet) {
            const activityCardHoverRule = `.activity-card-hover:hover { transform: translateY(-5px); box-shadow: 0 10px 25px rgba(0,0,0,0.15); }`;
            const availabilityHoverRule = `.availability-text-hover:hover { color: #6a9736 !important; }`;
            
            try {
                if (!Array.from(styleSheet.cssRules).some(rule => rule.cssText.includes('.activity-card-hover:hover'))) {
                    styleSheet.insertRule(activityCardHoverRule, styleSheet.cssRules.length);
                }
                if (!Array.from(styleSheet.cssRules).some(rule => rule.cssText.includes('.availability-text-hover:hover'))) {
                    styleSheet.insertRule(availabilityHoverRule, styleSheet.cssRules.length);
                }
            } catch (e) {
                console.error("Could not insert CSS rules:", e);
            }
        }
    }, []);

    return (
        <section style={styles.activitiesSection}>
            <Container>
                {/* Section Header - Exactly as in image */}
                <div style={styles.activitiesHeader}>
                    <h2 style={styles.activitiesMainTitle}>Our Particular Activities</h2>
                </div>

                {/* Activities List - Left Side */}
                <Row>
                    <Col lg={4}>
                        <div style={styles.activitiesList}>
                            <div style={styles.activityListItem} className="activity-list-item">
                                <span style={styles.activityListTitle}>Zip Lining</span>
                            </div>
                            <div style={styles.activityListItem} className="activity-list-item">
                                <span style={styles.activityListTitle}>Bungee Jumping</span>
                            </div>
                            <div style={styles.activityListItem} className="activity-list-item">
                                <span style={styles.activityListTitle}>Rafting</span>
                            </div>
                            <div style={styles.activityListItem} className="activity-list-item">
                                <span style={styles.activityListTitle}>Paragliding</span>
                            </div>
                            <div style={styles.activityListItem} className="activity-list-item">
                                <span style={styles.activityListTitle}>Ski Touring</span>
                            </div>
                        </div>
                    </Col>

                    {/* Activity Details - Right Side */}
                    <Col lg={8}>
                        <Card style={styles.activityDetailCard} className="activity-card-hover">
                            <Card.Body style={styles.activityDetailBody}>
                                {/* Activity Subtitle */}
                                <h3 style={styles.activitySubtitle}>
                                    Thrill Above Ground: The Zip Line Adventure
                                </h3>
                                
                                {/* Activity Description */}
                                <Card.Text style={styles.activityDetailDescription}>
                                    Enback on an adrenaline fueled journey, zipping through lush landscapes, feeling the wind rush past, and experiencing nature from breathtaking heights. Unleash your inner adventurer today.
                                </Card.Text>
                                
                                {/* Features List */}
                                <div style={styles.featuresList}>
                                    <div style={styles.featureItem}>
                                        <span style={styles.featureBullet}>●</span>
                                        <span style={styles.featureText}>Trestop Views</span>
                                    </div>
                                    <div style={styles.featureItem}>
                                        <span style={styles.featureBullet}>●</span>
                                        <span style={styles.featureText}>Adrenaline Rush</span>
                                    </div>
                                    <div style={styles.featureItem}>
                                        <span style={styles.featureBullet}>●</span>
                                        <span style={styles.featureText}>Safety Measures</span>
                                    </div>
                                    <div style={styles.featureItem}>
                                        <span style={styles.featureBullet}>●</span>
                                        <span style={styles.featureText}>Nature Immersion</span>
                                    </div>
                                </div>
                                
                                {/* Bottom Section Divider */}
                                <hr style={styles.bottomDivider} />
                                
                                {/* Availability Section */}
                                <div style={styles.availabilitySection}>
                                    <div style={styles.availabilityContent}>
                                        <span 
                                            style={styles.availabilityText} 
                                            className="availability-text-hover"
                                        >
                                            Chuck Abdikbaliay
                                        </span>
                                        <div style={styles.watchCultureSection}>
                                            <h4 style={styles.watchCultureTitle}>Match Culture</h4>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

// --- 4. Main Component ---
const AboutUsPage = () => {
    const features = [
        { icon: <SafetyIcon />, title: 'Safety First Always' },
        { icon: <GuideIcon />, title: 'Trusted Travel Guide' },
        { icon: <ExpertiseIcon />, title: 'Expertise And Experience' },
        { icon: <SavingsIcon />, title: 'Time And Stress Savings' },
    ];

    // Updated statistics to be more realistic
    const stats = [
        { icon: <HappyTravelerIcon />, number: '15K+', text: 'Happy Traveler' },
        { icon: <ToursSuccessIcon />, number: '2K+', text: 'Tours Success' },
        { icon: <PositiveReviewIcon />, number: '99%', text: 'Positives Review' },
        { icon: <TravelGuideStatIcon />, number: '150', text: 'Travel Guide' },
    ];

    return (
        <div className="about-us-page">
            {/* Hero Section */}
            <section style={styles.heroSection}>
                <div style={styles.heroOverlay}></div>
                <div style={styles.heroContent}>
                    <h1 style={styles.heroTitle}>About</h1>
                    <p style={styles.breadcrumb}>
                        <Link to="/" style={{...styles.resetLink({color: 'white'}), fontWeight: 'bold'}}>Home</Link> → About
                    </p>
                </div>
            </section>

            {/* Our Story & Features Section */}
            <section style={styles.storySection}>
                <Container>
                    <Row className="align-items-center">
                        {/* Story Content & Features Column (Left) */}
                        <Col lg={6} className="mb-5 mb-lg-0">
                            <p style={styles.sectionSubtitle}>About Us</p>
                            <h2 style={styles.sectionTitle}>We provide the best tour facilities.</h2>
                            <p style={styles.storyText}>
                                Etiam ac tortor id purus commodo vulputate. Vestibulum porttitor erat felis and sed vehicula tortor malesuada gravida. Mauris volutpat enim quis vulputate congue. Suspendisse ullamcorper.
                            </p>

                            {/* Feature Grid (2x2) */}
                            <Row>
                                {/* The p-2 here creates the required small gutter between the feature cards */}
                                {features.map((feature, index) => (
                                    <Col md={6} xs={12} key={index} className="p-2">
                                        <div style={styles.featureCard} className="feature-card-hover">
                                            <FeatureIcon>{feature.icon}</FeatureIcon>
                                            <span style={styles.featureText}>{feature.title}</span>
                                        </div>
                                    </Col>
                                ))}
                            </Row>

                            {/* Buttons */}
                            <div className="mt-4 d-flex align-items-center">
                                <Link to="/find-out-more">
                                    <Button style={styles.findOutBtn} className="find-out-btn">
                                        Find Out More
                                    </Button>
                                </Link>
                                <Link to="/watch-tour">
                                    <Button style={styles.watchTourBtn} variant="link">
                                        <span style={styles.playIconRing}>
                                            <PlayIcon />
                                        </span>
                                        Watch Tour
                                    </Button>
                                </Link>
                            </div>
                        </Col>
                        
                        {/* Story Image Column (Right) */}
                        <Col lg={6}>
                            <div style={styles.imageContainer}>
                                <img
                                    src="https://placehold.co/800x600/6a9736/white?text=Couple+Planning+Trip" 
                                    alt="Travelfest Team"
                                    style={styles.storyImage}
                                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/500x500/82b440/white?text=Couple+with+Map"; }}
                                />
                                <div style={styles.experienceBadge}>
                                    <span style={styles.badgeYears}>05</span>
                                    <span>Years of experience</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Stats Bar Section */}
            <section style={styles.statsBarSection}>
                <Container>
                    <Row>
                        {stats.map((stat, index) => (
                            // Add a vertical divider style to columns after the first one
                            <Col md={3} sm={6} xs={6} key={index} style={index > 0 ? { borderLeft: '1px solid #eee' } : {}}>
                                <div style={styles.statItem}>
                                    {stat.icon}
                                    <div style={styles.statNumberText}>{stat.number}</div>
                                    <div style={styles.statDescription}>{stat.text}</div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                    <div style={styles.tripadvisorRating}>
                        <p style={styles.ratingText}>
                            Excellent! 
                            <span style={styles.star}>★</span><span style={styles.star}>★</span><span style={styles.star}>★</span><span style={styles.star}>★</span><span style={styles.star}>★</span>
                            5.0 rating out of 5.0 based on 245354 reviews
                            <span style={styles.tripadvisorLogo}>Tripadvisor</span>
                        </p>
                    </div>
                </Container>
            </section>
            
            {/* NEW SECTION: Why TripRex Is Best & Tour Packages */}
            <WhyTripRexIsBestSection />

            {/* NEW SECTION: Our Particular Activities (Exact UI from Image) */}
            <OurActivitiesSection />

        </div>
    );
};

export default AboutUsPage;

// --- CSS INJECTION FOR HOVER EFFECTS ---
const styleSheet = document.styleSheets[0];
if (styleSheet) {
    // Find Out More Button Hover
    const findOutRule = `.find-out-btn:hover {background-color: #6a9736 !important; border-color: #6a9736 !important;}`;
    if (!Array.from(styleSheet.cssRules).some(rule => rule.cssText.includes(findOutRule.split('{')[0]))) {
        try {
            styleSheet.insertRule(findOutRule, styleSheet.cssRules.length);
        } catch (e) {
            console.error("Could not insert CSS rule for find-out-btn hover:", e);
        }
    }
    
    // Feature Card Hover (Original 2x2 grid)
    const featureCardRule = `.feature-card-hover:hover { transform: translateY(-3px); box-shadow: 0 4px 15px rgba(0,0,0,0.08); }`;
    if (!Array.from(styleSheet.cssRules).some(rule => rule.cssText.includes(featureCardRule.split('{')[0]))) {
        try {
            styleSheet.insertRule(featureCardRule, styleSheet.cssRules.length);
        } catch (e) {
            console.error("Could not insert CSS rule for feature-card-hover:", e);
        }
    }

    // Feature Grid Card Hover (New 2x3 grid)
    const featureGridCardRule = `.feature-grid-card-hover:hover { transform: translateY(-5px); box-shadow: 0 8px 20px rgba(0,0,0,0.1); }`;
    if (!Array.from(styleSheet.cssRules).some(rule => rule.cssText.includes(featureGridCardRule.split('{')[0]))) {
        try {
            styleSheet.insertRule(featureGridCardRule, styleSheet.cssRules.length);
        } catch (e) {
            console.error("Could not insert CSS rule for feature-grid-card-hover:", e);
        }
    }

    // Discount Button Hover
    const discountBtnRule = `.discount-btn-hover:hover { background-color: #eee !important; color: #5b94da !important; }`;
    if (!Array.from(styleSheet.cssRules).some(rule => rule.cssText.includes(discountBtnRule.split('{')[0]))) {
        try {
            styleSheet.insertRule(discountBtnRule, styleSheet.cssRules.length);
        } catch (e) {
            console.error("Could not insert CSS rule for discount-btn-hover:", e);
        }
    }
    
    // View All Button Hover
    const viewAllBtnRule = `.view-all-btn-hover:hover { background-color: #6a9736 !important; border-color: #6a9736 !important; }`;
    if (!Array.from(styleSheet.cssRules).some(rule => rule.cssText.includes(viewAllBtnRule.split('{')[0]))) {
        try {
            styleSheet.insertRule(viewAllBtnRule, styleSheet.cssRules.length);
        } catch (e) {
            console.error("Could not insert CSS rule for view-all-btn-hover:", e);
        }
    }

    // Activity Card Hover
    const activityCardHoverRule = `.activity-card-hover:hover { transform: translateY(-5px); box-shadow: 0 10px 25px rgba(0,0,0,0.15); }`;
    if (!Array.from(styleSheet.cssRules).some(rule => rule.cssText.includes(activityCardHoverRule.split('{')[0]))) {
        try {
            styleSheet.insertRule(activityCardHoverRule, styleSheet.cssRules.length);
        } catch (e) {
            console.error("Could not insert CSS rule for activity-card-hover:", e);
        }
    }

    // Availability Text Hover
    const availabilityHoverRule = `.availability-text-hover:hover { color: #6a9736 !important; }`;
    if (!Array.from(styleSheet.cssRules).some(rule => rule.cssText.includes(availabilityHoverRule.split('{')[0]))) {
        try {
            styleSheet.insertRule(availabilityHoverRule, styleSheet.cssRules.length);
        } catch (e) {
            console.error("Could not insert CSS rule for availability-text-hover:", e);
        }
    }

    // Activity List Item Hover
    const activityListItemRule = `.activity-list-item:hover { background-color: #f8f9fa; padding-left: 10px; } .activity-list-item:hover .activity-list-title { color: #82b440; }`;
    if (!Array.from(styleSheet.cssRules).some(rule => rule.cssText.includes('.activity-list-item:hover'))) {
        try {
            styleSheet.insertRule(activityListItemRule, styleSheet.cssRules.length);
        } catch (e) {
            console.error("Could not insert CSS rule for activity-list-item:", e);
        }
    }
}