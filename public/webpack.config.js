const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // other webpack config
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', 
    }),
  ],
};
