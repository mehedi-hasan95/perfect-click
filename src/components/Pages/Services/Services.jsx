import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import SingleService from '../Common/SingleService';

const Services = () => {
    const { loading} = useContext(AuthContext);
    const [service, setService] = useState([]);
    useEffect( () => {
        fetch(`http://localhost:5000/services`)
        .then(res => res.json())
        .then(data => setService(data))
    },[])

    if (loading) {
        return <>
            <div className="container mx-auto flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
                <div className="h-48 rounded-t bg-gray-700"></div>
                <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-900">
                    <div className="w-full h-6 rounded bg-gray-700"></div>
                    <div className="w-full h-6 rounded bg-gray-700"></div>
                    <div className="w-3/4 h-6 rounded bg-gray-700"></div>
                </div>
            </div>
        </>
    }

    return (
        <div className='container mx-auto'>
            <h2 className='text-3xl font-semibold text-center py-10'>I'm a weeding photographar. Chouse your servie</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    service.map(serv => <SingleService key={serv._id} serv={serv}></SingleService>)
                }
            </div>
        </div>
    );
};

export default Services;