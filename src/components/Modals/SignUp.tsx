import React, { FC } from 'react';

type SignUpProps = {
    
};

const SignUp:FC<SignUpProps> = () => {
    
    return <form className='space-y-6 px-6 pb-4'>
        <h3 className='text-xl text-white font-medium'>Register to LeetClone</h3>
        <div>
            <label htmlFor='email' className='text-gray-300 text-sm block pb-2 font-medium'>Email</label>
            <input type='email' name='email' id='email' className='w-full rounded-lg border-2 outline-none sm:text-sm text-white p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500'
            placeholder='name@company.com' />
        </div>
        <div>
            <label htmlFor='display_name' className='text-gray-300 text-sm block pb-2 font-medium'>Display Name</label>
            <input type='text' name='display_name' id='display_name' className='w-full rounded-lg border-2 outline-none sm:text-sm text-white p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500'
            placeholder='John Doe'  />
        </div>
        <div>
            <label htmlFor='password' className='text-gray-300 text-sm block pb-2 font-medium'>Password</label>
            <input type='password' name='password' id='password' className='w-full rounded-lg border-2 outline-none sm:text-sm text-white p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500' 
            placeholder='********'
            />
        </div>
        <button className='w-full bg-brand-orange text-sm text-white font-medium rounded-lg text-center px-3 py-2.5 hover:bg-brand-orange-s focus:ring-4 focus:ring-blue-300'>
            Register
        </button>
        <div className='text-gray-300 font-medium text-sm'>
        Already have an account? <a href='#' className='text-blue-700 hover:underline'>Log In</a>
        </div>
    </form>
}
export default SignUp;