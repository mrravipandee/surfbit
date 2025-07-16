const nextConfig = {
  async redirects() {
    return [
      { // for redirect '/' to home page
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig;
