import React from 'react';
import { Container, Row, Col, Card, Button, InputGroup, FormControl } from 'react-bootstrap';
import { FaUser, FaCalendarAlt, FaComments, FaFacebookF, FaTwitter, FaPinterestP, FaShareAlt, FaArrowRight, FaClock, FaCheckCircle } from 'react-icons/fa'; // Added FaCheckCircle for the green tick in blog list
import { MdOutlineTravelExplore } from "react-icons/md"; // For the blog category dot
import { FaPaperPlane } from "react-icons/fa"; // For the newsletter send icon


// --- STYLES FOR LatestTravelBlog ---
const latestTravelBlogStyles = {
  section: {
    padding: '4rem 0',
    backgroundColor: '#fff', // White background for the section
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  subtitle: {
    color: '#82b440', // Greenish color
    fontSize: '0.9rem',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    marginBottom: '0.5rem',
    fontFamily: 'cursive', // To mimic the script font
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '2rem',
  },
  // Main Blog Post Card (Left)
  mainBlogCard: {
    border: 'none',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
    backgroundColor: '#fff',
    position: 'relative',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  mainBlogCardImgWrapper: {
    height: '350px', // Adjust height as needed
    backgroundColor: '#e9ecef', // Placeholder background
    borderRadius: '12px 12px 0 0', // Rounded top corners
    overflow: 'hidden',
    position: 'relative',
  },
  mainBlogCardImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  mainBlogDateBadge: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    backgroundColor: '#82b440', // Green badge
    color: 'white',
    padding: '10px 15px',
    borderRadius: '8px',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    lineHeight: '1.2',
  },
  mainBlogCardBody: {
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  mainBlogMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '1rem',
    fontSize: '0.9rem',
    color: '#6c757d',
  },
  metaItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  },
  mainBlogTitle: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '1.5rem',
  },
  mainBlogViewPost: {
    color: '#82b440',
    fontWeight: '600',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    marginTop: 'auto', // Pushes to the bottom
  },
  mainBlogShareIcons: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    fontSize: '1.1rem',
    color: '#6c757d',
  },
  shareIcon: {
    color: '#6c757d',
    transition: 'color 0.2s ease',
  },
  shareIconHover: {
    color: '#82b440', // Green on hover
  },

  // Smaller Blog Post Cards (Right)
  smallBlogCard: {
    border: 'none',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    backgroundColor: '#fff',
    marginBottom: '1.5rem', // Space between cards
    padding: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  smallBlogDateBadge: {
    backgroundColor: '#e9ecef', // Light gray badge
    color: '#6c757d',
    padding: '8px 12px',
    borderRadius: '8px',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    lineHeight: '1.2',
    flexShrink: 0, // Prevent shrinking
    marginRight: '1.5rem',
  },
  smallBlogContent: {
    flexGrow: 1,
  },
  smallBlogMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '0.5rem',
    fontSize: '0.85rem',
    color: '#6c757d',
  },
  categoryDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#82b440', // Green dot
    display: 'inline-block',
    marginRight: '5px',
  },
  smallBlogTitle: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '0.7rem',
  },
  smallBlogViewPost: {
    color: '#82b440',
    fontWeight: '600',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '0.9rem',
  },
  smallBlogReadTime: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '0.8rem',
    color: '#6c757d',
    position: 'absolute', // Position at bottom right
    bottom: '15px',
    right: '15px',
  },
  // Newsletter Section
  newsletterSection: {
    padding: '4rem 0',
    backgroundColor: '#f8f9fa', // Light gray background
    marginTop: '4rem',
  },
  newsletterWrapper: {
    backgroundColor: 'white',
    borderRadius: '15px',
    boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
    padding: '3rem',
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundImage: `url('https://i.imgur.com/w9Nq7G0.png'), url('https://i.imgur.com/w9Nq7G0.png')`, // Leaves images for newsletter
    backgroundRepeat: 'no-repeat',
    backgroundSize: '150px, 150px', // Adjust size as needed
    backgroundPosition: 'left top, right bottom', // Position top left and bottom right
  },
  newsletterSubtitle: {
    color: '#82b440',
    fontSize: '1rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
  },
  newsletterTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '1.5rem',
  },
  newsletterInputGroup: {
    maxWidth: '450px',
    margin: '0 auto',
    borderRadius: '30px',
    overflow: 'hidden',
    boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
  },
  newsletterFormControl: {
    border: 'none',
    padding: '1.2rem 1.5rem',
    fontSize: '1rem',
    height: 'auto',
    backgroundColor: '#f5f5f5', // Light background for input
  },
  newsletterButton: {
    backgroundColor: '#82b440',
    borderColor: '#82b440',
    color: 'white',
    padding: '1.2rem 1.5rem',
    fontSize: '1.1rem',
    borderTopLeftRadius: '0',
    borderBottomLeftRadius: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.2s ease',
  },
  newsletterButtonHover: {
    backgroundColor: '#6a9736', // Darker green on hover
    borderColor: '#6a9736',
  }
};

// --- DATA FOR LatestTravelBlog ---
const blogPosts = {
  mainPost: {
    id: 1,
    dateDay: '6',
    dateMonth: 'Feb',
    author: 'Shafiqul',
    date: 'Feb 6, 2024',
    comments: '0 Comment',
    title: 'Spiritual Sojourn: Pilgrimage Tours For Soul Seekers',
    image: 'https://images.unsplash.com/photo-1510253687823-cfb950961d36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Example image
  },
  sidePosts: [
    {
      id: 2,
      dateDay: '6',
      dateMonth: 'Feb',
      author: 'Shafiqul',
      category: 'Adventure Safari',
      title: 'Wine Country Escapes: Vineyard Tours For Connoisseurs',
      readTime: '1 Min Read',
    },
    {
      id: 3,
      dateDay: '6',
      dateMonth: 'Feb',
      author: 'Shafiqul',
      category: 'Cruise Voyage',
      title: 'Thrills & Chills: Extreme Sports Tours For Adrenaline Junkies',
      readTime: '1 Min Read',
    },
    {
      id: 4,
      dateDay: '6',
      dateMonth: 'Feb',
      author: 'Shafiqul',
      category: 'Cruise Voyage',
      title: 'Urban Wanderlust: City Walking Tours For Street Savvy',
      readTime: '1 Min Read',
    },
  ],
};


const LatestTravelBlog = () => {
  return (
    <React.Fragment>
      <section style={latestTravelBlogStyles.section}>
        <Container>
          <div style={latestTravelBlogStyles.header}>
            <p style={latestTravelBlogStyles.subtitle}>~ Our Blog ~</p>
            <h2 style={latestTravelBlogStyles.title}>Latest Travel Blog</h2>
          </div>

          <Row className="g-4">
            {/* Main Blog Post (Left Column) */}
            <Col lg={7}>
              <Card style={latestTravelBlogStyles.mainBlogCard}>
                <div style={latestTravelBlogStyles.mainBlogCardImgWrapper}>
                  {blogPosts.mainPost.image && (
                    <Card.Img
                      variant="top"
                      src={blogPosts.mainPost.image}
                      style={latestTravelBlogStyles.mainBlogCardImg}
                    />
                  )}
                  <div style={latestTravelBlogStyles.mainBlogDateBadge}>
                    <span>{blogPosts.mainPost.dateDay}</span><br />
                    <span>{blogPosts.mainPost.dateMonth}</span>
                  </div>
                </div>
                <Card.Body style={latestTravelBlogStyles.mainBlogCardBody}>
                  <div style={latestTravelBlogStyles.mainBlogMeta}>
                    <span style={latestTravelBlogStyles.metaItem}>
                      <FaUser /> By {blogPosts.mainPost.author}
                    </span>
                    <span style={latestTravelBlogStyles.metaItem}>
                      <FaCalendarAlt /> {blogPosts.mainPost.date}
                    </span>
                    <span style={latestTravelBlogStyles.metaItem}>
                      <FaComments /> {blogPosts.mainPost.comments}
                    </span>
                  </div>
                  <Card.Title style={latestTravelBlogStyles.mainBlogTitle}>
                    {blogPosts.mainPost.title}
                  </Card.Title>
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <a href="#" style={latestTravelBlogStyles.mainBlogViewPost}>
                      View Post <FaArrowRight />
                    </a>
                    <div style={latestTravelBlogStyles.mainBlogShareIcons}>
                      <a href="#" style={latestTravelBlogStyles.shareIcon}><FaFacebookF /></a>
                      <a href="#" style={latestTravelBlogStyles.shareIcon}><FaTwitter /></a>
                      <a href="#" style={latestTravelBlogStyles.shareIcon}><FaPinterestP /></a>
                      <a href="#" style={latestTravelBlogStyles.shareIcon}><FaShareAlt /></a>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Smaller Blog Posts (Right Column) */}
            <Col lg={5}>
              {blogPosts.sidePosts.map((post) => (
                <Card key={post.id} style={latestTravelBlogStyles.smallBlogCard}>
                  <div style={latestTravelBlogStyles.smallBlogDateBadge}>
                    <span>{post.dateDay}</span><br />
                    <span>{post.dateMonth}</span>
                  </div>
                  <Card.Body style={latestTravelBlogStyles.smallBlogContent}>
                    <div style={latestTravelBlogStyles.smallBlogMeta}>
                      <span style={latestTravelBlogStyles.metaItem}>
                        <FaUser /> By {post.author}
                      </span>
                      <span style={latestTravelBlogStyles.metaItem}>
                        <span style={latestTravelBlogStyles.categoryDot}></span> {post.category}
                      </span>
                    </div>
                    <Card.Title style={latestTravelBlogStyles.smallBlogTitle}>
                      {post.title}
                    </Card.Title>
                    <a href="#" style={latestTravelBlogStyles.smallBlogViewPost}>
                      View Post <FaArrowRight />
                    </a>
                    <div style={latestTravelBlogStyles.smallBlogReadTime}>
                      <FaClock /> {post.readTime}
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </Col>
          </Row>
        </Container>
      </section>

      {/* Newsletter Section */}
      <section style={latestTravelBlogStyles.newsletterSection}>
        <Container>
          <div style={latestTravelBlogStyles.newsletterWrapper}>
            <p style={latestTravelBlogStyles.newsletterSubtitle}>~ Special Offer ~</p>
            <h2 style={latestTravelBlogStyles.newsletterTitle}>Join The Newsletter</h2>
            <p className="text-muted mb-4">To receive our best monthly deals</p>
            <InputGroup style={latestTravelBlogStyles.newsletterInputGroup}>
              <FormControl
                placeholder="Enter Your Email Address..."
                aria-label="Enter Your Email Address"
                style={latestTravelBlogStyles.newsletterFormControl}
              />
              <Button style={latestTravelBlogStyles.newsletterButton}>
                <FaPaperPlane />
              </Button>
            </InputGroup>
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default LatestTravelBlog;

// --- CSS INJECTION FOR HOVER EFFECTS ---
const latestBlogStyleSheet = document.styleSheets[0];
if (latestBlogStyleSheet) {
  // Main Blog Share Icons Hover
  latestBlogStyleSheet.insertRule(`
    a${[...blogPosts.sidePosts].map(post => `[href="#${post.id}"]`).join(', ')}.smallBlogViewPost:hover,
    a${[...blogPosts.sidePosts].map(post => `[href="#${post.id}"]`).join(', ')}.mainBlogViewPost:hover
     {
      color: #6a9736 !important; /* Darker green on hover */
    }
  `, latestBlogStyleSheet.cssRules.length);


  latestBlogStyleSheet.insertRule(`
    ${Object.keys(latestTravelBlogStyles.shareIcon).map(key => `.${key}:hover`).join(', ')} {
      color: ${latestTravelBlogStyles.shareIconHover.color} !important;
    }
  `, latestBlogStyleSheet.cssRules.length);

  // Newsletter Button Hover
  latestBlogStyleSheet.insertRule(`
    .InputGroup > button:hover {
      background-color: ${latestTravelBlogStyles.newsletterButtonHover.backgroundColor} !important;
      border-color: ${latestTravelBlogStyles.newsletterButtonHover.borderColor} !important;
    }
  `, latestBlogStyleSheet.cssRules.length);

  // Responsive adjustments for newsletter background images
  latestBlogStyleSheet.insertRule(`
    @media (max-width: 768px) {
      ${LatestTravelBlog.name} .newsletterWrapper {
        background-size: 100px, 100px;
        background-position: left top, right bottom;
        padding: 2rem;
      }
    }
  `, latestBlogStyleSheet.cssRules.length);

  latestBlogStyleSheet.insertRule(`
    @media (max-width: 576px) {
      ${LatestTravelBlog.name} .newsletterWrapper {
        background-size: 80px, 80px;
        background-position: left top, right bottom;
        padding: 1.5rem;
      }
      ${LatestTravelBlog.name} .newsletterTitle {
        font-size: 1.5rem;
      }
      ${LatestTravelBlog.name} .newsletterFormControl,
      ${LatestTravelBlog.name} .newsletterButton {
        padding: 0.8rem 1rem;
        font-size: 0.9rem;
      }
    }
  `, latestBlogStyleSheet.cssRules.length);
}