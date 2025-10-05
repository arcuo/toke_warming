import { ImagesGrid } from "@/components/image-grid";
import { getPieces, type ImageKitFile } from "../api/pieces";

function getRandomHexColor() {
	return `${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function randomSize() {
	return Math.floor(Math.random() * 600) + 400;
}

export const metadata = {
	title: "Art pieces",
	description: "A collection of my artworks in linocut, painting and sculpture",
};

export default async function Art() {
	const pieces = (await getPieces().then((res) => res.json())) as {
		files: ImageKitFile[];
	};

	return (
		<div className="flex flex-col items-center justify-center gap-10">
			<p>
				These are a few of my pieces <i>Click on them to see more!</i>
			</p>
			<ImagesGrid images={pieces.files} />
		</div>
	);
}
