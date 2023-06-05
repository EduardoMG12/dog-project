/** @type {import('next').NextConfig} */
require("dotenv").config();

const nextConfig = {
  env: {
    THE_DOG_API:process.env.THE_DOG_API,
    URL_TO_API:process.env.URL_TO_API
  },
  images: {
    domains: ["plus.unsplash.com", "unsplash.com", "cdn2.thedogapi.com"],
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
      {
        protocol: "https",
        hostname: "cdn2.thedogapi.com",
      },
    ],
  },
};

module.exports = nextConfig;
