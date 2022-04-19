import React from 'react';

const NotFound = () => {
    return (
        <div className='text-center'>

            <p className='mb-2 text-xl font-bold tracking-wide text-gray-500 uppercase'>
                Error 404
            </p>
            <h1 className='mb-4 text-2xl font-extrabold text-gray-900 md:text-4xl'>
                Oops! The page you're looking for isn't here.
            </h1>
            <p className='mb-5 text-bold text-gray-800 text-xl'>
                You might have the wrong address, or the page may have moved.
            </p>


        </div>
    );
};

export default NotFound;