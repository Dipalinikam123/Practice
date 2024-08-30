import React from 'react';
import { Container, Row, Col, ListGroup, Nav } from 'react-bootstrap';
import './Footer.css'; // Optional: Custom styles

const Footer = () => {
    return (
        <footer className="bg-black text-light py-4">
            <Container>
                <Row className="mb-4 mt-3">
                    <Col className="d-flex justify-content-center" xs={6} md={2}>
                        <svg viewBox="0 0 36 52" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="100" height="100">
                            <rect fill="#EC1D24" width="100%" height="100%"></rect>
                            <path fill="#FEFEFE" d="M31.5 48V4H21.291l-3.64 22.735L14.102 4H4v44h8V26.792L15.577 48h4.229l3.568-21.208V48z"></path>
                        </svg>
                    </Col>

                    <Col xs={6} md={3} className='text-center mb-4'>
                        <h5>About Marvel</h5>
                        <ListGroup variant="flush">
                            <ListGroup.Item className="bg-black border-0">
                                <a href="#!" className="text-light">Help/FAQs</a>
                            </ListGroup.Item>
                            <ListGroup.Item className="bg-black border-0">
                                <a href="#!" className="text-light">Careers</a>
                            </ListGroup.Item>
                            <ListGroup.Item className="bg-black border-0">
                                <a href="#!" className="text-light">Internships</a>
                            </ListGroup.Item>
                            <ListGroup.Item className="bg-black border-0">
                                <a href="#!" className="text-light">Advertising</a>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col xs={6} md={3} className='text-center'>
                        <h5>Follow Marvel</h5>
                        <Nav className="flex-column fs-6">
                            <Nav.Link href="#!" className="text-light">Facebook</Nav.Link>
                            <Nav.Link href="#!" className="text-light">Twitter</Nav.Link>
                            <Nav.Link href="#!" className="text-light">Instagram</Nav.Link>
                            <Nav.Link href="#!" className="text-light">YouTube</Nav.Link>
                        </Nav>
                    </Col>
                    
                    <Col xs={6} md={3} className='text-center'>
                        <h5>Marvel Insider</h5>
                        <p >Get Rewarded for Being a Marvel Fan</p>
                        <ListGroup variant="flush" className="fs-6">
                            <ListGroup.Item className="bg-black border-0">
                                <a href="#!" className="text-light">Redeem Digital Comics</a>
                            </ListGroup.Item>
                            <ListGroup.Item className="bg-black border-0">
                                <a href="#!" className="text-light">Marvel Insider Logo</a>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>

                <Row className="mt-3">
                    <Col className="text-center">
                        <p className="mb-0">&copy; {new Date().getFullYear()} Marvel Entertainment, LLC</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
