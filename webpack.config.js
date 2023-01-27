const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    // mode
    mode: "production", // development
    // entry
    entry: {
        main: path.resolve(__dirname, 'src/js/main.js')
    },
    //output
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name][contenthash].js',
        clean: true,
    },
    //loader
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            },
        ],
    },
    //plugins
    plugins: [
        new HtmlWebpackPlugin({
            title: "Car racing 🚗",
            template: './src/indexTemp.html',
            filename: 'index.html',
            chunks: ['main']
        }),
        new MiniCssExtractPlugin()
    ],
    //devServer
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'publick')
        },
        port: 2000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true
    }
};