const webpackTestConfig = require('../../config/webpack.test')

module.exports = function (config)
{
	config.set({
		frameworks: ['mocha'],

		files: ['specs/**/*.spec.js'],

		preprocessors: {
			'specs/**/*.spec.js': ['webpack', 'sourcemap']
		},

		webpack: webpackTestConfig,

		reporters: ['spec', 'coverage'],

		coverageReporter: {
			dir: './coverage',
			reporters: [
				{ type: 'lcov', subdir: '.' },
				{ type: 'text-summary' }
			]
		},

		browsers: ['Chrome'],

	})
}
