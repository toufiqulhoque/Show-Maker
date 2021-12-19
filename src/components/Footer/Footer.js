import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className='footer-bg py-5'>
                <Container>
                    <div className='d-flex text-white '>
                        <Link to='/home' className='text-decoration-none text-white '><h6 className='footer' >COMPANY</h6></Link>
                        <Link to='/home' className='ms-3 text-decoration-none text-white '><h6 className='footer'>CAREERS</h6></Link>
                        <Link to='/home' className='ms-3 text-decoration-none text-white '><h6 className='footer'>CONTACT US</h6></Link>
                        <Link to='/home' className='ms-3 text-decoration-none text-white '><h6 className='footer'>MEDIA CENTER</h6></Link>

                        <span className='d-flex ms-auto footer-logo'>
                            <h5 className='ms-3 footer-icon-single'><FaFacebook /></h5>
                            <h5 className='ms-3 footer-icon-single'><FaTwitter /></h5>
                            <h5 className='ms-3 footer-icon-single'><FaLinkedin /></h5>
                            <h5 className='ms-3 footer-icon-single'><FaInstagram /></h5>
                        </span>
                    </div>

                    <div className=' text-white text-start py-5'>
                        <p>The consumption adn emission valuesin the website refer to your geographical IP.This value might be unrealistic if you navigate using VPN ot if the position of your internet provider is imprecise.If you believe you are incorrectly geolocalized, contact your dealer to get valied consumption and emission information in your area.</p>
                        <h6>Copyright Show-Maker sole shareholder company part of Plex Group </h6>
                        <p>All rights reserved Toufiq.</p>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Footer;