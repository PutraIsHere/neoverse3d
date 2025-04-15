module.exports = {
  webpack: (config) => {
    config.resolve.alias['@tensorflow/tfjs'] = '@tensorflow/tfjs/dist/tf.min.js'
    config.resolve.alias['three'] = 'three/build/three.min.js'
    return config
  }
}
