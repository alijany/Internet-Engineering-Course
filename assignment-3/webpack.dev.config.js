const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const babelConfig = require('./babel.config.js');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        // filename: 'src/[name].[contentHash].bundle.js'
    },
    devServer: {
        contentBase: './public',
    },
    module: {
        rules: [
            // html loader
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
            // sass loader
            {
                test: /\.(scss)$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            // css loader 
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            // javascript loader
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: babelConfig
                }
            },
            // js workers
            {
                test: /\.worker\.js$/,
                use: { loader: 'worker-loader' }
            },
            // image loader
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            esModule: false,
                        }
                    },
                ],
            },
            // font loader
            {
                test: /\.(woff|woff2|ttf|otf|svg|eot)$/,
                use: [
                    {
                        loader: 'url-loader'
                    },

                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
};