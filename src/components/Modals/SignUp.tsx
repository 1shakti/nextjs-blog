import { authModalAtom } from "@/atoms/authModalAtom";
import React, { FC, useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import { useRouter } from "next/router";

type SignUpProps = {};
interface formData {
	email: string;
	display_name: string;
	password: string;
}

const SignUp: FC<SignUpProps> = () => {
	const setAuthModalState = useSetRecoilState(authModalAtom);
	const [formData, setFormData] = useState<formData>({
		email: "",
		display_name: "",
		password: "",
	});
	const router = useRouter();
	const handClick = () => {
		setAuthModalState((prev) => ({ ...prev, type: "login" }));
	};

	const [createUserWithEmailAndPassword, user, loading, error] =
		useCreateUserWithEmailAndPassword(auth);

	const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const submitHandler = async (
		e: React.FormEvent<HTMLFormElement>
	): Promise<void> => {
		e.preventDefault();
		if (
			formData.email === "" &&
			formData.display_name === "" &&
			formData.password === ""
		)
			return alert("All fields are mandatory");
		try {
			const newUser = await createUserWithEmailAndPassword(
				formData.email,
				formData.password
			);
			if (!newUser) return;
			router.push("/");
		} catch (e: any) {
			alert(e.message);
		}
	};

    useEffect(() => {
        if(error) alert(error.message)
    },[error])

	return (
		<form className="space-y-6 px-6 pb-4" onSubmit={submitHandler}>
			<h3 className="text-xl text-white font-medium">Register to LeetClone</h3>
			<div>
				<label
					htmlFor="email"
					className="text-gray-300 text-sm block pb-2 font-medium"
				>
					Email
				</label>
				<input
					type="email"
					name="email"
					id="email"
					onChange={handleChangeInput}
					className="w-full rounded-lg border-2 outline-none sm:text-sm text-white p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
					placeholder="name@company.com"
				/>
			</div>
			<div>
				<label
					htmlFor="display_name"
					className="text-gray-300 text-sm block pb-2 font-medium"
				>
					Display Name
				</label>
				<input
					type="text"
					name="display_name"
					id="display_name"
					onChange={handleChangeInput}
					className="w-full rounded-lg border-2 outline-none sm:text-sm text-white p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
					placeholder="John Doe"
				/>
			</div>
			<div>
				<label
					htmlFor="password"
					className="text-gray-300 text-sm block pb-2 font-medium"
				>
					Password
				</label>
				<input
					type="password"
					name="password"
					id="password"
					onChange={handleChangeInput}
					className="w-full rounded-lg border-2 outline-none sm:text-sm text-white p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
					placeholder="********"
				/>
			</div>
			<button className="w-full bg-brand-orange text-sm text-white font-medium rounded-lg text-center px-3 py-2.5 hover:bg-brand-orange-s focus:ring-4 focus:ring-blue-300">
				{loading ? "Registering..." : "Register"}
			</button>
			<div className="text-gray-300 font-medium text-sm">
				Already have an account?{" "}
				<a
					href="#"
					className="text-blue-700 hover:underline"
					onClick={handClick}
				>
					Log In
				</a>
			</div>
		</form>
	);
};
export default SignUp;
