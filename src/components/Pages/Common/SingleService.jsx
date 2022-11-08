import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = ({ serv }) => {
    const { _id, img, title, price, description } = serv;
    return (
        <div className='shadow-lg shadow-gray-500/50'>
            <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide text-black">{title}</h2>
                    <p className="text-black">{description.length < 100 ? description : description.slice(0, 100) + '...'}</p>
                    <h3>{price}</h3>
                </div>
                <Link to={`/services/${_id}`} className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900">Details</Link>
            </div>
        </div>
    );
};

export default SingleService;