const path = require('path');

/**
 * @type {import('webpack').Configuration}}
 */
const config = {
  // mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  }
}

module.exports = config
