import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error) {

        errorElement = <div>
            <p className='text-bold text-rose-600'>Error:{error.message}</p>
        </div>

    }
    if (user) {
        navigate('/')
    }
    return (
        <div className='text-center'>

            <div className='text-lg text-bold'>Or</div>
            <div><button onClick={() => signInWithGoogle()} className='rounded bg-amber-400 px-5 py-2'>SignIn using Google</button></div>
            {errorElement}
        </div>
    );
};

export default SocialLogin;