const path = require('path');

//Config dosyasini ayarladiktan sonra artik babel output dosyasina ihtiyac kalmiyor webpack bunu bizim icin zaten yapiyor olacak

// Entry point
module.exports = {
    mode: 'development',
    entry: './src/app.js',
    
    //outputta 2 sey ayarlamamiz tanimlamamiz gerekiyor. Path ve filename
    output: {
        //(./public) bu sekilde tanimlayamayiz burada onun icin asagidaki sekilde tanimlkiyoruz.
        //Bu path yoluna webpack bizim icin tum projeyi bundle.js adinda tek bir dosyada toplayacak.
        path: path.join(__dirname, 'public'),
        //filename istedigimiz herhangi birsey olabilir. Genelde bundle.js kullaniliyor onun icin bende onu kullanacagim
        filename: 'bundle.js'
    },



    //babelimizin yaptigi renderin dogru calisip wepack ile duzenlenip ekrana atilmasi icin loader ile ayarlanmasi gerekiyor.
    //Yani LOADER webpack in davranislarini sekillendirir customize eder ona verilmis bir dosyayi yukletmek istedigimiz zaman.
    //LOADER module property icinde tanimlanir.
    
    //Bunun icin @babel/core ve babel-loader yukleyecegiz. Babel-core babel-cli gibidir.
    //babel-cli commandda yani terminalde babel kodlarimizi calistirmaya yarar boylelikle onlari belirledigimiz yerdeki dosyalarin icine gomeriz.
    //babel-core ise web-pack gibi toolslardan babel i calistirmamiza yarar
    //babel-loader ise web-pack'e babelin nasil calisacagini ve ne zaman babelin cikti dosyalarini servis edecegini ogreten bir webpack pluginidir.Babel-core da iste bunun gibi pluginleri calistirir.
    module: {
        //Biz burada kurallari belirtiyoruz. Cok fazla kural koyabiliriz ama simdilik bize burada sadece asagidaki tek kural lazimdi onuda koyduk
        rules: [{
            loader: 'babel-loader',
            //Ne type dosylara calistirmak istedigimizi burada belirtiyoruz. Ben javascript dosyalari calistirmak istedigim icin .js i asagidaki sekilde ifade ettim $ isareti harflerin son sinirini \ isareti harflerin bas sinirini belirtir ve // ifadenin arasina yazilir. Detayli bilgi icin REGULAR EXPRESSION i arayin
            test: /\.js$/,
            //Dahil etmek istemedigimiz dosyalari ayarlariz EXCLUDE'de. Ve biz tum Node_modules'un dahil olmamasini istiyoruz cunku bu moduller zaten islem gormus ve productiona surulmus dosyalar.
            exclude: /node_modules/
        },
        {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }
    ]
    },
    //Babel icin webpack ayarlari boylelikle tamam. Artik yapmamiz gereken tek sey kaldi.
    //babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
    //Oda yukarida babeli calistirirken verdigimiz bilgileri ayarlamak
    //O ayarlamayida ana root dizininde .babelrc yi kurarak ayarliyoruz.
    //ORNEK .babelrc
    // {
    //     "presets": [
    //         "@babel/preset-env",
    //         "@babel/preset-react"
    //     ]
    // }

    //SOURCE MAP /// KAYNAK HARITALAMA
    //console.logda hata aldikmi bundle.js de olan hata yerini bize gosterecek. Fakat bunu webpack olusturuyor ve duzenliyor bizim duzenlememiz gereken bu degil. Bize dogru yeri gostermesi icn hatalarda bunu ayarlamamiz gerekiyor burada
    //devtool bir stringe ayarlanmasi gerekiyor bunun icin. Bir kac cesit string ayarlamasi yapilabilir. Bazilari development icin iyidir bazilari production kismi icin iyidir. webpack.js.org dev tool section dan bunlara ayrintiuli bakabilirsiniz.
    //Ayrntilar icin buradan bakin https://webpack.js.org/configuration/devtool/
    //Productionda farkli kod kullanilacak.
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        //contentBase'e path vermemiz gerekiyor fakat normal './' seklinde veremeyiz. 
        //Tam dizi nalmamiz gerekiyor loaderde yaptigimiz gibi yapip path i veriyoruz.
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true //Bu kodla diger route larimizinda gosterilmesini saglariz. Bunu yazmazsak 404 hatasi verir 1. routeden sonrasi
    }
};