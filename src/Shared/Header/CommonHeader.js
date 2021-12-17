import { faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { debounce } from '../../hooks/debounce';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';

const CommonHeader = () => {
    const { user, logout, admin } = useAuth();
    const talk = <FontAwesomeIcon icon={faCommentAlt} />;

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = debounce(() => {
        const currentScrollPos = window.pageYOffset;

        setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

        setPrevScrollPos(currentScrollPos);
    }, 100);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, [prevScrollPos, visible, handleScroll]);

    const navbarStyles = {
        position: 'fixed',
        width: '100%',
        height: '88px',
        boxShadow: 'rgb(221 221 221) 0px 0px 3px, rgb(221 221 221) -2px -2px 3px',
        background: 'white',
        transition: 'top 0.3s',

    }
    return (
        <div className="menu">
            <Navbar collapseOnSelect expand="lg" style={{ ...navbarStyles, top: visible ? '0' : '-90px' }}>
                <Container>
                    <Navbar.Brand href="/"><img className="site-logo" src={logo} alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            {/* <Nav.Link as={Link} to="/contact">Contact</Nav.Link> */}
                            {admin && <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>}
                            {
                                user.email ? <Nav.Link as={Link} to='#' onClick={logout}>Logout</Nav.Link> :
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                            {
                                user.email && <Nav.Link as={Link} className="wlcm" to='#'>Welcome {user.displayName}</Nav.Link>
                            }


                        </Nav>
                        <Nav>

                            <Nav.Link className="talk" as={Link} to="/contact">
                                {talk} Let's Talk
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default CommonHeader;