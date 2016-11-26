var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'assets/js');

var config = {
  entry: APP_DIR + '/content.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'content-bundle.js'
  },
  module: {
    loaders: [{ 
      test: /\.jsx?$/,         // Match both .js and .jsx files
      loader: "babel",
      query:
        {
          presets: ['es2015', 'react']
        },
        exclude: /node_modules/
    }],
  }
};

module.exports = config;
