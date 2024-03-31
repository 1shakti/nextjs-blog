import Link from "next/link";
import React, { FC } from "react";

type TopBarProps = {};

const TopBar: FC<TopBarProps> = () => {
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
					<Link href="/auth">
						<button className="py-1 px-2 bg-dark-fill-3 cursor-pointer rounded">Sign In</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
export default TopBar;
