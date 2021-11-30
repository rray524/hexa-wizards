import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Team.css'
const Team = () => {
    const fb = <FontAwesomeIcon icon={faFacebookF} />
    const lnkdin = <FontAwesomeIcon icon={faLinkedinIn} />
    const [members, setMembers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/members')
            .then(res => res.json())
            .then(data => setMembers(data))

    }, [])
    return (
        <div id='team'>
            <Container>
                <Row>
                    <h2 className="text-center">Team Members</h2>
                    <p className="text-center sub-header">We help agencies to define their new business objectives and then create the road map</p>
                    {
                        members.map(member => <Col xs={12} sm={12} md={6} key="member._id">
                            <div className="single-member">
                                <div className="team-img">
                                    <img style={{ width: '200px', height: '220px' }} src={`data:image/png;base64,${member.image}`} alt="" />
                                </div>
                                <div className="team-content">
                                    <h4><Link to={`/members/${member._id}`}>{member.name}</Link></h4>
                                    <p>{member.designation}</p>
                                    <ul className="team-hover">
                                        <li><a href={member.facebook}>{fb}</a></li>
                                        <li><a href={member.linkedin}>{lnkdin}</a></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>)
                    }

                </Row>
            </Container>
        </div>
    );
};

export default Team;