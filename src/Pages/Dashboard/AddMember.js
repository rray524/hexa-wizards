import React, { useState } from 'react';
import { Alert, Form, Button, Spinner } from 'react-bootstrap';

const AddMember = () => {
    const [name, setName] = useState('');
    const [designation, setDesignation] = useState('');
    const [service, setService] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [facebook, setFacebook] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [skills, setSkills] = useState('');
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
        formData.append('designation', designation);
        formData.append('service', service);
        formData.append('email', email);
        formData.append('number', number);
        formData.append('facebook', facebook);
        formData.append('linkedin', linkedin);
        // formData.append('skill', skill);
        formData.append('skills', skills);
        formData.append('image', image);

        fetch('https://afternoon-harbor-51520.herokuapp.com/members', {
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
                <br /><br />
                <Form.Group controlId="formFileMultiple" className="mb-5">
                    <Form.Label>Upload Team Member Photo</Form.Label>
                    <Form.Control onChange={e => setImage(e.target.files[0])} accept="image/*" type="file" multiple />
                </Form.Group>
                <Form.Group className="mb-5" controlId="formBasicText">
                    <Form.Label>Member Name</Form.Label>
                    <Form.Control onChange={e => setName(e.target.value)} type="text" placeholder="Enter Member Name" required />
                </Form.Group>
                <Form.Group className="mb-5" controlId="formBasicText">
                    <Form.Label>Member Designation</Form.Label>
                    <Form.Control onChange={e => setDesignation(e.target.value)} type="text" placeholder="Enter Member role(ex.Designer)" required />
                </Form.Group>
                <Form.Group className="mb-5" controlId="formBasicText">
                    <Form.Label>Member Email</Form.Label>
                    <Form.Control onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter Member Email" required />
                </Form.Group>
                <Form.Group className="mb-5" controlId="formBasicText">
                    <Form.Label>Member Facebook URL</Form.Label>
                    <Form.Control onChange={e => setFacebook(e.target.value)} type="url" placeholder="Enter FB Profile URL" required />
                </Form.Group>
                <Form.Group className="mb-5" controlId="formBasicText">
                    <Form.Label>Member Linkedin URL</Form.Label>
                    <Form.Control onChange={e => setLinkedin(e.target.value)} type="url" placeholder="Enter Linkedin Profile URL" required />
                </Form.Group>
                <Form.Group className="mb-5" controlId="formBasicText">
                    <Form.Label>Member Phone</Form.Label>
                    <Form.Control onChange={e => setNumber(e.target.value)} type="number" placeholder="Enter Member phone number" required />
                </Form.Group>
                <Form.Group className="mb-5" controlId="formBasicText">
                    <Form.Label>Member Skills</Form.Label>
                    <Form.Select aria-label="select" required onChange={e => setSkills(e.target.value)}>
                        <option>Select Your Best skill</option>
                        <option value="React">React</option>
                        <option value="Node">Node.js</option>
                        <option value="MongoDB">MongoDB</option>
                        <option value="Javascript">Javascript</option>
                        <option value="Video Editing">Video Editing</option>
                        <option value="Camtasia">Camtasia</option>
                        <option value="Photoshop">Photoshop</option>
                        <option value="Illustrator">Illustrator</option>
                        <option value="Logo Design">Logo Design</option>
                        <option value="Data Entry">Data Entry</option>
                        <option value="Research">Research</option>
                        <option value="Account Management">Account Management</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="UI Design">UI Design</option>
                        <option value="Adobe Premiere Pro cc">Adobe Premiere Pro cc</option>
                        <option value="Timelapse video">Timelapse video</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-5" controlId="formBasicDescription">
                    <Form.Label>Member Details</Form.Label>
                    <Form.Control
                        as="textarea"
                        onChange={e => setService(e.target.value)}
                        placeholder="Short Description of Member Details here"
                        style={{ height: '130px' }}
                        required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Create New
                </Button>

                <br />
                <br />
                {success && <Alert variant="success" dismissible onClick={handleClose}>
                    <p>You have added your member successfully.</p>
                </Alert>}
                <br />
            </Form>}
            <br /><br /><br />
            {isLoading && <div className="spinner text-center" style={{ position: 'fixed', zIndex: '1', top: '0', left: '0', right: '0', bottom: '0' }}>
                <Spinner animation="grow" variant="primary" />
            </div>}
        </div>
    );
};

export default AddMember;