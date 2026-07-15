/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export so the client can drag-and-drop the /out folder to Netlify,
  // exactly like the original site. No server runtime required.
  output: "export",
  images: {
    // Required for static export: skip the Next image optimization server.
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
