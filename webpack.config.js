const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: ['node_modules', path.join(__dirname, 'src')]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      },
      {
        test: /\.module\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: { modules: true }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      }
    ]
    /* Advanced module configuration (click to show) */
  },
  devServer: {
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    port: 3000,
    onListening: function (server) {
      const port = server.listeningApp.address().port;
      console.log('Listening on port:', port);
    }, //Provides an option to execute a custom function when webpack-dev-server starts listening for connections on a port.
    open: true // Tells dev-server to open the browser after server had been started. Set it to true to open your default browser.
  }, // list of additional plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
