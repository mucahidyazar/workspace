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
  *! new webpack.HotModuleReplacementPlugin(), Bu, mod??llerin sayfay?? tamamen yeniden y??klemeden g??ncellenmesine olanak tan??r - bu nedenle, baz?? stilleri g??ncellerseniz, yaln??zca bu stiller de??i??ir ve JavaScript'in tamam??n?? yeniden y??klemeniz gerekmez, bu da geli??tirme s??recini ??ok h??zland??r??r.
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
  *3 ??e??it mode vard??r bunlar;
    -development
    -production
    -none

  webpack.config.js
  module.exports = {
      mode: "development|production|none",
      //...
  }
  *!yukar??da yapt??????m??z i??lemde ise e??er package.json i??erisinde 
  *scripts tag???leri aras??nda yaz??lmad?????? durumlar var ise 
  *burada yaz??lan mode aktif olur.

  *!NOT: scripts tag???leri ve webpack.config.js i??erisinde ayn?? anda mode de??eri 
  *kullan??l??rsa scripts i??erisinde yaz??lan mode de??eri baz al??n??r.

  *development: bu mode ile birlikte NamedChunksPlugin ve NamedModulesPlugin eklentileri ??al????maktad??r.
  *production: bu mode ile birlikte FlagDependencyUsagePlugin, FlagIncludedChunksPlugin, ModuleConcatenationPlugin, NoEmitOnErrorsPlugin, OccurrenceOrderPlugin, SideEffectsFlagPlugin, UglifyJsPlugin eklentileri ??al????maktad??r.
  *none: varsay??lan t??m optimizasyon se??eneklerini kullanmadan sonu?? ??retir


  ?Browser Compatibility
  Taray??c?? uyumlulu??u en ??nemli konulardan biri peki webpack derlenen bu paketlerde taray??c??lara uyumlulu??u nas??l sa??lar ?
  Webpack asl??nda ES5 standartlar??na uyumlu t??m taray??c??lar?? destekler.(IE8 ve alt?? desteklenmez). Yani IE8 alt??nda olan taray??c??lar hari?? neredeyse t??m taray??c??lar?? destekler.
  Paketlenen kodlar??n eski taray??c??larda desteklenmesini istiyorsan??z Shimming y??ntemlerinden Pollyfills kullan??m??n??na bakman??z?? tavsiye ederim. (babel-preset-env , babel-polyfill, babel-loader)
  ??NEML??: webpack ile ??al????abilmek i??in NodeJS 8 ve ??zeri bir versiyonun kurulu olmas?? gerekmektedir

  !Webpack 4 kullan??m??: CSS Deste??i Autoprefixer
  * Amacimiz: webpack ile css???de yazd??????m??z kodlar?? geriye d??n??k bir ??ekilde nas??l uyumlu hale getirece??imizden bahsedece??im.


  ?PostCSS nedir ?
  CSS ile yazd??????m??z kodlarda ihtiya?? duydu??umuz ??zellik ve eklentiler i??in saf CSS kodlar??na yap??lacak t??m i??lemleri PostCSS arac??l?????? ile yapmam??z m??mk??n. Ayr??ca PostCSS bu i??lemleri JavaScript yard??m?? ile yapmaktad??r.
  PostCSS ???in birden fazla eklentisi mevcuttur 
    - Sass kodlar??n?? CSS ???e ??evirmek 
    - veya yazd??????m??z CSS kodlar??ndan be??enmedi??imiz sat??rlar?? ????karabilmek gibi 
  Asl??nda bir s??r?? farkli eklentiside mevcut. Autoprefixer ise bunlardan biri.
  PostCSS eklentileri: https://github.com/postcss


  ?Autoprefixer nedir ?
  CSS i??erisinde bulunan kodlar??n taray??c?? deste??i sa??lamas?? i??in kullan??lan bir PostCSS eklentisidir. Temel g??revi eski taray??c??larda ??al????mayan CSS kodlar??n??n uyumlulu??unu sa??lamak.
    ??rnek vermek gerekirse flexbox kullanmak istedi??imizde g??ncel taray??c??lar da ??al????mas??nda hi??bir sorun yok fakat eski taray??c??lar??n kullan??m??nda baz?? prefix???leri ihtiya?? duymaktay??z.
    Flexbox ??? chrome 21 s??r??mlerini desteklemektedir. Fakat baz?? taray??c??lar ??rne??in IE 10 flex vb property???lerin kulland?????? justify-content vb ??zelli??i ve flexbox????? prefix olmadan asl??nda desteklememektedir.
    E??er -ms ekini almaz ise sadece IE 11 ve ??zeri s??r??mleri destekleyerek s??n??rlan??r.
    ??rnek taray??c?? listesini buradan inceleyebilirsiniz: https://caniuse.com/#search=justify-content
  
  Autoprefixer?????n g??revide tam bu noktada devreye giriyor asl??nda taray??c?? uyumluluklar??na g??re istedi??imiz prefix ???i CSS kodlar??m??z??n i??erisine ekleterek deste??imizi art??rabiliriz.
  
  Autoprefixer?????n taray??c??lar??n kullan??m % oran?? veya versiyonlara ??zel kulland?????? t??m prefix???leri ??nizlemesinin yap??labildi??i websitesini ziyaret etmenizi ??neririm. https://autoprefixer.github.io/

  Not: Autoprefixer taray??c?? verilerini Can I Use database???inden sa??lamaktad??r. Bunu yapabilmek i??inde browserslist yap??land??rmas??n?? kullanmam??z m??mk??n. Browserslist yap??land??rmas??n?? kullanman??n en b??y??k avantaj?? JS ve CSS deste??inin beraber kullan??labilmesidir.
  Browserslist???in taray??c?? kullan??m oranlar??n?? sundu??u websitesinide incelemenizi ??neririm. http://browserl.ist/


  ?Webpack ile Autoprefixer ??rneklemesi:
  *??lk olarak postcss loaders ve autoprefixer paketlerimizi kurmam??z gerekmektedir.
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

  *! Ayr??ca autoprefixer k??t??phanesi prefix eklemek i??in taray??c?? destek listesine ihtiya?? duyar. Bu liste 2 ??ekilde tan??mlanabilir.
  *1.y??ntem
    Ana path ??zerinde .browserslistrc adl?? bir dosya olu??turmak ve i??erisinde taray??c?? destek listesi bulunmal??d??r.
      .browserslistrc
        # Browsers that we support
        >0.01%
  *2. y??ntem
    Projemizin package.json dosyas?? i??erisinde browserslist objesi olu??turup taray??c?? destek listesi bulunmal??d??r.
      package.json
        "browserslist": [
          ">0.01%"
        ]
  !Not: Taray??c?? listemizi olu??tururken t??m taray??c??lara destek vermek yerine sadece projemizin aktif olarak kullan??ld?????? taray??c??lar?? belirtmekte ??ok ??nemli ????nk?? gereksiz yere kullan??m oran?? d??????k olan taray??c??lar i??in destek verebilmek i??in kodlar??m??za bir s??r?? prefix eklememiz gerekir buda kodlar??n ??i??mesine neden olacakt??r.

  *prefixer eki alan tarayici ornek resimi => https://miro.medium.com/max/700/1*F-1ml47I6_0dlf3agT1oBw.png
  *prefixer eki ALMAYAN tarayici ornek resimi => https://miro.medium.com/max/700/1*iAuYaxor_y4rlGD7cgW4wA.png
  ?Autoprefixer detayli kullanim documentation => https://github.com/postcss/autoprefixer

  *Ve artik npm run dev dedigimizde css kodlarimizda js dosyasinin icine bundle edilecektir.


  !Webpack 4 kullan??m??: CSS Preprocessor (Sass, Scss, Less)
  ?SASS, SCSS ve LESS nedir ?
    K??saca CSS yazmay?? daha kolay ve dinamik bir hale getirmek i??in ortaya ????kan dil yap??lar?? diyebiliriz.
    CSS???den farkl?? olarak i?? i??e kullan??labilen yap??lar, ortak kullanabilece??iniz fonksiyonlar veya de??i??kenler de bu yap??da mevcut. Ayr??ca ??l??e??i b??y??k uygulamalarda bu tarz yap??lar ??ok ??nemli bir rol oynamaktad??r.
    Temelde SASS, SCSS ve LESS asl??nda ayn?? ??zelliklere sahip fakat yaz??m tarz?? olarak de??i??ikliklerden dolay?? farkl??l??k g??stermektedir.
  sass-loader kullan??m??:
    Webpack i??in sass kullan??m??nda loaders olarak sass-loader???a ihtiyac??m??z vard??r. Bunun yan?? s??ra Node Sass veya Dart Sass?????da kurmam??z gerekmektedir. Sass loader asl??nda SASS ile birlikte SCSS dosyalar??n??da tan??mlamak i??in kullan??l??r.
    *npm install --save-dev sass-loader node-sass css-loader style-loader
  less-loader kullan??m??:
    Webpack i??in less kullan??m??nda loaders olarak less-loader???a ihtiyac??m??z vard??r. Bunun yan?? s??ra Sass???dan farkl?? olarak bu loaders less paketine ihtiya?? duymaktad??r.
    *npm install --save-dev less less-loader css-loader style-loader
  Veya her ikisini birdende yukleyip kullanabilirsiniz
    *npm install --save-dev sass-loader node-sass less less-loader css-loader style-loader
*/
