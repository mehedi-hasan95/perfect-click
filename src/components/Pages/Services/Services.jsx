import React, { useEffect, useState } from 'react';
import SingleService from '../Common/SingleService';

const Services = () => {
    const [service, setService] = useState([]);
    useEffect( () => {
        fetch(`http://localhost:5000/services`)
        .then(res => res.json())
        .then(data => setService(data))
    },[])
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