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
        common: './src/js/common.js'
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    devtool: "inline-source-map",
    module: {
        rules: [
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
            chunks:['index'],
        }),
        new HtmlWebpackPlugin({
            filename: 'diceExample.html',
            template: 'diceExample.html',
            chunks: ['diceExample']
        }),
        new HtmlWebpackPlugin({
            filename: 'listLayout.html',
            template: 'listLayout.html',
            chunks: ['listLayout']
        }),
        new HtmlWebpackPlugin({
           filename: 'grailExample.html',
           template: 'grailExample.html',
           chunks: ['grailExample']
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
        }),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "common",
                    chunks: "initial",
                    minChunks: 1
                }
            }
        }
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        host: 'localhost',
        port: '8089',
        open: true,
        hot: true
    }
};
