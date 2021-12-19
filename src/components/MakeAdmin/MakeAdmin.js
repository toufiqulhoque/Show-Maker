import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './MakeAdmin.css'
const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)
    const { admin } = useAuth()
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }

    const handleAdminSubmit = e => {
        const user = { email }
        if (admin === true) {
            fetch('https://shrouded-tor-41331.herokuapp.com/users/admin', {
                method: 'PUT',
                headers: {

                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount) {
                        console.log(data);

                        setSuccess(true)
                    }
                    else {
                        alert('Email not found')
                    }
                })

        }
        else {
            return
        }

        e.preventDefault()
    }
    return (
        <div className='my-5'>
            <Form onSubmit={handleAdminSubmit} className='mx-auto admin-dash'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-white">Make Admin</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onBlur={handleOnBlur} />
                    <Form.Text className="text-white">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Button variant="warning" type="submit">
                    Make Admin
                </Button>
            </Form>
            {success && <Alert variant="success">Made Admin Successfully</Alert>}
        </div>
    );
};

export default MakeAdmin;