import { problems } from "@/mockProblems/mockProblems";
import React, { FC } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import Link from "next/link";

type ProblemsTableProps = {};
interface difficultyColor {
    "Easy": string
    "Hard": string
    "Medium": string
    [key: string]: string
}

const ProblemsTable: FC<ProblemsTableProps> = () => {

    const difficultyColor:difficultyColor = {
        "Easy": "text-dark-green-s",
        "Hard": "text-red-500",
        "Medium": "text-dark-yellow"
    }

	return (
		<tbody className="text-white">
			{problems.map((problem, idx) => {
				return (
					<tr key={idx} className={`${idx % 2 == 1 ? 'bg-dark-layer-1' : ''}`}>
						<th className="px-2 py-4 font-medium whitespace-nowrap text-dark-green-s">
                            <BsCheckCircle fontSize={18} width={18} />
                        </th>
                        <td className="px-4 py-6">
                            <Link href={"#"} className=" hover:text-blue-600 cursor-pointer">
                                {problem.title}
                            </Link>
                        </td>
                        <td className={`px-4 py-6 ${difficultyColor[problem.difficulty]}`}>
                        {problem.difficulty}
                        </td>    
                        <td className="px-4 py-6">
                            {problem.category}
                        </td>
                        <td className="px-4 py-6">
                            {problem.videoId ?  <AiFillYoutube fontSize={28} className="cursor-pointer hover:text-red-600" /> : <p className="text-gray-400">Coming soon</p>}
                        </td>
					</tr>
				);
			})}
		</tbody>
	);
};
export default ProblemsTable;
