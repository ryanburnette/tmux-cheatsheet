var path = require('path');
var env = process.env.NODE_ENV || 'development';

var config = {
  context: path.resolve(__dirname,'assets/javascripts'),
  entry: {
    main: './main.js',
  },
  output: {
    path: path.resolve(__dirname, 'public/javascripts'),
    filename: '[name].js'
  },
  module: {
    rules: []
  },
  resolve: {
    alias: {
      mq: path.resolve(__dirname,'node_modules/sass-mq/_mq.scss'),
      stylesheets: path.resolve(__dirname,'assets/stylesheets')
    }
  },
  optimization: {
    minimize: false
  },
  mode: env
};

if (env == 'production') {
}

if (env == 'development') {
  config.devServer = {
    compress: true,
    publicPath: '/javascripts/',
    disableHostCheck: true
  };
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader'
    ]
  });
  config.module.rules.push({
    test: /\.css$/,
    use: [
      'style-loader',
      'css-loader'
    ]
  });
}

module.exports = config;
