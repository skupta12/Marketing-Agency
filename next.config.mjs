/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
				port: "3000"
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

