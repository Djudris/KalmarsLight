const path = require("path");

module.exports = env =>
{
    env = env || {};
    return {
        name: "scripts",
        mode: env.prod ? "production" : "development",
        entry: "./resources/js/src/app/index.js",
        output: {
            filename: "../../../resources/js/dist/legend" + (env.prod ? ".min" : "") + ".js",
            path: path.resolve(__dirname, "dist")
        },
        devtool: "source-map",
        module: {
            rules: [
                {
                    enforce: "pre",
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "eslint-loader",
                    options: {
                        fix: true,
                        cache: true
                    }
                },
                {
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                }
            ]
        }
    };
};
