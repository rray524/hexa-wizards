import React, { useState } from 'react';
import { Col, Container, Row, Spinner, Alert } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import logo from '../../images/logo.png';
import Footer from '../../Shared/Footer/Footer';
import './Login.css';
import CommonHeader from '../../Shared/Header/CommonHeader'
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const [accessData, setAccessData] = useState({});
    const location = useLocation();
    const history = useHistory();
    const { loginUser, user, isLoading, error } = useAuth();
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newAccessData = { ...accessData };
        newAccessData[field] = value;
        setAccessData(newAccessData)
    }
    const handleSubmit = e => {
        e.preventDefault();
        loginUser(accessData.email, accessData.password, location, history);
    }
    return (
        <div id="login-form-container">
            <CommonHeader></CommonHeader>
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        <div className="app text-center my-5">
                            <img src={logo} className="logo" alt="Business view - Reports" />
                            {!isLoading && <form className="form" onSubmit={handleSubmit}>
                                <div className="input-group" style={{ justifyContent: 'center' }}>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" onBlur={handleOnBlur} name="email" placeholder="nome@email.com.br" />
                                </div>
                                <div className="input-group" style={{ justifyContent: 'center' }}>
                                    <label htmlFor="password">password</label>
                                    <input type="password" onBlur={handleOnBlur} name="password" />
                                </div>

                                <button className="primary">Login</button>
                            </form>}
                            {isLoading && <div className="spinner text-center" style={{ position: 'fixed', zIndex: '1', top: '0', left: '0', right: '0', bottom: '0' }}>
                                <Spinner animation="grow" variant="primary" />
                            </div>}
                            <p className="text-danger">{error}</p>
                            {
                                user?.email && <Alert variant='success'>
                                    Logged in successfully!
                                </Alert>
                            }
                            <Link to='/registration'>
                                <button className="secondary">
                                    New User? Register..
                                </button>
                            </Link>
                        </div>
                    </Col>

                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Login;