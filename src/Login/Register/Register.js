import React from 'react';
import './Register.css'
const Register = () => {
    return (
        <div className='register-form'>
            <h2 className='text-5xl mb-4 text-center text-bold text-orange-600'>Register Now</h2>
            <form>
                <input className='border' type="name" name="name" id="" placeholder="Enter your name" required />
                <input className='border' type="email" name="email" id="" placeholder="Enter your email" required />
                <input className='border' type="password" name="password" id="" placeholder="Enter your password" required />
                <input className='rounded text-center text-white bg-orange-500 hover:bg-orange-700' type="register" value="Register to your account" />
            </form>
        </div>
    );
};

export default Register;