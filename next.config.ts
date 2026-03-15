import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      { source: "/notes", destination: "/stardust", permanent: false },
      { source: "/margin", destination: "/stardust", permanent: false },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/resume",
        destination: "/abuqais.pdf",
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*{/}?',
        headers: [
          {
            key: 'X-Accel-Buffering',
            value: 'no',
          },
        ],
      },
    ]
  },
};

export default nextConfig;
