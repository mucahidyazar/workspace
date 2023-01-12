//EXPORT ve IMPORT ORNEKLERI

//import './utils'; // CIKTI => 'utils.js is running'
//Bu sekilde import ile sadece dosyayi calistiririz icindekilere ulasamayiz.
//Icindekilere ulasmamiz icin isimlendirilmis yani NAMED EXPORT'lari isimleriyle import etmek gerekmektedir.

//2. 3. 4. gibi daha fazla IMPORT'larda da EXPORT'ta oldugu gibi virgul ve sonrasinda eklenir.
import { square, add, minus } from './utils';

console.log(square(5)); // CIKTI => 25


//CHALLENGE
//DEFAULT EXPORT'lar {} suslu parantezler disinda cagirilirlar ASAGIDAKI isSenior gibi
import isSenior, { isAdult, canDrink } from './utils';
console.log(isAdult(45)); // CIKTI => true
console.log(canDrink(30)); // CIKTI => true
console.log(isSenior(25)); // CIKTI => true

//DEFAULT EXPORT'lar yada asagidaki gibi de IMPORT edilebilir.
import isSenior from './utils';
//Veya dEFAULT EXPORT yerine istedigimiz her hangi bir isimde kullanabiliriz asagidaki gibi. Cunku program biliyor DEFAULT EXPORT hangisi sadece 1 TANE oldugu icin.
import istedigimHerHangiBirSey from './utils';