/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.cinfig");
const nextConfig = {
  reactStrictMode: true,
  i18n,
};

module.exports = nextConfig;
