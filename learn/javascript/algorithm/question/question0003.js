// ### ANAGRAM
//Iki string argument alan bir fonksiyon olustur.
//Iki string ayni uzunlukta LENGTH'de olmali.
//Ilk stringde olan elemanlarin hepsi 2. string icindede varsa RETURN TRUE donsun yoksa FALSE
//best bigO => o(n)
// console.log(validAnagram('ada', 'daa')); => TRUE
// console.log(validAnagram('anagram', 'margana')); => TRUE
// console.log(validAnagram('adem', 'adek')); => FALSE
// console.log(validAnagram('adem', 'ademe')); => FALSE

// ### YOUR AREA
function validAnagram(str1, str2) {}

validAnagram("anagram", "nagaram");

//

//

//

//

//

//

// ### PSEUDO CODE
// 1. ve 2. argumentlerin lengthlerini kontrol et esit degilse FALSE don
// 1. stringin icindeki kelimeleri unique olarak bir obje icinde tut ve kac tane olduklarini hesapla
// 2. stringi loop olarak don ve 1. stringi kaydettigin objenin icinde olup olmadigini sorgula
// yoksa FALSE return yap varsa Obje icinden sayisini dusur.
// Sorun yoksa function sonu TRUE return yap

// ### SOLUTION
// function validAnagram(first, second) {
//   if (first.length !== second.length) {
//     return false;
//   }

//   const lookup = {};

//   for (let i = 0; i < first.length; i++) {
//     let letter = first[i];
//     // if letter exists, increment, otherwise set to 1
//     lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
//   }
//   console.log(lookup);

//   for (let i = 0; i < second.length; i++) {
//     let letter = second[i];
//     // can't find letter or letter is zero then it's not an anagram
//     if (!lookup[letter]) {
//       return false;
//     } else {
//       lookup[letter] -= 1;
//     }
//   }

//   return true;
// }
