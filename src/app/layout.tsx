import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Main } from "@/components/main";

export const metadata: Metadata = {
	title: "Toke Warming",
	description: "Self made artist",
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
				<Main className="flex-2 px-10 py-10">{children}</Main>
			</body>
		</html>
	);
}
