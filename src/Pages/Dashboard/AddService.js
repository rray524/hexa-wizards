
import React, { useEffect, useState } from 'react';
import { Form, Button, Alert, Spinner, Col, Row } from 'react-bootstrap';

const AddService = () => {
    const [name, setName] = useState('');
    const [service, setService] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true);
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setIsLoading(false);
            })
    }, [loading])
    const handleDelete = id => {
        const confirmation = window.confirm('Do you want Delete this Service?')
        if (confirmation) {
            const url = `http://localhost:5000/services/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount === 1) {
                        const rest = services.filter(service => service._id !== id);
                        setServices(rest);
                    }
                })
        }
    }
    const handleSubmit = e => {
        setIsLoading(true);
        e.preventDefault();
        if (!image) {
            return
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('service', service);
        formData.append('image', image);

        fetch('https://afternoon-harbor-51520.herokuapp.com/services', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result);
                if (result.insertedId) {
                    setSuccess(true);
                    setLoading(true);

                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        e.target.reset();
        setIsLoading(false);

    }
    const handleClose = () => {
        window.location.reload();
    }


    return (
        <div id='addService'>
            {!isLoading && <Form onSubmit={handleSubmit}>
                <br />
                {success && <Alert variant="success" dismissible onClick={handleClose}>
                    <p>You have added your service successfully.</p>
                </Alert>}
                <br />
                <Form.Group controlId="formFileMultiple" className="mb-5">
                    <Form.Label>Upload service icon(Recommended 120X120)</Form.Label>
                    <Form.Control onChange={e => setImage(e.target.files[0])} accept="image/*" type="file" multiple />
                </Form.Group>
                <Form.Group className="mb-5" controlId="formBasicText">
                    <Form.Label>Service Name</Form.Label>
                    <Form.Control onChange={e => setName(e.target.value)} type="text" placeholder="Enter Service Name" required />
                </Form.Group>

                <Form.Group className="mb-5" controlId="formBasicDescription">
                    <Form.Label>Service Details</Form.Label>
                    <Form.Control
                        as="textarea"
                        onChange={e => setService(e.target.value)}
                        placeholder="Short Description of service here"
                        style={{ height: '100px' }}
                        required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Create New
                </Button>

                <br />
            </Form>}
            <br /><br /><br />
            {isLoading && <div className="spinner text-center" style={{ position: 'fixed', zIndex: '1', top: '0', left: '0', right: '0', bottom: '0' }}>
                <Spinner animation="grow" variant="primary" />
            </div>}
            <h2 className="text-center">All Services List</h2>
            <div className="member-list">

                <Row>
                    {
                        services.map((service, idx) => <Col xs={12} sm={12} md={6} className="memberCon" key={idx}>
                            <div className="member_name">
                                <h4>Service Name:</h4>
                                <h5>{service.name}</h5>
                            </div>
                            <div className="delete_option">
                                <h4>Action:</h4>
                                <h5 onClick={() => handleDelete(service._id)} className="text-center">X</h5>
                            </div>
                        </Col>)
                    }
                </Row>

            </div>
            <br /><br />
        </div>
    );
};

export default AddService;