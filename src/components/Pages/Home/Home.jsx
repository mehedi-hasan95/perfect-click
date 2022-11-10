import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/hooks';
import SingleService from '../Common/SingleService';
import Events from './Events';
import Gallery from './Gallery';
import MyTeam from './MyTeam';
import Slider from './Slider/Slider';

const Home = () => {
    const [service, setService] = useState([]);
    useTitle("Home - Perfect Click");


    useEffect(() => {
        fetch(`https://service-review-server-seven.vercel.app/limit`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div className='container mx-auto'>
            <Slider></Slider>
            <div className='text-center py-10'>
                <h2 className='text-3xl text-black font-bold mb-10'>We're Gleam a small and enthusiastic <br /> photography studio based in Bangladesh</h2>
                <p className=' md:max-w-[600px] lg:max-w-[800px] mx-auto'>We love photography and travel for meeting new beautiful people all over the world. Propriae voluptaria dissentias nam ei, posse diceret inciderint cum ut, gubergren sadipscing ei vim. Ancillae torquatos in nec, impetus nostrum ea eos. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    service.map(serv => <SingleService key={serv._id} serv={serv}></SingleService>)
                }
            </div>
            <div className='text-center mt-10'>
                <Link to='/services' className='text-xl font-semibold bg-violet-400 px-4 py-2 rounded-lg inline-block'>See All</Link>
            </div>
            <div className='py-10'>
                <h2 className='text-2xl text-center mb-5'>Our Galery</h2>
                <Gallery></Gallery>
            </div>
            <Events></Events>
            <MyTeam></MyTeam>
        </div>
    );
};

export default Home;