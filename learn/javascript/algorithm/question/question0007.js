// ### DIVIDE and CONQUER - PARCALA/BOL ve FETHET
// Asagidaki orneklerde ki gibi unque ve sirali elemanlari olan bir array'de
// 2. Argument olarak girilen sayinin
// 1. Argument olarak girilen array’deki index’ini bulmamiz gerekiyor.
// best bigO = o(log n)
// search([1,2,5,8,15,25], 2) =>1
// search([-2,0,1,3], -2) =>0
// search([1,2,3,4,5,7,9,10,25,65,88,99], 99) =>11

// ### YOUR AREA
function search(arr, int) {}
search([1, 2, 5, 8, 9, 10, 15, 26, 28, 33], 2);

//

//

//

//

//

//

// ### PSEUDO CODE
// min ve max adinda iki degisken olustur. => min=0 max=arr.length-1
// min<= max while dongusu kur.
// middle degiskeni olustur min ve max 'i topla 2'ye bol ve Math.floor ile asagiya yuvarla
// currentElement degiskenini = array[middle] yap
// currentElement 2. argument'den kucukse min value middle + 1 olsun
// currentElement 2. argument'den buyukse max value middle - 1 olsun
// else ise middle'i return yap
// if else disinda ise -1 return yap

// ### SOLUTION
// function search(arr, int) {
//   let min = 0;
//   let max = arr.length;

//   while (min <= max) {
//     let middle = Math.floor((min + max) / 2);
//     let currentElement = arr[middle];

//     if (currentElement < int) {
//       min = middle + 1;
//     } else if (currentElement > int) {
//       max = middle - 1;
//     } else {
//       return middle;
//     }
//   }

//   return -1;
// }
