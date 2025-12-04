"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const navPages: { path: string; title: string; h1: string }[] = [
	{ path: "/", title: "Home", h1: "Hello!" },
	{ path: "/art", title: "Artworks", h1: "My artworks" },
	{ path: "/contact", title: "Commission", h1: "I do commission work" },
];

const MotionLink = motion.create(Link);

export const Header = () => {
	const pathname = usePathname();

	return (
		<motion.header
			className={cn(
				"items-top fixed top-0 right-0 left-0 flex justify-between gap-15 overflow-hidden px-10 py-5",
			)}
			id="main-header"
			initial="hidden"
			animate="visible"
			exit="hidden"
			transition={{ duration: 1.5, staggerChildren: 0.25 }}
			view-transition-name="header"
		>
			<MotionLink
				href="/"
				className="h-fit w-fit font-bold text-2xl uppercase"
				id="artist-title"
				variants={{
					hidden: {
						y: -50,
					},
					visible: {
						y: 0,
					},
				}}
				transition={{ ease: "easeOut" }}
				view-transition-name="name"
				initial="nohover"
				whileHover="hover"
			>
				Toke{" "}
				<motion.div
					className="inline-block"
					animate={pathname === "/" ? "hover" : "nohover"}
					transition={{ duration: 0.2 }}
					variants={{
						nohover: {
							filter: "hue-rotate(-90deg)",
						},
						hover: {
							filter: "none",
						},
					}}
				>
					🔥
				</motion.div>
			</MotionLink>
			<motion.nav
				className="text-[1rem]"
				initial="hidden"
				animate="visible"
				exit="hidden"
				transition={{ staggerChildren: 0.15 }}
			>
				<ul className="flex flex-col items-end sm:gap-5">
					{navPages.slice(1).map((it, i) => (
						<motion.li
							key={i}
							className={cn(
								"relative px-2 py-1 hover:font-bold hover:opacity-100 group-hover:font-normal group-hover:opacity-80",
								{ "font-bold": pathname === it.path },
							)}
							variants={{
								hidden: {
									opacity: 0,
									x: 50,
								},
								visible: {
									opacity: 1,
									x: 0,
								},
							}}
						>
							<AnimatePresence>
								{pathname === it.path && (
									<motion.div
										layoutId="navigation-background"
										variants={{
											hidden: { opacity: 0 },
											visible: { opacity: 1 },
										}}
										exit="hidden"
										initial="hidden"
										animate="visible"
										className="-z-10 absolute inset-0 rounded-md border-1 border-neutral-900/10"
									/>
								)}
							</AnimatePresence>
							<Link href={it.path} className="z-10">
								{it.title}
							</Link>
						</motion.li>
					))}
				</ul>
			</motion.nav>
		</motion.header>
	);
};
