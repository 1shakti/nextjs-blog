import ProblemsTable from "@/components/ProblemsTable/ProblemsTable";
import TopBar from "@/components/TopBar/TopBar";

export default function Home() {
	return (
		<main className="bg-dark-layer-2 min-h-screen">
			<TopBar />
			<h1 className="text-gray-700 dark:text-gray-400 text-2xl uppercase font-medium text-center mt-10 mb-5">
				{" "}
				&ldquo; QUALITY OVER QUANTITY &ldquo; 👇
			</h1>
			<div className="relative overflow-x-auto mx-auto px-6 pb-10">
				<table className="w-full max-w-[1200px] sm:w-7/12 mx-auto text-gray-500 dark:text-gray-400 text-sm text-left">
					<thead className="text-xs text-gray-700 uppercase border-b dark:text-gray-400">
						<tr>
							<th scope="col" className="px-1 py-3 w-0 font-medium">STATUS</th>
							<th scope="col" className="px-1 py-3 w-0 font-medium">TITLE</th>
							<th scope="col" className="px-1 py-3 w-0 font-medium">DIFFICULTY</th>
							<th scope="col" className="px-1 py-3 w-0 font-medium">CATEGORY</th>
							<th scope="col" className="px-1 py-3 w-0 font-medium">SOLUTION</th>
						</tr>
					</thead>
					<ProblemsTable />
				</table>
			</div>
		</main>
	);
}
