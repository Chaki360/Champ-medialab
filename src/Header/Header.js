import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../Firebase/Firebase.init';

const Header = () => {
    const [user] = useAuthState(auth)
    const handleLogOut = () => {
        signOut(auth);
    }
    return (

        <div className=' sticky top-0 overflow-hidden'>
            <div className=' bg-white px-12 py-8 flex justify-center md:justify-between'>
                <div><Link to='/' className='text-3xl font-sans font-extrabold text-orange-500 hover:text-orange-700'>Champ MediaLab</Link></div>
                <div className='flex gap-4 font-semibold text-orange-500 text-xl'>
                    <Link to='/'>Home</Link>

                    <Link to='/blogs'>Blogs</Link>
                    <Link to='/about'>About</Link>

                    {
                        user ?
                            <button className='flex gap-4 font-semibold text-orange-500 text-xl' onClick={handleLogOut}>LogOut</button>
                            :
                            <Link to='/login'>Login</Link>
                    }

                </div>
            </div>

        </div>
    );
};

export default Header;