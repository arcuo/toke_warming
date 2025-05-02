import { ButtonLink } from "@/components/ui/button";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import { DK } from "./dk";

export default function Contact() {
	return (
		<div className="flex flex-col gap-10 text-center">
			<p>I am located in Aarhus, Denmark.</p>
			<DK />
			<p>
				If you would like to contact me, feel free to send me a message on Instagram
			</p>
			<div className="flex justify-center gap-4">
				<ButtonLink
					href="https://www.instagram.com/toke_ditlevsen/"
					target="_blank"
					size="icon"
					variant="outline"
					className="size-12 rounded-full"
				>
					<InstagramIcon className="size-6 stroke-1" />
				</ButtonLink>
			</div>
		</div>
	);
}
