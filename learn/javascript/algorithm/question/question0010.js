// ### NATIVE SEARCH
// 2 string argumenti alan bir function olustur
// 2. stringin 1. string icinde tam olarak kac kere gectigini bul ve yazdir

// ### YOUR AREA
function naiveSearch(long, short) {}
console.log(naiveSearch("lolrie loled", "lol"));

//

//

//

//

//

//

// ### PSEUDO CODE
// Eslesmeleri hesaplamak icin match adinda valuesi 0 olan bir degisken olustur
// long uzerinden loop yap ve her karakteri kontrol edebilelim
// long loopu icinde short uzerinden loop yap ve long'un her karakterini short'un her karakteri ile kontrol edebilelim
// Artik longun bir karakterini shortun tum karakterleri ile kontrol ediyoruz

// ### SOLUTION
// function naiveSearch(long, short) {
//   let match = 0;
//   for (let x = 0; x < long.length; x++) {
//     for (let y = 0; y < short.length; y++) {
//       if (short[y] !== long[x + y]) break;
//       if (y === short.length - 1) match++;
//     }
//   }
//   return match;
// }
