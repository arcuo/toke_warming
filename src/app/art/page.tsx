import { ImagesGrid } from "@/components/image-grid";
import Image from "next/image";

function getRandomHexColor() {
	return `${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function randomSize() {
	return Math.floor(Math.random() * 600) + 400;
}

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center gap-10">
		<p>These are a few of my pieces <i>Click on them to see more!</i></p>
			<ImagesGrid
				images={Array(10)
					.fill(0)
					.map(
						(_, i) =>
							`https://placehold.co/${randomSize()}x${randomSize()}/${getRandomHexColor()}/FFFFFF/png`,
					)}
			/>
		</div>
	);
}
