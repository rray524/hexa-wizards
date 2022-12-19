import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aboutImg from '../../../images/best-about-us-pages.jpg';
import './About.css';
import ab1 from '../../../images/ab-icon2.png';
import ab2 from '../../../images/ab-icon.png';
import CountUp, { useCountUp } from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const About = () => {
    const tick = <FontAwesomeIcon icon={faCheck} />

    useCountUp({ ref: 'counter', end: 10, duration: 2 });
    const [loading, setLoading] = React.useState(false);

    const onStart = () => {
        setLoading(true);
    };

    const onEnd = () => {
        setLoading(false);
    };

    const containerProps = {
        'aria-busy': loading,
    };
    return (
        <div id="about">
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <div className="about-img">
                            <img style={{ marginBottom: '9px' }} src={aboutImg} alt="" />
                            <div className="experience-year">
                                <span className="ex-year">3</span>
                                <span className="year-ex">Years <br />Experience</span>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <h2 className="text-white mt-3">Do you know who<br /> are we? Please <br />Get to know us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nisi natus corrupti a amet, ducimus facere porro dolore voluptatibus veniam dicta fugit voluptate suscipit? Non aliquid temporibus consequatur quae voluptate iure eos quam consectetur impedit quisquam quod consequuntur quidem eius, modi, magni aspernatur omnis, soluta molestias pariatur. Mollitia, ullam similique. Dolor praesentium ex expedita, eos nesciunt corrupti, nostrum dolorem est itaque voluptatibus officia voluptatem quisquam ipsum minima, eaque quam. Aliquam incidunt repellat dignissimos tenetur laudantium.</p>
                        <ul>
                            <li>{tick} Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                            <li>{tick} Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                            <li>{tick} Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque.</li>
                        </ul>
                        <div className="statistics">
                            <div className="countries">
                                <img src={ab1} alt="" />
                                <div className="counts">
                                    <span className="figure">
                                        <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
                                            {({ isVisible }) => (
                                                <div style={{ height: 61 }}>
                                                    {isVisible ? <CountUp
                                                        end={10}
                                                        duration="3"
                                                        onStart={onStart}
                                                        onEnd={onEnd}
                                                        containerProps={containerProps}
                                                    /> : null}
                                                </div>
                                            )}
                                        </VisibilitySensor>
                                    </span>
                                    <span className="figure-text">
                                        Clients Worked
                                    </span>
                                </div>
                            </div>
                            <div className="projects">
                                <img src={ab2} alt="" />
                                <div className="counts">
                                    <span className="figure">
                                        <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
                                            {({ isVisible }) => (
                                                <div style={{ height: 61 }}>
                                                    {isVisible ? <CountUp
                                                        end={30}
                                                        duration="3"
                                                        onStart={onStart}
                                                        onEnd={onEnd}
                                                        containerProps={containerProps}
                                                    /> : null}
                                                </div>
                                            )}
                                        </VisibilitySensor>
                                    </span>
                                    <span className="figure-text">
                                        Projects Completed
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;