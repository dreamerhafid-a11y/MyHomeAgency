/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  basePath: '/MyHomeAgency',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
