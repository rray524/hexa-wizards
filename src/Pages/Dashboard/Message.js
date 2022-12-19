import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Message = () => {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        fetch('https://drab-gray-firefly-garb.cyclic.app/messages')
            .then(res => res.json())
            .then(data => setMessages(data))
    }, [])
    return (
        <div id='message'>
            <br /><br />
            <Container>
                <Row>
                    {
                        messages.map(message => <Col xs={12} md={12} key={message._id}>
                            <div className="message-body">

                                <Row className="msg-box">
                                    <Col xs={12} sm={12} md={4} style={{ borderBottom: '1px solid' }}>
                                        <h5 style={{ textDecoration: 'underline' }}>Client Name:</h5>
                                        <h6>{message.name}</h6>
                                    </Col>
                                    <Col xs={12} sm={12} md={4} style={{ borderBottom: '1px solid' }}>
                                        <h5 style={{ textDecoration: 'underline' }}>Client Email:</h5>
                                        <h6>{message.email}</h6>
                                    </Col>
                                    <Col xs={12} sm={12} md={4} style={{ borderBottom: '1px solid' }}>
                                        <h5 style={{ textDecoration: 'underline' }}>Subject:</h5>
                                        <h6>{message.subject}</h6>
                                    </Col>
                                    <Col xs={12} sm={12} md={12}>
                                        <h5 style={{ textDecoration: 'underline' }}>Client Message:</h5>
                                        <p>{message.message}</p>
                                    </Col>
                                </Row>
                                <br /><br />
                            </div>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Message;