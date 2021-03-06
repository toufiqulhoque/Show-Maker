import React, { useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addTowatchList } from '../../../redux/slices/movieSlice';
import ModalDetail from '../../ModalDetail/ModalDetail';

const HomeCards = (props) => {
    const { title, genre, score, url, source } = props.movie
    const dispatch = useDispatch();
    const [modalShow, setModalShow] = useState(false);
    // const [service, setService] = useState([])
    // useEffect(() => {
    //     fetch('https://shrouded-tor-41331.herokuapp.com/services')
    //         .then(res => res.json())
    //         .then(data => setService(data))

    // }, []);
    // console.log(service)


    return (
        <div>

            <Col data-aos="zoom-in" data-aos-duration="2000" className='my-5 card-border'>
                <Card className='h-100 hover-card card-border' >
                    <Card.Img className='img1  ' variant="top" src={url} height='300' />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            <p className='text-muted'>{genre}</p>
                        </Card.Text>
                        <Card.Text>
                            <p>{source}</p>
                        </Card.Text>
                        {/* <Link to={`/services/${service._id}`}><button>update</button></Link> */}
                        <br />




                    </Card.Body>
                    <Card.Footer>
                        <>
                            <Button variant="outline-light" onClick={() => setModalShow(true)}>
                                Detail
                            </Button>

                            <ModalDetail
                                show={modalShow}
                                data={props.movie}
                                onHide={() => setModalShow(false)}
                            />
                        </>
                    </Card.Footer>
                </Card>

            </Col>

        </div>
    );
}
export default HomeCards;