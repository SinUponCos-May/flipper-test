/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable server-side rendering
  reactStrictMode: true,
  
  // Ensure sitemap is generated properly
  async headers() {
    return [
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig