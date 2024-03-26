import React, { FC } from "react";
import { IoClose } from "react-icons/io5";
import Login from "./Login";
import SignUp from "./SignUp";
import ResetPassword from "./ResetPassword";
import { useRecoilValue } from "recoil";
import { authModalAtom } from "@/atoms/authModalAtom";
import { useAuthModal } from "@/hooks/useAuthModal";
import { authModalState } from "@/types/authModal";

type AuthModalProps = {};

const AuthModal: FC<AuthModalProps> = () => {
    const authModal:authModalState = useRecoilValue(authModalAtom);
    const closeModal = useAuthModal();
	return (
		<>
			<div className="absolute w-full h-full top-0 left-0 bg-black opacity-60 flex items-center justify-center" onClick={closeModal}>
            </div>
			<div className="absolute w-full sm:w-[450px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center">
				<div className="relative w-full h-full mx-auto flex items-center justify-center">
					<div className=" relative rounded-lg w-full bg-gradient-to-b from-brand-orange to-slate-900 mx-6">
						<div className="flex justify-end p-2">
							<button className=" bg-transparent rounded-lg ml-auto text-sm inline-flex items-center text-white p-1.5 hover:text-white hover:bg-black" onClick={closeModal}>
								<IoClose className="h-5 w-5" />
							</button>
						</div>
                        {authModal.type === "login" ? <Login /> : authModal.type === "register" ? <SignUp /> : <ResetPassword />}
					</div>
				</div>
			</div>
		</>
	);
};
export default AuthModal;
