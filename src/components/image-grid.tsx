"use client";
import { motion } from "motion/react";
import { InView } from "./in-view";
import Image from "next/image";
import { Suspense, useState, type ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function ImagesGrid({ images }: { images: string[] }) {
	return (
		<div className="w-full">
			<div className="h-[1200px] items-end justify-center pb-12">
				<div className="columns-2 gap-4 px-8 sm:columns-3">
					{images.map((imgSrc, i) => {
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
									priority={false}
									src={imgSrc}
									alt={`index: ${i}`}
									width={400}
									height={400}
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
	onLoad,
	className,
	...props
}: ComponentProps<typeof Image>) {
	const [isLoaded, setIsLoaded] = useState(false);
	return (
		<motion.div
			variants={{
				hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
				visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
			}}
			animate={isLoaded ? "visible" : "hidden"}
			className={cn("mb-4", className)}
		>
			<Image
				{...props}
				onLoad={(e) => {
					setIsLoaded(true);
					onLoad?.(e);
				}}
				className="size-full rounded-lg object-contain"
			/>
		</motion.div>
	);
}
