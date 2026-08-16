/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  compress: true,
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // NOTE: headers() has no effect under `output: 'export'` — there's no Next.js
  // server on cPanel to apply them. The same security headers are now set via
  // public/.htaccess instead, which Apache will honor once uploaded.
}

module.exports = nextConfig