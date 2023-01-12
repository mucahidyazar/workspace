// ### MULTIPLE POINTERS EXAMPLE 2
//Integerslardan siralanmis array alan bir fonksiyon olustur.
//Bu fonksiyon toplamlari 0 olan ilk iki sayiyi bulmali.
//HINT => yan yana 2 pointer variable olustur ve bunlari karsilastirarak coz.
//best bigO => o(n)
// countUniqueValues([1,1,1,1,2]) => 2
// countUniqueValues([-2, 0, 1, 3]) => 4
// countUniqueValues([1, 2, 3, 3, 3, 4, 4, 4, 4]) => 4

// ### YOUR AREA
function countUniqueValues(arr) {}
countUniqueValues([-3, -2, -1, 0, 1, 2, 3]);

//

//

//

//

//

//

// ### PSEUDO CODE
// Array uzunlugu LEGNTH'i 0 ise 0 RETURN yap
// count degiskeni olustur ve uniqueleri bununla say
// arrayin 1. elemanini tutacak orn newValue adinda bir degisken olustur.
// Loop olustur ve bu variable'i, arrayin 2. elemanindan baslayarak karsilastir compare et.
// Ayni degilse countu artir ve newValue 'yi arrayin ayni olmayan bu elemani yap

// ### SOLUTION
// function countUniqueValues(arr) {
//   if (arr.length === 0) return 0;
//   let count = 0;
//   let value = arr[0];

//   for (let el of arr) {
//     if (value !== el) {
//       count++;
//       value = el;
//     }
//   }
//   return count;
// }

// function countUniqueValues(arr) {
//   let total = 1;
//   let first = 0;
//   let last = 1;
//   while (last < arr.length) {
//     if (arr.length === 0) {
//       total = 0;
//       return total;
//     } else if (arr[first] !== arr[last]) {
//       total++;
//       first = last;
//       last++;
//     } else {
//       last++;
//     }
//   }
//   console.log(total);
// }
// countUniqueValues([1, 1, 1, 1, 2, 2]);
