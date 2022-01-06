import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './MobileApp.css'

const MobileApp = () => {
    return (
        <Container>
            <Row className='mbl'>
                <Col data-aos="fade-right" className='py-5'>
                    <img src="https://i.ibb.co/vcMSqCm/image-avod-devices-all-may-2021-1440x872-removebg-preview-1.png" alt="" />
                </Col>
                <Col data-aos="fade-left" className='mbl-2'>
                    <div className='text-white'>
                        <h2>The hardest working app <div> in show business.</div></h2>
                    </div>
                    <p className='text-white'>Show-Maker gives you the power to add, access and share all the entertainment that matters to you, on almost any device. Enjoy 50,000+ on demand titles and hundreds of channels of live TV, plus your own personal media collection, using one powerful app.</p>
                    <img height='100px' src="https://i.ibb.co/k8KsQR1/20-202991-get-it-on-google-play-logo-png-vector-removebg-preview.png" alt="" />
                    <div className='btn-div'><Button className='mbl-button  mt-5'>Create Your Free Account</Button></div>
                </Col>
            </Row>
        </Container>
    );
};

export default MobileApp;