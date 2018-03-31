const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
  devtool: 'source-map',
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/app.bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', 'json']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: { presets: ['env', 'react'] }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(jpg|svg|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
              publicPath: 'img/'
            }
          }
        ]
      },
      {
        test: /(manifest)\.(json)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'manifest.json',
              outputPath: '/',
              publicPath: '/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'css/main.css'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new WebpackPwaManifest({
      name: 'Goiânia',
      short_name: 'Goiânia',
      description: 'Projeto do curso de Desenvolvedor Front End da Udacity.',
      start_url: '/index.html',
      background_color: '#000010',
      icons: [
        {
          src: path.resolve('src/img/app-icon-1024.png'),
          sizes: [36, 48, 72, 96, 144, 192, 512, 1024] // multiple sizes
        },
        // {
        //   src: path.resolve('src/assets/large-icon.png'),
        //   size: '192x192' // you can also use the specifications pattern
        // }
      ]
    }),
    new CleanWebpackPlugin(['dist'])
  ]
};
