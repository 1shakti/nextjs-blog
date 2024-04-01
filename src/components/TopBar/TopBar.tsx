import { auth } from "@/firebase/firebase";
import Link from "next/link";
import React, { FC } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Logout from "../buttons/Logout";
import { useSetRecoilState } from "recoil";
import { authModalAtom } from "@/atoms/authModalAtom";
import { authModalState } from "@/types/authModal";

type TopBarProps = {};

const TopBar: FC<TopBarProps> = () => {
	const setAuthState = useSetRecoilState<authModalState>(authModalAtom);
	const [user] = useAuthState(auth);

	const handleSetAuthState = () => {
		setAuthState((prev):authModalState => ({
			...prev,
			isOpen: true,
			type: "login"
		}))
	}

	return (
		<nav className="relative w-full h-[50px] shrink-0 px-5 bg-dark-layer-1 flex items-center text-dark-gray-7">
			<div className="flex items-center justify-between w-full max-w-[1200px] mx-auto">
				<Link href="/" className="h-[22px] flex-1">
					<img src="logo-full.png" alt="logo" className="h-full" />
				</Link>
				<div className="flex items-center space-x-4 flex-1 justify-end">
					<div>
						<a
							href="https://www.buymeacoffee.com/burakorkmezz"
							target="_blank"
							rel="noreferrer"
                            className="bg-dark-fill-3 px-3 py-1.5 cursor-pointer rounded text-brand-orange hover:bg-dark-fill-2"
						>
							Premium
						</a>
					</div>
					{!user && (<Link href="/auth" onClick={handleSetAuthState}>
						<button className="py-1 px-2 bg-dark-fill-3 cursor-pointer rounded">Sign In</button>
					</Link>
					)}
					{user && (
						<div className="cursor-pointer group relative">
							<img src="/avatar.png" alt="user profile img" className="h-8 w-8 rounded-full"/>
							<div className="absolute bg-dark-layer-1 mx-auto text-brand-orange left-2/4 -translate-x-2/4 top-10 z-40 scale-0 group-hover:scale-100 p-2 rounded shadow-lg transition-all duration-300 ease-in-out">
								<p className="text-sm">{user.email}</p>
							</div>
						</div>
					)}
					{user && (
						<Logout />
					)}
				</div>
			</div>
		</nav>
	);
};
export default TopBar;
