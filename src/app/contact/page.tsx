import { ButtonLink } from "@/components/ui/button";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";

export default function Contact() {
	return (
		<div className="flex flex-col gap-4 text-center">
            <p>I am located in Aarhus, Denmark.</p>
			<p>
				If you would like to contact me, please send me a message on my socials.
			</p>
			<div className="flex justify-center gap-4">
				<ButtonLink href="todo" target="_blank" size="icon" variant="outline" className="size-12 rounded-full">
					<InstagramIcon className="size-6 stroke-1" />
				</ButtonLink>
                <ButtonLink href="todo" target="_blank" size="icon" variant="outline" className="size-12 rounded-full">
					<FacebookIcon className="size-6 stroke-1" />
				</ButtonLink>
                <ButtonLink href="todo" target="_blank" size="icon" variant="outline" className="size-12 rounded-full">
					<TwitterIcon className="size-6 stroke-1" />
				</ButtonLink>
			</div>
		</div>
	);
}
