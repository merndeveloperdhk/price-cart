import React from 'react';

const Link = ({route}) => {
    return (
        <div>
            <li><a className='className="md:text-white md:hover:text-black text-black' href={route.path}>{route.name}</a></li>
        </div>
    );
};

export default Link;