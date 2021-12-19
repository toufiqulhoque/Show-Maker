import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchmovies } from '../../redux/slices/movieSlice';
import AllMovies from '../AllMovies/AllMovies';
import './Discover.css'

const Discover = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchmovies());
    }, [])
    const movies = useSelector((state) => state.movies.discover)

    return (
        <Container>
            <Row xs={1} md={5} className="g-3">
                {

                    Array.from({ length: 1 }).map((_, idx) => (
                        movies.map((movie) => (<AllMovies key={movie.id} movie={movie} />)))

                    )}
            </Row>
        </Container>
    );
};

export default Discover;