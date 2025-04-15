// craco.config.js
module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        "util": require.resolve("util/"),
        "buffer": require.resolve("buffer/"),
        "events": require.resolve("events/"),
        "stream": require.resolve("stream-browserify")
      };
      return webpackConfig;
    }
  }
};
