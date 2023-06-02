/** @type {import('next').NextConfig} */
require("dotenv").config();

const nextConfig = {
  env: {
    THE_DOG_API:process.env.THE_DOG_API,
    URL_TO_API:process.env.URL_TO_API
  },
  images: {
    domains: ["plus.unsplash.com", "unsplash.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
