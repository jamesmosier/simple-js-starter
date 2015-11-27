// webpack-dev-server --inline
// webpack-dev-server -d -p (sourcemaps & minify)

var path = require('path');
var webpack = require('webpack');

module.exports = {
  // context: path.resolve('app/js'),
  entry: ['webpack/hot/dev-server', './app/js/main'],
  presets: ['es2015'],
  output: {
    path: path.resolve('build/js/'),
    publicPath: '/public/assets/js/',
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: 'public'
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    preLoaders: [
      {
        test: /\.jsx$|\.js$/,
        loader: 'eslint-loader',
        include: __dirname + '/app/js',
        exclude: /bundle\.js$/
      }
    ],
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        cacheDirectory: true,
        presets: ['es2015']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js']
  }
}
