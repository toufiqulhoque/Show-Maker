import React from 'react';
import { useForm } from 'react-hook-form';

const AddMovies = () => {
    const { register, handleSubmit, formState: { errors, } } = useForm();
    const onSubmit = (inputData, e) => {
        fetch('http://localhost:5000/services', {
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
    }
    return (
        <div>
            <h2 className='text-white'>Add Movies</h2>
            <form className='order-form mt-5' onSubmit={handleSubmit(onSubmit)}>
                <h5 className='text-light'>Image Url</h5>
                <input className='p-3 text-light' type="url" placeholder="image" {...register("url", {})} /> <br /><br />
                <h5 className='text-light'>Title</h5>
                <input className='p-3' type="text" placeholder="Title" {...register("title", {})} /> <br /> <br />
                <h5 className='text-light'>Genre</h5>
                <input className='p-3 ' type="text" placeholder="genre" {...register("genre", {})} /> <br /><br />


                {/* <input type="url" placeholder="price" {...register("price", {})} /> <br /> */}

                <input className='btn btn-warning' type="submit" />

            </form>
        </div>
    );
};

export default AddMovies;