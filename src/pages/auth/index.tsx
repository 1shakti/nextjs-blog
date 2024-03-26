import { authModalAtom } from '@/atoms/authModalAtom';
import AuthModal from '@/components/Modals/AuthModal';
import NavBar from '@/components/NavBar/NavBar';
import Head from 'next/head';
import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';

type authProps = {
    
};

const AuthPage:FC<authProps> = () => {
	const authModal = useRecoilValue(authModalAtom);
    return (
        <>
        <Head>
            <title>LeetClone | Auth</title>
        </Head>
		<div className='bg-gradient-to-b from-gray-600 to-black h-screen relative'>
			<div className='max-w-7xl mx-auto'>
				<NavBar />
				<div className='flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none'>
					<img src='/hero.png' alt='Hero img' />
				</div>
			</div>
		</div>
		{authModal.isOpen && <AuthModal />}
        </>

        ) 
}
export default AuthPage;