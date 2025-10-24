import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import About1 from '../../links/about1/About1';

import { Link } from "react-router-dom"; 
// --- STYLES FOR THE FOOTER ---
const footerStyles = {
  footerContainer: {
    backgroundColor: '#1a1a1a', // Dark background color
    color: '#ccc', // Light gray text color
    padding: '4rem 0 0', // Padding top, no bottom padding for main sections
    fontFamily: 'Arial, sans-serif',
  },
  // Top section with columns
  topSection: {
    paddingBottom: '3rem',
    borderBottom: '1px solid #333', // Separator line for top and bottom footer
    marginBottom: '1rem',
  },
  logoSection: {
    marginBottom: '1.5rem',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  logoIcon: {
    fontSize: '2rem',
    color: '#82b440', // Green color for the clover icon
    marginRight: '10px',
  },
  logoText: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white', // White text for "Travelfest"
  },
  tagline: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white',
    lineHeight: '1.4',
    marginBottom: '1.5rem',
  },
  bookTourBtn: {
    backgroundColor: '#82b440', // Green button
    borderColor: '#82b440',
    color: 'white',
    padding: '12px 30px',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '1rem',
    transition: 'background-color 0.3s ease',
  },
  // Column Headers
  colHeader: {
    color: 'white',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
  },
  // Quick Links
  quickLinksList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  quickLinkItem: {
    marginBottom: '10px',
  },
  quickLink: {
    color: '#ccc',
    textDecoration: 'none',
    fontSize: '0.95rem',
    transition: 'color 0.2s ease',
  },
  // More Inquiry & Address
  contactItem: {
    display: 'flex',
    alignItems: 'flex-start', // Align icon and text at the top
    marginBottom: '15px',
    fontSize: '0.95rem',
  },
  contactIcon: {
    color: '#82b440', // Green icons
    fontSize: '1.1rem',
    marginRight: '10px',
    marginTop: '3px', // Adjust icon vertical alignment
  },
  contactText: {
    color: '#ccc',
    lineHeight: '1.5',
  },
  // We Are Here
  aboutText: {
    fontSize: '0.95rem',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
  },
  paymentPartnerHeader: {
    color: 'white',
    fontSize: '1rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  paymentLogos: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
  },
  paymentLogo: {
    height: '25px', // Uniform height for payment logos
    filter: 'grayscale(100%) brightness(200%)', // Make logos grayscale and brighter to fit dark theme
  },
  // Bottom Bar (Copyright and Socials)
  bottomBar: {
    backgroundColor: '#0f0f0f', // Slightly darker background for bottom bar
    padding: '1.5rem 0',
    fontSize: '0.9rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap', // Allow wrapping on small screens
  },
  copyrightText: {
    color: '#999',
    marginBottom: '0', // Remove default margin
  },
  brandText: {
    color: '#82b440', // Green for "BlackRise"
    fontWeight: 'bold',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
  },
  bottomLinks: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    marginLeft: 'auto', // Push to right on larger screens
  },
  bottomLink: {
    color: '#999',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
  },
  socialIcons: {
    display: 'flex',
    gap: '15px',
    marginTop: '1rem', // Space from text on small screens
    justifyContent: 'center', // Center on small screens
  },
  socialIconLink: {
    color: '#999',
    fontSize: '1.1rem',
    transition: 'color 0.2s ease',
  },
  socialIconHover: {
    color: '#82b440', // Green on hover
  },
};

const Footer = () => {
  return (
    <footer style={footerStyles.footerContainer}>
      <Container style={footerStyles.topSection}>
        <Row>
          {/* Column 1: Logo & Book Tour */}
          <Col lg={3} md={6} sm={12} style={footerStyles.logoSection}>
            <div style={footerStyles.logo}>
              {/* Using a generic icon for the clover, replace with actual SVG/Image if available */}
              <span style={footerStyles.logoIcon}>🍀</span> {/* Placeholder for clover */}
              <span style={footerStyles.logoText}>Travelfest</span>
            </div>
            <p style={footerStyles.tagline}>Want To Take Tour Packages?</p>
            <Button style={footerStyles.bookTourBtn} className="footer-book-tour-btn">
              Book A Tour
            </Button>
          </Col>

          {/* Column 2: Quick Links */}
          <Col lg={2} md={6} sm={12}>
            <h5 style={footerStyles.colHeader}>Quick Link</h5>
            <ul style={footerStyles.quickLinksList}>
              <li style={footerStyles.quickLinkItem}>
                  <Link 
                  to="/about1" 
                  style={footerStyles.quickLink} 
                  className="footer-link"
                >About us 
                </Link>
              </li>
              <li style={footerStyles.quickLinkItem}>
                <a href="#" style={footerStyles.quickLink} className="footer-link">Destinations</a>
              </li>
              <li style={footerStyles.quickLinkItem}>
                <a href="#" style={footerStyles.quickLink} className="footer-link">Tour Package</a>
              </li>
              <li style={footerStyles.quickLinkItem}>
                <a href="#" style={footerStyles.quickLink} className="footer-link">Article</a>
              </li>
              <li style={footerStyles.quickLinkItem}>
                <a href="#" style={footerStyles.quickLink} className="footer-link">Contact Us</a>
              </li>
            </ul>
          </Col>

          {/* Column 3: More Inquiry */}
          <Col lg={3} md={6} sm={12}>
            <h5 style={footerStyles.colHeader}>More Inquiry</h5>
            <div style={footerStyles.contactItem}>
              <FaPhoneAlt style={footerStyles.contactIcon} />
              <span style={footerStyles.contactText}>+999-858 624 984</span>
            </div>
            <div style={footerStyles.contactItem}>
              <FaEnvelope style={footerStyles.contactIcon} />
              <span style={footerStyles.contactText}>info@example.com</span>
            </div>
            <div style={footerStyles.contactItem}>
              <FaMapMarkerAlt style={footerStyles.contactIcon} />
              <span style={footerStyles.contactText}>
                House 168/170, Avenue 01, Mirpur<br />
                DOHS, Dhaka Bangladesh
              </span>
            </div>
          </Col>

          {/* Column 4: We Are Here & Payment Partner */}
          <Col lg={4} md={6} sm={12}>
            <h5 style={footerStyles.colHeader}>We Are Here</h5>
            <p style={footerStyles.aboutText}>
              Quisque purus augue, facilisis at, neque idort accumsan fringilla massa. Vivamusol id nibhoni condimentum.
            </p>
            <p style={footerStyles.paymentPartnerHeader}>Payment Partner</p>
            <div style={footerStyles.paymentLogos}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Visa_2014_logo_detail.svg/1280px-Visa_2014_logo_detail.svg.png" alt="Visa" style={footerStyles.paymentLogo} />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" style={footerStyles.paymentLogo} />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" style={footerStyles.paymentLogo} />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/American_Express_logo.svg/1200px-American_Express_logo.svg.png" alt="Amex" style={footerStyles.paymentLogo} />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Stripe_logo%2C_revised_2016.svg/1280px-Stripe_logo%2C_revised_2016.svg.png" alt="Stripe" style={footerStyles.paymentLogo} />
            </div>
          </Col>
        </Row>
      </Container>

      {/* Bottom Bar */}
      <Container fluid style={footerStyles.bottomBar}>
        <Container className="d-flex justify-content-between align-items-center flex-wrap">
          <Row className="w-100 align-items-center justify-content-between">
            <Col md={6} className="d-flex align-items-center flex-wrap justify-content-center justify-content-md-start">
              <div style={footerStyles.socialIcons} className="mb-2 mb-md-0">
                <a href="#" style={footerStyles.socialIconLink} className="footer-social-icon"><FaFacebookF /></a>
                <a href="#" style={footerStyles.socialIconLink} className="footer-social-icon"><FaTwitter /></a>
                <a href="#" style={footerStyles.socialIconLink} className="footer-social-icon"><FaLinkedinIn /></a>
                <a href="#" style={footerStyles.socialIconLink} className="footer-social-icon"><FaInstagram /></a>
              </div>
              <p style={{ ...footerStyles.copyrightText, marginLeft: '1rem', marginBottom: '0' }} className="text-center text-md-start">
                &copy;Copyright 2024 BlackRise Theme | Design By <a href="#" style={footerStyles.brandText} className="footer-brand-link">@Shawn85</a>
              </p>
            </Col>
            <Col md={6} className="d-flex justify-content-center justify-content-md-end mt-3 mt-md-0">
              <div style={footerStyles.bottomLinks}>
                <a href="#" style={footerStyles.bottomLink} className="footer-link">BlackRise</a>
                <a href="#" style={footerStyles.bottomLink} className="footer-link">Privacy Policy</a>
                <a href="#" style={footerStyles.bottomLink} className="footer-link">Terms & Condition</a>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </footer>
  );
};

export default Footer;

// --- CSS INJECTION FOR HOVER EFFECTS ---
const footerStyleSheet = document.styleSheets[0];
if (footerStyleSheet) {
  // Book A Tour Button Hover
  footerStyleSheet.insertRule(`
    .footer-book-tour-btn:hover {
      background-color: #6a9736 !important;
      border-color: #6a9736 !important;
    }
  `, footerStyleSheet.cssRules.length);

  // Quick Links Hover
  footerStyleSheet.insertRule(`
    .footer-link:hover {
      color: white !important;
    }
  `, footerStyleSheet.cssRules.length);

  // Social Icons Hover
  footerStyleSheet.insertRule(`
    .footer-social-icon:hover {
      color: ${footerStyles.socialIconHover.color} !important;
    }
  `, footerStyleSheet.cssRules.length);

  // Brand Link Hover
  footerStyleSheet.insertRule(`
    .footer-brand-link:hover {
      color: white !important;
    }
  `, footerStyleSheet.cssRules.length);

  // Responsive adjustments for bottom bar
  footerStyleSheet.insertRule(`
    @media (max-width: 767px) {
      .footer-bottom-bar-container {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
      .footer-bottom-bar-container > div {
        margin-bottom: 1rem;
      }
      .footer-bottom-bar-container > div:last-child {
        margin-bottom: 0;
      }
      .footer-social-icons {
        margin-bottom: 1rem;
      }
      .footer-bottom-links {
        justify-content: center;
      }
    }
  `, footerStyleSheet.cssRules.length);
}