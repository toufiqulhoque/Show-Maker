import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import './Login.css'
import { FcGoogle } from "react-icons/fc";
import { useHistory, useLocation } from 'react-router';
const Login = () => {
    const history = useHistory()
    const location = useLocation();
    const { loginUser, loginWithGoogle, user, isLoading, authError } = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        console.log(data)
        e.target.reset()
        loginUser(data.Email, data.Password, location, history)
        console.log(user.email)




    }
    const redirect_uri = location.state?.from || "/home"
    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }
    return (
        <div>
            {/* <Row >
                <Col className='m-auto margin'><form onSubmit={handleSubmit(onSubmit)}>
                    <input className='py-2 px-5' type="email" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} /> <br /><br />
                    <input className='py-2 px-5' type="password" type='password' placeholder="Password" {...register("Password", { required: true, maxLength: 6 })} /> <br /><br />

                    <input className='login-btn' type="submit" />
                    <br />
                    <br />

                    <NavLink style={{ textDecoration: 'none' }} to='/register' >
                        <Button variant="outline-danger">New User? Please Register</Button>
                    </NavLink>
                </form></Col>
                <Col><img className='img-fluid log-img' src='https://ecurater.com/wp-content/uploads/2020/10/login1.png' alt="" /></Col>
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

                                <input className='input-line full-width' type="email" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                                <input className='input-line full-width' type="password" type='password' placeholder="Password" {...register("Password", { required: true, maxLength: 6 })} />

                            </div>
                            <div className='login-form '>
                                <h3>Login With Google</h3>
                                <button className='px-5 mt-2 py-2' onClick={handleGoogleLogin}><FcGoogle /><span className='m-3'>Continue with Google</span></button>
                            </div>
                            <NavLink className='text-decoration-none' to='/register'><div class='spacing'>New User? <span class='highlight'>Please Register</span></div></NavLink>
                            <div><input type="submit" class='ghost-round full-width' /></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;