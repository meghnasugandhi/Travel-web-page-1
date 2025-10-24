import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';

const FinestSafetySystems = () => {
  return (
    <section style={styles.section}>
      <Container>
        <Row>
          {/* Left Column - Safety Features */}
          <Col md={7} style={styles.leftColumn}>
            <p style={styles.subtitle}>~ Our Facility ~</p>
            <h2 style={styles.title}>Finest Safety Systems</h2>
            <p style={styles.description}>
              Curabitur convalls enim at orci uliancorper sagitis. Motbi porand gon nullalecu scelerisque in aliquam vitae, aliquam ut lectus. Nam utte mink Phasellus magna, efficiur finibus dictum auctor, volutpat gonet torrend accumsan prus!Don lectus nunc non dapibus volutpat.
            </p>
            
            <Row style={styles.featuresContainer}>
              <Col md={6} style={styles.featureColumn}>
                <div style={styles.featureItem}>
                  <div style={styles.featureIcon}>•</div>
                  <span style={styles.featureText}>Travel Alerts and Registration</span>
                </div>
                <div style={styles.featureItem}>
                  <div style={styles.featureIcon}>•</div>
                  <span style={styles.featureText}>Health and Medical Security</span>
                </div>
                <div style={styles.featureItem}>
                  <div style={styles.featureIcon}>•</div>
                  <span style={styles.featureText}>Travel Documentation</span>
                </div>
              </Col>
              
              <Col md={6} style={styles.featureColumn}>
                <div style={styles.featureItem}>
                  <div style={styles.featureIcon}>•</div>
                  <span style={styles.featureText}>Money and Payment</span>
                </div>
                <div style={styles.featureItem}>
                  <div style={styles.featureIcon}>•</div>
                  <span style={styles.featureText}>Transportation Security</span>
                </div>
                <div style={styles.featureItem}>
                  <div style={styles.featureIcon}>•</div>
                  <span style={styles.featureText}>Local Knowledge Guide</span>
                </div>
              </Col>
            </Row>
          </Col>

          {/* Right Column - Rating Information */}
          <Col md={5} style={styles.rightColumn}>
            <Card style={styles.ratingCard}>
              <Card.Body style={styles.cardBody}>
                <div style={styles.ratingSection}>
                  <h3 style={styles.ratingTitle}>Overall Rating</h3>
                  <div style={styles.ratingValueContainer}>
                    <span style={styles.ratingNumber}>4.5</span>
                    <span style={styles.ratingText}>out of 5</span>
                  </div>
                  <p style={styles.ratingSubtext}>Student size: 1000 (Temperature) minutes</p>
                </div>
                
                <hr style={styles.divider} />
                
                <div style={styles.customerExperience}>
                  <h3 style={styles.customerTitle}>Customer Experience</h3>
                  <p style={styles.customerSubtitle}>
                    Contact us with the new brand following your latest solution:
                  </p>
                  
                  <div style={styles.ratingGrid}>
                    <div style={styles.ratingRow}>
                      <div style={styles.ratingCell}></div>
                      <div style={styles.ratingCell}>1.5</div>
                      <div style={styles.ratingCell}>2.5</div>
                      <div style={styles.ratingCell}>3.5</div>
                    </div>
                    <div style={styles.ratingRow}>
                      <div style={styles.ratingCell}></div>
                      <div style={styles.ratingCell}>4.5</div>
                      <div style={styles.ratingCell}>4.5</div>
                      <div style={styles.ratingCell}>5.5</div>
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

// All CSS styles in JavaScript object format
const styles = {
  section: {
    padding: '60px 0',
    backgroundColor: '#fff',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
  },
  leftColumn: {
    paddingRight: '40px'
  },
  subtitle: {
    color: '#28a745',
    fontSize: '14px',
    fontWeight: '600',
    letterSpacing: '1px',
    marginBottom: '10px',
    textAlign: 'center'
  },
  title: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: '20px',
    textAlign: 'center'
  },
  description: {
    color: '#7f8c8d',
    lineHeight: '1.6',
    marginBottom: '30px',
    fontSize: '15px',
    textAlign: 'justify'
  },
  featuresContainer: {
    margin: '0 -10px'
  },
  featureColumn: {
    padding: '0 10px'
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
    padding: '8px 0'
  },
  featureIcon: {
    color: '#28a745',
    fontSize: '20px',
    marginRight: '12px',
    fontWeight: 'bold'
  },
  featureText: {
    color: '#2c3e50',
    fontSize: '15px',
    fontWeight: '600'
  },
  rightColumn: {
    paddingLeft: '20px'
  },
  ratingCard: {
    border: 'none',
    borderRadius: '12px',
    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
    overflow: 'hidden'
  },
  cardBody: {
    padding: '30px'
  },
  ratingSection: {
    marginBottom: '20px'
  },
  ratingTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: '15px'
  },
  ratingValueContainer: {
    display: 'flex',
    alignItems: 'baseline',
    marginBottom: '8px'
  },
  ratingNumber: {
    fontSize: '36px',
    fontWeight: '800',
    color: '#28a745',
    marginRight: '10px'
  },
  ratingText: {
    fontSize: '16px',
    color: '#7f8c8d',
    fontWeight: '600'
  },
  ratingSubtext: {
    fontSize: '14px',
    color: '#95a5a6',
    margin: '0'
  },
  divider: {
    borderTop: '1px solid #ecf0f1',
    margin: '25px 0'
  },
  customerExperience: {
    marginTop: '20px'
  },
  customerTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: '10px'
  },
  customerSubtitle: {
    fontSize: '14px',
    color: '#7f8c8d',
    marginBottom: '20px',
    lineHeight: '1.5'
  },
  ratingGrid: {
    display: 'table',
    width: '100%',
    borderCollapse: 'collapse'
  },
  ratingRow: {
    display: 'table-row'
  },
  ratingCell: {
    display: 'table-cell',
    padding: '10px',
    textAlign: 'center',
    border: '1px solid #e0e0e0',
    fontWeight: '600',
    fontSize: '15px',
    color: '#2c3e50',
    backgroundColor: '#fff'
  }
};

export default FinestSafetySystems;