const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseConfig, {
	mode: "production",
	devtool: '#source-map',
	output: {
		path: path.resolve(__dirname, '../dist/'),
		filename: 'static/js/[name].[chunkhash].js',
		chunkFilename: 'static/js/[id].[chunkhash].js',
	},
	optimization: {

		// runtimeChunks 相当于 CommonsChunkPlugins 中的 'runtime'
		// 这将 runtime chunk 抽离出来公用
		runtimeChunk: {
			name: 'runtime'
		},

		splitChunks: {
			cacheGroups: {
				manifest: {
					name: "manifest",
					minChunks: Infinity,
				},
				app: {
					name: "app",
					minChunks: 3,
				}
			}
		},
		minimize: true,

		// 更改为路径命名规则
		namedModules: true,
		namedChunks: true,

		// 相当于 webpack.DefinePlugins 中设置 'process.env.NODE_ENV: JSON.stringifiy(...)'
		nodeEnv: process.env.NODE_ENV || 'dev',
	},
	plugins: [
		// 自动注入 html 文件依赖
		new HtmlWebpackPlugin({
			filename: path.resolve(__dirname, '../dist/index.html'),
			template: path.resolve(__dirname, '../public/template.html'),
			inject: true,
		}),
	]
});