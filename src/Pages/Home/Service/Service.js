import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import './Service.css'

const Service = () => {
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        fetch('https://afternoon-harbor-51520.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setIsLoading(false);
            })
    }, [])
    return (
        <div id='service'>
            <Container>
                {!isLoading && <Row>
                    <h2 className="text-center">Provide our best services</h2>
                    {
                        services.map((service, index) => <Col sm={6} md={4} key={index} className={index % 2 === 0 ? "service_box_even" : "service_box_odd"}>

                            <img style={{ height: '120px', width: '120px' }} src={`data:image/png;base64,${service.image}`} alt="service-icon" />
                            <h3>{service.name}</h3>
                            <p>{service.service.slice(0, 174)}</p>

                        </Col>)
                    }
                </Row>}
                {isLoading && <div className="spinner text-center" style={{ position: 'fixed', zIndex: '1', top: '0', left: '0', right: '0', bottom: '0' }}>
                    <Spinner animation="grow" variant="primary" />
                </div>}
            </Container>
        </div>
    );
};

export default Service;