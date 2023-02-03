const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const JSONMinifyPlugin = require('node-json-minify');
const Dotenv = require('dotenv-webpack');

const JSconfig = {
  mode: 'production',
  name: 'JS',
  entry: {
    'background': './src/background.ts',
    'inject': './src/inject.ts',
    'options': './src/options.ts',
    'popup': './src/popup.tsx',
  },
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist/src/'),
    filename: '[name].js',
  },
  resolveLoader: {
    modules: [
      'node_modules',
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
      },
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
    ],
  },
  plugins: [
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      uglifyOptions: {
        compress: true,
        ecma: 6,
        mangle: true
      },
      sourceMap: false,
    }),
    new Dotenv(),
  ],
};

const OtherFilesConfig = {
  name: 'OtherFilesConfig',
  mode: 'production',
  entry: {
    'index': './index.html',
    'options': './options.html',
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name].html',
  },
  resolveLoader: {
    modules: [
      'node_modules',
    ],
  },
  module: {
    rules: [
      {
        use: [{
          loader: 'html-loader',
        }],
        test: /\.html$/,
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              emitFile: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/index.html',
      filename: '/index.html',
      inject: 'body',
      hash: true,
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        html5: true,
        removeComments: true,
        removeEmptyAttributes: true,
        minifyCSS: true,
      },
    }),
    new HtmlWebpackPlugin({
      template: __dirname + '/options.html',
      filename: '/options.html',
      inject: 'body',
      hash: true,
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        html5: true,
        removeComments: true,
        removeEmptyAttributes: true,
        minifyCSS: true,
      },
    }),
    new CopyWebpackPlugin([
      {
        from: 'img',
        to: 'img',
      },
      {
        from: 'manifest.json',
        to: 'manifest.json',
      },
      {
        from: '_locales',
        transform: function (content) {
          return JSONMinifyPlugin(content.toString());
        },
        to: '_locales',
      },
    ]),
  ],
};

module.exports = [
  JSconfig,
  OtherFilesConfig,
];
