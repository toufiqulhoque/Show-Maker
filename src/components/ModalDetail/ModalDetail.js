import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addTowatchList, fetchmovies } from '../../redux/slices/movieSlice';
import './ModalDetail.css'

const ModalDetail = (props) => {
    const dispatch = useDispatch();
    const { url, title, genre } = props.data
    const review = props.data
    const [disable, setDisable] = useState(true);
    const remove = (value, clicked) => {
        dispatch(addTowatchList(value))
        setDisable(clicked)
    }
    return (

        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header className='modal-background'>
                <Modal.Title className='mx-auto' id="contained-modal-title-vcenter">
                    <img className='img-fluid modal-img ' src={url} alt="" />
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='modal-background'>
                <h4 className='text-white'>{title}</h4>
                <p className='text-white'>
                    {genre}
                </p>
            </Modal.Body>

            <Modal.Footer className='modal-background'>
                {/* <Button onClick={() => remove(props.data, false)} type="button" className={disable ? "p-2 btn-dark btn-outline-light btn-sm" : "disabled p-2 btn-dark btn-outline-light btn-sm"} >Add to WatchList</Button> */}
                {disable ?
                    <Button variant='outline-light outline' onClick={() => remove(props.data, false)}>Add To Watch List</Button> : <Button disabled variant='outline-light outline ' >Add To Watch List</Button>
                }
                <Button variant='outline-light outline' onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalDetail;