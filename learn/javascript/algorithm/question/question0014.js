// ### MERGE SORT
// Buyuk arrayleri 100000 elemanli gibi cok cok daha hizli siralarlar buble, insertion ve selection yontemlerinden
// Time complexity’i o(n2)’den o(n log n)’e gelistirirler
// BOL / BIRLESTIR seklinde calisir detaylar altta.

// [8, 3, 5, 4, 7, 6, 1, 2]
//Once arrayi’mizi tek eleman kalana kadar boluyoruz.
//Daha sonra bolunmus arrayleri birlestiriyoruz sirayla. Once 8 ve 3 ‘u karsilastiriyoruz hangisi kucukse onu first item yapiyoruz hangisi buyukse onu last item yapiyoruz ve 2li arraylerimizi olusturuyoruz.
//Daha sonra bu 2’li array’lerin 1. İtemlarini 3 ve 4 u karsilastiriyoruz. Hangisi kucukse 1. Digerini ikinci yapiyoruz. 2 li arraylerin son itemlarini karsilastiriyoruz hangici kucukse 3. Digerini 4. Yapiyoruz ve arraylerimizi yine birseltiriyoruz. Bu bu sekilde tamamlana kadar devam ediyor.

//[8, 3, 5, 4, 7, 6, 1, 2]
//Yukaridaki array'i mergeSort yontemi ile siralayin.
//bigO with noSwap() o(n) -- without noSwap() o(n2)
// ### YOUR AREA
function merge(arr1, arr2) {}
console.log(mergeSort([8, 3, 5, 4, 7, 6, 1, 2]));

//mergeSort([8, 3, 5, 4, 7, 6, 1, 2]) => merge([3,4,5,8], [1,2,6,7]) => [1,2,3,4,5,6,7,8]

//mergeSort([8, 3, 5, 4]) merge([3,8],[4,5]) => [3,4,5,8]
//mergeSort([8, 3])  merge([8],[3]) => [3,8]
//mergeSort([8])
//mergeSort([3])
//mergeSort([5, 4]) merge([5],[4]) => [4,5]
//mergeSort([5])
//mergeSort([4])

//mergeSort([7, 6, 1, 2]) merge([6,7],[1,2]) => [1,2,6,7]
//mergeSort([7, 6])
//mergeSort([7]) merge([7],[6]) => [6,7]
//mergeSort([6])
//mergeSort([1, 2])
//mergeSort([1]) merge([1],[2]) => [1,2]
//mergeSort([2])

//

//

//

//

//

// ### PSEUDO CODE
//2 tane array olustur. 1 tanesi merge birlestirme olacak, digeri mergeSort yapacak yani bolunmusleri birlestirme siralama yapacak.
// MERGE(arr1, arr2)
//result bos array degiskeni ve x ve y 0'a esit olan 3 degisken olustur
//while dongusu olustur. KOSUL = x < arr1.length ve y < arr2.length diyoruz
//while icinde if arr2[y] > arr1[x] den buyukse arr1[x]'i, yoksa arr2[y]'yi result icine push ediyoruz
//yeni bir while dongusu ve x < arr1.length ise x++ ve result.push(arr1[x])
//yeni bir while dongusu ve y < arr2.length ise y++ ve result.push(arr2[y])
//ve RETURN RESULT
// MERGESORT
//eger arr.length  <= 1 ise arr'yi return yap
//mid adinda let variable'iolustur ve Math.floor ile arr'nin yari uzunluguna esitle
//let left variable i olustur ve mergeSort ile bolerek tekrar cagir. ==> mergeSort(arr.slice(0, mid));
//let right variable i olustur ve mergeSort ile bolerek tekrar cagir. ==> mergeSort(arr.slice(mid));
//ve MERGE metodu ile return yap buda mergeSort ile bolduklerimizi birlestirecek bizim icin

// ### SOLUTION
// function merge(arr1, arr2) {
//   let result = [];
//   let x = 0;
//   let y = 0;

//   while (x < arr1.length && y < arr2.length) {
//     if (arr1[x] < arr2[y]) {
//       result.push(arr1[x]);
//       x++;
//     } else {
//       result.push(arr2[y]);
//       y++;
//     }
//   }

//   while (x < arr1.length) {
//     result.push(arr1[x]);
//     x++;
//   }
//   while (y < arr2.length) {
//     result.push(arr2[y]);
//     y++;
//   }
//   return result;
// }
// function mergeSort(arr) {
//   if (arr.length <= 1) return arr;
//   let mid = Math.floor(arr.length / 2);
//   let left = mergeSort(arr.slice(0, mid));
//   let right = mergeSort(arr.slice(mid));

//   return merge(left, right);
// }
