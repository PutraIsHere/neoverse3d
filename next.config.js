module.exports = {
  webpack: (config) => {
    config.resolve.alias['@tensorflow/tfjs'] = '@tensorflow/tfjs/dist/tf.min.js'
    return config
  }
}
