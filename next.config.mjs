import { withPayload } from "@payloadcms/next/withPayload";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: false,
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      ignored: [
        /node_modules([\\/])/, // ignore node_modules only
        /\.next([\\/])/, // ignore .next build folder
        /public([\\/])/, // okay to ignore static assets
      ],
    };
    return config;
  },
};

// Make sure you wrap your `nextConfig`
// with the `withPayload` plugin
export default withPayload(nextConfig);
