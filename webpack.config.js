const path =require('path');
const HtmlWebpackPlugin =require('html-webpack-plugin');
const CssMiniExtractPlugin=require('mini-css-extract-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'

    },
    mode:'development',
    resolve: {
        extensions:['.js', '.jsx'],

    },
    module: {
        rules:[
            {test: /\.(js|jsx)$/,use:'babel-loader'},
            {test:/\.html$/,use:'html-loader'},
            {test:/\.(css|scss)$/, use:['style-loader','css-loader','sass-loader']}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            filename:'./index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'[name].css'
        }),
    ],
    devServer: {
        static: {
            directory:path.join(__dirname,'dist')
        },
        compress:true,
        port:3005,
    }
}
