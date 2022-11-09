import React from 'react';
import { Link } from 'react-router-dom';

const MyAllReviews = ({rev, handleDelete}) => {
    const { _id, name, photo, email, message} = rev;
    
    

    
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
            <Link to={`/reviews/${_id}`} className='btn-modal bg-purple-400 inline-block px-4 py-2 rounded-lg mt-5 font-semibold cursor-pointer mr-5'>Edit</Link>
            <button onClick={()=>handleDelete(_id)} className='bg-purple-400 inline-block px-4 py-2 rounded-lg mt-5 font-semibold cursor-pointer'>Delete</button>
            
        </div>
    );
};

export default MyAllReviews;