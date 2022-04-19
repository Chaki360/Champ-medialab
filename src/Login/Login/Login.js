import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const handleLogin = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

    }



    const navigate = useNavigate()
    const navigateRegister = e => {
        navigate('/register')
    }
    return (
        <div className='login-form'>
            <h2 className='mb-4 text-bold text-center text-5xl text-orange-600'>Please Login</h2>
            <form onSubmit={handleLogin}>
                <input ref={emailRef} className='border' type="email" name="email" id="" placeholder="Enter your email" required />
                <input ref={passwordRef} className='border' type="password" name="password" id="" placeholder="Enter your password" required />
                <input className='rounded text-2xl text-center text-white bg-orange-500 hover:bg-orange-700' type="submit" value="Login to your account" />
            </form>
            <h1 className='text-lg'>New to Champ PhotoLab?<span className=' text-red-500 hover:text-gray-700' onClick={navigateRegister}>Please Register</span></h1>

        </div>
    );
};

export default Login;