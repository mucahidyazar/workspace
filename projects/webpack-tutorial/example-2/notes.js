/*

  !OUTPUT
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },


  !PLUGINS
  ?clean-webpack-plugin => her buildden sonra dist folder'ini temizler bu sayede temiz build aliriz.
    npm i clean-webpack-plugin
    *Ve webpack.config.js'de plugins'e asagidaki gibi ekle
      plugins: [
        ...
        new CleanWebpackPlugin(),
      ],

  !MODULES
  *webpack uses loaders to preprocess files loaded via modules. This can be JavaScript files, static assets like images and CSS styles, and compilers like TypeScript and Babel. webpack 5 has a few built-in loaders for assets as well.
  
  !Babel
  Babel is a tool that allows us to use tomorrow's JavaScript, today.

  We're going to set up a rule that checks for any .js file in the project (outside of node_modules) and uses the babel-loader to transpile. There are a few additional dependencies for Babel as well.

  babel-loader - Transpile files with Babel and webpack.
  @babel/core - Transpile ES2015+ to backwards compatible JavaScript
  @babel/preset-env - Smart defaults for Babel
  @babel/plugin-proposal-class-properties - An example of a custom Babel config (use properties directly on a class)

  *npm i -D babel-loader @babel/core @babel/preset-env @babel/preset-env @babel/plugin-proposal-class-properties

  *Ve asagidaki gibi webpack.config.js dosyamiza babel-loader'i tanimliyoruz.
  module: {
    rules: [
      // JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  *NOTE===If you're setting up a TypeScript project, you would use the typescript-loader instead of babel-loader for all your JavaScript transpiling needs. You would check for .ts files and use ts-loader.

  *Bu sekilde babel-laoder'imiz ayarlandi fakat babel plugins'lerimiz daha ayarlanmadigi icin class gibi yeni javascript ozelliklerini kullanmayi denersek js dosyalarimizda babel pluginleri calismadigi icin build isleminde hata alacagiz.
  *Bunun icin .babelrc adinda dosya olusturuyoruz root'da
  {
    "presets": ["@babel/preset-env"], //*babel ile gelen bir cok default ozelligi ekleriz. Babel kullanirken bunu buraya yazmamiz bir standart aslnida.
    "plugins": ["@babel/plugin-proposal-class-properties"] //*JS de yeni olan bu class OOP yapisinida bu sekilde ekleyerek eski tarayyicilarin anlayacagi dile ceviren babel eklentisidir buda
  }


  !IMAGES
  *Resimleride js dosyalarinizda kullanmak istersiniz ama bu js nin default olarak gelen ve yapabileceginiz bir ozelligi degildir
  *Ilk once src ye images adinda bir klasor olusturun
  *daha sonra bir resim atin buraya ornegin example.png
  *daha sonra bunu js dosyasinda asagidaki gibi import edin.
  import example from './images/example.png'
  ?simdi build denersen hata alirsin
  *webpack'in bunun icin assets modules'leri bulunuyor.
  *Bu bir TYPE, bir loader degil
  *Mesela image types lar icin asset/resource kullaniyoruz.
  *!bunun icin rule'e asagidaki ayarlari ekliyoruz.
  module.exports = {
    ...
    module: {
      rules: [
        // Images
        {
          test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
          type: 'asset/resource',
        },
      ],
    },
  }
  *!Ve artik js dosyasinda asagidaki gibi  resimleri import edip image'ye ekleyip html'e tum tarayicilarin anlayacagi sekilde gonderebiliriz.
    import example from "./images/example.jpg";
    //Creating an image
    const image = document.createElement("img");
    image.src = example;

    const app = document.querySelector("#root");
    app.append(heading, p, image);

  !FONTS
  *webpack.config.js
  module.exports = {
    ...
    module: {
      rules: [
        // Fonts and SVGs
        {
          test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
          type: 'asset/inline',
        },
      ],
    },
  }
  *Ve artik fonts'lari veya svgleride asagidaki gibi import edip kullanabiliriz.
  import example from './images/example.svg'


  !STYLES
  *Asagidada anlattim bu tanianin anlatimiyla olacak
  *Bircok insan bugunlerde CSS-in-JS, styled-components kullaniyor styling icin
  *Ama bazen basit bir html css projesi icin css uyumlulugu veya sass less gibi css preprocessor kullanmak isteyebiliriz. Ozaman PostCSS kullanabiliriz.
  *Ben hepsini kullanmak istiyorum.
    - css dosyalarini kullanmak icin => css-loader style-loader
    - postcss icin => postcss-loader
    - sass preprocessor icin => node-sass sass-laoder
    - less preprocessor icin => less less-laoder
    *package'lerini kullanacagim. Bunun icin asagidaki install'i yapiyoruz
    !npm i -D css-loader style-loader postcss-loader postcss-preset-env node-sass sass-loader less less-loader
  
  *Daha sonra webpack.config.js ayarlarini asagidaki gibi yapiyoruz.
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

  *Ve birde postcss.config.js dosyasi olusturuyoruz root dizininde. Hangi browserlara gore css dosyalarimizin hazirlanacagini soyluyoruz.
    *Asagida tarayicilarin son 2 versiyonuna gore diyoruz.
  module.exports = {
    plugins: {
      'postcss-preset-env': {
        browsers: 'last 2 versions',
      },
    },
  }

  *Daha sonra src icinde styles adinda bir klasor ve icinde main.scss adinda bir dosya olsuturuyoruz. Ve burada artik css ayarlarinizi yapabilirsiniz
  *Ve bu scss dosyasini js dosyamiza import ediyoruz.
  import './styles/main.scss'
  *Ve artik build edebiliriz.
  !NOTE=== css dosyalarimiz build edilen dosyadaki js dosyasinin icinde tutuluyorlar.


  !DEVELOPMENT
  *Guncellemeler ve yapilan her degisiklik sonrasi herseferinde npm run build yapmak oldukca sikici
  *Ve proje buyudukce her seferinde bunu yapmak oldukca zaman harcayacakdir.
    ?a production config, Tum kaynaklari minified eder optimize eder ve butun kaynak dosyalarini kaldirir (Kaynak dosyalari bizim src icinde yazdigimiz dosyalar) (that minifies, optimizes and removes all source maps)
    ?a development config, Bir webpack server'i calistirir ve her degisikligi kayit sornasi gunceller ve kaynak dosyalarina sahipdir (that runs webpack in a server, updates with every change, and has source maps)
  *! Development mode dist klasoru olusturmaz. Onun yerine herseyi memory'de bellekte calistirir

  *! Asagidaki module'u yukluyoruz ilk (Bu module ile dev ile calistirirken webpack server'i uzerinde calsitiracagiz)
  npm i -D webpack-dev-server

  *! Ve artik dev ve build icin farkli ayarlarla calistirma yapmamiz gerekiyor.
  *! Bunun icin root'da config adinda bir klasor olsuturun
  *! config.js icinde path.js dosyasi olusturun. Burada src build ve public klasorlerinin path bilgileri olacak\
  *! webpack.common.js dosyasi olsuturun. Burada hem development hemde production icin kullanilacak ortak ayarlar yer alacak
  *! webpack.dev.js dosyasi olusturun. Burada sadece developmentda calisacak webpack config ayarlari olacak
  *! webpack.prod.js dosyasi olusturun. Burada sadece productionda calisacak webpack config ayarlari olacak
  *? Yukaridaki bu dosyalara ornekdekileri inceleyerek gorebilrisiniz.
  *! Ve asagidaki installari yapiyoruz.
    webpack-merge => Ayri ayri olsuturdugumuz webpack config dosyalarini merge yapabilmek icin. (Aslinda merge yapmadan da ayri dosyalarda ayarlari tutabiliriz ama ben ortak mergeleri bir dosyada tutup dev ve prod icin ayri ayar dosyalari olusturup ortak dosyalari bu iceride birlestirecegim bu sayede)
    mini-css-extract-plugin production asamasinda bize yarar ve ayri ayri css dosyalarina cikartir style dosyalarini
    diger ikisi optimizasyon ve performans icin. production kisminda kullanildi
    npm i -D mini-css-extract-plugin optimize-css-assets-webpack-plugin terser-webpack-plugin webpack-merge copy-webpack-plugin
  
  *! webpack.dev.js icin en onemli development ayarlari asagidakilerdir.
  *! devServer icinde developmentda calisacak server ayarlarini yapiyoruz
  *! port ile calisacaka server portu yani https://localhost:8080
  *! Ve bu ayarlar otomatikmen sistemdeki default browseri calistirip yukaridaki adresi acacakdir
  *! new webpack.HotModuleReplacementPlugin(), Bu, modüllerin sayfayı tamamen yeniden yüklemeden güncellenmesine olanak tanır - bu nedenle, bazı stilleri güncellerseniz, yalnızca bu stiller değişir ve JavaScript'in tamamını yeniden yüklemeniz gerekmez, bu da geliştirme sürecini çok hızlandırır.
  const webpack = require("webpack");
  const paths = require("./paths");
  const { merge } = require("webpack-merge");
  const common = require("./webpack.common");
  module.exports = merge(common, {
    ...
    mode: 'development',
    // Control how source maps are generated
    devtool: "inline-source-map",
    devServer: {
      historyApiFallback: true,
      contentBase: paths.build,
      open: true,
      compress: true,
      hot: true,
      port: 8080,
    },

    plugins: [
      ... 
      // Only update what has changed on hot reload
      new webpack.HotModuleReplacementPlugin(),
    ],
  })
  
  *! Environment variables tanimlayip scripts kisminda kullanabilmek icin cross-env'yi yukleyelim.
    npm i -D cross-env
  *! Ve asagidaki scripts'leri package.json'a tanimlayin ve build ve dev olarak ayri ayri configuration'larla server'larinizi calistirmaya baslayin.
  "scripts": {
    "dev": "cross-env NODE_ENV=development webpack serve --config config/webpack.dev.js",
    "build": "cross-env NODE_ENV=production webpack --config config/webpack.prod.js"
  },

  Ve artik npm run dev veya dpn run build ile calismalarinizi baslatabilirsiniz.

  

  ?Mode
  *!package.json icinde scripts kisminda webpack'i calistirabilecegimiz 
  *3 çeşit mode vardır bunlar;
    -development
    -production
    -none

  webpack.config.js
  module.exports = {
      mode: "development|production|none",
      //...
  }
  *!yukarıda yaptığımız işlemde ise eğer package.json içerisinde 
  *scripts tag’leri arasında yazılmadığı durumlar var ise 
  *burada yazılan mode aktif olur.

  *!NOT: scripts tag’leri ve webpack.config.js içerisinde aynı anda mode değeri 
  *kullanılırsa scripts içerisinde yazılan mode değeri baz alınır.

  *development: bu mode ile birlikte NamedChunksPlugin ve NamedModulesPlugin eklentileri çalışmaktadır.
  *production: bu mode ile birlikte FlagDependencyUsagePlugin, FlagIncludedChunksPlugin, ModuleConcatenationPlugin, NoEmitOnErrorsPlugin, OccurrenceOrderPlugin, SideEffectsFlagPlugin, UglifyJsPlugin eklentileri çalışmaktadır.
  *none: varsayılan tüm optimizasyon seçeneklerini kullanmadan sonuç üretir


  ?Browser Compatibility
  Tarayıcı uyumluluğu en önemli konulardan biri peki webpack derlenen bu paketlerde tarayıcılara uyumluluğu nasıl sağlar ?
  Webpack aslında ES5 standartlarına uyumlu tüm tarayıcıları destekler.(IE8 ve altı desteklenmez). Yani IE8 altında olan tarayıcılar hariç neredeyse tüm tarayıcıları destekler.
  Paketlenen kodların eski tarayıcılarda desteklenmesini istiyorsanız Shimming yöntemlerinden Pollyfills kullanımınına bakmanızı tavsiye ederim. (babel-preset-env , babel-polyfill, babel-loader)
  ÖNEMLİ: webpack ile çalışabilmek için NodeJS 8 ve üzeri bir versiyonun kurulu olması gerekmektedir

  !Webpack 4 kullanımı: CSS Desteği Autoprefixer
  * Amacimiz: webpack ile css’de yazdığımız kodları geriye dönük bir şekilde nasıl uyumlu hale getireceğimizden bahsedeceğim.


  ?PostCSS nedir ?
  CSS ile yazdığımız kodlarda ihtiyaç duyduğumuz özellik ve eklentiler için saf CSS kodlarına yapılacak tüm işlemleri PostCSS aracılığı ile yapmamız mümkün. Ayrıca PostCSS bu işlemleri JavaScript yardımı ile yapmaktadır.
  PostCSS ‘in birden fazla eklentisi mevcuttur 
    - Sass kodlarını CSS ‘e çevirmek 
    - veya yazdığımız CSS kodlarından beğenmediğimiz satırları çıkarabilmek gibi 
  Aslında bir sürü farkli eklentiside mevcut. Autoprefixer ise bunlardan biri.
  PostCSS eklentileri: https://github.com/postcss


  ?Autoprefixer nedir ?
  CSS içerisinde bulunan kodların tarayıcı desteği sağlaması için kullanılan bir PostCSS eklentisidir. Temel görevi eski tarayıcılarda çalışmayan CSS kodlarının uyumluluğunu sağlamak.
    Örnek vermek gerekirse flexbox kullanmak istediğimizde güncel tarayıcılar da çalışmasında hiçbir sorun yok fakat eski tarayıcıların kullanımında bazı prefix’leri ihtiyaç duymaktayız.
    Flexbox ≥ chrome 21 sürümlerini desteklemektedir. Fakat bazı tarayıcılar örneğin IE 10 flex vb property’lerin kullandığı justify-content vb özelliği ve flexbox’ı prefix olmadan aslında desteklememektedir.
    Eğer -ms ekini almaz ise sadece IE 11 ve üzeri sürümleri destekleyerek sınırlanır.
    Örnek tarayıcı listesini buradan inceleyebilirsiniz: https://caniuse.com/#search=justify-content
  
  Autoprefixer’ın görevide tam bu noktada devreye giriyor aslında tarayıcı uyumluluklarına göre istediğimiz prefix ‘i CSS kodlarımızın içerisine ekleterek desteğimizi artırabiliriz.
  
  Autoprefixer’ın tarayıcıların kullanım % oranı veya versiyonlara özel kullandığı tüm prefix’leri önizlemesinin yapılabildiği websitesini ziyaret etmenizi öneririm. https://autoprefixer.github.io/

  Not: Autoprefixer tarayıcı verilerini Can I Use database’inden sağlamaktadır. Bunu yapabilmek içinde browserslist yapılandırmasını kullanmamız mümkün. Browserslist yapılandırmasını kullanmanın en büyük avantajı JS ve CSS desteğinin beraber kullanılabilmesidir.
  Browserslist’in tarayıcı kullanım oranlarını sunduğu websitesinide incelemenizi öneririm. http://browserl.ist/


  ?Webpack ile Autoprefixer örneklemesi:
  *İlk olarak postcss loaders ve autoprefixer paketlerimizi kurmamız gerekmektedir.
  Reposu: https://github.com/postcss/postcss-loader
  *npm install --save-dev postcss-loader autoprefixer
  veya
  *yarn add postcss-loader autoprefixer --dev

  {
    test: /\.css$/,
    use: [
      "style-loader",
      "css-loader",
      "postcss-loader",
    ],
  },
  * "postcss-loader" i use kismina eleman olarak ekliyoruz ve postcss.config.js dosyasi olsuturup asagidaki ayarlari oraya kopyaliyoruz.
  module.exports = {
    plugins: [require("autoprefixer")],
  };
  *! Bu eklememizin amaci postcss-loader'i kullanarak postcss eklentisi 
  *autoprefixer'i projemize dahil etmek istememiz.

  *! Ayrıca autoprefixer kütüphanesi prefix eklemek için tarayıcı destek listesine ihtiyaç duyar. Bu liste 2 şekilde tanımlanabilir.
  *1.yöntem
    Ana path üzerinde .browserslistrc adlı bir dosya oluşturmak ve içerisinde tarayıcı destek listesi bulunmalıdır.
      .browserslistrc
        # Browsers that we support
        >0.01%
  *2. yöntem
    Projemizin package.json dosyası içerisinde browserslist objesi oluşturup tarayıcı destek listesi bulunmalıdır.
      package.json
        "browserslist": [
          ">0.01%"
        ]
  !Not: Tarayıcı listemizi oluştururken tüm tarayıcılara destek vermek yerine sadece projemizin aktif olarak kullanıldığı tarayıcıları belirtmekte çok önemli çünkü gereksiz yere kullanım oranı düşük olan tarayıcılar için destek verebilmek için kodlarımıza bir sürü prefix eklememiz gerekir buda kodların şişmesine neden olacaktır.

  *prefixer eki alan tarayici ornek resimi => https://miro.medium.com/max/700/1*F-1ml47I6_0dlf3agT1oBw.png
  *prefixer eki ALMAYAN tarayici ornek resimi => https://miro.medium.com/max/700/1*iAuYaxor_y4rlGD7cgW4wA.png
  ?Autoprefixer detayli kullanim documentation => https://github.com/postcss/autoprefixer

  *Ve artik npm run dev dedigimizde css kodlarimizda js dosyasinin icine bundle edilecektir.


  !Webpack 4 kullanımı: CSS Preprocessor (Sass, Scss, Less)
  ?SASS, SCSS ve LESS nedir ?
    Kısaca CSS yazmayı daha kolay ve dinamik bir hale getirmek için ortaya çıkan dil yapıları diyebiliriz.
    CSS’den farklı olarak iç içe kullanılabilen yapılar, ortak kullanabileceğiniz fonksiyonlar veya değişkenler de bu yapıda mevcut. Ayrıca ölçeği büyük uygulamalarda bu tarz yapılar çok önemli bir rol oynamaktadır.
    Temelde SASS, SCSS ve LESS aslında aynı özelliklere sahip fakat yazım tarzı olarak değişikliklerden dolayı farklılık göstermektedir.
  sass-loader kullanımı:
    Webpack için sass kullanımında loaders olarak sass-loader’a ihtiyacımız vardır. Bunun yanı sıra Node Sass veya Dart Sass’ıda kurmamız gerekmektedir. Sass loader aslında SASS ile birlikte SCSS dosyalarınıda tanımlamak için kullanılır.
    *npm install --save-dev sass-loader node-sass css-loader style-loader
  less-loader kullanımı:
    Webpack için less kullanımında loaders olarak less-loader’a ihtiyacımız vardır. Bunun yanı sıra Sass’dan farklı olarak bu loaders less paketine ihtiyaç duymaktadır.
    *npm install --save-dev less less-loader css-loader style-loader
  Veya her ikisini birdende yukleyip kullanabilirsiniz
    *npm install --save-dev sass-loader node-sass less less-loader css-loader style-loader
*/
