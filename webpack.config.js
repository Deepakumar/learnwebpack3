const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename:'[name]-bundle.js'
    },
    module : {
        rules: [
            {
                use:'babel-loader',
                test: /\.js$/
            },
            {
                //loader: ['style-loader','css-loader'],
                loader:Extra