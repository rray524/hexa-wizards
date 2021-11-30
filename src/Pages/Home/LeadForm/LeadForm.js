import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import quote from '../../../images/quote.jpg';
import './LeadForm.css'

const LeadForm = () => {
    const handleFormSubmit = e => {
        e.preventDefault();
    }
    return (
        <div id='form'>
            <Container fluid>
                <Row>
                    <Col xs={12} md={6}>
                        <img src={quote} alt="" />
                    </Col>
                    <Col xs={12} md={6}>
                        <h2 className='text-white mb-5' style={{ padding: '0 7%', marginTop: '7px' }}>Contact us for services</h2>
                        <Form id="lead_form" onSubmit={handleFormSubmit}>
                            <Row>
                                <Col xs={12} md={6}>
                                    <div className="form_left">

                                        <Form.Control type="text"
                                            placeholder="Enter your full name" />


                                        <Form.Control type="email"
                                            placeholder="Enter your your email address" />


                                        <Form.Control type="text"
                                            placeholder="Subject" />

                                    </div>
                                </Col>
                                <Col xs={12} md={6}>
                                    <div className="form_right">

                                        <Form.Control
                                            as="textarea"
                                            placeholder="Leave your message here"
                                            style={{ height: '130px' }}
                                        />

                                        <Button className="banner-btn my-3 lead_submit" variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LeadForm;