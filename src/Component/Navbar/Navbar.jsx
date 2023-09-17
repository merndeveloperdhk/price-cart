
import React, { useState } from 'react';
import Link from '../Link/Link';
import { BeakerIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const[open, setOpen] = useState(false)
    const routes = [
        {
          id: 1, name: 'Home', path: '/'
        },
        {
          id: 2, name: 'About', path: '/about'
        },
        {
          id: 3,  name: 'Services', path: '/services'
        },
        {
          id: 4, name: 'Contact', path: '/contact'
        },
        {
          id: 5,  name: 'Products', path: '/products'
        }
      ];
      
    return (
        <nav className='bg-purple-400 mx-4 py-2'>
            <div className='md:hidden' onClick={() => setOpen(!open)}>
            {open === true ? <XMarkIcon className="h-6 w-6 text-black-500" />: <Bars3Icon className="h-6 w-6 text-black-500" />}
            </div>
            <ul className={`md:flex gap-3 px-6 space-y-1 md:space-y-0 absolute md:static duration-500 bg-purple-400 ${open ? 'top-6' : '-top-36'}`}>
                {
                    routes.map(route => <Link
                    key={route.id}
                         route = {route}
                         ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;