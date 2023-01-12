// ### FREQUENCY QUESTION
//Iki array alan bir fonksiyon olusturun. Ve bu array asagidaki kosula gore bize TRUE yada FALSE donsun.
//Eger 2. array'de 1. array'dekilerin hepsinin karesi bulunuyorsa TRUE yoksa FALSE donsun.
//best bigO => o(n) // naive bigO = o(n2)
// console.log(charCount([1,2,3], [1,4,9])); => TRUE

// ### YOUR AREA
function same(arr1, arr2) {}

//

//

//

//

//

//

// ### PSEUDO CODE
// 1. ve 2. arraylerin lengthlerini kontrol et esit degilse FALSE don
// 2 Obje olustur ve bunlarin icine arraydeki elemanlarin hangisinden kac tane oldugunu kaydet. Ornek a:1 b:3 gibi.
// 1. arraydekilerin **2 yani squarelerinin eleman olarak 2. arrayde olup olmadigini kontrol et, eksik varsa RETURN FALSE don.
// 1. arraydeki elemanlarin kac tane oldugu ile, 2. array'deki KARELERIININ SQUARE lerinin sayilarinin esit oldugundan emin ol. Yani bir tane 2 varsa bir tane 4 olmali.
// Bunlarin disindakiler TRUE donsun.

// ### SOLUTION
// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   let frequencyCounter1 = {};
//   let frequencyCounter2 = {};

//   for (let val of arr1) {
//     frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
//   }
//   for (let val of arr2) {
//     frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
//   }

//   for (let key in frequencyCounter1) {
//     if (!(key ** 2 in frequencyCounter2)) {
//       return false;
//     }
//     if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
//       return false;
//     }
//   }
//   return true;
// }
