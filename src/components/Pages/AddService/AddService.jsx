import React, { useState } from 'react';
import { toast } from 'react-toastify';
import useTitle from '../../hooks/hooks';

const AddService = () => {
    const [user, setUser] = useState([]);


    useTitle('Add Services - Perfect Click');

    const handleSubmit = e => {

        e.preventDefault();
        // Update User
        fetch('http://localhost:5000/services', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then((response) => response.json())
            .then((data) => {
                if(data.acknowledged) {
                    toast.success("Successfully add the service", {autoClose: 500});
                    e.target.reset();
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }

    const handleUpdate = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUser = { ...user };
        newUser[field] = value;
        setUser(newUser);
    }
    return (
        <div className='container mx-auto'>
            <div className='md:w-2/3 mx-auto px-5'>
                <h2 className='text-center text-2xl font-bold py-10'>Add Service</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='text-left font-xl font-semibold mb-2'>Service Title</label><br />
                        <input onChange={handleUpdate} type="text" name="title" placeholder='Service Title' className='px-3 py-2 border w-full rounded-lg border-violet-400' required />
                    </div>
                    <div className='mt-5'>
                        <label className='text-left font-xl font-semibold mb-2'>Image Link</label><br />
                        <input onChange={handleUpdate} type="text" name="img" placeholder='https//:' className='px-3 py-2 border w-full rounded-lg border-violet-400' required />
                    </div>
                    <div className='mt-5'>
                        <label className='text-left font-xl font-semibold mb-2'>Price Per Hour</label><br />
                        <input onChange={handleUpdate} type="number" name="price" placeholder='Price Per Hour' className='px-3 py-2 border w-full rounded-lg border-violet-400' required />
                    </div>
                    <div className='mt-5'>
                        <label className='text-left font-xl font-semibold mb-2'>Service Content</label><br />
                        <textarea onChange={handleUpdate} type="text" name="description" placeholder='Service Title' className='px-3 py-2 border w-full rounded-lg border-violet-400' required />
                    </div>
                    <input type="submit" value="Add Service" className=' inline-block mt-5 cursor-pointer p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900' />
                </form>
            </div>
        </div>
    );
};

export default AddService;