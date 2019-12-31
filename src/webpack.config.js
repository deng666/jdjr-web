const path = require('path')
module.exports = {
  entry: {
    app: './main.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000 // 服务暂用的端口
  },
  module: {
    loaders: [{
      test: /\.html$/,
      loader: 'html-loader'
    }, {
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader'
    }]
  },
  plugins: [],
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'dist')

  }
}
