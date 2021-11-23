import { faPlay } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Col, Row, Button, Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner from '../../images/banner.jpg';
import './Header.css';
import logo from '../../images/1.png';
import bgImg from '../../images/banner-bg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { useState } from 'react';
import { debounce } from '../../hooks/debounce';

const Header = () => {
    const talk = <FontAwesomeIcon icon={faCommentAlt} />;
    const playBtn = <FontAwesomeIcon icon={faPlayCircle} />;

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = debounce(() => {
        const currentScrollPos = window.pageYOffset;

        setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

        setPrevScrollPos(currentScrollPos);
    }, 100);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, [prevScrollPos, visible, handleScroll]);

    const navbarStyles = {
        position: 'fixed',
        width: '100%',
        height: '88px',
        boxShadow: 'rgb(221 221 221) 0px 0px 3px, rgb(221 221 221) -2px -2px 3px',
        background: 'white',
        transition: 'top 0.3s'
    }
    return (
        <div className="header-container" style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover' }}>
            <div className="menu">
                <Navbar collapseOnSelect expand="lg" style={{ ...navbarStyles, top: visible ? '0' : '-90px' }}>
                    <Container>
                        <Navbar.Brand href="/"><img className="site-logo" src={logo} alt="logo" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            </Nav>
                            <Nav>

                                <Nav.Link className="talk" as={Link} to="/contact">
                                    {talk} Let's Talk
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div className="banner">
                <Container>
                    <Row>
                        <Col xs={12} md={6}>
                            <h4 className="slogan">Best Business Agency
                            </h4>
                            <h1 className="banner-title">Expert teams for<br /> help your<br /> business<br /> challenge</h1>
                            <div className="banner-btn-youtube">
                                <Button className="banner-btn" variant="primary">Get Started</Button>
                                <div className="tube">
                                    <a href="https://www.youtube.com/watch?v=O33uuBh6nXA" className="video-play vid-zone">
                                        {playBtn}
                                        <span>watch video</span>
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div className="banner-img">
                                <img src={banner} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Header;