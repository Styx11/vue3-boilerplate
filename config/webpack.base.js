const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: {
		app: path.resolve(__dirname, '../src/main.js'),
	},
	output: {
		path: path.resolve(__dirname, '../dist/'),
		filename: '[name].js',
		publicPath: '/',
	},
	target: 'web',
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: 'vue-loader'
			},
			{
				test: /\.css$/,
				use: ['vue-style-loader', MiniCssExtractPlugin.loader, 'css-loader']
			},
		]
	},
	plugins: [
		new VueLoaderPlugin(),

		// 抽取并 mini css 文件，注意它的 loader 应在 vue-loader 之后
		// 因为 extractcss 插件存在接口使用错误，所以使用这个插件
		new MiniCssExtractPlugin({
			filename: '/static/css/[name].[contenthash].css',
		}),
	]
}