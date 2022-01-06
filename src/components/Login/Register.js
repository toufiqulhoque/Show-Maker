import React, { useState } from 'react';
import { Button, Col, Row, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Register = () => {
    const [show, setShow] = useState(true);
    const history = useHistory()
    const { registerUser, user, isLoading, authError } = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        console.log(data)
        if (data.Password != data.Retype_Password) {


            alert('Your password didnt match')
            return

        }
        e.target.reset()
        registerUser(data.Email, data.Password, data.Name, history)
    };
    console.log(errors);
    return (
        <div>
            {/* <Row>
                <Col className='m-auto margin'> {!isLoading && <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='py-2 px-5' type="name" placeholder="Name" {...register("Name", { required: true, maxLength: 80 })} /> <br /><br />
                    <input className='py-2 px-5' type="email" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} /> <br /><br />
                    <input className='py-2 px-5' type="password" type='password' placeholder="Password" {...register("Password", { required: true, maxLength: 6 })} /> <br /><br />
                    <input className='py-2 px-5' type="password" type='password' placeholder="Retype_Password" {...register("Retype_Password", { required: true, maxLength: 6 })} /> <br /><br />

                    <input className='register-btn' type="submit" />
                    <br />
                    <br />

                    <NavLink style={{ textDecoration: 'none' }} to='/login' >
                        <Button variant="outline-danger">Already Registered? Please Login</Button>
                    </NavLink>
                </form>}
                    {isLoading && <Spinner animation="border" />}</Col>
                <Col><img className='img-fluid reg-img' src="https://ecurater.com/wp-content/uploads/2020/10/login1.png" alt="" /></Col>
            </Row> */}

            <div class='bold-line'></div>
            <div class='container1'>
                <div class='window'>
                    <div class='overlay'></div>
                    <div class='content'>
                        <div class='welcome'>Hello There!</div>
                        <div class='subtitle'>We're almost done. Before using our services you need to create an account.</div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class='input-fields'>
                                <input className='input-line full-width' type="name" placeholder="Name" {...register("Name", { required: true, maxLength: 80 })} /> <br /><br />
                                <input className='input-line full-width' type="email" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                                <input className='input-line full-width' type="password" type='password' placeholder="Password" {...register("Password", { required: true, maxLength: 6 })} />
                                <input className='input-line full-width' type="password" type='password' placeholder="Retype_Password" {...register("Retype_Password", { required: true, maxLength: 6 })} /> <br /><br />
                                <div><input type="submit" class='ghost-round full-width' /></div>

                                <NavLink className='text-decoration-none' to='/login'>
                                    <div class='spacing'>New User? <span class='highlight'>Please Login</span></div>
                                </NavLink>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;