import React from 'react';
import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <div>
            <li><a className='md:text-white md:hover:text-black text-black hover:text-white px-3' href={route.path}>{route.name}</a></li>
        </div>
    );
};
Link.prototype={
    route:PropTypes.object
}

export default Link;