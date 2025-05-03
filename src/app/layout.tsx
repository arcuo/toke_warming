import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Main } from "@/components/main";

export const metadata: Metadata = {
	title: {
		template: "%s | Toke Warming",
		default: "Toke Warming", // a default is required when creating a template
	},
	description: "Aarhus based artist creating Linocut, painting and sculpture",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="grid h-screen w-screen grid-cols-1 grid-rows-[max-content_auto] overflow-hidden antialiased">
				<Header />
				<Main
					className="flex-2 px-10 pt-10 pb-25 max-sm:mb-20"
					id="main-content"
				>
					{children}
				</Main>
			</body>
		</html>
	);
}
