//DECORATORS leri kullanacaksak
//target es6 olmali
//"experimentalDecorators": true OLMALI
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Decorator ler function olarak tanimlaniyor ve genellikle buyuk harfle baslarlar
function Logger(constructor) {
    console.log('Logging...');
    console.log(constructor);
}
// Logger decoratoru kendisinden sonra gelen class i yazdirir
var Person1 = /** @class */ (function () {
    function Person1() {
        this.name = "Max";
        console.log('Creating person pbject1...');
    }
    Person1 = __decorate([
        Logger
    ], Person1);
    return Person1;
}());
var pers1 = new Person1();
//VALUE ile birlikte declorator kullanimi
//Bu sekilde decloratorleri daha guclu bir sekilde kullanabiliriz.
function Logger2(value) {
    return function (constructor) {
        console.log(value);
        console.log(constructor);
    };
}
var Person2 = /** @class */ (function () {
    function Person2() {
        this.name = "Max";
        console.log('Creating person pbject2...');
    }
    Person2 = __decorate([
        Logger2("Mucahid")
    ], Person2);
    return Person2;
}());
var pers2 = new Person2();
// _ koyarak constructoru yani class i onemsemedigimizi gozardi ettigimizi soyluyoruz.
function WithTemplate(template, hookId) {
    return function (_) {
        var hookEl = document.getElementById(hookId);
        if (hookEl) {
            hookEl.innerHTML = template;
        }
    };
}
var Person3 = /** @class */ (function () {
    function Person3() {
        this.name = "Max";
        console.log('Creating person pbject3...');
    }
    Person3 = __decorate([
        WithTemplate("<h1>My Person Object</h1>", "app")
    ], Person3);
    return Person3;
}());
var pers3 = new Person3();
// Veya constructoru kullanarak classa erisir ve icinden name i aliriz. 
// Any yazmamizin sebebi function olursa .name yazip secemeyiz.
// constructoru bir lcass gibi dusunup once new ile bir degiskene atayip sonra kullaniriz asagidaki gibi.
function WithTemplate2(template, hookId) {
    return function (constructor) {
        var hookEl = document.getElementById(hookId);
        var pers = new constructor();
        if (hookEl) {
            hookEl.innerHTML = pers.name;
        }
    };
}
var Person4 = /** @class */ (function () {
    function Person4() {
        this.name = "Max";
        console.log('Creating person pbject4...');
    }
    Person4 = __decorate([
        WithTemplate2("<h1>My Person Object</h1>", "app")
    ], Person4);
    return Person4;
}());
var pers4 = new Person4();
