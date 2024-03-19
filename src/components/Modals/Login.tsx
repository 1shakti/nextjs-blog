import Link from 'next/link';
import React, {FC} from 'react';

type LoginProps = {
    
};

const Login:FC<LoginProps> = () => {
    
    return (
        <form className='space-y-6 px-8 pb-6'>
            <h3 className='text-xl text-white font-medium'>Sign in to LeetClone</h3>
            <div>
                <label htmlFor='email' className='text-sm font-medium block mb-2 text-gray-300'>Your email</label>
                <input type="email" name='email' id="email"
                className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white'
                placeholder='name@company.com'
                />
            </div>
            <div>
                <label htmlFor='password' className='text-sm font-medium block mb-2 text-gray-300'>Your password</label>
                <input type="password" name='password' id="password"
                className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white'
                placeholder='********'
                />
            </div>
                <button type='submit' className='rounded-lg text-sm font-medium bg-brand-orange w-full text-white px-3 py-2.5 text-center focus:ring-blue-300 hover:bg-brand-orange-s'>Login</button>
            <button className='w-full flex justify-end'>
                <a href="#" className='text-brand-orange block text-sm hover:underline text-right'>Forgot Password?</a>
            </button>
            <div className='text-sm font-medium text-gray-500'>
            Not registered? <a href='#' className='text-blue-700 hover:underline'>Create account</a>
            </div>
        </form>
    )
}

export default Login;