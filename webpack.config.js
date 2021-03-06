const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: '[name][ext]'
  },
  devtool: 'source-map',
  devServer:{
    static:{
      directory: path.resolve(__dirname, 'dist')
    },
    port:3000,
    open: true,
    hot: true,
    compress:true,
    historyApiFallback: true,
  },
  module:{
    rules: [
      {
        test:/\.scss$/,
        use:[
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        // use: {
        //   loader: 'file-loader',
        // },
      },
    ]
  },
 
};