import { problems } from "@/mockProblems/mockProblems";
import React, { FC, useEffect, useState } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import YouTube from "react-youtube";

type ProblemsTableProps = {};
interface difficultyColor {
	Easy: string;
	Hard: string;
	Medium: string;
	[key: string]: string;
}

interface youtubePlayerTy {
    isOpen: boolean;
    videoId: string | undefined;
}

const ProblemsTable: FC<ProblemsTableProps> = () => {
    const [youtubePlayer, setYoutubePlayer] = useState<youtubePlayerTy>({
        isOpen: false,
        videoId: "",
    })

	const difficultyColor: difficultyColor = {
		Easy: "text-dark-green-s",
		Hard: "text-red-500",
		Medium: "text-dark-yellow",
	};

	const handleYoutubeModal = (videoId: string | undefined):void => {
        setYoutubePlayer(({
            isOpen:true,
            videoId
        }))
    };

    const closeModal = () => {
        setYoutubePlayer((prev:youtubePlayerTy) => ({
            ...prev,
            isOpen:false
        }))
    }

    useEffect(() => {

        const handleEsc = (e:KeyboardEvent) => {
            if(e.key === "Escape"){
                closeModal()
            }
        }

        window.addEventListener('keydown',handleEsc)

        return () => {
            window.removeEventListener('keydown',handleEsc)
        }
    },[])

	return (
		<>
			<tbody className="text-white">
				{problems.map((problem, idx) => {
					return (
						<tr
							key={idx}
							className={`${idx % 2 == 1 ? "bg-dark-layer-1" : ""}`}
						>
							<th className="px-2 py-4 font-medium whitespace-nowrap text-dark-green-s">
								<BsCheckCircle fontSize={18} width={18} />
							</th>
							<td className="px-4 py-6">
								<Link
									href={"#"}
									className=" hover:text-blue-600 cursor-pointer"
								>
									{problem.title}
								</Link>
							</td>
							<td
								className={`px-4 py-6 ${difficultyColor[problem.difficulty]}`}
							>
								{problem.difficulty}
							</td>
							<td className="px-4 py-6">{problem.category}</td>
							<td className="px-4 py-6">
								{problem.videoId ? (
									<AiFillYoutube
										fontSize={28}
										className="cursor-pointer hover:text-red-600"
										onClick={() => handleYoutubeModal(problem.videoId)}
									/>
								) : (
									<p className="text-gray-400">Coming soon</p>
								)}
							</td>
						</tr>
					);
				})}
			</tbody>
			{youtubePlayer.isOpen && <tfoot className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
				<div className="w-full h-full top-0 left-0 z-10 bg-black opacity-70 absolute" onClick={closeModal}></div>
				<div className="w-full h-full px-6 z-50 max-w-4xl relative">
					<div className=" relative w-full h-full flex items-center justify-center">
						<div className="w-full relative">
							<IoClose fontSize={35} className="cursor-pointer absolute -top-16 right-0" onClick={closeModal} />
							<YouTube
								videoId="xty7fr-k0TU"
								iframeClassName="w-full min-h-[500px]"
								loading="lazy"
							/>
						</div>
					</div>
				</div>
			</tfoot>}
		</>
	);
};
export default ProblemsTable;
