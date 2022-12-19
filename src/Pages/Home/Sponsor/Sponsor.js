import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import s1 from '../../../images/upwork.png';
import s2 from '../../../images/fiverr.png';
import s3 from '../../../images/freelancer.png';
import s4 from '../../../images/graphic-river.png';
import './Sponsor.css'

const Sponsor = () => {
    return (
        <div id='sponsor'>
            <Container>
                <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Col xs={4} md={3}>
                        <img className="site-sponsor upwork" src={s1} alt="sponsor" />
                    </Col>
                    <Col xs={4} md={3}>
                        <img className="site-sponsor fiverr" src={s2} alt="sponsor" />
                    </Col>
                    <Col xs={4} md={3}>
                        <img className="site-sponsor freelancer" src={s3} alt="sponsor" />
                    </Col>
                    <Col xs={4} md={3}>
                        <img className="site-sponsor graphic" src={s4} alt="sponsor" />
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Sponsor;