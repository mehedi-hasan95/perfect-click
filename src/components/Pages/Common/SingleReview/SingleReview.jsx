import React, { useState } from 'react';

const SingleReview = ({rev}) => {
    const {name, photo, email, message} = rev;
    
    
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
        </div>
    );
};

export default SingleReview;