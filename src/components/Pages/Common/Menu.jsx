import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    const Links = [
        { name: "Home", link: "/" },
        { name: "Services", link: "/services" },
        { name: "Blog", link: "/blog" },
        { name: "My Reviews", link: "/my-reviews" },
        { name: "Add service", link: "/add-service" },
        { name: "login", link: "/login" },
    ];
    const [open, setOpen] = useState(false);

    return (
        <div className='container mx-auto'>
          <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
            <div className='font-bold text-2xl cursor-pointer text-gray-800'>
              Mehedi
            </div>
    
            <div onClick={() => setOpen(!open)} className='text-3xl h-6 w-6 absolute right-8 top-6 cursor-pointer md:hidden'>
              {open ? <XMarkIcon /> : <Bars3Icon />}
            </div>
    
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto -z-1 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'left-[200%]'}`}>
              {
                Links.map((link) => (
                  <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                    <Link to={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      );
    };

export default Menu;