import { auth } from '@/firebase/firebase';
import React, { FC, useEffect, useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

type ResetPasswordProps = {};

const ResetPassword:FC<ResetPasswordProps> = () => {
    const [email,setEmail] = useState<string>("");
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);   
    
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = e.target;
        setEmail(value);
    }
    
    const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
       const success = await sendPasswordResetEmail(email);
       if(success){
        toast.success("Sent Mail", {position: 'top-center', autoClose: 3000, theme: 'dark'});
       }
    }

    useEffect(() => {
        if(error){
            toast.error(error.message, {position: 'top-center', autoClose: 3000, theme: 'dark'});
        }
    },[error])

    return (
        <form className='space-y-6 px-6 py-4' onSubmit={handleResetPassword}>
            <h3 className='text-white font-medium text-xl'>Reset Password</h3>
            <p className='text-sm text-white'>Forgotten your password? Enter your e-mail address below, and we&apos;ll send you an e-mail allowing you to reset it.</p>
            <div>
                <label className='block text-gray-300 text-sm pb-2 font-medium'>Your email</label>
                <input type="email" name='email' id="email"
                className='w-full sm:text-sm text-white bg-gray-600 rounded-lg p-2.5 outline-none border-2 border-gray-500 focus:border-blue-500 placeholder-gray-400'
                placeholder='name@company.com'
                onChange={handleChangeInput}
                />
            </div>
            <button className='w-full text-center text-white font-medium text-sm px-3 py-2.5 rounded-lg bg-brand-orange hover:bg-brand-orange-s focus:ring-blue-300 focus:ring-4'>
                Reset Password
            </button>
        </form>
    )
}
export default ResetPassword;