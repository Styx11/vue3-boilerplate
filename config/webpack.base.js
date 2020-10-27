const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: {
		app: path.resolve(__dirname, '../src/main.ts'),
	},
	output: {
		path: path.resolve(__dirname, '../dist/'),
		filename: '[name].js',
		publicPath: '',
	},
	target: 'web',
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /vue\/src/,
				loader: 'ts-loader',
				options: {
					appendTsSuffixTo: [/\.vue$/],
					transpileOnly: true,
					// getCustomTransformers: () => ({
					// 	before: [
					// 		tsImportPluginFactory({
					// 			libraryName: 'view-design',
					// 			libraryDirectory: 'src/components',
					// 		}),
					// 	],
					// }),
				},
			},
			{
				test: /\.vue$/,
				use: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: [
					path.resolve(__dirname, '../src'),
					path.resolve(__dirname, '../test'),
				],
			},
			{
				test: /\.css$/,
				use: ['vue-style-loader', MiniCssExtractPlugin.loader, 'css-loader']
			},
			{
				test: /\.svg$/,
				loader: 'svg-sprite-loader',
				options: {
					symbolId: 'icon-[name]'
				}
			},
			{
				test: /\.(png|jpe?g|gif)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					name: 'static/img/[name].[hash:7].[ext]',
				},
			},
			{
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: 'static/media/[name].[hash:7].[ext]',
				},
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: 'static/fonts/[name].[hash:7].[ext]',
				},
			},
		]
	},
	plugins: [
		new VueLoaderPlugin(),

		// 抽取并 mini css 文件，注意它的 loader 应在 vue-loader 之后
		// 因为 extractcss 插件存在接口使用错误，所以使用这个插件
		new MiniCssExtractPlugin({
			filename: 'static/css/[name].[contenthash].css',
		}),
	]
}