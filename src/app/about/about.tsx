"use client";

import { ButtonLink } from "@/components/ui/button";
import { motion, type Variant } from "motion/react";
import Image from "next/image";

const fromLeft: Variant = {
	x: -50,
	opacity: 0,
};

const fromRight: Variant = {
	x: 50,
	opacity: 0,
};

const fromTop: Variant = {
	y: 50,
	opacity: 0,
};

const fromBottom: Variant = {
	y: -50,
	opacity: 0,
};

const visible: Variant = {
	x: 0,
	y: 0,
	opacity: 1,
};

const MotionImage = motion.create(Image);

export function AboutPage() {
	return (
		<motion.div
			className="flex flex-col items-center justify-center gap-10"
			initial="hidden"
			animate="visible"
			exit="hidden"
			transition={{ staggerChildren: 0.5, duration: 0.5 }}
		>
			<MotionImage
				variants={{ hidden: fromTop, visible }}
				src="https://placehold.co/1200x400/png"
				width={1200}
				height={400}
				alt="Toke Warming"
				className="rounded-md"
			/>

			<motion.p
				variants={{
					hidden: fromRight,
					visible,
				}}
				className="text-2xl"
			>
				I am Toke Warming
			</motion.p>

			<motion.p variants={{ hidden: fromBottom, visible }}>
				I am a self-taught artist from Aarhus, Denmark. I create art that is
				unique, original and thought-provoking. I work in many mediums,
				including linocut, painting and sculpture.
			</motion.p>

			<motion.div variants={{ hidden: fromLeft, visible }}>
				<ButtonLink href="/art" variant={"outline"}>
					Check out my art!
				</ButtonLink>
			</motion.div>
		</motion.div>
	);
}
