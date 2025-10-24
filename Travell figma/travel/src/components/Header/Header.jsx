import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaFacebookF, FaTwitter, FaPinterest, FaInstagram } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="bg-dark text-white py-2">
            <Container fluid>
                <Row className="w-100 align-items-center">
                    {/* Email Section */}
                    <Col className="d-flex align-items-center me-auto">
                        <FaEnvelope className="me-2 text-success" />
                        <a href="mailto:info@example.com" className="text-white text-decoration-none">
                            info@example.com
                        </a>
                    </Col>

                    {/* Promotional Message */}
                    <Col className="text-center d-none d-md-block">
                        <span className="text-white">
                            50% Off Your Next Trip. Hurry Up for Your New Tour!{' '}
                            <a href="javascript:void(0)" className="text-success text-decoration-none">
                                Book Your Tour
                            </a>
                        </span>
                    </Col>

                    {/* Social Media Icons */}
                    <Col className="d-flex justify-content-end">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                                <a href="javascript:void(0)" className="text-white">
                                    <FaFacebookF />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="javascript:void(0)" className="text-white">
                                    <FaTwitter />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="javascript:void(0)" className="text-white">
                                    <FaPinterest />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="javascript:void(0)" className="text-white">
                                    <FaInstagram />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Header;