import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import MyAllReviews from './MyAllReviews/MyAllReviews';

const MyReviews = () => {
    const {user} = useContext(AuthContext);
    const [review, setReview] = useState([]);
    useEffect( () => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then (res => res.json())
        .then (data => setReview(data))
    },[user?.email])
    return (
        <div className='container mx-auto'>
            {
                review.length < 1 ?
                <h2 className='text-2xl text-center my-10'>No reviews were added</h2>
                :
                <h2 className='text-2xl mb-5'>{user?.displayName}, you have total: <span className='font-bold'>{review.length}</span> reviews</h2>
            }
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    review.map(rev => <MyAllReviews key={rev._id} rev={rev}></MyAllReviews>)
                }
            </div>
        </div>
    );
};

export default MyReviews;