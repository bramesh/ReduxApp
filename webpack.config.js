const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/app.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public')
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)?$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env', 'react', 'stage-3']
					}
				}
			}
		]
	},
	watch: true,
	devtool: 'inline-source-map'
}