'use strict'
// This is the webpack config used for unit tests.

const { resolve } = require('./utils')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base')


const webpackConfig = merge(baseWebpackConfig, {
	mode: "none",
	// use inline sourcemap for karma-sourcemap-loader
	devtool: '#inline-source-map',
	// resolveLoader: {
	// 	alias: {
	// 		// necessary to to make lang="scss" work in test when using vue-loader's ?inject option
	// 		// see discussion at https://github.com/vuejs/vue-loader/issues/724
	// 		'scss-loader': 'sass-loader'
	// 	}
	// },
	resolve: {
		alias: {
			src: resolve('src')
		}
	},
})

// no need for app entry during tests
delete webpackConfig.entry

module.exports = webpackConfig
