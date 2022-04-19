import React from 'react';

const FeedbackData = ({ feedback }) => {
    return (
        <div className='flex flex-col text-center items-center rounded-md shadow border'>
            <img className='mb-3 w-24 h-24 rounded-full shadow-lg' src={feedback.image} alt='' />
            <h5 className='mb-1 text-2xl font-bold text-gray-900'>{feedback.name}</h5>
            <h5 className='mb-2 text-lg font-md tracking-tight text-gray-900'>{feedback.comment}</h5>





        </div>

    );
};

export default FeedbackData;