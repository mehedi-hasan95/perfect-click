import React, { useEffect, useState } from 'react';
import SingleService from '../Common/SingleService';

const Home = () => {
    const [service, setService] = useState([]);
    useEffect( () => {
        fetch(`services.json`)
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
        <div className='container mx-auto'>
            <div>
                <img src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="" />
            </div>
            <div className='text-center py-10'>
                <h2 className='text-3xl text-black font-bold mb-10'>We're Gleam a small and enthusiastic <br /> photography studio based in New York</h2>
                <p className=' md:max-w-[600px] lg:max-w-[800px] mx-auto'>We love photography and travel for meeting new beautiful people all over the world. Propriae voluptaria dissentias nam ei, posse diceret inciderint cum ut, gubergren sadipscing ei vim. Ancillae torquatos in nec, impetus nostrum ea eos. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    service.map(serv => <SingleService key={serv._id} serv={serv}></SingleService>)
                }
            </div>
            <div className='py-10'>
                <h2 className='text-2xl text-center mb-5'>Our Galery</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <img src="https://images.unsplash.com/photo-1597157639073-69284dc0fdaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwd2VkZGluZ3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                    <img src="https://images.unsplash.com/photo-1542042161784-26ab9e041e89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                    <img src="https://images.unsplash.com/photo-1587271339318-2e78fdf79586?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;