/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "google.com",
      "images.pexels.com",
      "you.com",
      "links.papareact.com",
      "cdn.flowbite.com",
      "images.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
