import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateReview = () => {
    const review = useLoaderData();
    const [user, setUser] = useState(review);
    const handleSubmit = e => {

        e.preventDefault();
        // Update User
        fetch(`http://localhost:5000/reviews/${review._id}`, {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                if(data.acknowledged) {
                    toast.success("You have sucessfully update your review", {autoClose: 500});
                }
            })

        
    }

    const clickUpdate = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUser = { ...user };
        newUser[field] = value;
        setUser(newUser);
    }
    return (
        <div className='container mx-auto'>
            <form onSubmit={handleSubmit}>
                <label className="block">
                    <textarea onBlur={clickUpdate} defaultValue={review.message} rows="3" name='message' className="block w-full rounded-md outline-none border border-violet-600 p-5"></textarea>
                </label>
                <input className='bg-purple-400 inline-block px-4 py-2 rounded-lg mt-5 font-semibold cursor-pointer' type="submit" value="Post" />
            </form>
        </div>
    );
};

export default UpdateReview;