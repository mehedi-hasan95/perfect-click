import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-toastify';
import SingleReview from './SingleReview/SingleReview';

const ServiceDetails = () => {
    const { _id, title, img, price, description } = useLoaderData();
    const { user } = useContext(AuthContext);
    //Practice
    const [singleReviews, setSingleReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/sns?service=${_id}`)
            .then(res => res.json())
            .then(data => setSingleReviews(data))
    }, [_id])

    console.log(singleReviews);


    // Post Review 
    const handlePost = e => {
        e.preventDefault();
        const message = e.target.message.value;


        const userReviews = {
            service: _id,
            name: user?.displayName,
            email: user?.email,
            photo: user?.photoURL,
            message,
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userReviews),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast.success("You have sucessfully post your review", { autoClose: 500 })
                    e.target.reset();
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }






    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 px-5'>
            <div>
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img className=' cursor-pointer' src={img} alt="" />
                    </PhotoView>
                </PhotoProvider>

                <div className='py-8'>
                    <h2 className='text-2xl font-semibold'>Service Name: {title}</h2>
                    <p className='py-5'>{description}</p>
                    <div className='border p-5 shadow mb-5'>
                        <h3 className='text-2xl py-4'><span className='font-bold text-purple-400'>Camera:</span> Sony Alpha A7 III Mirrorless Digital Camera</h3>
                        <h4 className='text-xl'>Key Features</h4>
                        <p>
                            5-axis image stabilization <br />
                            BIONZ X image processing engine<br />
                            35 mm 24.3 MP 7 Exmor CMOS sensor<br />
                            High-resolution OLED Tru-Finder<br />
                        </p>
                    </div>
                    <h4 className='text-lg font-bold'><span className='text-purple-700 font-bold'>Hire Me:</span> ${price} per hour</h4>
                </div>
            </div>
            <div className='mt-8 md:mt-10 lg:mt-15 border shadow p-5 rounded-lg'>
                <div className='py-10'>
                    <h2 className='text-2xl mb-5'>
                        {
                            singleReviews.length < 1 ?
                                <>This item have no review.</>
                                :
                                <>This item have <span className='font-bold'>{singleReviews.length}</span> reviews</>
                        }
                    </h2>

                    <div className='grid gap-5'>
                        {
                            singleReviews.map(rev => <SingleReview key={rev._id} rev={rev}></SingleReview>)
                        }
                    </div>
                </div>
                <div className='mt-10 md:mt-15 lg:mt-20'>
                    {
                        user?.uid ?
                            <form onSubmit={handlePost}>
                                <label className="block">
                                    <span className="mb-1 text-2xl font-semibold ">Write Your Review</span>
                                    <textarea rows="3" name='message' className="block w-full rounded-md outline-none border border-violet-600 p-5"></textarea>
                                </label>
                                <input className='bg-purple-400 inline-block px-4 py-2 rounded-lg mt-5 font-semibold cursor-pointer' type="submit" value="Post" />
                            </form>
                            :
                            <h2>Please Login to write a review</h2>
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;