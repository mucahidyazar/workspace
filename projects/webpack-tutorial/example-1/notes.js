/*
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
