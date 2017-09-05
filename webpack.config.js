var DirectoryNamedWebpackPlugin = require("directory-named-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: [/*'babel-polyfill', */'./src/main.js'],
   output: {
      filename: './dist/bundle.js'
   },
   resolve: {
      modules: ['node_modules', 'components'],
      plugins: [
         new DirectoryNamedWebpackPlugin({
            exclude: /node_modules/
         })
      ],
   },
   resolveLoader: {
      moduleExtensions: ["-loader"]
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['env']
               }
            }
         },
         {
            test: /\.(html)$/,
            exclude: /node_modules/,
            use: {
               loader: 'html-loader'
            }
         },
         {
            test: /\.css$/,
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({
               fallback: 'style-loader',
               use: 'css-loader'
            })
         }
      ]
   },
   plugins: [
      new ExtractTextPlugin('./dist/main.css'),
      new HtmlWebpackPlugin({
         filename: './dist/index.html'
      })
   ],
};