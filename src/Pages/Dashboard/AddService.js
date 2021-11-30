
import React, { useState } from 'react';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';

const AddService = () => {
    const [name, setName] = useState('');
    const [service, setService] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

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

        fetch('http://localhost:5000/services', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result);
                if (result.insertedId) {
                    setSuccess(true);

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
        </div>
    );
};

export default AddService;