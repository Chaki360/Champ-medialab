
import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useUpdateProfile, } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import './Register.css'
const Register = () => {
    const nameRef = useRef('')
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,] = useCreateUserWithEmailAndPassword(auth, { emailVerificationOptions: true });
    const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);
    const handleRegister = e => {
        e.preventDefault();
        const name = nameRef.current.value
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email, password);

    }
    const navigate = useNavigate()
    const navigateLogin = e => {
        navigate('/login')
    }
    if (user) {
        navigate('/')
    }

    return (
        <div className='register-form'>
            <h2 className='text-5xl mb-4 text-center text-bold text-orange-600'>Register Now</h2>
            <form onSubmit={handleRegister}>
                <input ref={nameRef} className='border' type="name" name="name" id="" placeholder="Enter your name" required />
                <input ref={emailRef} className='border' type="email" name="email" id="" placeholder="Enter your email" required />
                <input ref={passwordRef} className='border' type="password" name="password" id="" placeholder="Enter your password" required />
                <input className='rounded text-center text-white bg-orange-500 hover:bg-orange-700' type="submit" value="Register to your account" />
            </form>
            <h1 className='text-lg'>Already have an account?<span className=' text-red-500 hover:text-gray-700' onClick={navigateLogin}>Please Login</span></h1>
        </div>
    );
};

export default Register;