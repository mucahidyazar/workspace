// ### SELECTION SORT
// Selection Sort ile once kucuk sayilar siralanir
// Kucuk sayilar karsilastirilir ve isaretlenir, yer degistirme en son yapilir.

// [5,3,4,1,2]
// Once 5 ve 3 u karsilastiririz hangisi kucuk diye. 3 kucuk oldugu icin isaretlenir.
// Daha sonra 3 un bir sagina gecilir 3 mu kucuk 4 mu diye bakilir ve 3 hale kucuk oldugu icin isaretleme degismez.
// Daha sonra bir sagina gecilir 1 daha kucuk oldugu icin 1 isaretlenir ve 3 un isareti kalkar.
// Daha sonra 1 ve bir sagindaki karsilastirilir 1 hala en kucuk oldugu icin 1 isaretli kalir ve dongu biter
// Ve bir i en basa dongunun basladigi sorgulanan elemanin onune yerlestiririz. Ve dongu tekrar baslar bu sefer ilk bastaki ile degilde 2. ve 3. siradaki ile yani indexi 1 ve 2 olanla sorgulamaya baslariz.

//[3, 1, 2, 3, 12, 88, 95]
//Yukaridaki array'i selectionSort yontemi ile siralayin.
//bigO o(n2)
// ### YOUR AREA
function selectionSort(arr) {}
console.log(selectionSort([3, 1, 2, 3, 12, 88, 95]));

//

//

//

//

//

//

// ### PSEUDO CODE
// arr.length'den geriye dogru sayan loop(x) olustur
// lowest degiskeni tut ve loopun'x ine esitle
// ikinci bir loop(y) olustur icinde ve y sini x+1 'e esitle
// if kosulu olustur bu loopun icinde ve arr[y] nin arr[lowest]'dan kucuk olup olmadigini sorgula
// Kucukse lowest = y yap. (Iste isaretleme denilen sey bir nevi bu oluyor)
// 2. loopun disina cik ve alt satirina x'in lowest'a hala esit olmadigini if sorgusu ile sorgula. Ilk basta esitledigimiz icin
//eger esit degilse bu if sorgusu calisacak ve en kucuk sayi olarak isaretlenen lowest'i ilk basa alacak
//let temp = arr[x], arr[x]=arr[lowest], arr[lowest]=temp
// Ve return olarak arr'yi donder

// ### SOLUTION
// function selectionSort(arr) {
//   for (let x = 0; x < arr.length; x++) {
//     let lowest = x;
//     for (let y = x + 1; y < arr.length; y++) {
//       if (arr[y] < arr[lowest]) {
//         lowest = y;
//       }
//     }
//     if (lowest !== x) {
//       let temp = arr[x];
//       arr[x] = arr[lowest];
//       arr[lowest] = temp;
//     }
//   }
//   return arr;
// }
