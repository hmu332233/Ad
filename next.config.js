/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        "source": "/(.*)",
        "headers": [
          {
            "key": "access-control-allow-origin",
            "value": "*"
          }
        ]
      }
    ]
  },
}

module.exports = nextConfig;