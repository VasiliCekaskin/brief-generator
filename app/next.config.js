/** @type {import('next').NextConfig} */
/** @type {import("src/initializer")}; */
const path = require("path");
const { merge } = require("webpack-merge");

const nextConfig = {
  reactStrictMode: true,

  webpack: (
    config,
    { _buildId, _dev, isServer, _defaultLoaders, _webpack }
  ) => {
    if (isServer) {
      return merge(config, {
        entry() {
          return config.entry().then((entry) => {
            return Object.assign({}, entry, {
              renderFiles: path.resolve(process.cwd(), "src/renderFiles.ts"),
            });
          });
        },
      });
    } else {
      return config;
    }
  },
};

module.exports = nextConfig;
