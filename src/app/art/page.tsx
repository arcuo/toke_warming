import { ImagesGrid } from "@/components/image-grid";
import Image from "next/image";

function getRandomHexColor() {
	return `${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function randomSize() {
	return Math.floor(Math.random() * 100) + 100;
}

export default function Home() {
	return (
		<ImagesGrid
			images={Array(10)
				.fill(0)
				.map(
					(_, i) =>
						`https://placehold.co/${randomSize()}x${randomSize()}/${getRandomHexColor()}/FFFFFF/png`,
				)}
		/>
	);
}
