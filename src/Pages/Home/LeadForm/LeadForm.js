import React, { useState } from 'react';
import { Col, Container, Form, Row, Button, Alert } from 'react-bootstrap';
import quote from '../../../images/quote.jpg';
import './LeadForm.css'

const LeadForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const handleFormSubmit = e => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('subject', subject);
        formData.append('message', message);

        fetch('https://afternoon-harbor-51520.herokuapp.com/messages', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result);
                if (result.insertedId) {
                    setSuccess(true);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        e.target.reset();
    }
    const handleClose = () => {
        window.location.reload();
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
                                            placeholder="Enter your full name" required onChange={e => setName(e.target.value)} />


                                        <Form.Control type="email"
                                            placeholder="Enter your your email address" required onChange={e => setEmail(e.target.value)} />


                                        <Form.Control type="text"
                                            placeholder="Subject" required onChange={e => setSubject(e.target.value)} />

                                    </div>
                                </Col>
                                <Col xs={12} md={6}>
                                    <div className="form_right">

                                        <Form.Control
                                            as="textarea"
                                            placeholder="Leave your message here"
                                            style={{ height: '130px' }}
                                            required
                                            onChange={e => setMessage(e.target.value)}
                                        />

                                        <Button className="banner-btn my-3 lead_submit" variant="primary" type="submit">
                                            Submit
                                        </Button>
                                        <br />
                                        <br />
                                        {success && <Alert variant="success" dismissible onClick={handleClose}>
                                            <p>Your message has been sent successfully.</p>
                                        </Alert>}
                                        <br />
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