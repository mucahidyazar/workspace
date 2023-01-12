// ### QUICK SORT
// [5,3,4,6,7]
// Once bir sayi seceriz. Ornegin 5 asagidaki ornekteki gibi.
// Daha sonra 5’den kucukleri 5’in soluna, buyukleri sagina alacak sekilde yerlestiririz. => [4,3,5,6,7]
// Daha sorna sol tarafta yine bir sayi secer kucukleri soluna buyukleri sagina yerlestiririz. Daha sonra aynini sag tarafta yapariz. Ve bu sekilde siralamayi yapariz.

//[3, 1, 2, 3, 12, 88, 95]
//Yukaridaki array'i quickSort yontemi ile siralayin.

// ### YOUR AREA
function pivot(arr, left = 0, right = arr.length - 1) {
  function swap(array, x, y) {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
  }

  let pivot = arr[left];
  let swapIdx = left;

  for (let a = left + 1; a <= right; a++) {
    if (pivot > arr[a]) {
      swapIdx++;
      swap(arr, swapIdx, a);
    }
  }
  swap(arr, left, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}
console.log(quickSort([3, 1, 2, 3, 12, 88, 95]));

//

//

//

//

//

//

// ### PSEUDO CODE
// pivot functionu olusturuyoruz ve bu pivot function bize her defasinda swapIndex donderecek
// Bu swapIndex bizim Arrayimizin sagindaki ve solundaki alanlarimizi belirlememize yardimci olacak.
// Bu swapIndexi quickSort functionu ile surekli donderecegiz lef pointi right pointinden kucuk oldugu muddetce

// ### SOLUTION
//Pivot Helper
// function pivot(arr, start = 0, end = arr.length - 1) {
//   function swap(array, i, j) {
//     let temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//   }

//   let pivot = arr[start];
//   let swapIdx = start;

//   for (let i = start + 1; i <= end; i++) {
//     if (pivot > arr[i]) {
//       //Buradaki swap islemi ise pivotumuzundan kucukleri saginda siralamak icin yapilan swap islemidir.
//       swapIdx++;
//       swap(arr, swapIdx, i);
//     }
//   }

//   //Bu swat ise ilk basta compare yapmak icin sagina soluna alacagimiz itemlari belirlemek icin kullandigimiz sayi bunu ortaya almak icin swap islemini burda yapiyoruz.
//   //Yani pivotumuz icin swap islemidir.
//   swap(arr, start, swapIdx);

//   return swapIdx;
// }

// function quickSort(arr, left = 0, right = arr.length - 1) {
//   if (left < right) {
//     let pivotIndex = pivot(arr, left, right);
//     //leftSideSorting
//     quickSort(arr, left, pivotIndex - 1);
//     //rightSideSorting
//     quickSort(arr, pivotIndex + 1, right);
//   }
//   return arr;
// }
