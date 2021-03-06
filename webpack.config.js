var webpack = require("webpack");
module.exports = {
  entry: {
    "rss-parser": "./browser.js"
  },
  output: {
    path: __dirname,
    filename: "dist/[name].min.js"
  },
  resolve: {
    extensions: ['.js']
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      options: {
        presets: [['env', {forceAllTransforms: true}]]
      }
    }]
  },
  node: {
    fs: "empty"
  }
}
