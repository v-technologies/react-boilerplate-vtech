/**
 *
 */
module.exports = function(config) {
	config.set({
		files: [
			'karma.bundle.js'
		],
		frameworks: [
			'mocha',
			'chai'
		],
		reporters: [
			'mocha'
		],
		browsers: [
			'Chrome',
			'Firefox'
		],
		preprocessors: {
			'karma.bundle.js': [
				'webpack'
			]
		},
		webpack: {
			devtool: 'inline-source-map',
			module: {
				loaders: [
					{
						test: /\.js$/,
						exclude: /node_modules/,
						loader: 'babel'
					},
					{
						// @see lelandrichardson/enzyme-example-karma-webpack
						test: /\.json$/,
						loader: 'json'
					}
				]
			},
			externals: {
				// @see lelandrichardson/enzyme-example-karma-webpack
				'react/lib/ExecutionEnvironment': true,
				'react/lib/ReactContext': true
			}
		},
		webpackMiddleware: {
			noInfo: true
		}
	});
};
