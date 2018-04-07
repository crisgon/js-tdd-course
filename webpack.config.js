const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    filename: './src/app/app.js'
  },
  output: {
    filename: './build.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'babel-loader',
        query: {
          presets: [['es2015', {modules: false}]]
        }
      }
    ]
  }
}
