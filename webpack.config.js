const path = require('path');
const SRC_DIR = path.join(__dirname, 'client/src');
const DIST_DIR = path.join(__dirname, 'public/dist');
const Dotenv = require('dotenv-webpack');   // allows access to .env variables in React

module.exports = {
  devtool: "source-map",
  entry: `${SRC_DIR}/index.js`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  node: {
    fs: "empty" // Need this to prevent fs error with dotenv-webpack
  },
  plugins: [
    new Dotenv({
      path: './.env', // Path to .env file (this is the default)
      safe: false // Need this to prevent CORS issue with using dotenv-webpack(?)
    })
  ],    
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  }
}
