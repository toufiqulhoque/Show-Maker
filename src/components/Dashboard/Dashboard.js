import React from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import AddMovies from '../AddMovies/AddMovies';
import AllMovies from '../AllMovies/AllMovies';
import DeleteMovies from '../DeleteMovies/DeleteMovies';

const Dashboard = () => {

    return (
        <Container className='my-5 '>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row >
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link className='text-light' eventKey="first">Add Movies</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='text-light' eventKey="second">Delete Movies</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <AddMovies></AddMovies>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <DeleteMovies></DeleteMovies>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
};

export default Dashboard;