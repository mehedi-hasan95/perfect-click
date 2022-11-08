import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import SingleReview from '../Common/SingleReview';

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
                user?.uid && <h2 className='text-2xl mb-5'>{user?.displayName}, you have total: <span className='font-bold'>{review.length}</span> reviews</h2>
            }
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    review.map(rev => <SingleReview key={rev._id} rev={rev}></SingleReview>)
                }
            </div>
        </div>
    );
};

export default MyReviews;