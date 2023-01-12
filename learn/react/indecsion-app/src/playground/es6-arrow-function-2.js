// Arguments Object - No longer bound with arrow functions
const add = function (a, b) {
    //Normal fonksiyon kurma sekli ile argumentslere erisebiliriz.
    //Yukarisi icin argumentler add icinde calistirilan degerlerdir. Yani a,b degil cagrilirken kullanilan 50,1,20 dir.
    //Fonksiyon icinden Argumentslere ulasabiliriz.
    console.log(arguments);
    return a + b;
}
console.log(add(55,1,20));

//Arrow functions kullanirken arguments leri kullanmak istersek terminal coker yani hata aliriz yani kullanamayiz.



// This keyword - No longer bound with arrow functions
const user = {
    name: 'Andrew',
    cities: ['Istanbul', 'Izmir', 'Ankara'],
    
    //Eger burasida arrow function olursa icindeki this bu sefer useri degil bir ust parent elementini gosterir yani global scopea cikar es6-arrow-functions-2.js dosyasini gosterir.
    //fakat alt satiri 'printPlacesLived () {' bu sekilde kullanabilirizde. Yine thise erisebilir ve argumentslere erisebiliriz.
    printPlacesLived: function () {
        //Burada this ile user objemize erisebiliriz.
        console.log(this.name);
        console.log(this.cities);
        this.cities.forEach( (city) => {
            //Burada this=undifined'dir. Burada yapabilecegimiz 3 YONTEM vardir.
            // 1. Buradan usera this seklinde ulasabilmek icin ya 2. fonksiyonun sonunda bind ile thisi baglayacagiz 
            // 2. yada yukarida ilk fonksiyonun icinde thisi bir degiskene atayacagiz ve this yerine o degiskeni yazip oyle kullanacagiz. 
            // 3. Yada 2. fonksiyonu arrow functionlarla tanimlayacagiz.
            console.log(this.name + 'has lived in ' + city);
        })
    }
};
user.printPlacesLived();

// YANLIS
// const user = {
//     name: 'Andrew',
//     cities: ['Istanbul', 'Izmir', 'Ankara'],
//     printPlacesLived: function () {
//         this.cities.forEach(function (city) {
//             console.log(this.name + 'has lived in ' + city);
//         })
//     }
// };
// user.printPlacesLived();

// YONTEM 1 - DOGRU - DEGISKEN ATAYARAK
// const user = {
//     name: 'Andrew',
//     cities: ['Istanbul', 'Izmir', 'Ankara'],
//     printPlacesLived: function () {
//         const that = this;
//         this.cities.forEach(function (city) {
//             console.log(that.name + 'has lived in ' + city);
//         })
//     }
// };
// user.printPlacesLived();

// YONTEM 2 - DOGRU - BIND ILE
// const user = {
//     name: 'Andrew',
//     cities: ['Istanbul', 'Izmir', 'Ankara'],
//     printPlacesLived: function () {
//         this.cities.forEach(function (city) {
//             console.log(this.name + 'has lived in ' + city);
//         }.bind(this));
//     }
// };
// user.printPlacesLived();

// YONTEM 3 - DOGRU - ARROW FUNCTIONS'LAR ILE
// const user = {
//     name: 'Andrew',
//     cities: ['Istanbul', 'Izmir', 'Ankara'],
//     printPlacesLived: function () {
//         this.cities.forEach( (city) => {
//             console.log(this.name + 'has lived in ' + city);
//         });
//     }
// };
// user.printPlacesLived();



// MAP KULLANIMI
const user2 = {
    name: 'Andrew',
    cities: ['Istanbul', 'Izmir', 'Ankara'],    
    printPlacesLived: function () {
        //MAP'ler bize bir dizi dondurur. Yani cityMessage asagida bize bir dizi dondurecek. forEach gibi forEach icinde tek tek gezdiklerini ele alir ve ulasir bu ise tek tek dolasir ele alir ve onlari bir dizide toplar.
        return this.cities.map((city) => {
            //forEach ve Map gibi hazir fonksiyonlarda arrow fonksiyon olsa dahi thise erisebiliriz icinde bulundugumuz objenin.
            return this.name + ' has lived in ' + city;
        });
    }
};
console.log(user2.printPlacesLived());
//CIKTI
//(3) ["Andrew has lived in Istanbul", "Andrew has lived in Izmir", "Andrew has lived in Ankara"]



//CHALLENGE AREA
const multiplier = {
    numbers: [0,1,2,3,4,5,6,7,8,9],
    multiplyBy: 1,
    multiply () {
        return this.numbers.map( (number) => number + 'x' + this.multiplyBy + '=' + (number*this.multiplyBy));
    }
}
console.log(multiplier.multiply());

