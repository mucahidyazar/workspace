// ### LINEAR SEARCH
// binarySearch aslinda DIVIDE and CONCQUER yani BOL PARCALA ve FETHET patterninde kullandigimiz yontemdir. Example File=> question0007.js
// Integerlardan olusan sirali bir array ve aranan sayi argument olarak girilmeli
// Middle point variable'i belirle ve array'de o elemani al
// ve o eleman sayidan buyukse middle point ve arrayin sonuna kadar kalan kisimda ayni metodu sayiyi bulana kadar uygula
// kucukse middle point ve arrayin basina yani 0 indexine kadar yontemi tekrar tekrar uygulayarak sayiyi bul

// ### YOUR AREA
function binarySsearch(arr, int) {}
binarySsearch([1, 2, 5, 8, 9, 10, 15, 26, 28, 33], 2);

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
// function binarySearch(arr, par2) {
//   let left = 0;
//   let right = arr.length - 1;
//   let middle = Math.floor((left + right) / 2);
//   while (arr[middle] !== par2 && left <= right) {
//     if (par2 < arr[middle]) {
//       right = middle - 1;
//     } else {
//       left = middle + 1;
//     }
//     middle = Math.floor((left + right) / 2);
//   }
//   return arr[middle] === par2 ? middle : -1;
// }
