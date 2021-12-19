import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchmovies } from '../../../redux/slices/movieSlice';
import HomeCards from './HomeCards';

const HomeCard = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchmovies());
    }, [])
    const movies = useSelector((state) => state.movies.discover)

    return (
        <Container>
            <h2 className='text-light mt-5'>Featured  Movies</h2>
            <Row xs={1} md={5} className="g-3">
                {

                    Array.from({ length: 1 }).map((_, idx) => (
                        movies.slice(0, 10).map((movie) => (<HomeCards key={movie.id} movie={movie} />)))

                    )}
            </Row>
        </Container>
    );
};

export default HomeCard;