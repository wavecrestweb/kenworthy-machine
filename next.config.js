/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/admin",
        destination: "/admin/index.html",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.tina.io",
        port: "",
        pathname: `/${process.env.NEXT_PUBLIC_TINA_CLIENT_ID}/**`,
      },
    ],
  },
};

module.exports = nextConfig;
