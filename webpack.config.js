const webpack = require('webpack');
const path = require( 'path' );
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const JSconfig = {
    name: 'JS',
    entry: {
        'background': './src/background.js',
        'inject': './src/inject.js',
        'options': './src/options.js',
        'optipic': './src/optipic.js',
        'popup': './src/popup.js',
    },
    output: {
        path: path.resolve( __dirname, 'dist/src/' ),
        filename: '[name].js',
    },
    resolveLoader: {
        modules: [
            'node_modules',
        ],
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
            },
        ],
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.js$/,
            minimize: true,
        }),
    ],
};

const HTMLconfig = {
    name: 'HTML',
    entry: {
        'index': './index.html',
        'options': './options.html',
    },
    output: {
        path: path.resolve( __dirname, 'dist/' ),
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
                to: '_locales',
            },
        ]),
    ],
};

module.exports = [
    JSconfig,
    HTMLconfig,
];
