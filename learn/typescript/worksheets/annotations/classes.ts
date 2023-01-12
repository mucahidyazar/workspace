class Vehicle {
    color: string = "red";

    drive(): void {
        console.log("chugga chugga")
    }
    protected honk():void {
        console.log("beep");
    }
}

const vehicle = new Vehicle();
vehicle.drive();

//extends ile Vehicle içindeki herşeye erişebiliriz.
class Car extends Vehicle {
    //Eger aynı ısımde bırbaska degısken tanımlarsak extendsten aldıgının ustune yazar bu kısımdakını
    drive(): void {
        console.log("vroom");
    }
}
const car = new Car();
car.drive();
car.honk();



//PUBLIC - PRIVATE - PROTECTED
// Genel olarak class lar birşey belirtilmediği sürece publictir. Aşağıdaki gibi
//PUBLIC
class Bcycle extends Vehicle {
    public drive(): void {
        console.log("vroom");
    }
}

//PRIVATE
//Eger private ise onu asla class dışından çağıramayız kullanamayız. Tam olarak amacı güvenmediğimiz metodların başkaları tarafından çağrılıp kullanılmasını istemediğimiz için private ile saklarız.
//private methodlar extends yapılsa dahi kullanılamazlar bunun için PROTECTED kullanmak gerekiyor.
//Fakat içeride başka bir değişken oluşturup onunla private ı çağırıp daha sonra bu değişkeni dışarıda kullanabiliriz aşağıdaki gibi.
class Truck extends Vehicle {
    private drive(): void {
        console.log("vroom");
    }
    startDrivingProcess(): void {
        this.drive();
    }
}
const truck = new Truck();
truck.startDrivingProcess();

//PROTECTED
//PROTECTED larda class dışından çağrılmaz. Fakat extends yaptıgımız classlardan extends yaptığımız classlardaki private methodlarını kullanamayızda onun için onları kullanabilmek için PROTECTED yaparız.
class Train extends Vehicle {
    //Eger aynı ısımde bırbaska degısken tanımlarsak extendsten aldıgının ustune yazar bu kısımdakını
    drive(): void {
        console.log("vroom");
    }
}



//Class içinde gönderilen değeride aşağıdaki gibi constructorda zorunluluk getiririz
//Ve this.color yaparak ilk baştaki coloruda değiştiririz.
//UZUN HALI
class Color1 {
    color: string = "red";

    constructor(color: string) {
        this.color = color;
    }
}
const color1 = new Color1("yellow")
//KISA HALI
//Aynı zamanda private ve protected da yapabiliriz.
class Color2 {
    constructor(public color: string) {
        
    }
}
const color2 = new Color2("yellow")


//SUPER
//Farklı classlarda extends ve contrtuctor birlikte kullanılmak isterse aşağıdaki gibi super i çağırmak ve tanımları kullanmak zorundayız.
class Color3 {
    constructor(public color: string) {

    }
}
class Color4 extends Color3 {
    constructor(public number: number, color: string) {
        super(color);
    }
}
const color4 = new Color4(44, "red");





