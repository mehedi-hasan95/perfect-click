import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceDetails = () => {
    const { title, img, price, description } = useLoaderData();
    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div>
                {/* <img src={img} alt={title} /> */}

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
            <div>Mehedi</div>
        </div>
    );
};

export default ServiceDetails;