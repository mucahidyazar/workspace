# Index

- [Installation](#installation)
- [Some Url about webpack](#some-url-about-webpack)
- [About Structure](#about-structure)
- [About Icons](#about-icons)
- [Creating New Page](#creating-new-page)
- [Webpack Configrations](#webpack-configrations)

## Installation

    git clone https://github.com/mucahidyazar/webpack-boilerplate.git
    npm install -D webpack webpack-cli
    npm install .
    npm run dev

## Some Url about webpack

- [webpack](https://webpack.js.org/)
- [Documentation](https://webpack.js.org/concepts/)

## About Structure

- public => keep css, font, img and sass files inside this folder
- src => keep html files inside this folder

## About Icons

- public/icon => main icon folder
- [Icomoon](https://icomoon.io/app) You should import your icon files on there and generate your new files to add there again

## Creating New Page

- Create a new html file inside the src folder. And describe it in the webpack.common.js

For example

```js
  new HtmlWebpackPlugin({
    title: "webpack Boilerplate",
    favicon: paths.public + "/img/favicon.png",
    template: paths.src + "/about.html", // template file
    filename: "about.html", // output file
  }),
```

## Build

You will gel a folder that name is 'dist' after run this code.

    npm run build

# Webpack Configrations

- [WEBPACK](#webpack)

  - [webpack settings](#webpack-settings)

    - [PLUGINS](#plugins)
    - [MODULES](#modules)
    - [paths.js](#pathsjs)

    - [webpack.common.js](#webpackcommonjs)

      - [entry](#entry)
      - [output](#output)
      - [plugins](#plugins)
        - [html-webpack-plugin](#html-webpack-plugin)
        - [clean-webpack-plugin](#clean-webpack-plugin)
        - [copy-webpack-plugin](#copy-webpack-plugin)
      - [modules](#modules)
        - [rules](#rules)
          - [babel-loader](#babel-loader)
          - [STYLES](#styles)
          - [IMAGES](#images)
          - [FONTS](#fonts)

    - [webpack.prod.js](#webpackcommonjs)

      - [mode](#mode)
      - [output](#output)
      - [plugins](#plugins)
        - [mini-css-extract-plugin](#mini-css-extract-plugin)
      - [modules](#modules)
        - [rules](#rules)
          - [STYLES](#styles)
      - [optimization](#images)
      - [performance](#performance)

    - [webpack.dev.js](#webpackcommonjs)

      - [mode](#mode)
      - [devtool](#devtool)
      - [devServer](#devserver)
      - [plugins](#plugins)
        - [HotModuleReplacementPlugin](#hotmodulereplacementplugin)

    - [Environment Variables and Mode Settings](#environment-variables-and-mode-settings)

# WEBPACK

#### webpack.common.js

You can describe your common settings for webpack in here

#### webpack.dev.js

You can describe your development settings for webpack in here

#### webpack.prod.js

You can describe your production settings for webpack in here

## webpack settings

All config files are inside the config folder on root

### PLUGINS

Buradada webpack plugin'lerimizi ayarliyoruz.

```js
  plugins: [...]
```

### MODULES

Buradada webpack icin modullerimizi ve kurallarimizi ayarliyoruz.

```js
modules: [(rules: { ... })];
```

### paths.js

Burada webpack.common.js, webpack.dev.js ve webpack.prod.js'de kullanilmak uzere 'root'daki 'src', 'public' ve 'build' klasorlerini path modulu ile tanimladik.

### webpack.common.js

#### Entry

Burada webpack ve babel ile islenecek ve daha sonra html dosyamizin icine eklenecek Javascript dosyasinin yolunu belirliyoruz

```js
  entry: [paths.public + "/js/index.js"],
```

#### Output

Buradada webpack ve babel'imizin dosyalari isleyip cikti verecegi yeri belirliyoruz.

```js
  output: {
    path: paths.build,
    filename: "[name].bundle.js",
    publicPath: "/",
  },
```

#### plugins

##### html-webpack-plugin

```cmd
  npm i -D html-webpack-plugin
```

Bu package ile pluginslerimizde asagidaki kod bloguyla html sayfasi ekliyoruz.

```js
const HtmlWebpackPlugin = require("html-webpack-plugin");

plugins: [
  new HtmlWebpackPlugin({
    title: "webpack Boilerplate",
    favicon: paths.public + "/img/favicon.png",
    template: paths.src + "/template.html", // template file
    filename: "index.html", // output file
  }),
  ...
];
```

title = kismindan sayfalarimizin title'larini ayarlayabiliriz fakat src de yazdigimiz html'lerin title kismi asagidaki gibi olmalidir

```html
<title><%= htmlWebpackPlugin.options.title %></title>
```

##### clean-webpack-plugin

```cmd
  npm i -D clean-webpack-plugin
```

Bu plugin kullanilmayan assetsleri yeniden olusturdugunda siler/temizler
Removes/cleans build folders and unused assets when rebuilding

```js
const CleanWebpackPlugin = clean-webpack-plugin");

plugins: [
  ...,
  new CleanWebpackPlugin(),
];
```

##### copy-webpack-plugin

```cmd
  npm i -D copy-webpack-plugin
```

from 'daki belirtilen yoldaki dosyalari to'daki hedef klasorune kopyalar
Copies files from target to destination folder

```js
const CopyWebpackPlugin = require("copy-webpack-plugin");

plugins: [
  ...,

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
];
```

#### modules

##### rules

###### babel-loader

```cmd
npm i -D babel-loader @babel/core @babel/preset-env @babel/preset-env @babel/plugin-proposal-class-properties
```

Babel ayarlarimizi webpack ile ayarlariz. Detayli ayarlamalar icin documentation'a bakiniz.
JavaScript: Use Babel to transpile JavaScript files

```js
  modules: [{
    rules: {
      ...,
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
    }
  }];
```

###### STYLES

Once asagida ki gerekli package'leri yukluyoruz

```cmd
npm i -D css-loader style-loader postcss-loader postcss-preset-env node-sass sass-loader less less-loader
```

test = ile hangi css uzantılarinı tanıması gerektigini soyledik
use = icinde hangi loader'ların kullanılacaklarını belirttik
css-loader: css dosyalarını anlayıp çözümleyebilmek için kullanılır
style-loader: dom içine css-loader ile çözümlenen css dosyalarını ekler

NOT: use kısmında kullanılan style ve css loader’ların sıralaması çok önemlidir. Aslında buradaki sıralama loader kuralları gereği ters çalışmaktadır. Yani önce css-loader çalışmaktadır. Bunun sebebi ise önce css-loader ile css dosyaları çözümlenir daha sonra bu çözümlenen dosyalar style-loader ile dom içine enjekte edilir. Sıralama kuralı tüm loader’lar için geçerlidir css ile ilgili değildir.

```js
  modules: [{
    rules: {
      ...,
      {
        test: /\.(s?)css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { sourceMap: true, importLoaders: 1 },
          },
          { loader: "postcss-loader", options: { sourceMap: true } },
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
      },
    }
  }];
```

"postcss-loader" i use kismina eleman olarak ekliyoruz ve postcss.config.js dosyasi olsuturup asagidaki ayarlari oraya kopyaliyoruz.

```js
module.exports = {
  plugins: [require("autoprefixer")],
};
```

###### IMAGES

Images ayarlarini rules olarak webpack'e asagidaki gibi ayarladiktan sonra js dosyalarimizin icine import ederek kullanabiliriz.
Ve asagida belirttigimiz image uzantilarini outputPath belirtmedigimiz icin path.build yolu olan dist klasorunun direk icine image dosyalarimizi bundle ederek tutar.

```js
  modules: {
    rules: {
      ...,
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: "asset/resource" },
    }
  };
```

###### FONTS

Fonts ayarlarini rules olarak webpack'e asagidaki gibi ayarladiktan sonra js dosyalarimizin icine import ederek kullanabiliriz.
Ve asagida belirttigimiz font uzantilarini belirledigimiz outputPath yolundaki klasorun icine font dosyalarimizi bundle ederek tutar.

```js
  modules: {
    rules: {
      ...,
      {
        test: /\.(ttf|eot|svg|gif|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets/fonts/",
            },
          },
        ],
      },
    }
  };
```

### webpack.prod.js

#### Mode

```js
  mode: "production",
```

#### Output

Aslinda webpack.common.js'de output'u ayarlamistik ama burada daha farkli bir output ayarliyoruz gordugunuz gibi. Farki dosya ismine birde contenthash eklenecek olmasi.
Dilerseniz bu ayari silip build alarak farki gorebilirsiniz.

```js
  output: {
    path: paths.build,
    publicPath: "/",
    filename: "js/[name].[contenthash].bundle.js",
  },
```

#### Plugins

##### mini-css-extract-plugin

Once asagidaki gibi module'umuzu yukluyoruz.

```cmd
npm i -D mini-css-extract-plugin
```

Css dosyalarini ayri dosyalara cikartir (Extracts CSS into separate files)
Note: style-loader development icindir, MiniCssExtractPlugin production icindir (style-loader is for development, MiniCssExtractPlugin is for production)

```js
  plugins: [
    ...
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].css",
    }),
  ],
```

#### Modules

##### Rules

###### STYLES

```js
  module: {
    rules: [
      {
        test: /\.(s[ac]ss|less)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              sourceMap: false,
            },
          },
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
```

#### Optimization

```js
  optimization: {
    minimize: true,
    minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()],
    // Once your build outputs multiple chunks, this option will ensure they share the webpack runtime
    // instead of having their own. This also helps with long-term caching, since the chunks will only
    // change when actual code changes, not the webpack runtime.
    runtimeChunk: {
      name: "runtime",
    },
  },
```

#### Performance

```js
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
```

### webpack.dev.js

#### mode

```js
  mode: "development",
```

#### devtool

Control how source maps are generated

```js
  devtool: "inline-source-map",
```

#### devServer

dev'de calistirdigimizde live-server gibi bir localhost sunucu serveri calistirip gelistirme asamasinda gorerek gelistirme yapmamizi saglar. Ve bu server icin ayarlarimizdir.
Spin up a server for quick development

```js
  devServer: {
    historyApiFallback: true,
    contentBase: paths.build,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
```

#### plugins

##### HotModuleReplacementPlugin

Degisikliklerde hizli yenileme yaparak bizi surekli f5 yapma zorunlulugundan kurtarir
Only update what has changed on hot reload

```js
const webpack = require("webpack");

module.exports = merge(common, {
  ...
  plugins: [
    // Only update what has changed on hot reload
    new webpack.HotModuleReplacementPlugin(),
  ],
});
```

### Environment Variables and Mode Settings

webpack icin 3 cesit mod vardir. Bunlar;
-development
-production
-none

modumuzu NODE_ENV nevironment variable olarak ayarlamak icin cross-env'yi yukluyoruz.

```note
  npm i -D cross-env
```

daha sonra package.json icinde cross-env modulunu kullanarak asagidaki gibi NODE_ENV variable'ina hangi mode ile calistigini set ediyoruz scriptlerimizde.

```js
  "scripts": {
    ...
    "dev": "cross-env NODE_ENV=development webpack serve --config config/webpack.dev.js",
    "build": "cross-env NODE_ENV=production webpack --config config/webpack.prod.js",
  },
```

daha sonra tek yapmamiz gereken webpack.prod.js ve webpack.dev.js icinde mode kismi belirlemektir. Asagidaki gibi...

```js
  mode: "production",
```
