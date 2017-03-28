var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
  'faker', 'lodash', 'react', 'react-dom', 'react-input-range', 'react-redux',
  'react-router', 'redux', 'redux-form', 'redux-thunk'
];

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS,
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/, // Look for .js in other folders.
        exclude: /node_modules/, //don't by to babel node_modules codes, waste of resources.
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /.css$/,
      }
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({  //extract same modules from bundle to vendor
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    })
  ],
};
