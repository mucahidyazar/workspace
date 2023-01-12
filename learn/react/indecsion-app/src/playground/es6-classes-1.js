class Person {
    //Bu sekilde yaparsak asagida tanimladigimiz new Person icinden gelen deger parantez icindeki name olur. Ve this.name'de name olur.
    //name'e eger deger verilmezse default olarak string 'Anonymous' olsun dedik. Tabi orasi boelan bir deger sayi veya herhangi baska birseyde olabilirdi.
    //Constructor bir fonksiyondur bu sekilde gordugunuz gibi.
    //Asagidaki gibi this lerler degisken olsuturup tanimlamalar yapabiliriz.
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = 25;
        this.adress= 'My adress';
    }

    getGretting(){
        return 'Hi';
    }

    getName(){
        //Bu sekilde Person objemizden return yapan fonksiyon olusturabilir ve asagidaki gibi de cagirabiliriz.
        // return 'Hi I am ' + this.name;
        //Yada asagidaki gibi de ayni islemi yapabiliriz.
        return `Hi I am ${this.name}`;
    }

    //CHALLENGE
    getDescription(){
        return this.name + ' is ' + this.age + ' year(s) old.';
    }
}

const me = new Person('Mucahid Yazar');
console.log(me);
//CIKTI = Person {name: "Mucahid Yazar"}

const other = new Person();
console.log(other);
//CIKTI = Person {name: undefined} //Eger default degeri eklemeseydik yukarda

//getGretting 'e asagidaki gibi ulasabiliriz.
//console.log(me.getGretting); Asagidaki gibi parantez acmazsak fonksiyonu calistirmayiz. Bu sekilde fonksiyonun temelini yani kod icerigini yazdirir.
console.log(me.getGretting());
console.log(other.getGretting());
console.log(me.getName());

//CHALLENGE
const person1 = new Person('Mucahid Yazar');
console.log(person1.getDescription());