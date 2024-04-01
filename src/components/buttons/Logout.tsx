import { auth } from "@/firebase/firebase";
import React, { FC } from "react";
import { useSignOut } from "react-firebase-hooks/auth";
import { FiLogOut } from "react-icons/fi";

type LogoutProps = {};

const Logout: FC<LogoutProps> = () => {
    const [signOut, loading, error] = useSignOut(auth);

    const handleLogout = () => {
        signOut();
    }

	return (
		<button className="text-brand-orange bg-dark-fill-3 px-3 py-1.5 rounded  cursor-pointer" onClick={handleLogout}>
			<FiLogOut />
		</button>
	);
};
export default Logout;
