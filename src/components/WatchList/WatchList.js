import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromwatchList } from '../../redux/slices/movieSlice';


const WatchList = (props) => {
    // const movies = useSelector((state) => state.movies.watchList)
    const dispatch = useDispatch();
    // const [key, value] = props.data
    // console.log(props.data);
    // console.log(value);
    const remove = (movie, e) => {
        dispatch(removeFromwatchList(movie));
        console.log(movie);
    }



    return (
        <div>
            <Container>
                <Row xs={1} md={5} className="g-3">

                    {
                        (props.data).map(values => <Col className='my-5'>
                            <Card className='h-100 hover-card card-border' >
                                <Card.Img className='img1  ' variant="top" src={values.url} height='300' />
                                <Card.Body>
                                    <Card.Title>{values.title}</Card.Title>
                                    <Card.Text>
                                        <p className='text-muted'>{values.genre}</p>
                                    </Card.Text>

                                    {/* <Link to={`/services/${service._id}`}><button>update</button></Link> */}
                                    <br />
                                </Card.Body>
                                <Card.Footer>
                                    <Button onClick={() => remove(values)} type="button" variant='outline-light'>DELET</Button>
                                    {/* <Button variant='outline-light outline' onClick={() => remove(values)}>DELETE</Button> */}
                                </Card.Footer>
                            </Card>

                        </Col>)
                    }
                </Row>
            </Container>

        </div >
    );
};

export default WatchList;