// String olan bir arraye Typescriptte number put lamaya calisirsak hata aliriz
//Burada typescript otomatik olarak arrayimizi kontrol edip bunun bir string arrayi oldugunu bize soyleyecektir.
const carMakers1 = ["ford", "toyota", "chevy"];
//Bos iken anlayamayacagi icin bunu biz asagidaki gibi belirtmemiz gerekiyor.
//Istersek aynisini yukaridada belirtebilirdik
const carMakers2: string[] = [];

//Burasida ayni sekilde
const dates1 = [new Date(), new Date()];
const dates2: Date[] = [];

//Dizi icinde dizi
//Typescript bize arrays1'in dizi icinde string dizilere sahip bir dizi oldugunu soyleyecektir.
const arrays1 = [["Ali"], ["Veli"]];
//Veya biz bu tur bir diziyi su sekilde mecbur kilariz
const array2: string[][] = [];

// car ve myCard de string olarak anlanir typescript tarafindan. Cunku bu diziler bu kuralla olusturuldu yukarida.
const car = carMakers1[0];
const myCar = carMakers1.pop(); //Dizinin son elemanini siler

carMakers1.push("Ada"); //DOGRU
carMakers1.push(22); //YANLIS => Cunku bu dizi bir string dizisi

//MAP - FOREACH - REDUCE
//Typescripti asagidaki gibide kullanabiliriz.
carMakers1.map((map: string): string => {
  return car;
});

//Flexible Types
// Bu array typescript tarafindan (string | date)[] olarak algilanacaktir
const importantDates1 = [new Date(), "2030-10-10"];

//Yada bu sekilde biz zorunlu kilabiliriz. Bu sayede diziye push etmeye kalkarsak string ya date push edebiliriz sadece number push lamaya calisrsak hata aliriz.
const importantDates2: (string | Date)[] = [];
importantDates2.push("String"); //DOGRU
importantDates2.push(new Date()); //DOGRU
importantDates2.push(25); //YANLIS
