import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

const MovieReview = () => {
    const { register, handleSubmit, formState: { errors, } } = useForm();

    const onSubmit = (inputData, e) => {
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(inputData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('user add successfully')
                    e.target.reset('')
                }
            })
        e.preventDefault();
        console.log(inputData);
    }

    return (
        <div>
            <div>
                <h2 className='text-white'>Reviews</h2>
                <form className='order-form' onSubmit={handleSubmit(onSubmit)}>
                    <input className='p-3' type="url" placeholder="image" {...register("image", {})} /> <br /><br />
                    <input className='p-3' type="text" placeholder="name" {...register("name", {})} /> <br /> <br />
                    <input className='p-3 ' type="description" placeholder="description" {...register("description", {})} /> <br /><br />

                    {/* <input type="url" placeholder="price" {...register("price", {})} /> <br /> */}

                    <input className='btn btn-danger' type="submit" />

                </form>
            </div>
        </div>
    );
};

export default MovieReview;