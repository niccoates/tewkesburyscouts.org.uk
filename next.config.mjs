/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/activity-notification',
        destination: '/volunteers/activity-notification',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;