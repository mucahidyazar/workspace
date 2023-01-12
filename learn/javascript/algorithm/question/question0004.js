// ### MULTIPLE POINTERS EXAMPLE 1
//Integerslardan siralanmis array alan bir fonksiyon olustur.
//Bu fonksiyon toplamlari 0 olan ilk iki sayiyi bulmali.
//HINT => 2 pointer variable olustur ve bunlari karsilastirarak coz.
//best bigO => o(n) time=>o(1) -- naive bigO => o(n2) time=>o(1)
// sumZero([-3, -2, -1, 0, 1, 2, 3]);; => [-3,3]
// sumZero([-2, 0, 1, 3]);; => udnefined
// sumZero([1, 2, 3]);; => udnefined

// ### YOUR AREA
function sumZero(arr) {}

sumZero([-3, -2, -1, 0, 1, 2, 3]);

//

//

//

//

//

//

// ### PSEUDO CODE
// 2 tane variable olustur birisi arrayin ILK digeri SON elemani.
// WHILE dongusune sok (ornek left < right'dan yani multiple pointerlar)
// basindan ve sonundaki sayiyi topla dongude
// toplam 0'sa o iki sayiyi don
// 0'dan buyukse right pointer'i bir sola
// 0'dan kucukse left pointer'i bir saga KAYDIR

// ### SOLUTION
// function sumZero(arr) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     let sum = arr[left] + arr[right];
//     if (sum === 0) {
//       return [arr[left], arr[right]];
//     } else if (sum > 0) {
//       right--;
//     } else if (sum < 0) {
//       left++;
//     }
//   }
//   return false;
// }
