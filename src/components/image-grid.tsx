"use client";

import { motion } from "motion/react";
import { InView } from "./in-view";
import { Image } from "@imagekit/next";
import { useState, type ComponentProps, type PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./ui/dialog";
import { ButtonLink } from "./ui/button";
import type { ImageKitFile } from "@/app/api/pieces";
import classnames from "classnames";

export function ImagesGrid({ images }: { images: ImageKitFile[] }) {
	return (
		<div className="w-full">
			<div className="h-[1200px] items-end justify-center pb-12">
				<div className="columns-2 gap-4 px-8 pb-8 sm:columns-3">
					{images.map((file, i) => {
						return (
							<InView
								key={i}
								viewOptions={{ once: true, margin: "0px 0px -250px 0px" }}
								variants={{
									hidden: { opacity: 0 },
									visible: {
										opacity: 1,
										transition: { staggerChildren: 0.09 },
									},
								}}
							>
								<AnimatedLoadingImage
									imageProps={{
										loading: i < 4 ? "eager" : "lazy",
									}}
									file={file}
								/>
							</InView>
						);
					})}
				</div>
			</div>
		</div>
	);
}

function AnimatedLoadingImage({
	imageProps,
	file,
}: {
	file: ImageKitFile;
	imageProps: Partial<ComponentProps<typeof Image>>;
}) {
	const [isLoaded, setIsLoaded] = useState(false);
	return (
		<motion.div
			variants={{
				hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
				visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
			}}
			animate={isLoaded ? "visible" : "hidden"}
			className={cn("mb-4", imageProps.className)}
		>
			<ImageDialog file={file}>
				<div className="overflow-hidden rounded-lg">
					<Image
						urlEndpoint="https://ik.imagekit.io/tokewarming/"
						src={`/${file.filePath}`}
						onLoad={(e) => {
							setIsLoaded(true);
							imageProps.onLoad?.(e);
						}}
						alt={file.name}
						width={file.width / 2}
						height={file.height / 2}
						{...imageProps}
						className={classnames("size-full origin-center scale-180 object-cover transition-transform hover:scale-120", imageProps.className)}
					/>
				</div>
			</ImageDialog>
		</motion.div>
	);
}

function ImageDialog({
	file,
	children: trigger,
}: PropsWithChildren<{ file: ImageKitFile }>) {
	return (
		<Dialog>
			<DialogTrigger asChild className="cursor-pointer">
				{trigger}
			</DialogTrigger>
			<DialogContent className="flex w-[min(fit-content,95vw)] flex-col gap-0 p-0 sm:max-h-[min(1200px,80vh)] [&>button:last-child]:top-3.5">
				<DialogHeader className="contents space-y-0 text-left">
					<DialogTitle className="border-b px-6 py-4 text-base">
						{file.customMetadata?.name || "Unnamed piece"}
						{file.customMetadata?.medium && (
							<> - {file.customMetadata.medium}</>
						)}
						<DialogDescription className="mt-2">
							{file.customMetadata?.description || "No description provided"}
						</DialogDescription>
					</DialogTitle>
					<div className="overflow-y-auto">
						<div className="px-6 py-4">
							<div className="space-y-4 [&_strong]:font-semibold [&_strong]:text-foreground">
								<div className="flex justify-center space-y-1">
									<Image
										urlEndpoint={"https://ik.imagekit.io/tokewarming/"}
										src={`/${file.filePath}`}
										alt="Toke Warming"
										loading="lazy"
										width={1200}
										height={1200}
										className=" rounded-md"
									/>
								</div>
							</div>
						</div>
					</div>
					<DialogFooter className="border-t px-6 py-4 sm:items-center">
						<ButtonLink href={"/contact"} variant={"outline"}>
							Contact me for more information
						</ButtonLink>
					</DialogFooter>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
