const webpack = require('webpack');
const { SourceMapDevToolPlugin } = require("webpack");
const CompressionPlugin = require('compression-webpack-plugin');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = (env, argv) => {
  const mode = argv.mode || 'development';
  return {
    mode,
    entry: path.join(SRC_DIR, 'index.js'),
    output: {
      path: path.resolve(__dirname, 'client/dist'),
      filename: "bundle.js",
      publicPath: '/'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(mode)
      }),
      new Dotenv(),
      new DuplicatePackageCheckerPlugin(),
      new CompressionPlugin({
        filename: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.js$|\.css$|\.html$/,
        threshold: 10250,
        minRatio: 0.5,
      }),
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
      new SourceMapDevToolPlugin({
        filename: "[file].map"
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.js$/,
          enforce: 'pre',
          use: ['source-map-loader'],
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.svg$/,
          use: "file-loader",
        },
        {
          test: /\.png$/,
          use: [
            {
              loader: "url-loader",
              options: {
                mimetype: 'image/png',
              },
            },
          ],
        },
      ],
    },
    devServer: {
      historyApiFallback: true,
    },
    resolve: {
      alias: {
        react: path.resolve('node_modules/react'),
      },
      extensions: ['.js', '.jsx'],
      fallback: {
        "os": false,
        "path": false,
        "fs": false,
      }
    },
  };
};