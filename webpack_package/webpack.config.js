const path = require("path");

module.exports = {
    mode: "production",
    entry: {
        index: "./src/index.js",
        swr: "./src/swr.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].min.js",  // 打包产物js的名称
        library: "Tw",   // 打包的库的名称，之后需要用这个名字来调用这个库
        libraryTarget: "umd",
        globalObject: "this",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/
            }
        ]
    }
};