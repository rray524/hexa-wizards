import React from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCoffee } from '@fortawesome/free-solid-svg-icons';
import './Dashboard.css';
import CommonHeader from '../../Shared/Header/CommonHeader';
import dashboard from '../../images/Dashboard.png';
import AddService from './AddService';
import AddMember from './AddMember';
import Footer from '../../Shared/Footer/Footer';
import Message from './Message';
import { faCommentAlt, faUser, faUserCircle } from '@fortawesome/free-regular-svg-icons';
import MakeAdmin from './MakeAdmin';

const Dashboard = () => {
    const element = <FontAwesomeIcon icon={faBriefcase} />
    const users = <FontAwesomeIcon icon={faUser} />
    const message = <FontAwesomeIcon icon={faCommentAlt} />
    const admin = <FontAwesomeIcon icon={faUserCircle} />
    return (
        <>
            <CommonHeader></CommonHeader>
            <div className="header-breadcrumb" style={{ backgroundImage: `url(${dashboard})`, backgroundSize: 'cover', padding: '200px 0', boxShadow: 'inset 0 0 0 2000px rgba(10,6,83,0.8)' }}>
                <h2 className='text-center text-white'>Dashboard</h2>
            </div>
            <div className="dashboard">
                <Container>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column mt-5">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first" className="tab-press">{element} Add Service Details</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second" className="tab-press">{users} Add New Member</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third" className="tab-press">{message} Messages</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth" className="tab-press">{admin} Make Admin</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <AddService></AddService>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <AddMember></AddMember>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <Message></Message>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <MakeAdmin></MakeAdmin>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Container>
            </div>

            <Footer></Footer>
        </>
    );
};

export default Dashboard;