/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',       // Static HTML export for GitHub Pages
  trailingSlash: true,    // Required for GitHub Pages routing
  images: {
    unoptimized: true,    // next/image optimization needs a server; disable for static export
  },
};

export default nextConfig;
