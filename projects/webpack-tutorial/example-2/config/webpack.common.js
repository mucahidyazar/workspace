const webpack = require("webpack");
const paths = require("./paths");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  // Where webpack looks to start building the bundle
  entry: [paths.src + "/index.js"],
  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: "[name].bundle.js",
    publicPath: "/",
  },
  plugins: [
    // Generates an HTML file from a template
    // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
    new HtmlWebpackPlugin({
      title: "webpack Boilerplate",
      favicon: paths.src + "/images/favicon.png",
      template: paths.src + "/template.html", // template file
      filename: "index.html", // output file
    }),

    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: "assets",
          globOptions: {
            ignore: ["*.DS_Store"],
          },
        },
      ],
    }),
  ],
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
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
          {
            loader: "css-loader",
            options: { sourceMap: true, importLoaders: 1 },
          },
          { loader: "postcss-loader", options: { sourceMap: true } },
          { loader: "sass-loader", options: { sourceMap: true } },
          { loader: "less-loader", options: { sourceMap: true } },
        ],
      },
      //Images
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: "asset/resource" },
      //Fonts
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: "asset/inline" },
    ],
  },
};
