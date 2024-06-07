/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";

let nextConfig = {};

if (process.env.NEXT_PUBLIC_BASEPATH !== "") {
  nextConfig = {
    ...nextConfig,
    basePath: process.env.NEXT_PUBLIC_BASEPATH,
    assetPrefix: `${process.env.NEXT_PUBLIC_BASEPATH}/`,
  };
}

if (isProduction) {
  nextConfig = {
    ...nextConfig,
    output: "export",
    reactStrictMode: true,
    images: {
      unoptimized: true,
    },
  };
}

export default nextConfig;
