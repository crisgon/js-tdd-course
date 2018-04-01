const webpack = require('webpack');

module.exports = {
  entry: {
    filename: 'app.js'
  },
  output: {
    filename: 'buid.js'
  },
  module: {
    loaders: [
      {
        teste: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          preset: ['es2015', {modules: false}]
        }
      }
    ]
  }
}
