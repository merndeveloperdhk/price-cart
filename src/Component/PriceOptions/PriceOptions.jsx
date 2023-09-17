import React, { useEffect, useState } from 'react';
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {
    const [priceOptions, setPriceOptions] = useState([]);

    useEffect(() => {
        fetch('prices.json')
        .then(res => res.json())
        .then(data => setPriceOptions(data))
    },[])
    return (
        <div>
            <h2 className='text-3xl md:text-4xl text-center font-bold my-8'>Best Prices in the City.</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mx-4'>
                {
                    priceOptions.map(priceOption => <PriceOption
                            key={priceOption.id}
                         priceOption = {priceOption}
                         ></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;