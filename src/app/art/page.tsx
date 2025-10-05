import { ImagesGrid } from "@/components/image-grid";
import { getPieces, type ImageKitFile } from "../api/pieces";

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
			<div>
				<ImagesGrid images={pieces.files} />
			</div>
		</div>
	);
}
