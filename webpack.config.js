var path = require("path");
var webpack = require("webpack");
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
    entry: ["webpack-dev-server/client?http://localhost:8080", //WebpackDevServer host and port
        //"webpack/hot/only-dev-server", // "only" prevents reload on syntax errors
        "./src/index",
        ],
    output: {
        path: path.resolve(__dirname, './build'),
        publicPath: '/build/',
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.LoaderOptionsPlugin({
            options: {
                context: __dirname,
                postcss: [autoprefixer, precss]
            }
        })
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot-loader','babel-loader']
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'postcss-loader']
            }
        ]
    }
};
