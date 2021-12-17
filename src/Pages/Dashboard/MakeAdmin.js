import React from 'react';
import { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleBlur = (e) => {
        setEmail(e.target.value);

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { email }
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged === true) {
                    console.log(data);
                    setSuccess(true);

                }
            })
        e.target.reset();

    }
    return (
        <div className="make-admin">

            <h2>Make Admin</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group" style={{ justifyContent: 'flex-start', alignItems: 'center', padding: '20px 0' }}>
                    <label htmlFor="email">Email</label>
                    <input type="email" onBlur={handleBlur} name="email" placeholder="nome@email.com.br" />
                </div><br /><br />
                <Button className="banner-btn" type='submit' variant="primary">Make Admin</Button>
            </form>
            <br />
            {success && <Alert variant="success">
                Success! <strong>{email}</strong> is now Admin
            </Alert>}
        </div>
    );
};

export default MakeAdmin;