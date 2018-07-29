import webpack from "webpack";
import path from "path";

module.exports = {
  entry: {
    app: './js/app',
    cms: './js/cms'
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: '/',
    filename: '[name].js'
  },
  context: path.join(__dirname, "src"),
  externals: /^vendor\/.+\.js$/,
  plugins: [
    new webpack.ProvidePlugin({
      "fetch": "imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.((png)|(eot)|(woff)|(woff2)|(ttf)|(svg)|(gif))(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader",
        options: {
          name: '/[hash].[ext]'
        }
      }
    ]
  }
}
