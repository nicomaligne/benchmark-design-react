const webpack = require('webpack')
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
	template: './src/index.html',
	filename: './index.html',
})

module.exports = {
	entry: './src/index.jsx',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
						options: {
							modules: true,
							importLoaders: 1,
							localIndenName: '[name]_[local]_[hash:base64]',
							sourceMap: true,
							minimize: true,
						},
					},
				],
			},
			{
				test: /\.scss$/,
				use: [
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
						options: {
							modules: true,
							importLoaders: 1,
							localIndenName: '[name]_[local]_[hash:base64]',
							sourceMap: true,
							minimize: true,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						},
					},
				],
			},
		],
	},
	plugins: [htmlPlugin],
	resolve: {
		extensions: ['.jsx', '.js'],
	},
}
