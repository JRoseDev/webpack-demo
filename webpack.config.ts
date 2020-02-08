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
    }
};

export default config;
