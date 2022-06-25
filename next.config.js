/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        "source": "/",
        "headers": [
          {
            "key": "access-control-allow-origin",
            "value": "*"
          },
          {
            "key": "cross-origin-resource-policy",
            "value": "cross-origin"
          },
          {
            "key": "cross-origin-embedder-policy",
            "value": "require-corp"
          },
        ]
      }
    ]
  },
}

module.exports = nextConfig;