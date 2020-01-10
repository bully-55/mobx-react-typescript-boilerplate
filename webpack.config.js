const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const conf = {
    entry: "./src/index.tsx",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js"
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        disableHostCheck: true,
    },
    module: {
        rules: [
            {
                test: /\.(t|j)sx?$/,
                exclude: /node_modules/,
                use: ["babel-loader", "awesome-typescript-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.sass$/,
                use: [
					"style-loader",
					"css-loader",
					{
						loader: "sass-loader",
						options: { 
							sassOptions: {
								includePaths: [
									path.resolve(__dirname, "src")
								]
							}
						}
					}
				]
            },
        ]
    },
    resolve: {
        extensions: [".js", ".css", ".jsx", ".tsx", ".sass", ".ts"] 
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        })
    ]
}

module.exports = conf 