import React, { useState } from 'react';
import { Col, Container, Row, Button, Modal } from 'react-bootstrap';
import banner from '../images/banner.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <iframe width="100%" height="400" src="https://www.youtube.com/embed/VHNhZw4D3N8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
        </Modal>
    );
}
const HomeBanner = () => {
    const playBtn = <FontAwesomeIcon icon={faPlayCircle} />;
    const [modalShow, setModalShow] = useState(false);
    return (
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
                                <span onClick={() => setModalShow(true)} className="video-play vid-zone">
                                    {playBtn}
                                    <span>watch video</span>
                                </span>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="banner-img">
                            <img src={banner} alt="" />
                        </div>
                    </Col>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </Row>
            </Container>
        </div>
    );
};

export default HomeBanner;