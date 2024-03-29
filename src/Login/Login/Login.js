import React, { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Login.css'
import auth from '../../Firebase/Firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { sendPasswordResetEmail } from 'firebase/auth';

const Login = () => {
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const handleLogin = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }



    const navigate = useNavigate()
    const navigateRegister = e => {
        navigate('/register')
    }
    if (user) {
        navigate(from, { replace: true });
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email)
        alert('Email Sent')
    }
    return (
        <div className='login-form'>
            <h2 className='mb-4 text-bold text-center text-5xl text-orange-600'>Please Login</h2>
            <form onSubmit={handleLogin}>
                <input ref={emailRef} className='border' type="email" name="email" id="" placeholder="Enter your email" required />
                <input ref={passwordRef} className='border' type="password" name="password" id="" placeholder="Enter your password" required />
                <input className='rounded text-2xl text-center text-white bg-orange-500 hover:bg-orange-700' type="submit" value="Login to your account" />
            </form>
            <h1 className='text-lg'>New to Champ MediaLab?<span className=' text-red-500 hover:text-gray-700' onClick={navigateRegister}>Please Register</span></h1>
            <h1 className='text-lg'>Forgot your password?<span className=' text-red-500 hover:text-gray-700' onClick={resetPassword}>Reset Now</span></h1>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;