import React, { useEffect, useState } from 'react';
import Footer from '../../../Shared/Footer/Footer';
import CommonHeader from '../../../Shared/Header/CommonHeader';
import LeadForm from '../LeadForm/LeadForm';
import dashboard from '../../../images/Dashboard.png'
import { useParams } from 'react-router';
import { Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const SingleMem = () => {
    const fb = <FontAwesomeIcon icon={faFacebookF} />
    const lnkdin = <FontAwesomeIcon icon={faLinkedinIn} />
    const email = <FontAwesomeIcon icon={faEnvelope} />
    const phn = <FontAwesomeIcon icon={faPhone} />
    const { memID } = useParams();
    const [member, setMember] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/members/${memID}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMember(data);
            })
    }, [])
    return (
        <div id="single-mem">
            <CommonHeader></CommonHeader>
            <div className="header-breadcrumb" style={{ backgroundImage: `url(${dashboard})`, backgroundSize: 'cover', padding: '200px 0', boxShadow: 'inset 0 0 0 2000px rgba(10,6,83,0.8)' }}>
                <h2 className='text-center text-white'>{member.name}</h2>
            </div>
            <br /><br />
            <Container>
                <Row>
                    <div className="team-wrapper-area">
                        <div className="row align-items-center">

                            <div className="col-xl-5 col-lg-5 col-md-6">
                                <div className="single-member-img">
                                    <div className="team-img">
                                        <img src={`data:image/png;base64,${member.image}`} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-7 col-md-6">
                                <div className="single-team-content">
                                    <div className="team-content">
                                        <span className="team-profe">{member.designation}</span>
                                        <h2>{member.name}</h2>
                                        <p> {member.service}</p>
                                        <div className="team-information">
                                            <ul>
                                                <li><span>{email}</span> {member.email}</li>
                                                <li><span>{phn}</span> {member.number}</li>
                                            </ul>
                                        </div>
                                        <ul className="team-hover">
                                            <li><a href={member.facebook}>{fb}</a></li>
                                            <li><a href={member.linkedin}>{lnkdin}</a></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row team-single-wraper align-items-center">
                            <div className="col-xl-3 col-lg-3 col-md-12">
                                <div className="team-inner">
                                    <h3>Working on</h3>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-12">
                                <div className="row">
                                    <div className="col-xl-3 col-lg-3 col-md-3">
                                        <div className="single-expert">
                                            <span className="expert-icon"><i className="flaticon-017-diagram"></i></span>
                                            <h4>{member.skill}</h4>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
            <br /><br />
            <LeadForm></LeadForm>
            <Footer></Footer>
        </div>
    );
};

export default SingleMem;