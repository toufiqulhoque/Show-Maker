import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Table } from 'react-bootstrap';
import './DeleteMovies.css'


const DeleteMovies = () => {


    const [service, setService] = useState([])
    useEffect(() => {
        fetch('https://shrouded-tor-41331.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setService(data))

    }, []);
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure you want to delete')
        if (proceed) {
            const url = `https://shrouded-tor-41331.herokuapp.com/services/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remainingUsers = service.filter(user => user._id !== id)
                        setService(remainingUsers)
                    }
                })
        }

    }
    return (
        <Container>
            {/* <Row xs={1} md={5} className="g-3">

                {
                    service.map(values => <Col className='my-5 '>
                        <Card className='h-100 hover-card card-bservice delete-color' >
                            <Card.Img className='img1  ' variant="top" src={values.url} height='300' />
                            <Card.Body>
                                <Card.Title className='text-light'>{values.title}</Card.Title>
                                <Card.Text>
                                    <p className='text-muted'>{values.genre}</p>
                                </Card.Text> */}

            {/* <Link to={`/services/${service._id}`}><button>update</button></Link> */}
            <br />
            {/* </Card.Body>
                            <Card.Footer>
                                <Button variant="outline-light" onClick={() => handleDeleteUser(values._id)}>DELETE</Button>
                            </Card.Footer>
                        </Card>

                    </Col>)

                } */}

            {/* </Row> */}
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>

                        <th className='text-light'>Title</th>
                        <th className='text-light'>Image</th>
                        <th className='text-light'>Genre</th>
                    </tr>
                </thead>
                <tbody>
                    {service.map(values => <tr>
                        <td className='text-light'>{values.title}</td>
                        <td  ><img className='img-fluid w-25' src={values.url} alt="" /></td>
                        <td className='text-light'>{values.genre}</td>
                        <td className='text-light'><Button variant="outline-light" onClick={() => handleDeleteUser(values._id)}>DELETE</Button></td>

                    </tr>)
                    }
                </tbody>
            </Table>)
        </Container>
    );
};

export default DeleteMovies;