// ### SLIDING PATTERN 1
// 2. argumende yazan arrayın elemanı kadar toplama yapılınca elde edılebılecek en yuksek skoru veren yan yana olan sayılar.

// Yani ilk ornek icin konusacak olursam
// olursam 2 array elemani toplanacak olacak,
// bu iki eleman yan yana olmali
// ve bu toplam en yuksek skoru vermeli
// 2,8'i bulacagim ve onlari toplatip yazdiracagim.

// maxSubarraySum([1, 2, 5, 2, 1, 5], 2);=> 7
// maxSubarraySum([-2, 0, 1, 3], 2) => 4
// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 3); => 15

// ### YOUR AREA
function maxSubarraySum(arr, int) {}
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2);

//

//

//

//

//

//

// ### PSEUDO CODE
// -infinity ile en dusuk sayiyi bir degiskene ata kiyasmada kullanmak icin
// En yuksek toplami ve gecmis toplami saklama icin maxSum ve tempSum gibi 2 isimde degisken olustur. Degerleri 0 olsun.
// Array'in uzunlugu yani length'i 2. argument'den kisaysa NULL RETURN yap
// Ilk once 2. argument kadar toplamayi yaptigimiz bir loop olusturup maxSum'a esitletip toplatiyoruz.
// tempSum'i maxSum'a esitliyoruz.
// Daha sorna yeni bir loop olusturuyoruz. Bu loop aslinda;
//Daha once toplanmis Ilk loop'u alacak ve bu toplama sebep olmus array elemanlarindan ilkini cikartacak
//Ve daha sonra bir onceki toplama sebep olmus array elemanlarindan bir sonrakini alarak yeniden bir toplama yaparak
//yeni tempSum'i belirleyecegiz.
//Ve daha sonra maxSum = diyerek Math.max(tempSum, maxSum) metodu ile tempSum ve maxSum'u surekli kiyaslayacagiz.
// ve en buyuk sayiyi buluyoruz.
//Ve bu loop length'den istenilen toplama uzunlugu kadar once bitirilmeliki tasma yapmasin.
//Yani en son elemanin saginda baska eleman kalmayacagi icin loopun limiti ayarlanmali

// ### SOLUTION
// function maxSubarraySum(arr, int) {
//   if (arr.length < int) return null;
//   let maxSum = 0;
//   let tempSum = 0;
//   for (let i = 0; i < int; i++) {
//     maxSum += arr[i];
//   }
//   tempSum = maxSum;
//   for (let i = int; i < arr.length; i++) {
//     tempSum = tempSum - arr[i - int] + arr[i];
//     maxSum = Math.max(maxSum, tempSum);
//   }
//   return maxSum;
// }
