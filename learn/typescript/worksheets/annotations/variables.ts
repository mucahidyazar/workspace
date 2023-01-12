//Birkere aşağıdaki gibi tanımlamaları yaptıysak Typescript artık onları öğrenir ve number string gibi değerleri silsekde uygular.
//Sadece lette constta gecerli degil

// const color = "red";
// Variable Declaration = const color
// Variabla İnitialization "red"

//Eger 5 yer
const apples: number = 5;

//Yada
let peace = 10;
peace = 15;

let speed: string = "fast";

let nothingMuch: null = null;
let nothing: undefined = undefined;

let now: Date = new Date();

//Yani renklerden olusan bir string arrayi olustururuz string[] kullanarak
let color: string[] = ["red", "green", "blue"];

let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true];

//CLASSES
class Car {}
let car: Car = new Car();

//OBJECT LITERAL
//Eger y number yerine z number yazarsa y:20 hata verir
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

//FUNCTION
//(i: number) ne tür bir degişken alacağını belirliyoruz fonksiyonun.
//=> void diyerekte hiçbirşey dönmeyeceğini söylüyoruz.
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

const add = (a: number, b: number): number => {
  return a + b; // Eger bunu yazmazsak returnde donen number olma zorunlulugu hata verir
};
function divide(a: number, b: number): number {
  return a / b;
}
const multiple = function(a: number, b: number): number {
  return a * b;
};

//VOID => Fonksiyonun birsey RETURN yapmayacagini soyleriz
// void yazili iken iceride return donersek return yazan yer hata verir.
const logger = (message: string): void => {
  console.log(message);
};

//NEVER => Yani anlami throwdan sonraya yani messageden sonra ya asla bakmayacak yani fonksiyonun sonuna asla ulasamayacagiz.
const throwError = (message: string): never => {
  throw new Error(message);
};

//WITH OBJECTS
const object = {
    date: new Date(),
    weather: "Sunny"
}
const function1 = (object: {date: Date, weather: string}): void {
    console.log(object.date);
    console.log(object.weather);
}
//with ES5
const function2 = ({date, weather}: {date: Date, weather: string}): void => {
    console.log(date);
    console.log(weather);
}




// When to use annotations
// 1) Function that returns the "any" type
// JSON.parse, TYPESCRIPT'te bize her zaman any type olarak döner
const json = '{"x": 10, "y":20}';
const coordinates1 = JSON.parse(json);
console.log(coordinates1);
coordinates1.asdasdsad; //Hata vermez çünkü any type olarak dönüyor

// ANY'i FIXLEMEK
const coordinates2: { x: number; y: number } = JSON.parse(json);
console.log(coordinates2);
coordinates2.sdsadas; //Hata verir çünkü tanımlamalarını yaptım

// 2) When we declare a variable on one line
// and initializate it later
let words = ["red", "green", "blue"];
//Eger boelean'ı tanımlamasaydık any olurdu. Tanımlayarak asagıdakı for dongusunden boolean olarak cıkmasını zorunlu kıldık.
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// 3) Variables whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
// Eger yukarıdakı sekilde olursa numberAboveZero sayıya esitlenmek isteyeceği için hata verecektir.
// Çünkü Typescript boolean olacağını düşünüyor.
// Bunu önlemek için aşağıdaki gibi yapıyor ve TYPE ANNOTATION eklıyoruz asagıdakı gıbı
// | or yada anlamında
let numbers1 = [-10, -1, 12];
let numberAboveZero1: boolean | number = false;

for (let i = 0; i < numbers1.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero1 = numbers[i];
  }
}
