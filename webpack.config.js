'use strict';

const _ = require('lodash');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const fullPath = _.partial(path.resolve, __dirname);



/**
 *
 */
module.exports = {
	entry: fullPath('index.js'),
	output: {
		path: fullPath('dist'),
		publicPath: 'dist',
		filename: 'app.js',
	},
	devtool: 'source-map',
	module: {
		preLoaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'eslint',
			}
		],
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel'
			},
			{
				test: /\.scss$/,
				include: fullPath('css'),
				loader: ExtractTextPlugin.extract('style', [
					'css?sourceMap',
					'sass?sourceMap'
				])
			}
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
		}),
		new ExtractTextPlugin('app.css', {
			allChunks: true
		})
	]
};
