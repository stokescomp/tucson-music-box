/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["hero-slider"]);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withTM({});
