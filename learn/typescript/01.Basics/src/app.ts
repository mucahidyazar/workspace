//tsc app.ts --watch veya tsc app.ts -w

//Birden fazla ts dosyası varsa
//tsc --init yapıyoruz ve typescript config dosyasını alıyoruz
//Bundan sonra tsc yaparak tüm ts dosyalarını js dosyasına çeviririz.
//tsc -w veya tsc --watch ile tüm dosyaları izleyerek çeviririz.



//compile edilmesini istemediğimiz dosyaları tsconfig içerisine bu şekilde ekleriz
"exclude": [
    "analytics.ts"
]
//herhangi bir isimle başlayıp .ts ile biten hiçbirşey compile edilmez
"exclude": [
    "*.ts"
]
//herhangi bir dizinde ki herhangi bir isimle başlayan .ts compile edilmez
"exclude": [
    "**/*.dev.ts"
]
//node_modules içinde ki hiçbir yüklenen modul compile edilmez.
//node_modules u eklemeye gerek yok default olarak zaten ekli ve compile edilmiyor
"exclude": [
    "node_modules"
]

//Aynı uzantı şekilleriyle include işlemlerimizi de yapabiliriz
//Boş bıraktıgımızda tsc yaparsak herşeyin include oldugunu düşenerek herşeyi compile eder
//Yada aşağıdaki gibi veya yukarıdaki gibi yol isimleriyle sadece include edilmesi gereken yolları belirleyebilirsiniz
"include": [
    "app.ts",
    "analytics.ts"
]

//Buda dosya isimiyle include edbilmemize yarar. Sadece dosyalar compile edilir.
"files": [
    "app.ts",
    "analytics.ts"
]

//Hangi teknoloji ile compile edilmesini seçeriz. Default olan es5 iyidir.
"target": "es5"

//lib içine default olarak tanıması gereken libraryleri yazarız.
"lib": [
    "es6",
    "dom",
    "dom.iterable"
],  