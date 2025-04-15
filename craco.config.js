// craco.config.js
module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          "util": require.resolve("util/")
        }
      }
    }
  }
}
