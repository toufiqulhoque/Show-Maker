import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import './Header.css'
const Header = (props) => {

    const { user, logout, admin } = useAuth()

    return (
        <div>
            <Navbar className='nav-bar' expand="lg">
                <Container >
                    <Navbar.Brand>
                        <NavLink className='text-decoration-none text-white ' to='/home'>
                            <h2 className='logo' >Show-Maker</h2>
                        </NavLink>


                    </Navbar.Brand>
                    <Navbar.Toggle id='scroll' aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-lg-0"
                            style={{ maxHeight: '200px' }}
                            navbarScroll
                        >
                            <NavLink
                                className='nav-text-style text-decoration-none me-3 mx-auto'
                                to="/home"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "#FF0000"
                                }}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                className='nav-text-style text-decoration-none ms-3'
                                to="/allMovies"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "#FF0000"
                                }}
                            >
                                All Movies
                            </NavLink>
                            <NavLink
                                className='nav-text-style text-decoration-none ms-3 mx-auto'
                                to="/myMovies"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "#FF0000"
                                }}
                            >
                                My Movies
                            </NavLink>
                            {user.email &&
                                <NavLink
                                    className='nav-text-style text-decoration-none ms-3 mx-auto'
                                    to="/dashboard"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "#FF0000"
                                    }}
                                >
                                    Dashboard
                                </NavLink>
                            }
                            <NavLink
                                className='nav-text-style text-decoration-none ms-3 mx-auto'
                                to="/watchList"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "#FF0000"
                                }}
                            >
                                Watch List
                            </NavLink>

                            <span className='badge badge-sm bg-danger badge-header mb-4'>{props.data.length}</span>
                            {user.email && <p className='text-light ms-3 fs-6'>{user.displayName}</p>

                            }
                            {user?.email ? <Button className='ms-3' variant='outline-danger' onClick={logout}>Logout</Button> :
                                <Link to='/login'><Button className='ms-3' variant='outline-danger'>Login</Button></Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;