import React, { useState } from 'react';
import { Col, Container, Row, Spinner, Modal, Button, Alert } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import CommonHeader from '../../Shared/Header/CommonHeader';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Registration = () => {
    const [accessData, setAccessData] = useState({});
    const { registerUser, isLoading, error, setError, user } = useAuth();
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newAccessData = { ...accessData };
        newAccessData[field] = value;
        setAccessData(newAccessData)
    }
    const handleSubmit = e => {
        e.preventDefault();
        if (accessData.password !== accessData.password2) {
            setError('Password does not match');
            return;
        }
        registerUser(accessData.email, accessData.password, accessData.name);
    }


    return (
        <>
            <CommonHeader></CommonHeader>
            <Container className="my-5">
                <Row>
                    <Col xs={12} sm={12} md={12}>

                        <div className="app text-center my-5">
                            <img src={logo} className="logo" alt="Business view - Reports" />

                            {!isLoading && <form className="form" onSubmit={handleSubmit}>
                                <div className="input-group" style={{ justifyContent: 'center' }}>
                                    <label htmlFor="name">Your Name</label>
                                    <input onBlur={handleOnBlur} type="text" name="name" placeholder="Your Name.." required />
                                </div>
                                <div className="input-group" style={{ justifyContent: 'center' }}>
                                    <label htmlFor="email">Email</label>
                                    <input onBlur={handleOnBlur} type="email" name="email" placeholder="nome@email.com.br" required />
                                </div>
                                <div className="input-group" style={{ justifyContent: 'center' }}>
                                    <label htmlFor="password">Password</label>
                                    <input onBlur={handleOnBlur} type="password" name="password" required />
                                </div>
                                <div className="input-group" style={{ justifyContent: 'center' }}>
                                    <label htmlFor="password2">Re-type password</label>
                                    <input onBlur={handleOnBlur} type="password" name="password2" required />
                                </div>
                                <p className="text-danger">{error}</p>
                                <button type="submit" className="primary">Register</button>
                            </form>}
                            {
                                user?.email && <Alert variant='success'>
                                    A new user has been created successfully!
                                </Alert>
                            }
                            <Link to='/login'>
                                <button className="secondary">
                                    Already User? Login..
                                </button>
                            </Link>
                        </div>
                        {isLoading && <div className="spinner text-center" style={{ position: 'fixed', zIndex: '1', top: '0', left: '0', right: '0', bottom: '0' }}>
                            <Spinner animation="grow" variant="primary" />
                        </div>}
                    </Col>

                </Row>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Registration;