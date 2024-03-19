import React, { FC } from "react";
import { IoClose } from "react-icons/io5";
import Login from "./Login";

type AuthModalProps = {};

const AuthModal: FC<AuthModalProps> = () => {
	return (
		<>
			<div className="absolute w-full h-full top-0 left-0 bg-black opacity-60 flex items-center justify-center">
            </div>
			<div className="absolute w-full sm:w-[450px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center">
				<div className="relative w-full h-full mx-auto flex items-center justify-center">
					<div className=" relative rounded-lg w-full bg-gradient-to-b from-brand-orange to-slate-900 mx-6">
						<div className="flex justify-end p-2">
							<button className=" bg-transparent rounded-lg ml-auto text-sm inline-flex items-center text-white p-1.5 hover:text-white hover:bg-black">
								<IoClose className="h-5 w-5" />
							</button>
						</div>
						<Login />
					</div>
				</div>
			</div>
		</>
	);
};
export default AuthModal;
