import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			new URL("https://images.beta.cosmos.so/**?format=jpeg"),
			new URL("https://placehold.co/**"),
			new URL("https://ik.imagekit.io/tokewarming/**"),
		],
	},
	
};

export default nextConfig;
