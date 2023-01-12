const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js",
  },
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
    ],
  },
  /*
    plugin özelliklerine filename ve template değerleri yerleştirildi (boş bırakılsaydı boş bir index.html dosyası /dist altına oluşturup içerisine output kısmında tanımlanan index.js dosyasını enjekte edecekti)

    filename: oluşturulacak olan dosyanın adını tanımlamak için kullanılır
    template: orjinal hangi template ile çalışılacak ise o dosyayı tanımlamamızı ister
      
    yani template içerisinde yazılan index.html dosyamızı alıp adını 
    new-index.html olarak değiştirdikten sonra /dist altına kopyalayacaktır
    bu işlemlerle beraber paketlediğimiz dosyalarda içerisine enjekte edilmektedir.
  */
  plugins: [
    new HtmlWebpackPlugin({
      filename: "new-index.html",
      template: "index.html",
    }),
  ],
};
