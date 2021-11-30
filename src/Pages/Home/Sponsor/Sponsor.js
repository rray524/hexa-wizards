import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import s1 from '../../../images/s-1.png';
import s2 from '../../../images/s-2.png';
import s3 from '../../../images/s-3.png';
import s4 from '../../../images/s-4.png';
import './Sponsor.css'

const Sponsor = () => {
    return (
        <div id='sponsor'>
            <Container>
                <Row>
                    <Col xs={4} md={3}>
                        <img className="site-sponsor" src={s1} alt="sponsor" />
                    </Col>
                    <Col xs={4} md={3}>
                        <img className="site-sponsor" src={s2} alt="sponsor" />
                    </Col>
                    <Col xs={4} md={3}>
                        <img className="site-sponsor" src={s3} alt="sponsor" />
                    </Col>
                    <Col xs={4} md={3}>
                        <img className="site-sponsor" src={s4} alt="sponsor" />
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Sponsor;