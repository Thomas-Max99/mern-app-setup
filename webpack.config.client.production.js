const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path')
const webpack = require('webpack')
const CURRENT_WORKING_DIR = process.cwd()

const stylesHandler = 'style-loader';

const config={
    mode: 'production',
    entry: [
        path.join(CURRENT_WORKING_DIR, 'client/index.js')
    ],
    output: {
        path: path.join(CURRENT_WORKING_DIR, '/dist'),
        filename: 'bundle.js',
        publicPath: '/dist/',
        clean: true
    },
    module: {
        rules: [
            {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              use: [
                'babel-loader'
              ]
            },
            {
              test: /\.css$/i,
              use: [stylesHandler, 'css-loader', 'postcss-loader'],
            },
          ]
    }
}

module.exports=config