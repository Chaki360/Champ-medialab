import React, { useEffect, useState } from 'react';
import FeedbackData from '../FeedbackData/FeedbackData';
import ServiceData from '../ServiceData/ServiceData';

import Banner from './Banner/Banner';

const Home = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    const [feedbacks, setFeedbacks] = useState([])
    useEffect(() => {
        fetch('feedback.json')
            .then(res => res.json())
            .then(data => setFeedbacks(data))

    }, [])
    return (
        <div>
            <Banner></Banner>
            <h2 className='text-4xl mb-4 mt-4 text-center font-extrabold text-orange-500'>My Services</h2>
            <div className='grid grid-cols-2 gap-3 mt-6'>
                {services.map(service => <ServiceData key={service.id} service={service}></ServiceData>)}
            </div>
            <h2 className='text-4xl mb-4 mt-4 text-center font-extrabold text-orange-500'>Customers Feedback's</h2>
            <div className='grid grid-cols-4 gap-4 mt-6'>
                {feedbacks.map(feedback => <FeedbackData key={feedback.id} feedback={feedback}></FeedbackData>)}
            </div>
        </div>
    );
};

export default Home;