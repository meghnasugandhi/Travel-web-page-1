import React from 'react';
import { Container, Row, Col, Card, Button, InputGroup, Form } from 'react-bootstrap';
import { FaArrowRight, FaSearch } from 'react-icons/fa';

// Assets: Using existing files as placeholder images
import blogImage1 from '../../../assets/images/ab1.png';
import blogImage2 from '../../../assets/images/ab2.png';
import blogImage3 from '../../../assets/images/ab3.png';
import newsletterBg from '../../../assets/images/tour.png'; 

// Footer component (using the confirmed path)
import Footer from '../../Main/Footer/Footer'; 


const Villas = () => {
    
    // Placeholder data for the main blog posts/Villas articles
    const blogPosts = [
        { 
            id: 1, 
            date: '06 February', 
            title: 'Spiritual Sojourn: Pilgrimage Tours For Soul Seekers',
            views: 287,
            readTime: '1 Min Read',
            comments: 0,
            excerpt: 'NSuspendisse bibendum efficitur orci, a pretium erat mattis nec. Vestibulum ante urna ipsumi primisot inisetahtajeni faucibus orci luctus erenjot ultrices posuere cubilia andit.',
            image: blogImage1 
        },
        { 
            id: 2, 
            date: '06 February', 
            title: 'Wine Country Escapes: Vineyard Tours For Connoisseurs',
            views: 260,
            readTime: '1 Min Read',
            comments: 0,
            excerpt: 'NSuspendisse bibendum efficitur orci, a pretium erat mattis nec. Vestibulum ante urna ipsumi primisot inisetahtajeni faucibus orci luctus erenjot ultrices posuere cubilia andit.',
            image: blogImage2 
        },
        { 
            id: 3, 
            date: '06 February', 
            title: 'Thrills & Chills: Extreme Sports Tours For Adrenaline Junkies',
            views: 211,
            readTime: '1 Min Read',
            comments: 0,
            excerpt: 'NSuspendisse bibendum efficitur orci, a pretium erat mattis nec. Vestibulum ante urna ipsumi primisot inisetahtajeni faucibus orci luctus erenjot ultrices posuere cubilia andit.',
            image: blogImage3 
        },
    ];

    // Placeholder data for the sidebar categories and recent posts
    const categories = [
        { name: 'Adventure Safari', count: 3 },
        { name: 'City Discovery', count: 5 },
        { name: 'Cruise Voyage', count: 5 },
        { name: 'Cultural Exploration', count: 4 },
        { name: 'Educational Journey', count: 5 },
        { name: 'Luxury Retreat', count: 7 },
        { name: 'Nature Excursion', count: 7 },
        { name: 'Photography Expedition', count: 2 },
    ];

    const recentPosts = [
        { date: '06 February, 2024', title: 'Spiritual Sojourn: Pilgrimage Tours For Soul Seekers', image: blogImage1 },
        { date: '06 February, 2024', title: 'Wine Country Escapes: Vineyard Tours For Connoisseurs', image: blogImage2 },
        { date: '06 February, 2024', title: 'Thrills & Chills: Extreme Sports Tours For Adrenaline Junkies', image: blogImage3 },
    ];
    
    const tags = ['Adventure', 'City Tour', 'Cruise', 'Cultural', 'Nature Excursion', 'Photography', 'Road Trip', 'Tourism', 'Wildlife'];


    // --- STYLES DEFINITION ---
    const customStyles = `
        /* Hero Section */
        .villas-hero-section {
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
        .villas-hero-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.4);
            z-index: -1;
        }
        .villas-hero-section h1 {
            font-size: 3rem;
            font-weight: bold;
            margin-bottom: 10px;
        }
        .villas-hero-section p {
            font-size: 1rem;
            opacity: 0.8;
        }

        /* Blog Card Styling */
        .blog-post-card {
            border: none;
            margin-bottom: 40px;
            border-radius: 10px;
        }
        .blog-post-card .card-img-top {
            border-radius: 10px;
            width: 100%;
            height: auto;
            max-height: 400px;
            object-fit: cover;
        }
        .date-badge {
            position: absolute;
            top: 20px;
            left: 20px;
            background-color: #4CAF50;
            color: white;
            padding: 8px 10px;
            border-radius: 5px;
            text-align: center;
            font-weight: 500;
            line-height: 1.1;
        }
        .date-badge span {
            display: block;
            font-size: 0.8rem;
        }
        .post-meta span {
            font-size: 0.85rem;
            color: #777;
            margin-right: 15px;
        }
        .post-meta .dot {
            margin: 0 5px;
        }
        .post-title {
            font-size: 1.8rem;
            font-weight: 700;
            color: #333;
            margin-top: 10px;
            margin-bottom: 15px;
        }
        .view-post-link {
            color: #4CAF50;
            font-weight: 600;
            text-decoration: none;
            transition: color 0.2s;
        }
        .view-post-link:hover {
            color: #388E3C;
        }

        /* Sidebar Styling */
        .sidebar-card {
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
            padding: 20px;
            margin-bottom: 30px;
            border: none;
        }
        .sidebar-card h5 {
            font-size: 1.2rem;
            font-weight: 600;
            color: #333;
            border-bottom: 1px solid #eee;
            padding-bottom: 10px;
            margin-bottom: 20px;
        }
        .sidebar-card .list-group-item {
            border: none;
            padding: 8px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #555;
            font-size: 0.95rem;
        }
        .sidebar-card .list-group-item:hover {
            color: #4CAF50;
            cursor: pointer;
        }

        /* Recent Posts */
        .recent-post-item {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
        }
        .recent-post-item img {
            width: 60px;
            height: 60px;
            object-fit: cover;
            border-radius: 5px;
            margin-right: 10px;
        }
        .recent-post-item div {
            flex-grow: 1;
        }
        .recent-post-item .date {
            font-size: 0.75rem;
            color: #999;
        }
        .recent-post-item .title {
            font-size: 0.9rem;
            font-weight: 500;
            color: #333;
            line-height: 1.3;
        }
        .recent-post-item .title:hover {
            color: #4CAF50;
            cursor: pointer;
        }

        /* Tags */
        .tag-cloud .btn {
            background-color: #f0f0f0;
            color: #555;
            border: none;
            padding: 5px 15px;
            margin: 0 5px 10px 0;
            font-size: 0.85rem;
            border-radius: 5px;
        }
        .tag-cloud .btn:hover {
            background-color: #4CAF50;
            color: white;
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

    // --- SIDEBAR COMPONENTS ---

    const SearchWidget = () => (
        <Card className="sidebar-card">
            <h5>Search Here</h5>
            <InputGroup>
                <Form.Control
                    type="text"
                    placeholder="Search here"
                    className="border-end-0"
                />
                <Button variant="success" className="d-flex align-items-center justify-content-center">
                    <FaSearch />
                </Button>
            </InputGroup>
        </Card>
    );

    const CategoriesWidget = () => (
        <Card className="sidebar-card">
            <h5>Categories</h5>
            <ul className="list-group list-group-flush">
                {categories.map((cat, index) => (
                    <li key={index} className="list-group-item">
                        {cat.name} <small>({cat.count})</small>
                    </li>
                ))}
            </ul>
        </Card>
    );

    const RecentPostWidget = () => (
        <Card className="sidebar-card">
            <h5>Recent Post</h5>
            {recentPosts.map((post, index) => (
                <div key={index} className="recent-post-item">
                    <img src={post.image} alt={post.title} />
                    <div>
                        <div className="date">{post.date}</div>
                        <div className="title">{post.title}</div>
                    </div>
                </div>
            ))}
        </Card>
    );

    const TagsWidget = () => (
        <Card className="sidebar-card">
            <h5>Tags</h5>
            <div className="tag-cloud">
                {tags.map((tag, index) => (
                    <Button key={index} size="sm" className="me-2 mb-2">
                        {tag}
                    </Button>
                ))}
            </div>
        </Card>
    );


    // --- MAIN RENDER ---
    return (
        <div className="villas-page">
            <style>{customStyles}</style>

            {/* 1. Hero Section */}
            <section className="villas-hero-section">
                <Container className="text-center">
                    <h1>Villas</h1>
                    <p>
                        <small>Home → Blog Standard</small>
                    </p>
                </Container>
            </section>

            {/* 2. Main Content Grid and Sidebar */}
            <section className="blog-content-section py-5">
                <Container>
                    <Row>
                        {/* Main Content Column */}
                        <Col lg={8}>
                            {blogPosts.map((post) => (
                                <Card key={post.id} className="blog-post-card">
                                    <div className="position-relative">
                                        <Card.Img variant="top" src={post.image} alt={post.title} />
                                        <div className="date-badge">
                                            {post.date.split(' ')[0]}
                                            <span>{post.date.split(' ')[1]}</span>
                                        </div>
                                    </div>
                                    <Card.Body className="px-0">
                                        <div className="post-meta mb-3">
                                            <span>{post.views} Views</span>
                                            <span className="dot">|</span>
                                            <span>{post.readTime}</span>
                                            <span className="dot">|</span>
                                            <span>({post.comments}) Comment</span>
                                        </div>
                                        <h2 className="post-title">{post.title}</h2>
                                        <Card.Text>
                                            {post.excerpt}
                                            <br/>
                                            faucibus orci luctus erenjot ultrices posuere cubilia andit ornare ure...
                                        </Card.Text>
                                        <a href="#!" className="view-post-link">
                                            View Post <FaArrowRight className="ms-1" size={10} />
                                        </a>
                                    </Card.Body>
                                </Card>
                            ))}

                            {/* Pagination */}
                            <div className="d-flex justify-content-center mt-4">
                                <nav aria-label="Page navigation">
                                    <ul className="pagination">
                                        <li className="page-item active"><a className="page-link" href="#!">01</a></li>
                                        <li className="page-item"><a className="page-link" href="#!">02</a></li>
                                        <li className="page-item"><a className="page-link" href="#!"><FaArrowRight /></a></li>
                                    </ul>
                                </nav>
                            </div>
                        </Col>

                        {/* Sidebar Column */}
                        <Col lg={4}>
                            <SearchWidget />
                            <CategoriesWidget />
                            <RecentPostWidget />
                            <TagsWidget />
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

export default Villas;
