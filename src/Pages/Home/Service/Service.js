import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Service.css'

const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [])
    return (
        <div id='service'>
            <Container>
                <Row>
                    <h2 className="text-center">Provide our best services</h2>
                    {
                        services.map((service, index) => <Col sm={6} md={4} key={index} className={index % 2 === 0 ? "service_box_even" : "service_box_odd"}>

                            <img style={{ height: '120px', width: '120px' }} src={`data:image/png;base64,${service.image}`} alt="service-icon" />
                            <h3>{service.name}</h3>
                            <p>{service.service.slice(0, 174)}</p>

                        </Col>)
                    }


                </Row>
            </Container>
        </div>
    );
};

export default Service;