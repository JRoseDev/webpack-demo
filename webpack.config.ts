const path = require("path");

import webpack from "webpack";

const config: webpack.Configuration = {
    mode: "development",
    devtool: false,

    entry: "./src/index.js",

    output: {
        path: path.resolve("dist"),
        publicPath: "dist/",
        filename: "bundle.js"
    },

    optimization: {
        splitChunks: {
            chunks: "all",
            cacheGroups: {
                defaultVendors: {
                    name: "vendors",
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                }
                // default: {
                //     minChunks: 2,
                //     priority: -20,
                //     reuseExistingChunk: true
                // }
            }
        }
    },

    module: {
        rules: [
            {
                test: /\.js$/u,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ]
            },
            {
                test: /\.jpg$/u,
                use: [
                    {
                        loader: "file-loader"
                    }
                ]
            },
            {
                test: /\.less$/u,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "less-loader"
                    }
                ]
            }
        ]
    }
};

export default config;
