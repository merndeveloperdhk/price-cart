import React from 'react';
import PropTypes from 'prop-types'

const PriceOption = ({priceOption}) => {
    return (
        <div className='mx-auto bg-purple-200 p-6 rounded-lg w-full '>
            <p className='text-center'>
            <span  className='text-4xl font-bold text-purple-600 '>{priceOption.price}</span>
            <span className='font-semibold '>/month</span>
            </p>
            
            <p className='text-4xl font-semibold text-center my-2'>{priceOption.type}</p>
            <p className='text-xl font-semibold'>Features</p>
            {
                priceOption.features.map((feature, idx) => <li 
                key={idx} className='list-decimal'>
                    {feature}
                    </li>)
            }
            
        </div>
    );
};
PriceOption.prototype = {
    option: PropTypes.object
}

export default PriceOption;