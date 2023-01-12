class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = 25;
    }

    getGreeting(){
        return `Hi I am ${this.name}.`;
    }

    getDescription(){
        return this.name + ' is ' + this.age + ' year(s) old.';
    }
}

//extends den sonra diger class ismini yazarak, diger classin yani extends den sonra yazdigimiz classin tum fonksiyonelligini alip kullanabiliriz.
class Student extends Person {
    constructor(name, age, major){
        super(name, age)
        //Fakat bunu tanimlamadan once parent constructor'i yani Personun constructorunu cagirmamiz gerekiyor. Onun icinde yukaridaki gibi superle cagiririz ve almak istedigimiz degerleri yazariz.
        this.major = major
    }

    hasMajor() {
        //!! asagida yani this.major varsa true yoksa false donecektir.
        return !!this.major;
    }

    //Eger ayni fonksiyonu burada tanimlarsak extends den alacagi yerde buradaki fonksiyonu calistirir yani uzerine yazar.
    getDescription(){
        //return 'deneme';
        ////Veya parenttakinin uzerine yazmak yerine oradaki metodu child olarak bir degiskenede atayabiliriz asagidaki gibi.
        let description = super.getDescription();
        
        //classin getDescription fonksiyonunu kullananlar eger major olarak 3. deger gonderiyorlarsa '!!this.hasMajor()' true donecegi icin, parent elementten cektigimiz description'a ek birde major bilgisini ekleyerek ciktisini istiyoruz. Ornek otherTwo major bilgisine sahipken otherthree sahip degil birde major olarak undifined almiyor burdaki kosulumuzdan oturu.
        if(!!this.hasMajor()){
            description += ` His/Her major is ${this.major}.`;
        }
        return description;
    }
}

const me = new Person('Hakan Yazar', 25);
console.log(me.getDescription());

const otherOne = new Person('Mucahid Yazar', 28);
console.log(otherOne.getDescription());

//extends yaptiktan sonra bu alttaki ile ustteki bize bire bir ayni ciktiyi verecektir
//Yani new Student yaparak Person daki tum bilgileri kullanabiliriz extends yaptiktan sonra
const otherTwo = new Student('Mucahid Yazar', 28, 'Computer Science');
console.log(otherTwo.getDescription());

const otherThree = new Student('Mucahid Yazar', 28);
console.log(otherThree.getDescription());

//otherTwo major gonderdigi icin degiskenine TRUE olarak donecektir. Fakat otherOne student olamdigi icin ve person student'tan extend etmedigi icin hata alinacaktir terminalde. Otherthree ise gondermedigi icin false alacaktir.
//console.log(otherOne.hasMajor());
console.log(otherTwo.hasMajor());
console.log(otherThree.hasMajor());



class Traveler extends Person {
    constructor(name, age, location){
        super(name, age)
        this.location = location;
    }

    getGreeting(){
        let greeting = super.getGreeting();
        
        if(this.location){
            return greeting += `I am visiting from ${this.location}`;
        }
        return greeting;
    }
}

const otherFour = new Traveler('Mucahid Yazar', 25, 'Istanbul');
console.log(otherFour.getGreeting())

const otherFive = new Traveler('Furkan Yazar', 18);
console.log(otherFive.getGreeting());





//NOT
//Javascriptte
//!'' true demektir
//!'Mucahid' false demektir
//!!'' false demektir
//!!'Mucahid' true demektir
//!undefined true demektir
//!!undefined false demektir