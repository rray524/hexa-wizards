import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import logo from '../../images/logo.png';
import footerBg from '../../images/bg2.jpg';
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () => {

    const fb = <FontAwesomeIcon icon={faFacebookF} />
    const tw = <FontAwesomeIcon icon={faTwitter} />
    const lnkdin = <FontAwesomeIcon icon={faLinkedinIn} />


    return (
        <div id="footer">
            <div className="footer_initial" style={{ backgroundImage: `url(${footerBg})`, backgroundSize: 'cover', backgroundAttachment: 'fixed', zIndex: 1, boxShadow: 'inset 0 0 0 2000px rgb(255 255 255 / 90%)' }}>
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={4} className="mb-4">
                            <img src={logo} alt="" />
                            <p>When replacing a selection. help agencies to define their new business objectives and then create. maintains the amount of lines. When replacing a selection. help agencies to define their</p>
                            <div className="social-icons">
                                <a href="https://www.facebook.com/">{fb}</a>
                                <a href="https://www.facebook.com/">{tw}</a>
                                <a href="https://www.facebook.com/">{lnkdin}</a>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4} className="mb-4">
                            <h3 className="mb-4" style={{ textTransform: 'uppercase' }}>Our Location</h3>


                        </Col>
                        <Col xs={12} sm={12} md={4} className="mb-4">
                            <h3 className="mb-4" style={{ textTransform: 'uppercase' }}>Information</h3>
                            <p><strong>Location :</strong> 1230 NE 3RD TER , Postal Code 33030,Homestead,Florida,USA</p>
                            <p><strong>Tel :</strong><a href="tel:+17866605845"> +1 (786) 660-5845</a></p>
                            <p><strong>Email :</strong><a href="mailto:hexawizards2go@gmail.com"> hexawizards2go@gmail.com</a></p>
                            <div className="suscribe_input">
                                <input type="email" className="email form-control width-80" id="sus_email" placeholder="Type Email" />
                                <button type="submit" id="sus_submit" className="banner-btn add-btn">Subscribe</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="footer_last">
                <Container>
                    <Row>
                        <Col xs={12} md={6}>
                            <p>Copyright ?? 2021 Hexa Wizards All rights reserved</p>
                        </Col>
                        <Col xs={12} md={6}>
                            <p className="text-center">Designed and Developed by <a href="https://rahul-wp.com/">Rahul</a></p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div >
    );
};

export default Footer;