import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../hooks/hooks';
import MyAllReviews from './MyAllReviews/MyAllReviews';

const MyReviews = () => {
    const {user, logOut} = useContext(AuthContext);
    const [review, setReview] = useState([]);


    useTitle('Reviews - Perfect Click');

    useEffect( () => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearar ${localStorage.getItem('perfectClick')}`
            }
        })
        .then(res => {
            if (res.status === 401 || res.status === 403) {
                return logOut();
            }
            return res.json();
        })
        .then (data => setReview(data))
    },[user?.email, logOut])

    // Delete a review
    const handleDelete = id => {
        const proced = window.confirm("Do you want to delete this review?");
        if(proced) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: "DELETE"
            })
            .then (res => res.json())
            .then (data => {
                if( data.deletedCount > 0 ) {
                    toast.success("You have Successfully delete the review", {autoClose: 600});
                    const remaining = review.filter(rvw => rvw._id !== id);
                    setReview(remaining)
                }
            })
        }
    }

    return (
        <div className='container mx-auto'>
            {
                review?.length < 1 ?
                <h2 className='text-2xl text-center my-10'>No reviews were added</h2>
                :
                <h2 className='text-2xl mb-5'>{user?.displayName}, you have total: <span className='font-bold'>{review?.length}</span> reviews</h2>
            }
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    review.map(rev => <MyAllReviews key={rev._id} rev={rev} handleDelete={handleDelete}></MyAllReviews>)
                }
            </div>
        </div>
    );
};

export default MyReviews;