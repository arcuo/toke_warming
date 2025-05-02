"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import type React from "react";
import { navPages } from "./header";
import { cn } from "@/lib/utils";

const variants = {
	hidden: { opacity: 0, y: -50 },
	enter: { opacity: 1, y: 0 },
};

interface MainProps extends React.ComponentProps<typeof motion.main> {
	children: React.ReactNode;
}

export function Main({ children, className, ...props }: MainProps) {
	const pathname = usePathname();
	const title = navPages.find((it) => it.path === pathname)?.h1;
	return (
		<AnimatePresence>
			<motion.main
				key={pathname}
				initial="hidden"
				animate="enter"
				transition={{ duration: 0.5, ease: "easeOut" }}
				style={{
					scrollbarGutter: "stable",
					scrollbarWidth: "thin",
					scrollbarColor: "var(--foreground) var(--background)",
				}}
				className={cn("overflow-y-auto", className)}
				{...props}
			>
				<motion.div
					className="mb-5 flex justify-center py-5"
					variants={{
						hidden: { scale: 0.8, opacity: 0 },
						enter: { scale: 1, opacity: 1 },
					}}
				>
					<h1 className="font-bold text-4xl">{title}</h1>
				</motion.div>
				<motion.div variants={variants} className="lg:px-40">{children}</motion.div>
			</motion.main>
		</AnimatePresence>
	);
}
