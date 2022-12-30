/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['hero-slider']);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withPlugins(
  [
    // [
    //   {
    //     images: {
    //       domains: ['via.placeholder.com'],
    //     },
    //   },
    // ],
    [
      {
        env: {
          stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
        },
      },
    ],
    [withTM({})],
  ],
  nextConfig
);

// module.exports = {
//   images: {
//     domains: ['via.placeholder.com'],
//   },

//   env: {
//     stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
//   },
// };
