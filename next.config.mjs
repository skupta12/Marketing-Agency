/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
				pathname: "/**"
			},
			{
				protocol: "https",
				port: "",
				hostname: "marketing-agency-db.vercel.app",
				pathname: "/**"
			},
		],
	},
};

export default nextConfig;

