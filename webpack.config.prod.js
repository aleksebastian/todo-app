module.exports = {
  mode: 'production',
  entry: __dirname + '/client/src/index.js',
  module: {
    rules: [
      {
        test: [/\.jsx$|.js$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist'
  },
  devtool: 'source-map',
};