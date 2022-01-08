var path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');
const Dotenv = require('dotenv-webpack');
module.exports = {
  entry: `${SRC_DIR}/index.js`,
  mode: 'production',
  optimization: {
    minimizer: [new TerserPlugin({ /* additional options here */ })],
  },
  devtool: 'source-map',
  watch: true,
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
        {
          test: /\.css$/,
          use: ['style-loader','css-loader'],
        },
      {
        test: /\.m?js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              ["@babel/plugin-transform-runtime",
                {
                  "regenerator": true
                }
              ]
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new Dotenv()
  ],
  // plugins: [
  //   new webpack.DefinePlugin( {
  //     "process.env": Dotenv.parsed
  //   } ),
  // ]

};