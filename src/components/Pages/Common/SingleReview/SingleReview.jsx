import React, { useState } from 'react';
import './SingleReview.css'

const SingleReview = ({rev}) => {
    const {name, photo, email, message} = rev;
    
    // Modal section 
    const [modal, setModal] = useState(false);
    const togleModal = () => {
        setModal(!modal)
    }
    return (
        <div className='bg-gray-900 p-8 rounded-xl'>
            <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                    <div>
                        <img src={photo} alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                    </div>
                    <div>
                        <h4 className="font-bold text-purple-400">{name}</h4>
                        <span className="text-xs text-white">{email}</span>
                    </div>
                </div>
            </div>
            <div className="p-4 space-y-2 text-sm text-white">{message}</div>
            <button onClick={togleModal} className='btn-modal bg-purple-400 inline-block px-4 py-2 rounded-lg mt-5 font-semibold cursor-pointer mr-5'>Edit</button>
            <button className='bg-purple-400 inline-block px-4 py-2 rounded-lg mt-5 font-semibold cursor-pointer'>Delete</button>
            {
                modal && <div className="modal">
                <div className="overlay"></div>
                <div className="modal-content">
                    <h2 className='text-xl'>Please edit your review</h2>
                    <p>{message}</p>
                    <button onClick={togleModal} className='close-modal'>Edit</button>
                </div>
            </div>
            }
        </div>
    );
};

export default SingleReview;