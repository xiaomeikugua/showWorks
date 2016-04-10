var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = {
    context : __dirname,
    entry: {
        // 'webpack/hot/dev-server',
        // web: 'webpack-dev-server/client?http://localhost:8080',
        path: path.resolve(__dirname, './src/app/index.jsx'),
        // vendors: ['react']
    },
    output: {
        path: path.join(__dirname, './build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            // {
            //     test: require.resolve('react'),
            //     loader: 'expose?React'
            // },
            {
                test: /\.jsx$/,
                //loader: 'jsx-loader?insertPragma=React.DOM&harmony'
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                //loader: 'jsx-loader?insertPragma=React.DOM&harmony'
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2|png|gif)(\?\S*)?$/,
                loader: "file-loader?name=./font/[name]-[hash].[ext]"
            },
            {
               test: /\.scss$/,
               loaders: ["style", "css", "sass"],
               // include: /components/,
            },
            {
                test: /\.css$/,
                loader: 'style!css?modules',
                // include: [/flexboxgrid/, /src/]
            },
            {
                test: /\.png$/,
                loader: "url-loader?mimetype=image/png"
            },
            {
                test: /\.(png|gif)$/,
                loader: 'file-loader?name=images/[name].[ext]',
                include: [/node_modules/, /src/]
            },
            {
                test: /\.less$/,
                loader: "style!css!less",
                include: /node_modules/
            }


        ]
    },
    // externals: {
    //     //don't bundle the 'react' npm package with our bundle.js
    //     //but get it from a global 'React' variable
    //     'react': 'React'
    // },
    resolve: {
        extensions: ['', '.jsx', '.js', '.scss', '.less', '.json'],
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        // new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ]
};