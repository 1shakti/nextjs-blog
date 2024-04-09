import { authModalAtom } from "@/atoms/authModalAtom";
import { auth } from "@/firebase/firebase";
import { modalTypeState } from "@/types/authModal";
import { loginFormData } from "@/types/userDetails";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { useSetRecoilState } from "recoil";

type LoginProps = {};

const Login: FC<LoginProps> = () => {
	const setAuthModalState = useSetRecoilState(authModalAtom);
    const [formData, setFormData] = useState<loginFormData>({
        email:'',
        password:''
    });
    const router = useRouter();
	const handleClick = (type: modalTypeState["type"]) => {
		setAuthModalState((prev) => ({ ...prev, type }));
	};

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

	const loginHandler = async (
		e: React.FormEvent<HTMLFormElement>
	): Promise<void> => {
        e.preventDefault();
        if(formData.email === "" && formData.password === "") {
			toast.info("All fields are mandatory", {position: 'top-center', autoClose: 3000, theme: 'dark'});
			return;
		} 

        try{
            const newUser = await signInWithEmailAndPassword(formData.email, formData.password);
            if(!newUser) return;
            router.push('/');
        }catch(e:any){
			toast.error(e.message, {position: 'top-center', autoClose: 3000, theme: 'dark'});
        }
    };

    useEffect(() => {
        if(error) toast.error(error.message, {position: 'top-center', autoClose: 3000, theme: 'dark'});
    },[error])

	return (
		<form className="space-y-6 px-6 pb-4" onSubmit={loginHandler}>
			<h3 className="text-xl text-white font-medium">Sign in to LeetClone</h3>
			<div>
				<label
					htmlFor="email"
					className="text-sm font-medium block mb-2 text-gray-300"
				>
					Your email
				</label>
				<input
					type="email"
					name="email"
					id="email"
                    onChange={handleChangeInput}
					className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
					placeholder="name@company.com"
				/>
			</div>
			<div>
				<label
					htmlFor="password"
					className="text-sm font-medium block mb-2 text-gray-300"
				>
					Your password
				</label>
				<input
					type="password"
					name="password"
					id="password"
                    onChange={handleChangeInput}
					className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
					placeholder="********"
				/>
			</div>
			<button
				type="submit"
				className="rounded-lg text-sm font-medium bg-brand-orange w-full text-white px-3 py-2.5 text-center focus:ring-blue-300 hover:bg-brand-orange-s"
			>
				{loading ? "Logging..." : "Login"}
			</button>
			<button
				className="w-full flex justify-end"
				onClick={() => handleClick("forgotPassword")}
			>
				<a
					href="#"
					className="text-brand-orange block text-sm hover:underline text-right"
				>
					Forgot Password?
				</a>
			</button>
			<div className="text-sm font-medium text-gray-300">
				Not registered?{" "}
				<a
					href="#"
					className="text-blue-700 hover:underline"
					onClick={() => handleClick("register")}
				>
					Create account
				</a>
			</div>
		</form>
	);
};

export default Login;
