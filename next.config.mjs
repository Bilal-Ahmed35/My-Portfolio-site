/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
      {
        protocol: "https",
        hostname: "www.vectorlogo.zone",
      },
      {
        protocol: "https",
        hostname: "jwt.io",
      },
      {
        protocol: "https",
        hostname: "www.gstatic.com",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Transpile Three.js packages for SSR compatibility
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
};

export default nextConfig;
