const path = require('path');
const webpack  = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: './src/js/index.js',
        diceExample: './src/js/diceExample.js',
        listLayout: './src/js/listLayout.js',
        grailExample: './src/js/grailExample.js',
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'layoutIndex.html',
            chunks:['index', 'commons'],
        }),
        new HtmlWebpackPlugin({
            filename: 'diceExample.html',
            template: 'diceExample.html',
            chunks: ['diceExample', 'commons']
        }),
        new HtmlWebpackPlugin({
            filename: 'listLayout.html',
            template: 'listLayout.html',
            chunks: ['listLayout', 'commons']
        }),
        new HtmlWebpackPlugin({
            filename: 'grailExample.html',
            template: 'grailExample.html',
            chunks: ['grailExample', 'commons']
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
        }),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "commons",
                    chunks: "initial",
                    minChunks: 1
                }
            }
        }
    }
};
