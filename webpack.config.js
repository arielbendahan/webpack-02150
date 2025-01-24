import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  mode: 'development',
  entry: './feedback.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
    clean: true, 
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './feedback.html',
    }),
  ],
  devServer: {
    static: './dist',
    port: 3000,
    open: true,
  },
};
