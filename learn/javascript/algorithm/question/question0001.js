// ### QUESTION
//Iki fonksiyon olustur.
//Fonksiyonlardan birisi charCode'lerini kontrol etsin, digeri buna gore hangi chaCode'li karakterden kac tane var hesaplasin ve bir obje icinde verileri toplasin.
// console.log(charCount("Your")); => { o: 1, r: 2, u: 2, y: 1 }

// ### YOUR AREA
function charCount() {}

function isAlphaNumeric(char) {}

//

//

//

//

//

//

//

// ### SOLUTION
// function charCount(str) {
//   let result = {};
//   for (let char of str) {
//     if (isAlphaNumeric(char)) {
//       result[char] = ++result[char] || 1;
//     }
//   }
//   return result;
// }

// function isAlphaNumeric(char) {
//   let code = char.charCodeAt(0);
//   if (
//     !(code > 47 && code < 58) && // numeric (0-9)
//     !(code > 64 && code < 91) && // upper alpha (A-Z)
//     !(code > 96 && code < 123)
//   ) {
//     return false;
//   }
//   return true;
// }
// console.log(charCount("Your PIN number is 1234!"));
//Result should be
/*
  {
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    b: 1,
    e: 1,
    i: 2,
    m: 1,
    n: 2,
    o: 1,
    p: 1,
    r: 2,
    s: 1,
    u: 2,
    y: 1,
  }
*/
