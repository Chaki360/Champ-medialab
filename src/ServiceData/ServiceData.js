import React from 'react';

const ServiceData = ({ service }) => {
    return (
        <div className=' overflow-hidden shadow-md rounded-xl'>
            <img src={service.image} alt='' />
            <h1 className='text-2xl text-bold'> Package: {service.packageName}</h1>
            <h2 className='text-xl text-bold'>Price:{service.price}</h2>
            <p className='font-semibold'>{service.details}</p>

            <button type="button" class="text-white bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-orange-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">BOOK NOW</button>
        </div>

    );
};

export default ServiceData;