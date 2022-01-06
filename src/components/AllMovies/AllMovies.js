
import { useState } from 'react';
import { Button, Card, Col, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addTowatchList } from '../../redux/slices/movieSlice';
import useFetch from '../hooks/useFetch';
import ModalDetail from '../ModalDetail/ModalDetail';
import './AllMovies.css'


const AllMovies = (props) => {
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

            <Col className='my-5 card-border'>
                <Card data-aos="zoom-out" data-aos-duration="1000" className='h-100 hover-card card-border ' >
                    <Card.Img className='img1  ' variant="top" src={url} height='300' />
                    <Card.Body >
                        <Card.Title >{title}</Card.Title>
                        <Card.Text>
                            <p className='text-muted'>{genre}</p>
                        </Card.Text>
                        <Card.Text>
                            <p>{source}</p>
                        </Card.Text>
                        {/* <Link to={`/services/${service._id}`}><button>update</button></Link> */}
                        <br />
                    </Card.Body>
                    <Card.Footer >

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
};

export default AllMovies;