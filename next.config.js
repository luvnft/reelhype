
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
      images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/t/p/**',
      },
    ],
  },
    typescript: {
    ignoreBuildErrors: true,
  },
};

export default config;
