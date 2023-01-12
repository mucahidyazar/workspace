// ### BUBLE SORT
// Buble Sort ile Once buyuk sayilar siralanir.
// Buyuk sayilar karsilastirilir ve yer degistirilir.
// [23, 45, 6, 12, 13]
// Yukaridaki gibi bir arrayimiz oldugunu dusunun.
// Ilk once 23 ile 45 i karsilastiririz 23 45'den buyukmu degil o yuzden 23'u geceriz.
// Simdi45 ile 6 yi karsilastiririz 45 buyuk oldugu icin bir saga kaydiririz 6'yi 45'in arkasina koyariz. => [23, 6, 45, 12, 13]
// Bu bu sekilde devam eder 45'i yerlestirdikten sonra 23'e tekrar doneriz ve yine sirayla karsilastirmaya baslariz. Ve son hali bu sekilde olur. => [6, 12, 13, 23, 45]

//[3, 1, 2, 3, 12, 88, 95]
//Yukaridaki array'i bubleSort yontemi ile siralayin.
//bigO with noSwap() o(n) -- without noSwap() o(n2)
// ### YOUR AREA
function bubleSort(arr) {}
console.log(bubleSort([3, 1, 2, 3, 12, 88, 95]));

//

//

//

//

//

//

// ### PSEUDO CODE
// Array ile uzunlugundan geriye sarip bitecek sekilde for(x) loop olustur.
// Ve burada noSwap degiskeni olusturup true yapiyoruz
// Ve bunun altina bir for(y) loopu daha kuracagiz
// Bu for(y) loopuyla ayni scopa yani altina if(!noSwap) break yapip bir ust scopedaki loopdan cikacagiz swap false olunca ustteki aradaki loop
// Bu swaplarin arasindaki 2. loop'u ise uzunluk olarak geri saran array uzunlugunun 1 eksigi olarak ayarliyacagiz
// VE loop(y) icinde if ile  arr[y]'si yani ilk elemanini ile arr[y+1] ile 2.elemanini sorgulayarak basliyacagiz. Tabiki y bir artacak diger loop'da ve diger satira gecebilecegiz
// If icinde ilk loop'da degerleri swap edebilmek icin yani yer degistirebilmek icin temp degiskenini olusturuyoruz.
// if(arr[y] > arr[y+1]) { let temp = arr[y], arr[y]=arr[y+1], arr[y+1]=temp } diyerek degisikligi yapiyoruz.
// Ve if icine kosul saglanip girildigi icin noSwap= false yaparak ikinci loopun donguyu bitirmesini ve ilk loopun 2. donguye gecmesini sagliyoruz.
// Ve en function icin return ile siralanmis arrayimizi donuyoruz.

// ### SOLUTION
// function bubleSort(arr) {
//   for (let x = arr.length; x > 0; x--) {
//     let noSwap = true;
//     for (let y = 0; y < arr.length - 1; y++) {
//       if (arr[y] > arr[y + 1]) {
//         let temp = arr[y + 1];
//         arr[y + 1] = arr[y];
//         arr[y] = temp;
//         noSwap = false;
//       }
//     }
//     if (!noSwap) break;
//   }
//   return arr;
// }
