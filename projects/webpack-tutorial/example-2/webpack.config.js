const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "./dist"),
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack Boilerplate",
      template: path.resolve(__dirname, "./src/template.html"), // template file
      filename: "index.html", // output file
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      /*
        test: ile css uzantısını tanımasını sağladık
        use: ile hangi loader'ların kullanılacağını belirttik
          css-loader: css dosyalarını anlayıp çözümleyebilmek için kullanılır
          style-loader: dom içine css-loader ile çözümlenen css dosyalarını ekler

        NOT: use kısmında kullanılan style ve css loader’ların sıralaması çok önemlidir. Aslında buradaki sıralama loader kuralları gereği ters çalışmaktadır. Yani önce css-loader çalışmaktadır. Bunun sebebi ise önce css-loader ile css dosyaları çözümlenir daha sonra bu çözümlenen dosyalar style-loader ile dom içine enjekte edilir. Sıralama kuralı tüm loader’lar için geçerlidir css ile ilgili değildir.

        * "psotcss-loader" i use kismina eleman olarak ekliyoruz ve postcss.config.js dosyasi olsuturup asagidaki ayarlari oraya kopyaliyoruz.
        module.exports = {
          plugins: [require("autoprefixer")],
        };
      */
      {
        test: /\.(s[ac]ss|less)$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          "less-loader",
          "sass-loader",
        ],
      },
      // JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      //Images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
    ],
  },
  /*

    *webpack uses loaders to preprocess files loaded via modules. This can be JavaScript files, static assets like images and CSS styles, and compilers like TypeScript and Babel. webpack 5 has a few built-in loaders for assets as well.

  */
};
