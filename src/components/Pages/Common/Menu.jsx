import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import logo from '../../../img/logo.png'

const Menu = () => {

  const { user, logOut } = useContext(AuthContext);

  const [open, setOpen] = useState(false);

  return (
    <div className='container mx-auto'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7 z-50'>
        <Link to='/' className='font-bold text-2xl cursor-pointer text-gray-800 flex items-center'>
          <img className='w-[100px]' src={logo} alt="" />
          <p>Perfect Click</p>
        </Link>

        <div onClick={() => setOpen(!open)} className='text-3xl h-6 w-6 absolute right-8 top-6 cursor-pointer md:hidden'>
          {open ? <XMarkIcon /> : <Bars3Icon />}
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[100] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'left-[200%]'}`}>


          <li className='md:ml-8 text-xl md:my-0 my-7'>
            <Link to='/' className='text-gray-800 hover:text-gray-400 duration-500'>Home</Link>
          </li>
          <li className='md:ml-8 text-xl md:my-0 my-7'>
            <Link to='/services' className='text-gray-800 hover:text-gray-400 duration-500'>Services</Link>
          </li>
          <li className='md:ml-8 text-xl md:my-0 my-7'>
            <Link to='/blog' className='text-gray-800 hover:text-gray-400 duration-500'>Blog</Link>
          </li>
          {
            user?.uid &&
            <>
              <li className='md:ml-8 text-xl md:my-0 my-7'>
                <Link to='/reviews' className='text-gray-800 hover:text-gray-400 duration-500'>My Reviews</Link>
              </li>
              <li className='md:ml-8 text-xl md:my-0 my-7'>
                <Link to='/add-service' className='text-gray-800 hover:text-gray-400 duration-500'>Add service</Link>
              </li>
            </>
          }
          <li className='md:ml-8 text-xl md:my-0 my-7'>
            {
              user?.uid ?
                <Link onClick={logOut} className='text-gray-800 hover:text-gray-400 duration-500'>Log Out</Link>
                :
                <Link to='/login' className='text-gray-800 hover:text-gray-400 duration-500'>Login</Link>
            }
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;