var nameVAr = 'Andrew';
nameVAr = 'Mike';
var nameVar = 'Mike';
console.log('nameVar', nameVAr);



//LET
let nameLet = 'Jen';
// Yeniden atama yani reasign yapilabilir.
nameLet = 'Julie';

// Yeniden tanimlama yani redefine yapilamaz.
//let nameLet = 'Mucahid' 
//gibi yeniden tanimlamaya kalkarsak crach hatasi aliriz.
console.log('nameLet', nameLet);



// CONST
const nameConst = 'Frank';

// Yeniden atama yani reasign yapilamaz.
//nameConst = 'Alie';

// Yeniden tanimlama yani redefine yapilamaz.
//const nameConst = 'Frank';

console.log('nameConst', nameConst);



//Baska Scopelar icindeki degerleri kullanamayiz scope disinda
//Asagida petName ister var ister let ister const ile tanimlansin yinede asagidaki gibi disardan ulasmaya calisirsak ayni hatayi alriiz.
function getPetName(){
    var petName = 'Hal';
    return petName;
}
getPetName();

//YANLIS
//console.log(petName)

//DOGRU
const petName = getPetName();
console.log(petName)



//BLOCK SCOPING
var fullName = 'Mucahid Yazar';
if(fullName){
    var firstName = fullName.split(' ')[0]
    console.log(firstName);
}

//Iste burada if in bir block scoping oldugunu bilmemiz lazim yani firstName aslinda GlobalScoping de tanimlaniyor. Ve ona disarda erisebiliriz asagidaki gibi.
console.log(firstName);
//Fakat eger firstName CONST yada LET ile tanimlanmis olsaydi BLOCK disinda onu kullanamazdik.

//Fakat LET i once block disinda tanimlayi, sonra iceride yeniden reasign yani deger atamasi yapsaydin hem iceride hemde disarida console.log yapip 2 kere cikti alabilirdim.
// var fullName = 'Mucahid Yazar';
// let firstName;
// if(fullName){
//     firstName = fullName.split(' ')[0]
//     console.log(firstName);
// }
// console.log(firstName);