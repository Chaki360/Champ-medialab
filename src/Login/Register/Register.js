import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'
const Register = () => {

    const navigate = useNavigate()
    const navigateLogin = e => {
        navigate('/login')
    }
    return (
        <div className='register-form'>
            <h2 className='text-5xl mb-4 text-center text-bold text-orange-600'>Register Now</h2>
            <form>
                <input className='border' type="name" name="name" id="" placeholder="Enter your name" required />
                <input className='border' type="email" name="email" id="" placeholder="Enter your email" required />
                <input className='border' type="password" name="password" id="" placeholder="Enter your password" required />
                <input className='rounded text-center text-white bg-orange-500 hover:bg-orange-700' type="register" value="Register to your account" />
            </form>
            <h1 className='text-lg'>Already have an account?<span className=' text-red-500 hover:text-gray-700' onClick={navigateLogin}>Please Login</span></h1>
        </div>
    );
};

export default Register;