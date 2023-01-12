// ### INSERTION SORT
// Arrayin 2. elementini secerek basla
// Ve bu elemani bir onceki ile karsilastir ve gerekliyse yer degistir
// Ve daha sonra 3. elemani al bir onceki olan ile karsilastir. gerekliyse 2. ile yer degistir
// Ve sonra tekrar 1. ile karsilastir. Gerekli ise 1. ile yer degistir degilse 2. olarak yerlestir.
// Ve boyle devam et array bitene kadar

//[3, 1, 2, 3, 12, 88, 95]
//Yukaridaki array'i insertionSort yontemi ile siralayin.
//bigO o(n2)
// ### YOUR AREA
function insertionSort(arr) {
  let currentVal;
  for (let x = 1; x < arr.length; x++) {
    currentVal = arr[x];
    let y;
    for (y = x - 1; y >= 0 && arr[y] > currentVal; y--) {
      arr[y + 1] = arr[y];
    }
    arr[y + 1] = currentVal;
  }
  return arr;
}
console.log(insertionSort([3, 1, 2, 3, 12, 88, 95]));

//

//

//

//

//

//

// ### PSEUDO CODE
// currentValue adinda bir degisken olustur function icinde
// Altinda bir loop(x) olustur. 1'den baslasin ve arr.length'e kadar
// currentVal' arr[x]'e esitle
// Yeni bir loop(y) olustur. i-1'den basla y>=0'dan kosulu ve arr[y]>currentVal kosulunu koy. Iki kosulda uymali yoksa calismaz
// Bu loopun icinde arr[y+1] = arr[y] deriz ve yine bu loopun hemen altinda arr[y+1] = currentVal yapariz
// Ve arr'yi doneriz.

// ### SOLUTION
function insertionSort(arr) {
  var currentVal;
  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

insertionSort([2, 1, 9, 76, 4]);

// ### MYSOLUTION
// function insertion(arr) {
//   for (let x = 0; x < arr.length; x++) {
//     let temp;
//     for (let y = x; y < arr.length; y++) {
//       if (arr[y] < arr[y - 1]) {
//         temp = arr[y];
//         arr[y] = arr[y - 1];
//         arr[y - 1] = temp;
//       }
//     }
//     console.log(arr);
//   }
//   return arr;
// }
