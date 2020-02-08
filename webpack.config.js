const path = require("path");

module.exports = {
    mode: "development",
    devtool: "none",

    entry: "./src/index.js",

    output: {
        path: path.resolve("dist"),
        publicPath: "dist/",
        filename: "bundle.js"
    }
};
